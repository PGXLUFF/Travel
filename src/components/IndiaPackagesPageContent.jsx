"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, MapPin, ArrowRight } from "lucide-react";
import BookingForm from "@/components/BookingForm";

// 11 Domestic packages with custom details and image configuration
const domesticPackages = [
  {
    id: "agra",
    title: "Majestic Agra Tour",
    location: "Agra, Uttar Pradesh",
    image: "/Image/Domestic%20Packages/Agra/agra%20photo.png",
    rating: 4.9,
    price: "$0",
    duration: "3 Days 2 Nights",
    description: "Experience the timeless beauty of the Taj Mahal, Agra Fort, and local Mughal heritage sites.",
    details: ["Hotel Stay included", "Local Agra Guide Tour", "Mughlai Cuisine Tasting"]
  },
  {
    id: "andaman",
    title: "Andaman Tropical Escapes",
    location: "Andaman & Nicobar Islands",
    image: "/Image/Domestic%20Packages/Andaman/ChatGPT%20Image%20May%2027,%202026,%2003_29_50%20PM.png",
    rating: 5.0,
    price: "$0",
    duration: "6 Days 5 Nights",
    description: "Indulge in pristine white sand beaches, coral reefs, scuba diving, and deep ocean exploration.",
    details: ["Beach Resort Stay", "Snorkeling Equipment", "Island hopping cruise"]
  },
  {
    id: "delhi",
    title: "Heritage Delhi Exploration",
    location: "Delhi, National Capital",
    image: "/Image/Domestic%20Packages/Delhi/ChatGPT%20Image%20May%2027,%202026,%2008_31_25%20PM.png",
    rating: 4.8,
    price: "$0",
    duration: "3 Days 2 Nights",
    description: "Explore Red Fort, Qutub Minar, Connaught Place, and the street food lanes of Old Delhi.",
    details: ["Luxury Boutique Hotel", "Old Delhi Rickshaw Ride", "Heritage Site Entries"]
  },
  {
    id: "jaipur",
    title: "Royal Jaipur Experience",
    location: "Jaipur, Rajasthan",
    image: "/Image/Domestic%20Packages/Jaipur/ChatGPT%20Image%20May%2027,%202026,%2009_20_54%20PM.png",
    rating: 4.9,
    price: "$0",
    duration: "4 Days 3 Nights",
    description: "Marvel at the pink-hued palaces, Amer Fort, Hawa Mahal, and Rajasthan's royal cultural bazaar.",
    details: ["Heritage Haveli stay", "Amer Fort elephant/jeep ride", "Traditional Rajasthani Dinner"]
  },
  {
    id: "kerala",
    title: "Kerala Backwater Serenity",
    location: "Munnar & Alleppey, Kerala",
    image: "/Image/Domestic%20Packages/Kerala/ChatGPT%20Image%20May%2027,%202026,%2009_41_22%20PM.png",
    rating: 5.0,
    price: "$0",
    duration: "5 Days 4 Nights",
    description: "Relax in houseboat cruises, walk through Munnar tea gardens, and revitalize with Ayurvedic treatments.",
    details: ["Alleppey Houseboat Stay", "Ayurvedic Spa Session", "Tea Plantation Walk"]
  },
  {
    id: "udaipur",
    title: "Romantic Udaipur Getaway",
    location: "Udaipur, Rajasthan",
    image: "/Image/Domestic%20Packages/Udaipur/ChatGPT%20Image%20May%2027,%202026,%2009_55_01%20PM.png",
    rating: 4.9,
    price: "$0",
    duration: "4 Days 3 Nights",
    description: "Known as the City of Lakes, explore Lake Pichola boat cruises, Jag Mandir, and City Palace.",
    details: ["Lakefront Palace Hotel", "Sunset Boat Cruise", "Royal Palace Guided Tour"]
  },
  {
    id: "goa",
    title: "Sunny Goa Beach Vacation",
    location: "North & South Goa",
    image: "/Image/tour_goa.png",
    rating: 4.8,
    price: "$0",
    duration: "5 Days 4 Nights",
    description: "Unwind on golden beaches, explore Portuguese churches, and enjoy water sports and nightlife.",
    details: ["Beachside Resort Stay", "Scuba & Jet Ski Package", "Spice Plantation Tour"]
  },
  {
    id: "himachal",
    title: "Himachal Valley Adventure",
    location: "Manali & Shimla, Himachal",
    image: "/Image/tour_himachal.png",
    rating: 4.9,
    price: "$0",
    duration: "6 Days 5 Nights",
    description: "Soar through Solang Valley, view snow-covered peaks, and stroll down Mall Road in Shimla.",
    details: ["Mountain View Cottages", "Paragliding Voucher", "Atal Tunnel Tour"]
  },
  {
    id: "kashmir",
    title: "Kashmir Paradise Escape",
    location: "Srinagar & Gulmarg, Kashmir",
    image: "/Image/tour_kashmir.png",
    rating: 5.0,
    price: "$0",
    duration: "5 Days 4 Nights",
    description: "Glide on Dal Lake in a Shikara boat, stay in houseboats, and witness Gulmarg's meadows.",
    details: ["Premium Houseboat stay", "Gulmarg Gondola Ride", "Dal Lake Shikara Tour"]
  },
  {
    id: "leh-ladakh",
    title: "Leh Ladakh Highlands",
    location: "Leh, Ladakh",
    image: "/Image/tour_leh_ladakh.png",
    rating: 5.0,
    price: "$0",
    duration: "7 Days 6 Nights",
    description: "Ride across the highest passes, see blue Pangong Lake, and explore historical Buddhist monasteries.",
    details: ["Pangong Lake Tented Camp", "Nubra Valley Camel Safari", "Khardung La Pass Tour"]
  },
  {
    id: "varanasi",
    title: "Spiritual Varanasi Journey",
    location: "Varanasi, Uttar Pradesh",
    image: "/Image/tour_varanasi.png",
    rating: 4.9,
    price: "$0",
    duration: "3 Days 2 Nights",
    description: "Witness the evening Ganga Aarti, sail at sunrise, and stroll Varanasi's sacred temples and narrow lanes.",
    details: ["Heritage Riverfront hotel", "Ganga Aarti Boat Seat", "Kashi Vishwanath VIP Entry"]
  }
];

