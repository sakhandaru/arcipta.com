"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 p-6 mix-blend-difference text-white">
      <div className="flex justify-between items-center max-w-[1440px] mx-auto">
        <Link
          href="/"
          className="text-xl font-bold uppercase tracking-wider font-creato"
        >
          Arcipta.com
        </Link>

        <button className="md:hidden">MENU</button>

        <nav className="hidden md:flex gap-8">
          <Link href="/about" className="hover:opacity-70 font-azeret text-sm">
            About
          </Link>
          <Link
            href="/growth-compass"
            className="hover:opacity-70 font-azeret text-sm"
          >
            Growth Compass
          </Link>
          <Link
            href="/portfolio"
            className="hover:opacity-70 font-azeret text-sm"
          >
            Portfolio
          </Link>
        </nav>
      </div>
    </header>
  );
}
