'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CORE_SERVICES } from '@/data/websiteData';
import { 
  Building2, 
  Layers, 
  Hammer, 
  Wind, 
  Cpu, 
  Wrench, 
  ArrowRight, 
  CheckCircle2 
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Layers: Layers,
  Building2: Building2,
  Hammer: Hammer,
  Wind: Wind,
  Cpu: Cpu,
  Wrench: Wrench,
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 sm:py-32 relative bg-[#1b1918]">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 blueprint-grid-subtle opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#d4b145]/10 border border-[#d4b145]/30 text-[#d4b145] text-xs font-bold uppercase tracking-wider mb-4">
            End-to-End Capabilities
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Comprehensive Engineering &amp; <br />
            <span className="gold-gradient-text">Contracting Solutions</span>
          </h2>
          <p className="text-sm sm:text-base text-[#a8a39c] mt-4 leading-relaxed">
            From precision architectural fabrication to heavy civil structures and complex mechanical climate systems, Hashem delivers turnkey engineering excellence tailored to Saudi Arabia&apos;s demanding industrial landscape.
          </p>
        </div>

        {/* 6 Core Services Grid with Rich Hover Effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CORE_SERVICES.map((service, idx) => {
            const Icon = iconMap[service.iconName] || Building2;
            return (
              <div
                key={service.id}
                className="group relative bg-[#22201e] border border-[#332f2b] rounded-2xl overflow-hidden card-hover-effect flex flex-col justify-between"
              >
                {/* Image Header with Zoom on Hover */}
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={service.featuredImage}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#22201e] via-[#22201e]/50 to-transparent" />
                  
                  {/* Floating Division Icon */}
                  <div className="absolute top-4 left-4 p-3 rounded-xl bg-[#1b1918]/90 border border-[#d4b145]/40 text-[#d4b145] shadow-lg group-hover:bg-[#d4b145] group-hover:text-black transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Division Number */}
                  <div className="absolute top-4 right-4 text-xs font-mono font-bold text-[#edd170] px-2.5 py-1 rounded bg-[#1b1918]/80 border border-[#3b3632]">
                    0{idx + 1}
                  </div>

                  <div className="absolute bottom-3 left-6 right-6">
                    <span className="text-[11px] font-semibold text-[#d4b145] uppercase tracking-wider block mb-0.5">
                      {service.tagline}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#edd170] transition-colors">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-grow flex flex-col justify-between space-y-5">
                  <p className="text-xs sm:text-sm text-[#aba59d] leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Capabilities Bullet Highlights */}
                  <div className="space-y-1.5 border-t border-[#2e2a27] pt-4">
                    <div className="text-[11px] font-bold text-[#d4b145] uppercase tracking-wider mb-2">
                      Key Highlights:
                    </div>
                    {service.capabilities.slice(0, 4).map((cap) => (
                      <div key={cap} className="flex items-start gap-2 text-xs text-[#cfcac2]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#d4b145] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{cap}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Link */}
                  <div className="pt-2 border-t border-[#2e2a27]">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#d4b145] group-hover:text-[#edd170] transition-colors"
                    >
                      <span>Explore Service Details</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 text-center">
          <p className="text-sm text-[#8e8982]">
            Need a bespoke engineering solution or combined multi-disciplinary civil-electro-mechanical package?
          </p>
          <div className="mt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#d4b145] hover:underline"
            >
              <span>Consult with our Senior Chief Engineer</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
