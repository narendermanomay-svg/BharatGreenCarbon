import React, { useState, useEffect } from 'react';
import { CalculatorInput, FootprintResult } from '../types';
import { Calculator as CalcIcon, AlertCircle, RefreshCw, ShoppingCart, Leaf, Percent, HelpingHand } from 'lucide-react';

interface CalculatorProps {
  onApplyOffsetToInquiry: (credits: number) => void;
}

export default function Calculator({ onApplyOffsetToInquiry }: CalculatorProps) {
  // Setup standard state with average Indian MSM establishment values
  const [inputs, setInputs] = useState<CalculatorInput>({
    electricityKWh: 8500,
    dieselLitres: 450,
    airTravelHours: 12,
    wasteKg: 300,
    paperTons: 1.5,
  });

  const [result, setResult] = useState<FootprintResult>({
    emissionsElectricity: 0,
    emissionsDiesel: 0,
    emissionsAirTravel: 0,
    emissionsWaste: 0,
    emissionsPaper: 0,
    totalEmissions: 0,
    offsetCostINR: 0,
    offsetCostUSD: 0,
    treesEquivalent: 0,
  });

  const [showAppliedSuccess, setShowAppliedSuccess] = useState(false);

  // Standard Emission Factors (specifically for Indian grid / context factors)
  // - CEA Grid Factor (India): Avg 0.82 kg CO2 / kWh
  // - Diesel Fuel: Avg 2.68 kg CO2 / Litre
  // - Aviation: Avg 250 kg CO2 / hour flight
  // - Organic Municipal Waste: 0.5 kg CO2 / kg waste
  // - Copier Paper: 1200 kg CO2 / Ton of paper
  // Average standard Indian Carbon credit price: ₹1050/Ton CO2e
  const CARBON_PRICE_INR = 1050;
  const CARBON_PRICE_USD = 12.60;

  useEffect(() => {
    const emissionsElectricity = (inputs.electricityKWh * 12 * 0.82) / 1000; // metric tons of CO2/year
    const emissionsDiesel = (inputs.dieselLitres * 12 * 2.68) / 1000;
    const emissionsAirTravel = (inputs.airTravelHours * 250) / 1000;
    const emissionsWaste = (inputs.wasteKg * 12 * 0.5) / 1000;
    const emissionsPaper = inputs.paperTons * 1.25;

    const totalEmissions = 
      emissionsElectricity + 
      emissionsDiesel + 
      emissionsAirTravel + 
      emissionsWaste + 
      emissionsPaper;

    const offsetCostINR = totalEmissions * CARBON_PRICE_INR;
    const offsetCostUSD = totalEmissions * CARBON_PRICE_USD;
    
    // 1 mature tropical tree sequesters ~22 kg CO2 / year, so 1 ton needs ~45 trees
    const treesEquivalent = Math.round(totalEmissions * 45.4);

    setResult({
      emissionsElectricity,
      emissionsDiesel,
      emissionsAirTravel,
      emissionsWaste,
      emissionsPaper,
      totalEmissions,
      offsetCostINR,
      offsetCostUSD,
      treesEquivalent
    });
  }, [inputs]);

  const handleSliderChange = (key: keyof CalculatorInput, val: number) => {
    setInputs(prev => ({
      ...prev,
      [key]: val
    }));
  };

  const resetEstimator = () => {
    setInputs({
      electricityKWh: 4500,
      dieselLitres: 150,
      airTravelHours: 4,
      wasteKg: 100,
      paperTons: 0.5,
    });
    setShowAppliedSuccess(false);
  };

  const handleApplyToInquiry = () => {
    const roundedEmissions = Math.ceil(result.totalEmissions);
    onApplyOffsetToInquiry(roundedEmissions);
    setShowAppliedSuccess(true);
    setTimeout(() => {
      setShowAppliedSuccess(false);
      // scroll to contact form
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 1800);
  };

  // Percent calculation helper
  const total = result.totalEmissions || 1;
  const pctElectricity = ((result.emissionsElectricity / total) * 100).toFixed(0);
  const pctDiesel = ((result.emissionsDiesel / total) * 100).toFixed(0);
  const pctAirTravel = ((result.emissionsAirTravel / total) * 100).toFixed(0);
  const pctWaste = ((result.emissionsWaste / total) * 100).toFixed(0);
  const pctPaper = ((result.emissionsPaper / total) * 100).toFixed(0);

  return (
    <section id="calculator" className="py-20 md:py-28 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header content */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-1.5 bg-[#cbdaa9]/25 text-[#1b4332] py-1 px-3.5 rounded-full border border-[#cbdaa9]/40 text-xs font-semibold font-mono">
            <CalcIcon className="h-3.5 w-3.5" />
            <span>EXECUTIVE DECISION TOOL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-[#0f251c] tracking-tight">
            Indian Business Footprint Estimator
          </h2>
          <p className="text-gray-500 text-sm max-w-lg mx-auto">
            Input your monthly consumption parameters below to estimate your company’s Scope 1, Scope 2, and Scope 3 greenhouse emissions in compliance with national baselines.
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch" id="calculator-interface">
          
          {/* Sliders Grid Left (7 Cols) */}
          <div className="lg:col-span-7 bg-gray-50 rounded-3xl p-6 md:p-8 border border-gray-100 space-y-7 flex flex-col justify-between">
            
            <div className="flex justify-between items-center pb-4 border-b border-gray-200">
              <h3 className="text-sm font-bold text-[#0f251c] uppercase tracking-wider font-mono">1. Consumption Variables</h3>
              <button
                onClick={resetEstimator}
                className="text-xs text-gray-500 hover:text-[#1b4332] flex items-center space-x-1 hover:underline transition cursor-pointer"
              >
                <RefreshCw className="h-3 w-3" />
                <span>Default Presets</span>
              </button>
            </div>

            {/* Input Variables */}
            <div className="space-y-6">
              
              {/* Variable 1: Grid Electricity */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-800">
                  <span className="font-semibold">Grid Electricity (Scope 2)</span>
                  <span className="font-mono text-xs font-bold text-[#1b4332] bg-[#cbdaa9]/20 px-2 py-0.5 rounded">
                    {inputs.electricityKWh.toLocaleString()} kWh/month
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100000"
                  step="500"
                  value={inputs.electricityKWh}
                  onChange={(e) => handleSliderChange('electricityKWh', Number(e.target.value))}
                  className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#1b4332]"
                />
                <div className="flex justify-between text-[11px] text-gray-400">
                  <span>0 kWh</span>
                  <span>Avg SME (10k kWh)</span>
                  <span>High Energy Office (100k kWh)</span>
                </div>
              </div>

              {/* Variable 2: Onsite Diesel Generators */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-800">
                  <span className="font-semibold">Diesel Generators - Backups (Scope 1)</span>
                  <span className="font-mono text-xs font-bold text-[#1b4332] bg-[#cbdaa9]/20 px-2 py-0.5 rounded">
                    {inputs.dieselLitres.toLocaleString()} Litres/month
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="5000"
                  step="50"
                  value={inputs.dieselLitres}
                  onChange={(e) => handleSliderChange('dieselLitres', Number(e.target.value))}
                  className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#1b4332]"
                />
                <div className="flex justify-between text-[11px] text-gray-400">
                  <span>0 L</span>
                  <span>Minor Outages (500L)</span>
                  <span>Heavy Genset Operations (5,000L)</span>
                </div>
              </div>

              {/* Variable 3: Corporate Aviation */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-800">
                  <span className="font-semibold">Domestic Executive Travel (Scope 3)</span>
                  <span className="font-mono text-xs font-bold text-[#1b4332] bg-[#cbdaa9]/20 px-2 py-0.5 rounded">
                    {inputs.airTravelHours.toLocaleString()} Flight Hours/year
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="150"
                  step="2"
                  value={inputs.airTravelHours}
                  onChange={(e) => handleSliderChange('airTravelHours', Number(e.target.value))}
                  className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#1b4332]"
                />
                <div className="flex justify-between text-[11px] text-gray-400">
                  <span>0 Hours</span>
                  <span>Routine Sales (20 hrs)</span>
                  <span>Heavy Interstate Travel (150 hrs)</span>
                </div>
              </div>

              {/* Variable 4: Municipal Solid Waste */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-800">
                  <span className="font-semibold">Dry & Organic Rubbish (Scope 3)</span>
                  <span className="font-mono text-xs font-bold text-[#1b4332] bg-[#cbdaa9]/20 px-2 py-0.5 rounded">
                    {inputs.wasteKg.toLocaleString()} kg/month
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="3000"
                  step="25"
                  value={inputs.wasteKg}
                  onChange={(e) => handleSliderChange('wasteKg', Number(e.target.value))}
                  className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#1b4332]"
                />
                <div className="flex justify-between text-[11px] text-gray-400">
                  <span>0 kg</span>
                  <span>Avg Corporate floor (250kg)</span>
                  <span>Large Facility / Kitchen (3,000kg)</span>
                </div>
              </div>

              {/* Variable 5: Printer & Stationary Paper */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-800">
                  <span className="font-semibold">Copier & Stationary Paper (Scope 3)</span>
                  <span className="font-mono text-xs font-bold text-[#1b4332] bg-[#cbdaa9]/20 px-2 py-0.5 rounded">
                    {inputs.paperTons.toLocaleString()} Tons/year
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="10"
                  step="0.1"
                  value={inputs.paperTons}
                  onChange={(e) => handleSliderChange('paperTons', Number(e.target.value))}
                  className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#1b4332]"
                />
                <div className="flex justify-between text-[11px] text-gray-400">
                  <span>0 Tons</span>
                  <span>Medium SME (1.2 Tons)</span>
                  <span>Paper-Heavy Records (10 Tons)</span>
                </div>
              </div>

            </div>

            {/* Note about CEA Grid Standards */}
            <div className="p-3 bg-[#e5eadc]/30 rounded-xl flex items-center space-x-2 text-xs text-gray-600 border border-[#cbdaa9]/30">
              <AlertCircle className="h-4 w-4 text-[#1b4332] shrink-0" />
              <span>Calculated with Central Electricity Authority (CEA) Emission Factor of 0.82kg/kWh for India.</span>
            </div>

          </div>

          {/* Result Dashboard Right (5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#0f251c] to-[#153426] rounded-3xl p-6 md:p-8 text-white flex flex-col justify-between shadow-xl border border-[#cbdaa9]/20 relative">
            
            {/* Header */}
            <div className="space-y-1">
              <p className="text-[10px] text-[#cbdaa9] font-mono font-bold uppercase tracking-widest">ANNUAL REPORT PROJECTION</p>
              <h3 className="text-xl font-display font-medium">Your Carbon Exposure</h3>
            </div>

            {/* Giant Metric */}
            <div className="my-6 space-y-1 py-4 border-b border-t border-[#cbdaa9]/20">
              <span className="text-[10px] text-[#cbdaa9] font-mono tracking-wider block uppercase">TOTAL ANNUAL CO2 OUTFLOW</span>
              <div className="flex items-baseline space-x-2">
                <span className="text-5xl md:text-6xl font-extrabold font-mono text-white tracking-tight">
                  {result.totalEmissions.toFixed(1)}
                </span>
                <span className="text-sm font-semibold text-[#cbdaa9]">Metric Tons CO2e</span>
              </div>
              
              {/* Trees Equivalent Sub-indicator */}
              <div className="flex items-center space-x-1.5 text-xs text-emerald-300 mt-2">
                <Leaf className="h-4 w-4 shrink-0" />
                <span>Requires planting <strong>{result.treesEquivalent.toLocaleString()}</strong> native evergreen trees to neutralize.</span>
              </div>
            </div>

            {/* Source Breakdown percentages */}
            <div className="space-y-3">
              <h4 className="text-[10px] font-mono uppercase text-[#cbdaa9]">Emissions by Source Category:</h4>
              
              <div className="space-y-2 text-xs">
                {/* Electricity */}
                <div className="space-y-1">
                  <div className="flex justify-between text-gray-300">
                    <span>Electric Grid (Scope 2)</span>
                    <span className="font-mono font-bold text-white">{pctElectricity}%</span>
                  </div>
                  <div className="w-full bg-[#1b4332] h-1.5 rounded-full overflow-hidden">
                    <div style={{ width: `${pctElectricity}%` }} className="bg-emerald-400 h-full rounded-full transition-all duration-300"></div>
                  </div>
                </div>

                {/* Diesel Generators */}
                <div className="space-y-1">
                  <div className="flex justify-between text-gray-300">
                    <span>Diesel Backups (Scope 1)</span>
                    <span className="font-mono font-bold text-white">{pctDiesel}%</span>
                  </div>
                  <div className="w-full bg-[#1b4332] h-1.5 rounded-full overflow-hidden">
                    <div style={{ width: `${pctDiesel}%` }} className="bg-amber-400 h-full rounded-full transition-all duration-300"></div>
                  </div>
                </div>

                {/* Air travel & Paper */}
                <div className="space-y-1">
                  <div className="flex justify-between text-gray-300">
                    <span>Flights, Waste, Paper (Scope 3)</span>
                    <span className="font-mono font-bold text-white">{(Number(pctAirTravel) + Number(pctWaste) + Number(pctPaper))}%</span>
                  </div>
                  <div className="w-full bg-[#1b4332] h-1.5 rounded-full overflow-hidden">
                    <div style={{ width: `${(Number(pctAirTravel) + Number(pctWaste) + Number(pctPaper))}%` }} className="bg-blue-400 h-full rounded-full transition-all duration-300"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Footer Panel (Indian Rupee offsets) */}
            <div className="mt-8 pt-6 border-t border-[#cbdaa9]/20 space-y-4">
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-[9px] text-[#cbdaa9] font-mono uppercase tracking-widest">EST. OFFSETS RETIREMENT BUDGET</p>
                  <p className="text-2xl font-bold font-mono text-emerald-300">
                    ₹{Math.round(result.offsetCostINR).toLocaleString()} 
                    <span className="text-xs font-normal text-gray-400 font-sans ml-1">/year @ avg</span>
                  </p>
                </div>
                <div className="text-right text-xs text-gray-400 font-mono">
                  ${Math.round(result.offsetCostUSD).toLocaleString()} USD
                </div>
              </div>

              <button
                onClick={handleApplyToInquiry}
                disabled={showAppliedSuccess}
                className={`w-full py-4 rounded-xl text-center text-sm font-bold flex justify-center items-center space-x-2 transition shadow-md active:scale-95 cursor-pointer ${
                  showAppliedSuccess 
                    ? 'bg-emerald-500 text-white'
                    : 'bg-[#cbdaa9] text-[#1b4332] hover:bg-white hover:text-[#1b4332]'
                }`}
              >
                <ShoppingCart className="h-4.5 w-4.5" />
                <span>
                  {showAppliedSuccess ? '✓ Applied to Custom inquiry!' : 'Link and Order Direct Allocation'}
                </span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
