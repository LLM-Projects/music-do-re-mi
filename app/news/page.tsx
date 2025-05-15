import Image from "next/image";
import { CalendarDays, Clock, MapPin, Award, Users, Music } from "lucide-react";
import { parse } from "date-fns";
import { newsData } from "@/data/news";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function NewsPage() {
  // Sort events by date
  const sortedEvents = [...newsData.events.items].sort((a, b) => {
    const dateA = parse(a.date.split(",")[0], "MMMM d yyyy", new Date());
    const dateB = parse(b.date.split(",")[0], "MMMM d yyyy", new Date());
    return dateA.getTime() - dateB.getTime();
  });

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
                  <p className="text-base text-muted-foreground">{event.description}</p>
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
                <p className="text-muted-foreground">{item.content}</p>
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
                                              awardIndex: number
                                            ) => (
                                              <div
                                                key={awardIndex}
                                                className="text-sm text-muted-foreground flex items-center gap-2"
                                              >
                                                <Award className="h-4 w-4 text-rose-500" />
                                                <span>{award}</span>
                                              </div>
                                            )
                                          )}
                                        </div>
                                      </CardContent>
                                    </Card>
                                  )
                                )}
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  )
                )}
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}
