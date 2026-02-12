import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export const Nav = ({}: { className?: string }) => {
  return (
    <nav
      className="flex items-center justify-between mt-4 mb-16"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="flex items-center gap-8">
        <Link
          href="/"
          className="font-bold text-gruvbox-light-fg dark:text-gruvbox-dark-fg
            hover:text-gruvbox-light-accent dark:hover:text-gruvbox-dark-accent
            transition-colors"
        >
          Terah
        </Link>
        <Link
          href="/blog"
          className="text-gruvbox-light-fg dark:text-gruvbox-dark-fg
            hover:text-gruvbox-light-accent dark:hover:text-gruvbox-dark-accent
            transition-colors"
        >
          Blog
        </Link>
        <Link
          href="/contact"
          className="text-gruvbox-light-fg dark:text-gruvbox-dark-fg
            hover:text-gruvbox-light-accent dark:hover:text-gruvbox-dark-accent
            transition-colors"
        >
          Contact
        </Link>
      </div>

      <ThemeToggle />
    </nav>
  );
};
