import { Metadata } from "next";
import Image from "next/image";
import { Music, Award, Clock, Calendar, Users } from "lucide-react";
import { aboutData } from "@/data/about";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-100 to-rose-50 opacity-70 dark:from-rose-950 dark:to-slate-900 dark:opacity-90" />
        <div className="container relative py-12 md:py-24 lg:py-32">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-foreground">
                {aboutData.hero.title}
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                {aboutData.hero.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter text-foreground">
              {aboutData.story.title}
            </h2>
            {aboutData.story.content.map((paragraph, index) => (
              <p key={index} className="text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <Image
              src={aboutData.story.image}
              alt={aboutData.story.imageAlt}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-slate-50 dark:bg-slate-900 py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <Music className="h-12 w-12 text-rose-500 mx-auto" />
            <h2 className="text-3xl font-bold tracking-tighter text-foreground">
              {aboutData.mission.title}
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-justify">
              {aboutData.mission.content.map((paragraph, index) => (
                <li key={index} className="text-lg text-muted-foreground">
                  {paragraph}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="container py-12 md:py-16">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-8 text-foreground">
          {aboutData.values.title}
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {aboutData.values.items.map((value, index) => {
            // Map icon names to components
            const IconComponent =
              value.icon === "Music"
                ? Music
                : value.icon === "Users"
                ? Users
                : value.icon === "Award"
                ? Award
                : value.icon === "Clock"
                ? Clock
                : Music;

            return (
              <div key={index} className="bg-background p-6 rounded-lg border border-border">
                <div className="mb-4">
                  <IconComponent className="h-8 w-8 text-rose-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Our Facilities */}
      <section className="bg-rose-50 dark:bg-rose-950/20 py-12 md:py-16">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-8 text-foreground">
            {aboutData.facilities.title}
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src={aboutData.facilities.image}
                alt={aboutData.facilities.imageAlt}
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              {aboutData.facilities.items.map((facility, index) => (
                <div key={index}>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {facility.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {facility.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="container py-12 md:py-16">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-8 text-foreground">
          {aboutData.timeline.title}
        </h2>
        <div className="space-y-8">
          {aboutData.timeline.items.map((milestone, index) => (
            <div key={index} className="relative pl-10 md:pl-0">
              <div className="grid md:grid-cols-[200px_1fr] gap-4 items-start">
                <div className="hidden md:flex items-center gap-4">
                  <div className="text-2xl font-bold text-rose-500">
                    {milestone.year}
                  </div>
                  <div className="h-[2px] flex-1 bg-rose-200 dark:bg-rose-800" />
                </div>
                <div className="absolute left-0 top-1 md:hidden">
                  <Calendar className="h-6 w-6 text-rose-500" />
                </div>
                <div className="md:hidden text-lg font-bold text-rose-500 mb-1">
                  {milestone.year}
                </div>
                <div className="bg-background p-4 rounded-lg border border-border">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {milestone.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {milestone.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
