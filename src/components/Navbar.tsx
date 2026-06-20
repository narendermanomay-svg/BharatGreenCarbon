import React, { useState, useEffect } from 'react';
import { Leaf, TrendingUp, Menu, X, ArrowUpRight } from 'lucide-react';

import logo from '../logo.png.png';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Carbon Projects' },
    { id: 'calculator', label: 'Footprint Calculator' },
    { id: 'contact', label: 'Contact & Inquiry' }
  ];

  const handleMenuClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Live Market Ticker */}
      <div className="bg-[#0f251c] text-[#cbdaa9] text-xs py-1.5 px-4 overflow-hidden border-b border-[#1b4332]/50 font-mono hidden md:block" id="app-ticker">
        <div className="max-w-7xl mx-auto flex justify-between items-center whitespace-nowrap animate-marquee">
          <div className="flex space-x-8">
            <span className="flex items-center space-x-1">
              <span className="h-1.5 w-1.5 bg-green-400 rounded-full animate-ping mr-1"></span>
              <span className="text-white">ICM Live Rates:</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <span>VCS Rajasthan Solar (Ton):</span>
              <span className="font-bold text-white">₹850</span>
              <span className="text-green-400 text-[10px] flex items-center"><TrendingUp className="h-3 w-3 inline mr-0.5" />+1.4%</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <span>GS Western Ghats Forestry (Ton):</span>
              <span className="font-bold text-white">₹1,450</span>
              <span className="text-green-400 text-[10px] flex items-center"><TrendingUp className="h-3 w-3 inline mr-0.5" />+3.1%</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <span>BEE Punjab Biomass Bio-CNG (Ton):</span>
              <span className="font-bold text-white">₹1,200</span>
              <span className="text-green-400 text-[10px] flex items-center"><TrendingUp className="h-3 w-3 inline mr-0.5" />+0.8%</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <span>GS Cookstoves Tribal (Ton):</span>
              <span className="font-bold text-white">₹950</span>
              <span className="text-red-400 text-[10px]">▼ -0.3%</span>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-[10px] uppercase tracking-wider text-gray-400">Indian Registry Feed</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav 
        className={`w-full transition-all duration-300 border-b ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-gray-100' 
            : 'bg-transparent py-5 border-transparent'
        }`}
        id="main-nav"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <button 
            onClick={() => handleMenuClick('home')}
            <img
            src={logo}
            alt="BharatGreenCarbon"
            className="h-20 w-auto"
         />
          </button>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-1 select-none">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeSection === item.id
                    ? 'bg-[#1b4332] text-white'
                    : 'text-gray-600 hover:text-[#1b4332] hover:bg-[#e5eadc]/50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => onNavigate('contact')}
              className="ml-4 bg-[#1b4332] hover:bg-[#153426] text-white px-5 py-2 rounded-full text-sm font-medium transition-all flex items-center space-x-1 shadow-sm hover:shadow active:scale-95 cursor-pointer"
            >
              <span>Get Quotes</span>
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button 
              onClick={() => onNavigate('calculator')}
              className="bg-[#cbdaa9] text-[#1b4332] font-semibold text-xs px-3 py-1.5 rounded-full hover:bg-opacity-95 transition"
            >
              Calc CO2
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#1b4332] hover:bg-[#e5eadc]/40 cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-b border-gray-100 flex flex-col p-4 space-y-2 animate-fade-in animate-duration-150">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleMenuClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  activeSection === item.id
                    ? 'bg-[#1b4332] text-white'
                    : 'text-gray-700 hover:bg-[#e5eadc]/30 hover:text-[#1b4332]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleMenuClick('contact')}
              className="w-full bg-[#1b4332] text-white text-center py-3 rounded-xl font-medium shadow-sm flex justify-center items-center space-x-1.5"
            >
              <span>Request Consultation</span>
              <ArrowUpRight className="h-5 w-5" />
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
