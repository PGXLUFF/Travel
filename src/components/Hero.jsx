"use client";

import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-full px-6 md:px-12 lg:px-24 pt-8 pb-16 flex flex-col items-center">
      {/* Top Typography Row */}
      <div className="w-full flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-12">
        <div className="max-w-[700px]">
          <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-[80px] text-primary leading-[1.05] tracking-tight">
            Your Next <br />
            Adventure Awaits
          </h1>
        </div>
        <div className="max-w-[420px] flex flex-col items-start gap-5">
          <p className="text-primary/75 text-base md:text-lg leading-relaxed font-medium">
            Explore stunning destinations, unique experiences, and unforgettable
            journeys with Intro Travels India Holidays.
          </p>
          <button className="px-8 py-3.5 bg-primary text-white rounded-full font-semibold text-sm hover:bg-[#123632] hover:shadow-lg transition-all duration-300 transform hover:-translate-y-[1px]">
            Booking
          </button>
        </div>
      </div>

      {/* Hero Banner Container */}
      <div className="w-full relative rounded-[2rem] overflow-hidden shadow-2xl h-[350px] md:h-[500px] lg:h-[560px]">
        {/* Main Banner Image */}
        <Image
          src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1600&auto=format&fit=crop&q=80"
          alt="Stunning mountain valley with river and clouds"
          fill
          priority
          className="object-cover"
        />
        {/* Subtle Overlay to make colors pop */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
