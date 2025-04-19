export const rentalsData = {
  hero: {
    title: "Instrument Rentals",
    description: "Quality instruments for students at all levels. Rent with confidence from our well-maintained collection.",
  },
  whyRent: {
    title: "Why Rent With Us?",
    description: "Our instrument rental program is designed to provide students with high-quality instruments at affordable rates. We understand that purchasing an instrument is a significant investment, especially for beginners who are just starting their musical journey.",
    benefits: [
      "Quality instruments from reputable manufacturers",
      "Regular maintenance included in rental fee",
      "Flexible rental periods: monthly, semester, or annual plans",
      "Rent-to-own options available for long-term rentals",
      "Size exchanges for growing students at no additional cost",
    ],
    image: "/placeholder.svg?height=350&width=500",
    imageAlt: "Musical instruments for rent",
  },
  instruments: {
    title: "Available Instruments",
    categories: [
      {
        name: "strings",
        label: "Strings",
        items: [
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
        ],
      },
      {
        name: "woodwinds",
        label: "Woodwinds",
        items: [
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
        ],
      },
      {
        name: "brass",
        label: "Brass",
        items: [
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
        ],
      },
      {
        name: "percussion",
        label: "Percussion",
        items: [
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
        ],
      },
    ],
  },
  plans: {
    title: "Rental Plans",
    items: [
      {
        title: "Monthly Plan",
        description: "Perfect for trying out an instrument",
        price: "Varies",
        period: "month",
        badge: "Most Flexible",
        features: [
          "Month-to-month commitment",
          "Basic maintenance included",
          "Return anytime with no penalty",
          "Size exchanges as needed",
        ],
        buttonText: "Choose Plan",
        buttonVariant: "outline",
      },
      {
        title: "Semester Plan",
        description: "Ideal for school-year rentals",
        price: "10% Off",
        period: "monthly rate",
        badge: "Most Popular",
        features: [
          "4-month minimum commitment",
          "Full maintenance included",
          "One free service check-up",
          "Size exchanges as needed",
          "Option to apply 50% of payments toward purchase",
        ],
        buttonText: "Choose Plan",
        buttonVariant: "default",
        highlighted: true,
      },
      {
        title: "Annual Plan",
        description: "Best option for long-term rentals",
        price: "20% Off",
        period: "monthly rate",
        badge: "Best Value",
        features: [
          "12-month commitment",
          "Premium maintenance package",
          "Two free service check-ups",
          "Size exchanges as needed",
          "Option to apply 75% of payments toward purchase",
          "Free basic accessories kit",
        ],
        buttonText: "Choose Plan",
        buttonVariant: "outline",
      },
    ],
  },
  process: {
    title: "How Our Rental Process Works",
    items: [
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
    ],
  },
  policies: {
    title: "Rental Policies",
    items: [
      {
        policy: "Damage Protection",
        details: "Optional damage protection plan available for $5/month covers accidental damage. Without protection, renter is responsible for all repairs beyond normal wear and tear.",
      },
      {
        policy: "Maintenance",
        details: "Regular maintenance is included in all rental plans. Additional repairs due to misuse or neglect will be charged separately.",
      },
      {
        policy: "Early Returns",
        details: "Monthly plans can be returned anytime. Semester and annual plans may be subject to an early termination fee if returned before the minimum commitment period.",
      },
      {
        policy: "Late Payments",
        details: "Payments are due on the 1st of each month. A $15 late fee applies after the 10th day.",
      },
      {
        policy: "Rent-to-Own",
        details: "A portion of rental payments can be applied toward the purchase of a new instrument. See specific plans for details.",
      },
    ],
  },
  cta: {
    title: "Ready to Start Making Music?",
    description: "Contact us today to reserve your instrument or schedule a fitting appointment.",
    buttons: [
      { label: "Contact Us", href: "/contact" },
      { label: "Explore Programs", href: "/programs" },
    ],
  },
} 