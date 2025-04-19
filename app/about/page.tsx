import Image from "next/image"
import { Music, Award, Clock, Calendar, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-100 to-rose-50 opacity-70" />
        <div className="container relative py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">About Music Do Re Mi</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Discover our story, mission, and the passionate team behind our music school.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter">Our Story</h2>
            <p className="text-muted-foreground">
              Founded in 2005 by renowned pianist Maria Rodriguez and conductor David Chen, Music Do Re Mi began as a
              small studio offering piano and violin lessons to a handful of students.
            </p>
            <p className="text-muted-foreground">
              Over the years, we've grown into a comprehensive music school with multiple teaching studios, performance
              spaces, and a diverse faculty of professional musicians and educators. Today, we serve hundreds of
              students of all ages and abilities, while maintaining our commitment to personalized instruction and
              musical excellence.
            </p>
          </div>
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=300&width=500"
              alt="Music Do Re Mi founders"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-slate-50 py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <Music className="h-12 w-12 text-rose-500 mx-auto" />
            <h2 className="text-3xl font-bold tracking-tighter">Our Mission</h2>
            <p className="text-lg text-muted-foreground">
              At Music Do Re Mi, we believe that music education is a vital component of a well-rounded life. Our
              mission is to nurture musical talent, foster creativity, and build community through exceptional music
              education that is accessible, engaging, and inspiring.
            </p>
            <p className="text-lg text-muted-foreground">
              We strive to create an inclusive environment where students can discover their unique musical voice,
              develop technical proficiency, and experience the joy of making music together.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="container py-12 md:py-16">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">Our Values</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: <Music className="h-8 w-8 text-rose-500" />,
              title: "Musical Excellence",
              description: "We uphold the highest standards of musical instruction and performance.",
            },
            {
              icon: <Users className="h-8 w-8 text-rose-500" />,
              title: "Inclusive Community",
              description: "We welcome students of all backgrounds, ages, and ability levels.",
            },
            {
              icon: <Award className="h-8 w-8 text-rose-500" />,
              title: "Creative Growth",
              description: "We encourage creative expression and personal development through music.",
            },
            {
              icon: <Clock className="h-8 w-8 text-rose-500" />,
              title: "Lifelong Learning",
              description: "We inspire a lifelong appreciation and pursuit of musical knowledge.",
            },
          ].map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border">
              <div className="mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Facilities */}
      <section className="bg-rose-50 py-12 md:py-16">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">Our Facilities</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Music Do Re Mi facilities"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Teaching Studios</h3>
                <p className="text-muted-foreground">
                  Our school features 12 soundproofed teaching studios, each equipped with professional instruments,
                  including Yamaha grand pianos, and audio equipment for recording and playback.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Performance Hall</h3>
                <p className="text-muted-foreground">
                  Our 150-seat recital hall provides an intimate setting for student performances, master classes, and
                  guest artist concerts.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Ensemble Rooms</h3>
                <p className="text-muted-foreground">
                  Dedicated spaces for group lessons, chamber music, and ensemble rehearsals allow students to
                  experience the joy of making music together.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Music Library</h3>
                <p className="text-muted-foreground">
                  Our extensive collection of sheet music, books, and digital resources supports students and teachers
                  in their musical studies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="container py-12 md:py-16">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">Our Journey</h2>
        <div className="space-y-8">
          {[
            {
              year: "2005",
              title: "Founding",
              description: "Music Do Re Mi opens its doors with 2 teachers and 15 students.",
            },
            {
              year: "2008",
              title: "First Expansion",
              description: "Added 4 new teaching studios and expanded faculty to 8 instructors.",
            },
            {
              year: "2012",
              title: "Community Programs",
              description: "Launched outreach programs in local schools and community centers.",
            },
            {
              year: "2015",
              title: "New Facility",
              description: "Moved to our current location with expanded facilities including a recital hall.",
            },
            {
              year: "2020",
              title: "Online Learning",
              description: "Developed comprehensive virtual learning programs to reach students worldwide.",
            },
            {
              year: "Today",
              title: "Continuing Growth",
              description: "Serving over 500 students with a faculty of 25 professional musicians and educators.",
            },
          ].map((milestone, index) => (
            <div key={index} className="relative pl-10 md:pl-0">
              <div className="grid md:grid-cols-[200px_1fr] gap-4 items-start">
                <div className="hidden md:flex items-center gap-4">
                  <div className="text-2xl font-bold text-rose-500">{milestone.year}</div>
                  <div className="h-[2px] flex-1 bg-rose-200" />
                </div>
                <div className="absolute left-0 top-1 md:hidden">
                  <Calendar className="h-6 w-6 text-rose-500" />
                </div>
                <div className="md:hidden text-lg font-bold text-rose-500 mb-1">{milestone.year}</div>
                <div className="bg-white p-4 rounded-lg border">
                  <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
