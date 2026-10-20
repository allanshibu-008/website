'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QuoteModal from '@/components/QuoteModal';
import { GALLERY_ITEMS } from '@/data/websiteData';
import { ChevronRight, Maximize2, X } from 'lucide-react';

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeItem, setActiveItem] = useState<typeof GALLERY_ITEMS[0] | null>(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const categories = [
    'All',
    'Aluminium Fabrication',
    'Glazing & Facades',
    'Steel Structures',
    'Civil Construction',
    'HVAC Engineering',
    'Piping Works'
  ];

  const filtered = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#1b1918] text-[#f7f7f7] selection:bg-[#d4b145] selection:text-black">
      <Navbar onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />

      {/* Header */}
      <section className="relative pt-36 pb-20 bg-[#141312] border-b border-[#2a2624] overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs text-[#a09b95] mb-6">
            <Link href="/" className="hover:text-[#d4b145]">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#5e5852]" />
            <span className="text-[#d4b145] font-semibold">Media Gallery</span>
          </nav>

          <div className="max-w-3xl">
            <span className="text-xs font-bold text-[#d4b145] uppercase tracking-wider block mb-2">
              Visual Documentation
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Factory &amp; Site <br />
              <span className="gold-gradient-text">Media Showcase.</span>
            </h1>
            <p className="text-sm sm:text-base text-[#cfcac2] mt-4 leading-relaxed">
              Explore our 12,000 m² high-tech fabrication hub, CNC machinery, welding bays, and on-site crane erections.
            </p>
          </div>
        </div>
      </section>

      {/* Category filter */}
      <section className="py-6 bg-[#1e1c1b] border-b border-[#2b2725]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setSelectedCategory(c)}
              className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                selectedCategory === c
                  ? 'bg-[#d4b145] text-black font-bold shadow'
                  : 'bg-[#252220] text-[#a09b95] hover:text-white'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.title}
              onClick={() => setActiveItem(item)}
              className="group relative rounded-2xl overflow-hidden border border-[#2e2a27] hover:border-[#d4b145] cursor-pointer h-72 sm:h-80 card-hover-effect"
            >
              <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141312] via-[#141312]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute top-4 left-4">
                <span className="px-2.5 py-1 rounded bg-[#1b1918]/90 border border-[#d4b145]/40 text-[#edd170] text-[11px] font-bold uppercase tracking-wider">
                  {item.category}
                </span>
              </div>

              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#1b1918]/80 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4 text-[#d4b145]" />
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-base font-bold text-white group-hover:text-[#edd170] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-[#a09b95] mt-1 line-clamp-2">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#1c1a18] rounded-2xl overflow-hidden border border-[#d4b145]/50 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[420px] sm:h-[500px] w-full">
              <Image src={activeItem.image} alt={activeItem.title} fill className="object-cover" />
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/70 text-white hover:bg-[#d4b145] hover:text-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 bg-[#1b1918] border-t border-[#2d2926]">
              <span className="text-xs font-bold text-[#d4b145] uppercase tracking-wider block mb-1">
                {activeItem.category}
              </span>
              <h3 className="text-xl font-bold text-white">{activeItem.title}</h3>
              <p className="text-xs text-[#a09b95] mt-1">{activeItem.desc}</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </div>
  );
}
