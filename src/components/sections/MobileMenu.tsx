import Link from "next/link";
import NavLinks from "./NavLinks";
import { Button } from "../ui/button";
import SocialLinks from "./SocialLinks";

function MobileMenu() {
  return (
    <div className="mt-8 flex flex-col gap-6">
      <NavLinks mobile />
      <div className="border-t pt-6">
        <SocialLinks />
      </div>
      <Link href="/contact">
        <Button className="w-full">Say Hello</Button>
      </Link>
    </div>
  );
}
export default MobileMenu;
