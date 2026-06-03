"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const EveryStep = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      {/* Every Step description card */}
      <div className="w-full bg-white/70 backdrop-blur-sm border border-orange-100 rounded-[2rem] p-8 flex justify-between items-start gap-8 relative overflow-hidden shadow-sm premium-card">
        <div className="flex flex-col gap-3 max-w-[80%]">
          <span className="text-xs uppercase tracking-widest font-extrabold text-orange-500 mb-1">✦ Transport</span>
          <h3 className="font-display font-bold text-2xl md:text-3xl text-primary leading-tight">
            Every Step of the Way
          </h3>
          <p className="text-primary/70 text-sm md:text-base leading-relaxed">
            Travel with ease and comfort. From private transfers to group tours,
            we ensure seamless transportation throughout your journey.
          </p>
        </div>
        <button className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white flex items-center justify-center transition-all duration-300 shadow-md shadow-orange-100 hover:shadow-orange-200 hover:scale-110 flex-shrink-0 cursor-pointer">
          <ArrowUpRight size={20} />
        </button>
      </div>

      {/* Grid of Road and Plane Wing */}
      <div className="w-full grid grid-cols-12 gap-6">
        {/* Road "Visit Site" Card */}
        <div className="col-span-12 md:col-span-8 relative rounded-[2rem] overflow-hidden group shadow-sm h-[280px] premium-card">
          <Image
            src="/Image/every_step_road.png"
            alt="Scenic mountain road winding through Himalayan hills India"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Custom Curved Bottom Left Corner for Visit Site */}
          <div className="absolute bottom-0 left-0 bg-white pt-4 pr-6 rounded-tr-[2rem] flex items-center justify-center shadow-md">
            <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white rounded-full font-bold text-sm md:text-base flex items-center gap-2 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-orange-200 hover:shadow-md hover:-translate-y-0.5">
              <ArrowUpRight size={16} />
              <span>Visit site</span>
            </button>
          </div>
        </div>

        {/* Plane Wing Card */}
        <div className="col-span-12 md:col-span-4 relative rounded-[2rem] overflow-hidden group shadow-sm h-[280px] premium-card">
          <Image
            src="/Image/every_step_flight.png"
            alt="Airplane window view over Indian Himalayas"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Overlay Arrow button */}
          <div className="absolute inset-0 bg-black/10 flex items-center justify-center group-hover:bg-black/20 transition-all duration-300">
            <button className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white flex items-center justify-center transition-all duration-300 shadow-md hover:scale-110 cursor-pointer">
              <ArrowUpRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EveryStep;
