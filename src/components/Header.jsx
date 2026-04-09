import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Random glitch effect
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 5000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(glitchInterval);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-purple-500/30 shadow-lg' 
        : 'bg-transparent'
    }`}
      style={{
        boxShadow: isScrolled ? '0 0 30px rgba(168, 85, 247, 0.3)' : 'none'
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Animated Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="relative text-2xl md:text-3xl font-bold transition-all duration-300 group"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            <span className={`relative inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 ${
              glitchActive ? 'animate-glitch' : ''
            }`}
              style={{
                textShadow: '0 0 30px rgba(168, 85, 247, 0.8), 0 0 60px rgba(59, 130, 246, 0.5)',
                backgroundSize: '200% 200%',
                animation: 'gradient-shift 3s ease infinite'
              }}
            >
              J$P777
            </span>
            
            {/* Glitch layers */}
            {glitchActive && (
              <>
                <span className="absolute top-0 left-0 text-cyan-400 opacity-70" style={{ transform: 'translate(-2px, -2px)' }}>J$P777</span>
                <span className="absolute top-0 left-0 text-purple-400 opacity-70" style={{ transform: 'translate(2px, 2px)' }}>J$P777</span>
              </>
            )}
            
            {/* Scanning line effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ animation: 'scan 2s linear infinite' }}
            ></div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-semibold group"
                style={{ fontFamily: 'Orbitron, sans-serif' }}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 bg-transparent border-2 border-purple-500/50 text-purple-400 hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 p-4 bg-[#1a1a2e]/95 backdrop-blur-xl border-2 border-purple-500/30 rounded-xl"
            style={{
              boxShadow: '0 0 30px rgba(168, 85, 247, 0.3)'
            }}
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-semibold py-2 px-4 rounded-lg hover:bg-purple-500/20"
                  style={{ fontFamily: 'Orbitron, sans-serif' }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <style>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
        @keyframes glitch {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
        }
        .animate-glitch {
          animation: glitch 0.3s linear;
        }
      `}</style>
    </header>
  );
};

export default Header;