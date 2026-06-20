export interface CarbonProject {
  id: string;
  name: string;
  location: string;
  state: string;
  type: 'Solar' | 'Wind' | 'Forestry' | 'Biomass' | 'Cookstoves' | 'Waste-to-Energy';
  description: string;
  vintage: string;
  pricePerTonINR: number;
  pricePerTonUSD: number;
  creditSupply: number; // in metric tons CO2e
  developer: string;
  image: string;
  benefits: string[];
  standard: 'VCS (Verra)' | 'Gold Standard' | 'GCC' | 'BEE (Indian Carbon Market)';
}

export interface CalculatorInput {
  electricityKWh: number;
  dieselLitres: number;
  airTravelHours: number;
  wasteKg: number;
  paperTons: number;
}

export interface FootprintResult {
  emissionsElectricity: number;
  emissionsDiesel: number;
  emissionsAirTravel: number;
  emissionsWaste: number;
  emissionsPaper: number;
  totalEmissions: number; // tons CO2e per year
  offsetCostINR: number;
  offsetCostUSD: number;
  treesEquivalent: number;
}

export interface InquiryForm {
  name: string;
  company: string;
  email: string;
  phone: string;
  projectInterest: string;
  estimatedCredits: number;
  message: string;
}
