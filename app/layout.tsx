// app/layout.tsx
// ROOT LAYOUT: wraps every page on the site (navbar + page content + footer),
// sets the font, the SEO metadata, the theme and Google Analytics.

import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Google font, downloaded at build time
import "./globals.css"; // global styles + Tailwind + piano keyboard styles
import { GoogleAnalytics } from "@next/third-parties/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { siteConfig } from "@/data";
import AOSInit from "@/components/aos-init";

const inter = Inter({ subsets: ["latin"] });

// SEO / social-sharing metadata. Values come from data/index.ts (siteConfig).
export const metadata: Metadata = {
  // FIX: without metadataBase, Next builds the og:image URL from "localhost"
  // in a static export, so link previews (Facebook, iMessage, etc.) are broken.
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  applicationName: siteConfig.name,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: siteConfig.author,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.creator,
  publisher: siteConfig.publisher,
  openGraph: siteConfig.openGraph,
  robots: {
    ...siteConfig.robots,
    googleBot: {
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/*
          Runs BEFORE the page paints so a returning visitor doesn't see a
          flash of the wrong (light/dark) theme.
          FIX: if the saved theme was "system" the old script added a CSS class
          literally named "system" (which does nothing). It now resolves
          "system" to light/dark using the OS setting.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('music-theme');
                  if (theme === 'system') {
                    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  }
                  if (theme === 'light' || theme === 'dark') {
                    document.documentElement.classList.remove('light', 'dark');
                    document.documentElement.classList.add(theme);
                  }
                } catch (e) {
                  console.error('Error applying theme:', e);
                }
              })();
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        {/* Provides light/dark theme state to the whole site */}
        <ThemeProvider defaultTheme="light" storageKey="music-theme">
          <AOSInit /> {/* scroll-reveal helper (renders nothing) */}
          <div className="flex min-h-screen flex-col">
            <Navbar />
            {/* flex-1 pushes the footer to the bottom on short pages */}
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
      {/* Google Analytics (placed after <body>, as Next.js documents) */}
      <GoogleAnalytics gaId={siteConfig.gaId} />
    </html>
  );
}
