export const homeData = {
  hero: {
    title: "Discover the Joy of Music",
    description:
      "At Music Do Re Mi, we nurture musical talent through expert instruction, inspiring facilities, and a supportive community.",
    cta: [
      { label: "Explore Programs", href: "/programs", variant: "default" },
      { label: "Contact Us", href: "/contact", variant: "outline" },
    ],
  },
  features: [
    {
      icon: "Music",
      title: "Expert Instruction",
      description: "Learn from our team of professional musicians and certified educators.",
      link: "/programs",
      linkText: "View Programs",
    },
    {
      icon: "Users",
      title: "All Ages Welcome",
      description: "Programs for children, teens, adults, and seniors at all skill levels.",
      link: "/about",
      linkText: "Learn More",
    },
    {
      icon: "BookOpen",
      title: "Diverse Curriculum",
      description: "From classical to contemporary, explore various musical styles and techniques.",
      link: "/programs",
      linkText: "Explore Courses",
    },
  ],
  about: {
    title: "Our Passion for Music Education",
    description:
      "For over 15 years, Music Do Re Mi has been a cornerstone of musical education in our community. Our school combines traditional teaching methods with innovative approaches to inspire students of all ages and abilities.",
    cta: { label: "About Us", href: "/about" },
    image: "/placeholder.svg?height=400&width=600",
    imageAlt: "Music students in a class",
  },
  programs: {
    title: "Our Music Programs",
    description: "Discover the perfect program to match your musical interests and goals.",
    items: [
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
    ],
    cta: { label: "View All Programs", href: "/programs" },
  },
  testimonials: {
    title: "What Our Students Say",
    items: [
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
    ],
  },
  cta: {
    title: "Ready to Begin Your Musical Journey?",
    description: "Contact us today to schedule a tour, learn about our programs, or sign up for lessons.",
    buttons: [
      { label: "Contact Us", href: "/contact", variant: "default" },
      { label: "Instrument Rentals", href: "/rentals", variant: "outline" },
    ],
    image: "/placeholder.svg?height=250&width=400",
    imageAlt: "Music instruments",
  },
} 