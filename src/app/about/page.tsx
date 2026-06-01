"use client";

import React from "react";
import Image from "next/image";
import { Compass, Users, Map, Heart, Shield, Award } from "lucide-react";

const teamMembers: { name: string; role: string; bio: string; image?: string }[] = [
  {
    name: "Aditya Thakur",
    role: "Founder & CEO",
    bio: "Passionate adventurer who spent 10 years traversing remote Indian regions before establishing Intro Travels India Holidays."
  }
];

const stats = [
  { value: "10,000+", label: "Happy Travelers" },
  { value: "50+", label: "Destinations Covered" },
  { value: "120+", label: "Licensed Local Guides" },
  { value: "135+", label: "Event Collaborations" }
];

const values = [
  {
    icon: Compass,
    title: "Authentic Exploration",
    description: "We lead you off the beaten track to discover true local culture, nature, and hidden historical gems."
  },
  {
    icon: Shield,
    title: "Safety & comfort",
    description: "Every itinerary includes licensed vehicles, vetted local guides, and 24/7 client coordination support."
  },
  {
    icon: Heart,
    title: "Sustainable Travel",
    description: "We employ native guides and partner with community lodges to ensure tourism supports the local economy."
  }
];

const AboutPage = () => {

  return (
    <main className="w-full min-h-screen bg-[#F6F7FB] pb-20 overflow-x-hidden">
      {/* 1. Header Hero Banner */}
      <section className="relative w-full bg-primary text-white py-24 md:py-32 px-6 md:px-12 lg:px-24 rounded-b-[3.5rem] overflow-hidden shadow-lg">
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] rounded-full bg-gradient-to-br from-[#3b7c74]/20 to-transparent blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-20 -left-20 w-[30vw] h-[30vw] rounded-full bg-[#163B37] opacity-40 blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-[800px] flex flex-col gap-6 text-left">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#5cbaa5] px-3.5 py-1.5 rounded-full bg-white/10 w-fit">
            Who We Are &bull; About Us
          </span>
          <h1 className="font-display font-bold text-4xl md:text-6xl tracking-tight leading-none text-white">
            Designing Journeys <br />
            That Inspire
          </h1>
          <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-[640px]">
            Intro Travels India Holidays is a modern travel company dedicated to creating bespoke adventure tours. 
            We believe travel should be immersive, safe, and deeply connected to local history and communities.
          </p>
        </div>
      </section>

      {/* 2. Stats Section */}
      <section className="w-full px-6 md:px-12 lg:px-24 py-16 -mt-10 relative z-20">
        <div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white border border-black/[0.03] shadow-lg rounded-[2.5rem] p-8 md:p-12 text-center"
        >
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col gap-1 border-r last:border-r-0 border-black/[0.04]">
              <span className="font-display font-extrabold text-3xl md:text-4xl text-[#3b7c74]">{stat.value}</span>
              <span className="text-xs md:text-sm text-primary/50 font-semibold">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Core Values */}
      <section className="w-full px-6 md:px-12 lg:px-24 py-12">
        <div className="flex flex-col gap-3 mb-12 text-left">
          <span className="text-xs uppercase tracking-wider text-primary/40 font-semibold">
            Our Beliefs
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-primary">
            Values That Drive Us
          </h2>
          <p className="text-primary/60 text-sm md:text-base max-w-[600px]">
            We build every package around three fundamental pillars to guarantee authenticity, safety, and local benefit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {values.map((val, idx) => {
            const IconComponent = val.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-[2rem] p-8 border border-black/[0.02] shadow-sm flex flex-col gap-5 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center text-[#3b7c74] flex-shrink-0">
                  <IconComponent size={22} />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-display font-bold text-lg text-primary">{val.title}</h3>
                  <p className="text-xs md:text-sm text-primary/65 leading-relaxed">{val.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Core Team Section */}
      <section className="w-full px-6 md:px-12 lg:px-24 py-16">
        <div className="flex flex-col gap-3 mb-12 text-left">
          <span className="text-xs uppercase tracking-wider text-primary/40 font-semibold">
            Travel Specialists
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-primary">
            Meet the Founders
          </h2>
          <p className="text-primary/60 text-sm md:text-base max-w-[600px]">
            Our travel designers combine local expertise with luxury management to curate flawless itineraries.
          </p>
        </div>

        <div className="flex justify-center w-full">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-black/[0.02] shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center gap-6 max-w-[450px] w-full"
            >
              {member.image && (
                <div className="relative w-44 h-44 rounded-full overflow-hidden border-4 border-accent shadow-inner flex-shrink-0">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="flex flex-col gap-2 items-center">
                <h3 className="font-display font-bold text-2xl text-primary">{member.name}</h3>
                <span className="text-xs font-bold text-[#3b7c74] bg-[#3b7c74]/10 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                  {member.role}
                </span>
                <p className="text-xs md:text-sm text-primary/60 mt-2 leading-relaxed max-w-[320px]">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
