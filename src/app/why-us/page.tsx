import React from 'react';

export default function WhyUsPage() {
  return (
    <div className="bg-white text-black min-h-screen">
      
      {/* 1. Hero Section */}
      <section className="py-24 px-10 text-center bg-yellow-500">
        <h1 className="text-6xl font-black uppercase text-black mb-6 tracking-tighter">
          Why Choose Us
        </h1>
        <p className="text-xl text-black/80 max-w-2xl mx-auto font-medium">
          Setting the standard for quality, reliability, and precision in the industry.
        </p>
      </section>

      {/* 2. Key Advantages (Black Cards) */}
      <section className="py-20 px-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: "Expert Craftsmanship", desc: "Our team brings years of specialized experience to every project, ensuring top-tier results." },
            { title: "Premium Quality", desc: "We use only the best materials and latest technologies to guarantee long-lasting performance." },
            { title: "Customer Focused", desc: "Your satisfaction is our priority, with transparent communication at every stage of the service." },
            { title: "Timely Delivery", desc: "We respect your time, ensuring all work is completed efficiently without compromising on quality." }
          ].map((item, i) => (
            <div key={i} className="p-10 bg-black text-white border-l-4 border-yellow-500 hover:bg-neutral-900 transition-colors">
              <h3 className="text-2xl font-bold mb-4 text-yellow-500">{item.title}</h3>
              <p className="text-gray-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Our Values Section */}
      <section className="py-20 bg-neutral-100 px-10 text-center">
        <h2 className="text-3xl font-black uppercase mb-12">Core Principles</h2>
        <div className="flex flex-col md:flex-row justify-center gap-12 max-w-4xl mx-auto">
          <div className="flex-1">
            <h4 className="font-bold text-xl uppercase mb-2">Integrity</h4>
            <p className="text-gray-600">Honest advice and fair pricing in every interaction.</p>
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-xl uppercase mb-2">Innovation</h4>
            <p className="text-gray-600">Constantly updating our methods to serve you better.</p>
          </div>
        </div>
      </section>

      {/* 4. Final CTA */}
      <section className="py-20 px-10 text-center">
        <h2 className="text-3xl font-black uppercase mb-6">Ready to experience the difference?</h2>
        <a href="/contact" className="inline-block bg-black text-white px-10 py-4 font-bold uppercase hover:bg-yellow-500 hover:text-black transition-all">
          Contact Us Today
        </a>
      </section>
    </div>
  );
}