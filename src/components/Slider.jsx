"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Slider = () => {
  return (
    <div className="w-full h-[500px] p-8">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ hideOnClick: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="w-full h-full rounded-3xl overflow-hidden shadow-md"
      >
        <SwiperSlide>
          <div className="w-full h-full bg-emerald-200 flex justify-center items-center text-3xl font-bold text-emerald-900">
            Beautiful Destinations
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full flex justify-center items-center">
            <Image
              src={
                "https://images.unsplash.com/photo-1615915468538-0fbd857888ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxvZ298ZW58MHx8MHx8fDA%3D"
              }
              alt={"Luxury Hotel"}
              fill
              className="object-cover"
            />
            <div className="w-full h-full bg-amber-200 flex justify-center items-center text-3xl font-bold text-amber-900">
              Luxury Hotels
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full bg-blue-200 flex justify-center items-center text-3xl font-bold text-blue-900">
            Unforgettable Experiences
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
