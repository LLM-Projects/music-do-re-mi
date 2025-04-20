"use client";

import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

// Piano key definitions
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

export default function VirtualKeyboardPage() {
  const [activeKeys, setActiveKeys] = useState<Set<string>>(new Set());
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const audioContext = useRef<AudioContext | null>(null);
  const oscillators = useRef<Map<string, OscillatorNode>>(new Map());

  // Initialize audio context on first user interaction
  useEffect(() => {
    const initAudio = () => {
      if (!audioContext.current) {
        audioContext.current = new (window.AudioContext ||
          (window as any).webkitAudioContext)();
      }
      document.removeEventListener("click", initAudio);
      document.removeEventListener("keydown", initAudio);
    };

    document.addEventListener("click", initAudio);
    document.addEventListener("keydown", initAudio);

    return () => {
      document.removeEventListener("click", initAudio);
      document.removeEventListener("keydown", initAudio);
    };
  }, []);

  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = KEYS.find((k) => k.key === e.key.toLowerCase());
      if (key && !activeKeys.has(key.key)) {
        playNote(key);
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      const key = KEYS.find((k) => k.key === e.key.toLowerCase());
      if (key && activeKeys.has(key.key)) {
        stopNote(key);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [activeKeys, isMuted, volume]);

  // Convert note to frequency
  const noteToFrequency = (note: string, octave: number) => {
    const notes = [
      "C",
      "C#",
      "D",
      "D#",
      "E",
      "F",
      "F#",
      "G",
      "G#",
      "A",
      "A#",
      "B",
    ];
    const noteIndex = notes.indexOf(note);
    const octaveOffset = octave - 4; // A4 is 440Hz
    const semitoneOffset = noteIndex - notes.indexOf("A") + octaveOffset * 12;
    return 440 * Math.pow(2, semitoneOffset / 12);
  };

  // Play a note
  const playNote = (key: (typeof KEYS)[0]) => {
    if (!audioContext.current || isMuted) return;

    const frequency = noteToFrequency(key.note, key.octave);
    const oscillator = audioContext.current.createOscillator();
    const gainNode = audioContext.current.createGain();

    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(
      frequency,
      audioContext.current.currentTime
    );

    gainNode.gain.setValueAtTime(volume, audioContext.current.currentTime);

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.current.destination);

    oscillator.start();
    oscillators.current.set(key.key, oscillator);

    setActiveKeys(new Set([...activeKeys, key.key]));
  };

  // Stop a note
  const stopNote = (key: (typeof KEYS)[0]) => {
    if (!audioContext.current) return;

    const oscillator = oscillators.current.get(key.key);
    if (oscillator) {
      oscillator.stop();
      oscillators.current.delete(key.key);
    }

    const newActiveKeys = new Set(activeKeys);
    newActiveKeys.delete(key.key);
    setActiveKeys(newActiveKeys);
  };

  // Calculate black key position
  const getBlackKeyPosition = (index: number) => {
    const key = KEYS[index];
    const prevWhiteKey = KEYS.filter((k) => !k.isBlack)[
      KEYS.filter((k) => !k.isBlack).findIndex(
        (k) => k.note === key.note.replace("#", "") && k.octave === key.octave
      )
    ];
    const prevWhiteKeyIndex = KEYS.findIndex((k) => k === prevWhiteKey);
    const whiteKeyWidth = 65; // This should match the CSS variable --white-key-width

    // Position the black key between the current and next white key
    return `${(prevWhiteKeyIndex + 1) * whiteKeyWidth - whiteKeyWidth / 4}px`;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container py-12 md:py-16 flex-1">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-rose-400 dark:from-rose-400 dark:to-rose-200">
              Virtual Piano Keyboard
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Play music with your computer keyboard or by clicking/tapping the
              keys. Use keys A-L and W-P for the piano notes.
            </p>
          </div>

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

          <div className="piano-container relative">
            <div className="absolute inset-0 bg-gradient-to-b from-rose-100/50 to-rose-50/50 dark:from-rose-900/50 dark:to-slate-900/50 rounded-lg backdrop-blur-sm" />
            <div className="piano-keyboard relative">
              {/* White keys */}
              {KEYS.filter((key) => !key.isBlack).map((key) => (
                <div
                  key={`${key.note}${key.octave}`}
                  className={`piano-key piano-key-white ${
                    activeKeys.has(key.key) ? "piano-key-pressed" : ""
                  } transition-transform duration-75 hover:scale-[1.02]`}
                  onMouseDown={() => playNote(key)}
                  onMouseUp={() => stopNote(key)}
                  onMouseLeave={() => activeKeys.has(key.key) && stopNote(key)}
                  onTouchStart={(e) => {
                    e.preventDefault();
                    playNote(key);
                  }}
                  onTouchEnd={() => stopNote(key)}
                >
                  <div className="piano-key-label">
                    <div className="font-medium">
                      {key.note}
                      {key.octave}
                    </div>
                    <div className="mt-1 text-[10px] uppercase text-muted-foreground">
                      {key.key}
                    </div>
                  </div>
                </div>
              ))}

              {/* Black keys */}
              {KEYS.filter((key) => key.isBlack).map((key, index) => {
                const blackKeyIndex = KEYS.findIndex(
                  (k) => k.note === key.note && k.octave === key.octave
                );
                return (
                  <div
                    key={`${key.note}${key.octave}`}
                    className={`piano-key piano-key-black ${
                      activeKeys.has(key.key) ? "piano-key-pressed" : ""
                    } transition-transform duration-75 hover:scale-[1.02]`}
                    style={{ left: getBlackKeyPosition(blackKeyIndex) }}
                    onMouseDown={() => playNote(key)}
                    onMouseUp={() => stopNote(key)}
                    onMouseLeave={() =>
                      activeKeys.has(key.key) && stopNote(key)
                    }
                    onTouchStart={(e) => {
                      e.preventDefault();
                      playNote(key);
                    }}
                    onTouchEnd={() => stopNote(key)}
                  >
                    <div className="piano-key-label">
                      <div className="font-medium">
                        {key.note}
                        {key.octave}
                      </div>
                      <div className="mt-1 text-[10px] uppercase text-muted-foreground">
                        {key.key}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

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
