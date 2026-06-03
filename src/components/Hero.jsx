"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Hero = () => {
  const images = [
    {
      src: "/Image/custom_india_travel.png",
      alt: "Golden sunrise fort palace in Jaipur, India",
      caption: "Experience Majestic Indian Getaways",
      tag: "Jaipur, Rajasthan"
    },
    {
      src: "/Image/hero_taj_mahal.png",
      alt: "Taj Mahal at golden sunrise, Agra India",
      caption: "Discover Timeless Cultural Heritage",
      tag: "Agra, Uttar Pradesh"
    },
    {
      src: "/Image/hero_goa_beach.png",
      alt: "Beautiful Goa beach with turquoise waters",
      caption: "Relax on Golden Tropical Beaches",
      tag: "Goa, India"
    },
    {
      src: "/Image/hero_kashmir.png",
      alt: "Dal Lake houseboat at sunset, Kashmir",
      caption: "Experience Paradise on Earth",
      tag: "Kashmir, India"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <section className="relative w-full px-6 md:px-12 lg:px-24 pt-8 pb-16 flex flex-col items-center overflow-hidden">
      {/* ── Background orange + teal glow orbs ── */}
      <div className="orange-orb w-[500px] h-[500px] -top-32 -right-32 opacity-60" />
      <div className="teal-orb   w-[400px] h-[400px] -bottom-20 -left-20 opacity-40" />
      <div className="orange-orb w-[200px] h-[200px] top-40 left-1/4   opacity-25" />

      {/* ── Top Typography Row ── */}
      <div className="relative z-10 w-full flex flex-col md:flex-row md:justify-between md:items-end gap-8 mb-12">
        <div className="max-w-[680px] animate-fade-in-up">
          {/* Eyebrow label — orange accent */}
          <span className="text-xs uppercase tracking-widest font-extrabold text-orange-500 mb-4 block">
            ✦ India's #1 Travel Companion
          </span>
          <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-[82px] leading-[1.04] tracking-tight pb-2">
            <span className="bg-gradient-to-r from-primary via-[#163B37] to-[#3b7c74] bg-clip-text text-transparent">
              Your Next
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-400 bg-clip-text text-transparent">
              Adventure
            </span>{" "}
            <span className="bg-gradient-to-r from-primary via-[#163B37] to-[#3b7c74] bg-clip-text text-transparent">
              Awaits
            </span>
          </h1>
        </div>

        <div
          className="max-w-[400px] flex flex-col items-start gap-6 animate-fade-in-up"
          style={{ animationDelay: "150ms" }}
        >
          <p className="text-primary/70 text-base md:text-lg leading-relaxed font-medium">
            Explore stunning destinations, unique experiences, and unforgettable
            journeys with Intro Travels India.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#inquiry-form"
              className="px-8 py-3.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full font-bold text-sm hover:from-orange-600 hover:to-amber-600 hover:shadow-lg hover:shadow-orange-200 transition-all duration-300 hover:-translate-y-0.5"
            >
              Book Now →
            </a>
            <a
              href="/india"
              className="px-8 py-3.5 bg-white/80 backdrop-blur-sm border border-primary/10 text-primary rounded-full font-bold text-sm hover:bg-white hover:border-primary/20 hover:shadow-sm transition-all duration-300"
            >
              View Packages
            </a>
          </div>
        </div>
      </div>

      {/* ── Hero Banner Slider ── */}
      <div className="relative z-10 w-full relative rounded-[2.5rem] overflow-hidden shadow-2xl h-[350px] md:h-[500px] lg:h-[580px] group">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10 animate-fade-in" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={index === 0}
              className={`object-cover ${index === currentIndex ? "animate-ken-burns" : ""}`}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            {/* Optional right orange warmth */}
            <div className="absolute inset-0 bg-gradient-to-l from-orange-900/20 to-transparent" />

            {/* Bottom-left caption */}
            <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 text-white z-20 max-w-[75%] text-left">
              <span className="inline-block text-[10px] md:text-xs uppercase tracking-widest font-extrabold text-orange-400 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/15 mb-3">
                ✦ {image.tag}
              </span>
              <h3 className="font-display font-bold text-xl md:text-3xl lg:text-4xl text-white drop-shadow-md leading-tight">
                {image.caption}
              </h3>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-13 md:h-13 rounded-full bg-white/15 hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-500 backdrop-blur-md text-white flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 cursor-pointer shadow-md hover:scale-110 border border-white/20"
          aria-label="Previous Slide"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-13 md:h-13 rounded-full bg-white/15 hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-500 backdrop-blur-md text-white flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 cursor-pointer shadow-md hover:scale-110 border border-white/20"
          aria-label="Next Slide"
        >
          <ChevronRight size={20} />
        </button>

        {/* Indicator dots — orange active */}
        <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 z-20 flex gap-2 items-center">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentIndex
                  ? "bg-gradient-to-r from-orange-400 to-amber-400 w-7"
                  : "bg-white/40 hover:bg-white/70 w-2.5"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* ── Quick stats strip below slider ── */}
      <div className="relative z-10 w-full mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { num: "10,000+", lbl: "Happy Travellers" },
          { num: "50+",     lbl: "Destinations" },
          { num: "120+",    lbl: "Expert Guides" },
          { num: "8+ Yrs",  lbl: "Of Excellence" }
        ].map((s, i) => (
          <div
            key={i}
            className="bg-white/70 backdrop-blur-sm border border-orange-100 rounded-2xl px-5 py-4 flex flex-col items-center text-center shadow-sm"
          >
            <span className="font-display font-extrabold text-xl bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              {s.num}
            </span>
            <span className="text-[10px] uppercase font-bold text-primary/45 tracking-wide mt-0.5">
              {s.lbl}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
