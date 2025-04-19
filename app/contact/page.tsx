"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
    contactPreference: "email",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, contactPreference: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this data to your server
    console.log(formData)
    toast({
      title: "Form submitted",
      description: "Thank you for contacting us. We'll get back to you soon!",
    })
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      interest: "",
      message: "",
      contactPreference: "email",
    })
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-100 to-rose-50 opacity-70" />
        <div className="container relative py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Contact Us</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              We'd love to hear from you. Reach out with questions about our programs, schedule a tour, or inquire about
              enrollment.
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
                123 Music Avenue
                <br />
                Harmony City, HC 12345
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center text-center p-6">
              <Phone className="h-10 w-10 text-rose-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-muted-foreground">
                (555) 123-4567
                <br />
                Toll-free: (800) 765-4321
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center text-center p-6">
              <Mail className="h-10 w-10 text-rose-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-muted-foreground">
                info@musicdoremi.com
                <br />
                admissions@musicdoremi.com
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center text-center p-6">
              <Clock className="h-10 w-10 text-rose-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Hours</h3>
              <p className="text-muted-foreground">
                Monday - Friday: 9am - 8pm
                <br />
                Saturday: 9am - 5pm
                <br />
                Sunday: Closed
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="container py-12">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="Your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="interest">I'm interested in</Label>
                  <Select value={formData.interest} onValueChange={(value) => handleSelectChange("interest", value)}>
                    <SelectTrigger id="interest">
                      <SelectValue placeholder="Select a program" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="piano">Piano Lessons</SelectItem>
                      <SelectItem value="guitar">Guitar & Strings</SelectItem>
                      <SelectItem value="voice">Voice Training</SelectItem>
                      <SelectItem value="woodwinds">Woodwinds & Brass</SelectItem>
                      <SelectItem value="percussion">Percussion</SelectItem>
                      <SelectItem value="theory">Music Theory</SelectItem>
                      <SelectItem value="ensembles">Ensembles</SelectItem>
                      <SelectItem value="rentals">Instrument Rentals</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Preferred contact method</Label>
                  <RadioGroup
                    value={formData.contactPreference}
                    onValueChange={handleRadioChange}
                    className="flex gap-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="email" id="email-preference" />
                      <Label htmlFor="email-preference">Email</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="phone" id="phone-preference" />
                      <Label htmlFor="phone-preference">Phone</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                    className="min-h-[120px]"
                    required
                  />
                </div>
              </div>
              <Button type="submit" className="w-full">
                <Send className="mr-2 h-4 w-4" /> Send Message
              </Button>
            </form>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Find Us</h2>
            <div className="aspect-video bg-muted rounded-lg overflow-hidden border">
              {/* In a real application, you would embed a Google Map here */}
              <div className="w-full h-full flex items-center justify-center bg-slate-100">
                <p className="text-muted-foreground">Interactive Map Would Be Embedded Here</p>
              </div>
            </div>
            <div className="bg-rose-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Schedule a Tour</h3>
              <p className="text-muted-foreground mb-4">
                Want to see our facilities in person? Schedule a tour to visit our studios, meet our faculty, and learn
                more about our programs.
              </p>
              <Button variant="outline">Schedule a Tour</Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-50 py-12 md:py-16">
        <div className="container">
          <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
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
  )
}
