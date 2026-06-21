import React from 'react';
import logo from '../logo.png';
import { Linkedin, Instagram, Youtube } from 'lucide-react';
export default function Footer() {
  return (
    <footer className="bg-[#0b2f1e] text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">

        <div>
  <div className="bg-white p-3 rounded-xl inline-block mb-4">
    <img
    src={logo}
    alt="BharatGreenCarbon"
    className="h-16"
  />
  </div>

  <h3 className="text-xl font-bold text-green-400">
    BharatGreenCarbon
  </h3>

  <p className="mt-3 text-gray-300 text-sm">
    Carbon Markets | Climate Action | Net Zero Future
  </p>

  <p className="mt-4 text-gray-400 text-sm leading-6">
    India's leading platform for carbon project development,
    carbon credit trading and sustainability solutions.
  </p>
</div>
  
          <div className="mt-4">
  <span className="bg-green-700 text-white px-4 py-2 rounded-full text-xs font-semibold">
    Trusted Carbon Registry Platform
  </span>
</div>

        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Carbon Projects</li>
          <li>Footprint Calculator</li>
          <li>Contact</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
        </ul> 
            
        </div>

<div>
<div className="flex gap-4 mt-4">
  <Linkedin className="w-5 h-5 text-white hover:text-green-400 cursor-pointer" />
  <Instagram className="w-5 h-5 text-white hover:text-green-400 cursor-pointer" />
  <Youtube className="w-5 h-5 text-white hover:text-green-400 cursor-pointer" />
</div>

  <div className="mt-6">
  <h4 className="font-semibold mb-3">Contact</h4>

  <p className="text-gray-300 text-sm">
    📞 +91 92207 56669
  </p>

  <p className="text-gray-300 text-sm">
    ✉️ info@bharatgreencarbon.com
  </p>
</div>
        <div className="flex gap-4 mt-4">
        <Linkedin className="w-5 h-5 text-white hover:text-green-400 cursor-pointer" />
        <Instagram className="w-5 h-5 text-white hover:text-green-400 cursor-pointer" />
        <Youtube className="w-5 h-5 text-white hover:text-green-400 cursor-pointer" />
        </div>
        
  <h4 className="font-semibold mb-3 mt-6">Location</h4>

  <p className="text-gray-300 text-sm">
    33/1, DSIIDC Industrial Complex,<br />
    Jhilmil Industrial Area, Delhi, India
  </p>
</div>
        
      </div>
      
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
  © 2026 BharatGreenCarbon | Building India's Carbon Future 🌿
      </div>
   
      </footer>
  );
}
