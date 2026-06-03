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
      className="py-24 px-6 lg:px-[6%] bg-white"
    >
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        {/* <p className="text-[#F5B800] text-xs font-bold tracking-[4px] uppercase mb-3">
          Customer Reviews
        </p> */}

        <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] tracking-[2px] text-gray-900 leading-none">
          What Our Riders Say
        </h2>

        <div className="w-14 h-[3px] bg-gradient-to-r from-[#F5B800] to-transparent rounded mx-auto my-5" />

        {/* <p className="text-gray-600 text-base leading-relaxed">
          Real feedback from customers who trust AKS Two Wheeler Works.
        </p> */}
      </div>

      {/* Reviews */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((r) => (
          <div
            key={r.name}
            className="
              relative
              bg-[#F5B800]
              border
              border-[#E0A800]
              rounded-2xl
              p-7
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
              className="absolute top-2 right-4 text-[5rem] font-bold text-black/10"
            >
              "
            </span>

            {/* Stars */}
            <div className="flex gap-1 text-black text-lg mb-4">
              {"★".repeat(r.stars)}
            </div>

            {/* Review */}
            <p className="text-black leading-relaxed mb-6">
              {r.text}
            </p>

            {/* User */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-black text-[#F5B800] flex items-center justify-center font-bold">
                {r.initials}
              </div>

              <div>
                <p className="font-bold text-black">
                  {r.name}
                </p>

                <p className="text-sm text-gray-800">
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