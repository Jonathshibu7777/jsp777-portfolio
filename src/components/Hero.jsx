import React, { useEffect, useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { personalInfo } from '../data/mock';
import { Button } from './ui/button';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [logoRotation, setLogoRotation] = useState({ x: 0, y: 0 });
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const heroRef = useRef(null);

  const roles = [
    'Professor',
    'Cybersecurity Enthusiast',
    'Ethical Hacker',
    'Developer'
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setMousePosition({ x: clientX, y: clientY });
      
      // Calculate rotation for 3D logo effect
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const rotateX = (clientY - centerY) / 30;
        const rotateY = (centerX - clientX) / 30;
        setLogoRotation({ x: rotateX, y: rotateY });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Typing animation effect
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    if (!isDeleting && displayedRole === currentRole) {
      // Pause before deleting
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayedRole === '') {
      // Move to next role
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    // Type or delete character
    const timeout = setTimeout(() => {
      setDisplayedRole((prev) => {
        if (isDeleting) {
          return prev.slice(0, -1);
        } else {
          return currentRole.slice(0, prev.length + 1);
        }
      });
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedRole, isDeleting, currentRoleIndex]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f]"
      style={{ perspective: '1000px' }}
    >
      {/* Layered Animated Background Grids for depth */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          transform: `translate3d(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px, 0) rotateX(60deg)`,
          transformStyle: 'preserve-3d'
        }}></div>
      </div>
      
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#a855f7 1px, transparent 1px), linear-gradient(90deg, #a855f7 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          transform: `translate3d(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px, -50px)`,
          transformStyle: 'preserve-3d'
        }}></div>
      </div>

      {/* 3D Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              background: i % 2 === 0 ? '#06b6d4' : '#a855f7',
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              transform: `translateZ(${Math.random() * 100}px)`,
              boxShadow: `0 0 ${10 + Math.random() * 20}px currentColor`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto" style={{ transformStyle: 'preserve-3d' }}>
        {/* 3D Logo with Advanced Glow Effect */}
        <div className={`mb-12 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="relative inline-block group">
            {/* Multiple glow layers for depth */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full blur-3xl opacity-60 group-hover:opacity-90 transition-opacity duration-500 animate-pulse"
              style={{ transform: 'translateZ(-30px)' }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-500"
              style={{ transform: 'translateZ(-20px)', animationDelay: '0.5s' }}
            ></div>
            
            <img
              src={personalInfo.logo}
              alt="Cybernetic Logo"
              className="relative w-48 h-48 md:w-64 md:h-64 object-contain mx-auto drop-shadow-2xl transition-transform duration-300 ease-out"
              style={{
                filter: 'drop-shadow(0 0 40px rgba(168, 85, 247, 0.9)) drop-shadow(0 0 80px rgba(59, 130, 246, 0.7)) drop-shadow(0 0 120px rgba(6, 182, 212, 0.5))',
                animation: 'float 4s ease-in-out infinite',
                transform: `rotateX(${logoRotation.x}deg) rotateY(${logoRotation.y}deg) translateZ(50px)`,
                transformStyle: 'preserve-3d'
              }}
            />
            
            {/* Rotating ring effect */}
            <div className="absolute inset-0 border-2 border-cyan-500/30 rounded-full animate-spin-slow"
              style={{ transform: 'translateZ(-10px)', animationDuration: '20s' }}
            ></div>
          </div>
        </div>

        {/* Animated Text Introduction */}
        <div className={`mb-8 transition-all duration-1000 delay-300 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
          style={{
            transformStyle: 'preserve-3d',
            transform: 'translateZ(30px)'
          }}
        >
          {/* "I'm J$P777" */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{
              fontFamily: 'Orbitron, sans-serif',
              textShadow: '0 0 30px rgba(168, 85, 247, 0.9), 0 0 60px rgba(59, 130, 246, 0.7)'
            }}
          >
            <span className="text-gray-300">I'm </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-600 animate-gradient inline-block"
              style={{
                backgroundSize: '200% 200%'
              }}
            >
              J$P777
            </span>
            <span className="text-gray-300">, and I am</span>
          </h1>

          {/* Typing Animation for Roles */}
          <div className="text-2xl md:text-4xl lg:text-5xl font-bold mb-8 h-16 md:h-20 flex items-center justify-center"
            style={{
              fontFamily: 'Orbitron, sans-serif'
            }}
          >
            <span className="text-cyan-400"
              style={{
                textShadow: '0 0 20px rgba(6, 182, 212, 0.8), 0 0 40px rgba(59, 130, 246, 0.5)'
              }}
            >
              {displayedRole}
              <span className="inline-block w-1 h-8 md:h-12 bg-cyan-400 ml-1 animate-pulse"
                style={{
                  boxShadow: '0 0 10px rgba(6, 182, 212, 0.8)'
                }}
              ></span>
            </span>
          </div>

          {/* Welcome Message */}
          <p className="text-lg md:text-xl text-purple-300 mb-10 animate-pulse"
            style={{
              textShadow: '0 0 15px rgba(168, 85, 247, 0.6)',
              fontFamily: 'Orbitron, sans-serif'
            }}
          >
            Welcome to another part of me!
          </p>
        </div>

        {/* 3D CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
          style={{ transform: 'translateZ(40px)', transformStyle: 'preserve-3d' }}
        >
          <Button
            onClick={scrollToProjects}
            className="group relative px-8 py-6 text-lg font-semibold bg-transparent border-2 border-purple-500 text-purple-300 hover:text-white overflow-hidden transition-all duration-300 hover:scale-110 active:scale-95"
            style={{ 
              fontFamily: 'Orbitron, sans-serif',
              boxShadow: '0 10px 30px rgba(168, 85, 247, 0.3)',
              transform: 'translateZ(0)',
              transformStyle: 'preserve-3d'
            }}
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
              style={{ transform: 'translateZ(-5px) scaleX(0)', transformStyle: 'preserve-3d' }}
            ></div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
              boxShadow: '0 0 30px rgba(168, 85, 247, 0.9), 0 0 60px rgba(59, 130, 246, 0.6), inset 0 0 20px rgba(255, 255, 255, 0.1)'
            }}></div>
          </Button>
          
          <Button
            onClick={scrollToContact}
            className="group relative px-8 py-6 text-lg font-semibold bg-transparent border-2 border-cyan-500 text-cyan-300 hover:text-white overflow-hidden transition-all duration-300 hover:scale-110 active:scale-95"
            style={{ 
              fontFamily: 'Orbitron, sans-serif',
              boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)',
              transform: 'translateZ(0)',
              transformStyle: 'preserve-3d'
            }}
          >
            <span className="relative z-10">Contact Me</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
              boxShadow: '0 0 30px rgba(59, 130, 246, 0.9), 0 0 60px rgba(168, 85, 247, 0.6), inset 0 0 20px rgba(255, 255, 255, 0.1)'
            }}></div>
          </Button>
        </div>
      </div>

      {/* 3D Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
        style={{ transform: 'translateX(-50%) translateZ(20px)' }}
      >
        <ChevronDown className="w-8 h-8 text-cyan-400" style={{
          filter: 'drop-shadow(0 0 15px rgba(34, 211, 238, 0.9))'
        }} />
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: rotateX(${logoRotation.x}deg) rotateY(${logoRotation.y}deg) translateY(0px) translateZ(50px); }
          50% { transform: rotateX(${logoRotation.x}deg) rotateY(${logoRotation.y}deg) translateY(-30px) translateZ(60px); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          animation: gradient 4s ease infinite;
        }
        @keyframes spin-slow {
          from { transform: translateZ(-10px) rotate(0deg); }
          to { transform: translateZ(-10px) rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;