const IndiaPackagesPageContent = () => {
  const [activePackage, setActivePackage] = useState("agra");

  const handleInquireClick = (pkgId) => {
    setActivePackage(pkgId);
    document.getElementById("inquiry-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="w-full min-h-screen bg-[#FAF7F2] pb-16">
      {/* 1. Header Banner */}
      <section className="relative w-full bg-primary text-white py-20 md:py-28 px-6 md:px-12 lg:px-24 rounded-b-[3.5rem] overflow-hidden shadow-lg">
        {/* Decorative background gradients */}
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] rounded-full bg-gradient-to-br from-[#3b7c74]/20 to-transparent blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-20 -left-20 w-[30vw] h-[30vw] rounded-full bg-[#163B37] opacity-40 blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-[800px] flex flex-col gap-6 text-left">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#5cbaa5] px-3.5 py-1.5 rounded-full bg-white/10 w-fit">
            India &bull; Domestic Packages
          </span>
          <h1 className="font-display font-bold text-4xl md:text-6xl tracking-tight leading-none text-white">
            India Domestic <br />
            Tour Packages
          </h1>
          <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-[640px]">
            Immerse yourself in India's rich mosaic of landscapes and traditions. 
            From the marble domes of Agra to the serene houseboats of Kashmir and white shores of Andaman, 
            choose your dream package and submit an inquiry to begin.
          </p>
        </div>
      </section>

      {/* 2. Packages Grid */}
      <section className="w-full px-6 md:px-12 lg:px-24 py-16">
        <div className="flex flex-col gap-3 mb-12">
          <span className="text-xs uppercase tracking-wider text-primary/40 font-semibold">
            Explore Destinations
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-primary">
            Curated Indian Getaways
          </h2>
          <p className="text-primary/60 text-sm md:text-base max-w-[600px]">
            Each itinerary is carefully designed to offer local authentic stays, experiences, and hassle-free transit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {domesticPackages.map((pkg) => (
            <article
              key={pkg.id}
              className="bg-white rounded-[2rem] p-4 shadow-sm hover:shadow-xl transition-all duration-300 border border-black/[0.02] flex flex-col justify-between"
            >
              {/* Card Image Area */}
              <div className="relative w-full h-[220px] rounded-[1.6rem] overflow-hidden mb-5">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-white/70 backdrop-blur-md text-[10px] uppercase font-bold text-primary px-3 py-1.5 rounded-full border border-white/20">
                  {pkg.duration}
                </span>
              </div>

              {/* Title, rating, location */}
              <div className="px-1 flex-grow">
                <div className="flex justify-between items-start gap-2 mb-2">
                  <h3 className="font-display font-bold text-lg text-primary leading-tight">
                    {pkg.title}
                  </h3>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-sm shrink-0">
                    <Star size={13} fill="currentColor" />
                    <span>{pkg.rating.toFixed(1)}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-primary/45 text-xs font-semibold mb-3">
                  <MapPin size={13} />
                  <span>{pkg.location}</span>
                </div>

                <p className="text-primary/70 text-xs md:text-sm leading-relaxed mb-5">
                  {pkg.description}
                </p>

                {/* Features */}
                <div className="space-y-2 border-t border-black/[0.04] pt-4 mb-6">
                  {pkg.details.map((detail, index) => (
                    <div key={index} className="flex items-center gap-2.5 text-primary/65 text-xs font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3b7c74]" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price & CTA */}
              <div className="px-1 pt-2 flex justify-between items-center border-t border-black/[0.04] gap-2">
                <Link
                  href={`/destinations/${pkg.id}`}
                  className="px-3.5 py-2.5 border border-orange-200 text-primary hover:bg-orange-50 rounded-full text-[11px] font-bold transition-all hover:-translate-y-0.5 cursor-pointer text-center flex-grow"
                >
                  View Details
                </Link>
                <button
                  onClick={() => handleInquireClick(pkg.id)}
                  className="px-4.5 py-2.5 bg-primary hover:bg-[#123632] text-white rounded-full text-[11px] font-bold transition-all shadow-sm hover:shadow cursor-pointer flex items-center gap-1.5 shrink-0"
                >
                  <span>Inquire Now</span>
                  <ArrowRight size={11} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Reusable Inquiry Form */}
      <BookingForm activePackage={activePackage} />
    </main>
  );
};

export default IndiaPackagesPageContent;
