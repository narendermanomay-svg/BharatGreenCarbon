import React from 'react';
import { Leaf, Milestone, ShieldAlert, HeartHandshake, Eye } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      icon: <Eye className="h-6 w-6 text-emerald-800" />,
      title: 'Double-Spending Prevention',
      description: 'Our proprietary ledger tracking mapping prevents double-counting. Every carbon ton of offset is locked/dedicated directly to your company account during retirement.'
    },
    {
      icon: <HeartHandshake className="h-6 w-6 text-emerald-800" />,
      title: 'Incentivizing Smallholder Estates',
      description: 'We route up to 75% of credit sale revenues directly to rural project developers, farmers, and indigenous communities in Punjab, Rajasthan, Gujarat, and Tamil Nadu.'
    },
    {
      icon: <Milestone className="h-6 w-6 text-emerald-800" />,
      title: 'Regulatory Preparedness',
      description: 'Fully designed to comply with local Bureau of Energy Efficiency (BEE) target requirements for compliance entities (steel, power, textiles, cement).'
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#f4f6f0]/50 border-t border-b border-[#e5eadc]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 md:mb-20">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#1b4332] font-mono">
            About BharatGreenCarbon
          </h2>
          <p className="text-3xl sm:text-4xl font-display font-medium text-[#0f251c] tracking-tight">
            Bridging India's Ecologists with Global Enterprises
          </p>
          <div className="h-1 w-16 bg-[#1b4332] mx-auto rounded"></div>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#1b4332] tracking-tight font-display">
              Why We Started BharatGreenCarbon
            </h3>
            <p className="text-gray-600 leading-relaxed">
              India is poised to become one of the largest emitters, yet possesses unparalleled potential for carbon sequestration, renewable scaling, and agricultural biogas innovation. 
            </p>
            <p className="text-gray-600 leading-relaxed">
              Many local project developers—whether small wind farms in Tamil Nadu or sustainable farm cooperatives in Punjab—face massive structural bottlenecks in seeking international accreditation or getting paid fairly.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong>BharatGreenCarbon</strong> was built to solve this. We are an institutional-grade, tech-enabled carbon desk matching verify-ready Indian carbon projects with responsible domestic clean-energy buyers.
            </p>
            
            {/* National Action Block */}
            <div className="p-4 bg-[#cbdaa9]/20 border border-[#cbdaa9]/50 rounded-2xl flex items-start space-x-3">
              <ShieldAlert className="h-5 w-5 text-emerald-800 mt-0.5 shrink-0" />
              <div>
                <h4 className="text-sm font-bold text-[#1b4332]">Indian Carbon Market (ICM) Transition</h4>
                <p className="text-xs text-[#0f251c] mt-1">
                  In line with the updated Energy Conservation Act, India is setting up its national compliance carbon market. BharatGreenCarbon aligns directly with the Bureau of Energy Efficiency (BEE) blueprint to ensure zero transition friction.
                </p>
              </div>
            </div>
          </div>

          {/* Visual Side Frame */}
          <div className="relative">
            <div className="aspect-video lg:aspect-square bg-gradient-to-tr from-[#1b4332] to-[#153426] rounded-3xl overflow-hidden relative shadow-xl">
              {/* Overlay with real-looking image */}
              <img 
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800" 
                alt="Indian Highlands" 
                className="w-full h-full object-cover mix-blend-overlay opacity-40"
                referrerPolicy="no-referrer"
              />
              
              {/* On-Image Stats Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="bg-white/10 backdrop-blur-md text-white text-xs px-3.5 py-1.5 rounded-full border border-white/10 font-mono">
                    EST. 2024
                  </div>
                  <Leaf className="h-8 w-8 text-[#cbdaa9]" />
                </div>
                
                <div className="space-y-2 text-white">
                  <p className="text-xs font-mono uppercase tracking-widest text-[#cbdaa9]">Indian Environmental Vision</p>
                  <p className="text-xl md:text-2xl font-bold font-display leading-tight">
                    "Fostering decentralized rural prosperity through ecological capital trading."
                  </p>
                </div>
              </div>
            </div>

            {/* Accent decorative lines */}
            <div className="absolute -bottom-6 -left-6 h-32 w-32 bg-[#cbdaa9] rounded-3xl -z-10 opacity-30"></div>
          </div>
        </div>

        {/* Pillars / Key Value Propositions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 bg-[#f4f6f0] inline-block rounded-xl mb-4 border border-[#cbdaa9]/20">
                {pillar.icon}
              </div>
              <h4 className="text-lg font-bold text-[#0f251c] mb-2 font-display">
                {pillar.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
