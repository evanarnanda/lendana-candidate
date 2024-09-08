import Link from "next/link";
import { RocketIcon } from "@/components/icons";
import Image from "next/image";
// import { APP_TITLE } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

const routes = [
  { name: "Home", href: "/" },
  // { name: "Features", href: "/#features" },
  { name: "Job", href: "/job" },
  { name: "Training", href: "/training" },
] as const;

export const Header = () => {
  return (
    <header className="px-4 py-4 lg:py-6">
      <div className="container flex items-center justify-between gap-2 p-0">
        
        {/* Logo (aligned to the far left) */}
        <Link
          className="flex items-center justify-start text-xl font-medium"
          href="/"
        >
          <Image
            src="/images/logo.png" // Path relative to the `public` directory
            alt="Description of Image"
            width={150}
            height={90}
          />
        </Link>
        
        {/* Menu (centered horizontally) */}
        <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 gap-4 sm:gap-6">
          {routes.map(({ name, href }) => (
            <Link
              key={name}
              className="text-sm font-medium text-muted-foreground/70 transition-colors hover:text-muted-foreground"
              href={href}
            >
              {name}
            </Link>
          ))}
        </nav>
        
        {/* Hamburger Menu (visible on mobile) */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="focus:outline-none focus:ring-1 md:hidden"
              size="icon"
              variant="outline"
            >
              <HamburgerMenuIcon className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <div className="py-1">
              {routes.map(({ name, href }) => (
                <DropdownMenuItem key={name} asChild>
                  <Link href={href}>{name}</Link>
                </DropdownMenuItem>
              ))}
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
        
        {/* Login button (aligned to the far right) */}
        <div className="ml-auto flex space-x-2">
          <Button asChild variant="ghost">
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild >
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>

      </div>
    </header>
  );
};
