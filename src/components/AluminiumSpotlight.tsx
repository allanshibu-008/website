'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  ShieldCheck, 
  Sparkles,
  Maximize2,
  Wind,
  Flame,
  Volume2
} from 'lucide-react';

interface AluminiumSpotlightProps {
  onOpenQuoteModal: () => void;
}

export default function AluminiumSpotlight({ onOpenQuoteModal }: AluminiumSpotlightProps) {
  const [activeItem, setActiveItem] = useState(0);

  const aluminiumProducts = [
    {
      title: "Unitized & Stick Curtain Walls",
      desc: "Engineered building envelopes for high-rise commercial towers and corporate headquarters, featuring double-silver low-E structural glazing and thermal-break profiles.",
      specs: "U-value ≤ 1.4 W/m²K | Wind Resistance 4.5 kPa",
      image: "/images/services/aluminium.jpg",
      tag: "Flagship Architectural System"
    },
    {
      title: "Structural Silicone Glazing (SSG)",
      desc: "Frameless, continuous glass facades using high-modulus structural silicones (Dow Corning / Sika) for sleek, uninterrupted architectural reflections.",
      specs: "2-Sided & 4-Sided SSG Systems | SBC 201 Compliant",
      image: "/images/why-us/aluminium-glazing.jpg",
      tag: "Minimalist Modern Aesthetic"
    },
    {
      title: "Thermal-Break Aluminium Windows & Doors",
      desc: "Heavy-duty sliding, casement, tilt-and-turn, and bi-fold systems engineered for the harsh Gulf climate with polyamide insulation strips.",
      specs: "Sound Reduction Up to 42 dB | Multi-Point Locking",
      image: "/images/projects/proj-1.jpg",
      tag: "Energy Efficient Climate Shield"
    },
    {
      title: "Aluminium Composite Panel (ACP) Cladding",
      desc: "PVDF coated fire-rated (A2 / B1 grade) aluminium composite panel cladding for modern commercial facades, showroom exteriors, and canopy soffits.",
      specs: "Non-Combustible Mineral Core | 20-Year PVDF Warranty",
      image: "/images/projects/proj-2.jpg",
      tag: "Civil Defense Approved"
    },
    {
      title: "Architectural Sun Louvers & Aerofoil Blades",
      desc: "Motorized and fixed aerodynamic aluminium louvers designed to reduce solar heat radiation by up to 60% while optimizing daylight harvesting.",
      specs: "Extruded 6063-T6 Alloy | Custom Anodized / Powder Coated",
      image: "/images/services/steel.jpg",
      tag: "Solar Control & Shading"
    },
    {
      title: "Acoustic Glass Partitions & Frameless Balustrades",
      desc: "Single and double-glazed interior acoustic office partitions, laminated tempered glass balustrades, and structural stainless-steel handrail systems.",
      specs: "Laminated Toughened Glass (10mm - 21.5mm) | SGP Interlayer",
      image: "/images/projects/proj-3.jpg",
      tag: "Interior & Exterior Safety Glazing"
    },
    {
      title: "Automatic Sliding, Revolving & Sensor Doors",
      desc: "Commercial motion-activated sliding glass entrance systems, security revolving doors, and automated handicap-accessible swing operators.",
      specs: "Heavy-Duty Brushless Motors | Integrated Access Control",
      image: "/images/projects/proj-4.jpg",
      tag: "High Traffic Commercial Entrances"
    },
    {
      title: "Industrial Aluminium Solutions & Custom Extrusions",
      desc: "Bespoke engineered aluminium frames, equipment enclosures, cleanroom ceiling grids, and industrial walkways fabricated with high precision.",
      specs: "Tolerances ±0.2mm | CNC Milling & Tapping",
      image: "/images/services/mechanical.jpg",
      tag: "Industrial & Manufacturing Grade"
    }
  ];

  return (
    <section className="py-24 sm:py-32 relative bg-[#141312] border-y border-[#2c2825] overflow-hidden">
      {/* Blueprint grid subtle pattern */}
      <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none"></div>

      {/* Ambient Gold Radial Spotlights */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#d4b145]/10 rounded-full filter blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#d4b145]/10 rounded-full filter blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#d4b145]/15 border border-[#d4b145]/35 text-[#d4b145] text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Flagship Engineering Division
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Aluminium Fabrication &amp; <br />
              <span className="gold-gradient-text">Architectural Glazing.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#aba59c] mt-4 leading-relaxed">
              Equipped with European 5-axis CNC machining centers and advanced cleanroom glass assembly lines, Hashem engineers high-performance building envelopes for landmark projects across Saudi Arabia.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenQuoteModal}
              className="px-6 py-3 rounded-lg bg-[#d4b145] hover:bg-[#edd170] text-[#1b1918] font-bold text-xs sm:text-sm tracking-wide transition-all shadow-lg flex items-center gap-2"
            >
              <span>Request Facade Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              href="/services/aluminium-fabrication"
              className="px-6 py-3 rounded-lg bg-[#242220] hover:bg-[#2e2a27] text-white border border-[#3b3632] hover:border-[#d4b145] font-semibold text-xs sm:text-sm transition-colors"
            >
              Division Details
            </Link>
          </div>
        </div>

        {/* Hero Interactive Aluminium Feature Display */}
        <div className="bg-gradient-to-br from-[#1f1d1b] to-[#181615] border border-[#d4b145]/30 rounded-2xl p-6 sm:p-10 shadow-2xl mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Big Image Preview */}
            <div className="lg:col-span-7 relative">
              <div className="relative rounded-xl overflow-hidden border border-[#d4b145]/40 shadow-2xl h-[340px] sm:h-[420px] group">
                <Image
                  src={aluminiumProducts[activeItem].image}
                  alt={aluminiumProducts[activeItem].title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141312] via-transparent to-black/30" />
                
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded bg-[#d4b145] text-black text-[11px] font-extrabold uppercase tracking-wider shadow">
                    {aluminiumProducts[activeItem].tag}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg bg-[#141312]/90 backdrop-blur-md border border-[#3b3632]">
                  <div className="text-xs text-[#d4b145] font-semibold">Technical Specification:</div>
                  <div className="text-xs sm:text-sm text-white font-medium mt-0.5">
                    {aluminiumProducts[activeItem].specs}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Product Details & Selector */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <span className="text-xs font-bold text-[#d4b145] uppercase tracking-widest block mb-1">
                  Product Spotlight 0{activeItem + 1} of 0{aluminiumProducts.length}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {aluminiumProducts[activeItem].title}
                </h3>
                <p className="text-sm text-[#aba59c] mt-3 leading-relaxed">
                  {aluminiumProducts[activeItem].desc}
                </p>
              </div>

              {/* Technical Features Strip */}
              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-[#2d2926]">
                <div className="p-3 rounded-lg bg-[#181615] border border-[#2d2926]">
                  <div className="flex items-center gap-1.5 text-xs text-[#d4b145] font-bold">
                    <Wind className="w-3.5 h-3.5" /> High Wind Load
                  </div>
                  <div className="text-[11px] text-[#8e8982] mt-0.5">Rated up to 4.5 kPa gust forces</div>
                </div>

                <div className="p-3 rounded-lg bg-[#181615] border border-[#2d2926]">
                  <div className="flex items-center gap-1.5 text-xs text-[#d4b145] font-bold">
                    <Flame className="w-3.5 h-3.5" /> Fire Safety
                  </div>
                  <div className="text-[11px] text-[#8e8982] mt-0.5">Civil Defense A2 non-combustible</div>
                </div>

                <div className="p-3 rounded-lg bg-[#181615] border border-[#2d2926]">
                  <div className="flex items-center gap-1.5 text-xs text-[#d4b145] font-bold">
                    <Volume2 className="w-3.5 h-3.5" /> Acoustic Rating
                  </div>
                  <div className="text-[11px] text-[#8e8982] mt-0.5">Sound reduction up to 45 dB</div>
                </div>

                <div className="p-3 rounded-lg bg-[#181615] border border-[#2d2926]">
                  <div className="flex items-center gap-1.5 text-xs text-[#d4b145] font-bold">
                    <Cpu className="w-3.5 h-3.5" /> CNC Precision
                  </div>
                  <div className="text-[11px] text-[#8e8982] mt-0.5">Profile tolerance ±0.2 mm</div>
                </div>
              </div>

              {/* Mini Interactive Buttons to Switch Active Showcase */}
              <div className="pt-2">
                <div className="text-[11px] uppercase tracking-wider text-[#8e8982] mb-2 font-semibold">
                  Browse Division Systems:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {aluminiumProducts.map((p, idx) => (
                    <button
                      key={p.title}
                      onClick={() => setActiveItem(idx)}
                      className={`px-2.5 py-1.5 rounded text-xs transition-colors ${
                        activeItem === idx
                          ? 'bg-[#d4b145] text-black font-bold shadow'
                          : 'bg-[#242220] text-[#a09b95] hover:text-white'
                      }`}
                    >
                      0{idx + 1}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All 8 Aluminium & Glazing Systems Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {aluminiumProducts.map((prod, idx) => (
            <div
              key={prod.title}
              onClick={() => setActiveItem(idx)}
              className={`p-5 rounded-xl border card-hover-effect cursor-pointer flex flex-col justify-between ${
                activeItem === idx
                  ? 'bg-[#252220] border-[#d4b145] shadow-lg'
                  : 'bg-[#1a1817] border-[#2e2a28] hover:border-[#d4b145]/50'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-[#d4b145]">
                    0{idx + 1}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[#2b2724] text-[#b5b0a8] border border-[#3b3632]">
                    SASO Certified
                  </span>
                </div>
                <h4 className="text-base font-bold text-white mb-2 leading-snug">
                  {prod.title}
                </h4>
                <p className="text-xs text-[#9c9790] line-clamp-3 leading-relaxed">
                  {prod.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#292624] flex items-center justify-between text-xs">
                <span className="text-[#d4b145] font-semibold flex items-center gap-1">
                  View Specs
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-[#d4b145]" />
              </div>
            </div>
          ))}
        </div>

        {/* Profile Compatibility Banner */}
        <div className="mt-14 p-6 rounded-xl bg-[#1b1918] border border-[#332f2b] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs text-[#d4b145] font-bold uppercase tracking-wider block mb-1">
              Authorized Engineering &amp; Fabrication Systems
            </span>
            <div className="text-sm sm:text-base font-semibold text-white">
              We fabricate and install both European &amp; Regional architectural profile systems:
            </div>
            <div className="text-xs text-[#99948e] mt-1">
              Schüco International • Reynaers Aluminium • Technal • Gutmann • Gulf Extrusions • Alupco
            </div>
          </div>

          <Link
            href="/services/aluminium-fabrication"
            className="px-6 py-2.5 rounded-lg bg-[#282523] hover:bg-[#332e2b] text-white border border-[#d4b145]/40 hover:border-[#d4b145] text-xs font-bold transition-colors whitespace-nowrap"
          >
            Learn More About Systems
          </Link>
        </div>
      </div>
    </section>
  );
}
