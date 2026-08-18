"use client";

import React from "react";
import Image from "next/image";
import { Clock, Phone, MessageSquare, Flame } from "lucide-react";
import { SPA_INFO } from "@/constants/spaInfo";

export default function Services() {
  const services = [
    {
      id: "hot-oil",
      title: "Hot Oil Full Body Massage",
      description: "গরম তেলে আরামদায়ক ফুল বডি ম্যাসাজ — গভীর রিলাক্সেশন ও পেশীর ব্যথা উপশমে অত্যন্ত কার্যকর।",
      duration: "৬০ মিনিট / ৯০ মিনিট",
      price: "৳৬,০০০ / ৳৮,৫০০",
      image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=800",
      popular: true,
    },
    {
      id: "aroma-therapy",
      title: "Aroma Therapy Massage",
      description: "বিশেষ এসেনশিয়াল অয়েলের মনমুগ্ধকর সুগন্ধে মন শান্ত করার ও শরীরের ক্লান্তি দূর করার প্রিমিয়াম থেরাপি।",
      duration: "৬০ মিনিট",
      price: "৳৫,৫০০",
      image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&q=80&w=800",
      popular: false,
    },
    {
      id: "head-neck-shoulder",
      title: "Head, Neck & Shoulder Massage",
      description: "মাথাব্যথা, ঘাড়, কাঁধ ও পিঠের অবশ ভাব এবং স্ট্রেস কমানোর জন্য টার্গেটেড রিফ্রেশিং থেরাপি।",
      duration: "৩০ মিনিট",
      price: "৳৩,০০০",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
      popular: false,
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
              className="group relative flex flex-col justify-between rounded-2xl overflow-hidden glass-card h-full"
            >
              {/* Popular Ribbon */}
              {service.popular && (
                <div className="absolute top-5 right-5 z-20 inline-flex items-center gap-1.5 bg-[#1e3325] text-white text-[11px] uppercase font-bold tracking-wider px-3.5 py-1.5 rounded-full shadow-lg border border-white/10">
                  <Flame className="w-3.5 h-3.5 fill-white animate-pulse" />
                  Popular
                </div>
              )}

              {/* Service Details */}
              <div>
                {/* Image Container */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image 
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>

                {/* Body Content */}
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-[#1c2b20] group-hover:text-[#bca261] transition-colors mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[#334639] font-normal text-[15px] leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Pricing & Booking Footer */}
              <div className="p-6 pt-0 border-t border-[#e7e4db]/60 mt-auto bg-[#fdfcfb]">
                <div className="flex flex-col gap-2 py-4">
                  <div className="flex justify-between items-center text-xs text-[#5a6e60]">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#bca261]" />
                      সময়কাল:
                    </span>
                    <span className="font-medium text-[#334639]">{service.duration}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-t border-[#e7e4db]/40 pt-3 mt-1">
                    <span className="text-[#5a6e60] text-xs">মূল্য:</span>
                    <span className="font-extrabold text-[#1e3325] text-2xl tracking-tight">{service.price}</span>
                  </div>
                </div>

                {/* Quick CTAs */}
                <div className="grid grid-cols-2 gap-3 pt-2">
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
