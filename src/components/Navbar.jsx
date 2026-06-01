"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Send, User, Menu, X } from "lucide-react";

import BrandLogo from "./BrandLogo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Tour Packages", href: "/india" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="w-full bg-transparent py-5 px-6 md:px-12 lg:px-24 flex items-center justify-between relative z-50">
      {/* Logo */}
      <Link href="/" className="flex items-center cursor-pointer">
        <BrandLogo align="left" />
      </Link>

      {/* Floating Capsule Nav (Desktop) */}
      <div className="hidden md:flex items-center bg-white/70 backdrop-blur-md border border-white/40 shadow-sm rounded-full py-2 px-3">
        <ul className="flex items-center space-x-1">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 block ${
                  pathname === item.href
                    ? "bg-[#0A221F] text-white shadow-sm"
                    : "text-primary/70 hover:text-primary hover:bg-black/5"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Side Icons */}
      <div className="hidden md:flex items-center space-x-3">
        {/* Send Icon Button */}
        <button className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-[#0A221F] hover:text-white transition-all duration-300 text-primary cursor-pointer">
          <Send size={16} className="transform rotate-45 -translate-y-[1px] translate-x-[1px]" />
        </button>

        {/* User Icon Button */}
        <button className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-[#0A221F] hover:text-white transition-all duration-300 text-primary cursor-pointer">
          <User size={16} />
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center space-x-3">
        <button className="w-9 h-9 rounded-full border border-black/10 flex items-center justify-center hover:bg-black/5 text-primary">
          <Send size={14} className="transform rotate-45" />
        </button>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-full border border-black/10 hover:bg-black/5 text-primary cursor-pointer"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="absolute top-20 left-6 right-6 bg-white/95 backdrop-blur-lg shadow-xl rounded-3xl p-6 border border-white/20 flex flex-col space-y-4 md:hidden transition-all duration-300 ease-in-out">
          <ul className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`w-full text-left px-5 py-3 rounded-2xl text-base font-semibold transition-all block ${
                    pathname === item.href
                      ? "bg-[#0A221F] text-white"
                      : "text-primary/80 hover:bg-black/5"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="border-t border-black/5 pt-4 flex justify-around">
            <button className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-primary">
              <User size={18} />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
