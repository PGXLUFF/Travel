"use client";

import React, { useState } from "react";
import Hero from "@/components/Hero";
import TourPackages from "@/components/TourPackages";
import OurStory from "@/components/OurStory";
import Facilities from "@/components/Facilities";
import HowItWorks from "@/components/HowItWorks";
import B2BandB2C from "@/components/B2BandB2C";
import EveryStep from "@/components/EveryStep";
import EffortlessTravel from "@/components/EffortlessTravel";
import BookingForm from "@/components/BookingForm";

const Page = () => {
  const [activePackage, setActivePackage] = useState("");

  const handleSelectPackage = (pkgId: string) => {
    setActivePackage(pkgId);
    document.getElementById("inquiry-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="w-full min-h-screen bg-[#FAF7F2] overflow-x-hidden">
      {/* Hero Header & Banner */}
      <Hero />

      {/* Exclusive Tour Packages Section */}
      <TourPackages onSelectPackage={handleSelectPackage} />

      {/* Who We Are – Brand Promise Section */}
      <OurStory />

      {/* Facilities & Services Section */}
      <Facilities />

      {/* B2B & B2C Travel Solutions */}
      <B2BandB2C />

      {/* How It Works – Booking Process */}
      <HowItWorks />

      {/* Every Step of the Way (Left) & Effortless Travel (Right) Grid */}
      <section className="relative w-full px-6 md:px-12 lg:px-24 py-12 section-cool overflow-hidden">
        <div className="orange-orb w-[320px] h-[320px] -top-16 -right-16 opacity-50" />
        <div className="teal-orb w-[280px] h-[280px] bottom-0 left-0 opacity-40" />
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          <div className="lg:col-span-5 h-full">
            <EveryStep />
          </div>
          <div className="lg:col-span-7 h-full">
            <EffortlessTravel />
          </div>
        </div>
      </section>

      {/* Tour Inquiry / Booking Form */}
      <BookingForm activePackage={activePackage} />
    </main>
  );
};

export default Page;
