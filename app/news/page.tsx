"use client";

import Image from "next/image";
import {
  CalendarDays,
  Clock,
  MapPin,
  Award,
  Users,
  Music,
  ArrowUpRight,
} from "lucide-react";
import { newsData } from "@/data/news";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function NewsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-100 to-rose-50 opacity-70 dark:from-rose-950 dark:to-slate-900 dark:opacity-90" />
        <div className="container relative py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-foreground">
              {newsData.hero.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {newsData.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Social Media Feed */}
      <section className="bg-slate-50 dark:bg-slate-900 py-12 md:py-16">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-8 text-foreground">
          Feed
        </h2>
        <div className="flex justify-center">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            plugins={[Autoplay({ delay: 3000 })]}
            className="w-full max-w-xl md:max-w-2xl"
          >
            <CarouselContent>
              {newsData.feed.instagram.posts.map((post, postIndex) => {
                const contentType = post.meta?.type;
                const isInstagram =
                  contentType === "reel" || contentType === "post";
                const hasUrl = post.url && post.url.trim() !== "";

                // If Instagram embed with URL, show it
                if (isInstagram && hasUrl) {
                  return (
                    <CarouselItem key={`post-${postIndex}`}>
                      <div className="p-2">
                        <a
                          href={post.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group"
                        >
                          <Card className="relative overflow-hidden border-0 shadow-sm bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl transition-all duration-300 hover:shadow-md group-hover:shadow-lg">
                            <CardContent className="flex aspect-square items-center justify-center p-0 overflow-hidden">
                              <iframe
                                src={`${post.url}embed/`}
                                width="100%"
                                height="100%"
                                className="absolute inset-0 w-full h-full border-none"
                                title={post.title}
                                allowFullScreen
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent rounded-lg"></div>
                              <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                                <div className="flex items-center justify-between gap-3">
                                  <div className="space-y-1.5">
                                    <h3 className="text-lg font-semibold text-white dark:text-zinc-100 leading-snug">
                                      {post.title}
                                    </h3>
                                    {post.description && (
                                      <p className="text-sm text-white/80 dark:text-zinc-300/80 leading-relaxed">
                                        {post.description}
                                      </p>
                                    )}
                                  </div>
                                  <div className="p-2 rounded-full dark:bg-zinc-800/50 backdrop-blur-md group-hover:bg-white/20 dark:group-hover:bg-zinc-700/50 transition-colors duration-300">
                                    <ArrowUpRight className="w-4 h-4 text-white group-hover:-rotate-12 transition-transform duration-300" />
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </a>
                      </div>
                    </CarouselItem>
                  );
                }

                // For local images, create a carousel item for each image
                return post.images?.map((image: string, imageIndex: number) => {
                  const isLocalImage =
                    image?.startsWith("/assets/") ||
                    image?.startsWith("assets/");

                  if (!isLocalImage) return null;

                  return (
                    <CarouselItem key={`post-${postIndex}-image-${imageIndex}`}>
                      <div className="p-2">
                        <div className="group">
                          <Card className="relative overflow-hidden border-0 shadow-sm bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl transition-all duration-300 hover:shadow-md group-hover:shadow-lg">
                            <CardContent className="flex aspect-square items-center justify-center p-0 overflow-hidden">
                              <div className="relative w-full h-full">
                                <Image
                                  src={
                                    image.startsWith("/") ? image : `/${image}`
                                  }
                                  alt={post.title}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent rounded-lg"></div>
                              <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                                <div className="space-y-1.5">
                                  <h3 className="text-lg font-semibold text-white dark:text-zinc-100 leading-snug">
                                    {post.title}
                                  </h3>
                                  {post.description && (
                                    <p className="text-sm text-white/80 dark:text-zinc-300/80 leading-relaxed">
                                      {post.description}
                                    </p>
                                  )}
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </CarouselItem>
                  );
                });
              })}
            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Events Section */}
      <section className="bg-slate-50 dark:bg-slate-900 py-12 md:py-16">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-8 text-foreground">
          {newsData.events.title}
        </h2>
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2">
            {newsData.events.items.map((event, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden border dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-[300px]">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.name}
                    fill
                    className="object-contain"
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
                  <p className="text-base text-muted-foreground">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="container py-12 md:py-16">
        <h2 className="text-3xl font-bold tracking-tighter mb-8 text-foreground">
          {newsData.news.title}
        </h2>
        {newsData.news.items.map((item, index) => (
          <div key={index} className="mb-16">
            <div className="grid gap-8 md:grid-cols-2 mb-8">
              <div className="relative h-[300px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <div className="flex items-center gap-2 text-rose-500 dark:text-rose-400 mb-2">
                  <Award className="h-5 w-5" />
                  <time dateTime={item.date} className="font-semibold">
                    {item.date}
                  </time>
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-lg text-muted-foreground mb-4">
                  {item.summary}
                </p>
                <p className="text-muted-foreground whitespace-pre-line">
                  {item.content}
                </p>
              </div>
            </div>

            {/* Awards Section */}
            {item.achievements && (
              <div className="space-y-12">
                {Object.entries(item.achievements).map(
                  ([key, category]: [string, any]) => (
                    <div
                      key={key}
                      className="bg-slate-50 dark:bg-slate-900 rounded-lg p-8"
                    >
                      <div className="flex items-center gap-3 mb-6">
                        {key === "piano" && (
                          <Music className="h-6 w-6 text-rose-500" />
                        )}
                        {key === "clarinet" && (
                          <Music className="h-6 w-6 text-rose-500" />
                        )}
                        {key === "other" && (
                          <Award className="h-6 w-6 text-rose-500" />
                        )}
                        <h4 className="text-xl font-bold">{category.title}</h4>
                      </div>
                      <div className="space-y-8">
                        {category.teachers.map(
                          (teacher: any, teacherIndex: number) => (
                            <div key={teacherIndex}>
                              <div className="flex items-center gap-2 mb-4">
                                <Users className="h-5 w-5 text-rose-500" />
                                <h5 className="text-lg font-semibold">
                                  Teacher: {teacher.name}
                                </h5>
                              </div>
                              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                {teacher.students.map(
                                  (student: any, studentIndex: number) => (
                                    <Card
                                      key={studentIndex}
                                      className="bg-white dark:bg-slate-800"
                                    >
                                      <CardHeader>
                                        <CardTitle className="text-base">
                                          {student.name}
                                        </CardTitle>
                                      </CardHeader>
                                      <CardContent>
                                        <div className="space-y-1">
                                          {student.awards.map(
                                            (
                                              award: string,
                                              awardIndex: number,
                                            ) => (
                                              <div
                                                key={awardIndex}
                                                className="text-sm text-muted-foreground flex items-center gap-2"
                                              >
                                                <Award className="h-4 w-4 text-rose-500" />
                                                <span>{award}</span>
                                              </div>
                                            ),
                                          )}
                                        </div>
                                      </CardContent>
                                    </Card>
                                  ),
                                )}
                              </div>
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  ),
                )}
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}
