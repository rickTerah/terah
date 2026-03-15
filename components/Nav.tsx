"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "~", title: "Home" },
  { href: "/experience", label: "~/experience", title: "Experience" },
  { href: "/projects", label: "~/projects", title: "Projects" },
  { href: "/blog", label: "~/blog", title: "Blog" },
  { href: "/contact", label: "~/contact", title: "Contact" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <nav
      className="flex items-center justify-between py-4 mb-10"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="flex items-center gap-4">
        <Link
          href="/"
          className="group flex items-center gap-2 hover:text-primary
            transition-colors"
        >
          <span
            className="font-mono text-sm text-muted-foreground
              group-hover:text-primary transition-colors"
          >
            <span className="text-accent">➜</span> ~/portfolio
          </span>
          <span className="text-primary animate-cursor-blink">_</span>
        </Link>
      </div>

      <div className="flex items-center gap-1">
        <div className="hidden md:flex items-center">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                `px-3 py-1.5 text-sm font-mono transition-all duration-200
                border border-transparent`,
                pathname === item.href
                  ? "text-primary border-primary/30 bg-primary/5"
                  : `text-muted-foreground hover:text-foreground
                    hover:border-border`,
              )}
              title={item.title}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="w-px h-4 bg-border mx-2 hidden md:block" />

        <ThemeToggle />
      </div>
    </nav>
  );
}
