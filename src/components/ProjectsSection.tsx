import React, { useState } from 'react';
import { CarbonProject } from '../types';
import { INDIAN_PROJECTS } from '../data/projects';
import { Search, MapPin, Tag, ShieldAlert, ArrowUpRight, CheckCircle2, MessageSquare, Plus } from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProjectForInquiry: (projectName: string, estimatedCredits?: number) => void;
}

export default function ProjectsSection({ onSelectProjectForInquiry }: ProjectsSectionProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [selectedStandard, setSelectedStandard] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<CarbonProject | null>(null);

  // Filter project types & standards dynamically
  const projectTypes = ['All', 'Solar', 'Wind', 'Forestry', 'Biomass', 'Cookstoves', 'Waste-to-Energy'];
  const standards = ['All', 'VCS (Verra)', 'Gold Standard', 'BEE (Indian Carbon Market)'];

  const filteredProjects = INDIAN_PROJECTS.filter((project) => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.developer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'All' || project.type === selectedType;
    const matchesStandard = selectedStandard === 'All' || project.standard === selectedStandard;

    return matchesSearch && matchesType && matchesStandard;
  });

  const triggerWhatsAppForProject = (project: CarbonProject) => {
    const text = encodeURIComponent(
      `Hello BharatCarbon! I would like to inquire about procuring verified offsets from: "${project.name}" (ID: ${project.id}). Please send pricing and allocation availability.`
    );
    window.open(`https://wa.me/919999999999?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const handleBookInquiry = (project: CarbonProject) => {
    onSelectProjectForInquiry(project.name, 1000);
    // Scroll to contact form
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#f4f6f0]/30 border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header content */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#1b4332] font-mono">Verified Portfolio</h2>
            <h3 className="text-3xl sm:text-4xl font-display font-medium text-[#0f251c] tracking-tight">
              Indian Sourced Carbon Projects
            </h3>
            <p className="text-gray-500 text-sm max-w-xl">
              All listed projects have completed rigorous vetting and independent auditing. Review registries, vintages, and prices.
            </p>
          </div>
          
          <div className="bg-[#1b4332]/5 text-[#1b4332] px-4 py-2 rounded-2xl border border-[#cbdaa9]/30 text-xs font-mono">
            <strong>Standardized Pricing</strong> • Verified Retires
          </div>
        </div>

        {/* Filters and Search Bar Container */}
        <div className="bg-white rounded-3xl p-5 md:p-6 shadow-sm border border-gray-100 space-y-4 mb-10">
          
          {/* Row 1: Search & Type */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            
            {/* Search Input */}
            <div className="lg:col-span-5 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search projects, developers, location..."
                className="w-full bg-gray-50 border border-gray-100 placeholder-gray-400 text-sm pl-11 pr-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1b4332]/20 focus:border-[#1b4332] transition"
              />
            </div>

            {/* Type Filter Buttons */}
            <div className="lg:col-span-7 flex flex-wrap gap-2 items-center">
              <span className="text-xs font-mono font-bold text-gray-400 uppercase mr-1">Project Type:</span>
              <div className="flex flex-wrap gap-1.5">
                {projectTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`text-xs px-3 py-2 rounded-full font-medium transition cursor-pointer ${
                      selectedType === type
                        ? 'bg-[#1b4332] text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Row 2: Standard Filter */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-gray-50">
            <span className="text-xs font-mono font-bold text-gray-400 uppercase mr-1">Certification Standard:</span>
            <div className="flex flex-wrap gap-1.5">
              {standards.map((std) => (
                <button
                  key={std}
                  onClick={() => setSelectedStandard(std)}
                  className={`text-xs px-3 py-1.5 rounded-lg font-medium border transition cursor-pointer ${
                    selectedStandard === std
                      ? 'border-[#1b4332] bg-[#1b4332]/5 text-[#1b4332] font-semibold'
                      : 'border-gray-100 bg-white text-gray-500 hover:border-gray-200'
                  }`}
                >
                  {std}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Missing results view */}
        {filteredProjects.length === 0 && (
          <div className="bg-white rounded-3xl p-12 text-center border border-gray-100 space-y-4">
            <ShieldAlert className="h-12 w-12 text-[#cbdaa9] mx-auto" />
            <h4 className="text-lg font-bold text-[#0f251c]">No Projects Match Filters</h4>
            <p className="text-gray-500 text-sm max-w-md mx-auto">
              Try updating or resetting your search term or standard selection. Or reach out to our desk for custom project origination.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedType('All');
                setSelectedStandard('All');
              }}
              className="bg-[#1b4332] text-white px-5 py-2 rounded-full text-xs font-semibold hover:bg-opacity-95"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article 
              key={project.id}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 flex flex-col justify-between hover:shadow-lg transition-all duration-300 group"
              id={`project-${project.id}`}
            >
              {/* Card top half */}
              <div>
                {/* Image panel */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  {/* Floating badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                    <span className="bg-white/90 backdrop-blur text-[#1b4332] font-mono text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm border border-[#cbdaa9]/20">
                      {project.type}
                    </span>
                    <span className="bg-[#0f251c] text-white font-mono text-[9px] font-bold px-2.5 py-1 rounded-full">
                      {project.standard}
                    </span>
                  </div>
                  
                  {/* Floating price indicator */}
                  <div className="absolute bottom-3 right-3 bg-white text-gray-900 border border-gray-100 px-3 py-1.5 rounded-xl shadow-md text-right">
                    <p className="text-[8px] text-gray-400 font-bold uppercase tracking-widest font-mono">OFFERING PRICE</p>
                    <p className="text-sm font-bold font-mono text-[#1b4332]">₹{project.pricePerTonINR} <span className="text-xs text-gray-400">/ Ton</span></p>
                  </div>
                </div>

                {/* Info Text Area */}
                <div className="p-5 md:p-6 space-y-4">
                  {/* Location and vintage */}
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="flex items-center text-gray-600">
                      <MapPin className="h-3.5 w-3.5 mr-1 text-[#cbdaa9]" />
                      {project.location}, {project.state}
                    </span>
                    <span className="bg-gray-100 px-2 py-0.5 rounded text-[10px] font-mono">
                      Vintage {project.vintage}
                    </span>
                  </div>

                  {/* Project Name */}
                  <h4 className="text-base font-bold text-[#0f251c] leading-tight font-display hover:text-[#1b4332] transition">
                    {project.name}
                  </h4>

                  {/* Paragraph */}
                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Key Benefits Pills */}
                  <div className="pt-2">
                    <p className="text-[10px] uppercase tracking-wider font-bold text-gray-400 font-mono mb-1.5">Key SDG Benefits:</p>
                    <div className="flex flex-wrap gap-1">
                      {project.benefits.slice(0, 2).map((benefit, bIdx) => (
                        <span key={bIdx} className="text-[10px] bg-[#f4f6f0] text-gray-700 px-2.5 py-1 rounded-md border border-[#cbdaa9]/20 leading-tight">
                          {benefit}
                        </span>
                      ))}
                      {project.benefits.length > 2 && (
                        <span className="text-[10px] text-gray-400 px-1 py-1 font-mono font-bold">
                          +{project.benefits.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

              </div>

              {/* Card Footer Actions */}
              <div className="p-5 border-t border-gray-50 bg-[#f4f6f0]/20 flex items-center justify-between gap-2.5">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 hover:border-[#1b4332]/40 text-xs font-semibold py-2.5 px-4 rounded-xl flex items-center gap-1 transition cursor-pointer"
                >
                  <span>More Info</span>
                  <Plus className="h-3.5 w-3.5" />
                </button>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => triggerWhatsAppForProject(project)}
                    title="Inquire directly on WhatsApp"
                    className="bg-emerald-500 hover:bg-emerald-600 text-white p-2.5 rounded-xl transition hover:shadow cursor-pointer"
                  >
                    <MessageSquare className="h-4 w-4" />
                  </button>
                  
                  <button
                    onClick={() => handleBookInquiry(project)}
                    className="bg-[#1b4332] hover:bg-[#153426] text-white text-xs font-semibold py-2.5 px-4 rounded-xl flex items-center gap-1 transition shadow-sm hover:shadow active:scale-95 cursor-pointer"
                  >
                    <span>Reserve Draft</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Detail Modal Dialog */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl border border-gray-100 animate-slide-in-up">
            
            {/* Header Image Cover */}
            <div className="relative h-48 md:h-56 bg-[#1b4332]">
              <img
                src={activeModalProject.image}
                alt={activeModalProject.name}
                className="w-full h-full object-cover opacity-60"
                referrerPolicy="no-referrer"
              />
              {/* Badges Overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="bg-[#0f251c] text-white font-mono text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {activeModalProject.standard}
                  </span>
                  <button
                    onClick={() => setActiveModalProject(null)}
                    className="bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition w-8 h-8 flex items-center justify-center font-bold"
                  >
                    ✕
                  </button>
                </div>
                
                <div className="space-y-1.5 text-white">
                  <span className="text-[10px] bg-emerald-500/80 backdrop-blur font-mono px-2.5 py-0.5 rounded font-bold uppercase tracking-widest">{activeModalProject.type}</span>
                  <h3 className="text-xl md:text-2xl font-bold font-display leading-tight">{activeModalProject.name}</h3>
                </div>
              </div>
            </div>

            {/* Modal content body */}
            <div className="p-6 md:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
              {/* Technical Specifications Bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <div>
                  <p className="text-[9px] text-gray-400 font-mono uppercase">VINTAGE</p>
                  <p className="text-sm font-bold text-gray-900 font-mono">{activeModalProject.vintage}</p>
                </div>
                <div>
                  <p className="text-[9px] text-gray-400 font-mono uppercase">AVAILABLE SUPPLY</p>
                  <p className="text-sm font-bold text-gray-900 font-mono">{activeModalProject.creditSupply.toLocaleString()} MT</p>
                </div>
                <div>
                  <p className="text-[9px] text-gray-400 font-mono uppercase">PRICE TON (INR)</p>
                  <p className="text-sm font-bold text-[#1b4332] font-mono">₹{activeModalProject.pricePerTonINR}</p>
                </div>
                <div>
                  <p className="text-[9px] text-gray-400 font-mono uppercase">STATE</p>
                  <p className="text-sm font-bold text-gray-900">{activeModalProject.state}</p>
                </div>
              </div>

              {/* Full Description */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase text-gray-400 tracking-wider font-mono">Full project scope</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {activeModalProject.description}
                </p>
              </div>

              {/* Sustainable Development Goals benefits list */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase text-gray-400 tracking-wider font-mono">Community & Environmental co-benefits</h4>
                <ul className="space-y-2.5">
                  {activeModalProject.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <CheckCircle2 className="h-5 w-5 text-emerald-800 mr-2 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Developer Attribution */}
              <div className="pt-4 border-t border-gray-100 flex justify-between items-center text-xs text-gray-400">
                <span>PROJECT DEVELOPER</span>
                <span className="font-semibold text-gray-700 font-mono">{activeModalProject.developer}</span>
              </div>
            </div>

            {/* Modal actions footer */}
            <div className="p-5 md:p-6 bg-gray-50 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-center sm:text-left">
                <p className="text-[10px] text-gray-400 font-mono">PORTFOLIO CODE</p>
                <p className="text-xs font-mono font-bold text-gray-800">{activeModalProject.id}</p>
              </div>

              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <button
                  onClick={() => triggerWhatsAppForProject(activeModalProject)}
                  className="flex-1 sm:flex-none bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-5 rounded-xl text-sm flex items-center justify-center gap-1.5 transition"
                >
                  <MessageSquare className="h-4.5 w-4.5" />
                  <span>WhatsApp Desk</span>
                </button>
                <button
                  onClick={() => {
                    handleBookInquiry(activeModalProject);
                    setActiveModalProject(null);
                  }}
                  className="flex-1 sm:flex-none bg-[#1b4332] hover:bg-[#153426] text-white font-semibold py-3 px-6 rounded-xl text-sm flex items-center justify-center gap-1.5 transition"
                >
                  <span>Request Allocation</span>
                  <ArrowUpRight className="h-4.5 w-4.5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
