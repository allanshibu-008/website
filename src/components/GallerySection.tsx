'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { GALLERY_ITEMS } from '@/data/websiteData';
import { X, Maximize2, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeLightboxImage, setActiveLightboxImage] = useState<typeof GALLERY_ITEMS[0] | null>(null);

  const categories = [
    'All',
    'Aluminium Fabrication',
    'Glazing & Facades',
    'Steel Structures',
    'Civil Construction',
    'HVAC Engineering',
    'Piping Works'
  ];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-24 sm:py-32 relative bg-[#141312] border-t border-[#2a2624]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#d4b145]/15 border border-[#d4b145]/30 text-[#d4b145] text-xs font-bold uppercase tracking-wider mb-4">
              Factory &amp; Site Media
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Engineering in Action: <br />
              <span className="gold-gradient-text">Visual Media Gallery.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#aba59c] mt-4 leading-relaxed">
              Witness our master fabricators, European 5-axis CNC profile machining centers, structural welding yards, and on-site crane installations.
            </p>
          </div>

          <Link
            href="/gallery"
            className="px-6 py-3 rounded-lg bg-[#272422] hover:bg-[#332f2c] border border-[#d4b145]/40 text-white text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 self-start md:self-end"
          >
            <span>Full High-Res Archive</span>
            <ArrowRight className="w-4 h-4 text-[#d4b145]" />
          </Link>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center gap-2 mb-10 border-b border-[#282523] pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-[#d4b145] text-black font-bold shadow'
                  : 'bg-[#201e1c] text-[#a09b95] hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-Style Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.title}
              onClick={() => setActiveLightboxImage(item)}
              className="group relative rounded-2xl overflow-hidden border border-[#2e2a27] hover:border-[#d4b145] cursor-pointer h-72 sm:h-80 card-hover-effect"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141312] via-[#141312]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Top Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-2.5 py-1 rounded bg-[#1b1918]/90 backdrop-blur-md border border-[#d4b145]/40 text-[#edd170] text-[11px] font-bold uppercase tracking-wider">
                  {item.category}
                </span>
              </div>

              {/* Hover Zoom Icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#1b1918]/80 backdrop-blur-md border border-[#3b3632] flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4 text-[#d4b145]" />
              </div>

              {/* Bottom Caption */}
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

        {/* Lightbox Modal */}
        {activeLightboxImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
            onClick={() => setActiveLightboxImage(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-[#1c1a18] rounded-2xl overflow-hidden border border-[#d4b145]/50 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-[420px] sm:h-[520px] w-full">
                <Image
                  src={activeLightboxImage.image}
                  alt={activeLightboxImage.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 896px"
                  className="object-cover"
                />
                <button
                  onClick={() => setActiveLightboxImage(null)}
                  className="absolute top-4 right-4 p-2.5 rounded-full bg-black/70 text-white hover:bg-[#d4b145] hover:text-black transition-colors"
                  aria-label="Close lightbox"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 bg-[#1b1918] border-t border-[#2d2926] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-[#d4b145] uppercase tracking-wider block mb-1">
                    {activeLightboxImage.category}
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {activeLightboxImage.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#aba59c] mt-1">
                    {activeLightboxImage.desc}
                  </p>
                </div>
                <button
                  onClick={() => setActiveLightboxImage(null)}
                  className="px-5 py-2 rounded-lg bg-[#272422] text-white text-xs font-semibold hover:bg-[#35312d]"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
