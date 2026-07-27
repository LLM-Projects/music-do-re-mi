"use client";

import { useEffect, useState } from "react";
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

export interface SpecialOfferPopupProps {
  title: string;
  details: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  footnote?: string;
  delay?: number;
  defaultOpen?: boolean;
}

export default function SpecialOfferPopup({
  title,
  details,
  description,
  buttonText,
  buttonLink,
  footnote,
  delay = 2500,
  defaultOpen = false,
}: SpecialOfferPopupProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  useEffect(() => {
    if (defaultOpen) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, defaultOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 animate-fade-in">
      <Card className="relative w-full max-w-md overflow-hidden">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(false)}
          className="absolute right-2 top-2 z-10 h-8 w-8 rounded-full bg-background/80 backdrop-blur"
        >
          <X className="h-4 w-4" />
        </Button>

        <CardHeader className="bg-gradient-to-r from-rose-500 to-rose-400 text-white">
          <CardTitle className="text-center">{title}</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4 p-6 pt-8">
          <div className="text-center text-2xl font-bold">{details}</div>

          <p className="text-center">{description}</p>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 opacity-75 blur-sm animate-pulse" />

              <Button asChild className="relative">
                <Link href={buttonLink}>{buttonText}</Link>
              </Button>
            </div>
          </div>
        </CardContent>

        {footnote && (
          <CardFooter className="bg-muted/50 px-6 py-3">
            <p className="w-full text-center text-xs text-muted-foreground">
              {footnote}
            </p>
          </CardFooter>
        )}
      </Card>
    </div>
  );
}
