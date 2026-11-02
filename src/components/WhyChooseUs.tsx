'use client';

import React from 'react';
import Image from 'next/image';
import { WHY_CHOOSE_US_POINTS } from '@/data/websiteData';
import { 
  Compass, 
  Cpu, 
  ShieldCheck, 
  HardHat, 
  Clock, 
  Award, 
  CheckCircle2 
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Compass,
  Cpu,
  ShieldCheck,
  HardHat,
  Clock,
  Award,
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 sm:py-32 relative bg-[#1b1918] overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#d4b145]/5 rounded-full filter blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#d4b145]/15 border border-[#d4b145]/30 text-[#d4b145] text-xs font-bold uppercase tracking-wider mb-4">
            Competitive Advantage
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Why Industry Leaders Choose <br />
            <span className="gold-gradient-text">Hashem Contracting.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#aba59c] mt-4 leading-relaxed">
            Our reputation is built on fifteen years of unwavering engineering discipline, European automated fabrication technology, and strict compliance with Saudi and international building codes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Modern Asymmetrical Image Collage */}
          <div className="lg:col-span-5 relative">
            <div className="grid grid-cols-2 gap-4 relative">
              
              {/* Image 1: Aluminium Fabrication & Curtain Wall */}
              <div className="relative rounded-[24px] overflow-hidden border-2 border-[#d4b145] shadow-[0_0_25px_rgba(212,177,69,0.15)] h-56 sm:h-64 group bg-[#141312]" style={{ isolation: 'isolate' }}>
                <Image
                  src="/images/why-us/aluminium-glazing.jpg"
                  alt="Aluminium Curtain Wall Fabrication"
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover w-full h-full rounded-[inherit] group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none rounded-[inherit]" />
                <span className="absolute bottom-3 left-3 text-[11px] font-bold text-white uppercase tracking-wider bg-black/70 backdrop-blur-md px-2.5 py-0.5 rounded-md border border-[#d4b145]/40">
                  Aluminium Glazing
                </span>
              </div>

              {/* Image 2: Steel Welding Sparks */}
              <div className="relative rounded-[24px] overflow-hidden border-2 border-[#d4b145] shadow-[0_0_25px_rgba(212,177,69,0.15)] h-56 sm:h-64 group mt-8 bg-[#141312]" style={{ isolation: 'isolate' }}>
                <Image
                  src="/images/why-us/steel-welding.jpg"
                  alt="Certified Steel Welding Sparks"
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover w-full h-full rounded-[inherit] group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none rounded-[inherit]" />
                <span className="absolute bottom-3 left-3 text-[11px] font-bold text-white uppercase tracking-wider bg-black/70 backdrop-blur-md px-2.5 py-0.5 rounded-md border border-[#d4b145]/40">
                  Certified Welding
                </span>
              </div>

              {/* Image 3: Heavy Civil Construction & Cranes */}
              <div className="relative rounded-[24px] overflow-hidden border-2 border-[#d4b145] shadow-[0_0_25px_rgba(212,177,69,0.15)] h-56 sm:h-64 group -mt-4 bg-[#141312]" style={{ isolation: 'isolate' }}>
                <Image
                  src="/images/why-us/civil-works.jpg"
                  alt="Civil Construction Concrete Works"
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover w-full h-full rounded-[inherit] group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none rounded-[inherit]" />
                <span className="absolute bottom-3 left-3 text-[11px] font-bold text-white uppercase tracking-wider bg-black/70 backdrop-blur-md px-2.5 py-0.5 rounded-md border border-[#d4b145]/40">
                  Civil Engineering
                </span>
              </div>

              {/* Image 4: Mechanical HVAC & Industrial Ducting */}
              <div className="relative rounded-[24px] overflow-hidden border-2 border-[#d4b145] shadow-[0_0_25px_rgba(212,177,69,0.15)] h-56 sm:h-64 group mt-4 bg-[#141312]" style={{ isolation: 'isolate' }}>
                <Image
                  src="/images/why-us/hvac-systems.jpg"
                  alt="Industrial HVAC Systems"
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover w-full h-full rounded-[inherit] group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none rounded-[inherit]" />
                <span className="absolute bottom-3 left-3 text-[11px] font-bold text-white uppercase tracking-wider bg-black/70 backdrop-blur-md px-2.5 py-0.5 rounded-md border border-[#d4b145]/40">
                  Industrial HVAC
                </span>
              </div>

              {/* Center Floating Seal of Excellence */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#141312]/95 backdrop-blur-xl border-2 border-[#d4b145] rounded-2xl p-4 text-center shadow-2xl z-20 hidden sm:block">
                <span className="text-xl font-extrabold text-[#d4b145] block">100%</span>
                <span className="text-[10px] font-bold text-white uppercase tracking-wider">
                  Quality Audit Pass
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: 6 Feature Cards with Icons & Descriptions */}
          <div className="lg:col-span-7 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {WHY_CHOOSE_US_POINTS.map((point) => {
                const Icon = iconMap[point.icon] || ShieldCheck;
                return (
                  <div
                    key={point.title}
                    className="p-5 rounded-xl bg-[#22201e] border border-[#332f2b] hover:border-[#d4b145]/50 card-hover-effect flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-lg bg-[#2b2724] border border-[#3b3632] flex items-center justify-center text-[#d4b145] mb-3.5 shadow">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-sm font-bold text-white mb-2 leading-snug">
                        {point.title}
                      </h4>
                      <p className="text-xs text-[#9e9992] leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Saudi Vision Guarantee */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-[#24211f] to-[#1c1a18] border border-[#d4b145]/30 flex items-center justify-between gap-4 mt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#d4b145]/20 text-[#d4b145]">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white">Full Decennial Liability &amp; Warranty Coverage</div>
                  <div className="text-[11px] text-[#9c9791]">Comprehensive guarantees on all structural and facade works</div>
                </div>
              </div>
              <span className="text-xs font-bold text-[#d4b145] uppercase tracking-wider hidden sm:inline">
                SASO Certified
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
