import React from 'react';
import { Github, Instagram, Mail, Phone, Sparkles } from 'lucide-react';
import { TransparentLogo } from './TransparentLogo';
const logoImg = "/src/assets/images/catalyst_kalpana_1783433883960.jpg";

interface FooterProps {
  onTabChange?: (tab: string) => void;
  activeTab?: string;
}

export default function Footer({ onTabChange, activeTab }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black border-t border-white/5 py-12 sm:py-16 px-6 sm:px-12 relative overflow-hidden z-50">
      {/* Background ambient gradient for a high-end feel */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[150px] bg-[#e8702a]/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto flex flex-col gap-10 sm:gap-12 relative z-10">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-10 border-b border-white/5">
          
          {/* Logo & Branding */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => onTabChange?.('Course')}>
            <TransparentLogo 
              src={logoImg} 
              alt="Catalyst Kalpana Logo" 
              className="h-24 sm:h-32 w-auto object-contain" 
            />
          </div>

          {/* Social Links & Interactive Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="group flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/[0.02] text-white/60 hover:text-white hover:border-[#e8702a] hover:bg-[#e8702a]/10 transition-all duration-300 shadow-sm"
            >
              <Github size={18} className="transition-transform duration-300 group-hover:scale-110" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className="group flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/[0.02] text-white/60 hover:text-white hover:border-[#e8702a] hover:bg-[#e8702a]/10 transition-all duration-300 shadow-sm"
            >
              <Instagram size={18} className="transition-transform duration-300 group-hover:scale-110" />
            </a>
          </div>

        </div>

        {/* Middle Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          
          {/* Contact Details */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs tracking-[0.2em] font-mono font-semibold text-[#e8702a] uppercase">
              Get in Touch
            </h4>
            <div className="flex flex-col gap-3 font-light text-sm text-white/60">
              <a 
                href="mailto:catalystkalpana@gmail.com" 
                className="flex items-center gap-3 hover:text-white transition-colors duration-200 group w-fit"
              >
                <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5 group-hover:border-[#e8702a]/30 group-hover:bg-[#e8702a]/5 transition-all duration-200">
                  <Mail size={14} className="text-white/40 group-hover:text-[#e8702a] transition-colors" />
                </div>
                <span>catalystkalpana@gmail.com</span>
              </a>
              <a 
                href="tel:+919082699149" 
                className="flex items-center gap-3 hover:text-white transition-colors duration-200 group w-fit"
              >
                <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5 group-hover:border-[#e8702a]/30 group-hover:bg-[#e8702a]/5 transition-all duration-200">
                  <Phone size={14} className="text-white/40 group-hover:text-[#e8702a] transition-colors" />
                </div>
                <span>+91 90826 99149</span>
              </a>
            </div>
          </div>

          {/* Quick Links / Site Map (Interactive) */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs tracking-[0.2em] font-mono font-semibold text-[#e8702a] uppercase">
              Explore
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 font-light text-sm text-white/60">
              {['Course', 'Field Guides', 'Plans', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => onTabChange?.(item)}
                  className={`text-left hover:text-white transition-colors duration-200 flex items-center gap-1.5 group ${
                    activeTab === item ? 'text-white font-medium' : ''
                  }`}
                >
                  <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-[#e8702a] transition-colors" />
                  <span>{item}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Mission / Values Statement */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Sparkles size={14} className="text-[#e8702a]" />
              <h4 className="text-xs tracking-[0.2em] font-mono font-semibold text-[#e8702a] uppercase">
                Our Vision
              </h4>
            </div>
            <p className="text-sm text-white/50 leading-relaxed font-light">
              Empowering innovators and brands with high-fidelity design systems, 3D spatial landscapes, and secure cloud-native architecture.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5 text-xs text-white/30 font-mono">
          <span>&copy; {currentYear} Catalyst Kalpana. All rights reserved.</span>
          <div className="flex gap-6">
            <span className="hover:text-white/50 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white/50 cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
