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
          <h1 className="text-8xl font-semibold text-foreground/15">500</h1>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Something went wrong</h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-4">
            I apologize, but something unexpected happened. The error has been
            logged and I'll look into it.
          </p>

          {process.env.NODE_ENV === "development" && (
            <details
              className="mt-4 p-4 border border-border bg-muted text-left"
            >
              <summary className="cursor-pointer text-sm text-muted-foreground">
                Error details
              </summary>
              <pre className="mt-2 text-xs text-destructive overflow-auto">
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
          <p className="text-sm text-muted-foreground">
            If the problem persists, please
            <Link href="/contact" className="text-primary hover:underline ml-1">
              contact me
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
