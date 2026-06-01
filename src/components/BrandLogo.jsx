"use client";

import React from "react";
import Image from "next/image";

const BrandLogo = ({ light = false, align = "center" }) => {
  const alignClass = align === "left" ? "items-start" : "items-center";

  return (
    <div className={`flex flex-col select-none cursor-pointer ${alignClass}`}>
      <div className={`relative h-12 w-48 ${light ? "bg-white px-3 py-1.5 rounded-2xl shadow-sm" : ""}`}>
        <Image
          src="/Image/logo.jpeg"
          alt="Intro Travels India Holidays"
          fill
          sizes="192px"
          className="object-contain rounded-lg"
          priority
        />
      </div>
    </div>
  );
};

export default BrandLogo;
