"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Hotel, Compass, Clock, ChevronLeft, ChevronRight } from "lucide-react";

// 11 Domestic packages with custom details
const domesticPackages = [
  {
    id: "agra",
    title: "Majestic Agra Tour",
    location: "Agra, Uttar Pradesh",
    image: "/Image/Domestic%20Packages/Agra/agra%20photo.png",
    rating: 4.9,
    details: [
      { icon: Hotel, text: "Hotel Stay included" },
      { icon: Compass, text: "Local Agra Guide Tour" },
      { icon: Clock, text: "3 Days 2 Nights Trip" }
    ]
  },
  {
    id: "andaman",
    title: "Andaman Tropical Escapes",
    location: "Andaman & Nicobar Islands",
    image: "/Image/Domestic%20Packages/Andaman/ChatGPT%20Image%20May%2027,%202026,%2003_29_50%20PM.png",
    rating: 5.0,
    details: [
      { icon: Hotel, text: "Beach Resort Stay" },
      { icon: Compass, text: "Island hopping cruise" },
      { icon: Clock, text: "6 Days 5 Nights Trip" }
    ]
  },
  {
    id: "delhi",
    title: "Heritage Delhi Exploration",
    location: "Delhi, National Capital",
    image: "/Image/Domestic%20Packages/Delhi/ChatGPT%20Image%20May%2027,%202026,%2008_31_25%20PM.png",
    rating: 4.8,
    details: [
      { icon: Hotel, text: "Luxury Boutique Hotel" },
      { icon: Compass, text: "Old Delhi Rickshaw Ride" },
      { icon: Clock, text: "3 Days 2 Nights Trip" }
    ]
  },
  {
    id: "jaipur",
    title: "Royal Jaipur Experience",
    location: "Jaipur, Rajasthan",
    image: "/Image/Domestic%20Packages/Jaipur/ChatGPT%20Image%20May%2027,%202026,%2009_20_54%20PM.png",
    rating: 4.9,
    details: [
      { icon: Hotel, text: "Heritage Haveli stay" },
      { icon: Compass, text: "Amer Fort Guided Tour" },
      { icon: Clock, text: "4 Days 3 Nights Trip" }
    ]
  },
  {
    id: "kerala",
    title: "Kerala Backwater Serenity",
    location: "Munnar & Alleppey, Kerala",
    image: "/Image/Domestic%20Packages/Kerala/ChatGPT%20Image%20May%2027,%202026,%2009_41_22%20PM.png",
    rating: 5.0,
    details: [
      { icon: Hotel, text: "Alleppey Houseboat Stay" },
      { icon: Compass, text: "Tea Plantation Walk" },
      { icon: Clock, text: "5 Days 4 Nights Trip" }
    ]
  },
  {
    id: "udaipur",
    title: "Romantic Udaipur Getaway",
    location: "Udaipur, Rajasthan",
    image: "/Image/Domestic%20Packages/Udaipur/ChatGPT%20Image%20May%2027,%202026,%2009_55_01%20PM.png",
    rating: 4.9,
    details: [
      { icon: Hotel, text: "Lakefront Palace Hotel" },
      { icon: Compass, text: "Sunset Boat Cruise" },
      { icon: Clock, text: "4 Days 3 Nights Trip" }
    ]
  },
  {
    id: "goa",
    title: "Sunny Goa Beach Vacation",
    location: "North & South Goa",
    image: "/Image/tour_goa.png",
    rating: 4.8,
    details: [
      { icon: Hotel, text: "Beachside Resort Stay" },
      { icon: Compass, text: "Scuba & Jet Ski Package" },
      { icon: Clock, text: "5 Days 4 Nights Trip" }
    ]
  },
  {
    id: "himachal",
    title: "Himachal Valley Adventure",
    location: "Manali & Shimla, Himachal",
    image: "/Image/tour_himachal.png",
    rating: 4.9,
    details: [
      { icon: Hotel, text: "Mountain View Cottages" },
      { icon: Compass, text: "Paragliding Voucher" },
      { icon: Clock, text: "6 Days 5 Nights Trip" }
    ]
  },
  {
    id: "kashmir",
    title: "Kashmir Paradise Escape",
    location: "Srinagar & Gulmarg, Kashmir",
    image: "/Image/tour_kashmir.png",
    rating: 5.0,
    details: [
      { icon: Hotel, text: "Premium Houseboat stay" },
      { icon: Compass, text: "Gulmarg Gondola Ride" },
      { icon: Clock, text: "5 Days 4 Nights Trip" }
    ]
  },
  {
    id: "leh-ladakh",
    title: "Leh Ladakh Highlands",
    location: "Leh, Ladakh",
    image: "/Image/tour_leh_ladakh.png",
    rating: 5.0,
    details: [
      { icon: Hotel, text: "Pangong Tented Camp" },
      { icon: Compass, text: "Nubra Valley Camel Safari" },
      { icon: Clock, text: "7 Days 6 Nights Trip" }
    ]
  },
  {
    id: "varanasi",
    title: "Spiritual Varanasi Journey",
    location: "Varanasi, Uttar Pradesh",
    image: "/Image/tour_varanasi.png",
    rating: 4.9,
    details: [
      { icon: Hotel, text: "Heritage Riverfront hotel" },
      { icon: Compass, text: "Ganga Aarti Boat Seat" },
      { icon: Clock, text: "3 Days 2 Nights Trip" }
    ]
  }
];

