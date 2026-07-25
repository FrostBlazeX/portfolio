import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 text-foreground transition-opacity duration-300 hover:opacity-80"
    >
      <span className="relative block h-8 w-8">
        <span className="absolute left-0 top-0 font-black text-3xl leading-none">
          O
        </span>

        <span className="absolute left-[0.38em] top-0 font-black text-3xl leading-none">
          E
        </span>
      </span>

      <span className="font-semibold tracking-tight">Evan Ohemi</span>
    </Link>
  );
}
