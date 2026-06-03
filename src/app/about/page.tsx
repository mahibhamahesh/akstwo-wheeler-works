import React from 'react';

export default function AboutPage() {
  return (
    <div className="bg-white text-black min-h-screen">
      
      {/* 1. Hero Section (Yellow Branding) */}
      <section className="py-24 px-10 text-center bg-yellow-500">
        <h1 className="text-6xl font-black uppercase text-black mb-6 tracking-tighter">
          About Our Workshop
        </h1>
        <p className="text-xl text-black/80 max-w-2xl mx-auto font-medium">
          Driven by passion, defined by quality. Learn more about our journey in Mukkadu.
        </p>
      </section>

      {/* 2. Our Mission Section */}
      <section className="py-20 px-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-black uppercase mb-8">Our Mission</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          At our workshop, we believe that every vehicle deserves premium care. We combine 
          years of technical expertise with the latest industry standards to ensure that 
          every customer leaves with confidence and a perfectly performing machine.
        </p>
      </section>

      {/* 3. The Team Section (Black Cards) */}
      <section className="py-20 px-10 max-w-6xl mx-auto">
        <h2 className="text-3xl font-black uppercase mb-12 text-center">Meet the Experts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-black text-white border-b-4 border-yellow-500">
            <h3 className="text-2xl font-bold mb-2">Lead Technician</h3>
            <p className="text-gray-400">Over 10 years of experience in high-performance two-wheeler diagnostics and repair.</p>
          </div>
          <div className="p-8 bg-black text-white border-b-4 border-yellow-500">
            <h3 className="text-2xl font-bold mb-2">Customer Care</h3>
            <p className="text-gray-400">Dedicated to ensuring seamless service scheduling and transparent communication for every client.</p>
          </div>
        </div>
      </section>

      {/* 4. Why Us / Highlights Section */}
      <section className="py-20 bg-neutral-100 px-10 text-center">
        <h2 className="text-3xl font-black uppercase mb-10">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <div>
            <div className="text-yellow-500 text-4xl mb-4">★</div>
            <h4 className="font-bold text-xl uppercase">Precision</h4>
          </div>
          <div>
            <div className="text-yellow-500 text-4xl mb-4">★</div>
            <h4 className="font-bold text-xl uppercase">Reliability</h4>
          </div>
          <div>
            <div className="text-yellow-500 text-4xl mb-4">★</div>
            <h4 className="font-bold text-xl uppercase">Transparency</h4>
          </div>
        </div>
      </section>

      {/* 5. Footer CTA */}
      <section className="py-20 px-10 bg-black text-white text-center">
        <h2 className="text-3xl font-black uppercase mb-6 text-yellow-500">Join Our Community</h2>
        <p className="mb-8 text-gray-300">We are proud to serve the Mukkadu community and beyond.</p>
        <a href="/services" className="bg-yellow-500 text-black px-10 py-3 font-bold uppercase hover:bg-yellow-400 transition-colors inline-block">
          View Our Services
        </a>
      </section>
    </div>
  );
}