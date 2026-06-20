/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ProjectsSection from './components/ProjectsSection';
import Calculator from './components/Calculator';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import { Leaf, Award, Globe, Shield, RefreshCw } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [inquiryProject, setInquiryProject] = useState('');
  const [inquiryCredits, setInquiryCredits] = useState(1000);

  // Monitor scrolling to highlight correct nav items
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'projects', 'calculator', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // height of sticky navbar
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleSelectProjectForInquiry = (projectName: string, estimatedCredits?: number) => {
    setInquiryProject(projectName);
    if (estimatedCredits) {
      setInquiryCredits(estimatedCredits);
    }
  };

  const handleApplyOffsetToInquiry = (creditsQuantity: number) => {
    setInquiryCredits(creditsQuantity);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#cbdaa9] selection:text-[#1b4332] antialiased">
      {/* Dynamic Header & Ticker */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigation} />

      {/* Main Structural Layout Sections */}
      <main>
        {/* Section 1: Home */}
        <Hero onNavigate={handleNavigation} />

        {/* Section 2: About */}
        <About />

        {/* Section 3: Services */}
        <Services />

        {/* Section 4: Carbon Projects Catalog */}
        <ProjectsSection onSelectProjectForInquiry={handleSelectProjectForInquiry} />

        {/* Section 5: Carbon Footprint Calculator */}
        <Calculator onApplyOffsetToInquiry={handleApplyOffsetToInquiry} />

        {/* Section 6: Contact & Real WhatsApp customizer */}
        <Contact preselectedProjectName={inquiryProject} prefilledEstimatedCredits={inquiryCredits} />
      </main>

      {/* Corporate Professional Footer */}
      <footer className="bg-[#0f251c] text-white pt-16 pb-8 border-t border-[#1b4332]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Top Brand Block */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#1b4332]/50">
            {/* Col 1 (5 cols) */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center space-x-2">
                <div className="bg-[#1b4332] p-2 rounded-lg text-white">
                  <Leaf className="h-5 w-5 fill-[#cbdaa9]" />
                </div>
                <div>
                  <span className="font-display font-bold text-xl text-[#cbdaa9] tracking-tight">BharatCarbon</span>
                  <span className="text-[10px] block font-mono text-gray-400">Carbon & Emissions Registry Hub</span>
                </div>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed max-w-sm">
                India's foremost transparent platform facilitating verified carbon acquisitions, retirement advisory, and direct developer funding.
              </p>
              
              {/* Domain suggestion reference */}
              <div className="space-y-1.5 pt-2">
                <span className="text-[9px] uppercase tracking-wider text-gray-500 font-bold block font-mono">AVAILABLE LAUNCH BRANDS:</span>
                <div className="flex flex-wrap gap-2 text-[11px] font-mono font-medium text-emerald-400">
                  <span className="bg-[#1b4332]/40 rounded px-2.5 py-1">BharatCarbon.com</span>
                  <span className="bg-[#1b4332]/40 rounded px-2.5 py-1">CarbonTradeIndia.com</span>
                  <span className="bg-[#1b4332]/40 rounded px-2.5 py-1">CarbonMarketIndia.com</span>
                </div>
              </div>
            </div>

            {/* Col 2 (3 cols) */}
            <div className="md:col-span-3 space-y-3.5">
              <h4 className="text-sm font-bold text-[#cbdaa9] font-mono uppercase tracking-wider">Compliance Registry Links</h4>
              <ul className="text-xs text-gray-400 space-y-2 font-mono">
                <li><a href="https://vcs.verra.org" target="_blank" rel="noreferrer" className="hover:text-white transition">Verra VCS Registry</a></li>
                <li><a href="https://www.goldstandard.org" target="_blank" rel="noreferrer" className="hover:text-white transition">Gold Standard Impact</a></li>
                <li><a href="https://beeindia.gov.in" target="_blank" rel="noreferrer" className="hover:text-white transition">BEE India Bureau</a></li>
                <li><a href="https://unfccc.int" target="_blank" rel="noreferrer" className="hover:text-white transition">UNFCCC CDM Desk</a></li>
              </ul>
            </div>

            {/* Col 3 (4 cols) - Newsletter Mock */}
            <div className="md:col-span-4 space-y-4">
              <h4 className="text-sm font-bold text-[#cbdaa9] font-mono uppercase tracking-wider">Sovereign Market Advisory</h4>
              <p className="text-xs text-gray-400">
                Subscribe to our weekly Carbon Market regulatory insights from experts analyzing BEE compliance requirements.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="name@company.com"
                  className="bg-[#1b4332]/30 border border-[#cbdaa9]/30 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none placeholder-gray-500 flex-1"
                />
                <button 
                  onClick={() => alert("Thank you for signing up to the market feed! Updates will begin next Monday.")}
                  className="bg-[#cbdaa9] text-[#1b4332] font-semibold text-xs py-2.5 px-4 rounded-xl hover:bg-white hover:text-[#1b4332] transition cursor-pointer"
                >
                  Join Feed
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Copyright & Badges */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-xs text-gray-500 font-mono">
            <p>© {new Date().getFullYear()} BharatCarbon Registry Platform. All rights reserved.</p>
            
            {/* Security and compliance symbols */}
            <div className="flex flex-wrap gap-4 items-center">
              <span className="flex items-center gap-1">
                <Shield className="h-3.5 w-3.5 text-emerald-500" />
                <span>Anti-Double Spend Certified</span>
              </span>
              <span className="flex items-center gap-1">
                <Globe className="h-3.5 w-3.5 text-emerald-500" />
                <span>SDG Aligned Portfolio</span>
              </span>
            </div>
          </div>

        </div>
      </footer>

      {/* Floating Interactive Lead Generation assistance button */}
      <WhatsAppButton />
    </div>
  );
}

