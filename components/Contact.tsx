"use client";

import React from "react";
import { SPA_INFO } from "@/constants/spaInfo";

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 relative scroll-mt-20 bg-[#f7f5f0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-[2.5rem] bg-gradient-to-br from-[#1a3825] via-[#24422e] to-[#4a5833] p-8 md:p-14 text-white shadow-2xl flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          
          {/* Left Side */}
          <div className="w-full lg:w-1/2 text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-tight mb-6 text-white">
              অ্যাপয়েন্টমেন্ট নিতে আজই যোগাযোগ করুন
            </h2>
            <p className="text-white/80 font-light text-sm sm:text-base leading-relaxed">
              ফোন করুন অথবা আমাদের ফেসবুক পেজে ইনবক্স করুন – বিস্তারিত ও বুকিং কনফার্মেশন সাথে সাথেই।
            </p>
          </div>

          {/* Right Side */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            {/* Row: Phone */}
            <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-2xl px-5 py-4 backdrop-blur-sm">
              <span className="text-sm font-medium text-white/70">ফোন</span>
              <a href={`tel:${SPA_INFO.formattedPhone}`} className="text-sm sm:text-base font-bold text-white hover:text-[#c5a059] transition-colors">{SPA_INFO.phoneNumber}</a>
            </div>

            {/* Row: WhatsApp */}
            <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-2xl px-5 py-4 backdrop-blur-sm">
              <span className="text-sm font-medium text-white/70">WhatsApp</span>
              <a href={SPA_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base font-bold text-white hover:text-green-400 transition-colors">+880 1912-178078</a>
            </div>

            {/* Row: Email */}
            <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-2xl px-5 py-4 backdrop-blur-sm">
              <span className="text-sm font-medium text-white/70">ইমেইল</span>
              <a href={`mailto:${SPA_INFO.email}`} className="text-sm sm:text-base font-bold text-white hover:text-[#c5a059] transition-colors">{SPA_INFO.email}</a>
            </div>

            {/* Row: Facebook/Messenger */}
            <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-2xl px-5 py-4 backdrop-blur-sm">
              <span className="text-sm font-medium text-white/70">Facebook / Messenger</span>
              <a href={SPA_INFO.fbUrl} target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base font-bold text-white hover:text-[#c5a059] transition-colors">Eden Garden Day Spa</a>
            </div>

            {/* Row: Address */}
            <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-2xl px-5 py-4 backdrop-blur-sm gap-4">
              <span className="text-sm font-medium text-white/70 shrink-0">ঠিকানা</span>
              <a href={SPA_INFO.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm font-medium text-white text-right hover:text-[#c5a059] transition-colors">{SPA_INFO.address}</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
