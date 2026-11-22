"use client";
// app/virtual-keyboard/page.tsx
// An unlisted page (/virtual-keyboard): a playable piano. Play it with the
// computer keyboard or by clicking/tapping keys. Sound is generated in the
// browser with the Web Audio API (no audio files needed).
//
// FIXES in this version (see the numbered comments in the code):
//  1. First click/tap made no sound (audio started too late; never on touch).
//  2. Black keys were drawn in the wrong places.
//  3. Pressing several keys at once could drop notes (stale React state).
//  4. Touch handling threw "Unable to preventDefault" errors in the console.
//  5. Notes clicked when released; shortcuts fired on Ctrl/Cmd+key.
//  6. Sounds kept playing after leaving the page / switching tabs.

import type React from "react";
import { useState, useEffect, useRef, useCallback } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

// ---------------------------------------------------------------------------
// Key layout: note name, octave, the computer-keyboard key that plays it, and
// whether it is a black key. Order matters: it is left-to-right on the piano.
// ---------------------------------------------------------------------------
const KEYS = [
  { note: "C", octave: 4, key: "a", isBlack: false },
  { note: "C#", octave: 4, key: "w", isBlack: true },
  { note: "D", octave: 4, key: "s", isBlack: false },
  { note: "D#", octave: 4, key: "e", isBlack: true },
  { note: "E", octave: 4, key: "d", isBlack: false },
  { note: "F", octave: 4, key: "f", isBlack: false },
  { note: "F#", octave: 4, key: "t", isBlack: true },
  { note: "G", octave: 4, key: "g", isBlack: false },
  { note: "G#", octave: 4, key: "y", isBlack: true },
  { note: "A", octave: 4, key: "h", isBlack: false },
  { note: "A#", octave: 4, key: "u", isBlack: true },
  { note: "B", octave: 4, key: "j", isBlack: false },
  { note: "C", octave: 5, key: "k", isBlack: false },
  { note: "C#", octave: 5, key: "o", isBlack: true },
  { note: "D", octave: 5, key: "l", isBlack: false },
  { note: "D#", octave: 5, key: "p", isBlack: true },
  { note: "E", octave: 5, key: ";", isBlack: false },
];

type PianoKey = (typeof KEYS)[number];

const NOTE_NAMES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

// Equal-temperament maths: A4 = 440 Hz, each semitone is a factor of 2^(1/12).
function noteToFrequency(note: string, octave: number) {
  const semitonesFromA4 =
    NOTE_NAMES.indexOf(note) - NOTE_NAMES.indexOf("A") + (octave - 4) * 12;
  return 440 * Math.pow(2, semitonesFromA4 / 12);
}

const WHITE_KEYS = KEYS.filter((k) => !k.isBlack);
const BLACK_KEYS = KEYS.filter((k) => k.isBlack);

// FIX 2: a black key sits on the line between two white keys. Count how many
// white keys come before it in KEYS and place it that many white-key-widths
// from the left. Uses the CSS variable so it also works on small screens
// (the old code hard-coded 65px and indexed into the list that included black
// keys, so every black key landed in the wrong place).
function blackKeyLeft(key: PianoKey) {
  const whitesBefore = KEYS.slice(0, KEYS.indexOf(key)).filter(
    (k) => !k.isBlack
  ).length;
  return `calc(${whitesBefore} * var(--white-key-width))`;
}

// Label shown on each key (note name + the keyboard letter that plays it).
// Declared outside the page component so React doesn't re-create it each render.
function KeyLabel({ k }: { k: PianoKey }) {
  return (
    <div className="piano-key-label">
      <div className="font-medium">
        {k.note}
        {k.octave}
      </div>
      <div className="mt-1 text-[10px] uppercase text-muted-foreground">
        {k.key}
      </div>
    </div>
  );
}

