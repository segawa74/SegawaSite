"use client";

import * as React from "react";
import { Link } from "react-scroll";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const menuItems = [
  { name: "Home", to: "hero", offset: -80 },
  { name: "Skills", to: "skills", offset: -120 },
  { name: "Experience", to: "exp", offset: -100 },
  { name: "Portfolio", to: "pf", offset: -100 },
  { name: "Contact Me", to: "contact-me", offset: -100 },
];

export function NavBar() {
  const [activeSection, setActiveSection] = React.useState("");

  const handleSetActive = (to: string) => {
    setActiveSection(to);
  };

  return (
    <nav className="sticky top-0 z-30 w-full backdrop-blur-sm bg-background/80 border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-4">
          {menuItems.map((item) => (
            <Link
              key={item.to}
              activeClass="text-primary font-semibold"
              to={item.to}
              spy={true}
              smooth={true}
              offset={item.offset}
              onSetActive={() => handleSetActive(item.to)}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                activeSection === item.to
                  ? "text-primary font-semibold"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <MobileNav />
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

export default NavBar;
