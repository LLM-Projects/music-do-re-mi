"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, CalendarDays, Clock } from "lucide-react";
import { programsData } from "@/data/programs";
import { useState } from "react";

export default function ProgramsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-100 to-rose-50 opacity-70 dark:from-rose-950 dark:to-slate-900 dark:opacity-90" />
        <div className="container relative py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              {programsData.hero.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {programsData.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="container py-12 md:py-16">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-8 text-foreground">
          {programsData.faculty.title}
        </h2>
        <Tabs defaultValue="piano" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="max-w-full">
              <div className="flex items-center overflow-x-auto">
              {programsData.faculty.categories.map((category) => (
                <TabsTrigger key={category.name} value={category.name}>
                  {category.label}
                </TabsTrigger>
              ))}
              </div>
            </TabsList>
          </div>

          {programsData.faculty.categories.map((category) => (
            <TabsContent
              key={category.name}
              value={category.name}
              className="space-y-8"
            >
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {category.items.map((person, index) => {
                  const [isExpanded, setIsExpanded] = useState(false);
                  const content = person.content;
                  const truncatedContent =
                    content.length > 150
                      ? content.substring(0, 150) + "..."
                      : content;

                  return (
                    <Card key={index} className="overflow-hidden">
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={person.image || "/placeholder.svg"}
                          alt={person.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-contain bg-muted"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>{person.title}</CardTitle>
                        <CardDescription></CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>{isExpanded ? content : truncatedContent}</p>
                        {content.length > 150 && (
                          <Button
                            variant="link"
                            className="p-0 h-auto font-normal"
                            onClick={() => setIsExpanded(!isExpanded)}
                          >
                            {isExpanded ? "Read less" : "Read more"}
                          </Button>
                        )}
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* Events Section */}
      <section className="bg-slate-50 dark:bg-slate-900 py-12 md:py-16">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-8 text-foreground">
          {programsData.events.title}
        </h2>
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2">
            {programsData.events.items.map((event, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden border dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-[300px]">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{event.name}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-4 w-4 text-rose-500" />
                    <p className="text-base text-rose-500 dark:text-rose-400">
                      {event.location}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <CalendarDays className="h-4 w-4 text-rose-500" />
                    <p className="text-base text-muted-foreground">
                      {event.date}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="h-4 w-4 text-rose-500" />
                    <p className="text-base text-muted-foreground">
                      {event.time}
                    </p>
                  </div>
                  <p className="text-base text-muted-foreground">{event.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-12 md:py-16">
        <div className="bg-rose-50 dark:bg-rose-950/20 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">{programsData.cta.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            {programsData.cta.description}
          </p>
          <Button asChild size="lg">
            <Link href={programsData.cta.buttonLink}>
              {programsData.cta.buttonText}
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
