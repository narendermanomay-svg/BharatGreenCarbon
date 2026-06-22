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
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { Leaf, Award, Globe, Shield, RefreshCw } from 'lucide-react';
import IndustriesWeServe from "./components/IndustriesWeServe";
import WhyChooseUs from './components/WhyChooseUs';
import SushantCard from './components/SushantCard';

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

  return <SushantCard />;

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

        <IndustriesWeServe />

        <WhyChooseUs />
     
        {/* Section 4: Carbon Projects Catalog */}
        <ProjectsSection onSelectProjectForInquiry={handleSelectProjectForInquiry} />

        {/* Section 5: Carbon Footprint Calculator */}
        <Calculator onApplyOffsetToInquiry={handleApplyOffsetToInquiry} />

        {/* Section 6: Contact & Real WhatsApp customizer */}
        <Contact preselectedProjectName={inquiryProject} prefilledEstimatedCredits={inquiryCredits} />
      </main>

      <Footer />

      {/* Floating Interactive Lead Generation assistance button */}
      <WhatsAppButton />
    </div>
  );
}
