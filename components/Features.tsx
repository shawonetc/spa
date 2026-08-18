"use client";

import React from "react";
import { Award, ShieldCheck, Sparkles, CalendarDays } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Award className="w-6 h-6 text-gold-400" />,
      title: "প্রশিক্ষিত থেরাপিস্ট",
      desc: "আমাদের রয়েছে দক্ষ, নম্র ও পেশাদার পুরুষ ও মহিলা থেরাপিস্ট টিম।"
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-gold-400" />,
      title: "১০০% নিরাপদ ও গোপনীয়",
      desc: "গ্রাহকদের নিরাপত্তা ও সর্বোচ্চ গোপনীয়তা রক্ষা করা আমাদের প্রধান দায়িত্ব।"
    },
    {
      icon: <Sparkles className="w-6 h-6 text-gold-400" />,
      title: "হাইজেনিক পরিবেশ",
      desc: "প্রতিটি সেশনে আমরা সম্পূর্ণ নতুন, পরিষ্কার ও ওয়ান-টাইম কিট ব্যবহার করি।"
    },
    {
      icon: <CalendarDays className="w-6 h-6 text-gold-400" />,
      title: "হোম ও হোটেল সার্ভিস",
      desc: "ঢাকা শহরের যেকোনো প্রান্তে হোটেল এবং বাসায় গিয়ে হোম সার্ভিস সুবিধা।"
    }
  ];

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-background to-zinc-950/70 border-y border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feat, idx) => (
            <div 
              key={idx}
              className="flex gap-4 p-6 rounded-2xl bg-zinc-950/40 border border-zinc-900 hover:border-gold-500/20 transition-all duration-300"
            >
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-gold-950/20 border border-gold-500/20">
                {feat.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gold-300 mb-1.5">{feat.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed font-light">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
