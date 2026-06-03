const infoCards = [
  { label: "Location", value: "Mukkadu" },
  { label: "Open Hours", value: "8AM – 8PM" },
  { label: "Phone", value: "9384133530" },
  { label: "All Brands", value: "Served Here" },
];

const items = [
  {
    icon: "🏆",
    title: "Award-Winning Service",
    desc: "Recognised as one of Mukkadu's most trusted two-wheeler workshops for consistent quality and honest service.",
  },
  {
    icon: "🔬",
    title: "Expert Diagnostics",
    desc: "Modern tools and years of hands-on experience to precisely identify and fix any issue — the first time.",
  },
  {
    icon: "💎",
    title: "Genuine Parts Only",
    desc: "Manufacturer-approved or certified aftermarket parts for longevity and reliability you can count on.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 lg:px-[6%] bg-white"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left Card */}
        <div className="relative">
          {/* Badge */}
          {/* <div className="absolute -top-5 right-8 z-10 bg-black text-[#F5B800] px-5 py-2 rounded font-bold tracking-[2px] uppercase text-sm shadow-lg">
            Est. Since 2014
          </div> */}

          <div className="relative bg-[#F5B800] border border-[#E0A800] rounded-2xl p-8 overflow-hidden shadow-xl">
            {/* Ghost Text */}
            <span
              aria-hidden="true"
              className="absolute -bottom-5 -right-3 font-display text-[8rem] text-black/10 leading-none select-none pointer-events-none tracking-widest"
            >
              AKS
            </span>

            {/* About Items */}
            <div className="flex flex-col gap-6 mb-8">
              {items.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 items-start"
                >
                  <div className="w-11 h-11 min-w-[44px] bg-black text-white rounded-lg flex items-center justify-center text-2xl">
                    {item.icon}
                  </div>

                  <div>
                    <h4 className="text-black font-bold tracking-wide text-base mb-1">
                      {item.title}
                    </h4>

                    <p className="text-gray-900 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-3">
              {infoCards.map((c) => (
                <div
                  key={c.label}
                  className="bg-black border border-black rounded-lg p-4"
                >
                  <p className="text-gray-300 text-[0.65rem] tracking-[2px] uppercase mb-1">
                    {c.label}
                  </p>

                  <p className="text-[#F5B800] font-bold text-base">
                    {c.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div>
          {/* <p className="text-[#F5B800] text-xs font-bold tracking-[4px] uppercase mb-3">
            Our Story
          </p> */}

          <h2 className="font-display text-[clamp(2.5rem,4.5vw,3.8rem)] tracking-[2px] text-gray-900 leading-none mb-5">
            Built on Trust,
            <br />
            Driven by Passion
          </h2>

          <div className="w-14 h-[3px] bg-gradient-to-r from-[#F5B800] to-transparent rounded mb-7" />

          <p className="text-gray-700 text-base leading-[1.95] mb-5">
            AKS Two Wheeler Works was founded with one simple mission — to give
            every bike rider in Mukkadu and nearby areas the level of care and
            quality service they deserve.
          </p>

          <p className="text-gray-700 text-base leading-[1.95] mb-5">
            With over a decade of experience, our skilled mechanics understand
            every make and model — from Hero, Honda, TVS, Bajaj and Royal
            Enfield motorcycles.
          </p>

          <p className="text-gray-700 text-base leading-[1.95] mb-8">
            At AKS, we believe in transparent pricing, honest advice, and
            zero-compromise quality. No hidden charges, no unnecessary repairs —
            just reliable, professional service every single time.
          </p>

          <a
            href="#contact"
            className="inline-block bg-black text-[#F5B800] px-8 py-3.5 rounded-md font-bold tracking-[2px] uppercase text-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            Get in Touch →
          </a>
        </div>
      </div>
    </section>
  );
}