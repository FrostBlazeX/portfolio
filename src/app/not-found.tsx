import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found | Evan Ohemi",
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-5xl font-bold">404</h1>

      <p className="text-muted-foreground">
        The page you're looking for doesn't exist.
      </p>

      <Link href="/">
        <Button variant="animated" size="lg">
          Back Home
        </Button>
      </Link>

      <div className="flex gap-4 text-sm text-muted-foreground">
        <Link href="/projects" className="hover:text-foreground">
          Projects
        </Link>
        <Link href="/about" className="hover:text-foreground">
          About
        </Link>
        <Link href="/contact" className="hover:text-foreground">
          Contact
        </Link>
      </div>
    </div>
  );
}
