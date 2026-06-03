"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="bg-black pt-[60px] flex justify-center"
    >
      <div className="w-full max-w-7xl">
        <Image
          src="/hero/1.png"
          alt="AKS Two Wheeler Works Banner"
          width={1920}
          height={700}
          priority
          sizes="100vw"
          className="w-full h-auto object-contain block"
        />
      </div>
    </section>
  );
}