import Link from "next/link";
import { Code2 } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto max-w-6xl h-14 px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Code2 className="h-5 w-5 text-primary" />
          <span>Derek T. Sands</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/projects" className="hover:underline">Projects</Link>
          <Link href="/case-studies" className="hover:underline">Case Studies</Link>
          <Link href="/about" className="hover:underline">About</Link>
        </nav>

        <Link href="/contact" className="btn-primary">Contact</Link>
      </div>
    </header>
  );
}
