import Link from "next/link"
import Image from "next/image"
import { Music, Users, BookOpen, Award, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import SpecialOfferPopup from "@/components/special-offer-popup"

export default function Home() {
  return (
    <div className="flex flex-col">
      <SpecialOfferPopup />
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-100 to-rose-50 opacity-70" />

        {/* Add animated music notes */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float text-rose-300 opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${15 + Math.random() * 15}s`,
              }}
            >
              {["♪", "♫", "♩", "♬", "🎵", "🎶"][Math.floor(Math.random() * 6)]}
            </div>
          ))}
        </div>

        <div className="container relative flex flex-col items-center justify-center space-y-8 py-24 text-center md:py-32">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl animate-fade-in">
            Discover the Joy of <span className="text-rose-500 animate-pulse">Music</span>
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl animate-slide-up">
            At Music Do Re Mi, we nurture musical talent through expert instruction, inspiring facilities, and a
            supportive community.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row animate-bounce-in">
            <Button asChild size="lg">
              <Link href="/programs">Explore Programs</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: <Music className="h-6 w-6 text-rose-500" />,
              title: "Expert Instruction",
              description: "Learn from our team of professional musicians and certified educators.",
              link: "/programs",
              linkText: "View Programs",
            },
            {
              icon: <Users className="h-6 w-6 text-rose-500" />,
              title: "All Ages Welcome",
              description: "Programs for children, teens, adults, and seniors at all skill levels.",
              link: "/about",
              linkText: "Learn More",
            },
            {
              icon: <BookOpen className="h-6 w-6 text-rose-500" />,
              title: "Diverse Curriculum",
              description: "From classical to contemporary, explore various musical styles and techniques.",
              link: "/programs",
              linkText: "Explore Courses",
            },
          ].map((feature, index) => (
            <Card key={index} className="group transition-all duration-300 hover:shadow-lg">
              <CardHeader className="space-y-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-100 group-hover:bg-rose-200 transition-colors">
                  <div className="animate-wave">{feature.icon}</div>
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href={feature.link}
                  className="inline-flex items-center text-sm font-medium text-rose-500 hover:underline"
                >
                  {feature.linkText}{" "}
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* About Preview Section */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Passion for Music Education
              </h2>
              <p className="text-muted-foreground">
                For over 15 years, Music Do Re Mi has been a cornerstone of musical education in our community. Our
                school combines traditional teaching methods with innovative approaches to inspire students of all ages
                and abilities.
              </p>
              <Button asChild variant="outline">
                <Link href="/about">About Us</Link>
              </Button>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Music students in a class"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Music Programs</h2>
          <p className="mt-4 text-muted-foreground max-w-[700px] mx-auto">
            Discover the perfect program to match your musical interests and goals.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Piano Lessons",
              description: "Master the keyboard with our comprehensive piano curriculum.",
              image: "/placeholder.svg?height=200&width=300",
            },
            {
              title: "Guitar & Strings",
              description: "From classical to rock, learn to play string instruments with confidence.",
              image: "/placeholder.svg?height=200&width=300",
            },
            {
              title: "Voice Training",
              description: "Develop your vocal technique and performance skills with expert coaches.",
              image: "/placeholder.svg?height=200&width=300",
            },
          ].map((program, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg">
              <div className="relative h-[200px]">
                <Image
                  src={program.image || "/placeholder.svg"}
                  alt={program.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-xl font-semibold">{program.title}</h3>
                <p className="mt-1 text-sm text-white/90">{program.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild>
            <Link href="/programs">View All Programs</Link>
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-rose-50 py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What Our Students Say</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote:
                  "My daughter has flourished under the guidance of Music Do Re Mi's instructors. Their patience and expertise have made all the difference.",
                author: "Sarah Johnson",
                role: "Parent",
              },
              {
                quote:
                  "As an adult beginner, I was nervous about taking up an instrument, but the supportive environment here made it a joy to learn.",
                author: "Michael Chen",
                role: "Adult Student",
              },
              {
                quote:
                  "The recital opportunities and ensemble programs have helped me grow not just as a musician, but as a performer.",
                author: "Emma Rodriguez",
                role: "Teen Student",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <Award className="h-8 w-8 text-rose-400" />
                  </div>
                  <blockquote className="text-muted-foreground italic mb-4">"{testimonial.quote}"</blockquote>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-16 md:py-24">
        <div className="rounded-lg bg-slate-50 p-8 md:p-12">
          <div className="grid gap-6 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Begin Your Musical Journey?</h2>
              <p className="text-muted-foreground">
                Contact us today to schedule a tour, learn about our programs, or sign up for lessons.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/rentals">Instrument Rentals</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[250px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=250&width=400"
                alt="Music instruments"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
