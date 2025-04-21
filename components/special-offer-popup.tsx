"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { specialOfferData } from "@/data";

export default function SpecialOfferPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after 3 seconds
    const timer = setTimeout(() => {
      // Check if user has dismissed the popup before
      if (!isOpen) {
        setIsOpen(true);
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 animate-fade-in">
      <Card className="w-full max-w-md overflow-hidden relative">
        <Button
          variant="ghost"
          size="icon"
          onClick={handleClose}
          className="absolute right-2 top-2 z-10 h-8 w-8 rounded-full bg-background/80 backdrop-blur"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Button>
        <CardHeader className="bg-gradient-to-r from-rose-500 to-rose-400 text-white">
          <CardTitle className="text-center">
            {specialOfferData.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 pt-8">
          <div className="space-y-4">
            <div className="text-center text-2xl font-bold">
              {specialOfferData.details}
            </div>
            <p className="text-center text-foreground">
              {specialOfferData.description}
            </p>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 opacity-75 blur-sm animate-pulse"></div>
                <Button asChild className="relative">
                  <Link href={specialOfferData.buttonLink}>
                    {specialOfferData.buttonText}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="bg-muted/50 px-6 py-3">
          <p className="text-xs text-center w-full text-muted-foreground">
            {specialOfferData.footnote}
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
