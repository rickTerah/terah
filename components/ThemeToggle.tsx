"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggle({ className }: { className?: string }) {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      className={`${className} bg-gruvbox-light-bg/50 dark:bg-gruvbox-dark-bg/50 backdrop-blur-sm border-gruvbox-light-fg/20 dark:border-gruvbox-dark-fg/20 hover:bg-gruvbox-light-bg/70 dark:hover:bg-gruvbox-dark-bg/70`}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun className="w-[1.2rem] h-[1.2rem] text-gruvbox-light-fg rotate-0 dark:-rotate-90 scale-100 dark:scale-0 transition-all" />
      <Moon className="absolute w-[1.2rem] h-[1.2rem] text-gruvbox-dark-fg rotate-90 dark:rotate-0 scale-0 dark:scale-100 transition-all" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

export default ThemeToggle;
