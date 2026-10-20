'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PROJECTS_LIST, ProjectItem } from '@/data/websiteData';
import { 
  ArrowRight, 
  MapPin, 
  Building2, 
  Calendar, 
  CheckCircle2, 
  X, 
  Sparkles,
  ExternalLink 
} from 'lucide-react';

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeProjectModal, setActiveProjectModal] = useState<ProjectItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'aluminium', label: 'Aluminium & Glazing' },
    { id: 'steel', label: 'Steel Structures' },
    { id: 'civil', label: 'Civil Construction' },
    { id: 'mechanical', label: 'HVAC & Mechanical' },
    { id: 'piping', label: 'Industrial Piping' },
    { id: 'industrial', label: 'Plant Maintenance' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS_LIST
    : PROJECTS_LIST.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 sm:py-32 relative bg-[#141312] border-t border-[#2a2624]">
      {/* Background Subtle Blueprint Grid */}
      <div className="absolute inset-0 blueprint-grid opacity-25 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#d4b145]/15 border border-[#d4b145]/30 text-[#d4b145] text-xs font-bold uppercase tracking-wider mb-4">
              Proven Track Record
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Featured Kingdom <br />
              <span className="gold-gradient-text">Engineering Projects.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#aba59c] mt-4 leading-relaxed">
              Explore our portfolio of completed and ongoing industrial, commercial, and facade engineering projects delivered across Riyadh, Al Khobar, Dammam, Jubail, and Yanbu.
            </p>
          </div>

          <Link
            href="/projects"
            className="px-6 py-3 rounded-lg bg-[#272422] hover:bg-[#332f2c] border border-[#d4b145]/40 hover:border-[#d4b145] text-white text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 group whitespace-nowrap self-start md:self-end"
          >
            <span>View Full Portfolio Archive</span>
            <ArrowRight className="w-4 h-4 text-[#d4b145] transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-[#292624] pb-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#d4b145] text-[#1b1918] font-bold shadow-md'
                  : 'bg-[#201e1c] text-[#a09b94] hover:text-white hover:bg-[#2a2725]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid with Dynamic Hover Reveals */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => setActiveProjectModal(proj)}
              className="group relative bg-[#1c1a18] rounded-2xl overflow-hidden border border-[#2e2a27] hover:border-[#d4b145] card-hover-effect cursor-pointer flex flex-col justify-between"
            >
              {/* Image Preview */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <Image
                  src={proj.image}
                  alt={proj.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1a18] via-[#1c1a18]/40 to-transparent" />

                {/* Top Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-md bg-[#141312]/90 backdrop-blur-md border border-[#d4b145]/40 text-[#edd170] text-xs font-bold uppercase tracking-wider">
                    {proj.categoryLabel}
                  </span>
                </div>

                <div className="absolute top-4 right-4">
                  <span className="px-2.5 py-1 rounded-md bg-[#141312]/90 backdrop-blur-md border border-[#3a3532] text-[#8e8982] text-xs font-mono">
                    {proj.year}
                  </span>
                </div>

                {/* Location overlay */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center gap-1.5 text-xs text-[#d4b145] font-medium">
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{proj.location}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#edd170] transition-colors leading-snug">
                    {proj.title}
                  </h3>
                  <div className="text-xs text-[#8f8983] mt-1 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-[#d4b145]" />
                    <span className="truncate">Client: {proj.client}</span>
                  </div>
                  <p className="text-xs text-[#a09b95] mt-3 line-clamp-2 leading-relaxed">
                    {proj.overview}
                  </p>
                </div>

                {/* Hover Reveal Action */}
                <div className="pt-3 border-t border-[#292624] flex items-center justify-between text-xs text-[#d4b145] font-semibold">
                  <span>View Project Case Study</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Case Study Lightbox Modal */}
        {activeProjectModal && (
          <div 
            className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
            onClick={() => setActiveProjectModal(null)}
          >
            <div 
              className="relative w-full max-w-3xl bg-[#1b1918] border border-[#d4b145]/40 rounded-2xl shadow-2xl overflow-hidden my-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 sm:h-80 w-full">
                <Image
                  src={activeProjectModal.image}
                  alt={activeProjectModal.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1b1918] via-transparent to-black/40" />

                <button
                  onClick={() => setActiveProjectModal(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-[#d4b145] hover:text-black transition-colors"
                  aria-label="Close case study modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-6 left-6 right-6">
                  <span className="px-3 py-1 rounded bg-[#d4b145] text-black text-xs font-bold uppercase tracking-wider">
                    {activeProjectModal.categoryLabel}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                    {activeProjectModal.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-[#242220] border border-[#332f2b] text-xs">
                  <div>
                    <span className="text-[#88837c] uppercase tracking-wider block">Location</span>
                    <span className="text-white font-medium mt-0.5 block">{activeProjectModal.location}</span>
                  </div>
                  <div>
                    <span className="text-[#88837c] uppercase tracking-wider block">Client / Developer</span>
                    <span className="text-white font-medium mt-0.5 block">{activeProjectModal.client}</span>
                  </div>
                  <div>
                    <span className="text-[#88837c] uppercase tracking-wider block">Handover Year</span>
                    <span className="text-white font-medium mt-0.5 block">{activeProjectModal.year}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-[#d4b145] uppercase tracking-wider mb-2">
                    Project Overview
                  </h4>
                  <p className="text-xs sm:text-sm text-[#b8b2aa] leading-relaxed">
                    {activeProjectModal.overview}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-[#d4b145] uppercase tracking-wider mb-2">
                    Scope of Work &amp; Engineering Deliverables
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeProjectModal.scope.map((item) => (
                      <div key={item} className="flex items-start gap-2 text-xs text-[#cfcac2]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#d4b145] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#252220] border-l-4 border-[#d4b145]">
                  <span className="text-xs font-bold text-[#d4b145] uppercase tracking-wider block">
                    Engineering Achievement / Benchmark:
                  </span>
                  <p className="text-xs sm:text-sm text-white font-medium mt-1">
                    {activeProjectModal.highlight}
                  </p>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    onClick={() => setActiveProjectModal(null)}
                    className="px-6 py-2.5 rounded-lg bg-[#2b2724] hover:bg-[#38332f] text-white text-xs font-semibold"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
