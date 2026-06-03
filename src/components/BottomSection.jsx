"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Send } from "lucide-react";
import BrandLogo from "./BrandLogo";

const BottomSection = () => {
  return (
    <section className="relative w-full px-6 md:px-12 lg:px-24 py-16 flex flex-col gap-16 overflow-hidden">
      <div className="orange-orb w-[350px] h-[350px] -top-20 -right-20 opacity-40" />
      <div className="teal-orb   w-[300px] h-[300px] top-40 -left-20 opacity-30" />
      {/* Grid of Guide Offers and Let's Turn Reality */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Guide Offers Card */}
        <div className="lg:col-span-5 bg-white border border-black/[0.03] rounded-[2.5rem] p-8 flex flex-col justify-between shadow-sm relative overflow-hidden min-h-[300px] premium-card">
          <div className="flex flex-col gap-4">
            <span className="text-xs uppercase tracking-widest font-extrabold text-orange-500">
              ✦ Our Guides
            </span>
            <p className="text-primary text-base md:text-lg font-semibold leading-relaxed">
              More than 100 of our professional tour guides are ready to accompany
              and assist you on your journey, wherever and whenever you choose.
            </p>
          </div>

          <div className="flex items-center justify-between border-t border-black/[0.04] pt-6 mt-6">
            {/* Overlapping Avatars & Text */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3 overflow-hidden">
                <div className="relative inline-block h-10 w-10 rounded-full ring-2 ring-white">
                  <Image
                    className="rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                    alt="Guide avatar 1"
                    fill
                  />
                </div>
                <div className="relative inline-block h-10 w-10 rounded-full ring-2 ring-white">
                  <Image
                    className="rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                    alt="Guide avatar 2"
                    fill
                  />
                </div>
                <div className="relative inline-block h-10 w-10 rounded-full ring-2 ring-white">
                  <Image
                    className="rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
                    alt="Guide avatar 3"
                    fill
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-primary">GUIDE OFFERS</span>
                <span className="text-[10px] text-primary/45 font-semibold">120+ Active Guides</span>
              </div>
            </div>

            <button className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white flex items-center justify-center transition-all duration-300 shadow-md shadow-orange-100 hover:scale-105 hover:shadow-orange-200 cursor-pointer">
              <ArrowUpRight size={20} />
            </button>
          </div>
        </div>

        {/* Let's Turn Reality Banner */}
        <div className="lg:col-span-7 relative rounded-[2.5rem] overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300 min-h-[300px] flex items-end p-8 md:p-10">
          <Image
            src="/Image/banner_india.png"
            alt="Taj Mahal India at dusk - Intro Travels India"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          {/* Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent"></div>

          <div className="relative z-10 w-full flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold tracking-widest text-orange-400 uppercase">
                ✦ Start Booking
              </span>
              <h3 className="font-display font-extrabold text-3xl md:text-4xl text-white leading-tight">
                Let's Turn <br />
                Reality!
              </h3>
            </div>

            <a
              href="/india"
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white rounded-full font-bold text-sm transition-all duration-300 flex items-center gap-2.5 shadow-md hover:shadow-orange-300/50 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer self-start md:self-end"
            >
              <span>Explore Packages</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Premium Footer */}
      <footer className="w-full bg-primary text-white rounded-[2.5rem] p-10 md:p-16 flex flex-col gap-12 shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-4 md:col-span-1 flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <BrandLogo light={true} align="left" />
              <a 
                href="https://www.introtravelsindia.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xs text-[#5cbaa5] font-bold hover:underline tracking-wide"
              >
                www.introtravelsindia.com
              </a>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-[340px]">
              Intro Travels India transforms travel into unforgettable experiences. We craft journeys
              that inspire, connect, and leave lasting memories.
            </p>
            {/* Socials & Newsletter */}
            <div className="flex items-center gap-3 mt-2">
              <a href="#" aria-label="Twitter/X" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-all text-white">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-all text-white">
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="#" aria-label="GitHub" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-all text-white">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Catalogues Column */}
          <div className="lg:col-span-3 md:col-span-1 flex flex-col gap-5">
            <h4 className="font-display font-bold text-lg text-white/90">Catalogues</h4>
            <ul className="flex flex-col gap-3.5 text-sm text-white/50">
              <li><Link href="/india" className="hover:text-orange-400 transition-colors">Domestic Packages</Link></li>
              <li><Link href="/india#kashmir" className="hover:text-orange-400 transition-colors">Kashmir Paradise</Link></li>
              <li><Link href="/india#andaman" className="hover:text-orange-400 transition-colors">Andaman Tropical Escapes</Link></li>
              <li><Link href="/india#leh-ladakh" className="hover:text-orange-400 transition-colors">Leh Ladakh Highlands</Link></li>
              <li><Link href="/india#agra" className="hover:text-orange-400 transition-colors">Majestic Agra Tour</Link></li>
              <li><Link href="/india#kerala" className="hover:text-orange-400 transition-colors">Kerala Backwaters</Link></li>
            </ul>
          </div>

          {/* Links Column 1 */}
          <div className="lg:col-span-2 md:col-span-1 flex flex-col gap-5">
            <h4 className="font-display font-bold text-lg text-white/90">About</h4>
            <ul className="flex flex-col gap-3.5 text-sm text-white/50">
              <li><Link href="/about" className="hover:text-orange-400 transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-orange-400 transition-colors">Our Team</Link></li>
              <li><Link href="#" className="hover:text-orange-400 transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-orange-400 transition-colors">Our Story</Link></li>
              <li><Link href="#" className="hover:text-orange-400 transition-colors">Testimonials</Link></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="lg:col-span-3 md:col-span-1 flex flex-col gap-5">
            <h4 className="font-display font-bold text-lg text-white/90">Support</h4>
            <ul className="flex flex-col gap-3.5 text-sm text-white/50">
              <li><Link href="/contact" className="hover:text-orange-400 transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-orange-400 transition-colors">Help Center</Link></li>
              <li><Link href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-orange-400 transition-colors">Terms &amp; Conditions</Link></li>
            </ul>

            {/* Micro contact form */}
            <div className="mt-4 flex items-center bg-white/5 rounded-full p-1 border border-white/10 focus-within:border-white/20">
              <input
                type="email"
                placeholder="Get travel updates..."
                className="bg-transparent text-xs text-white placeholder-white/35 px-4 focus:outline-none w-full"
              />
              <button className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white flex items-center justify-center hover:from-orange-600 hover:to-amber-600 transition-all cursor-pointer shadow-sm">
                <Send size={12} className="transform rotate-45 -translate-y-[0.5px] translate-x-[0.5px]" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/35 font-medium">
          <span>&copy; {new Date().getFullYear()} Intro Travels India Ltd. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white/60">Privacy Statement</Link>
            <Link href="#" className="hover:text-white/60">Cookies Policy</Link>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default BottomSection;
