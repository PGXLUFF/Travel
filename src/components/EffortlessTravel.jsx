"use client";

import React, { useState } from "react";
import { Plane, Train, Bus, Car } from "lucide-react";

const transportOptions = [
  {
    id: "plane",
    title: "Plane",
    description: "We provide flights with schedules according to the airport or can be customized.",
    icon: Plane,
  },
  {
    id: "train",
    title: "Train",
    description: "We provide train travel with a schedule according to the Station or can be customized.",
    icon: Train,
  },
  {
    id: "bus",
    title: "Bus",
    description: "We provide bus travel with a schedule according to the Bus Stop or can be customized.",
    icon: Bus,
  },
  {
    id: "local",
    title: "Local Transportation",
    description: "We provide local vehicle hire with schedules according to the application or can be customized.",
    icon: Car,
  },
];

const EffortlessTravel = () => {
  const [activeId, setActiveId] = useState("plane");

  return (
    <div className="w-full flex flex-col h-full justify-between">
      {/* Header */}
      <div className="mb-8">
        <span className="text-xs uppercase tracking-wider text-primary/40 font-semibold mb-2 block">
          Transport
        </span>
        <h2 className="font-display font-bold text-4xl md:text-5xl text-primary leading-tight">
          Effortless Travel
        </h2>
      </div>

      {/* List of Transport Pills */}
      <div className="flex flex-col gap-4">
        {transportOptions.map((option) => {
          const IconComponent = option.icon;
          const isActive = option.id === activeId;

          return (
            <button
              key={option.id}
              onClick={() => setActiveId(option.id)}
              className={`w-full text-left p-5 rounded-[1.8rem] flex items-start gap-5 transition-all duration-300 border focus:outline-none cursor-pointer hover:shadow-sm ${
                isActive
                  ? "bg-primary text-white border-primary shadow-md transform scale-[1.02]"
                  : "bg-white text-primary border-black/[0.04] hover:bg-black/[0.01]"
              }`}
            >
              {/* Icon Container */}
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors ${
                  isActive ? "bg-white/10 text-white" : "bg-accent text-primary-light"
                }`}
              >
                <IconComponent size={22} />
              </div>

              {/* Text Info */}
              <div className="flex flex-col gap-1.5">
                <h4 className="font-display font-bold text-lg md:text-xl leading-none">
                  {option.title}
                </h4>
                <p
                  className={`text-xs md:text-sm leading-relaxed ${
                    isActive ? "text-white/70" : "text-primary/60"
                  }`}
                >
                  {option.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default EffortlessTravel;
