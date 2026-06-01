"use client";

import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import BookingForm from "@/components/BookingForm";

const ContactPage = () => {
  return (
    <main className="w-full min-h-screen bg-[#F6F7FB] pb-16">
      {/* 1. Header Banner */}
      <section className="relative w-full bg-primary text-white py-20 md:py-28 px-6 md:px-12 lg:px-24 rounded-b-[3.5rem] overflow-hidden shadow-lg">
        {/* Decorative background gradients */}
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] rounded-full bg-gradient-to-br from-[#3b7c74]/20 to-transparent blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-20 -left-20 w-[30vw] h-[30vw] rounded-full bg-[#163B37] opacity-40 blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-[800px] flex flex-col gap-6 text-left">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#5cbaa5] px-3.5 py-1.5 rounded-full bg-white/10 w-fit">
            Get in Touch &bull; Contact Us
          </span>
          <h1 className="font-display font-bold text-4xl md:text-6xl tracking-tight leading-none text-white">
            Contact Intro Travels
          </h1>
          <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-[640px]">
            We are here to help you plan your next unforgettable adventure. 
            Have a question about domestic packages, B2B services, or custom itineraries? 
            Reach out and our specialists will respond within 24 hours.
          </p>
        </div>
      </section>

      {/* 2. Contact Info Cards */}
      <section className="w-full px-6 md:px-12 lg:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Email */}
          <div className="bg-white rounded-[2rem] p-8 border border-black/[0.02] shadow-sm flex flex-col gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center text-[#3b7c74] flex-shrink-0">
              <Mail size={22} />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-display font-bold text-lg text-primary">Email Us</h3>
              <p className="text-xs text-primary/45 font-semibold uppercase tracking-wider mb-2">Inquiries &amp; Support</p>
              <a href="mailto:info@introtravelsindia.com" className="text-base font-extrabold text-[#3b7c74] hover:underline">
                info@introtravelsindia.com
              </a>
              <span className="text-xs text-primary/60 mt-1">General support and corporate B2B travel deals.</span>
            </div>
          </div>

          {/* Card 2: Phone */}
          <div className="bg-white rounded-[2rem] p-8 border border-black/[0.02] shadow-sm flex flex-col gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center text-[#3b7c74] flex-shrink-0">
              <Phone size={22} />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-display font-bold text-lg text-primary">Call Us</h3>
              <p className="text-xs text-primary/45 font-semibold uppercase tracking-wider mb-2">Speak to a specialist</p>
              <a href="tel:+919870526003" className="text-base font-extrabold text-[#3b7c74] hover:underline">
                +91 98705 26003
              </a>
              <span className="text-xs text-primary/60 mt-1">Open 9:00 AM - 6:00 PM IST. Closed Sundays.</span>
            </div>
          </div>

          {/* Card 3: Location */}
          <div className="bg-white rounded-[2rem] p-8 border border-black/[0.02] shadow-sm flex flex-col gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center text-[#3b7c74] flex-shrink-0">
              <MapPin size={22} />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-display font-bold text-lg text-primary">Head Office</h3>
              <p className="text-xs text-primary/45 font-semibold uppercase tracking-wider mb-2">Visit our offices</p>
              <span className="text-base font-extrabold text-primary leading-tight">
                H-04, First Floor, Badarpur
              </span>
              <span className="text-xs text-primary/60 mt-1">Nearest Badarpur Metro Station, New Delhi 110044.</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Reusable Booking/Inquiry Form */}
      <BookingForm />
    </main>
  );
};

export default ContactPage;
