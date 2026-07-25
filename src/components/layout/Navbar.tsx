"use client";

import Link from "next/link";
import Container from "../ui/Container";

import { Sheet, SheetTrigger, SheetContent } from "../ui/sheet";
import { Button } from "../ui/button";
import NavLinks from "../sections/NavLinks";
import MobileMenu from "../sections/MobileMenu";
import Logo from "../sections/Logo";
import SocialLinks from "../sections/SocialLinks";
import { ThemeToggle } from "../shared/ThemeToggle";
import { Menu } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <Logo />

          <div className="hidden md:flex items-center gap-8">
            <NavLinks />
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <div className="hidden md:flex items-center gap-4">
              <SocialLinks />
              <Link href="/resume">
                <Button variant="animated">Resume</Button>
              </Link>
            </div>

            <ThemeToggle />

            <div className="md:hidden">
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger render={<Button variant="ghost" size="icon-sm" />}>
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </SheetTrigger>

                <SheetContent side="right">
                  <MobileMenu closeMenu={() => setOpen(false)} />
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Navbar;
