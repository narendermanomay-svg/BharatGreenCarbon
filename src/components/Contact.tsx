import React, { useState, useEffect } from 'react';
import { InquiryForm } from '../types';
import { Phone, Mail, MapPin, Send, MessageSquare, ShieldCheck, Heart, Info, CheckCircle2 } from 'lucide-react';

interface ContactProps {
  preselectedProjectName: string;
  prefilledEstimatedCredits: number;
}

export default function Contact({ preselectedProjectName, prefilledEstimatedCredits }: ContactProps) {
  const [form, setForm] = useState<InquiryForm>({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectInterest: 'Any Verified project (Multi-Source Block)',
    estimatedCredits: 1000,
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [generatedWhatsAppMsg, setGeneratedWhatsAppMsg] = useState('');

  // Update form fields dynamically if parent updates prop values
  useEffect(() => {
    if (preselectedProjectName) {
      setForm(prev => ({
        ...prev,
        projectInterest: preselectedProjectName
      }));
    }
  }, [preselectedProjectName]);

  useEffect(() => {
    if (prefilledEstimatedCredits > 0) {
      setForm(prev => ({
        ...prev,
        estimatedCredits: prefilledEstimatedCredits
      }));
    }
  }, [prefilledEstimatedCredits]);

  // Regenerate dynamic WhatsApp message preview in real-time
  useEffect(() => {
    const text = `Namaste BharatCarbon Desk!
I am interested in procuring verified offsets.
• Buyer Name: ${form.name || '[Your Name]'}
• Company: ${form.company || '[Your Company]'}
• Contact: ${form.phone || '[Your Phone]'} / ${form.email || '[Email]'}
• Target Project: ${form.projectInterest}
• Estimated Credit Volume: ${form.estimatedCredits} Metric Tons of CO2e
• Additional Notes: ${form.message || 'Please send available allocations, registries proof, and dynamic pricing quotation.'}`;
    setGeneratedWhatsAppMsg(text);
  }, [form]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: name === 'estimatedCredits' ? Number(value) : value
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      // Reset form fields lightly
      setForm({
        name: '',
        company: '',
        email: '',
        phone: '',
        projectInterest: 'Any Verified project (Multi-Source Block)',
        estimatedCredits: 1000,
        message: ''
      });
    }, 4500);
  };

  const triggerRealWhatsAppRedirect = () => {
    const urlEncodedText = encodeURIComponent(generatedWhatsAppMsg);
    // Verified placeholder whatsapp number for mock desk
    const waNumber = '919220756669';
    window.open(`https://wa.me/${waNumber}?text=${urlEncodedText}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#1b4332] font-mono">Get in touch</h2>
          <p className="text-3xl sm:text-4xl font-display font-medium text-[#0f251c] tracking-tight">
            Initiate Your Offsets Allocation
          </p>
          <div className="h-1 w-16 bg-[#1b4332] mx-auto rounded"></div>
        </div>

        {/* Form and Ticker Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch" id="contact-interface">
          
          {/* Contact Details & Info Left (5 Cols) */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            
            <div className="space-y-6">
              <h3 className="text-xl font-bold font-display text-[#1b4332]">Direct Trading Desk</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Connect with our certified emissions brokers. We assist with custom portfolio development, high-volume OTC discounts, and corporate retirement ledger operations.
              </p>

              {/* Methods */}
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white text-[#1b4332] rounded-xl shadow-sm border border-gray-100 shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold font-mono text-gray-400 uppercase">TELEPHONE CALL & WHATSAPP</h4>
                    <p className="text-base text-gray-900 font-medium font-mono">+91 9220 756 669</p>
                    <span className="text-[10px] text-emerald-800 bg-[#cbdaa9]/20 font-semibold px-2 py-0.5 rounded font-mono">
                      IST 10:00 - 19:00, Mon-Sat
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white text-[#1b4332] rounded-xl shadow-sm border border-gray-100 shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold font-mono text-gray-400 uppercase">OFFICIAL ESG AGENTS EMAIL</h4>
                    <p className="text-base text-gray-900 font-medium font-mono">info@bharatgreencarbon.com</p>
                    <p className="text-[11px] text-gray-400">Response average: 2 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white text-[#1b4332] rounded-xl shadow-sm border border-gray-100 shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold font-mono text-gray-400 uppercase">DELHI COMPLIANCE OFFICE</h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Barakhamba Road, Connaught Place,<br />
                      New Delhi, Delhi 110001
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Indian Trust Badges */}
            <div className="p-5 bg-[#cbdaa9]/20 border border-[#cbdaa9]/50 rounded-2xl space-y-3">
              <div className="flex items-center space-x-2 text-[#1b4332] font-semibold text-sm">
                <ShieldCheck className="h-5 w-5" />
                <span>Registry Safeguards Guarantee</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Every credit transacted on BharatCarbon undergoes rigorous serial validations and is officially recorded in international registries when retired.
              </p>
            </div>

          </div>

          {/* Form Interactive Input Panel Right (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm flex flex-col justify-between">
            
            {submitted ? (
              <div className="h-full flex flex-col justify-center items-center text-center space-y-4 py-12 animate-fade-in" id="submission-success">
                <div className="bg-emerald-50 text-emerald-800 p-4 rounded-full border border-emerald-200">
                  <CheckCircle2 className="h-10 w-10 text-emerald-600 animate-bounce" />
                </div>
                <h3 className="text-2xl font-bold font-display text-[#1b4332]">Inquiry Logged successfully!</h3>
                <p className="text-sm text-gray-500 max-w-sm">
                  Thank you! An ESG specialist from BharatCarbon has been paged and will reach out to <strong>{form.email || 'your address'}</strong> within 2 hours.
                </p>
                <div className="text-xs text-gray-400 font-mono italic pt-6">
                  "Draft allocations reserved securely."
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-5" id="inquiry-form-fields">
                
                <h3 className="text-lg font-bold text-[#0f251c] font-display pb-2 border-b border-gray-100">
                  Carbon Allocations Proposal Details
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Buyer Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-600 uppercase font-mono">Contact Name *</label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Narender Kumar"
                      className="w-full bg-gray-50 border border-gray-200 text-sm px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1b4332]/20 focus:border-[#1b4332] transition"
                    />
                  </div>

                  {/* Company Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-600 uppercase font-mono">Company Name *</label>
                    <input
                      required
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleInputChange}
                      placeholder="e.g. Manomay Logistics Ltd"
                      className="w-full bg-gray-50 border border-gray-200 text-sm px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1b4332]/20 focus:border-[#1b4332] transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-600 uppercase font-mono">Work Email *</label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleInputChange}
                      placeholder="e.g. partner@manomay.co"
                      className="w-full bg-gray-50 border border-gray-200 text-sm px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1b4332]/20 focus:border-[#1b4332] transition"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-600 uppercase font-mono">Phone Number (with WhatsApp) *</label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +91 92207 56669"
                      className="w-full bg-gray-50 border border-gray-200 text-sm px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1b4332]/20 focus:border-[#1b4332] transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Selected Project */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-600 uppercase font-mono">Project of Interest</label>
                    <select
                      name="projectInterest"
                      value={form.projectInterest}
                      onChange={handleInputChange}
                      className="w-full bg-gray-50 border border-gray-200 text-sm px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1b4332]/20 focus:border-[#1b4332] transition"
                    >
                      <option value="Any Verified project (Multi-Source Block)">Any Verified project (Multi-Source Block)</option>
                      <option value="Thar Desert 500MW Grid-Connected Solar Project">Thar Desert Solar Park (Rajasthan)</option>
                      <option value="Western Ghats Bio-Diverse Afforestation & Conservation initiative">Western Ghats Reforestation (Tamil Nadu)</option>
                      <option value="Punjab Crop Residue to Biogas & Soil enrichment Collective">Punjab Biomass Stubble to Bio-CNG</option>
                      <option value="Tamil Nadu Coastal Wind Energy Alliance">Coastal Wind Alliance (Mu短期andal)</option>
                      <option value="High-Efficiency Clean Cookstoves distribution">Arohan Cookstoves tribal (Gujarat)</option>
                      <option value="Pune Municipal Waste-to-Energy Organic Digester">Pune Waste-to-Energy Digester</option>
                    </select>
                  </div>

                  {/* Quantity requested */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-600 uppercase font-mono">Estimated Credits Target (Tons CO2e)</label>
                    <input
                      type="number"
                      name="estimatedCredits"
                      value={form.estimatedCredits}
                      onChange={handleInputChange}
                      min="1"
                      className="w-full bg-gray-50 border border-gray-200 text-sm px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1b4332]/20 focus:border-[#1b4332] transition font-mono"
                    />
                  </div>
                </div>

                {/* Message comments */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-600 uppercase font-mono">Additional Custom Instructions</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleInputChange}
                    rows={2}
                    placeholder="Enter other specific requirements, target price limit, audit standard, etc..."
                    className="w-full bg-gray-50 border border-gray-200 text-sm px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1b4332]/20 focus:border-[#1b4332] transition"
                  />
                </div>

                {/* Real-time Draft Message Preview */}
                <div className="p-4 bg-gray-50 border border-gray-100 rounded-2xl space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="flex items-center text-[10px] text-emerald-800 font-bold uppercase tracking-wider font-mono">
                      <MessageSquare className="h-3.5 w-3.5 text-emerald-700 mr-1 shrink-0" />
                      <span>Live WhatsApp Auto-draft preview:</span>
                    </span>
                    <span className="text-[9px] text-gray-400 font-mono">Real-time update</span>
                  </div>
                  <pre className="text-[10px] text-gray-500 font-mono leading-tight whitespace-pre-wrap max-h-24 overflow-y-auto bg-white p-3 rounded-lg border border-gray-100">
                    {generatedWhatsAppMsg}
                  </pre>
                </div>

                {/* Form CTA Actions */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-3 pt-2">
                  
                  {/* WhatsApp send button (7 Cols) */}
                  <button
                    type="button"
                    onClick={triggerRealWhatsAppRedirect}
                    className="md:col-span-7 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3.5 px-4 rounded-xl text-sm flex items-center justify-center space-x-2 transition cursor-pointer hover:shadow active:scale-95"
                  >
                    <MessageSquare className="h-4.5 w-4.5 fill-white/10" />
                    <span>Send via WhatsApp Desk</span>
                  </button>

                  {/* Standard Form submit button (5 Cols) */}
                  <button
                    type="submit"
                    className="md:col-span-5 bg-[#1b4332] hover:bg-[#153426] text-white font-semibold py-3.5 px-4 rounded-xl text-sm flex items-center justify-center space-x-2 transition cursor-pointer active:scale-95"
                  >
                    <Send className="h-4 w-4" />
                    <span>Submit E-Form</span>
                  </button>

                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
