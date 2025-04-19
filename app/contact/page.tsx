"use client";

import type React from "react";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-100 to-rose-50 opacity-70 dark:from-rose-950 dark:to-slate-900 dark:opacity-90" />
        <div className="container relative py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              Contact Us
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              We'd love to hear from you. Reach out with questions about our
              programs, schedule a tour, or inquire about enrollment.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="container py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardContent className="flex flex-col items-center text-center p-6">
              <MapPin className="h-10 w-10 text-rose-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
              <p className="text-muted-foreground">
                10475
                <br />
                Medlock Bridge Road
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center text-center p-6">
              <Phone className="h-10 w-10 text-rose-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-muted-foreground">
                347-399-1924
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center text-center p-6">
              <Mail className="h-10 w-10 text-rose-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-muted-foreground">
                musicdoremi@myyahoo.com
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center text-center p-6">
              <Clock className="h-10 w-10 text-rose-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Hours</h3>
              <p className="text-muted-foreground">
                TBD
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-50 py-12 md:py-16">
        <div className="container">
          <h2 className="text-2xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid gap-4 md:grid-cols-2 max-w-4xl mx-auto">
            {[
              {
                question: "How do I enroll in lessons?",
                answer:
                  "To enroll, simply contact us through our online form, by phone, or in person. We'll schedule a consultation to discuss your goals and find the right program for you.",
              },
              {
                question: "What ages do you teach?",
                answer:
                  "We offer programs for all ages, from early childhood (starting at age 3) through adult learners. It's never too early or too late to start your musical journey!",
              },
              {
                question: "Do I need my own instrument?",
                answer:
                  "While having your own instrument is ideal for regular practice, we offer instrument rentals for many instruments. Our staff can help you choose the right option for your needs.",
              },
              {
                question: "How long are lessons?",
                answer:
                  "Lesson length varies by program and age. Typically, younger students have 30-minute lessons, while older students and adults may have 45-60 minute lessons.",
              },
              {
                question: "Do you offer financial aid?",
                answer:
                  "Yes, we have scholarship programs and financial aid options available for qualifying students. Please contact our administrative office for more information.",
              },
              {
                question: "What is your cancellation policy?",
                answer:
                  "We require 24-hour notice for lesson cancellations. Lessons cancelled with less than 24 hours notice may not be eligible for makeup lessons or refunds.",
              },
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
