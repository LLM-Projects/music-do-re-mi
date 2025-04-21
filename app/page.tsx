import Link from "next/link";
import Image from "next/image";
import { Music, Users, BookOpen, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SpecialOfferPopup from "@/components/special-offer-popup";
import { homeData } from "@/data";

export default function Home() {
  return (
    <div className="flex flex-col">
      <SpecialOfferPopup />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-4">
          <video
            src={homeData.hero.video.src}
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full opacity-85"
            style={{ pointerEvents: 'none' }}
          >
            <source src={homeData.hero.video.src} type={homeData.hero.video.type} />
            {homeData.hero.video.fallback}
          </video>
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-rose-100 to-rose-50 opacity-70 dark:from-rose-950 dark:to-slate-900 dark:opacity-90 mix-blend-overlay" />

        {/* Enhanced animated music notes */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float text-rose-300 dark:text-rose-600 opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 30 + 20}px`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${10 + Math.random() * 10}s`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            >
              {["♪", "♫", "♩", "♬", "🎵", "🎶", "♭", "♮", "♯"][Math.floor(Math.random() * 9)]}
            </div>
          ))}
        </div>

        <div className="container relative flex flex-col items-center justify-center space-y-8 py-24 text-center md:py-32">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl animate-fade-in text-foreground">
            {homeData.hero.title.split(" ").map((word: any, i: any) => (
              <span
                key={i}
                className={i === 4 ? "text-rose-500 animate-pulse" : ""}
              >
                {word}{" "}
              </span>
            ))}
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl animate-slide-up">
            {homeData.hero.description}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row animate-bounce-in">
            {homeData.hero.cta.map((button: any, index: any) => (
              <Button
                key={index}
                asChild
                size="lg"
                variant={button.variant as any}
                className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <Link href={button.href}>{button.label}</Link>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-16 md:py-24 relative overflow-hidden">
        {/* Enhanced animated bubbles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-rose-100 dark:bg-rose-900/30 animate-float-slow opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 80 + 20}px`,
                height: `${Math.random() * 80 + 20}px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${15 + Math.random() * 15}s`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            />
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 relative z-10">
          {homeData.features.map((feature: any, index: any) => (
            <Card
              key={index}
              className="group transition-all duration-300 hover:shadow-lg hover:scale-105 bg-background border-border"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <CardHeader className="space-y-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-100 dark:bg-rose-900/50 group-hover:bg-rose-200 dark:group-hover:bg-rose-800/50 transition-colors">
                  <div className="animate-wave text-rose-500">
                    {feature.icon === "Music" && <Music className="h-6 w-6" />}
                    {feature.icon === "Users" && <Users className="h-6 w-6" />}
                    {feature.icon === "BookOpen" && (
                      <BookOpen className="h-6 w-6" />
                    )}
                  </div>
                </div>
                <CardTitle className="text-xl text-foreground">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {feature.description}
                </CardDescription>
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
      <section className="bg-slate-50 dark:bg-slate-900 py-16 md:py-24 relative overflow-hidden">
        {/* Enhanced wave animation */}
        <div className="absolute inset-x-0 bottom-0 h-20 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="absolute w-full h-full"
          >
            <path
              fill="currentColor"
              fillOpacity="0.2"
              className="text-rose-200 dark:text-rose-800"
              d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            >
              <animate
                attributeName="d"
                dur="8s"
                repeatCount="indefinite"
                values="
                  M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                  M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,197.3C672,213,768,235,864,229.3C960,224,1056,192,1152,176C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                  M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              />
            </path>
          </svg>
        </div>

        {/* Added music staff lines animation */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-[2px] bg-rose-200 dark:bg-rose-800"
              style={{
                top: `${20 + i * 15}%`,
                transform: `rotate(${Math.random() * 2 - 1}deg)`,
                animation: `staffLine 3s ease-in-out ${i * 0.2}s infinite alternate`,
              }}
            />
          ))}
        </div>

        <div className="container relative z-10">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-4" data-aos="fade-right">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
                {homeData.about.title}
              </h2>
              <p className="text-muted-foreground">
                {homeData.about.description}
              </p>
              <Button 
                asChild 
                variant="outline"
                className="transform transition-all duration-300 hover:scale-105 hover:shadow-md"
              >
                <Link href={homeData.about.cta.href}>
                  {homeData.about.cta.label}
                </Link>
              </Button>
            </div>
            <div
              className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden group"
              data-aos="fade-left"
            >
              <Image
                src={homeData.about.image || "/placeholder.svg"}
                alt={homeData.about.imageAlt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="container py-16 md:py-24 relative overflow-hidden">
        {/* Enhanced animated staff lines */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-[2px] bg-rose-100 dark:bg-rose-900/30"
              style={{
                top: `${15 + i * 10}%`,
                transform: `rotate(${Math.random() * 2 - 1}deg)`,
                animation: `staffLine 4s ease-in-out ${i * 0.3}s infinite alternate`,
              }}
            />
          ))}
        </div>

        {/* Floating music notes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float text-rose-200 dark:text-rose-800/30 opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 20 + 10}px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${10 + Math.random() * 10}s`,
              }}
            >
              {["♪", "♫", "♩", "♬"][Math.floor(Math.random() * 4)]}
            </div>
          ))}
        </div>

        <div className="text-center mb-12 relative z-10" data-aos="fade-up">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-foreground">
            {homeData.programs.title}
          </h2>
          <p className="mt-4 text-muted-foreground max-w-[700px] mx-auto">
            {homeData.programs.description}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 relative z-10">
          {homeData.programs.items.map((program: any, index: any) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg transform transition-all duration-500 hover:scale-[1.03] hover:shadow-xl"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="relative h-[200px]">
                <Image
                  src={program.image || "/placeholder.svg"}
                  alt={program.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform transition-transform duration-300 group-hover:translate-y-[-5px]">
                <h3 className="text-xl font-semibold">{program.title}</h3>
                <p className="mt-1 text-sm text-white/90">
                  {program.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center relative z-10" data-aos="fade-up">
          <Button 
            asChild
            className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Link href={homeData.programs.cta.href}>
              {homeData.programs.cta.label}
            </Link>
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-rose-50 dark:bg-rose-950/20 py-16 md:py-24 relative overflow-hidden">
        {/* Enhanced animated musical symbols */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute text-rose-200 dark:text-rose-800/30 opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 30 + 20}px`,
                transform: `rotate(${Math.random() * 360}deg)`,
                animation: `floatSymbol ${15 + Math.random() * 15}s linear infinite`,
                animationDelay: `${Math.random() * 10}s`,
              }}
            >
              {
                ["♪", "♫", "♩", "♬", "♭", "♮", "♯"][
                  Math.floor(Math.random() * 7)
                ]
              }
            </div>
          ))}
        </div>

        <div className="container relative z-10">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-foreground">
              {homeData.testimonials.title}
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {homeData.testimonials.items.map((testimonial: any, index: any) => (
              <Card
                key={index}
                className="bg-background border-border transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <CardContent className="pt-6">
                  <div className="mb-4 animate-pulse">
                    <Award className="h-8 w-8 text-rose-400" />
                  </div>
                  <blockquote className="text-muted-foreground italic mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-16 md:py-24">
        <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-8 md:p-12 relative overflow-hidden">
          {/* Enhanced animated wave background */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <svg
              viewBox="0 0 1000 1000"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute w-full h-full"
            >
              <path
                d="M0,500 C150,400 350,300 500,500 C650,700 850,600 1000,500 L1000,1000 L0,1000 Z"
                className="fill-rose-400 dark:fill-rose-800"
              >
                <animate
                  attributeName="d"
                  dur="15s"
                  repeatCount="indefinite"
                  values="
                    M0,500 C150,400 350,300 500,500 C650,700 850,600 1000,500 L1000,1000 L0,1000 Z;
                    M0,500 C150,600 350,700 500,500 C650,300 850,400 1000,500 L1000,1000 L0,1000 Z;
                    M0,500 C150,400 350,300 500,500 C650,700 850,600 1000,500 L1000,1000 L0,1000 Z"
                />
              </path>
            </svg>
          </div>

          {/* Added floating music notes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-float text-rose-300 dark:text-rose-700/30 opacity-30"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  fontSize: `${Math.random() * 20 + 10}px`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${10 + Math.random() * 10}s`,
                }}
              >
                {["♪", "♫", "♩", "♬"][Math.floor(Math.random() * 4)]}
              </div>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 items-center relative z-10">
            <div className="space-y-4" data-aos="fade-right">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-foreground">
                {homeData.cta.title}
              </h2>
              <p className="text-black dark:text-muted-foreground">
                {homeData.cta.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                {homeData.cta.buttons.map((button: any, index: any) => (
                  <Button 
                    key={index} 
                    asChild 
                    variant={button.variant as any}
                    className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <Link href={button.href}>{button.label}</Link>
                  </Button>
                ))}
              </div>
            </div>
            <div
              className="relative h-[250px] rounded-lg overflow-hidden group"
              data-aos="fade-left"
            >
              <Image
                src={homeData.cta.image || "/placeholder.svg"}
                alt={homeData.cta.imageAlt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
