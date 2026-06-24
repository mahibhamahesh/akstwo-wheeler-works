"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="bg-black pt-[60px] sm:pt-[65px] md:pt-[70px] lg:pt-[75px] flex justify-center"
    >
      <div className="w-full max-w-7xl px-2 sm:px-4 md:px-6 lg:px-10">
        <Image
          src="/hero/1.png"
          alt="AKS Two Wheeler Works Banner"
          width={1920}
          height={700}
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
          className="w-full h-auto object-contain block rounded-none sm:rounded-sm md:rounded-md"
        />
      </div>
    </section>
  );
}