const internationalPackages = [
  {
    id: "papua",
    title: "Jaya Wijaya Mountain",
    location: "Papua, Indonesia",
    image: "https://images.unsplash.com/photo-1542332213-9b5a5a3f8c4e?w=800&auto=format&fit=crop&q=80",
    rating: 5.0,
    details: [
      { icon: Hotel, text: "Including Accommodation" },
      { icon: Compass, text: "Semi Professional Guide" },
      { icon: Clock, text: "3 Days 2 Nights Trip" }
    ]
  },
  {
    id: "fuji",
    title: "Fuji Mountain",
    location: "Honshu, Japan",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&auto=format&fit=crop&q=80",
    rating: 5.0,
    details: [
      { icon: Hotel, text: "Including Accommodation" },
      { icon: Compass, text: "Professional Guide Tour" },
      { icon: Clock, text: "4 Days 3 Nights Trip" }
    ]
  },
  {
    id: "kilimanjaro",
    title: "Kilimanjaro Adventure",
    location: "Kilimanjaro, Tanzania",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&auto=format&fit=crop&q=80",
    rating: 5.0,
    details: [
      { icon: Hotel, text: "Including Accommodation" },
      { icon: Compass, text: "Premium Guide Tour" },
      { icon: Clock, text: "5 Days 4 Nights Trip" }
    ]
  },
  {
    id: "rinjani",
    title: "Mount Rinjani Trekking",
    location: "Lombok, Indonesia",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80",
    rating: 4.9,
    details: [
      { icon: Hotel, text: "Including Camping Gear" },
      { icon: Compass, text: "Local Porter & Guide" },
      { icon: Clock, text: "3 Days 2 Nights Trip" }
    ]
  }
];

