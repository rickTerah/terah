import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer
      className="text-gruvbox-light-fg dark:text-gruvbox-dark-fg mb-16 flex
        justify-between items-center"
    >
      <div className="">
        <p>
          &copy; {new Date().getFullYear()} Patrick Mwangi. All rights reserved.
        </p>
      </div>

      <div className="flex flex-row">
        <Link href="" className="ml-4">
          <Github />
        </Link>
        <Link href="" className="ml-4">
          <Linkedin />
        </Link>

        <Link href="" className="ml-4">
          <Mail />
        </Link>
      </div>
    </footer>
  );
};
