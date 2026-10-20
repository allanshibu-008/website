'use client';

import React from 'react';
import { TESTIMONIALS } from '@/data/websiteData';
import { Star, Quote, Building2, MapPin } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section className="py-24 sm:py-32 relative bg-[#1b1918]">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#d4b145]/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#d4b145]/15 border border-[#d4b145]/30 text-[#d4b145] text-xs font-bold uppercase tracking-wider mb-4">
            Client Endorsements
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Trusted by Saudi Arabia&apos;s <br />
            <span className="gold-gradient-text">Foremost Project Directors.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#a8a39c] mt-4 leading-relaxed">
            Read firsthand experiences from commercial developers, plant managers, and consulting engineers across the Kingdom.
          </p>
        </div>

        {/* 3 Premium Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="p-8 rounded-2xl bg-[#22201e] border border-[#332f2b] hover:border-[#d4b145]/60 card-hover-effect relative flex flex-col justify-between"
            >
              <div>
                {/* 5-Star Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-[#d4b145]">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#d4b145]" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-[#d4b145]/30" />
                </div>

                <p className="text-xs sm:text-sm text-[#ded9d2] leading-relaxed italic mb-6">
                  &ldquo;{test.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 border-t border-[#2e2a27]">
                <div className="font-bold text-white text-sm">{test.author}</div>
                <div className="text-xs text-[#d4b145] font-medium">{test.title}</div>
                <div className="text-[11px] text-[#8e8982] mt-1 flex items-center gap-1">
                  <Building2 className="w-3 h-3 text-[#d4b145]" />
                  <span>{test.company}</span>
                </div>
                <div className="text-[10px] text-[#78736d] mt-0.5 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#d4b145]" />
                  <span>{test.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
