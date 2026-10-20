'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QuoteModal from '@/components/QuoteModal';
import { PROJECTS_LIST, ProjectItem } from '@/data/websiteData';
import { 
  ChevronRight, 
  MapPin, 
  Building2, 
  Search, 
  X, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModal, setActiveModal] = useState<ProjectItem | null>(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'aluminium', label: 'Aluminium & Glazing' },
    { id: 'steel', label: 'Structural Steel' },
    { id: 'civil', label: 'Civil Construction' },
    { id: 'mechanical', label: 'Mechanical & HVAC' },
    { id: 'piping', label: 'Industrial Piping' },
    { id: 'industrial', label: 'Plant Maintenance' },
  ];

  const filtered = PROJECTS_LIST.filter((proj) => {
    const matchesCategory = selectedCategory === 'all' || proj.category === selectedCategory;
    const matchesSearch = 
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.client.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
            <span className="text-[#d4b145] font-semibold">Kingdom Projects Portfolio</span>
          </nav>

          <div className="max-w-3xl">
            <span className="text-xs font-bold text-[#d4b145] uppercase tracking-wider block mb-2">
              Engineering Excellence in Action
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Kingdom Projects <br />
              <span className="gold-gradient-text">Portfolio &amp; Case Studies.</span>
            </h1>
            <p className="text-sm sm:text-base text-[#cfcac2] mt-4 leading-relaxed">
              Explore delivered landmarks across Eastern Province, Riyadh, Jubail, and Yanbu.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Category Filter */}
      <section className="py-8 bg-[#1e1c1b] border-b border-[#2b2725]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === c.id
                    ? 'bg-[#d4b145] text-black font-bold shadow'
                    : 'bg-[#252220] text-[#a09b95] hover:text-white'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#8e8982] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by project or city..."
              className="w-full pl-9 pr-4 py-2 rounded-lg bg-[#141312] border border-[#38332f] text-xs text-white placeholder-[#78736d] focus:outline-none focus:border-[#d4b145]"
            />
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((proj) => (
            <div
              key={proj.id}
              onClick={() => setActiveModal(proj)}
              className="group bg-[#22201e] rounded-2xl overflow-hidden border border-[#332f2b] hover:border-[#d4b145] card-hover-effect cursor-pointer flex flex-col justify-between"
            >
              <div className="relative h-64 w-full">
                <Image src={proj.image} alt={proj.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#22201e] via-transparent to-black/30" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded bg-[#141312]/90 border border-[#d4b145]/40 text-[#edd170] text-xs font-bold uppercase tracking-wider">
                    {proj.categoryLabel}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-[#d4b145] font-medium mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{proj.location}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#edd170] transition-colors leading-snug">
                    {proj.title}
                  </h3>
                  <div className="text-xs text-[#8f8983] mt-1">Client: {proj.client}</div>
                  <p className="text-xs text-[#a09b95] mt-3 line-clamp-2 leading-relaxed">
                    {proj.overview}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#2e2a27] flex items-center justify-between text-xs text-[#d4b145] font-semibold">
                  <span>View Technical Scope</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Case Study Modal */}
      {activeModal && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveModal(null)}
        >
          <div 
            className="relative w-full max-w-3xl bg-[#1b1918] border border-[#d4b145]/40 rounded-2xl shadow-2xl overflow-hidden my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 sm:h-80 w-full">
              <Image src={activeModal.image} alt={activeModal.title} fill className="object-cover" />
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-[#d4b145] hover:text-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="px-3 py-1 rounded bg-[#d4b145] text-black text-xs font-bold uppercase">
                  {activeModal.categoryLabel}
                </span>
                <h3 className="text-2xl font-extrabold text-white mt-2">{activeModal.title}</h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-[#242220] border border-[#332f2b] text-xs">
                <div>
                  <span className="text-[#88837c] block">Location</span>
                  <span className="text-white font-medium mt-0.5 block">{activeModal.location}</span>
                </div>
                <div>
                  <span className="text-[#88837c] block">Client</span>
                  <span className="text-white font-medium mt-0.5 block">{activeModal.client}</span>
                </div>
                <div>
                  <span className="text-[#88837c] block">Year</span>
                  <span className="text-white font-medium mt-0.5 block">{activeModal.year}</span>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-[#d4b145] uppercase tracking-wider mb-2">Scope of Work</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeModal.scope.map((item) => (
                    <div key={item} className="flex items-start gap-2 text-xs text-[#cfcac2]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#d4b145] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#252220] border-l-4 border-[#d4b145]">
                <span className="text-xs font-bold text-[#d4b145] uppercase tracking-wider block">Key Highlight</span>
                <p className="text-xs sm:text-sm text-white font-medium mt-1">{activeModal.highlight}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </div>
  );
}
