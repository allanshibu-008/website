'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight, 
  Building2, 
  Layers, 
  Hammer, 
  Wind, 
  Cpu, 
  Wrench,
  MessageSquare
} from 'lucide-react';

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export default function Navbar({ onOpenQuoteModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const serviceLinks = [
    { name: 'Aluminium Fabrication & Glazing', href: '/services/aluminium-fabrication', icon: Layers, featured: true },
    { name: 'Civil Construction & Infrastructure', href: '/services/civil-works', icon: Building2 },
    { name: 'Structural Steel Fabrication', href: '/services/steel-fabrication', icon: Hammer },
    { name: 'Mechanical Engineering & HVAC', href: '/services/mechanical-hvac', icon: Wind },
    { name: 'Industrial Piping Systems', href: '/services/piping-works', icon: Cpu },
    { name: 'Plant Maintenance & Turnaround', href: '/services/industrial-maintenance', icon: Wrench },
  ];

  return (
    <>
      {/* Top Thin Contact Bar */}
      <header className="relative z-50">
        <div className="bg-[#141312] border-b border-[#2d2926] text-xs text-[#a09c97] py-2 px-4 sm:px-8 transition-all">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
            {/* Left Contact Items */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6">
              <a 
                href="tel:+966138594440" 
                className="flex items-center gap-1.5 hover:text-[#d4b145] transition-colors"
                title="Call Hashem Contracting KSA"
              >
                <Phone className="w-3.5 h-3.5 text-[#d4b145]" />
                <span className="font-medium">+966 13 859 4440</span>
              </a>
              <a 
                href="mailto:info@hashemcontracting.com" 
                className="flex items-center gap-1.5 hover:text-[#d4b145] transition-colors"
                title="Email Hashem Contracting"
              >
                <Mail className="w-3.5 h-3.5 text-[#d4b145]" />
                <span>info@hashemcontracting.com</span>
              </a>
              <div className="hidden lg:flex items-center gap-1.5 text-[#858079]">
                <MapPin className="w-3.5 h-3.5 text-[#d4b145]" />
                <span>Eastern Province & Riyadh, Kingdom of Saudi Arabia</span>
              </div>
            </div>

            {/* Right Social & Quick Actions */}
            <div className="flex items-center gap-4">
              <span className="hidden sm:inline-block text-[#66625d] text-[11px] tracking-wider uppercase">
                Aligned with Saudi Vision 2030
              </span>
              <div className="h-3 w-[1px] bg-[#332f2c] hidden sm:block"></div>
              <div className="flex items-center gap-3">
                <a 
                  href="https://wa.me/966501234567" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-1 text-[#d4b145] hover:text-[#fceda2] transition-colors font-medium"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">WhatsApp</span>
                </a>
                <a href="#contact" className="hover:text-[#d4b145] transition-colors">LinkedIn</a>
                <a href="#contact" className="hover:text-[#d4b145] transition-colors">Instagram</a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Sticky Navbar */}
        <nav 
          className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
            isScrolled 
              ? 'bg-[#1b1918]/95 backdrop-blur-md shadow-2xl border-b border-[#d4b145]/20 py-3.5' 
              : 'bg-transparent py-5'
          }`}
          style={{ top: isScrolled ? 0 : 'auto' }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              {/* Custom Architectural SVG Logo Emblem */}
              <div className="relative w-11 h-11 rounded-lg bg-gradient-to-br from-[#262422] to-[#161514] border border-[#d4b145]/40 flex items-center justify-center shadow-lg group-hover:border-[#d4b145] transition-all duration-300">
                <svg viewBox="0 0 100 100" className="w-7 h-7" fill="none">
                  {/* Left Column */}
                  <rect x="20" y="16" width="14" height="68" rx="2" fill="#d4b145" />
                  {/* Right Column */}
                  <rect x="66" y="16" width="14" height="68" rx="2" fill="#d4b145" />
                  {/* Center Architectural Beam with Angle Accent */}
                  <path d="M34 44H66V56H34Z" fill="#ffffff" />
                  <path d="M34 40L66 58" stroke="#d4b145" strokeWidth="2.5" />
                  {/* Apex indicator */}
                  <polygon points="50,16 57,26 43,26" fill="#d4b145" />
                </svg>
                <div className="absolute inset-0 rounded-lg bg-[#d4b145]/5 group-hover:bg-[#d4b145]/15 transition-colors"></div>
              </div>

              <div className="flex flex-col">
                <div className="flex items-baseline gap-1.5">
                  <span className="font-bold text-xl sm:text-2xl tracking-wider text-white font-sans group-hover:text-[#d4b145] transition-colors">
                    HASHEM
                  </span>
                  <span className="text-[10px] font-semibold tracking-widest text-[#d4b145] uppercase px-1.5 py-0.5 rounded bg-[#d4b145]/10 border border-[#d4b145]/25">
                    KSA
                  </span>
                </div>
                <span className="text-[10px] tracking-widest text-[#a8a39d] uppercase -mt-0.5 font-medium">
                  General Contracting Est.
                </span>
              </div>
            </Link>

            {/* Desktop Center Navigation Links */}
            <div className="hidden xl:flex items-center gap-7 text-sm font-medium">
              <Link 
                href="/" 
                className={`transition-colors relative py-1 hover:text-[#d4b145] ${
                  pathname === '/' ? 'text-[#d4b145] font-semibold' : 'text-[#e5e5e5]'
                }`}
              >
                Home
                {pathname === '/' && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#d4b145] rounded-full"></span>
                )}
              </Link>

              <Link 
                href="/about" 
                className={`transition-colors relative py-1 hover:text-[#d4b145] ${
                  pathname === '/about' ? 'text-[#d4b145] font-semibold' : 'text-[#e5e5e5]'
                }`}
              >
                About
                {pathname === '/about' && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#d4b145] rounded-full"></span>
                )}
              </Link>

              {/* Services Mega Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setIsServicesDropdownOpen(true)}
                onMouseLeave={() => setIsServicesDropdownOpen(false)}
              >
                <button 
                  className={`flex items-center gap-1.5 py-1 transition-colors hover:text-[#d4b145] ${
                    pathname.startsWith('/services') ? 'text-[#d4b145] font-semibold' : 'text-[#e5e5e5]'
                  }`}
                  aria-expanded={isServicesDropdownOpen}
                >
                  <span>Services</span>
                  <ChevronDown className="w-3.5 h-3.5 text-[#d4b145] transition-transform duration-200 group-hover:rotate-180" />
                </button>

                {/* Dropdown Menu */}
                <div 
                  className={`absolute top-full left-1/2 -translate-x-1/2 w-80 pt-3 transition-all duration-200 ${
                    isServicesDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                  }`}
                >
                  <div className="bg-[#1b1918]/95 backdrop-blur-xl border border-[#d4b145]/25 rounded-xl p-3 shadow-2xl">
                    <div className="text-[11px] font-semibold tracking-wider text-[#d4b145] uppercase px-3 py-1.5 border-b border-[#2d2926] mb-1">
                      Engineering Divisions
                    </div>
                    {serviceLinks.map((service) => {
                      const Icon = service.icon;
                      return (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-[#252220] transition-colors group/item"
                        >
                          <div className={`p-2 rounded-md ${service.featured ? 'bg-[#d4b145]/20 text-[#d4b145]' : 'bg-[#292624] text-[#b3ada5] group-hover/item:text-[#d4b145]'}`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-medium text-white group-hover/item:text-[#d4b145] transition-colors flex items-center gap-1.5">
                              {service.name}
                              {service.featured && (
                                <span className="text-[9px] bg-[#d4b145] text-black font-bold px-1 rounded">
                                  Flagship
                                </span>
                              )}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>

              <Link 
                href="/projects" 
                className={`transition-colors relative py-1 hover:text-[#d4b145] ${
                  pathname === '/projects' ? 'text-[#d4b145] font-semibold' : 'text-[#e5e5e5]'
                }`}
              >
                Projects
                {pathname === '/projects' && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#d4b145] rounded-full"></span>
                )}
              </Link>

              <Link href="/#industries" className="text-[#e5e5e5] hover:text-[#d4b145] transition-colors py-1">
                Industries
              </Link>

              <Link href="/gallery" className="text-[#e5e5e5] hover:text-[#d4b145] transition-colors py-1">
                Gallery
              </Link>

              <Link href="/#why-us" className="text-[#e5e5e5] hover:text-[#d4b145] transition-colors py-1">
                Why Hashem
              </Link>

              <Link href="/careers" className="text-[#e5e5e5] hover:text-[#d4b145] transition-colors py-1">
                Careers
              </Link>

              <Link href="/contact" className="text-[#e5e5e5] hover:text-[#d4b145] transition-colors py-1">
                Contact
              </Link>
            </div>

            {/* Right Desktop CTA Button */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={onOpenQuoteModal}
                className="relative group overflow-hidden px-5 py-2.5 rounded-lg bg-[#d4b145] hover:bg-[#edd170] text-[#1b1918] font-bold text-sm tracking-wide transition-all duration-300 shadow-lg hover:shadow-[#d4b145]/30 flex items-center gap-2"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>Request a Quote</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute top-0 -left-full w-full h-full bg-white/25 -skew-x-12 group-hover:left-full transition-all duration-700 ease-out"></span>
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg bg-[#272422] text-[#d4b145] border border-[#d4b145]/30"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Slide-Out Drawer */}
        <div 
          className={`fixed inset-0 z-50 bg-black/80 backdrop-blur-md transition-opacity duration-300 md:hidden ${
            isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div 
            className={`fixed top-0 right-0 w-[85%] max-w-sm h-full bg-[#1b1918] border-l border-[#d4b145]/20 p-6 flex flex-col justify-between overflow-y-auto transition-transform duration-300 ${
              isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-5 border-b border-[#2e2a28]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded bg-[#2b2724] border border-[#d4b145] flex items-center justify-center text-[#d4b145] font-bold text-sm">
                    H
                  </div>
                  <div>
                    <div className="text-white font-bold text-base">HASHEM</div>
                    <div className="text-[9px] text-[#a09c97] uppercase">General Contracting Est.</div>
                  </div>
                </div>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 text-[#a09c97] hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Links */}
              <div className="py-5 space-y-1">
                <Link 
                  href="/" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2.5 px-3 rounded-lg text-white font-medium hover:bg-[#2b2724] hover:text-[#d4b145]"
                >
                  Home
                </Link>
                <Link 
                  href="/about" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2.5 px-3 rounded-lg text-white font-medium hover:bg-[#2b2724] hover:text-[#d4b145]"
                >
                  About Hashem
                </Link>

                <div className="py-2 px-3">
                  <div className="text-xs font-semibold text-[#d4b145] uppercase tracking-wider mb-2">
                    Services
                  </div>
                  <div className="space-y-1.5 pl-2 border-l border-[#3a3532]">
                    {serviceLinks.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-sm text-[#cac4bc] hover:text-[#d4b145] py-1"
                      >
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link 
                  href="/projects" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2.5 px-3 rounded-lg text-white font-medium hover:bg-[#2b2724] hover:text-[#d4b145]"
                >
                  Projects
                </Link>
                <Link 
                  href="/#industries" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2.5 px-3 rounded-lg text-white font-medium hover:bg-[#2b2724] hover:text-[#d4b145]"
                >
                  Industries We Serve
                </Link>
                <Link 
                  href="/gallery" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2.5 px-3 rounded-lg text-white font-medium hover:bg-[#2b2724] hover:text-[#d4b145]"
                >
                  Media Gallery
                </Link>
                <Link 
                  href="/careers" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2.5 px-3 rounded-lg text-white font-medium hover:bg-[#2b2724] hover:text-[#d4b145]"
                >
                  Careers
                </Link>
                <Link 
                  href="/contact" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2.5 px-3 rounded-lg text-white font-medium hover:bg-[#2b2724] hover:text-[#d4b145]"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Drawer Footer */}
            <div className="pt-4 border-t border-[#2e2a28] space-y-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-3 rounded-lg bg-[#d4b145] text-[#1b1918] font-bold text-center tracking-wide hover:bg-[#edd170] transition-colors flex items-center justify-center gap-2"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="text-center text-xs text-[#8f8a84]">
                Call: +966 13 859 4440
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
