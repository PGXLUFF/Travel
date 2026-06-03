import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight, Star, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Explore Indian Travel Destinations | Intro Travels India",
  description:
    "Discover the best destinations across India. Custom tour packages for Goa, Kashmir, Himachal, Kerala, Rajasthan, Leh Ladakh, Varanasi, Andaman, Delhi & Agra.",
  keywords: [
    "best travel destinations India",
    "Goa packages",
    "Kashmir packages",
    "Leh Ladakh tours",
    "Kerala backwaters",
    "Rajasthan heritage tours",
    "Varanasi tours",
    "Andaman beach holidays"
  ]
};

const destinationsList = [
  {
    id: "leh-ladakh",
    title: "Leh Ladakh Highlands",
    state: "Ladakh",
    desc: "Land of high mountain passes, crystal turquoise lakes, and double-humped camel desert safaris.",
    image: "/Image/tour_leh_ladakh.png",
    duration: "7 Days 6 Nights",
    rating: 5.0,
    accent: "border-orange-100"
  },
  {
    id: "kashmir",
    title: "Kashmir Paradise Escape",
    state: "Jammu & Kashmir",
    desc: "Experience heaven on earth with wooden houseboats on Dal Lake and snow sports in Gulmarg.",
    image: "/Image/tour_kashmir.png",
    duration: "5 Days 4 Nights",
    rating: 5.0,
    accent: "border-teal-100"
  },
  {
    id: "goa",
    title: "Sunny Goa Beach Vacation",
    state: "Goa",
    desc: "Sunkissed sandy beaches, thrilling water sports, old Portuguese churches, and spicy Goan curries.",
    image: "/Image/tour_goa.png",
    duration: "5 Days 4 Nights",
    rating: 4.8,
    accent: "border-orange-100"
  },
  {
    id: "kerala",
    title: "Kerala Backwater Serenity",
    state: "Kerala",
    desc: "Lush tea hills in Munnar, Ayurvedic rejuvenation massage, and private houseboat cruises in Alleppey.",
    image: "/Image/Domestic%20Packages/Kerala/ChatGPT%20Image%20May%2027,%202026,%2009_41_22%20PM.png",
    duration: "5 Days 4 Nights",
    rating: 5.0,
    accent: "border-teal-100"
  },
  {
    id: "jaipur",
    title: "Royal Jaipur Experience",
    state: "Rajasthan",
    desc: "Climb majestic hilltop forts, see pink palaces, and shop block-print textiles in Rajasthan's capital.",
    image: "/Image/Domestic%20Packages/Jaipur/ChatGPT%20Image%20May%2027,%202026,%2009_20_54%20PM.png",
    duration: "4 Days 3 Nights",
    rating: 4.9,
    accent: "border-orange-100"
  },
  {
    id: "udaipur",
    title: "Romantic Udaipur Getaway",
    state: "Rajasthan",
    desc: "Lake Pichola boat cruises, grand lakefront palaces, and scenic rooftop dining in Mewar's historic city.",
    image: "/Image/Domestic%20Packages/Udaipur/ChatGPT%20Image%20May%2027,%202026,%2009_55_01%20PM.png",
    duration: "4 Days 3 Nights",
    rating: 4.9,
    accent: "border-teal-100"
  },
  {
    id: "himachal",
    title: "Himachal Valley Adventure",
    state: "Himachal Pradesh",
    desc: "Solang valley paragliding, snow capped peaks, Mall Road Shimla, and cozy mountain cabin stays.",
    image: "/Image/tour_himachal.png",
    duration: "6 Days 5 Nights",
    rating: 4.9,
    accent: "border-orange-100"
  },
  {
    id: "varanasi",
    title: "Spiritual Varanasi Journey",
    state: "Uttar Pradesh",
    desc: "Evening fire rituals (Ganga Aarti) on the steps of the Ganges, sunrise boat rides, and ancient temples.",
    image: "/Image/tour_varanasi.png",
    duration: "3 Days 2 Nights",
    rating: 4.9,
    accent: "border-teal-100"
  },
  {
    id: "andaman",
    title: "Andaman Tropical Escapes",
    state: "Andaman & Nicobar Islands",
    desc: "Pristine white sand crescent beaches, scuba diving, and historical colonial memorials in Port Blair.",
    image: "/Image/Domestic%20Packages/Andaman/ChatGPT%20Image%20May%2027,%202026,%2003_29_50%20PM.png",
    duration: "6 Days 5 Nights",
    rating: 5.0,
    accent: "border-orange-100"
  },
  {
    id: "delhi",
    title: "Heritage Delhi Exploration",
    state: "National Capital",
    desc: "Old Delhi rickshaw food tours, historic Qutub Minar, Red Fort, and grand Lutyens diplomatic lanes.",
    image: "/Image/Domestic%20Packages/Delhi/ChatGPT%20Image%20May%2027,%202026,%2008_31_25%20PM.png",
    duration: "3 Days 2 Nights",
    rating: 4.8,
    accent: "border-teal-100"
  },
  {
    id: "agra",
    title: "Majestic Agra Tour",
    state: "Uttar Pradesh",
    desc: "Behold the spectacular Taj Mahal, explore Red Sandstone palace fortress walls at Agra Fort.",
    image: "/Image/Domestic%20Packages/Agra/agra%20photo.png",
    duration: "3 Days 2 Nights",
    rating: 4.9,
    accent: "border-orange-100"
  }
];

