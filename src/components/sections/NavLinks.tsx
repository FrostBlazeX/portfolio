"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/data/navigation";
import { SheetClose } from "../ui/sheet";

function NavLinks({
  mobile = false,
  closeMenu,
}: {
  mobile?: boolean;
  closeMenu?: () => void;
}) {
  const pathname = usePathname();

  return (
    <>
      {navigation.map((item) => {
        const link = (
          <Link
            key={item.href}
            href={item.href}
            onClick={mobile ? closeMenu : undefined}
            className={cn(
              "link-underline transition-colors hover:text-foreground",
              mobile ? "block text-lg py-3" : "",
              pathname === item.href
                ? "text-foreground"
                : "text-muted-foreground",
            )}
          >
            {item.name}
          </Link>
        );

        return mobile ? <SheetClose key={item.href}>{link}</SheetClose> : link;
      })}
    </>
  );
}

export default NavLinks;
