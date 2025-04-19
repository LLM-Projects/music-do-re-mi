import Image from "next/image"
import Link from "next/link"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function RentalsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-100 to-rose-50 opacity-70" />
        <div className="container relative py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Instrument Rentals</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Quality instruments for students at all levels. Rent with confidence from our well-maintained collection.
            </p>
          </div>
        </div>
      </section>

      {/* Rental Information */}
      <section className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter">Why Rent With Us?</h2>
            <p className="text-muted-foreground">
              Our instrument rental program is designed to provide students with high-quality instruments at affordable
              rates. We understand that purchasing an instrument is a significant investment, especially for beginners
              who are just starting their musical journey.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                <span>Quality instruments from reputable manufacturers</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                <span>Regular maintenance included in rental fee</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                <span>Flexible rental periods: monthly, semester, or annual plans</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                <span>Rent-to-own options available for long-term rentals</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                <span>Size exchanges for growing students at no additional cost</span>
              </li>
            </ul>
          </div>
          <div className="relative h-[350px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=350&width=500"
              alt="Musical instruments for rent"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Rental Instruments */}
      <section className="bg-slate-50 py-12 md:py-16">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">Available Instruments</h2>

          <Tabs defaultValue="strings" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="strings">Strings</TabsTrigger>
                <TabsTrigger value="woodwinds">Woodwinds</TabsTrigger>
                <TabsTrigger value="brass">Brass</TabsTrigger>
                <TabsTrigger value="percussion">Percussion</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="strings" className="space-y-8">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    name: "Violin",
                    sizes: "1/16, 1/10, 1/8, 1/4, 1/2, 3/4, 4/4",
                    monthlyRate: "$25-35",
                    image: "/placeholder.svg?height=200&width=300",
                  },
                  {
                    name: "Viola",
                    sizes: '12", 13", 14", 15", 16"',
                    monthlyRate: "$30-40",
                    image: "/placeholder.svg?height=200&width=300",
                  },
                  {
                    name: "Cello",
                    sizes: "1/8, 1/4, 1/2, 3/4, 4/4",
                    monthlyRate: "$45-60",
                    image: "/placeholder.svg?height=200&width=300",
                  },
                  {
                    name: "Double Bass",
                    sizes: "1/4, 1/2, 3/4",
                    monthlyRate: "$60-75",
                    image: "/placeholder.svg?height=200&width=300",
                  },
                  {
                    name: "Classical Guitar",
                    sizes: "1/4, 1/2, 3/4, 4/4",
                    monthlyRate: "$20-30",
                    image: "/placeholder.svg?height=200&width=300",
                  },
                  {
                    name: "Harp",
                    sizes: "Lever Harp, Small Pedal Harp",
                    monthlyRate: "$85-120",
                    image: "/placeholder.svg?height=200&width=300",
                  },
                ].map((instrument, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="relative h-[200px]">
                      <Image
                        src={instrument.image || "/placeholder.svg"}
                        alt={instrument.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{instrument.name}</CardTitle>
                      <CardDescription>Available Sizes: {instrument.sizes}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>
                        <span className="font-semibold">Monthly Rate:</span> {instrument.monthlyRate}
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

            <TabsContent value="woodwinds" className="space-y-8">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    name: "Flute",
                    details: "Student & Intermediate Models",
                    monthlyRate: "$30-45",
                    image: "/placeholder.svg?height=200&width=300",
                  },
                  {
                    name: "Clarinet",
                    details: "B♭ Clarinet, Various Brands",
                    monthlyRate: "$25-40",
                    image: "/placeholder.svg?height=200&width=300",
                  },
                  {
                    name: "Saxophone",
                    details: "Alto, Tenor, Baritone",
                    monthlyRate: "$45-75",
                    image: "/placeholder.svg?height=200&width=300",
                  },
                  {
                    name: "Oboe",
                    details: "Student & Intermediate Models",
                    monthlyRate: "$50-70",
                    image: "/placeholder.svg?height=200&width=300",
                  },
                  {
                    name: "Bassoon",
                    details: "Student Models",
                    monthlyRate: "$75-95",
                    image: "/placeholder.svg?height=200&width=300",
                  },
                  {
                    name: "Recorder",
                    details: "Soprano, Alto, Tenor",
                    monthlyRate: "$15-25",
                    image: "/placeholder.svg?height=200&width=300",
                  },
                ].map((instrument, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="relative h-[200px]">
                      <Image
                        src={instrument.image || "/placeholder.svg"}
                        alt={instrument.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{instrument.name}</CardTitle>
                      <CardDescription>{instrument.details}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>
                        <span className="font-semibold">Monthly Rate:</span> {instrument.monthlyRate}
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

            <TabsContent value="brass" className="space-y-8">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    name: "Trumpet",
                    details: "B♭ Trumpet, Various Brands",
                    monthlyRate: "$25-40",
                    image: "/placeholder.svg?height=200&width=300",
                  },
                  {
                    name: "Trombone",
                    details: "Tenor Trombone, F-Attachment",
                    monthlyRate: "$30-45",
                    image: "/placeholder.svg?height=200&width=300",
                  },
                  {
                    name: "French Horn",
                    details: "Single & Double Horn",
                    monthlyRate: "$45-65",
                    image: "/placeholder.svg?height=200&width=300",
                  },
                  {
                    name: "Euphonium",
                    details: "3 & 4 Valve Models",
                    monthlyRate: "$40-60",
                    image: "/placeholder.svg?height=200&width=300",
                  },
                  {
                    name: "Tuba",
                    details: "3/4 & 4/4 Size",
                    monthlyRate: "$60-85",
                    image: "/placeholder.svg?height=200&width=300",
                  },
                ].map((instrument, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="relative h-[200px]">
                      <Image
                        src={instrument.image || "/placeholder.svg"}
                        alt={instrument.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{instrument.name}</CardTitle>
                      <CardDescription>{instrument.details}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>
                        <span className="font-semibold">Monthly Rate:</span> {instrument.monthlyRate}
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

            <TabsContent value="percussion" className="space-y-8">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    name: "Snare Drum Kit",
                    details: "Practice Pad, Stand, Sticks",
                    monthlyRate: "$20-30",
                    image: "/placeholder.svg?height=200&width=300",
                  },
                  {
                    name: "Bell Kit",
                    details: "With Practice Pad",
                    monthlyRate: "$25-35",
                    image: "/placeholder.svg?height=200&width=300",
                  },
                  {
                    name: "Xylophone",
                    details: "Student Model",
                    monthlyRate: "$35-50",
                    image: "/placeholder.svg?height=200&width=300",
                  },
                  {
                    name: "Marimba",
                    details: "4.3 Octave",
                    monthlyRate: "$75-95",
                    image: "/placeholder.svg?height=200&width=300",
                  },
                  {
                    name: "Drum Set",
                    details: "5-Piece Kit",
                    monthlyRate: "$45-65",
                    image: "/placeholder.svg?height=200&width=300",
                  },
                  {
                    name: "Timpani",
                    details: "Set of 2",
                    monthlyRate: "$85-120",
                    image: "/placeholder.svg?height=200&width=300",
                  },
                ].map((instrument, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="relative h-[200px]">
                      <Image
                        src={instrument.image || "/placeholder.svg"}
                        alt={instrument.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{instrument.name}</CardTitle>
                      <CardDescription>{instrument.details}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>
                        <span className="font-semibold">Monthly Rate:</span> {instrument.monthlyRate}
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
          </Tabs>
        </div>
      </section>

      {/* Rental Plans */}
      <section className="container py-12 md:py-16">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">Rental Plans</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <Card className="relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-rose-100 text-rose-700 px-3 py-1 text-sm font-medium rounded-bl-lg">
              Most Flexible
            </div>
            <CardHeader>
              <CardTitle>Monthly Plan</CardTitle>
              <CardDescription>Perfect for trying out an instrument</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-4xl font-bold">
                Varies <span className="text-base font-normal text-muted-foreground">/month</span>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                  <span>Month-to-month commitment</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                  <span>Basic maintenance included</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                  <span>Return anytime with no penalty</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                  <span>Size exchanges as needed</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Choose Plan
              </Button>
            </CardFooter>
          </Card>

          <Card className="relative overflow-hidden border-rose-200 shadow-lg">
            <div className="absolute top-0 right-0 bg-rose-500 text-white px-3 py-1 text-sm font-medium rounded-bl-lg">
              Most Popular
            </div>
            <CardHeader>
              <CardTitle>Semester Plan</CardTitle>
              <CardDescription>Ideal for school-year rentals</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-4xl font-bold">
                10% Off <span className="text-base font-normal text-muted-foreground">monthly rate</span>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                  <span>4-month minimum commitment</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                  <span>Full maintenance included</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                  <span>One free service check-up</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                  <span>Size exchanges as needed</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                  <span>Option to apply 50% of payments toward purchase</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Choose Plan</Button>
            </CardFooter>
          </Card>

          <Card className="relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-rose-100 text-rose-700 px-3 py-1 text-sm font-medium rounded-bl-lg">
              Best Value
            </div>
            <CardHeader>
              <CardTitle>Annual Plan</CardTitle>
              <CardDescription>Best option for long-term rentals</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-4xl font-bold">
                20% Off <span className="text-base font-normal text-muted-foreground">monthly rate</span>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                  <span>12-month commitment</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                  <span>Premium maintenance package</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                  <span>Two free service check-ups</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                  <span>Size exchanges as needed</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                  <span>Option to apply 75% of payments toward purchase</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                  <span>Free basic accessories kit</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Choose Plan
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Rental Process */}
      <section className="bg-rose-50 py-12 md:py-16">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">How Our Rental Process Works</h2>
          <div className="grid gap-8 md:grid-cols-4">
            {[
              {
                step: "1",
                title: "Choose Your Instrument",
                description: "Browse our selection and select the instrument you want to rent.",
              },
              {
                step: "2",
                title: "Select a Plan",
                description: "Pick the rental plan that best fits your needs and budget.",
              },
              {
                step: "3",
                title: "Complete Application",
                description: "Fill out our rental application form online or in person.",
              },
              {
                step: "4",
                title: "Pick Up & Play",
                description: "Pick up your instrument from our school and start making music!",
              },
            ].map((step, index) => (
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
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">Rental Policies</h2>
        <div className="max-w-4xl mx-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[250px]">Policy</TableHead>
                <TableHead>Details</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Damage Protection</TableCell>
                <TableCell>
                  Optional damage protection plan available for $5/month covers accidental damage. Without protection,
                  renter is responsible for all repairs beyond normal wear and tear.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Maintenance</TableCell>
                <TableCell>
                  Regular maintenance is included in all rental plans. Additional repairs due to misuse or neglect will
                  be charged separately.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Early Returns</TableCell>
                <TableCell>
                  Monthly plans can be returned anytime. Semester and annual plans may be subject to an early
                  termination fee if returned before the minimum commitment period.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Late Payments</TableCell>
                <TableCell>
                  Payments are due on the 1st of each month. A $15 late fee applies after the 10th day.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Rent-to-Own</TableCell>
                <TableCell>
                  A portion of rental payments can be applied toward the purchase of a new instrument. See specific
                  plans for details.
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-12 md:py-16">
        <div className="bg-slate-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Making Music?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Contact us today to reserve your instrument or schedule a fitting appointment.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/programs">Explore Programs</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
