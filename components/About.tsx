"use client";

import React from "react";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-[#f4f2ea]/60 border-t border-[#e7e4db]/65 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          {/* Left Image collage Column */}
          <div className="lg:col-span-5 relative flex items-center gap-4 md:gap-6 py-6">
            <div className="relative w-1/2 aspect-[4/5] rounded-[2rem] overflow-hidden shadow-md transform -translate-y-4">
              <img 
                src="https://dfgdfg-frienddgdgd.lovable.app/assets/room-BElfJzEy.jpg"
                alt="Spa Room"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="relative w-1/2 aspect-[4/5] rounded-[2rem] overflow-hidden shadow-md transform translate-y-4">
              <img 
                src="https://dfgdfg-frienddgdgd.lovable.app/assets/oils-Bu-RHiz_.jpg"
                alt="Essential Oils"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Content Column */}
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-[0.27em] text-[#bca261] font-semibold block mb-2">About Us</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1c2b20] mb-6">
              ঢাকার প্রশান্তির ঠিকানা
            </h2>
            
            <div className="space-y-4 text-[#334639] font-light text-base leading-relaxed mb-8">
              <p>
                <strong className="text-[#1e3325] font-semibold">Eden Garden Day Spa</strong> ঢাকায় বিউটি, কসমেটিক ও পার্সোনাল কেয়ার সেবা দিয়ে আসছে। আমাদের লক্ষ্য একটাই – ব্যস্ত জীবনের ক্লান্তি ভুলে আপনি যেন সম্পূর্ণ রিলাক্স অনুভব করেন।
              </p>
              <p>
                প্রতিটি সেশন শুরু হয় আপনার প্রয়োজন বোঝার মাধ্যমে, এরপর উপযুক্ত অয়েল ও টেকনিক বেছে নিয়ে থেরাপি দেওয়া হয়। পরিচ্ছন্নতা, নিরাপত্তা ও গোপনীয়তা আমাদের প্রথম অগ্রাধিকার।
              </p>
            </div>

            {/* Statistics Box Grid */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="bg-white border border-[#e7e4db] rounded-2xl p-4 text-center shadow-sm">
                <div className="text-2xl sm:text-3xl font-bold text-[#1e3325]">৯+</div>
                <div className="text-xs text-[#5a6e60] mt-1 font-light">বছরের অভিজ্ঞতা</div>
              </div>
              <div className="bg-white border border-[#e7e4db] rounded-2xl p-4 text-center shadow-sm">
                <div className="text-2xl sm:text-3xl font-bold text-[#1e3325]">১০০০+</div>
                <div className="text-xs text-[#5a6e60] mt-1 font-light">সন্তুষ্ট গ্রাহক</div>
              </div>
              <div className="bg-white border border-[#e7e4db] rounded-2xl p-4 text-center shadow-sm">
                <div className="text-2xl sm:text-3xl font-bold text-[#1e3325]">১০টা-১০টা</div>
                <div className="text-xs text-[#5a6e60] mt-1 font-light font-sans">প্রতিদিন খোলা</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
