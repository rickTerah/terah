"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button
        className={cn(
          `w-9 h-9 flex items-center justify-center border border-border
          hover:border-primary transition-colors`,
          className,
        )}
      >
        <span className="w-4 h-4" />
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        `relative w-9 h-9 flex items-center justify-center border border-border
        hover:border-primary transition-all duration-300 group`,
        className,
      )}
      aria-label="Toggle theme"
    >
      <div className="relative w-4 h-4">
        <Sun
          className={cn(
            "absolute inset-0 w-4 h-4 transition-all duration-300",
            isDark
              ? "rotate-90 scale-0 opacity-0"
              : "rotate-0 scale-100 opacity-100",
          )}
        />
        <Moon
          className={cn(
            "absolute inset-0 w-4 h-4 transition-all duration-300",
            isDark
              ? "rotate-0 scale-100 opacity-100"
              : "-rotate-90 scale-0 opacity-0",
          )}
        />
      </div>
    </button>
  );
}

export default ThemeToggle;
