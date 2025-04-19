import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { programsData } from "@/data/programs";

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

      {/* Programs Tabs */}
      <section className="container py-12 md:py-16">
        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              {programsData.programs.categories.map((category) => (
                <TabsTrigger key={category.name} value={category.name}>
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {programsData.programs.categories.map((category) => (
            <TabsContent key={category.name} value={category.name} className="space-y-8">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {category.items.map((program, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="relative h-[200px]">
                      <Image
                        src={program.image || "/placeholder.svg"}
                        alt={program.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{program.title}</CardTitle>
                      <CardDescription>{program.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-sm">
                        <span className="font-semibold">Ages:</span>{" "}
                        {program.ages}
                        {'levels' in program && program.levels && (
                          <>
                            <br />
                            <span className="font-semibold">Levels:</span>{" "}
                            {program.levels}
                          </>
                        )}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        Learn More
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* Faculty Section */}
      <section className="bg-slate-50 py-12 md:py-16">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-8 text-foreground">
            {programsData.faculty.title}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {programsData.faculty.items.map((faculty, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden border"
              >
                <div className="relative h-[250px]">
                  <Image
                    src={faculty.image || "/placeholder.svg"}
                    alt={faculty.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{faculty.name}</h3>
                  <p className="text-rose-500 text-sm mb-2">{faculty.title}</p>
                  <p className="text-sm text-muted-foreground">{faculty.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-12 md:py-16">
        <div className="bg-rose-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            {programsData.cta.title}
          </h2>
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
