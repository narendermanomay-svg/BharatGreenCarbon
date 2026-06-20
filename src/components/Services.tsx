import React, { useState } from 'react';
import { Landmark, Compass, ClipboardCheck, ArrowLeftRight, Check, Sparkles } from 'lucide-react';

interface ServiceItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  shortDesc: string;
  longDesc: string;
  caseStudy: string;
  feeStructure: string;
}

export default function Services() {
  const [selectedService, setSelectedService] = useState<string>('srv-01');

  const servicesList: ServiceItem[] = [
    {
      id: 'srv-01',
      icon: <Compass className="h-6 w-6" />,
      title: 'Carbon Asset Development & Onboarding',
      shortDesc: 'End-to-end feasibility assessment, baseline study, and technical project design documentation (PDD) for green-tech operators.',
      longDesc: 'We assist regional project developers (solar owners, biogas producers, and sustainable agricultural collectives) from the initial project idea to registry listing. We design the baseline emissions calculations, register with host nations, and list on international markets.',
      caseStudy: 'Helped Punajb Clean Agro secure BEE accreditation for 80,000 tons of bio-CNG generation credits.',
      feeStructure: 'Success-based model: 12% - 15% of minted credits.'
    },
    {
      id: 'srv-02',
      icon: <ClipboardCheck className="h-6 w-6" />,
      title: 'Credit Validation & Independent Auditing',
      shortDesc: 'Rigorous remote sensing, soil sampling coordinates, and independent third-party monitoring to secure registry sign-offs.',
      longDesc: 'Ensuring absolute ecological transparency. We coordinate audits with recognized Designated Operational Entities (DOEs) for Verra and Gold Standard, mitigating all compliance hazards and double-spending risks.',
      caseStudy: 'Completed comprehensive high-resolution satellite biomass mapping of Western Ghats reforestation projects.',
      feeStructure: 'Flat retainer per verification cycles.'
    },
    {
      id: 'srv-03',
      icon: <ArrowLeftRight className="h-6 w-6" />,
      title: 'Bulk Credit Sourcing & Liquid Trading',
      shortDesc: 'Direct-to-treasurer OTC trading desk helping corporate enterprises procure offsets securely under Spot or Futures agreement formats.',
      longDesc: 'Designed for corporate ESG coordinators. We aggregate carbon supply across India to supply custom volumes at locked rates. We handle escrow, contract settlement, and official retirement certificates on your behalf.',
      caseStudy: 'Facilitated a single 250k-ton solar credit purchase block for a major tier-1 Indian electronics assembly group.',
      feeStructure: 'Transparent markup on buy-sell spreads.'
    },
    {
      id: 'srv-04',
      icon: <Landmark className="h-6 w-6" />,
      title: 'Regulatory Market Advisory (BEE Compliance)',
      shortDesc: 'Guidance on navigating the transition from voluntary markets to India’s mandated scheme for high-intensity factories.',
      longDesc: 'As India moves towards mandatory carbon limits, we specialize in scenario modeling for high-intensity industries. We help you prepare for BEE allocations, balance voluntary vs compliance credits, and maximize state subsidies.',
      caseStudy: 'Advised a large steel foundry group in West Bengal on their multi-year carbon baseline liabilities.',
      feeStructure: 'Retainer advisory contracts.'
    }
  ];

  const currentService = servicesList.find(s => s.id === selectedService) || servicesList[0];

  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#1b4332] font-mono">Our Capabilities</h2>
          <p className="text-3xl sm:text-4xl font-display font-medium text-[#0f251c] tracking-tight">
            Comprehensive Institutional Carbon Advisory
          </p>
          <div className="h-1 w-16 bg-[#1b4332] mx-auto rounded"></div>
        </div>

        {/* Dynamic Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch" id="services-grid">
          
          {/* Service Buttons Left (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-3.5">
            {servicesList.map((service) => (
              <button
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                className={`w-full text-left p-5 md:p-6 rounded-2xl border transition-all duration-300 relative cursor-pointer ${
                  selectedService === service.id
                    ? 'border-[#1b4332] bg-[#f4f6f0] shadow-sm transform translate-x-2'
                    : 'border-gray-100 bg-white hover:border-gray-300'
                }`}
              >
                {/* Active arrow pointer */}
                {selectedService === service.id && (
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-10 bg-[#1b4332] rounded-l" />
                )}
                
                <div className="flex items-center space-x-4">
                  <div className={`p-2.5 rounded-xl ${
                    selectedService === service.id 
                      ? 'bg-[#1b4332] text-white' 
                      : 'bg-gray-100 text-[#1b4332]'
                  }`}>
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#0f251c] leading-tight group-hover:text-[#1b4332]">
                      {service.title}
                    </h3>
                    <p className="text-xs text-gray-400 mt-1 line-clamp-1">
                      {service.shortDesc}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Interactive Details Display Right (7 Cols) */}
          <div className="lg:col-span-7 bg-gradient-to-br from-[#f4f6f0]/60 to-white rounded-3xl p-6 md:p-8 border border-gray-100 flex flex-col justify-between shadow-sm relative overflow-hidden">
            
            {/* Visual background leaf icon */}
            <div className="absolute -bottom-10 -right-10 opacity-5 scale-150 rotate-45 pointer-events-none text-[#1b4332]">
              <Landmark className="h-64 w-64" />
            </div>

            <div className="space-y-6 relative z-10">
              
              {/* Header */}
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <p className="text-[10px] uppercase font-mono tracking-wider text-[#cbdaa9] font-bold">Advisory Division</p>
                  <h3 className="text-2xl font-display font-semibold text-[#1b4332]">
                    {currentService.title}
                  </h3>
                </div>
                <div className="bg-[#1b4332]/5 text-[#1b4332] p-2.5 rounded-xl">
                  {currentService.icon}
                </div>
              </div>

              {/* Long Description */}
              <p className="text-gray-600 text-sm leading-relaxed md:text-base">
                {currentService.longDesc}
              </p>

              {/* Case Study Callout */}
              <div className="p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 space-y-1">
                <span className="inline-flex items-center space-x-1.5 text-[10px] uppercase tracking-wider font-mono font-bold text-emerald-800">
                  <Sparkles className="h-3.5 w-3.5 fill-emerald-100 text-emerald-800" />
                  <span>Verified Track Record</span>
                </span>
                <p className="text-xs text-gray-700 leading-relaxed font-sans">
                  {currentService.caseStudy}
                </p>
              </div>

            </div>

            {/* Bottom Footer Details */}
            <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 relative z-10">
              <div>
                <p className="text-[10px] text-gray-400 uppercase font-mono tracking-widest">Pricing Structure</p>
                <p className="text-sm font-bold text-[#0f251c] mt-0.5 font-mono">{currentService.feeStructure}</p>
              </div>
              <button 
                onClick={() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-[#1b4332] hover:bg-[#153426] text-white text-xs font-semibold py-2.5 px-5 rounded-full flex items-center space-x-1 transition cursor-pointer"
              >
                <span>Request Case Folder</span>
                <Check className="h-3.5 w-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
