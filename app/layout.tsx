import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import { Providers } from "./providers";
import { Nav } from "@/components/Nav";

const plexMono = IBM_Plex_Mono({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "terah",
  description: "Patrick Mwangi - Senior Software Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${plexMono.className} bg-gruvbox-light-bg bg-gruvbox-light-fg/5 dark:bg-gruvbox-dark-bg dark:bg-gruvbox-dark-fg/5   border-gruvbox-light-fg/10`}
      >
        <Providers attribute="class" defaultTheme="system" enableSystem>
          <main className="relative flex flex-col justify-center mx-auto max-w-3xl min-h-screen overflow-hidden">
            <Nav />

            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
