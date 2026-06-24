import React from 'react';
import Link from 'next/link';

export default function WhyUsPage() {
  return (
    <div className="bg-white text-black min-h-screen pt-[60px] sm:pt-[65px] md:pt-[70px] lg:pt-[75px]">
      
      {/* 1. Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-10 text-center bg-yellow-500">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase text-black mb-4 sm:mb-6 tracking-tighter leading-tight">
          Why Choose Us
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-black/80 max-w-2xl mx-auto font-medium px-2 sm:px-0">
          Setting the standard for quality, reliability, and precision in the industry.
        </p>
      </section>

      {/* 2. Key Advantages (Black Cards) */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {[
            { title: "Expert Craftsmanship", desc: "Our team brings years of specialized experience to every project, ensuring top-tier results." },
            { title: "Premium Quality", desc: "We use only the best materials and latest technologies to guarantee long-lasting performance." },
            { title: "Customer Focused", desc: "Your satisfaction is our priority, with transparent communication at every stage of the service." },
            { title: "Timely Delivery", desc: "We respect your time, ensuring all work is completed efficiently without compromising on quality." }
          ].map((item, i) => (
            <div key={i} className="p-6 sm:p-8 md:p-10 bg-black text-white border-l-4 border-yellow-500 hover:bg-neutral-900 transition-colors rounded-lg sm:rounded-xl">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-yellow-500">{item.title}</h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Our Values Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-neutral-100 px-4 sm:px-6 md:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-black uppercase mb-8 sm:mb-10 md:mb-12">Core Principles</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-10 md:gap-12 max-w-4xl mx-auto">
          <div className="flex-1 px-4 sm:px-0">
            <h4 className="font-bold text-lg sm:text-xl uppercase mb-2">Integrity</h4>
            <p className="text-sm sm:text-base text-gray-600">Honest advice and fair pricing in every interaction.</p>
          </div>
          <div className="flex-1 px-4 sm:px-0">
            <h4 className="font-bold text-lg sm:text-xl uppercase mb-2">Innovation</h4>
            <p className="text-sm sm:text-base text-gray-600">Constantly updating our methods to serve you better.</p>
          </div>
        </div>
      </section>

      {/* 4. Final CTA */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-black uppercase mb-4 sm:mb-6 leading-tight">Ready to experience the difference?</h2>
        <Link 
          href="/contact" 
          className="inline-block bg-black text-white px-8 sm:px-10 py-3 sm:py-4 font-bold uppercase hover:bg-yellow-500 hover:text-black transition-all rounded-md text-sm sm:text-base"
        >
          Contact Us Today
        </Link>
      </section>
    </div>
  );
}