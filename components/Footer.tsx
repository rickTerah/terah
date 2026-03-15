import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  { href: "https://github.com/patrickmwangi", icon: Github, label: "GitHub" },
  {
    href: "https://linkedin.com/in/patrickmwangi",
    icon: Linkedin,
    label: "LinkedIn",
  },
  { href: "mailto:patrick@terah.dev", icon: Mail, label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-border pt-8 mt-24" role="contentinfo">
      <div
        className="flex flex-col sm:flex-row items-center justify-between gap-6"
      >
        <div
          className="flex items-center gap-2 font-mono text-sm
            text-muted-foreground"
        >
          <span>© {new Date().getFullYear()}</span>
          <span className="text-border">|</span>
          <span>PATRICK MWANGI</span>
          <span className="text-border">|</span>
          <span>ALL RIGHTS RESERVED</span>
        </div>

        <div className="flex items-center gap-1">
          {socialLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="p-2 border border-border hover:border-primary
                hover:text-primary transition-all font-mono text-xs"
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              aria-label={link.label}
              title={link.label}
            >
              <link.icon className="h-4 w-4" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
