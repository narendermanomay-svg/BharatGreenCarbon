import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#0b2f1e] text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">

        <div>
          <h3 className="text-xl font-bold text-green-400">
            BharatGreenCarbon
          </h3>
          <p className="mt-3 text-gray-300 text-sm">
            Carbon Markets | Climate Action | Net Zero Future
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Carbon Projects</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <p className="text-gray-300 text-sm">
            📞 +91 92207 56669
          </p>
          <p className="text-gray-300 text-sm">
            ✉️ info@bharatgreencarbon.com
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Location</h4>
          <p className="text-gray-300 text-sm">
            33/1, DSIIDC Industrial Complex, Jhilmil Industrial area, Delhi, India
          </p>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm">
        © 2026 BharatGreenCarbon. All Rights Reserved.
      </div>
    </footer>
  );
}
