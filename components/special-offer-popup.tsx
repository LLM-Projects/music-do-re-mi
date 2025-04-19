"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function SpecialOfferPopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Show popup after 3 seconds
    const timer = setTimeout(() => {
      // Check if user has dismissed the popup before
      const hasSeenPopup = localStorage.getItem("hasSeenMusicOffer")
      if (!hasSeenPopup) {
        setIsOpen(true)
      }
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    // Set flag in localStorage to not show again in this session
    localStorage.setItem("hasSeenMusicOffer", "true")
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 animate-fade-in">
      <Card className="w-full max-w-md overflow-hidden">
        <div className="absolute right-2 top-2">
          <Button variant="ghost" size="icon" onClick={handleClose} className="h-8 w-8">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </div>
        <CardHeader className="bg-gradient-to-r from-rose-500 to-rose-400 text-white">
          <CardTitle className="text-center">🎵 Summer Special Offer 🎵</CardTitle>
        </CardHeader>
        <CardContent className="p-6 pt-8">
          <div className="space-y-4">
            <div className="text-center text-2xl font-bold">20% OFF</div>
            <p className="text-center">
              Sign up for summer music lessons before July 31st and receive 20% off your first month!
            </p>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 opacity-75 blur-sm animate-pulse"></div>
                <Button asChild className="relative">
                  <Link href="/contact">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="bg-muted/50 px-6 py-3">
          <p className="text-xs text-center w-full text-muted-foreground">
            *Offer valid for new students only. Cannot be combined with other promotions.
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
