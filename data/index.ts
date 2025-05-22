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
  { href: "/faculty", label: "Faculty" },
  { href: "/news", label: "News & Events" },
  { href: "/contact", label: "Contact Us" },
  { href: "/rentals", label: "Instrument Rentals" },
];

// Import data from individual files
import { homeData } from "./home";
import { aboutData } from "./about";
import { facultyData } from "./faculty";
import { rentalsData } from "./rentals";
import { contactData } from "./contact";
import { newsData } from "./news";

// Special offer popup data
export const specialOfferData = {
  title: "☀️ Summer Music Camp 🎵",
  details: "June 9 – July 18, 2025",
  description:
    "Join us for an unforgettable Summer Music Adventure.  No experience?  No problem – we provide beginner workshops too!  Enjoy music classes, arts and crafts, and other fun activities! Open to ages 5-16.",
  buttonText: "Learn More",
  buttonLink: "/news",
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
    { label: "Faculty", href: "/faculty" },
    { label: "News & Events", href: "/news" },
    { label: "Contact Us", href: "/contact" },
    { label: "Instrument Rentals", href: "/rentals" },
  ],
  contactInfo: {
    address: "10475 Medlock Bridge Road, Street 101 Duluth, GA 30097",
    phone: "347-399-1924",
    email: "musicdoremi@myyahoo.com",
  },
};

// Re-export all data
export { homeData, aboutData, facultyData, rentalsData, contactData, newsData };
