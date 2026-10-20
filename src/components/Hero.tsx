'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  Building2, 
  Layers, 
  Hammer, 
  Wind, 
  ChevronRight,
  Play,
  CheckCircle2
} from 'lucide-react';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export default function Hero({ onOpenQuoteModal }: HeroProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  const heroSlides = [
    {
      title: "Aluminium & Facade Engineering",
      subtitle: "Architectural Glazing & Unitized Curtain Walls",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=85",
      badge: "European 5-Axis CNC Precision",
      stat: "85,000 m² Annual Capacity"
    },
    {
      title: "Heavy Structural Steel Fabrication",
      subtitle: "Industrial Plants, Warehouses & Pipe Racks",
      image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1920&q=85",
      badge: "6G Certified Master Welders",
      stat: "1,200 MT Monthly Tonnage"
    },
    {
      title: "Turnkey Civil Construction",
      subtitle: "Commercial Landmarks & Heavy Infrastructure",
      image: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1920&q=85",
      badge: "Saudi Building Code (SBC) Compliant",
      stat: "1.2M m² Delivered in KSA"
    },
    {
      title: "Mechanical & HVAC Climate Systems",
      subtitle: "Central Chilled Water Plants & Duct Automation",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1920&q=85",
      badge: "ASHRAE & Civil Defense Approved",
      stat: "45,000+ TR Installed"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#121110]">
      {/* Background Image Slides with Ken Burns Smooth Transition */}
      {heroSlides.map((slide, idx) => (
        <div
          key={slide.title}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === activeSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          }`}
          style={{ transitionProperty: 'opacity, transform', transitionDuration: '1200ms' }}
        >
          {/* Background Image */}
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />

          {/* Cinematic Multi-Layer Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#141312] via-[#1b1918]/80 to-[#141312]/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1b1918] via-transparent to-[#141312]/80" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/40 to-black/85" />
        </div>
      ))}

      {/* Blueprint Grid & Subtle Engineering Geometry Overlay */}
      <div className="absolute inset-0 blueprint-grid opacity-25 pointer-events-none" />

      {/* Ambient Gold Glow Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#d4b145]/10 filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#d4b145]/8 filter blur-[100px] pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 py-28 sm:py-36 w-full flex flex-col justify-between min-h-[85vh]">
        <div className="max-w-3xl">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#1b1918]/90 border border-[#d4b145]/40 backdrop-blur-md shadow-lg mb-6 animate-in fade-in duration-500">
            <span className="w-2 h-2 rounded-full bg-[#d4b145] animate-ping" />
            <span className="text-xs font-semibold tracking-wider text-[#edd170] uppercase">
              Saudi Arabia&apos;s Engineering &amp; Fabrication Leader
            </span>
            <span className="text-xs text-[#8f8a84] hidden sm:inline">|</span>
            <span className="text-xs text-[#c4beb6] hidden sm:inline">Vision 2030 Contributor</span>
          </div>

          {/* Main Hero Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 font-sans">
            Engineering Excellence <br className="hidden sm:inline" />
            <span className="gold-gradient-text drop-shadow-sm">Built to Last.</span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-xl text-[#d1cbc2] font-normal leading-relaxed mb-8 max-w-2xl">
            Delivering world-class <strong className="text-white font-semibold">aluminium fabrication</strong>, civil construction, mechanical engineering, steel structures, HVAC, and industrial contracting solutions across the Kingdom of Saudi Arabia.
          </p>

          {/* Interactive CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <button
              onClick={onOpenQuoteModal}
              className="px-8 py-4 rounded-xl bg-[#d4b145] hover:bg-[#edd170] text-[#1b1918] font-bold text-base tracking-wide transition-all duration-300 shadow-xl hover:shadow-[#d4b145]/40 flex items-center justify-center gap-3 group"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>

            <Link
              href="/#services"
              className="px-8 py-4 rounded-xl bg-[#272422]/80 hover:bg-[#332f2c] text-white border border-[#d4b145]/30 hover:border-[#d4b145] font-semibold text-base transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-2 group"
            >
              <span>Explore Services</span>
              <ChevronRight className="w-4 h-4 text-[#d4b145] transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Real-time Sector Slide Controller Bar */}
          <div className="pt-2">
            <div className="text-[11px] font-semibold uppercase tracking-widest text-[#a39e97] mb-2 flex items-center gap-2">
              <span>Active Division Showcase:</span>
              <span className="text-[#d4b145] font-bold">{heroSlides[activeSlide].title}</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {heroSlides.map((slide, idx) => (
                <button
                  key={slide.title}
                  onClick={() => setActiveSlide(idx)}
                  className={`text-left p-2.5 rounded-lg border text-xs transition-all duration-300 ${
                    activeSlide === idx
                      ? 'bg-[#d4b145]/20 border-[#d4b145] text-white shadow'
                      : 'bg-[#1b1918]/60 border-[#332f2b] text-[#8e8982] hover:border-[#524c45]'
                  }`}
                >
                  <div className="font-semibold truncate">{slide.title}</div>
                  <div className="text-[10px] text-[#edd170] mt-0.5 truncate">{slide.stat}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Hero Bottom Credibility Badges */}
        <div className="pt-10 border-t border-[#2f2b28]/80 mt-12 flex flex-wrap items-center justify-between gap-6 text-xs text-[#a09b94]">
          <div className="flex flex-wrap items-center gap-6 sm:gap-10">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#d4b145]" />
              <div>
                <span className="text-white font-bold block">ISO 9001 &amp; 45001</span>
                <span>Certified Quality &amp; Safety</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-[#d4b145]" />
              <div>
                <span className="text-white font-bold block">Aramco &amp; SABIC</span>
                <span>Vendor Compliant Standards</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5 text-[#d4b145]" />
              <div>
                <span className="text-white font-bold block">15+ Years in KSA</span>
                <span>250+ Turnkey Projects</span>
              </div>
            </div>
          </div>

          {/* Animated Scroll Down Indicator */}
          <a
            href="#stats"
            className="hidden lg:flex items-center gap-2 text-xs text-[#a09b94] hover:text-[#d4b145] transition-colors"
          >
            <span>Scroll Down</span>
            <div className="w-5 h-8 rounded-full border border-[#d4b145]/50 flex items-start justify-center p-1">
              <div className="w-1 h-2 bg-[#d4b145] rounded-full animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
