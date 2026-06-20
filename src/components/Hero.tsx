import React from 'react';
import { ArrowDownRight, Calculator, MessageSquare, TrendingUp, ShieldCheck, Award } from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const triggerWhatsApp = () => {
    const text = encodeURIComponent("Namaste BharatGreenCarbon Team. I visited your marketplace portal and would like to learn more about purchasing verified carbon credits to offset our business emissions.");
    window.open(`https://wa.me/919220756669?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="home" className="pt-28 md:pt-36 pb-16 md:pb-24 bg-gradient-to-b from-[#e5eadc]/40 via-white to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 animate-slide-in-left">
            
            {/* Regulatory Badge */}
            <div className="inline-flex items-center space-x-2 bg-[#cbdaa9]/30 text-[#1b4332] px-3.5 py-1.5 rounded-full border border-[#cbdaa9]/60">
              <ShieldCheck className="h-4 w-4" />
              <span className="text-xs font-semibold uppercase tracking-wider font-mono">
                BEE & Energy Conservation Act Compliant
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium tracking-tight text-[#0f251c] leading-[1.1]">
                Empowering India's Sovereign Carbon Market
              </h1>
              <p className="text-gray-600 text-lg sm:text-xl max-w-xl font-sans leading-relaxed">
                BharatGreenCarbon is India's trusted carbon credit marketplace, connecting businesses with verified carbon projects and sustainable climate solutions.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <button
                onClick={() => onNavigate('projects')}
                className="bg-[#1b4332] hover:bg-[#153426] text-white py-4 px-8 rounded-full font-semibold transition flex items-center justify-center space-x-2 shadow-lg shadow-green-900/10 active:scale-95 cursor-pointer"
              >
                <span>Explore Carbon Projects</span>
                <ArrowDownRight className="h-5 w-5" />
              </button>
              
              <button
                onClick={() => onNavigate('calculator')}
                className="bg-white hover:bg-gray-50 border-2 border-gray-100 hover:border-[#1b4332]/20 text-[#1b4332] py-4 px-8 rounded-full font-semibold transition flex items-center justify-center space-x-2 active:scale-95 cursor-pointer"
              >
                <Calculator className="h-5 w-5 text-green-700" />
                <span>Carbon Footprint Calculator</span>
              </button>

              <button
                onClick={triggerWhatsApp}
                className="bg-emerald-500 hover:bg-emerald-600 text-white py-4 px-6 rounded-full font-semibold transition flex items-center justify-center space-x-2 active:scale-95 md:hidden cursor-pointer"
              >
                <MessageSquare className="h-5 w-5" />
                <span>Contact on WhatsApp</span>
              </button>
            </div>

            {/* Key Value Pill Tags */}
            <div className="pt-2 flex flex-wrap gap-y-3 gap-x-6 text-sm text-[#0f251c]">
              <div className="flex items-center space-x-2 md:border-r md:border-gray-200 md:pr-6">
                <span className="text-2xl font-bold font-mono text-[#1b4332]">100%</span>
                <span className="text-gray-600 text-xs">Verified by<br />Registry Standards</span>
              </div>
              <div className="flex items-center space-x-2 md:border-r md:border-gray-200 md:pr-6">
                <span className="text-2xl font-bold font-mono text-[#1b4332]">48h</span>
                <span className="text-gray-600 text-xs">Average Delivery<br />of Credit Audits</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold font-mono text-[#1b4332]">BEE</span>
                <span className="text-gray-600 text-xs">Ready for Mandatory<br />Indian Obligations</span>
              </div>
            </div>

          </div>

          {/* Hero Right Visual Column */}
          <div className="lg:col-span-5 relative animate-fade-in">
            {/* Visual Card Frame */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100 flex flex-col space-y-6 relative z-10">
              
              {/* Badge */}
              <div className="flex justify-between items-center bg-gray-50 p-4 rounded-2xl border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-[#1b4332]/5 text-[#1b4332] rounded-xl">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#0f251c]">National Target Compliance</h3>
                    <p className="text-[11px] text-gray-500">Panchamrit Climate Pledges</p>
                  </div>
                </div>
                <div className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full font-mono">
                  ACTIVE
                </div>
              </div>

              {/* Central Graphics or Mini Dashboard Visual */}
              <div className="space-y-4">
                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider font-mono">Indian Carbon Market Ecosystem</h4>
                
                <div className="space-y-3">
                  {/* Item 1 */}
                  <div className="relative p-3 bg-gradient-to-r from-green-50/50 to-white hover:from-green-50 rounded-xl border border-gray-100 transition-colors flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-400 font-mono">PROJECT TYPE</p>
                      <h4 className="text-sm font-semibold text-[#1b4332]">Afforestation (Western Ghats)</h4>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] text-gray-400">CREDIT SYMBOL</p>
                      <span className="text-sm font-medium text-gray-700 font-mono">WGB-ARR-ARR</span>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="relative p-3 bg-gradient-to-r from-amber-50/20 to-white hover:from-amber-50/40 rounded-xl border border-gray-100 transition-colors flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-400 font-mono">PROJECT TYPE</p>
                      <h4 className="text-sm font-semibold text-amber-800">Crop Residue Clean Biomass</h4>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] text-gray-400">REGISTRY CODE</p>
                      <span className="text-sm font-medium text-gray-700 font-mono">BEE-PJB-BIO</span>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="relative p-3 bg-gradient-to-r from-blue-50/20 to-white hover:from-blue-50/40 rounded-xl border border-gray-100 transition-colors flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-400 font-mono">PROJECT TYPE</p>
                      <h4 className="text-sm font-semibold text-blue-800">Thar Desert Solar Arrays</h4>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] text-gray-400">REGISTRY CODE</p>
                      <span className="text-sm font-medium text-gray-700 font-mono">VCS-RAJ-SLR</span>
                    </div>
                  </div>
                </div>

                {/* Growth indicator box */}
                <div className="bg-[#1b4332] text-white p-4 rounded-2xl flex items-center justify-between shadow-md">
                  <div>
                    <h5 className="text-[11px] text-[#cbdaa9] uppercase tracking-widest font-mono font-bold">Trading Volume Goal</h5>
                    <p className="text-lg font-bold font-display mt-0.5">3.5M+ Metric Tons Carbon</p>
                  </div>
                  <div className="bg-emerald-900 text-[#cbdaa9] p-2.5 rounded-xl border border-[#cbdaa9]/20">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                </div>
              </div>

              {/* Subtitle / Disclaimer for Indian context */}
              <p className="text-[10.5px] text-gray-500 text-center italic font-mono">
                "Directly aligning with the Ministry of Power, BEE guidelines, and Verra registries."
              </p>

            </div>

            {/* Decorative background shapes */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[120%] w-[120%] bg-gradient-to-tr from-green-100/30 via-emerald-500/5 to-transparent rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-10 -right-10 h-32 w-32 bg-[#cbdaa9]/20 rounded-full blur-2xl -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
