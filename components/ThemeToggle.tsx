"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="icon"
        className={cn(
          `bg-transparent border border-gruvbox-light-fg/20
          dark:border-gruvbox-dark-fg/20`,
          "backdrop-blur-sm",
          className,
        )}
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "relative transition-colors duration-300",
        "bg-gruvbox-light/50 dark:bg-gruvbox-dark/50",
        "border border-gruvbox-light/20 dark:border-gruvbox-dark/20",
        "hover:bg-gruvbox-light/70 dark:hover:bg-gruvbox-dark/70",
        "backdrop-blur-sm",
        className,
      )}
    >
      <div className="relative flex items-center justify-center w-5 h-5">
        <Moon
          className={cn(
            "absolute w-5 h-5 text-gruvbox-light-fg transition-all duration-500",
            isDark
              ? "rotate-90 scale-0 opacity-0"
              : "rotate-0 scale-100 opacity-100",
          )}
        />
        <Sun
          className={cn(
            "absolute w-5 h-5 text-gruvbox-dark-fg transition-all duration-500",
            isDark
              ? "rotate-0 scale-100 opacity-100"
              : "-rotate-90 scale-0 opacity-0",
          )}
        />
      </div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

export default ThemeToggle;