const DestinationsIndexPage = () => {
  return (
    <main className="w-full min-h-screen bg-[#FAF7F2] pb-24 overflow-x-hidden">
      
      {/* ─── HEADER BANNER ─────────────────────────────────────────── */}
      <section className="relative w-full bg-primary text-white py-20 md:py-28 px-6 md:px-12 lg:px-24 rounded-b-[3.5rem] overflow-hidden shadow-lg">
        {/* Background gradients */}
        <div className="absolute top-0 right-0 w-[45vw] h-[45vw] rounded-full bg-gradient-to-br from-[#3b7c74]/20 to-transparent blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-20 -left-20 w-[30vw] h-[30vw] rounded-full bg-[#163B37] opacity-40 blur-3xl pointer-events-none"></div>
        <div className="orange-orb w-[400px] h-[400px] -top-20 right-0 opacity-40" />

        <div className="relative z-10 max-w-[800px] flex flex-col gap-6 text-left">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#5cbaa5] px-3.5 py-1.5 rounded-full bg-white/10 w-fit">
            ✦ Incredible India &bull; Our Destinations
          </span>
          <h1 className="font-display font-bold text-4xl md:text-6xl tracking-tight leading-none text-white">
            Explore Handpicked <br/>
            <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
              Travel Spots
            </span>
          </h1>
          <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-[620px]">
            Intro Travels India specializes in curated, high-end travel packages. Dive into detail sheets, 
            learn local travel guides, and book your custom vacation for any of our premium destinations below.
          </p>
        </div>
      </section>

      {/* ─── GRID LISTING ──────────────────────────────────────────── */}
      <section className="w-full px-6 md:px-12 lg:px-24 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinationsList.map((dest) => (
            <div 
              key={dest.id}
              className={`bg-white rounded-[2.5rem] p-4 border ${dest.accent} shadow-sm hover:shadow-lg flex flex-col justify-between premium-card`}
            >
              <div>
                {/* Image Wrapper */}
                <div className="relative w-full h-[220px] rounded-[2rem] overflow-hidden mb-5">
                  <Image 
                    src={dest.image} 
                    alt={dest.title} 
                    fill 
                    sizes="(max-w-768px) 100vw, 360px"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 bg-white/70 backdrop-blur-md text-[10px] uppercase font-bold text-primary px-3 py-1.5 rounded-full border border-white/20">
                    {dest.state}
                  </span>
                </div>

                {/* Info Header */}
                <div className="px-1 flex justify-between items-start gap-2 mb-2 text-left">
                  <h3 className="font-display font-bold text-xl text-primary leading-tight">
                    {dest.title}
                  </h3>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-sm shrink-0 mt-0.5">
                    <Star size={14} fill="currentColor" />
                    <span>{dest.rating.toFixed(1)}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="px-1 text-primary/60 text-sm leading-relaxed mb-6 text-left">
                  {dest.desc}
                </p>
              </div>

              {/* Action Footer */}
              <div className="px-1 pt-4 border-t border-black/[0.04] flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-primary/45 text-xs font-semibold">
                  <Clock size={14} className="text-orange-500" />
                  <span>{dest.duration}</span>
                </div>
                <Link
                  href={`/destinations/${dest.id}`}
                  className="px-5 py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white rounded-full text-xs font-bold transition-all shadow-sm hover:shadow-orange-200 hover:-translate-y-0.5 cursor-pointer flex items-center gap-1"
                >
                  <span>Explore Guide</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
};

export default DestinationsIndexPage;
