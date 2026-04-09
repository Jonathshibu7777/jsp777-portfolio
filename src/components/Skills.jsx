import React, { useEffect, useRef, useState } from 'react';
import { skills } from '../data/mock';
import { Card } from './ui/card';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedLevels, setAnimatedLevels] = useState({});
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [cardTransforms, setCardTransforms] = useState({});
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skill levels
          skills.forEach((skill, index) => {
            setTimeout(() => {
              setAnimatedLevels(prev => ({ ...prev, [skill.name]: skill.level }));
            }, index * 100);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e, skillName) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;
    
    setCardTransforms(prev => ({
      ...prev,
      [skillName]: { rotateX, rotateY, x, y }
    }));
  };

  const handleMouseLeave = (skillName) => {
    setCardTransforms(prev => ({
      ...prev,
      [skillName]: { rotateX: 0, rotateY: 0, x: 0, y: 0 }
    }));
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Programming':
        return { border: 'border-purple-500', glow: 'rgba(168, 85, 247, 0.6)', text: 'text-purple-400', gradient: 'from-purple-600 to-purple-400' };
      case 'Security':
        return { border: 'border-cyan-500', glow: 'rgba(59, 130, 246, 0.6)', text: 'text-cyan-400', gradient: 'from-cyan-600 to-cyan-400' };
      case 'Operating Systems':
        return { border: 'border-blue-500', glow: 'rgba(59, 130, 246, 0.6)', text: 'text-blue-400', gradient: 'from-blue-600 to-blue-400' };
      case 'Soft Skills':
        return { border: 'border-green-500', glow: 'rgba(34, 197, 94, 0.6)', text: 'text-green-400', gradient: 'from-green-600 to-green-400' };
      default:
        return { border: 'border-purple-500', glow: 'rgba(168, 85, 247, 0.6)', text: 'text-purple-400', gradient: 'from-purple-600 to-purple-400' };
    }
  };

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative py-20 px-4 md:px-8 bg-gradient-to-b from-[#1a1a2e] to-[#0a0a0f] overflow-hidden"
      style={{ perspective: '1500px' }}
    >
      {/* Background Effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #a855f7 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          transform: 'translateZ(-100px) rotateX(45deg)'
        }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Title */}
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
          style={{ transformStyle: 'preserve-3d', transform: 'translateZ(40px)' }}
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400"
            style={{ 
              fontFamily: 'Orbitron, sans-serif',
              textShadow: '0 10px 30px rgba(59, 130, 246, 0.5)'
            }}
          >
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto"
            style={{ boxShadow: '0 0 20px rgba(59, 130, 246, 0.8)' }}
          ></div>
        </div>

        {/* 3D Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ transformStyle: 'preserve-3d' }}>
          {skills.map((skill, index) => {
            const colors = getCategoryColor(skill.category);
            const currentLevel = animatedLevels[skill.name] || 0;
            const transform = cardTransforms[skill.name] || { rotateX: 0, rotateY: 0, x: 0, y: 0 };
            
            return (
              <div
                key={skill.name}
                className={`transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${index * 50}ms`,
                  transformStyle: 'preserve-3d',
                  transform: hoveredSkill === skill.name
                    ? `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) translateZ(25px) scale(1.02)`
                    : 'rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)'
                }}
                onMouseMove={(e) => handleMouseMove(e, skill.name)}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => {
                  setHoveredSkill(null);
                  handleMouseLeave(skill.name);
                }}
              >
                <Card
                  className={`group relative p-6 bg-[#1a1a2e]/60 backdrop-blur-xl border-2 ${colors.border}/30 rounded-xl transition-all duration-300 hover:${colors.border}/60 cursor-pointer`}
                  style={{
                    boxShadow: hoveredSkill === skill.name
                      ? `0 25px 60px ${colors.glow}, 0 15px 40px rgba(0, 0, 0, 0.5), inset 0 0 30px ${colors.glow.replace('0.6', '0.1')}`
                      : `0 10px 40px ${colors.glow.replace('0.6', '0.3')}, 0 5px 20px rgba(0, 0, 0, 0.5)`,
                    transformStyle: 'preserve-3d'
                  }}
                >
                  {/* Dynamic light based on mouse position */}
                  {hoveredSkill === skill.name && (
                    <div 
                      className="absolute inset-0 rounded-xl pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at ${transform.x}px ${transform.y}px, ${colors.glow.replace('0.6', '0.3')}, transparent 60%)`,
                        transform: 'translateZ(10px)'
                      }}
                    ></div>
                  )}
                  
                  {/* Glow layers for depth */}
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${colors.gradient.replace('to', 'from')}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    style={{ transform: 'translateZ(-5px)' }}
                  ></div>
                  
                  <div className="relative z-10" style={{ transformStyle: 'preserve-3d' }}>
                    <div className="flex justify-between items-center mb-3" style={{ transform: 'translateZ(20px)' }}>
                      <h3 className={`text-xl font-bold ${colors.text}`} 
                        style={{ 
                          fontFamily: 'Orbitron, sans-serif',
                          textShadow: hoveredSkill === skill.name ? `0 0 20px ${colors.glow}` : 'none'
                        }}
                      >
                        {skill.name}
                      </h3>
                      <span className={`text-lg font-semibold ${colors.text}`}
                        style={{
                          textShadow: hoveredSkill === skill.name ? `0 0 15px ${colors.glow}` : 'none'
                        }}
                      >
                        {currentLevel}%
                      </span>
                    </div>
                    
                    <div className="mb-2" style={{ transform: 'translateZ(15px)' }}>
                      <span className="text-xs text-gray-400 uppercase tracking-wider">{skill.category}</span>
                    </div>
                    
                    {/* 3D Progress Bar */}
                    <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden"
                      style={{
                        transform: 'translateZ(25px)',
                        boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.6), 0 1px 0 rgba(255, 255, 255, 0.05)'
                      }}
                    >
                      <div
                        className={`h-full bg-gradient-to-r ${colors.gradient} transition-all duration-1000 ease-out relative`}
                        style={{
                          width: `${currentLevel}%`,
                          boxShadow: `0 0 20px ${colors.glow}, inset 0 1px 0 rgba(255, 255, 255, 0.3), inset 0 -1px 0 rgba(0, 0, 0, 0.3)`,
                          transform: hoveredSkill === skill.name ? 'translateZ(5px)' : 'translateZ(0px)'
                        }}
                      >
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                        
                        {/* Glow at the end */}
                        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white/40 to-transparent"></div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;