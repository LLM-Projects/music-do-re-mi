// Site configuration
export const siteConfig = {
  name: "Music Do Re Mi",
  description: "Learn music with our expert instructors at Music Do Re Mi",
  url: "https://musicdoremi.com",
  ogImage: "https://musicdoremi.com/og.jpg",
}

// Navigation
export const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/virtual-keyboard", label: "Virtual Piano" },
  { href: "/contact", label: "Contact" },
  { href: "/rentals", label: "Instrument Rentals" },
]

// Import data from individual files
import { homeData } from "./home"
import { aboutData } from "./about"
import { programsData } from "./programs"
import { rentalsData } from "./rentals"
import { contactData } from "./contact"

// Special offer popup data
export const specialOfferData = {
  title: "🎵 Summer Special Offer 🎵",
  discount: "20% OFF",
  description: "Sign up for summer music lessons before July 31st and receive 20% off your first month!",
  buttonText: "Learn More",
  buttonLink: "/contact",
  footnote: "*Offer valid for new students only. Cannot be combined with other promotions.",
}

// Footer data
export const footerData = {
  description:
    "Inspiring musical excellence since 2005. We provide quality music education for students of all ages and abilities.",
  socialLinks: [
    { name: "Facebook", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "Twitter", href: "#" },
  ],
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Programs", href: "/programs" },
    { label: "Contact", href: "/contact" },
    { label: "Instrument Rentals", href: "/rentals" },
  ],
  contactInfo: {
    address: "123 Music Avenue, Harmony City",
    phone: "(555) 123-4567",
    email: "info@musicdoremi.com",
  },
}

// Re-export all data
export { homeData, aboutData, programsData, rentalsData, contactData }
