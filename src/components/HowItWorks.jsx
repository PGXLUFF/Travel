import React from "react";

const steps = [
  {
    step: "01",
    icon: "💬",
    title: "Share Your Travel Vision",
    desc: "Tell us your dream destination, travel dates, group size, and budget. We listen carefully to build the perfect itinerary tailored exclusively to you.",
    pill: "Takes 2 minutes",
    color: "from-orange-50 to-amber-50",
    border: "border-orange-100",
    numColor: "text-orange-100",
    pillColor: "bg-orange-100 text-orange-600",
  },
  {
    step: "02",
    icon: "🗺️",
    title: "Receive Your Custom Itinerary",
    desc: "Our destination experts design a day-by-day itinerary with curated stays, activities, and transport — no generic packages, just your trip.",
    pill: "Within 24 hours",
    color: "from-teal-50 to-emerald-50",
    border: "border-teal-100",
    numColor: "text-teal-100",
    pillColor: "bg-teal-100 text-teal-700",
  },
  {
    step: "03",
    icon: "✅",
    title: "Confirm & We Handle Everything",
    desc: "Once you approve, we manage all bookings — flights, hotels, transfers, entry permits, and local guides. Zero stress on your end.",
    pill: "Fully managed",
    color: "from-amber-50 to-yellow-50",
    border: "border-amber-100",
    numColor: "text-amber-100",
    pillColor: "bg-amber-100 text-amber-700",
  },
  {
    step: "04",
    icon: "🌟",
    title: "Travel & Create Memories",
    desc: "Explore with confidence. Our 24/7 support team is always reachable during your journey, ensuring every moment is smooth and unforgettable.",
    pill: "24/7 Support",
    color: "from-rose-50 to-orange-50",
    border: "border-rose-100",
    numColor: "text-rose-100",
    pillColor: "bg-rose-100 text-rose-600",
  },
];

const HowItWorks = () => {
  return (
    <section
      className="relative w-full py-20 md:py-28 overflow-hidden section-warm"
      aria-label="How to book a tour package with Intro Travels India"
    >
      <div className="orange-orb w-[380px] h-[380px] -top-20  -right-10  opacity-45" />
      <div className="teal-orb   w-[300px] h-[300px]  bottom-0  -left-16  opacity-35" />

      <div className="relative z-10 px-6 md:px-12 lg:px-24">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div className="max-w-[600px]">
            <span className="text-xs uppercase tracking-widest font-extrabold text-orange-500 mb-3 block">
              ✦ Simple 4-Step Process
            </span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-primary leading-tight">
              How to Book Your{" "}
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                Dream India Tour
              </span>
            </h2>
            <p className="text-primary/55 text-base md:text-lg mt-4 leading-relaxed max-w-[520px]">
              Booking a custom India tour package with Intro Travels India is quick, transparent,
              and completely stress-free. Here's how we do it.
            </p>
          </div>
          <a
            href="#inquiry-form"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full font-bold text-sm hover:from-orange-600 hover:to-amber-600 hover:shadow-xl hover:shadow-orange-200 hover:-translate-y-1 transition-all duration-300 whitespace-nowrap self-start lg:self-end"
          >
            Start Planning Now →
          </a>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, i) => (
            <div
              key={i}
              className={`relative bg-gradient-to-br ${item.color} border ${item.border} rounded-[2rem] p-7 flex flex-col gap-5 premium-card overflow-hidden`}
            >
              {/* Big decorative number */}
              <span
                className={`absolute -top-2 -right-1 font-display font-extrabold text-8xl ${item.numColor} select-none leading-none pointer-events-none`}
              >
                {item.step}
              </span>

              {/* Top: icon + pill */}
              <div className="flex items-start justify-between">
                <span className="text-3xl mt-1">{item.icon}</span>
                <span className={`text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full ${item.pillColor}`}>
                  {item.pill}
                </span>
              </div>

              {/* Content */}
              <div>
                <h3 className="font-display font-bold text-lg text-primary mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-primary/60 text-sm leading-relaxed">{item.desc}</p>
              </div>

              {/* Step accent bar */}
              <div className="w-8 h-1 rounded-full bg-gradient-to-r from-orange-400 to-amber-300 mt-auto" />
            </div>
          ))}
        </div>

        {/* SEO-rich bottom note */}
        <p className="text-center text-primary/40 text-xs mt-10 max-w-[600px] mx-auto leading-relaxed">
          Intro Travels India offers customised tour packages across Rajasthan, Kerala, Goa, Kashmir,
          Leh Ladakh, Himachal Pradesh, Andaman, and 50+ destinations. We serve individual travellers,
          families, corporates, and travel agents across India.
        </p>
      </div>
    </section>
  );
};

export default HowItWorks;
