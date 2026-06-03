const reasons = [
  {
    icon: "⚡",
    title: "Fast Turnaround",
    text: "Most services completed same-day. We respect your time and get you back on the road as quickly as possible.",
  },
  {
    icon: "💰",
    title: "Honest Pricing",
    text: "Clear upfront quotes before any work begins. No surprises, no hidden fees — just fair and transparent pricing.",
  },
  {
    icon: "🔧",
    title: "Expert Mechanics",
    text: "Our certified technicians have years of hands-on training across all major two-wheeler brands and models.",
  },
  {
    icon: "🛡️",
    title: "Service Warranty",
    text: "We stand by our work. All repairs come with a service guarantee, giving you complete peace of mind.",
  },
];

export default function WhyUs() {
  return (
    <section id="why" className="py-24 px-6 lg:px-[6%]">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        {/* <p className="text-[#F5B800] text-xs font-bold tracking-[4px] uppercase mb-3">
          Why AKS
        </p> */}
        <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] tracking-[2px] text-gray-900 leading-none">
          Why Riders Choose Us
        </h2>
        <div className="w-14 h-[3px] bg-gradient-to-r from-[#F5B800] to-transparent rounded mx-auto my-5" />
        {/* <p className="text-gray-600 text-base font-light leading-relaxed">
          Thousands of satisfied customers across Mukkadu trust AKS Two Wheeler
          Works for one reason — we always deliver on our promise.
        </p> */}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {reasons.map((r, index) => (
          <div
            key={index}
            className="group bg-gradient-to-br from-[#F5B800] to-amber-400 border-2 border-amber-300 hover:border-amber-600 rounded-xl p-7 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-200/50"
          >
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
              {r.icon}
            </div>
            <h3 className="text-black font-bold text-lg tracking-wide mb-3">
              {r.title}
            </h3>
            <p className="text-gray-800 text-sm font-light leading-relaxed">
              {r.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}