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
import { facultyData } from "@/data/faculty";
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
              {facultyData.hero.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {facultyData.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="container py-12 md:py-16">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-8 text-foreground">
          {facultyData.faculty.title}
        </h2>
        <Tabs defaultValue="piano" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="max-w-full bg-rose-50 dark:bg-rose-900/20 px-5 py-7 shadow-md">
              <div className="flex items-center overflow-x-auto">
                {facultyData.faculty.categories.map((category) => (
                  <TabsTrigger
                    key={category.name}
                    value={category.name}
                    className="px-6 text-lg font-semibold"
                  >
                    {category.label}
                  </TabsTrigger>
                ))}
              </div>
            </TabsList>
          </div>

          {facultyData.faculty.categories.map((category) => (
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
                        {person.languages && person.languages.length > 0 && (
                          <div className="mt-2 flex flex-wrap gap-1">
                            {person.languages.map((language, i) => (
                              <span
                                key={i}
                                className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded px-2 py-1 text-sm"
                              >
                                {language}
                              </span>
                            ))}
                          </div>
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

      {/* CTA Section */}
      <section className="container py-12 md:py-16">
        <div className="bg-rose-50 dark:bg-rose-950/20 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">{facultyData.cta.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            {facultyData.cta.description}
          </p>
          <Button asChild size="lg">
            <Link href={facultyData.cta.buttonLink}>
              {facultyData.cta.buttonText}
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