const TourPackages = ({ onSelectPackage }) => {
  const [activeTab, setActiveTab] = useState("domestic");
  const scrollContainerRef = useRef(null);

  const packages = activeTab === "domestic" ? domesticPackages : internationalPackages;

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth / 2
          : scrollLeft + clientWidth / 2;
      scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full px-6 md:px-12 lg:px-24 py-16 flex flex-col overflow-hidden section-warm">
      <div className="orange-orb w-[350px] h-[350px] -top-20 -right-20 opacity-50" />
      <div className="teal-orb w-[300px] h-[300px] bottom-0 -left-20 opacity-40" />
      {/* Header Row */}
      <div className="relative z-10 w-full flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-12">
        <div className="max-w-[500px] text-left">
          <span className="text-xs uppercase tracking-widest font-extrabold text-orange-500 mb-3 block">
            ✦ Tour Packages
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-primary leading-tight">
            Explore Curated{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Tour Packages
            </span>
          </h2>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-end gap-6 select-none">
          {/* Tab Selector */}
          <div className="flex bg-white/70 backdrop-blur-sm p-1 rounded-full border border-orange-100 shadow-sm">
            <button
              onClick={() => setActiveTab("domestic")}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                activeTab === "domestic"
                  ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md"
                  : "text-primary/60 hover:text-primary"
              }`}
            >
              Domestic Tours
            </button>
            <button
              onClick={() => setActiveTab("international")}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                activeTab === "international"
                  ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md"
                  : "text-primary/60 hover:text-primary"
              }`}
            >
              International Tours
            </button>
          </div>

          {/* Scroll Navigation Buttons */}
          <div className="flex gap-2.5 self-end">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border border-orange-200 bg-white/70 flex items-center justify-center hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-500 hover:text-white hover:border-transparent transition-all duration-300 cursor-pointer text-primary shadow-sm"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border border-orange-200 bg-white/70 flex items-center justify-center hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-500 hover:text-white hover:border-transparent transition-all duration-300 cursor-pointer text-primary shadow-sm"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Packages Scrollable Row */}
      <div
        ref={scrollContainerRef}
        className="relative z-10 w-full flex gap-8 overflow-x-auto pb-8 pt-2 no-scrollbar snap-x snap-mandatory"
      >
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="flex-shrink-0 w-[300px] md:w-[360px] bg-white rounded-[2.5rem] p-4 shadow-md snap-start border border-black/[0.02] flex flex-col justify-between premium-card"
          >
            <div>
              {/* Card Image Area */}
              <div className="relative w-full h-[240px] rounded-[2rem] overflow-hidden mb-5">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  sizes="(max-w-768px) 100vw, 360px"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-white/70 backdrop-blur-md text-[10px] uppercase font-bold text-primary px-3 py-1.5 rounded-full border border-white/20">
                  {pkg.location.split(",")[1]?.trim() || pkg.location}
                </span>
              </div>

              {/* Title and Rating */}
              <div className="flex justify-between items-start gap-2 mb-3 text-left px-1">
                <h3 className="font-display font-bold text-lg md:text-xl text-primary leading-tight">
                  {pkg.title}
                </h3>
                <div className="flex items-center gap-1 text-amber-500 font-bold text-sm shrink-0 mt-0.5">
                  <Star size={14} fill="currentColor" />
                  <span>{pkg.rating.toFixed(1)}</span>
                </div>
              </div>
            </div>

            {/* Details & CTA */}
            <div className="flex-grow flex flex-col justify-end px-1">
              <div className="space-y-2.5 mb-5 border-t border-black/[0.04] pt-4 text-left">
                {pkg.details.map((detail, index) => {
                  const Icon = detail.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 text-primary/60 text-xs md:text-sm font-medium"
                    >
                      <Icon size={16} className="text-orange-500" />
                      <span>{detail.text}</span>
                    </div>
                  );
                })}
              </div>

              {/* Booking CTA */}
              <div className="w-full flex justify-between items-center border-t border-black/[0.04] pt-4 gap-2">
                {activeTab === "domestic" ? (
                  <Link
                    href={`/destinations/${pkg.id}`}
                    className="px-4 py-2.5 border border-orange-200 text-primary hover:bg-orange-50 rounded-full text-xs font-bold transition-all hover:-translate-y-0.5 cursor-pointer text-center flex-grow"
                  >
                    View Details
                  </Link>
                ) : (
                  <span className="text-[10px] text-primary/45 font-bold uppercase tracking-wider">Plan Your Trip</span>
                )}
                <button
                  onClick={() => onSelectPackage && onSelectPackage(pkg.id)}
                  className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white rounded-full text-xs font-bold transition-all shadow-sm hover:shadow-orange-200 hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
                >
                  Inquire Now →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TourPackages;
