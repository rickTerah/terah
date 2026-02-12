import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer
      className="text-gruvbox-light-fg dark:text-gruvbox-dark-fg mb-16 flex
        justify-between items-center"
      role="contentinfo"
    >
      <div className="">
        <p>
          &copy; {new Date().getFullYear()} Patrick Mwangi. All rights reserved.
        </p>
      </div>

      <div className="flex flex-row">
        <Link
          href="https://github.com/patrickmwangi"
          className="ml-4"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
        >
          <Github />
        </Link>
        <Link
          href="https://linkedin.com/in/patrickmwangi"
          className="ml-4"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
        >
          <Linkedin />
        </Link>

        <Link
          href="mailto:patrick@terah.dev"
          className="ml-4"
          aria-label="Email Contact"
        >
          <Mail />
        </Link>
      </div>
    </footer>
  );
};
