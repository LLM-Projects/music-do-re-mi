// Site configuration
export const siteConfig = {
  name: "Music Do Re Mi",
  description: "Learn music with our expert instructors at Music Do Re Mi",
  url: "https://musicdoremi.com",
  ogImage: "https://musicdoremi.com/og.jpg",
};

// Navigation
export const navigationLinks = [
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  // { href: "/virtual-keyboard", label: "Virtual Piano" },
  { href: "/contact", label: "Contact" },
  { href: "/rentals", label: "Instrument Rentals" },
];

// Import data from individual files
import { homeData } from "./home";
import { aboutData } from "./about";
import { programsData } from "./programs";
import { rentalsData } from "./rentals";
import { contactData } from "./contact";

// Special offer popup data
export const specialOfferData = {
  title: "🎵 Rising Starts Student Concert 🎵",
  details: "Saturday May 10, 2025 (7 - 8:30 PM)",
  description:
    "Northview Auditorium, 10625 Parson Rd, Johns Creek, GA 30097",
  buttonText: "Learn More",
  buttonLink: "/programs",
  footnote:
    "Come learn, perform, and make lasting memories at Music Do Re Mi! 🎶",
};

// Footer data
export const footerData = {
  description:
    "Inspiring musical excellence. We provide quality music education for students of all ages and abilities.",
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
    address: "10475 Medlock Bridge Road, Street 101 Duluth, GA 30097",
    phone: "347-399-192",
    email: "musicdoremi@myyahoo.com",
  },
};

// Re-export all data
export { homeData, aboutData, programsData, rentalsData, contactData };
