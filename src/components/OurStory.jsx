import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

const highlights = [
  "Fully customised domestic & international tour packages",
  "Licensed local guides across 50+ Indian destinations",
  "Transparent pricing — zero hidden charges",
  "24/7 on-trip support from our dedicated travel team",
];

const OurStory = () => {
  return (
    <section
      className="relative w-full px-6 md:px-12 lg:px-24 py-20 md:py-28 overflow-hidden"
      aria-label="About Intro Travels India – India's trusted tour operator"
    >
      {/* Decorative orbs */}
      <div className="orange-orb w-[420px] h-[420px] -top-24 -left-24 opacity-35" />
      <div className="teal-orb   w-[360px] h-[360px]  bottom-0 right-0  opacity-25" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* ── Left image with floating badge ── */}
        <div className="relative order-2 lg:order-1">
          <div className="relative h-[400px] md:h-[480px] rounded-[3rem] overflow-hidden shadow-2xl">
            <Image
              src="/Image/hero_taj_mahal.png"
              alt="Taj Mahal at sunrise – India tour packages by Intro Travels India"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-primary/10 to-transparent" />
            {/* Slide-in label top-left */}
            <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-primary">
                India's Top Tour Operator
              </span>
            </div>
          </div>

          {/* Floating years badge */}
          <div className="absolute -bottom-5 -right-4 md:-right-8 bg-gradient-to-br from-orange-500 to-amber-500 text-white rounded-[1.5rem] p-5 shadow-xl shadow-orange-200 max-w-[175px]">
            <span className="font-display font-extrabold text-4xl block leading-none">8+</span>
            <span className="text-[11px] font-bold uppercase tracking-wide opacity-90 mt-1 block">
              Years Crafting Journeys
            </span>
          </div>
        </div>

        {/* ── Right: SEO-optimised unique content ── */}
        <div className="flex flex-col gap-6 text-left order-1 lg:order-2">
          <span className="text-xs uppercase tracking-widest font-extrabold text-orange-500">
            ✦ India's Most Trusted Travel Partner
          </span>

          <h2 className="font-display font-bold text-3xl md:text-[2.8rem] text-primary leading-tight">
            Discover India Like{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Never Before
            </span>{" "}
            — With Experts Who Live It
          </h2>

          <div className="flex flex-col gap-4 text-primary/65 text-base leading-relaxed">
            <p>
              <strong className="text-primary font-bold">Intro Travels India</strong> is a premium
              India-based travel company specialising in{" "}
              <span className="text-orange-500 font-semibold">
                customised domestic tour packages
              </span>
              , international holiday packages, corporate travel, and group tours. With over{" "}
              <strong className="text-primary">8 years of experience</strong> and{" "}
              <strong className="text-primary">10,000+ satisfied travellers</strong>, we are your
              one-stop solution for seamless, memorable travel across India and beyond.
            </p>
            <p>
              Whether you're planning a{" "}
              <span className="text-teal-600 font-semibold">romantic Kerala backwater getaway</span>,
              an adventurous{" "}
              <span className="text-teal-600 font-semibold">Leh Ladakh road trip</span>, a spiritual{" "}
              <span className="text-teal-600 font-semibold">Varanasi pilgrimage</span>, or a{" "}
              <span className="text-orange-500 font-semibold">
                luxury corporate offsite
              </span>{" "}
              — our travel architects design every detail from scratch for you.
            </p>
          </div>

          {/* Checklist highlights */}
          <ul className="flex flex-col gap-3 mt-1">
            {highlights.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-primary/70">
                <CheckCircle
                  size={17}
                  className="text-orange-500 flex-shrink-0 mt-0.5"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mt-3">
            <Link
              href="#inquiry-form"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full font-bold text-sm hover:from-orange-600 hover:to-amber-600 hover:shadow-lg hover:shadow-orange-200 transition-all duration-300 hover:-translate-y-0.5"
            >
              Get a Free Quote →
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white border border-primary/10 text-primary rounded-full font-bold text-sm hover:border-orange-200 hover:bg-orange-50 transition-all duration-300"
            >
              Our Full Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
