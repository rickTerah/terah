import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import { Providers } from "./providers";
import { Nav } from "@/components/Nav";

const plexMono = IBM_Plex_Mono({ weight: "400", subsets: ["latin"] });

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
    images: [
      {
        url: "/img/laptop.png",
        width: 1200,
        height: 630,
        alt: "Patrick Mwangi - Senior Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Patrick Mwangi - Senior Software Engineer",
    description:
      "Senior Software Engineer and Head of Engineering with 6+ years experience building scalable applications.",
    images: ["/img/laptop.png"],
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${plexMono.className} bg-gruvbox-light-bg
          bg-gruvbox-light-fg/5 dark:bg-gruvbox-dark-bg
          dark:bg-gruvbox-dark-fg/5 border-gruvbox-light-fg/10`}
      >
        <Providers attribute="class" defaultTheme="system" enableSystem>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4
              focus:left-4 bg-gruvbox-light-accent dark:bg-gruvbox-dark-accent
              text-white px-4 py-2 rounded-md"
          >
            Skip to main content
          </a>
          <main
            id="main-content"
            className="relative flex flex-col justify-center mx-auto max-w-3xl
              min-h-screen overflow-hidden"
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
