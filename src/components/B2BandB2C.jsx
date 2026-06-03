"use client";

import React, { useState } from "react";
import { Building2, Users, Check, ArrowRight } from "lucide-react";

const b2cFeatures = [
  "Custom holiday itineraries for families & couples",
  "Honeymoon & anniversary special packages",
  "Solo traveller & group adventure tours",
  "Budget to luxury travel plans",
  "Pilgrimage & heritage circuit tours",
  "Direct WhatsApp booking support",
];

const b2bFeatures = [
  "Corporate offsite & team outing packages",
  "Bulk booking discounts for travel agents",
  "MICE — Meetings, Incentives, Conferences & Events",
  "White-label itineraries for travel agencies",
  "Dedicated relationship manager",
  "Commission-based agent partnership programme",
];

const B2BandB2C = () => {
  const [activeTab, setActiveTab] = useState("b2c");

  const isB2C = activeTab === "b2c";

  return (
    <section
      className="relative w-full py-20 md:py-28 overflow-hidden"
      aria-label="B2B and B2C India travel packages – Corporate and individual tours"
    >
      {/* Orbs */}
      <div className="orange-orb w-[400px] h-[400px] -top-20 right-0  opacity-40" />
      <div className="teal-orb   w-[350px] h-[350px]  bottom-0  -left-16 opacity-30" />

      <div className="relative z-10 px-6 md:px-12 lg:px-24">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest font-extrabold text-orange-500 mb-3 block">
            ✦ Travel Solutions for Everyone
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-primary leading-tight">
            We Serve{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Individuals
            </span>{" "}
            &{" "}
            <span className="bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
              Businesses
            </span>
          </h2>
          <p className="text-primary/55 text-base md:text-lg max-w-[580px] mx-auto mt-4 leading-relaxed">
            Whether you're a solo traveller, a family planning a holiday, a corporate team
            needing an offsite, or a travel agent seeking bulk packages — we have the right
            solution for you.
          </p>

          {/* Tab Toggle */}
          <div className="flex justify-center mt-8">
            <div className="flex bg-white/80 backdrop-blur-sm border border-orange-100 rounded-full p-1.5 shadow-sm gap-1">
              <button
                onClick={() => setActiveTab("b2c")}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 cursor-pointer ${
                  isB2C
                    ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md"
                    : "text-primary/60 hover:text-primary"
                }`}
              >
                <Users size={15} />
                For Travellers (B2C)
              </button>
              <button
                onClick={() => setActiveTab("b2b")}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 cursor-pointer ${
                  !isB2C
                    ? "bg-gradient-to-r from-teal-600 to-teal-500 text-white shadow-md"
                    : "text-primary/60 hover:text-primary"
                }`}
              >
                <Building2 size={15} />
                For Businesses (B2B)
              </button>
            </div>
          </div>
        </div>

        {/* Content Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Feature List */}
          <div
            className={`rounded-[2.5rem] p-8 md:p-10 border shadow-sm relative overflow-hidden premium-card ${
              isB2C
                ? "bg-gradient-to-br from-orange-50 to-amber-50 border-orange-100"
                : "bg-gradient-to-br from-teal-50 to-emerald-50 border-teal-100"
            }`}
          >
            {/* Decorative inner orb */}
            <div
              className={`absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-30 ${
                isB2C ? "bg-orange-300" : "bg-teal-300"
              }`}
            />

            <div className="relative z-10">
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider mb-5 ${
                isB2C ? "bg-orange-100 text-orange-600" : "bg-teal-100 text-teal-700"
              }`}>
                {isB2C ? <Users size={13} /> : <Building2 size={13} />}
                {isB2C ? "Individual & Family Travel (B2C)" : "Corporate & Agent Travel (B2B)"}
              </div>

              <h3 className="font-display font-bold text-2xl md:text-3xl text-primary mb-2">
                {isB2C
                  ? "Your Perfect Holiday, Built Around You"
                  : "Scale Your Travel Business With Us"}
              </h3>
              <p className="text-primary/60 text-sm md:text-base leading-relaxed mb-7">
                {isB2C
                  ? "From budget getaways to luxury escapes — we curate personalised India tour packages for individuals, couples, families, and group travellers seeking authentic experiences."
                  : "Partner with Intro Travels India for corporate travel management, bulk bookings, agent commissions, and fully managed MICE events across India and internationally."}
              </p>

              <ul className="flex flex-col gap-3.5">
                {(isB2C ? b2cFeatures : b2bFeatures).map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-primary/70">
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        isB2C ? "bg-orange-100 text-orange-600" : "bg-teal-100 text-teal-700"
                      }`}
                    >
                      <Check size={11} />
                    </span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#inquiry-form"
                className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm text-white mt-8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${
                  isB2C
                    ? "bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 hover:shadow-orange-200"
                    : "bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 hover:shadow-teal-200"
                }`}
              >
                {isB2C ? "Plan My Holiday →" : "Become a Partner →"}
              </a>
            </div>
          </div>

          {/* Right: Stats + Value Props */}
          <div className="flex flex-col gap-6">
            {/* Big headline stat */}
            <div className="bg-white/80 backdrop-blur-sm border border-orange-50 rounded-[2rem] p-8 shadow-sm">
              <p className="text-xs uppercase tracking-widest font-extrabold text-orange-500 mb-4">
                ✦ Why Choose Intro Travels India
              </p>
              <div className="grid grid-cols-2 gap-5">
                {[
                  { num: "10,000+", lbl: "Happy Travellers" },
                  { num: "50+",     lbl: "Destinations Covered" },
                  { num: "120+",    lbl: "Licensed Local Guides" },
                  { num: "₹0",      lbl: "Hidden Charges" },
                ].map((s, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="font-display font-extrabold text-2xl md:text-3xl bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                      {s.num}
                    </span>
                    <span className="text-xs text-primary/50 font-semibold mt-0.5">{s.lbl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* B2B specific card */}
            <div className="bg-primary text-white rounded-[2rem] p-8 relative overflow-hidden shadow-xl">
              <div className="orange-orb w-[200px] h-[200px] -top-10 -right-10 opacity-30" />
              <div className="relative z-10">
                <Building2 size={28} className="text-orange-400 mb-4" />
                <h4 className="font-display font-bold text-xl mb-2">
                  Travel Agents & Corporates
                </h4>
                <p className="text-white/65 text-sm leading-relaxed mb-5">
                  Earn competitive commissions. List our packages under your brand.
                  Access dedicated B2B pricing on bulk bookings of 10+ pax across India.
                </p>
                <a
                  href="#inquiry-form"
                  className="inline-flex items-center gap-2 text-orange-400 font-bold text-sm hover:text-orange-300 transition-colors group"
                >
                  Register as a Partner
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default B2BandB2C;
