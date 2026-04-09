import React from 'react';
import { Heart } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-t from-[#0a0a0f] to-[#1a1a2e] border-t border-purple-500/30 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #a855f7 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-col items-center gap-4">
          {/* Name/Logo */}
          <div className="text-center">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 mb-2"
              style={{ fontFamily: 'Orbitron, sans-serif' }}
            >
              {personalInfo.name}
            </h3>
            <p className="text-gray-400 text-sm">{personalInfo.title}</p>
          </div>

          {/* Divider */}
          <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>© {currentYear} Made with</span>
            <Heart className="w-4 h-4 text-purple-400 fill-purple-400 animate-pulse" />
            <span>by Jonath</span>
          </div>

          {/* Additional Info */}
          <p className="text-xs text-gray-500 text-center max-w-md">
            Securing the digital world, one line of code at a time.
          </p>
        </div>
      </div>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent blur-sm"></div>
    </footer>
  );
};

export default Footer;
