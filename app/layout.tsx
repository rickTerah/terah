import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter } from "next/font/google";
import { Providers } from "./providers";
import { Nav } from "@/components/Nav";

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Patrick Mwangi - Senior Software Engineer | Head of Engineering",
  description:
    "Senior Software Engineer and Head of Engineering with 6+ years experience building scalable applications, leading teams, and transforming digital products. Expert in Next.js, React, TypeScript, and cloud architecture.",
  keywords: [
    "Patrick Mwangi",
    "Software Engineer",
    "Head of Engineering",
    "Next.js",
    "React",
    "TypeScript",
    "Senior Developer",
    "Full Stack",
    "Technical Lead",
    "Nairobi",
  ],
  authors: [{ name: "Patrick Mwangi" }],
  creator: "Patrick Mwangi",
  publisher: "Patrick Mwangi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://terah.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Patrick Mwangi - Senior Software Engineer | Head of Engineering",
    description:
      "Senior Software Engineer and Head of Engineering with 6+ years experience building scalable applications and leading development teams.",
    url: "https://terah.dev",
    siteName: "Patrick Mwangi",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Patrick Mwangi - Senior Software Engineer",
    description:
      "Senior Software Engineer and Head of Engineering with 6+ years experience building scalable applications.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${mono.variable} ${sans.variable}`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen bg-background antialiased">
        <Providers attribute="class" defaultTheme="light" enableSystem>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4
              focus:left-4 bg-primary text-primary-foreground px-4 py-2
              font-mono text-sm"
          >
            Skip to main content
          </a>

          <main
            id="main-content"
            className="relative flex flex-col mx-auto max-w-3xl w-full
              min-h-screen px-5 sm:px-6 py-6"
            role="main"
          >
            <header>
              <Nav />
            </header>

            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
