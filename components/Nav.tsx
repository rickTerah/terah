"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/experience", label: "Experience", title: "Experience" },
  { href: "/projects", label: "Projects", title: "Projects" },
  { href: "/blog", label: "Writing", title: "Writing" },
  { href: "/contact", label: "Contact", title: "Contact" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <nav
      className="flex items-center justify-between gap-4 py-2 mb-12 border-b
        border-border"
      role="navigation"
      aria-label="Main navigation"
    >
      <Link
        href="/"
        className="font-mono text-sm font-medium text-foreground
          hover:text-primary transition-colors"
      >
        Terah
      </Link>

      <div className="flex items-center gap-1 sm:gap-2">
        {navItems.map((item) => {
          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "px-2 py-1 text-sm font-mono transition-colors",
                active
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground",
              )}
              title={item.title}
            >
              {item.label}
            </Link>
          );
        })}

        <span className="mx-1 h-4 w-px bg-border" aria-hidden="true" />

        <ThemeToggle />
      </div>
    </nav>
  );
}
