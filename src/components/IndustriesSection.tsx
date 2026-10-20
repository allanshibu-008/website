'use client';

import React from 'react';
import { INDUSTRIES_SERVED } from '@/data/websiteData';
import { 
  Flame, 
  Factory, 
  Building, 
  PackageCheck, 
  Landmark, 
  Activity, 
  GraduationCap, 
  Home, 
  Droplets,
  ArrowUpRight
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Flame,
  Factory,
  Building,
  PackageCheck,
  Landmark,
  Activity,
  GraduationCap,
  Home,
  Droplets,
};

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-24 sm:py-32 relative bg-[#141312] border-t border-[#2a2624]">
      {/* Ambient Lighting */}
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-[#d4b145]/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#d4b145]/15 border border-[#d4b145]/30 text-[#d4b145] text-xs font-bold uppercase tracking-wider mb-4">
              Market Sectors
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Industries We Serve <br />
              <span className="gold-gradient-text">Across Saudi Arabia.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#aba59c] mt-4 leading-relaxed">
              From heavy petrochemical complexes in Jubail and Yanbu to landmark commercial towers in Riyadh and Al Khobar, our specialized engineering divisions support the Kingdom&apos;s critical infrastructure.
            </p>
          </div>

          <div className="text-xs text-[#8e8982] uppercase tracking-widest font-semibold">
            Certified to Aramco, SABIC &amp; Royal Commission Specs
          </div>
        </div>

        {/* 9 Industry Icon Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES_SERVED.map((ind, idx) => {
            const Icon = iconMap[ind.icon] || Factory;
            return (
              <div
                key={ind.name}
                className="group p-7 rounded-2xl bg-[#1b1918] border border-[#2e2a27] hover:border-[#d4b145]/60 card-hover-effect relative overflow-hidden flex flex-col justify-between"
              >
                {/* Background Blueprint Grid on Hover */}
                <div className="absolute inset-0 blueprint-grid opacity-0 group-hover:opacity-15 transition-opacity duration-300 pointer-events-none"></div>

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3.5 rounded-xl bg-[#252220] border border-[#3b3632] text-[#d4b145] group-hover:bg-[#d4b145] group-hover:text-black transition-all duration-300 shadow">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-[#5c5751] group-hover:text-[#edd170] transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-[#edd170] transition-colors mb-2.5">
                    {ind.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#9c9790] leading-relaxed">
                    {ind.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#262321] flex items-center justify-between text-xs text-[#8e8982] group-hover:text-[#d4b145] transition-colors">
                  <span className="font-semibold">Specialized Scope</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
