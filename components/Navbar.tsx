"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f8f6f0] border-b border-[#e7e4db] py-3 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1e3325] text-white font-serif font-bold text-xl shadow-md transition-transform duration-300">
              E
            </span>
            <div className="flex flex-col">
              <span className="text-lg font-serif font-bold text-[#1c2b20] tracking-wide leading-none">
                Eden Garden
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-sans mt-0.5">
                Day Spa
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-semibold tracking-wide text-[#1c2b20] hover:text-[#c5a059] transition-colors duration-200">সার্ভিস</a>
            <a href="#about" className="text-sm font-semibold tracking-wide text-[#1c2b20] hover:text-[#c5a059] transition-colors duration-200">আমাদের সম্পর্কে</a>
            <a href="#contact" className="text-sm font-semibold tracking-wide text-[#1c2b20] hover:text-[#c5a059] transition-colors duration-200">যোগাযোগ</a>
          </nav>

          {/* Call to Action Booking Button */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="#contact"
              className="bg-[#1e3325] hover:bg-[#2c4736] text-white text-sm font-semibold rounded-full px-6 py-2.5 transition-all duration-300"
            >
              বুকিং করুন
            </a>
          </div>

          {/* Mobile Actions (Booking button next to hamburger menu) */}
          <div className="flex md:hidden items-center gap-3">
            <a 
              href="#contact"
              className="bg-[#1e3325] hover:bg-[#2c4736] text-white text-sm font-bold rounded-full px-5 py-2 transition-all duration-300 shadow-sm"
            >
              বুকিং
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-10 h-10 rounded-full border border-zinc-200 bg-white flex items-center justify-center text-[#1c2b20] hover:text-[#c5a059] focus:outline-none transition-all duration-300"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu drawer */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-[#f8f6f0]/95 border-b border-[#e7e4db] backdrop-blur-xl transition-all duration-300 ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"}`}>
        <div className="px-4 pt-4 pb-6 space-y-4">
          <a 
            href="#services" 
            onClick={() => setIsMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-[#1c2b20] rounded-md hover:bg-zinc-800/5 transition-colors"
          >
            সার্ভিস
          </a>
          <a 
            href="#about" 
            onClick={() => setIsMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-[#1c2b20] rounded-md hover:bg-zinc-800/5 transition-colors"
          >
            আমাদের সম্পর্কে
          </a>
          <a 
            href="#contact" 
            onClick={() => setIsMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-[#1c2b20] rounded-md hover:bg-zinc-800/5 transition-colors"
          >
            যোগাযোগ
          </a>
          
          <div className="pt-4 border-t border-[#e7e4db] flex flex-col gap-3">
            <a 
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="bg-[#1e3325] text-white font-semibold text-center rounded-full py-2.5"
            >
              বুকিং করুন
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
