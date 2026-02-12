"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8">
          <h1
            className="text-9xl font-bold text-gruvbox-light-fg
              dark:text-gruvbox-dark-fg opacity-20"
          >
            404
          </h1>
        </div>

        <div className="mb-8">
          <h2
            className="text-2xl font-semibold text-gruvbox-light-fg
              dark:text-gruvbox-dark-fg mb-4"
          >
            Page Not Found
          </h2>
          <p
            className="text-gruvbox-light-fg/70 dark:text-gruvbox-dark-fg/70
              max-w-md mx-auto"
          >
            Oops! The page you're looking for doesn't exist or has been moved.
            Let's get you back on track.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/" className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>

          <Button
            variant="outline"
            onClick={() => window.history.back()}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </Button>
        </div>

        <div className="mt-12">
          <p
            className="text-sm text-gruvbox-light-fg/50
              dark:text-gruvbox-dark-fg/50"
          >
            If you believe this is an error, please
            <Link
              href="/contact"
              className="text-gruvbox-light-accent dark:text-gruvbox-dark-accent
                hover:underline ml-1"
            >
              contact me
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