export default function VirtualKeyboardPage() {
  const [activeKeys, setActiveKeys] = useState<Set<string>>(new Set()); // keys shown as pressed
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);

  const audioContext = useRef<AudioContext | null>(null);
  // Currently sounding notes: key -> its oscillator and volume control.
  const voices = useRef<Map<string, { osc: OscillatorNode; gain: GainNode }>>(
    new Map()
  );
  // Keys currently held by a mouse/finger (so releasing the mouse only stops those).
  const pointerHeld = useRef<Set<string>>(new Set());

  // FIX 3: event listeners are attached once and read the latest volume/mute
  // from refs, instead of capturing old copies of state.
  const volumeRef = useRef(volume);
  const mutedRef = useRef(isMuted);
  useEffect(() => {
    volumeRef.current = volume;
  }, [volume]);
  useEffect(() => {
    mutedRef.current = isMuted;
  }, [isMuted]);

  // FIX 1: create (or wake up) the AudioContext at the moment a note is played.
  // Browsers only allow audio after a user gesture, and the gesture that
  // matters here is the key press/tap itself. The old code created it on
  // "click"/"keydown" listeners, which run AFTER mousedown (so the first
  // mouse note was silent) and never run on touch screens.
  const getAudio = () => {
    if (!audioContext.current) {
      const Ctx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      audioContext.current = new Ctx();
    }
    if (audioContext.current.state === "suspended") {
      void audioContext.current.resume();
    }
    return audioContext.current;
  };

  // Start a note.
  const playNote = useCallback((key: PianoKey) => {
    if (voices.current.has(key.key)) return; // already sounding

    // Show the key as pressed (functional update = always uses the latest set).
    setActiveKeys((prev) => new Set(prev).add(key.key));

    if (mutedRef.current) return; // muted: highlight only

    const ctx = getAudio();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(noteToFrequency(key.note, key.octave), ctx.currentTime);

    // FIX 5: quick fade-in. 0.3 leaves headroom so chords don't distort.
    const level = volumeRef.current * 0.3;
    gain.gain.setValueAtTime(0, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(level, ctx.currentTime + 0.01);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    voices.current.set(key.key, { osc, gain });
  }, []);

  // Stop a note.
  const stopNote = useCallback((key: PianoKey) => {
    setActiveKeys((prev) => {
      if (!prev.has(key.key)) return prev;
      const next = new Set(prev);
      next.delete(key.key);
      return next;
    });

    const voice = voices.current.get(key.key);
    const ctx = audioContext.current;
    if (voice && ctx) {
      // FIX 5: short fade-out instead of cutting the wave mid-cycle (which
      // produces an audible "click").
      const now = ctx.currentTime;
      voice.gain.gain.cancelScheduledValues(now);
      voice.gain.gain.setValueAtTime(voice.gain.gain.value, now);
      voice.gain.gain.linearRampToValueAtTime(0, now + 0.06);
      voice.osc.stop(now + 0.07);
      voices.current.delete(key.key);
    }
  }, []);

  // Stop everything (used on tab switch and on leaving the page).
  const stopAll = useCallback(() => {
    KEYS.forEach((k) => stopNote(k));
    pointerHeld.current.clear();
  }, [stopNote]);

  // Computer-keyboard input.
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // FIX 5: ignore auto-repeat and shortcuts such as Ctrl+A / Cmd+W.
      if (e.repeat || e.ctrlKey || e.metaKey || e.altKey) return;
      const key = KEYS.find((k) => k.key === e.key.toLowerCase());
      if (key) playNote(key);
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      const key = KEYS.find((k) => k.key === e.key.toLowerCase());
      if (key) stopNote(key);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    // FIX 6: if the tab loses focus we never get the "keyup", so stop notes.
    window.addEventListener("blur", stopAll);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("blur", stopAll);
      stopAll();
      // FIX 6: release the audio device when leaving the page.
      void audioContext.current?.close();
      audioContext.current = null;
    };
  }, [playNote, stopNote, stopAll]);

  // FIX 4: Pointer Events replace separate mouse + touch handlers. They cover
  // mouse, finger and pen, and don't need preventDefault (React registers
  // touchstart as "passive", so calling preventDefault there logged errors).
  // The `touch-none` class on each key stops the page scrolling while playing.
  const pointerProps = (key: PianoKey) => ({
    onPointerDown: (e: React.PointerEvent) => {
      if (e.pointerType === "mouse" && e.button !== 0) return; // left button only
      pointerHeld.current.add(key.key);
      playNote(key);
    },
    onPointerUp: () => {
      if (pointerHeld.current.delete(key.key)) stopNote(key);
    },
    onPointerLeave: () => {
      if (pointerHeld.current.delete(key.key)) stopNote(key);
    },
    onPointerCancel: () => {
      if (pointerHeld.current.delete(key.key)) stopNote(key);
    },
  });

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container py-12 md:py-16 flex-1">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Title + instructions */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-rose-400 dark:from-rose-400 dark:to-rose-200">
              Virtual Piano Keyboard
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Play music with your computer keyboard or by clicking/tapping the
              keys. Use keys A-L and W-P for the piano notes.
            </p>
          </div>

          {/* Mute button + volume slider */}
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex items-center space-x-2 bg-white/50 dark:bg-white/5 p-3 rounded-lg backdrop-blur-sm shadow-sm">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsMuted(!isMuted)}
                aria-label={isMuted ? "Unmute" : "Mute"}
                className="hover:bg-rose-100 dark:hover:bg-rose-900/50 transition-colors"
              >
                {isMuted ? (
                  <VolumeX className="h-5 w-5" />
                ) : (
                  <Volume2 className="h-5 w-5" />
                )}
              </Button>
              <div className="flex flex-col gap-1">
                <Label htmlFor="volume" className="text-sm font-medium">
                  Volume
                </Label>
                <Slider
                  id="volume"
                  min={0}
                  max={1}
                  step={0.01}
                  value={[volume]}
                  onValueChange={(value) => setVolume(value[0])}
                  disabled={isMuted}
                  className="w-32"
                />
              </div>
            </div>
          </div>

          {/* The piano */}
          <div className="piano-container relative">
            <div className="absolute inset-0 bg-gradient-to-b from-rose-100/50 to-rose-50/50 dark:from-rose-900/50 dark:to-slate-900/50 rounded-lg backdrop-blur-sm" />
            <div className="piano-keyboard relative">
              {/* White keys: a normal row, side by side */}
              {WHITE_KEYS.map((key) => (
                <div
                  key={`${key.note}${key.octave}`}
                  className={`piano-key piano-key-white touch-none ${
                    activeKeys.has(key.key) ? "piano-key-pressed" : ""
                  } transition-transform duration-75`}
                  {...pointerProps(key)}
                >
                  <KeyLabel k={key} />
                </div>
              ))}

              {/* Black keys: laid over the white keys at calculated positions */}
              {BLACK_KEYS.map((key) => (
                <div
                  key={`${key.note}${key.octave}`}
                  className={`piano-key piano-key-black touch-none ${
                    activeKeys.has(key.key) ? "piano-key-pressed" : ""
                  } transition-transform duration-75`}
                  style={{ left: blackKeyLeft(key) }}
                  {...pointerProps(key)}
                >
                  <KeyLabel k={key} />
                </div>
              ))}
            </div>
          </div>

          {/* Help card */}
          <div className="bg-white/50 dark:bg-white/5 p-6 rounded-lg backdrop-blur-sm shadow-sm">
            <h2 className="text-lg font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-rose-400 dark:from-rose-400 dark:to-rose-200">
              How to Play
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
              <li>
                Use your computer keyboard keys (A-L for white keys, W-P for
                black keys)
              </li>
              <li>Click or tap directly on the piano keys</li>
              <li>Adjust volume or mute using the controls above</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
