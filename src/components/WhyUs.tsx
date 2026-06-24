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
    <section id="why" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-[6%] bg-white">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 md:mb-14 lg:mb-16">
        <h2 className="font-display text-[clamp(2rem,5vw,4rem)] tracking-[1px] sm:tracking-[2px] text-gray-900 leading-none">
          Why Riders Choose Us
        </h2>
        <div className="w-12 sm:w-14 h-[3px] bg-gradient-to-r from-[#F5B800] to-transparent rounded mx-auto mt-4 sm:mt-5 mb-0" />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
        {reasons.map((r, index) => (
          <div
            key={index}
            className="group bg-gradient-to-br from-[#F5B800] to-amber-400 border-2 border-amber-300 hover:border-amber-600 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-200/50"
          >
            <div className="text-4xl sm:text-5xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
              {r.icon}
            </div>
            <h3 className="text-black font-bold text-base sm:text-lg tracking-wide mb-2 sm:mb-3">
              {r.title}
            </h3>
            <p className="text-gray-800 text-xs sm:text-sm font-light leading-relaxed">
              {r.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}