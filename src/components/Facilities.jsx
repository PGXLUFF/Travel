"use client";

import React from "react";
import { Plane, Hotel, Map, Users, Car, FileText, Star, Shield, Clock, Award } from "lucide-react";

const facilities = [
  {
    icon: Plane,
    title: "Air Ticket Booking",
    description: "Domestic and international flight bookings at the best fares with 24/7 support and hassle-free changes.",
    color: "from-orange-50 to-amber-50",
    iconBg: "bg-orange-100 text-orange-600",
    border: "border-orange-100"
  },
  {
    icon: Hotel,
    title: "Hotel Stays",
    description: "Curated hotels from heritage havelis to luxury resorts — every stay handpicked for quality and comfort.",
    color: "from-teal-50 to-emerald-50",
    iconBg: "bg-teal-100 text-teal-700",
    border: "border-teal-100"
  },
  {
    icon: Map,
    title: "Tour Packages",
    description: "Fully customised domestic and international tour packages built around your dates, budget, and style.",
    color: "from-blue-50 to-sky-50",
    iconBg: "bg-blue-100 text-blue-700",
    border: "border-blue-100"
  },
  {
    icon: Users,
    title: "Expert Local Guides",
    description: "120+ licensed local guides who speak your language and bring every destination alive with rich stories.",
    color: "from-purple-50 to-violet-50",
    iconBg: "bg-purple-100 text-purple-700",
    border: "border-purple-100"
  },
  {
    icon: Car,
    title: "Transport & Transfers",
    description: "Private cars, luxury coaches, trains, and airport transfers — smooth door-to-door transport handled entirely by us.",
    color: "from-orange-50 to-rose-50",
    iconBg: "bg-rose-100 text-rose-600",
    border: "border-rose-100"
  },
  {
    icon: FileText,
    title: "Custom Itineraries",
    description: "No fixed templates — we design your journey around your passions, timeline, group size, and travel goals.",
    color: "from-amber-50 to-yellow-50",
    iconBg: "bg-amber-100 text-amber-700",
    border: "border-amber-100"
  }
];

const stats = [
  { icon: Star, value: "10,000+", label: "Happy Travellers", color: "text-orange-500" },
  { icon: Map, value: "50+", label: "Destinations", color: "text-teal-600" },
  { icon: Users, value: "120+", label: "Expert Guides", color: "text-orange-500" },
  { icon: Award, value: "8+ Years", label: "Of Excellence", color: "text-teal-600" }
];

const Facilities = () => {
  return (
    <section className="relative w-full py-20 md:py-28 overflow-hidden section-warm">
      {/* Orange decorative orbs */}
      <div className="orange-orb w-[400px] h-[400px] -top-20 -right-20 opacity-60" />
      <div className="orange-orb w-[300px] h-[300px] bottom-10 -left-10 opacity-40" />
      <div className="teal-orb w-[350px] h-[350px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50" />

      <div className="relative z-10 px-6 md:px-12 lg:px-24">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-[600px]">
            <span className="text-xs uppercase tracking-widest font-extrabold text-orange-500 mb-3 block">
              ✦ What We Offer
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-primary leading-tight">
              Our Facilities &{" "}
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-primary/65 text-base md:text-lg leading-relaxed mt-4 max-w-[520px]">
              At Intro Travels India, every detail is handled — from your first flight booking to your last hotel 
              night — so you can focus entirely on the experience.
            </p>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="flex flex-col items-center text-center bg-white/70 backdrop-blur-sm border border-white/60 rounded-2xl px-4 py-4 shadow-sm">
                  <Icon size={18} className={`${stat.color} mb-1`} />
                  <span className={`font-display font-extrabold text-xl ${stat.color}`}>{stat.value}</span>
                  <span className="text-[10px] text-primary/50 font-semibold uppercase tracking-wider">{stat.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((fac, idx) => {
            const Icon = fac.icon;
            return (
              <div
                key={idx}
                className={`group relative bg-gradient-to-br ${fac.color} border ${fac.border} rounded-[2rem] p-7 flex flex-col gap-4 premium-card overflow-hidden`}
              >
                {/* Subtle inner orb */}
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/40 blur-2xl" />
                
                <div className={`w-12 h-12 rounded-2xl ${fac.iconBg} flex items-center justify-center flex-shrink-0`}>
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-primary mb-2">{fac.title}</h3>
                  <p className="text-primary/60 text-sm leading-relaxed">{fac.description}</p>
                </div>
                {/* Bottom accent line */}
                <div className="w-8 h-1 rounded-full bg-gradient-to-r from-orange-400 to-amber-300 mt-auto" />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <p className="text-primary/70 text-base font-medium">
            Ready to plan your dream trip? Let's build your perfect journey together.
          </p>
          <a
            href="#inquiry-form"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full font-bold text-sm shadow-md hover:shadow-orange-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap"
          >
            Start Planning Now →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
