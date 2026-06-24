import React from 'react';
import Link from 'next/link';

export default function PremiumServicesPage() {
  return (
    <div className="bg-white text-black min-h-screen pt-[60px] sm:pt-[65px] md:pt-[70px] lg:pt-[75px]">
      
      {/* 1. Hero Section - Yellow Background */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-10 text-center bg-yellow-500">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase text-black mb-4 sm:mb-6 tracking-tighter leading-tight">
          Premium Services
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-black/80 max-w-2xl mx-auto font-medium px-2 sm:px-0">
          Precision engineering meets unmatched service quality. Experience the professional standard for your two-wheeler.
        </p>
      </section>

      {/* 2. Services Section (Black Cards) */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-black uppercase mb-6 sm:mb-8 md:mb-10 lg:mb-12">Our Expertise</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {[
            { 
              number: "01", 
              title: "Engine Diagnostics", 
              desc: "High-performance diagnostic and repair services tailored to your vehicle's specific needs." 
            },
            { 
              number: "02", 
              title: "Performance Tuning", 
              desc: "Optimize your bike's performance with our expert tuning and calibration services." 
            },
            { 
              number: "03", 
              title: "Full Restoration", 
              desc: "Complete restoration services to bring your classic or modern bike back to life." 
            },
          ].map((service, i) => (
            <div key={i} className="p-6 sm:p-8 bg-black text-white border-b-4 border-yellow-500 hover:scale-105 transition-transform duration-300 rounded-lg sm:rounded-xl">
              <div className="text-yellow-500 text-3xl sm:text-4xl mb-4 sm:mb-6 font-bold">{service.number}</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{service.title}</h3>
              <p className="text-sm sm:text-base text-gray-400">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Stats Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-yellow-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 flex flex-wrap justify-center sm:justify-between gap-6 sm:gap-8 md:gap-10">
          {[
            { label: "Years Experience", val: "10+" },
            { label: "Bikes Serviced", val: "5k+" },
            { label: "Expert Mechanics", val: "15" },
          ].map((stat, i) => (
            <div key={i} className="text-center flex-1 min-w-[120px] sm:min-w-[140px]">
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-black mb-1 sm:mb-2">{stat.val}</div>
              <div className="uppercase tracking-wider sm:tracking-widest text-xs sm:text-sm font-bold text-black">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Additional Section: Why Choose Us */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-black uppercase mb-6 sm:mb-8">Why Choose Us?</h2>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed px-2 sm:px-0">
          We combine traditional craftsmanship with modern technology to ensure your two-wheeler gets the best care possible. 
          Our commitment to quality, speed, and reliability is what sets us apart in the industry.
        </p>
      </section>

      {/* 5. Additional Section: Contact/CTA */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-black text-white text-center">
        <h2 className="text-2xl sm:text-3xl font-black uppercase mb-4 sm:mb-6 text-yellow-500">Ready to Get Started?</h2>
        <p className="mb-6 sm:mb-8 text-gray-300 text-sm sm:text-base px-2 sm:px-0">Visit our workshop in Mukkadu or call us for a consultation.</p>
        <Link 
          href="/contact" 
          className="bg-yellow-500 text-black px-8 sm:px-10 py-2.5 sm:py-3 font-bold uppercase hover:bg-yellow-400 transition-colors inline-block text-sm sm:text-base rounded-md"
        >
          Book Now
        </Link>
      </section>
    </div>
  );
}