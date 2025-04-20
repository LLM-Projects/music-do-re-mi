"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import { contactData } from "@/data/contact";

export default function ContactPage() {
  const [expandedFaqs, setExpandedFaqs] = useState<Record<number, boolean>>({});

  const toggleFaq = (index: number) => {
    setExpandedFaqs((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-100 to-rose-50 opacity-70 dark:from-rose-950 dark:to-slate-900 dark:opacity-90" />
        <div className="container relative py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              {contactData.hero.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {contactData.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="container py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {contactData.contactInfo.items.map((item, index) => (
            <Card key={index}>
              <CardContent className="flex flex-col items-center text-center p-6">
                {item.icon === "MapPin" && <MapPin className="h-10 w-10 text-rose-500 mb-4" />}
                {item.icon === "Phone" && <Phone className="h-10 w-10 text-rose-500 mb-4" />}
                {item.icon === "Mail" && <Mail className="h-10 w-10 text-rose-500 mb-4" />}
                {item.icon === "Clock" && <Clock className="h-10 w-10 text-rose-500 mb-4" />}
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">
                  {item.content.map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < item.content.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-50 py-12 md:py-16">
        <div className="container">
          <h2 className="text-2xl font-bold text-center mb-8">
            {contactData.faq.title}
          </h2>
          <div className="grid gap-4 md:grid-cols-2 max-w-4xl mx-auto">
            {contactData.faq.items.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <div className="text-muted-foreground">
                    {expandedFaqs[index] ? (
                      <>
                        <p>{faq.answer}</p>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="mt-2 p-0 h-auto text-rose-500 hover:text-rose-600"
                          onClick={() => toggleFaq(index)}
                        >
                          Read Less <ChevronUp className="h-4 w-4 ml-1" />
                        </Button>
                      </>
                    ) : (
                      <>
                        <p className="line-clamp-3">{faq.answer}</p>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="mt-2 p-0 h-auto text-rose-500 hover:text-rose-600"
                          onClick={() => toggleFaq(index)}
                        >
                          Read More <ChevronDown className="h-4 w-4 ml-1" />
                        </Button>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
