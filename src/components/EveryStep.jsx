"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const EveryStep = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      {/* Every Step description card */}
      <div className="w-full bg-[#EAECEE]/60 border border-white/20 rounded-[2rem] p-8 flex justify-between items-start gap-8 relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <div className="flex flex-col gap-3 max-w-[80%]">
          <h3 className="font-display font-bold text-2xl md:text-3xl text-primary leading-tight">
            Every Step of the Way
          </h3>
          <p className="text-primary/70 text-sm md:text-base leading-relaxed">
            Travel with ease and comfort. From private transfers to group tours,
            we ensure seamless transportation throughout your journey.
          </p>
        </div>
        <button className="w-12 h-12 rounded-full bg-primary hover:bg-[#123632] text-white flex items-center justify-center transition-all duration-300 shadow hover:shadow-lg flex-shrink-0 cursor-pointer">
          <ArrowUpRight size={20} />
        </button>
      </div>

      {/* Grid of Road and Plane Wing */}
      <div className="w-full grid grid-cols-12 gap-6">
        {/* Road "Visit Site" Card */}
        <div className="col-span-12 md:col-span-8 relative rounded-[2rem] overflow-hidden group shadow-sm hover:shadow-md transition-shadow h-[280px]">
          <Image
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1000&auto=format&fit=crop&q=80"
            alt="Scenic road winding through dry mountain landscape"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Custom Curved Bottom Left Corner for Visit Site */}
          <div className="absolute bottom-0 left-0 bg-white pt-4 pr-6 rounded-tr-[2rem] flex items-center justify-center shadow-md">
            <button className="px-6 py-3 bg-[#EAECEE] text-primary hover:bg-primary hover:text-white rounded-full font-bold text-sm md:text-base flex items-center gap-2 transition-all duration-300 cursor-pointer shadow-sm">
              <ArrowUpRight size={16} />
              <span>Visit site</span>
            </button>
          </div>
        </div>

        {/* Plane Wing Card */}
        <div className="col-span-12 md:col-span-4 relative rounded-[2rem] overflow-hidden group shadow-sm hover:shadow-md transition-shadow h-[280px]">
          <Image
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&auto=format&fit=crop&q=80"
            alt="Airplane wing over sky"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Overlay Arrow button */}
          <div className="absolute inset-0 bg-black/10 flex items-center justify-center group-hover:bg-black/20 transition-all duration-300">
            <button className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm text-primary hover:bg-primary hover:text-white flex items-center justify-center transition-all duration-300 shadow-md hover:scale-110 cursor-pointer">
              <ArrowUpRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EveryStep;
