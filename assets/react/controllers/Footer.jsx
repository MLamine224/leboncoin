import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-screen-xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
          <div className="px-5 py-2">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">À propos de LeBoncoin</h3>
            {/* List of links */}
          </div>
          {/* Repeat for each section */}
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          {/* Social media links */}
        </div>
        <p className="mt-8 text-center text-base text-gray-400">&copy; 2024 LeBonCoin. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
