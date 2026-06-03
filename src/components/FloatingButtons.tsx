"use client";

import Link from "next/link";

export default function FloatingButtons() {
  return (
    <>
      {/* WhatsApp Button */}
      <Link
        href="https://wa.me/919384133530"
        target="_blank"
        className="
          fixed
          bottom-6
          right-6
          z-50
          w-14
          h-14
          rounded-full
          bg-[#25D366]
          flex
          items-center
          justify-center
          shadow-2xl
          hover:scale-110
          transition-all
          duration-300
        "
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
          alt="WhatsApp"
          className="w-8 h-8"
        />
      </Link>

      {/* Call Button */}
      <a
        href="tel:9384133530"
        className="
          fixed
          bottom-24
          right-6
          z-50
          w-14
          h-14
          rounded-full
          bg-blue-600
          flex
          items-center
          justify-center
          shadow-2xl
          hover:scale-110
          transition-all
          duration-300
        "
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/724/724664.png"
          alt="Call"
          className="w-7 h-7"
        />
      </a>

      {/* Scroll To Top Button */}
      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="
          fixed
          bottom-42
          right-6
          z-50
          w-14
          h-14
          rounded-full
          bg-black
          text-white
          text-2xl
          flex
          items-center
          justify-center
          shadow-2xl
          hover:scale-110
          transition-all
          duration-300
        "
      >
        ↑
      </button>
    </>
  );
}