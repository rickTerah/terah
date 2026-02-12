"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { RefreshCw, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8">
          <h1
            className="text-9xl font-bold text-gruvbox-light-fg
              dark:text-gruvbox-dark-fg opacity-20"
          >
            500
          </h1>
        </div>

        <div className="mb-8">
          <h2
            className="text-2xl font-semibold text-gruvbox-light-fg
              dark:text-gruvbox-dark-fg mb-4"
          >
            Something went wrong
          </h2>
          <p
            className="text-gruvbox-light-fg/70 dark:text-gruvbox-dark-fg/70
              max-w-md mx-auto mb-4"
          >
            I apologize, but something unexpected happened. The error has been
            logged and I'll look into it.
          </p>

          {process.env.NODE_ENV === "development" && (
            <details
              className="mt-4 p-4 bg-gruvbox-light-bg/50
                dark:bg-gruvbox-dark-bg/50 rounded-lg text-left"
            >
              <summary
                className="cursor-pointer text-sm font-mono
                  text-gruvbox-light-fg/70 dark:text-gruvbox-dark-fg/70"
              >
                Error details
              </summary>
              <pre
                className="mt-2 text-xs text-red-600 dark:text-red-400
                  overflow-auto"
              >
                {error.message}
                {error.stack}
              </pre>
            </details>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={reset} className="flex items-center gap-2">
            <RefreshCw className="w-4 h-4" />
            Try Again
          </Button>

          <Button variant="outline" asChild>
            <Link href="/" className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>
        </div>

        <div className="mt-12">
          <p
            className="text-sm text-gruvbox-light-fg/50
              dark:text-gruvbox-dark-fg/50"
          >
            If the problem persists, please
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
