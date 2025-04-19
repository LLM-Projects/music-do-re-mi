import Link from "next/link";
import {
  Music,
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { footerData } from "@/data";

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Music className="h-6 w-6 text-rose-500" />
              <span className="text-xl font-bold text-foreground">
                Music Do Re Mi
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              {footerData.description}
            </p>
            <div className="flex gap-4">
              {footerData.socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary"
                >
                  {social.name === "Facebook" && (
                    <Facebook className="h-5 w-5" />
                  )}
                  {social.name === "Instagram" && (
                    <Instagram className="h-5 w-5" />
                  )}
                  {social.name === "Twitter" && <Twitter className="h-5 w-5" />}
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerData.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">
              Contact Us
            </h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-rose-500" />
                <span>{footerData.contactInfo.address}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-rose-500" />
                <span>{footerData.contactInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-rose-500" />
                <span>{footerData.contactInfo.email}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Music Do Re Mi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
