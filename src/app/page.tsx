"use client";

import React, { useState } from "react";
import Hero from "@/components/Hero";
import TourPackages from "@/components/TourPackages";
import EveryStep from "@/components/EveryStep";
import EffortlessTravel from "@/components/EffortlessTravel";
import BookingForm from "@/components/BookingForm";
import BottomSection from "@/components/BottomSection";

const Page = () => {
  const [activePackage, setActivePackage] = useState("");

  const handleSelectPackage = (pkgId: string) => {
    setActivePackage(pkgId);
    document.getElementById("inquiry-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="w-full min-h-screen bg-[#F6F7FB] overflow-x-hidden">
      {/* Hero Header & Banner */}
      <Hero />

      {/* Exclusive Tour Packages Section */}
      <TourPackages onSelectPackage={handleSelectPackage} />

      {/* Every Step of the Way (Left) & Effortless Travel (Right) Grid */}
      <section className="w-full px-6 md:px-12 lg:px-24 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left: Every Step Summary & Road & Plane Wing */}
          <div className="lg:col-span-5 h-full">
            <EveryStep />
          </div>

          {/* Right: Effortless Travel Transport Tab List */}
          <div className="lg:col-span-7 h-full">
            <EffortlessTravel />
          </div>
        </div>
      </section>

      {/* Tour Inquiry / Booking Form */}
      <BookingForm activePackage={activePackage} />

      {/* Guide Offers Widget, Call to Action, and Footer */}
      <BottomSection />
    </main>
  );
};

export default Page;
