"use client";

import React from "react";
import Image from "next/image";
import { Clock, Phone, MessageSquare, Flame } from "lucide-react";
import { SPA_INFO } from "@/constants/spaInfo";

export default function Services() {
  const services = [
    {
      id: "service-1",
      title: "Spa Service 1",
      image: "/servicess/1.png",
    },
    {
      id: "service-2",
      title: "Spa Service 2",
      image: "/servicess/2.png",
    },
    {
      id: "service-3",
      title: "Spa Service 3",
      image: "/servicess/3.png",
    },
    {
      id: "service-4",
      title: "Spa Service 4",
      image: "/servicess/4.png",
    },
    {
      id: "service-5",
      title: "Spa Service 5",
      image: "/servicess/5.png",
    },
    {
      id: "service-6",
      title: "Spa Service 6",
      image: "/servicess/6.png",
    },
    {
      id: "service-7",
      title: "Spa Service 7",
      image: "/servicess/7.png",
    },
    {
      id: "service-8",
      title: "Spa Service 8",
      image: "/servicess/8.png",
    },
    {
      id: "service-9",
      title: "Spa Service 9",
      image: "/servicess/9.png",
    },
  ];

  return (
    <section id="services" className="py-14 md:py-20 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <span className="text-xs uppercase tracking-[0.27em] text-[#bca261] font-semibold">Services</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1c2b20] mt-2 mb-4">
            আমাদের সেবাসমূহ
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#bca261] to-transparent mx-auto mb-6" />
          <p className="text-[#334639] font-light text-base md:text-lg">
            আপনার প্রয়োজন এবং ক্লান্তি অনুযায়ী সেরা থেরাপি ও স্কিন কেয়ার প্যাকেজ বেছে নিন। যেকোনো সেবা সম্পর্কে বিস্তারিত জানতে সরাসরি আমাদের কল করুন।
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative flex flex-col justify-between rounded-2xl overflow-hidden glass-card h-full border border-[#e7e4db]"
            >
              {/* Image Container */}
              <div className="relative w-full overflow-hidden bg-white">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                />
              </div>

              {/* Booking Footer */}
              <div className="p-5 bg-[#fdfcfb] border-t border-[#e7e4db]/60">
                {/* Quick CTAs */}
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={`tel:${SPA_INFO.formattedPhone}`}
                    className="flex items-center justify-center gap-1.5 py-3 rounded-lg border border-[#1e3325]/20 text-[#1e3325] hover:bg-[#1e3325]/5 text-xs font-semibold transition-colors text-center"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    কল করুন
                  </a>
                  <a
                    href={SPA_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-3 rounded-lg bg-[#1e3325] hover:bg-[#2c4736] text-white text-xs font-bold transition-all text-center shadow-sm"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-green-400 fill-green-400" />
                    হোয়াটসঅ্যাপ
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className="text-xs text-[#5a6e60] tracking-wider">
            * হোম সার্ভিসের ক্ষেত্রে ঢাকার যেকোনো লোকেশন চার্জ প্রযোজ্য হতে পারে।
          </p>
        </div>
      </div>
    </section>
  );
}
