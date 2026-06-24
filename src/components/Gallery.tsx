import Image from "next/image";

const items = [
  { 
    image: "/gallery/1.webp",
    alt: "Workshop Floor - Expert Repairs in Action",
    span: "sm:col-span-2" 
  },
  { 
    image: "/gallery/2.webp",
    alt: "Engine Work - Engine Rebuild",
    span: "" 
  },
  { 
    image: "/gallery/3.webp",
    alt: "Diagnostics - Precision Diagnostics",
    span: "" 
  },
  { 
    image: "/gallery/4.webp",
    alt: "Polishing & Detailing - Premium Bike Detailing",
    span: "sm:col-span-2" 
  },
  { 
    image: "/gallery/5.webp",
    alt: "Brake Service - Brake System Overhaul",
    span: "" 
  },
  { 
    image: "/gallery/6.webp",
    alt: "Satisfied Customers - Happy Riders",
    span: "" 
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-[6%] bg-white">
      <h2 className="font-display text-[clamp(2rem,5vw,4rem)] tracking-[1px] sm:tracking-[2px] text-gray-900 leading-none">
        Gallery
      </h2>
      <div className="w-12 sm:w-14 h-[3px] bg-gradient-to-r from-[#F5B800] to-transparent rounded mt-4 mb-8 sm:mb-10 md:mb-12" />

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-5 auto-rows-[180px] sm:auto-rows-[200px] md:auto-rows-[220px] lg:auto-rows-[240px]">
        {items.map((item, index) => (
          <div
            key={index}
            className={`group relative rounded-lg sm:rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${item.span}`}
          >
            <Image
              src={item.image}
              alt={item.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              priority={index < 3}
            />
          </div>
        ))}
      </div>
    </section>
  );
}