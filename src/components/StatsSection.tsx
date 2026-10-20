'use client';

import React from 'react';
import { COMPANY_STATS } from '@/data/websiteData';
import { Award, CheckCircle2, ShieldCheck, TrendingUp } from 'lucide-react';

export default function StatsSection() {
  return (
    <section id="stats" className="relative z-30 -mt-10 max-w-7xl mx-auto px-4 sm:px-8">
      <div className="bg-gradient-to-b from-[#22201e] to-[#181615] border border-[#d4b145]/30 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        {/* Subtle top gold accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#d4b145] to-transparent"></div>

        {/* Blueprint grid subtle pattern inside container */}
        <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none"></div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 relative z-10">
          {COMPANY_STATS.map((stat, idx) => (
            <div 
              key={stat.label} 
              className="text-center group border-r last:border-r-0 border-[#2f2b28]/60 pr-2 sm:pr-4"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight group-hover:text-[#d4b145] transition-colors flex items-baseline justify-center">
                <span>{stat.number}</span>
                {stat.suffix && (
                  <span className="text-xl sm:text-2xl font-bold text-[#d4b145] ml-1">
                    {stat.suffix}
                  </span>
                )}
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#edd170] mt-1 uppercase tracking-wider">
                {stat.label}
              </div>
              <div className="text-[11px] text-[#8e8982] mt-0.5 hidden sm:block">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
