'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QuoteModal from '@/components/QuoteModal';
import { ServiceItem, PROJECTS_LIST } from '@/data/websiteData';
import { 
  Building2, 
  Layers, 
  Hammer, 
  Wind, 
  Cpu, 
  Wrench, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  ChevronRight, 
  ChevronDown 
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Layers,
  Building2,
  Hammer,
  Wind,
  Cpu,
  Wrench,
};

interface ServiceDetailClientProps {
  service: ServiceItem;
}

export default function ServiceDetailClient({ service }: ServiceDetailClientProps) {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const Icon = iconMap[service.iconName] || Building2;
  const relatedProjects = PROJECTS_LIST.filter(
    (p) => p.category === service.id.split('-')[0] || service.slug.includes(p.category)
  );

  return (
    <div className="min-h-screen bg-[#1b1918] text-[#f7f7f7] selection:bg-[#d4b145] selection:text-black">
      {/* Navigation */}
      <Navbar onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />

      {/* Hero Banner */}
      <section className="relative pt-36 pb-24 sm:pb-32 bg-[#141312] border-b border-[#2a2624] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={service.featuredImage}
            alt={service.title}
            fill
            className="object-cover opacity-25 filter blur-[1px]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141312] via-[#141312]/80 to-[#141312]/90" />
        </div>

        <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs text-[#a09b95] mb-6">
            <Link href="/" className="hover:text-[#d4b145]">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#5e5852]" />
            <Link href="/#services" className="hover:text-[#d4b145]">Engineering Divisions</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#5e5852]" />
            <span className="text-[#d4b145] font-semibold">{service.title}</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#d4b145]/15 border border-[#d4b145]/40 text-[#d4b145] text-xs font-bold uppercase tracking-wider mb-4">
              <Icon className="w-3.5 h-3.5" />
              Specialized Engineering Division
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              {service.title}
            </h1>

            <p className="text-base sm:text-xl text-[#d4b145] font-medium mt-3">
              {service.tagline}
            </p>

            <p className="text-sm sm:text-base text-[#cfcac2] mt-4 leading-relaxed max-w-2xl">
              {service.shortDesc}
            </p>

            <div className="pt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="px-8 py-3.5 rounded-xl bg-[#d4b145] hover:bg-[#edd170] text-[#1b1918] font-bold text-sm tracking-wide transition-all shadow-xl flex items-center gap-2"
              >
                <span>Request Division Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#specifications"
                className="px-6 py-3.5 rounded-xl bg-[#252220] hover:bg-[#312d2a] text-white border border-[#3b3632] text-sm font-semibold transition-colors"
              >
                Technical Specifications
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Division Key Metrics Strip */}
      <section className="bg-[#1e1c1b] border-b border-[#2d2926] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
            {service.stats.map((st) => (
              <div key={st.label} className="border-r last:border-r-0 border-[#332f2c] pr-4">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#d4b145] block">
                  {st.value}
                </span>
                <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider mt-1 block">
                  {st.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview & In-Depth Capabilities */}
      <section id="specifications" className="py-20 sm:py-28 relative bg-[#1b1918]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Full Editorial & Capabilities List */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="text-xs font-bold text-[#d4b145] uppercase tracking-wider block mb-2">
                  Division Overview
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                  Engineered with Absolute Precision &amp; International Standards.
                </h2>
                <p className="text-sm sm:text-base text-[#b8b2aa] mt-4 leading-relaxed">
                  {service.fullDesc}
                </p>
              </div>

              {/* Capabilities Grid */}
              <div>
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#d4b145]"></span>
                  Technical Capabilities &amp; System Solutions:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.capabilities.map((cap) => (
                    <div
                      key={cap}
                      className="p-3.5 rounded-xl bg-[#22201e] border border-[#2e2a27] flex items-start gap-3 text-xs sm:text-sm text-[#ded9d2]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#d4b145] shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quality & Code Standards */}
              <div className="p-6 rounded-2xl bg-[#22201e] border border-[#d4b145]/30">
                <h4 className="text-sm font-bold text-[#d4b145] uppercase tracking-wider mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  Regulatory &amp; Code Compliance
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.standards.map((std) => (
                    <span
                      key={std}
                      className="px-3 py-1.5 rounded-lg bg-[#181615] border border-[#3b3632] text-xs font-semibold text-white"
                    >
                      {std}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Factory Machinery & Equipment List */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-7 rounded-2xl bg-[#22201e] border border-[#332f2c] shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-[#2c2825] text-[#d4b145]">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Fabrication Machinery &amp; Equipment</h3>
                    <span className="text-xs text-[#8e8982]">12,000 m² Manufacturing Facility</span>
                  </div>
                </div>

                <div className="space-y-3">
                  {service.equipment.map((eq, i) => (
                    <div key={eq} className="p-3 rounded-lg bg-[#181615] border border-[#2c2926] text-xs text-[#cfcac2]">
                      <span className="font-mono text-[#d4b145] font-bold mr-2">0{i + 1}.</span>
                      {eq}
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-[#2e2a27]">
                  <button
                    onClick={() => setIsQuoteModalOpen(true)}
                    className="w-full py-3 rounded-lg bg-[#d4b145] hover:bg-[#edd170] text-black font-bold text-xs tracking-wider uppercase transition-colors"
                  >
                    Request Equipment Schedule &amp; Specs
                  </button>
                </div>
              </div>

              {/* Side Assistance Box */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#252220] to-[#1c1a18] border border-[#d4b145]/40 text-center">
                <span className="text-xs text-[#d4b145] font-bold uppercase tracking-wider block mb-1">
                  Technical Consultation
                </span>
                <div className="text-sm font-bold text-white">
                  Need custom shop drawings or BOQ review?
                </div>
                <div className="text-xs text-[#a09b95] mt-1 mb-4">
                  Our chief division engineer is available to review your IFC drawings.
                </div>
                <a
                  href="tel:+966138594440"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#181615] border border-[#3b3632] hover:border-[#d4b145] text-white text-xs font-semibold transition-colors"
                >
                  Direct Call: +966 13 859 4440
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Division Image Gallery */}
      <section className="py-20 bg-[#141312] border-t border-[#2a2624]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#d4b145] uppercase tracking-wider block mb-1">
              Field &amp; Factory Media
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              {service.title} in Action
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {service.galleryImages.map((imgUrl, idx) => (
              <div
                key={idx}
                className="relative h-64 sm:h-72 rounded-xl overflow-hidden border border-[#2e2a27] hover:border-[#d4b145] card-hover-effect group"
              >
                <Image
                  src={imgUrl}
                  alt={`${service.title} photo ${idx + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-xs font-semibold text-white bg-black/60 px-2.5 py-1 rounded border border-[#3b3632]">
                  Inspection Grade
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-20 bg-[#1b1918] border-t border-[#2a2624]">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="flex items-center justify-between mb-10">
              <div>
                <span className="text-xs font-bold text-[#d4b145] uppercase tracking-wider block mb-1">
                  Proven Deliverables
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Division Featured Projects
                </h2>
              </div>
              <Link href="/projects" className="text-xs text-[#d4b145] font-bold hover:underline flex items-center gap-1">
                <span>View All Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map((p) => (
                <div key={p.id} className="rounded-xl overflow-hidden bg-[#22201e] border border-[#332f2b]">
                  <div className="relative h-48 w-full">
                    <Image src={p.image} alt={p.title} fill className="object-cover" />
                  </div>
                  <div className="p-5">
                    <span className="text-[10px] font-bold text-[#d4b145] uppercase block mb-1">
                      {p.location}
                    </span>
                    <h3 className="text-sm font-bold text-white line-clamp-1">{p.title}</h3>
                    <p className="text-xs text-[#9e9992] mt-2 line-clamp-2">{p.overview}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Division FAQs */}
      <section className="py-20 bg-[#141312] border-t border-[#2a2624]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Division FAQs &amp; Technical Notes
            </h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={faq.question}
                  className="rounded-xl bg-[#1c1a18] border border-[#2e2a27] overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between text-sm font-bold text-white"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-[#d4b145] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#b8b3ab] leading-relaxed border-t border-[#282523]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dedicated Division Form */}
      <section className="py-20 bg-[#1b1918] border-t border-[#2a2624]">
        <div className="max-w-3xl mx-auto px-4 sm:px-8">
          <div className="p-8 sm:p-10 rounded-2xl bg-[#22201e] border border-[#d4b145]/30 shadow-2xl">
            <div className="text-center mb-8">
              <span className="text-xs font-bold text-[#d4b145] uppercase tracking-wider block mb-1">
                Direct Division RFP
              </span>
              <h2 className="text-2xl font-bold text-white">
                Request a Dedicated Quote for {service.title}
              </h2>
            </div>

            {formSubmitted ? (
              <div className="p-6 rounded-xl bg-[#d4b145]/15 border border-[#d4b145] text-center text-white text-sm">
                <CheckCircle2 className="w-8 h-8 text-[#d4b145] mx-auto mb-2" />
                <span>Thank you. Your request for {service.title} has been logged. Our lead estimator will contact you within 24 hours.</span>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-[#a09b95] mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Eng. Tariq Al-Ghamdi"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#181615] border border-[#38332f] text-xs text-white focus:outline-none focus:border-[#d4b145]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-[#a09b95] mb-1">Company / Contractor *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Saudi Real Estate Partners"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#181615] border border-[#38332f] text-xs text-white focus:outline-none focus:border-[#d4b145]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-[#a09b95] mb-1">Corporate Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#181615] border border-[#38332f] text-xs text-white focus:outline-none focus:border-[#d4b145]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-[#a09b95] mb-1">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+966 5X XXX XXXX"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#181615] border border-[#38332f] text-xs text-white focus:outline-none focus:border-[#d4b145]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-[#a09b95] mb-1">Project Details, Scope or BOQ</label>
                  <textarea
                    rows={3}
                    placeholder={`Specify requirements for ${service.title}...`}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#181615] border border-[#38332f] text-xs text-white focus:outline-none focus:border-[#d4b145]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-lg bg-[#d4b145] hover:bg-[#edd170] text-black font-bold text-xs uppercase tracking-wider transition-colors shadow-lg"
                >
                  Submit {service.title} Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        preselectedService={service.id}
      />
    </div>
  );
}
