"use client"

import Link from "next/link"
import { Sparkles, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import ModeToggle from "@/components/mode-toggle"
import { cn } from "@/lib/utils"

const services = [
  {
    title: "Laser Hair Removal",
    href: "/services/laser-hair-removal",
    description: "Advanced laser technology for permanent hair reduction with guaranteed results.",
  },
  {
    title: "Anti-Aging Therapy",
    href: "/services/anti-aging",
    description: "Rejuvenating treatments to restore youthful skin and reduce signs of aging.",
  },
  {
    title: "Sunspot Removal",
    href: "/services/sunspot-removal",
    description: "Professional laser treatments to eliminate sunspots and pigmentation.",
  },
  {
    title: "Skin Resurfacing",
    href: "/services/skin-resurfacing",
    description: "Advanced cosmetic procedures for smoother, clearer skin texture.",
  },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Sparkles className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl">RadiantSkin</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {services.map((service) => (
                    <ListItem
                      key={service.title}
                      title={service.title}
                      href={service.href}
                    >
                      {service.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/pricing">Pricing</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/results">Results</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/contact">Contact</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right side - CTA Button and Theme Toggle */}
        <div className="flex items-center space-x-4">
          <Button asChild className="hidden md:inline-flex">
            <Link href="/book-consultation">Book Consultation</Link>
          </Button>

          <ModeToggle />

          {/* Mobile Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-4 w-4" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem asChild>
                <Link href="/" className="w-full">Home</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/services" className="w-full">Treatments</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/pricing" className="w-full">Pricing</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/results" className="w-full">Results</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/contact" className="w-full">Contact</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/book-consultation" className="w-full">Book Consultation</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          )}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}