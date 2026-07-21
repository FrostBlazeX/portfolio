import Link from "next/link";
import NavLinks from "./NavLinks";
import { Button } from "../ui/button";
import SocialLinks from "./SocialLinks";
import { SheetClose } from "../ui/sheet";

function MobileMenu({ closeMenu }: { closeMenu: () => void }) {
  return (
    <div className="mt-8 flex flex-col gap-6">
      <NavLinks mobile closeMenu={closeMenu} />

      <div className="flex flex-col gap-3">
        <Link href="/resume" onClick={closeMenu}>
          <Button variant="animated" className="w-full">
            Resume
          </Button>
        </Link>

        <Link href="/contact" onClick={closeMenu}>
          <Button className="w-full">Say Hello</Button>
        </Link>
      </div>

      <div className="border-t pt-6">
        <SocialLinks />
      </div>
    </div>
  );
}

export default MobileMenu;
