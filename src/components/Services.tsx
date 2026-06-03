"use client";

import { useState, useEffect, useRef } from "react";

const services = [
  {
    icon: "🔧",
    name: "Engine Repair & Rebuild",
    desc: "Complete engine diagnostics, overhaul, and rebuilds using quality components.",
    tag: "All Brands",
  },
  {
    icon: "🛢️",
    name: "Oil & Filter Change",
    desc: "Regular oil and filter replacement with premium-grade oils.",
    tag: "Quick Service",
  },
  {
    icon: "🛑",
    name: "Brake System Service",
    desc: "Brake pad replacement, inspection and fluid change.",
    tag: "Safety First",
  },
  {
    icon: "🏍️",
    name: "Tyre Replacement",
    desc: "Tyre fitting, balancing and wheel alignment.",
    tag: "All Sizes",
  },
  {
    icon: "⚡",
    name: "Electrical & Battery",
    desc: "Electrical diagnostics, wiring repairs and battery replacement.",
    tag: "Diagnostics",
  },
  {
    icon: "🚿",
    name: "Bike Washing & Polish",
    desc: "Professional cleaning and polishing services.",
    tag: "Premium Clean",
  },
  {
    icon: "⚙️",
    name: "Carburettor & Fuel System",
    desc: "Fuel system cleaning and tuning.",
    tag: "Performance",
  },
  {
    icon: "🔩",
    name: "Suspension & Chain",
    desc: "Chain lubrication, suspension and sprocket service.",
    tag: "Ride Comfort",
  },
  {
    icon: "📋",
    name: "General Service Package",
    desc: "Complete 25-point bike inspection and maintenance.",
    tag: "Best Value",
  },
];

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  
  const autoInterval = useRef<NodeJS.Timeout | null>(null);

  // Handle responsive items to show
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2);
      } else {
        setItemsToShow(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Create rotated array for infinite loop effect
  const getRotatedServices = () => {
    const rotated = [...services];
    return rotated;
  };

  const totalSlides = Math.ceil(services.length / itemsToShow);
  const maxIndex = totalSlides - 1;

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 800);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    setTimeout(() => setIsTransitioning(false), 800);
  };

  // Auto-slide with slow rotation
  useEffect(() => {
    if (autoInterval.current) clearInterval(autoInterval.current);
    autoInterval.current = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => {
      if (autoInterval.current) clearInterval(autoInterval.current);
    };
  }, [currentIndex, maxIndex]);

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swipe left
      nextSlide();
    }
    if (touchStart - touchEnd < -75) {
      // Swipe right
      prevSlide();
    }
    setTouchStart(0);
    setTouchEnd(0);
  };

  // Pause auto-slide on hover
  const pauseAutoSlide = () => {
    if (autoInterval.current) clearInterval(autoInterval.current);
  };

  const resumeAutoSlide = () => {
    if (autoInterval.current) clearInterval(autoInterval.current);
    autoInterval.current = setInterval(() => {
      nextSlide();
    }, 5000);
  };

  return (
    <section 
      id="services" 
      className="py-24 px-6 lg:px-[6%] bg-white overflow-hidden"
      onMouseEnter={pauseAutoSlide}
      onMouseLeave={resumeAutoSlide}
    >
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
        <div>
          {/* <p className="text-[#F5B800] text-sm font-bold tracking-[4px] uppercase mb-3 animate-pulse">
            ✨ Premium Care ✨
          </p> */}
          <h2 className="font-display text-[clamp(2rem,5vw,4rem)] tracking-[2px] text-gray-900 leading-none">
            Our Premium
            <br />
            Services
          </h2>
          <div className="mt-5 w-20 h-[3px] bg-gradient-to-r from-[#F5B800] via-amber-400 to-transparent rounded-full animate-pulse" />
        </div>

        {/* Navigation Arrows */}
        <div className="flex gap-3">
          <button
            onClick={prevSlide}
            disabled={isTransitioning}
            className="w-12 h-12 rounded-full bg-gradient-to-r from-[#F5B800] to-amber-500 text-black flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300 disabled:opacity-50"
            aria-label="Previous"
          >
            ◀
          </button>
          <button
            onClick={nextSlide}
            disabled={isTransitioning}
            className="w-12 h-12 rounded-full bg-gradient-to-r from-[#F5B800] to-amber-500 text-black flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300 disabled:opacity-50"
            aria-label="Next"
          >
            ▶
          </button>
        </div>
      </div>

      {/* Slider Container with Rotation Effect */}
      <div 
        className="relative overflow-hidden rounded-2xl"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-all duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {/* Create slides with rotation effect */}
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div
              key={slideIndex}
              className="flex gap-6 w-full flex-shrink-0"
              style={{ width: "100%" }}
            >
              {services
                .slice(slideIndex * itemsToShow, slideIndex * itemsToShow + itemsToShow)
                .map((s, idx) => (
                  <div
                    key={s.name}
                    className={`
                      group relative bg-gradient-to-br from-[#F5B800] to-amber-400 
                      border-2 border-amber-300 hover:border-amber-600 rounded-2xl p-7 
                      overflow-hidden transition-all duration-500 hover:-translate-y-3 
                      hover:shadow-2xl hover:shadow-amber-200/50
                      ${itemsToShow === 1 ? "w-full" : itemsToShow === 2 ? "w-1/2" : "w-1/3"}
                      animate-fadeIn
                    `}
                    style={{
                      animationDelay: `${idx * 100}ms`,
                      animationDuration: "0.6s",
                    }}
                  >
                    {/* Top gradient bar with rotation animation */}
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-black via-amber-700 to-black animate-pulse" />

                    {/* Rotating shine effect */}
                    <div className="absolute -inset-full group-hover:inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-700 rotate-12 group-hover:translate-x-full" />

                    {/* Icon with rotation on hover */}
                    <div className="w-16 h-16 bg-black text-[#F5B800] rounded-2xl flex items-center justify-center text-4xl mb-5 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 group-hover:shadow-xl">
                      {s.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-black font-bold text-xl mb-3 transition-all duration-300 group-hover:translate-x-1">
                      {s.name}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-800 leading-relaxed text-sm">
                      {s.desc}
                    </p>

                    {/* Tag with rotation */}
                    <span className="inline-block mt-5 text-xs font-bold uppercase tracking-wider text-white bg-black px-3 py-2 rounded-md transition-all duration-300 group-hover:scale-105">
                      {s.tag}
                    </span>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>

      {/* Dots Indicator with rotation animation */}
      <div className="flex justify-center gap-3 mt-10">
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              pauseAutoSlide();
              setCurrentIndex(idx);
              setTimeout(resumeAutoSlide, 3000);
            }}
            className={`
              transition-all duration-500 rounded-full
              ${currentIndex === idx 
                ? "w-10 h-3 bg-gradient-to-r from-[#F5B800] to-amber-500 shadow-lg" 
                : "w-3 h-3 bg-gray-300 hover:bg-gray-400 hover:scale-125"
              }
            `}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter with rotation effect */}
      {/* <div className="text-center mt-6">
        <span className="inline-block px-4 py-2 bg-gradient-to-r from-amber-100 to-amber-200 rounded-full text-sm font-semibold text-amber-800">
          🔄 {currentIndex + 1} / {totalSlides} • Rotating Gallery
        </span>
      </div> */}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px) rotateX(10deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotateX(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
}