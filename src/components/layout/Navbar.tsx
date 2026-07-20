"use client";

import Link from "next/link";
import Container from "../ui/Container";

import { Sheet, SheetTrigger, SheetContent } from "../ui/sheet";
import { Button } from "../ui/button";
import NavLinks from "../sections/NavLinks";
import MobileMenu from "../sections/MobileMenu";
import Logo from "../sections/Logo";
import SocialLinks from "../sections/SocialLinks";
import { Menu } from "lucide-react";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <Logo />

          <div className="hidden md:flex items-center gap-8">
            <NavLinks />
          </div>

          <div className="hidden md:flex items-center gap-4">
            <SocialLinks />
            <Link href="/resume">
              <Button variant="animated">Resume</Button>
            </Link>
          </div>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger className="inline-flex h-10 w-10 items-center justify-center rounded-md border">
                <Menu className="h-5 w-5" />
              </SheetTrigger>

              <SheetContent side="right">
                <h2 className="text-lg font-semibold">Menu</h2>
                <MobileMenu />
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Navbar;
