"use client";

import React from "react";
import Image from "next/image";
import { PhoneCall, MessageSquare } from "lucide-react";
import { SPA_INFO } from "@/constants/spaInfo";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Background Image with elegant overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/bg.png"
          alt="Eden Garden Day Spa Luxury Atmosphere"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1c11]/90 via-[#0b1c11]/60 to-[#0b1c11]/15 z-10" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left z-20 pt-10 pb-16 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 mb-6">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#bca261]">
              Dhaka · Since 2019
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.25] mb-6">
            প্রশান্তির ছোঁয়ায় নতুন করে ফিরে পান নিজেকে
          </h1>

          {/* Subheading */}
          <p className="max-w-xl text-base text-white/80 font-light leading-relaxed mb-10">
            Eden Garden Day Spa – ঢাকায় প্রফেশনাল ম্যাসাজ, অ্যারোমা থেরাপি ও বিউটি কেয়ার। শান্ত পরিবেশ, প্রশিক্ষিত থেরাপিস্ট ও সম্পূর্ণ গোপনীয়তা।
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <a 
              href={`tel:${SPA_INFO.formattedPhone}`}
              className="px-6 py-3.5 rounded-full bg-[#bca261] text-[#1c2b20] hover:bg-[#c5a059] font-bold transition-all duration-300 text-sm flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              কল করুন: {SPA_INFO.phoneNumber}
            </a>
            <a 
              href={SPA_INFO.fbUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full border border-white/40 text-white hover:bg-white/10 font-semibold transition-all duration-300 text-sm flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-blue-400" />
              Facebook এ মেসেজ দিন
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
