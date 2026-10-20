'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QuoteModal from '@/components/QuoteModal';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Award, 
  ShieldCheck, 
  Users, 
  ChevronRight 
} from 'lucide-react';

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState('Senior Facade Design Engineer');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const jobOpenings = [
    {
      title: "Senior Facade Design Engineer",
      division: "Aluminium & Glazing",
      location: "Al Khobar, Eastern Province",
      type: "Full-Time",
      desc: "Lead 3D CAD and BIM modeling for unitized curtain wall systems, thermal calculations, and consultant shop drawing submissions.",
      experience: "5+ Years Gulf / Saudi Experience (Schüco/Reynaers familiarity preferred)"
    },
    {
      title: "Civil Project Engineer / Manager",
      division: "Civil Works & Infrastructure",
      location: "Riyadh, KSA",
      type: "Full-Time",
      desc: "Supervise heavy concrete casting, foundation excavation, site planning, and subcontractor coordination for commercial complexes.",
      experience: "7+ Years in Saudi Arabia (Aramco / SBC familiarity a plus)"
    },
    {
      title: "Structural Steel QA/QC & NDT Inspector",
      division: "Steel Fabrication Yard",
      location: "Dammam 2nd Industrial City",
      type: "Full-Time",
      desc: "Conduct non-destructive testing (MPI, DPT, UT), inspect full-penetration welding seams, and manage certified traceability logs.",
      experience: "ASNT Level II / CSWIP 3.1 Certification required"
    },
    {
      title: "European 5-Axis CNC Profile Operator",
      division: "Aluminium Fabrication Hub",
      location: "Al Khobar Plant",
      type: "Full-Time",
      desc: "Operate Emmegi / FOM 5-axis CNC profile machining centers, program G-code cuts, and maintain ±0.2mm precision tolerances.",
      experience: "3+ Years CNC Aluminium extrusion milling"
    },
    {
      title: "6G Certified Master Pipe & Structural Welder",
      division: "Industrial Piping & Steel",
      location: "Jubail / Eastern Province",
      type: "Full-Time",
      desc: "Perform high-spec TIG and SMAW welding on SS316L, carbon steel, and heavy structural beams under radiographic testing standard.",
      experience: "Valid 6G ASME Sec. IX Welder Qualification Card"
    },
    {
      title: "HVAC Testing, Adjusting & Balancing (TAB) Engineer",
      division: "Mechanical & HVAC",
      location: "Al Khobar & Riyadh",
      type: "Full-Time",
      desc: "Execute airflow balancing, hydronic chiller commissioning, duct pressure testing, and sound level verification for industrial facilities.",
      experience: "AABC / NEBB certification or equivalent experience"
    }
  ];

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
            <span className="text-[#d4b145] font-semibold">Careers in Saudi Arabia</span>
          </nav>

          <div className="max-w-3xl">
            <span className="text-xs font-bold text-[#d4b145] uppercase tracking-wider block mb-2">
              Join Our Engineering Talent
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Build the Future of KSA with <br />
              <span className="gold-gradient-text">Hashem Contracting.</span>
            </h1>
            <p className="text-sm sm:text-base text-[#cfcac2] mt-4 leading-relaxed">
              We offer exceptional opportunities for certified engineers, CNC craftsmen, project managers, and technicians to advance their careers across landmark Saudi projects.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us Strip */}
      <section className="py-16 bg-[#1e1c1b] border-b border-[#2b2725]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-5 rounded-xl bg-[#242220] border border-[#332f2c]">
            <Award className="w-6 h-6 text-[#d4b145] mb-3" />
            <h3 className="text-sm font-bold text-white">Tier-1 Engineering Projects</h3>
            <p className="text-xs text-[#9e9992] mt-1">Work on high-profile corporate towers, petrochemical plants, and infrastructure.</p>
          </div>
          <div className="p-5 rounded-xl bg-[#242220] border border-[#332f2c]">
            <ShieldCheck className="w-6 h-6 text-[#d4b145] mb-3" />
            <h3 className="text-sm font-bold text-white">Zero-Accident Safety Culture</h3>
            <p className="text-xs text-[#9e9992] mt-1">ISO 45001 certified environment prioritizing employee well-being above all.</p>
          </div>
          <div className="p-5 rounded-xl bg-[#242220] border border-[#332f2c]">
            <Users className="w-6 h-6 text-[#d4b145] mb-3" />
            <h3 className="text-sm font-bold text-white">Saudization &amp; Development</h3>
            <p className="text-xs text-[#9e9992] mt-1">Structured career roadmaps, technical certifications, and Vision 2030 leadership tracks.</p>
          </div>
          <div className="p-5 rounded-xl bg-[#242220] border border-[#332f2c]">
            <Briefcase className="w-6 h-6 text-[#d4b145] mb-3" />
            <h3 className="text-sm font-bold text-white">Competitive Compensation</h3>
            <p className="text-xs text-[#9e9992] mt-1">Attractive Gulf salary packages, health insurance, and performance bonuses.</p>
          </div>
        </div>
      </section>

      {/* Current Job Openings */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#d4b145] uppercase tracking-wider block mb-1">
            Current Vacancies
          </span>
          <h2 className="text-3xl font-extrabold text-white">
            Open Opportunities Across Saudi Arabia
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {jobOpenings.map((job) => (
            <div
              key={job.title}
              className="p-6 rounded-2xl bg-[#22201e] border border-[#332f2b] hover:border-[#d4b145]/60 card-hover-effect flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#d4b145] font-semibold mb-2">
                  <span>{job.division}</span>
                  <span className="px-2 py-0.5 rounded bg-[#2b2724] text-[#a09b95]">{job.type}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{job.title}</h3>
                <div className="flex items-center gap-1.5 text-xs text-[#8e8982] mb-3">
                  <MapPin className="w-3.5 h-3.5 text-[#d4b145]" />
                  <span>{job.location}</span>
                </div>
                <p className="text-xs text-[#b0aba3] leading-relaxed mb-4">{job.desc}</p>
                <div className="text-[11px] text-[#edd170] bg-[#181615] p-2.5 rounded-lg border border-[#2d2926]">
                  <strong>Requirement:</strong> {job.experience}
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-[#2d2926]">
                <button
                  onClick={() => {
                    setSelectedJob(job.title);
                    const formElement = document.getElementById('application-form');
                    formElement?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full py-2.5 rounded-lg bg-[#2b2724] hover:bg-[#d4b145] hover:text-black text-[#d4b145] text-xs font-bold transition-all text-center"
                >
                  Apply for this Position
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Application Form */}
        <div id="application-form" className="max-w-3xl mx-auto p-8 sm:p-10 rounded-2xl bg-[#22201e] border border-[#d4b145]/30 shadow-2xl">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-[#d4b145] uppercase tracking-wider block mb-1">
              Direct Application Portal
            </span>
            <h3 className="text-2xl font-bold text-white">
              Submit Your Engineering Application
            </h3>
            <p className="text-xs text-[#9e9992] mt-1">Selected Position: <strong className="text-[#d4b145]">{selectedJob}</strong></p>
          </div>

          {formSubmitted ? (
            <div className="p-6 rounded-xl bg-[#d4b145]/15 border border-[#d4b145] text-center text-white text-sm">
              <CheckCircle2 className="w-8 h-8 text-[#d4b145] mx-auto mb-2" />
              <span>Thank you! Your job application has been securely transmitted to Hashem HR Recruitment. Qualified candidates will be contacted for an interview.</span>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-[#a09b95] mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Eng. Fahad Al-Zahrani"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#181615] border border-[#38332f] text-xs text-white focus:outline-none focus:border-[#d4b145]"
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#a09b95] mb-1">Position of Interest *</label>
                  <input
                    type="text"
                    required
                    value={selectedJob}
                    onChange={(e) => setSelectedJob(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#181615] border border-[#38332f] text-xs text-white focus:outline-none focus:border-[#d4b145]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-[#a09b95] mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="yourname@gmail.com"
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
                <label className="block text-xs text-[#a09b95] mb-1">Years of Experience in Saudi Arabia / Gulf *</label>
                <select className="w-full px-3.5 py-2.5 rounded-lg bg-[#181615] border border-[#38332f] text-xs text-white focus:outline-none focus:border-[#d4b145]">
                  <option value="1-3">1 - 3 Years</option>
                  <option value="4-7">4 - 7 Years</option>
                  <option value="8-12">8 - 12 Years</option>
                  <option value="12+">12+ Years (Senior / Leadership)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-[#a09b95] mb-1">Professional Summary &amp; Key Projects Handled</label>
                <textarea
                  rows={3}
                  placeholder="Summarize your engineering background, certifications (Aramco, ASNT, SBC), and past projects..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#181615] border border-[#38332f] text-xs text-white focus:outline-none focus:border-[#d4b145]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-lg bg-[#d4b145] hover:bg-[#edd170] text-black font-bold text-xs uppercase tracking-wider transition-colors shadow-lg"
              >
                Submit Application to Hashem HR
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </div>
  );
}
