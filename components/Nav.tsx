import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export const Nav = ({}: { className?: string }) => {
  return (
    <nav
      className="flex items-center justify-between mt-4 mb-16"
      role="navigation"
      aria-label="Main navigation"
    >
      <NavigationMenu className="flex-none">
        <NavigationMenuItem className="mr-8 list-none">
          <NavigationMenuLink asChild>
            <Link href="/" className="font-bold">
              Terah
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="list-none">
          <NavigationMenuLink asChild>
            <Link href="/blog">Blog</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="list-none">
          <NavigationMenuLink asChild>
            <Link href="/contact">Contact</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenu>

      <ThemeToggle className="ml-auto" />
    </nav>
  );
};
