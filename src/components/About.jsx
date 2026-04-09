import React, { useEffect, useRef, useState } from 'react';
import { User, Briefcase, MapPin } from 'lucide-react';
import { personalInfo } from '../data/mock';
import { Card } from './ui/card';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cardTransform, setCardTransform] = useState({ rotateX: 0, rotateY: 0 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    setCardTransform({ rotateX, rotateY });
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setCardTransform({ rotateX: 0, rotateY: 0 });
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-20 px-4 md:px-8 bg-gradient-to-b from-[#0a0a0f] to-[#1a1a2e] overflow-hidden"
      style={{ perspective: '2000px' }}
    >
      {/* Background Pattern with depth */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #a855f7 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          transform: 'translateZ(-50px)'
        }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Title */}
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
          style={{ transformStyle: 'preserve-3d', transform: 'translateZ(30px)' }}
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400"
            style={{ 
              fontFamily: 'Orbitron, sans-serif',
              textShadow: '0 10px 30px rgba(168, 85, 247, 0.5)'
            }}
          >
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"
            style={{ boxShadow: '0 0 20px rgba(168, 85, 247, 0.8)' }}
          ></div>
        </div>

        {/* 3D Main Card */}
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{
            transformStyle: 'preserve-3d',
            transform: `rotateX(${cardTransform.rotateX}deg) rotateY(${cardTransform.rotateY}deg) translateZ(20px)`
          }}
        >
          <Card className="relative p-8 md:p-12 bg-[#1a1a2e]/60 backdrop-blur-xl border-2 border-purple-500/30 rounded-2xl transition-all duration-300 hover:border-purple-500/60"
            style={{
              boxShadow: '0 30px 80px rgba(168, 85, 247, 0.3), 0 20px 60px rgba(0, 0, 0, 0.5), inset 0 0 60px rgba(168, 85, 247, 0.05)',
              transformStyle: 'preserve-3d'
            }}
          >
            {/* Dynamic light based on mouse position */}
            <div 
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(168, 85, 247, 0.2), transparent 60%)`,
                transform: 'translateZ(10px)'
              }}
            ></div>
            
            {/* Multiple glow layers for depth */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/10 to-cyan-600/10 blur-xl"
              style={{ transform: 'translateZ(-20px)' }}
            ></div>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-600/5 to-purple-600/5 blur-2xl"
              style={{ transform: 'translateZ(-30px)' }}
            ></div>

            <div className="relative z-10 grid md:grid-cols-3 gap-8" style={{ transformStyle: 'preserve-3d' }}>
              {/* Bio Section */}
              <div className="md:col-span-2" style={{ transform: 'translateZ(30px)' }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-purple-500/20 rounded-lg border border-purple-500/40"
                    style={{
                      boxShadow: '0 0 30px rgba(168, 85, 247, 0.4)',
                      transform: 'translateZ(15px)'
                    }}
                  >
                    <User className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-purple-300" 
                    style={{ 
                      fontFamily: 'Orbitron, sans-serif',
                      textShadow: '0 0 20px rgba(168, 85, 247, 0.5)'
                    }}
                  >
                    Who I Am
                  </h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-4"
                  style={{ transform: 'translateZ(20px)' }}
                >
                  {personalInfo.bio}
                </p>
                <p className="text-gray-400 leading-relaxed"
                  style={{ transform: 'translateZ(15px)' }}
                >
                  With a strong foundation in programming and a passion for security, I combine theoretical knowledge with practical skills to tackle real-world cybersecurity challenges. My journey in tech is driven by curiosity and a commitment to continuous learning.
                </p>
              </div>

              {/* 3D Info Cards */}
              <div className="space-y-4" style={{ transform: 'translateZ(40px)', transformStyle: 'preserve-3d' }}>
                <div className="p-4 bg-gradient-to-br from-purple-900/30 to-cyan-900/30 rounded-xl border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 hover:scale-105"
                  style={{ 
                    boxShadow: '0 10px 40px rgba(168, 85, 247, 0.2)',
                    transform: 'translateZ(20px)',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Briefcase className="w-5 h-5 text-cyan-400" style={{ transform: 'translateZ(10px)' }} />
                    <h4 className="text-sm font-semibold text-cyan-300" 
                      style={{ 
                        fontFamily: 'Orbitron, sans-serif',
                        transform: 'translateZ(8px)'
                      }}
                    >
                      Current Role
                    </h4>
                  </div>
                  <p className="text-gray-300 text-sm" style={{ transform: 'translateZ(5px)' }}>Professor</p>
                  <p className="text-gray-400 text-xs" style={{ transform: 'translateZ(3px)' }}>Rajagiri College</p>
                </div>

                <div className="p-4 bg-gradient-to-br from-cyan-900/30 to-purple-900/30 rounded-xl border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300 hover:scale-105"
                  style={{ 
                    boxShadow: '0 10px 40px rgba(59, 130, 246, 0.2)',
                    transform: 'translateZ(15px)',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin className="w-5 h-5 text-purple-400" style={{ transform: 'translateZ(10px)' }} />
                    <h4 className="text-sm font-semibold text-purple-300" 
                      style={{ 
                        fontFamily: 'Orbitron, sans-serif',
                        transform: 'translateZ(8px)'
                      }}
                    >
                      Location
                    </h4>
                  </div>
                  <p className="text-gray-300 text-sm" style={{ transform: 'translateZ(5px)' }}>{personalInfo.location}</p>
                </div>

                <div className="p-4 bg-gradient-to-br from-purple-900/30 to-cyan-900/30 rounded-xl border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 hover:scale-105"
                  style={{ 
                    boxShadow: '0 10px 40px rgba(168, 85, 247, 0.2)',
                    transform: 'translateZ(10px)',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-5 h-5 flex items-center justify-center" style={{ transform: 'translateZ(10px)' }}>
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"
                        style={{ boxShadow: '0 0 15px rgba(74, 222, 128, 0.8)' }}
                      ></div>
                    </div>
                    <h4 className="text-sm font-semibold text-green-300" 
                      style={{ 
                        fontFamily: 'Orbitron, sans-serif',
                        transform: 'translateZ(8px)'
                      }}
                    >
                      Status
                    </h4>
                  </div>
                  <p className="text-gray-300 text-sm" style={{ transform: 'translateZ(5px)' }}>Available for Projects</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;