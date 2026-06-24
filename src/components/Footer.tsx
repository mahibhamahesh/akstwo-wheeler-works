"use client";

import Image from "next/image";
import Link from "next/link";

const serviceLinks = [
  "Engine Repair",
  "Brake Service",
  "Oil Change",
  "Tyre & Wheel",
  "Electrical",
  "Bike Washing",
];

const contactLinks = [
  { label: "📞 9384133530", href: "tel:9384133530" },
  // { label: "📞 9566438177", href: "tel:9566438177" },
  { label: "✉️ msmahesh8492@gmail.com", href: "mailto:msmahesh8492@gmail.com" },
  { label: "📍 Mukkadu", href: "#about" },
  { label: "🕐 Mon–Sat: 8AM–8PM", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#FFC107] border-t border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[6%] pt-10 sm:pt-12 md:pt-14 lg:pt-16 pb-4 sm:pb-5 md:pb-6">

        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-10 md:mb-12">

          {/* Brand */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5"
            >
              <Image
                src="/logo/1.png"
                alt="AKS Two Wheeler Works Logo"
                width={55}
                height={55}
                className="object-contain drop-shadow-2xl sm:w-[60px] sm:h-[60px] md:w-[65px] md:h-[65px]"
              />
            </Link>

            <p className="text-black/80 text-xs sm:text-sm leading-relaxed max-w-sm">
              Mukkadu&apos;s trusted two-wheeler service centre delivering
              premium repairs, expert maintenance, and genuine care for every bike.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-black text-xs sm:text-sm font-bold tracking-[3px] sm:tracking-[4px] uppercase mb-4 sm:mb-5 md:mb-6">
              Services
            </h4>

            <ul className="flex flex-col gap-2 sm:gap-2.5 md:gap-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <Link
                    href="#services"
                    className="
                      text-black/80
                      text-xs sm:text-sm
                      hover:text-black
                      font-semibold
                      transition-all
                      duration-300
                      hover:translate-x-1
                      inline-block
                    "
                  >
                    → {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-black text-xs sm:text-sm font-bold tracking-[3px] sm:tracking-[4px] uppercase mb-4 sm:mb-5 md:mb-6">
              Contact
            </h4>

            <ul className="flex flex-col gap-2 sm:gap-2.5 md:gap-3">
              {contactLinks.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    className="
                      text-black/80
                      text-xs sm:text-sm
                      hover:text-black
                      font-semibold
                      transition-all
                      duration-300
                      break-all
                      inline-block
                    "
                  >
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-black/10 pt-4 sm:pt-5 md:pt-6 flex flex-col items-center justify-center gap-3 sm:gap-3.5 md:gap-4">
          
          {/* Added Contact Number */}
          <p className="text-black text-xs sm:text-sm font-bold tracking-[0.5px] sm:tracking-[1px] text-center px-2">
            For website build contact: 📞 9566438177
          </p>

          {/* Styled Slogan */}
          <div className="bg-black text-[#FFC107] px-3 sm:px-4 py-1 rounded-full text-[8px] sm:text-[10px] md:text-xs font-black tracking-[2px] sm:tracking-[3px] uppercase shadow-md">
            🏍️ Ride Safe • Ride Proud
          </div>

          <p className="text-black/60 text-[8px] sm:text-[10px] md:text-xs text-center mt-1 sm:mt-2">
            © {new Date().getFullYear()} AKS Two Wheeler Works, Mukkadu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}