import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Code, Shield } from 'lucide-react';
import { projects } from '../data/mock';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [cardTransforms, setCardTransforms] = useState({});
  const sectionRef = useRef(null);

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

  const handleMouseMove = (e, projectId) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    setCardTransforms(prev => ({
      ...prev,
      [projectId]: { rotateX, rotateY, x, y }
    }));
  };

  const handleMouseLeave = (projectId) => {
    setCardTransforms(prev => ({
      ...prev,
      [projectId]: { rotateX: 0, rotateY: 0, x: 0, y: 0 }
    }));
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-20 px-4 md:px-8 bg-gradient-to-b from-[#0a0a0f] to-[#1a1a2e] overflow-hidden"
      style={{ perspective: '1500px' }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #06b6d4 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Title */}
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
          style={{ transform: 'translateZ(50px)', transformStyle: 'preserve-3d' }}
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400"
            style={{ 
              fontFamily: 'Orbitron, sans-serif',
              textShadow: '0 10px 30px rgba(168, 85, 247, 0.5)'
            }}
          >
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"
            style={{ boxShadow: '0 0 20px rgba(168, 85, 247, 0.8)' }}
          ></div>
        </div>

        {/* 3D Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" style={{ transformStyle: 'preserve-3d' }}>
          {projects.map((project, index) => {
            const transform = cardTransforms[project.id] || { rotateX: 0, rotateY: 0, x: 0, y: 0 };
            
            return (
              <div
                key={project.id}
                className={`transition-all duration-500 transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                  transformStyle: 'preserve-3d',
                  transform: hoveredCard === project.id 
                    ? `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) translateZ(30px) scale(1.05)`
                    : 'rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)'
                }}
                onMouseMove={(e) => handleMouseMove(e, project.id)}
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={() => {
                  setHoveredCard(null);
                  handleMouseLeave(project.id);
                }}
              >
                <Card
                  className="relative p-6 bg-[#1a1a2e]/70 backdrop-blur-xl border-2 border-purple-500/30 rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer h-full"
                  style={{
                    boxShadow: hoveredCard === project.id 
                      ? '0 30px 80px rgba(59, 130, 246, 0.6), 0 20px 60px rgba(168, 85, 247, 0.4), inset 0 0 30px rgba(168, 85, 247, 0.1)'
                      : '0 10px 40px rgba(168, 85, 247, 0.3), 0 5px 20px rgba(0, 0, 0, 0.5)',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  {/* Dynamic light reflection based on mouse position */}
                  {hoveredCard === project.id && (
                    <div 
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at ${transform.x}px ${transform.y}px, rgba(168, 85, 247, 0.3), transparent 50%)`,
                        transform: 'translateZ(5px)'
                      }}
                    ></div>
                  )}
                  
                  {/* Animated Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-cyan-900/20 to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ transform: 'translateZ(-5px)' }}
                  ></div>
                  
                  {/* Outer Glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"
                    style={{ transform: 'translateZ(-10px)' }}
                  ></div>

                  <div className="relative z-10" style={{ transform: 'translateZ(20px)' }}>
                    {/* Header */}
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-lg border border-purple-500/40"
                          style={{
                            boxShadow: hoveredCard === project.id ? '0 0 20px rgba(168, 85, 247, 0.6)' : 'none',
                            transform: 'translateZ(10px)'
                          }}
                        >
                          <Shield className="w-6 h-6 text-purple-400" />
                        </div>
                        <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/40 text-xs"
                          style={{ transform: 'translateZ(5px)' }}
                        >
                          {project.status}
                        </Badge>
                      </div>
                      <ExternalLink 
                        className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" 
                        style={{ 
                          transform: hoveredCard === project.id ? 'translateZ(15px) scale(1.2)' : 'translateZ(5px)',
                          filter: hoveredCard === project.id ? 'drop-shadow(0 0 10px rgba(34, 211, 238, 0.8))' : 'none'
                        }}
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-purple-300 mb-3 group-hover:text-cyan-300 transition-colors duration-300" 
                      style={{ 
                        fontFamily: 'Orbitron, sans-serif',
                        textShadow: hoveredCard === project.id ? '0 0 20px rgba(34, 211, 238, 0.8)' : 'none',
                        transform: 'translateZ(15px)'
                      }}
                    >
                      {project.title}
                    </h3>

                    {/* Category */}
                    <div className="flex items-center gap-2 mb-4" style={{ transform: 'translateZ(10px)' }}>
                      <Code className="w-4 h-4 text-cyan-400" />
                      <span className="text-sm text-gray-400">{project.category}</span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-6 leading-relaxed" style={{ transform: 'translateZ(8px)' }}>
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2" style={{ transform: 'translateZ(12px)' }}>
                      {project.technologies.map((tech, i) => (
                        <Badge
                          key={i}
                          className="bg-purple-900/30 text-purple-300 border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300"
                          style={{
                            boxShadow: hoveredCard === project.id ? '0 0 15px rgba(168, 85, 247, 0.4)' : '0 0 10px rgba(168, 85, 247, 0.2)',
                            transform: hoveredCard === project.id ? 'translateZ(5px) scale(1.05)' : 'translateZ(0px)'
                          }}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;