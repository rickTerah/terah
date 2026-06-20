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
    <footer
      className="mt-16 border-t border-border pt-6 flex flex-col gap-4
        sm:flex-row sm:items-center sm:justify-between"
      role="contentinfo"
    >
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Patrick Mwangi
      </p>

      <div className="flex items-center gap-4">
        {socialLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-muted-foreground hover:text-primary
              transition-colors"
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
    </footer>
  );
}
