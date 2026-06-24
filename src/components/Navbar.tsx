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
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between h-[70px] sm:h-[75px]">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3"
          >
            <Image
              src="/logo/1.png"
              alt="AKS Works Logo"
              width={45}
              height={45}
              className="object-contain sm:w-[55px] sm:h-[55px]"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex lg:flex items-center gap-4 lg:gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="
                    relative
                    text-gray-900
                    hover:text-yellow-600
                    text-[0.75rem] sm:text-[0.85rem] lg:text-[0.9rem]
                    font-semibold
                    tracking-[1px] lg:tracking-[2px]
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
              md:inline-flex
              lg:inline-flex
              items-center
              gap-1 lg:gap-2
              bg-black
              text-white
              px-3 lg:px-5
              py-2 lg:py-2.5
              rounded-md
              font-semibold
              tracking-wider lg:tracking-widest
              text-[0.7rem] sm:text-[0.8rem] lg:text-sm
              uppercase
              transition-all
              duration-300
              hover:bg-yellow-500
              hover:text-black
            "
          >
            <span className="hidden xs:inline">📞</span> Call Now
          </a>

          {/* Mobile Menu Button - Opens Drawer */}
          <button
            className="md:hidden lg:hidden text-black text-2xl sm:text-3xl"
            onClick={() => setMenuOpen(true)}
            aria-label="Open Menu"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Drawer Menu - Right Side, Full Height */}
      <div
        className={`fixed top-0 right-0 h-full w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-4 right-4 text-black hover:scale-110 transition-transform duration-200"
          aria-label="Close Menu"
        >
          <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Drawer Content */}
        <div className="p-6 sm:p-8 pt-16 sm:pt-20 h-full overflow-y-auto flex flex-col">
          {/* Logo */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <Image
              src="/logo/1.png"
              alt="AKS Works Logo"
              width={80}
              height={80}
              className="object-contain sm:w-[90px] sm:h-[90px]"
            />
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-black text-center mb-6 sm:mb-8 tracking-tight">
            AKS Works
          </h2>

          {/* Navigation Links */}
          <nav className="flex-1">
            <ul className="space-y-3 sm:space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="
                      block
                      text-gray-900
                      hover:text-yellow-600
                      text-base sm:text-lg
                      font-semibold
                      transition-all
                      duration-300
                      hover:translate-x-2
                      border-b
                      border-gray-200
                      pb-2
                    "
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info in Drawer */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <a
              href="tel:9384133530"
              className="
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
                transition-all
                duration-300
                hover:bg-yellow-500
                hover:text-black
              "
              onClick={() => setMenuOpen(false)}
            >
              📞 +91 93841 33530
            </a>
            <p className="text-gray-600 text-xs sm:text-sm text-center mt-3">
              📍 Mukkadu, Thengapattanam
            </p>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}