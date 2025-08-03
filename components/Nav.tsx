import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export const Nav = ({}: { className?: string }) => {
  return (
    <nav className=" flex items-center justify-beween mt-4 mb-16">
      <NavigationMenu className="flex-none">
        <NavigationMenuItem className="mr-8 list-none">
          <NavigationMenuLink asChild>
            <Link href="/" className="font-bold ">
              Patrick Mwangi
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="list-none ">
          <NavigationMenuLink asChild>
            <Link href="/">Blog</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenu>

      <ThemeToggle className="ml-auto" />
    </nav>
  );
};
