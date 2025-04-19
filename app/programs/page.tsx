import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProgramsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-100 to-rose-50 opacity-70" />
        <div className="container relative py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Programs & Faculty</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Explore our diverse music programs and meet our expert instructors.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Tabs */}
      <section className="container py-12 md:py-16">
        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="all">All Programs</TabsTrigger>
              <TabsTrigger value="children">Children</TabsTrigger>
              <TabsTrigger value="teens">Teens</TabsTrigger>
              <TabsTrigger value="adults">Adults</TabsTrigger>
              <TabsTrigger value="ensembles">Ensembles</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Piano Lessons",
                  description: "Master the keyboard with our comprehensive piano curriculum for all ages and levels.",
                  image: "/placeholder.svg?height=200&width=300",
                  levels: "Beginner to Advanced",
                  ages: "5+ years",
                },
                {
                  title: "Guitar & Strings",
                  description: "From classical to rock, learn to play string instruments with confidence and style.",
                  image: "/placeholder.svg?height=200&width=300",
                  levels: "Beginner to Advanced",
                  ages: "7+ years",
                },
                {
                  title: "Voice Training",
                  description: "Develop your vocal technique and performance skills with expert coaches.",
                  image: "/placeholder.svg?height=200&width=300",
                  levels: "Beginner to Advanced",
                  ages: "8+ years",
                },
                {
                  title: "Woodwinds & Brass",
                  description: "Explore the rich sounds of wind instruments with specialized instruction.",
                  image: "/placeholder.svg?height=200&width=300",
                  levels: "Beginner to Advanced",
                  ages: "9+ years",
                },
                {
                  title: "Music Theory",
                  description: "Build a strong foundation in music theory to enhance your musical understanding.",
                  image: "/placeholder.svg?height=200&width=300",
                  levels: "All Levels",
                  ages: "8+ years",
                },
                {
                  title: "Percussion",
                  description: "From drums to marimba, discover the exciting world of percussion instruments.",
                  image: "/placeholder.svg?height=200&width=300",
                  levels: "Beginner to Advanced",
                  ages: "6+ years",
                },
              ].map((program, index) => (
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
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="font-semibold">Ages:</span> {program.ages}
                      </div>
                      <div>
                        <span className="font-semibold">Levels:</span> {program.levels}
                      </div>
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

          <TabsContent value="children" className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Early Childhood Music",
                  description: "Interactive music classes for young children to develop rhythm, singing, and movement.",
                  image: "/placeholder.svg?height=200&width=300",
                  ages: "3-6 years",
                },
                {
                  title: "Piano for Kids",
                  description: "Child-friendly piano lessons using games and activities to build foundational skills.",
                  image: "/placeholder.svg?height=200&width=300",
                  ages: "5-12 years",
                },
                {
                  title: "Strings for Young Players",
                  description: "Introduction to violin, viola, and cello with age-appropriate methods.",
                  image: "/placeholder.svg?height=200&width=300",
                  ages: "7-12 years",
                },
              ].map((program, index) => (
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
                      <span className="font-semibold">Ages:</span> {program.ages}
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

          <TabsContent value="teens" className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Teen Rock Band",
                  description: "Form bands, write songs, and perform rock and pop music with other teen musicians.",
                  image: "/placeholder.svg?height=200&width=300",
                  ages: "13-18 years",
                },
                {
                  title: "Advanced Instrumental Studies",
                  description: "Intensive training for dedicated teen musicians preparing for college auditions.",
                  image: "/placeholder.svg?height=200&width=300",
                  ages: "13-18 years",
                },
                {
                  title: "Music Production",
                  description:
                    "Learn digital music production, recording, and mixing using industry-standard software.",
                  image: "/placeholder.svg?height=200&width=300",
                  ages: "13-18 years",
                },
              ].map((program, index) => (
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
                      <span className="font-semibold">Ages:</span> {program.ages}
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

          <TabsContent value="adults" className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Adult Beginners",
                  description: "It's never too late to start! Specially designed lessons for adult beginners.",
                  image: "/placeholder.svg?height=200&width=300",
                  ages: "18+ years",
                },
                {
                  title: "Adult Choir",
                  description: "Join our community choir and experience the joy of singing in harmony.",
                  image: "/placeholder.svg?height=200&width=300",
                  ages: "18+ years",
                },
                {
                  title: "Returning Musicians",
                  description: "Refresh your skills and rediscover your passion for music after a break.",
                  image: "/placeholder.svg?height=200&width=300",
                  ages: "18+ years",
                },
              ].map((program, index) => (
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
                      <span className="font-semibold">Ages:</span> {program.ages}
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

          <TabsContent value="ensembles" className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Chamber Music",
                  description: "Small ensemble playing for strings, winds, and piano in various combinations.",
                  image: "/placeholder.svg?height=200&width=300",
                  ages: "All ages",
                },
                {
                  title: "Youth Orchestra",
                  description: "Full orchestra experience for young musicians to develop ensemble skills.",
                  image: "/placeholder.svg?height=200&width=300",
                  ages: "10-18 years",
                },
                {
                  title: "Jazz Ensemble",
                  description: "Learn improvisation and jazz styles in a collaborative ensemble setting.",
                  image: "/placeholder.svg?height=200&width=300",
                  ages: "All ages",
                },
              ].map((program, index) => (
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
                      <span className="font-semibold">Ages:</span> {program.ages}
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
        </Tabs>
      </section>

      {/* Faculty Section */}
      <section className="bg-slate-50 py-12 md:py-16">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">Meet Our Faculty</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "Dr. Maria Rodriguez",
                title: "Piano Department Chair",
                bio: "Concert pianist with over 20 years of teaching experience. DMA from Juilliard.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "David Chen",
                title: "Strings Department Chair",
                bio: "Former concertmaster with the Metropolitan Symphony and passionate educator.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Sarah Johnson",
                title: "Voice Department Chair",
                bio: "Professional soprano with extensive performance and teaching experience.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Michael Williams",
                title: "Percussion Instructor",
                bio: "Versatile percussionist specializing in classical and world music traditions.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Emma Garcia",
                title: "Woodwinds Instructor",
                bio: "Flutist and music educator with expertise in multiple woodwind instruments.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Robert Kim",
                title: "Guitar Instructor",
                bio: "Classical and jazz guitarist with a passion for teaching students of all levels.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Lisa Thompson",
                title: "Early Childhood Music Specialist",
                bio: "Certified Kodály and Orff instructor specializing in early childhood music education.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "James Wilson",
                title: "Music Theory & Composition",
                bio: "Composer and theorist with a focus on contemporary classical music.",
                image: "/placeholder.svg?height=300&width=300",
              },
            ].map((faculty, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden border">
                <div className="relative h-[250px]">
                  <Image src={faculty.image || "/placeholder.svg"} alt={faculty.name} fill className="object-cover" />
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
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Musical Journey?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Contact us today to schedule a free consultation and learn more about our programs.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
