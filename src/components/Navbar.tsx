"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Why Us", href: "/why-us" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-[75px]">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <Image
            src="/logo/1.png"
            alt="AKS Works Logo"
            width={55}
            height={55}
            className="object-contain"
            priority
          />

          {/* <h1 className="font-display text-2xl lg:text-3xl font-bold tracking-[3px] text-black leading-none">
            AKS<span className="text-yellow-500">⚙</span>WORKS
          </h1> */}
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="
                  relative
                  text-gray-900
                  hover:text-yellow-600
                  text-[0.9rem]
                  font-semibold
                  tracking-[2px]
                  uppercase
                  transition-all
                  duration-300
                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:h-[2px]
                  after:w-0
                  after:bg-yellow-500
                  after:transition-all
                  after:duration-300
                  hover:after:w-full
                "
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Call Button */}
        <a
          href="tel:9384133530"
          className="
            hidden
            lg:inline-flex
            items-center
            gap-2
            bg-black
            text-white
            px-5
            py-2.5
            rounded-md
            font-semibold
            tracking-widest
            text-sm
            uppercase
            transition-all
            duration-300
            hover:bg-yellow-500
            hover:text-black
          "
        >
          📞 Call Now
        </a>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-black text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg px-6 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="
                block
                py-3
                text-gray-900
                hover:text-yellow-600
                font-semibold
                tracking-[2px]
                uppercase
                text-sm
                border-b
                border-gray-200
                last:border-0
              "
            >
              {link.label}
            </Link>
          ))}

          <a
            href="tel:9384133530"
            className="
              mt-4
              flex
              items-center
              justify-center
              gap-2
              bg-black
              text-white
              px-4
              py-3
              rounded-md
              font-semibold
              tracking-widest
              text-sm
              uppercase
            "
          >
            📞 +91 93841 33530
          </a>
        </div>
      )}
    </nav>
  );
}