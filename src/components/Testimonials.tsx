const reviews = [
  {
    initials: "RK",
    name: "Rajesh Kumar",
    vehicle: "Bajaj Pulsar 150",
    text: "Best workshop in Mukkadu! They fixed my Pulsar engine issue in just a few hours. Honest pricing and very professional team.",
    stars: 5,
  },
  {
    initials: "PM",
    name: "Priya Mahesh",
    vehicle: "Honda Activa 6G",
    text: "I've been bringing my Activa here for years. They never overcharge and always explain the work clearly.",
    stars: 5,
  },
  {
    initials: "SK",
    name: "Suresh Kannan",
    vehicle: "Royal Enfield Classic 350",
    text: "Quick service, genuine parts and experienced mechanics. My bike feels brand new after service.",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-[6%] bg-white"
    >
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 md:mb-14 lg:mb-16">
        <h2 className="font-display text-[clamp(2rem,5vw,4rem)] tracking-[1px] sm:tracking-[2px] text-gray-900 leading-none">
          What Our Riders Say
        </h2>

        <div className="w-12 sm:w-14 h-[3px] bg-gradient-to-r from-[#F5B800] to-transparent rounded mx-auto mt-4 sm:mt-5 mb-0" />
      </div>

      {/* Reviews */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
        {reviews.map((r) => (
          <div
            key={r.name}
            className="
              relative
              bg-[#F5B800]
              border
              border-[#E0A800]
              rounded-xl sm:rounded-2xl
              p-5 sm:p-6 md:p-7
              overflow-hidden
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-2xl
            "
          >
            {/* Quote */}
            <span
              aria-hidden="true"
              className="absolute top-2 right-4 text-[4rem] sm:text-[5rem] font-bold text-black/10"
            >
              "
            </span>

            {/* Stars */}
            <div className="flex gap-1 text-black text-base sm:text-lg mb-3 sm:mb-4">
              {"★".repeat(r.stars)}
            </div>

            {/* Review */}
            <p className="text-black leading-relaxed text-sm sm:text-base mb-4 sm:mb-5 md:mb-6">
              {r.text}
            </p>

            {/* User */}
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black text-[#F5B800] flex items-center justify-center font-bold text-sm sm:text-base">
                {r.initials}
              </div>

              <div>
                <p className="font-bold text-black text-sm sm:text-base">
                  {r.name}
                </p>

                <p className="text-xs sm:text-sm text-gray-800">
                  {r.vehicle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}