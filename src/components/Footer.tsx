"use client";

import Image from "next/image";

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
      <div className="max-w-7xl mx-auto px-6 lg:px-[6%] pt-16 pb-6">

        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            <a
              href="#home"
              className="flex items-center gap-4 mb-5"
            >
              <Image
                src="/logo/1.png"
                alt="AKS Two Wheeler Works Logo"
                width={65}
                height={65}
                className="object-contain drop-shadow-2xl"
              />
            </a>

            <p className="text-black/80 text-sm leading-relaxed max-w-sm">
              Mukkadu&apos;s trusted two-wheeler service centre delivering
              premium repairs, expert maintenance, and genuine care for every bike.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-black text-sm font-bold tracking-[4px] uppercase mb-6">
              Services
            </h4>

            <ul className="flex flex-col gap-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="
                      text-black/80
                      text-sm
                      hover:text-black
                      font-semibold
                      transition-all
                      duration-300
                      hover:translate-x-1
                      inline-block
                    "
                  >
                    → {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-black text-sm font-bold tracking-[4px] uppercase mb-6">
              Contact
            </h4>

            <ul className="flex flex-col gap-3">
              {contactLinks.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    className="
                      text-black/80
                      text-sm
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
        {/* Bottom */}
        <div className="border-t border-black/10 pt-6 flex flex-col items-center justify-center gap-4">
          
          {/* Added Contact Number */}
          <p className="text-black text-sm font-bold tracking-[1px]">
            For website build contact: 📞 9566438177
          </p>

          {/* Styled Slogan */}
          <div className="bg-black text-[#FFC107] px-4 py-1 rounded-full text-[10px] sm:text-xs font-black tracking-[3px] uppercase shadow-md">
            🏍️ Ride Safe • Ride Proud
          </div>

          <p className="text-black/60 text-[10px] sm:text-xs text-center mt-2">
            © {new Date().getFullYear()} AKS Two Wheeler Works, Mukkadu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}