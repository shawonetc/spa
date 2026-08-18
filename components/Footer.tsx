"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#f7f5f0] border-t border-[#e7e4db]/50 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-light">
        <p>
          © {new Date().getFullYear()} Eden Garden Day Spa — Dhaka
        </p>
        <p>
          Beauty, cosmetic & personal care
        </p>
      </div>
    </footer>
  );
}
