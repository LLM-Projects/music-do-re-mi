import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { rentalsData } from "@/data/rentals";

export default function RentalsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-100 to-rose-50 opacity-70 dark:from-rose-950 dark:to-slate-900 dark:opacity-90" />
        <div className="container relative py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
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
            <h2 className="text-3xl font-bold tracking-tighter">
              {rentalsData.whyRent.title}
            </h2>
            <p className="text-muted-foreground">
              {rentalsData.whyRent.description}
            </p>
            <ul className="space-y-2">
              {rentalsData.whyRent.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                  <span>{benefit}</span>
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
      <section className="bg-slate-50 py-12 md:py-16">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">
            {rentalsData.instruments.title}
          </h2>

          <Tabs
            defaultValue={rentalsData.instruments.categories[0].name}
            className="w-full"
          >
            <div className="flex justify-center mb-8">
              <TabsList>
                {rentalsData.instruments.categories.map((category) => (
                  <TabsTrigger key={category.name} value={category.name}>
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {rentalsData.instruments.categories.map((category) => (
              <TabsContent
                key={category.name}
                value={category.name}
                className="space-y-8"
              >
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {category.items.map((instrument, index) => (
                    <Card key={index} className="overflow-hidden">
                      <div className="relative h-[200px]">
                        <Image
                          src={instrument.image}
                          alt={instrument.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>{instrument.name}</CardTitle>
                        <CardDescription>
                          {"sizes" in instrument
                            ? `Available Sizes: ${instrument.sizes}`
                            : instrument.details}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>
                          <span className="font-semibold">Monthly Rate:</span>{" "}
                          {instrument.monthlyRate}
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">
                          Rental Details
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Rental Plans */}
      <section className="container py-12 md:py-16">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">
          {rentalsData.plans.title}
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {rentalsData.plans.items.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden ${
                plan.highlighted ? "border-rose-200 shadow-lg" : ""
              }`}
            >
              <div
                className={`absolute top-0 right-0 ${
                  plan.highlighted
                    ? "bg-rose-500 text-white"
                    : "bg-rose-100 text-rose-700"
                } px-3 py-1 text-sm font-medium rounded-bl-lg`}
              >
                {plan.badge}
              </div>
              <CardHeader>
                <CardTitle>{plan.title}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-4xl font-bold">
                  {plan.price}{" "}
                  <span className="text-base font-normal text-muted-foreground">
                    /{plan.period}
                  </span>
                </div>
                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
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
      </section>

      {/* Rental Process */}
      <section className="bg-rose-50 py-12 md:py-16">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">
            {rentalsData.process.title}
          </h2>
          <div className="grid gap-8 md:grid-cols-4">
            {rentalsData.process.items.map((step, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-rose-500 text-white font-bold text-lg mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rental Policies */}
      <section className="container py-12 md:py-16">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">
          {rentalsData.policies.title}
        </h2>
        <div className="max-w-4xl mx-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[250px]">Policy</TableHead>
                <TableHead>Details</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rentalsData.policies.items.map((policy, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{policy.policy}</TableCell>
                  <TableCell>{policy.details}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-12 md:py-16">
        <div className="bg-slate-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">{rentalsData.cta.title}</h2>
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
