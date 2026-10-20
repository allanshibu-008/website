'use client';

import React from 'react';

export default function ClientsCarousel() {
  const clients = [
    { name: "Saudi Aramco Standard", category: "Energy & Infrastructure" },
    { name: "SABIC Industrial Tier", category: "Petrochemical" },
    { name: "Royal Commission Jubail", category: "Government Infrastructure" },
    { name: "Al-Rashed Real Estate", category: "Commercial Developer" },
    { name: "Red Sea Global Vendor", category: "Giga Projects" },
    { name: "NEOM Approved Sub", category: "Mega City Vision" },
    { name: "Saudi Electricity Co.", category: "Utility & Power" },
    { name: "Ma'aden Mining Complex", category: "Heavy Industry" },
    { name: "Alfanar Construction", category: "Civil & Electrical" },
  ];

  return (
    <section className="py-12 bg-[#171514] border-y border-[#2a2624] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-6 text-center">
        <span className="text-[11px] font-bold text-[#8e8982] uppercase tracking-widest">
          Trusted by Prominent Developers, Consultants &amp; Industrial Giants Across the Kingdom
        </span>
      </div>

      {/* Infinite Scrolling Marquee */}
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Left & Right Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#171514] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#171514] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-6 py-2">
          {/* Double array for seamless infinite loop */}
          {[...clients, ...clients].map((client, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-6 py-3.5 rounded-xl bg-[#201e1c] border border-[#2e2a28] whitespace-nowrap hover:border-[#d4b145]/50 transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-[#2b2724] border border-[#d4b145]/40 flex items-center justify-center text-[#d4b145] font-bold text-xs">
                {client.name.substring(0, 2).toUpperCase()}
              </div>
              <div className="text-left">
                <span className="text-xs sm:text-sm font-bold text-white block">
                  {client.name}
                </span>
                <span className="text-[10px] text-[#8e8982] block">
                  {client.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
