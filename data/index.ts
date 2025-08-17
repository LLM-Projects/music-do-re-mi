// Site configuration
export const siteConfig = {
  name: "Music Do Re Mi",
  description: "Learn music with our expert instructors at Music Do Re Mi",
  url: "https://musicdoremi.com",
  keywords: [
    "music school",
    "instrument rentals",
    "instrument purchase",
    "john creeks music school",
    "music school near me",
    "violin lessons",
    "piano classes",
    "guitar lessons",
  ],
  author: "Music Do Re Mi",
  creator: "Music Do Re Mi",
  publisher: "Music Do Re Mi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://musicdoremi.com",
    siteName: "Music Do Re Mi",
    title: "Music Do Re Mi - Premier Music School & Lessons",
    description:
      "Learn music with expert instructors at Music Do Re Mi. Offering piano, guitar, voice, strings, and more for all ages and skill levels.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  gaId: "G-TJRVQMPP52",
};

// Navigation
export const navigationLinks = [
  { href: "/about", label: "About" },
  { href: "/faculty", label: "Faculty" },
  { href: "/news", label: "News & Events" },
  { href: "/instruments", label: "Instruments for Rent and Purchase" },
  { href: "/contact", label: "Contact Us" },
];

// Import data from individual files
import { homeData } from "./home";
import { aboutData } from "./about";
import { facultyData } from "./faculty";
import { instrumentsData } from "./instruments";
import { contactData } from "./contact";
import { newsData } from "./news";

// Special offer popup data
export const specialOfferData = {
  title: "☀️ Summer Concert 🎵",
  details: "July 19, 2025 (7 PM Onwards)",
  description:
    "Come join us for an unforgettable Summer Music Adventure. ",
  buttonText: "Learn More",
  buttonLink: "/news",
  footnote:
    "Come learn, perform, and make lasting memories at Music Do Re Mi 🎶",
};

// Footer data
export const footerData = {
  description:
    "Inspiring musical excellence. We provide quality music education for students of all ages and abilities.",
  socialLinks: [
    { name: "Facebook", href: "https://www.facebook.com/people/Music-Do-Re-Mi/61576684795987/" },
    { name: "Instagram", href: "https://www.instagram.com/musicdoremi525/" },
  ],
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Faculty", href: "/faculty" },
    { label: "News & Events", href: "/news" },
    { label: "Contact Us", href: "/contact" },
    { label: "Instruments for Rent and Purchase", href: "/rentals" },
  ],
  contactInfo: {
    address: "10475 Medlock Bridge Road, Street 101 Duluth, GA 30097",
    phone: "347-399-1924",
    email: "musicdoremi525@gmail.com",
  },
};

// Re-export all data
export { homeData, aboutData, facultyData, instrumentsData, contactData, newsData };
