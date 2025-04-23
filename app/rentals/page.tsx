import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { rentalsData } from "@/data/rentals";

export default function RentalsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-100 to-rose-50 opacity-70 dark:from-rose-950 dark:to-slate-900 dark:opacity-90" />
        <div className="container relative py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-foreground">
              {rentalsData.hero.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {rentalsData.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Rental Information */}
      <section className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter text-foreground">
              {rentalsData.whyRent.title}
            </h2>
            <p className="text-muted-foreground">
              {rentalsData.whyRent.description}
            </p>
            <ul className="space-y-2">
              {rentalsData.whyRent.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-[350px] rounded-lg overflow-hidden">
            <Image
              src={rentalsData.whyRent.image}
              alt={rentalsData.whyRent.imageAlt}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Rental Instruments */}
      <section className="bg-slate-50 dark:bg-slate-900 py-12 md:py-16">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-8 text-foreground">
            {rentalsData.instruments.title}
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {rentalsData.instruments.items.map((instrument, index) => (
              <Card key={index} className="overflow-hidden dark:border-slate-700">
                <div className="relative h-[200px]">
                  <Image
                    src={instrument.image}
                    alt={instrument.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-foreground">{instrument.name}</CardTitle>
                  <CardDescription>
                    {instrument.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground">
                    <span className="font-semibold">Monthly Rate:</span>{" "}
                    {instrument.monthlyRate}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rental Plans */}
      {/* <section className="container py-12 md:py-16">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-8 text-foreground">
          {rentalsData.plans.title}
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {rentalsData.plans.items.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden ${
                plan.highlighted ? "border-rose-200 dark:border-rose-800 shadow-lg" : "dark:border-slate-700"
              }`}
            >
              <div
                className={`absolute top-0 right-0 ${
                  plan.highlighted
                    ? "bg-rose-500 text-white"
                    : "bg-rose-100 dark:bg-rose-900 text-rose-700 dark:text-rose-300"
                } px-3 py-1 text-sm font-medium rounded-bl-lg`}
              >
                {plan.badge}
              </div>
              <CardHeader>
                <CardTitle className="text-foreground">{plan.title}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-4xl font-bold text-foreground">
                  {plan.price}{" "}
                  <span className="text-base font-normal text-muted-foreground">
                    /{plan.period}
                  </span>
                </div>
                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  key={index}
                  asChild
                  size="lg"
                  variant={
                    plan.buttonVariant as
                      | "default"
                      | "outline"
                      | "destructive"
                      | "secondary"
                      | "ghost"
                      | "link"
                  }
                >
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section> */}

      {/* Rental Process */}
      {/* <section className="bg-rose-50 dark:bg-rose-950/20 py-12 md:py-16">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-8 text-foreground">
            {rentalsData.process.title}
          </h2>
          <div className="grid gap-8 md:grid-cols-4">
            {rentalsData.process.items.map((step, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-rose-500 text-white font-bold text-lg mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Rental Policies */}
      {/* <section className="container py-12 md:py-16">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-8 text-foreground">
          {rentalsData.policies.title}
        </h2>
        <div className="max-w-4xl mx-auto">
          <Table>
            <TableHeader>
              <TableRow className="dark:border-slate-700">
                <TableHead className="w-[250px] text-foreground">Policy</TableHead>
                <TableHead className="text-foreground">Details</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rentalsData.policies.items.map((policy, index) => (
                <TableRow key={index} className="dark:border-slate-700">
                  <TableCell className="font-medium text-foreground">{policy.policy}</TableCell>
                  <TableCell className="text-foreground">{policy.details}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="container py-12 md:py-16">
        <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-foreground">{rentalsData.cta.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            {rentalsData.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {rentalsData.cta.buttons.map((button, index) => (
              <Button
                key={index}
                asChild
                size="lg"
                variant={index === 0 ? "default" : "outline"}
              >
                <Link href={button.href}>{button.label}</Link>
              </Button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
