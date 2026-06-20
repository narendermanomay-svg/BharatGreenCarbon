import React, { useState } from 'react';
import { MessageSquare, X, Send, Leaf } from 'lucide-react';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [userMsg, setUserMsg] = useState('');

  const QUICK_PROMPTS = [
    { text: '🌱 Offset commercial SME footprint', draft: 'Namaste. I used your emissions estimator and would like to offset our SME corporate footprint. Please send pricing.' },
    { text: '☀️ Thar Desert Solar offsets', draft: 'Hello BharatCarbon. I would like to purchase certified solar credits from your Bhadla Jodhpur project.' },
    { text: '🌍 Rural Cookstoves in Gujarat', draft: 'Hello. I would like to invest in voluntary credits originating from your tribal high-efficiency cookstoves distribution in Gujarat.' }
  ];

  const handleSendDraft = (draftText: string) => {
    const textToSend = encodeURIComponent(draftText || userMsg || "Namaste BharatCarbon! I would like to learn more about purchasing verified carbon credits.");
    const waNumber = '919999999999';
    window.open(`https://wa.me/${waNumber}?text=${textToSend}`, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3" id="whatsapp-widget">
      
      {/* Quick Desk Chat Panel Bubble */}
      {isOpen && (
        <div className="bg-white rounded-3xl w-80 md:w-96 shadow-2xl border border-gray-100 overflow-hidden flex flex-col justify-between animate-slide-in-up">
          
          {/* Support Agent Header */}
          <div className="bg-[#1b4332] text-white p-4 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              {/* Fake avatar badge with green online dot */}
              <div className="relative h-10 w-10 bg-emerald-900 rounded-full flex items-center justify-center border border-[#cbdaa9]/20 text-[#cbdaa9] font-bold">
                <Leaf className="h-5 w-5 fill-[#cbdaa9]" />
                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 bg-green-400 rounded-full border-2 border-[#1b4332]" />
              </div>
              <div>
                <h4 className="text-sm font-bold">BharatCarbon Desk</h4>
                <p className="text-[10px] text-emerald-300">Online • Live Broker Support</p>
              </div>
            </div>
            
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/60 hover:text-white p-1 rounded-full hover:bg-white/10"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Dialog container */}
          <div className="p-4 bg-gray-50 space-y-4 max-h-72 overflow-y-auto">
            {/* Agent introduction */}
            <div className="bg-white p-3 rounded-2xl shadow-sm inline-block text-xs text-gray-700 leading-normal border border-gray-100 max-w-[85%]">
              👋 Namaste! Welcome to BharatCarbon. How can our compliance and voluntary credits brokers assist you today?
            </div>

            {/* Quick Prompts Options */}
            <div className="space-y-2">
              <p className="text-[9px] uppercase font-mono tracking-widest text-[#1b4332] font-semibold">Select a standard inquiry:</p>
              {QUICK_PROMPTS.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendDraft(prompt.draft)}
                  className="w-full text-left p-2.5 bg-white hover:bg-[#cbdaa9]/10 rounded-xl text-xs text-gray-600 font-medium border border-gray-150 transition flex items-center justify-between"
                >
                  <span className="line-clamp-1">{prompt.text}</span>
                  <span className="text-gray-300 font-mono text-[10px]">→</span>
                </button>
              ))}
            </div>
          </div>

          {/* Quick Chat Custom Input box */}
          <div className="p-3 bg-white border-t border-gray-100 flex items-center space-x-2">
            <input
              type="text"
              value={userMsg}
              onChange={(e) => setUserMsg(e.target.value)}
              placeholder="Or type custom draft inquiry..."
              className="flex-1 bg-gray-50 border border-gray-250 text-xs px-3 py-2.5 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#1b4332]"
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSendDraft(userMsg);
              }}
            />
            <button
              onClick={() => handleSendDraft(userMsg)}
              className="bg-[#1b4332] text-white p-2.5 rounded-xl hover:bg-emerald-800 transition"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>

        </div>
      )}

      {/* Floating Launcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all outline-none animate-bounce cursor-pointer group hover:rotate-12"
        style={{ animationDuration: '3s' }}
        aria-label="Open support desk"
      >
        <MessageSquare className="h-6 w-6 fill-white/15" />
      </button>

    </div>
  );
}
