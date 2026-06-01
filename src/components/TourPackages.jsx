"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
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
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80",
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
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&auto=format&fit=crop&q=80",
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
    image: "https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?w=800&auto=format&fit=crop&q=80",
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
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&auto=format&fit=crop&q=80",
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
    image: "https://images.unsplash.com/photo-1561361531-997c5d23db16?w=800&auto=format&fit=crop&q=80",
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
    <section className="w-full px-6 md:px-12 lg:px-24 py-16 flex flex-col">
      {/* Header Row */}
      <div className="w-full flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-12">
        <div className="max-w-[500px] text-left">
          <span className="text-xs uppercase tracking-wider text-[#3b7c74] font-extrabold mb-2 block">
            Tour Packages
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-primary leading-tight">
            Explore Curated Tour Packages
          </h2>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-end gap-6 select-none">
          {/* Tab Selector */}
          <div className="flex bg-[#EAECEE] p-1 rounded-full border border-black/5">
            <button
              onClick={() => setActiveTab("domestic")}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === "domestic" 
                  ? "bg-[#0A221F] text-white shadow-md" 
                  : "text-primary/60 hover:text-primary"
              }`}
            >
              Domestic Tours
            </button>
            <button
              onClick={() => setActiveTab("international")}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === "international" 
                  ? "bg-[#0A221F] text-white shadow-md" 
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
              className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-[#0A221F] hover:text-white transition-all cursor-pointer text-primary"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-[#0A221F] hover:text-white transition-all cursor-pointer text-primary"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Packages Scrollable Row */}
      <div
        ref={scrollContainerRef}
        className="w-full flex gap-8 overflow-x-auto pb-8 pt-2 no-scrollbar snap-x snap-mandatory"
      >
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="flex-shrink-0 w-[300px] md:w-[360px] bg-white rounded-[2.5rem] p-4 shadow-md hover:shadow-xl transition-all duration-300 snap-start border border-black/[0.02] flex flex-col justify-between"
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
                      <Icon size={16} className="text-[#3b7c74]" />
                      <span>{detail.text}</span>
                    </div>
                  );
                })}
              </div>

              {/* Booking CTA */}
              <div className="w-full flex justify-between items-center border-t border-black/[0.04] pt-4">
                <span className="text-[10px] text-primary/45 font-bold uppercase tracking-wider">Plan Your Trip</span>
                <button 
                  onClick={() => onSelectPackage && onSelectPackage(pkg.id)}
                  className="px-6 py-2.5 bg-primary hover:bg-[#123632] text-white rounded-full text-xs font-bold transition-all shadow-sm hover:shadow cursor-pointer"
                >
                  Inquire Now
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
