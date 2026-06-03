import React from 'react';

export default function PremiumServicesPage() {
  return (
    <div className="bg-white text-black min-h-screen">
      
      {/* 1. Hero Section */}
     {/* 1. Hero Section - Updated with Yellow Background */}
      <section className="py-24 px-10 text-center bg-yellow-500">
        <h1 className="text-6xl font-black uppercase text-black mb-6 tracking-tighter">
          Premium Services
        </h1>
        <p className="text-xl text-black/80 max-w-2xl mx-auto font-medium">
          Precision engineering meets unmatched service quality. Experience the professional standard for your two-wheeler.
        </p>
      </section>

      {/* 2. Services Section (Black Cards) */}
      <section className="py-20 px-10 max-w-6xl mx-auto">
        <h2 className="text-3xl font-black uppercase mb-12">Our Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-8 bg-black text-white border-b-4 border-yellow-500 hover:scale-105 transition-transform duration-300">
              <div className="text-yellow-500 text-4xl mb-6 font-bold">0{i}</div>
              <h3 className="text-2xl font-bold mb-4">Service {i}</h3>
              <p className="text-gray-400">High-performance diagnostic and repair services tailored to your vehicle's specific needs.</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Stats Section */}
      <section className="py-20 bg-yellow-500">
        <div className="max-w-6xl mx-auto px-10 flex flex-wrap justify-between gap-10">
          {[
            { label: "Years Experience", val: "10+" },
            { label: "Bikes Serviced", val: "5k+" },
            { label: "Expert Mechanics", val: "15" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-5xl font-black text-black mb-2">{stat.val}</div>
              <div className="uppercase tracking-widest text-sm font-bold text-black">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Additional Section: Why Choose Us */}
      <section className="py-20 px-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-black uppercase mb-8">Why Choose Us?</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          We combine traditional craftsmanship with modern technology to ensure your two-wheeler gets the best care possible. 
          Our commitment to quality, speed, and reliability is what sets us apart in the industry.
        </p>
      </section>

      {/* 5. Additional Section: Contact/CTA */}
      <section className="py-20 px-10 bg-black text-white text-center">
        <h2 className="text-3xl font-black uppercase mb-6 text-yellow-500">Ready to Get Started?</h2>
        <p className="mb-8 text-gray-300">Visit our workshop in Mukkadu or call us for a consultation.</p>
        <button className="bg-yellow-500 text-black px-10 py-3 font-bold uppercase hover:bg-yellow-400 transition-colors">
          Book Now
        </button>
      </section>
    </div>
  );
}