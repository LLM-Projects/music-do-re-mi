"use client"

import { useState, useEffect, useRef } from "react"
import { Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

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
]

export default function VirtualKeyboardPage() {
  const [activeKeys, setActiveKeys] = useState<Set<string>>(new Set())
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(0.5)
  const [hapticEnabled, setHapticEnabled] = useState(true)
  const audioContext = useRef<AudioContext | null>(null)
  const oscillators = useRef<Map<string, OscillatorNode>>(new Map())

  // Initialize audio context on first user interaction
  useEffect(() => {
    const initAudio = () => {
      if (!audioContext.current) {
        audioContext.current = new (window.AudioContext || (window as any).webkitAudioContext)()
      }
      document.removeEventListener("click", initAudio)
      document.removeEventListener("keydown", initAudio)
    }

    document.addEventListener("click", initAudio)
    document.addEventListener("keydown", initAudio)

    return () => {
      document.removeEventListener("click", initAudio)
      document.removeEventListener("keydown", initAudio)
    }
  }, [])

  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = KEYS.find((k) => k.key === e.key.toLowerCase())
      if (key && !activeKeys.has(key.key)) {
        playNote(key)
      }
    }

    const handleKeyUp = (e: KeyboardEvent) => {
      const key = KEYS.find((k) => k.key === e.key.toLowerCase())
      if (key && activeKeys.has(key.key)) {
        stopNote(key)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("keyup", handleKeyUp)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("keyup", handleKeyUp)
    }
  }, [activeKeys, isMuted, volume])

  // Convert note to frequency
  const noteToFrequency = (note: string, octave: number) => {
    const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]
    const noteIndex = notes.indexOf(note)
    const octaveOffset = octave - 4 // A4 is 440Hz
    const semitoneOffset = noteIndex - notes.indexOf("A") + octaveOffset * 12
    return 440 * Math.pow(2, semitoneOffset / 12)
  }

  // Play a note
  const playNote = (key: (typeof KEYS)[0]) => {
    if (!audioContext.current || isMuted) return

    // Trigger haptic feedback if supported and enabled
    if (hapticEnabled && "vibrate" in navigator) {
      navigator.vibrate(50)
    }

    const frequency = noteToFrequency(key.note, key.octave)
    const oscillator = audioContext.current.createOscillator()
    const gainNode = audioContext.current.createGain()

    oscillator.type = "sine"
    oscillator.frequency.setValueAtTime(frequency, audioContext.current.currentTime)

    gainNode.gain.setValueAtTime(volume, audioContext.current.currentTime)

    oscillator.connect(gainNode)
    gainNode.connect(audioContext.current.destination)

    oscillator.start()
    oscillators.current.set(key.key, oscillator)

    setActiveKeys(new Set([...activeKeys, key.key]))
  }

  // Stop a note
  const stopNote = (key: (typeof KEYS)[0]) => {
    if (!audioContext.current) return

    const oscillator = oscillators.current.get(key.key)
    if (oscillator) {
      oscillator.stop()
      oscillators.current.delete(key.key)
    }

    const newActiveKeys = new Set(activeKeys)
    newActiveKeys.delete(key.key)
    setActiveKeys(newActiveKeys)
  }

  // Calculate black key position
  const getBlackKeyPosition = (index: number) => {
    const whiteKeysBefore = KEYS.filter((k, i) => !k.isBlack && i < index).length
    return `calc(${whiteKeysBefore * 100}% - ${18}px)`
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container py-12 md:py-16 flex-1">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter">Virtual Piano Keyboard</h1>
            <p className="text-muted-foreground">
              Play music with your computer keyboard or by clicking/tapping the keys. Use keys A-L and W-P for the piano
              notes.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsMuted(!isMuted)}
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
              </Button>
              <div className="flex flex-col gap-1">
                <Label htmlFor="volume">Volume</Label>
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
            <div className="flex items-center space-x-2">
              <Switch id="haptic" checked={hapticEnabled} onCheckedChange={setHapticEnabled} />
              <Label htmlFor="haptic">Haptic Feedback</Label>
            </div>
          </div>

          <div className="piano-container relative mx-auto">
            <div className="flex relative">
              {/* White keys */}
              {KEYS.filter((key) => !key.isBlack).map((key, index) => (
                <div
                  key={`${key.note}${key.octave}`}
                  className={`piano-key piano-key-white flex items-end justify-center pb-4 select-none ${
                    activeKeys.has(key.key) ? "piano-key-pressed" : ""
                  }`}
                  onMouseDown={() => playNote(key)}
                  onMouseUp={() => stopNote(key)}
                  onMouseLeave={() => activeKeys.has(key.key) && stopNote(key)}
                  onTouchStart={(e) => {
                    e.preventDefault()
                    playNote(key)
                  }}
                  onTouchEnd={() => stopNote(key)}
                >
                  <div className="text-xs text-gray-500">
                    <div>
                      {key.note}
                      {key.octave}
                    </div>
                    <div className="mt-1 text-[10px] uppercase">{key.key}</div>
                  </div>
                </div>
              ))}

              {/* Black keys */}
              {KEYS.filter((key) => key.isBlack).map((key, index) => {
                const blackKeyIndex = KEYS.findIndex((k) => k.note === key.note && k.octave === key.octave)
                return (
                  <div
                    key={`${key.note}${key.octave}`}
                    className={`piano-key piano-key-black flex items-end justify-center pb-2 select-none ${
                      activeKeys.has(key.key) ? "piano-key-pressed" : ""
                    }`}
                    style={{ left: getBlackKeyPosition(blackKeyIndex) }}
                    onMouseDown={() => playNote(key)}
                    onMouseUp={() => stopNote(key)}
                    onMouseLeave={() => activeKeys.has(key.key) && stopNote(key)}
                    onTouchStart={(e) => {
                      e.preventDefault()
                      playNote(key)
                    }}
                    onTouchEnd={() => stopNote(key)}
                  >
                    <div className="text-xs text-gray-300">
                      <div>
                        {key.note}
                        {key.octave}
                      </div>
                      <div className="mt-1 text-[10px] uppercase">{key.key}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-2">How to Play</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Use your computer keyboard keys (A-L for white keys, W-P for black keys)</li>
              <li>Click or tap directly on the piano keys</li>
              <li>Adjust volume or mute using the controls above</li>
              <li>Enable/disable haptic feedback for touch devices</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
