import React, { useEffect, useRef, useState } from 'react';
import { Calendar, Building, GraduationCap } from 'lucide-react';
import { experience } from '../data/mock';
import { Card } from './ui/card';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const getTypeIcon = (type) => {
    switch (type) {
      case 'Academic':
        return <GraduationCap className="w-5 h-5" />;
      case 'Learning':
        return <Building className="w-5 h-5" />;
      default:
        return <Calendar className="w-5 h-5" />;
    }
  };

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative py-20 px-4 md:px-8 bg-gradient-to-b from-[#1a1a2e] to-[#0a0a0f] overflow-hidden"
    >
      {/* Background Effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#a855f7 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Title */}
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            Experience & Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-cyan-500 to-purple-500 transform md:-translate-x-1/2"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative transition-all duration-1000 transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Timeline Node */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-full flex items-center justify-center border-4 border-[#0a0a0f] z-10 relative"
                        style={{
                          boxShadow: '0 0 30px rgba(168, 85, 247, 0.8), 0 0 50px rgba(59, 130, 246, 0.5)'
                        }}
                      >
                        <div className="text-white">
                          {getTypeIcon(exp.type)}
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-full animate-ping opacity-20"></div>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ml-24 md:ml-0 ${
                    index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                  }`}>
                    <Card className="group p-6 bg-[#1a1a2e]/70 backdrop-blur-xl border-2 border-purple-500/30 rounded-xl hover:border-cyan-500/60 transition-all duration-500 hover:scale-105"
                      style={{
                        boxShadow: '0 0 30px rgba(168, 85, 247, 0.2)'
                      }}
                    >
                      {/* Glow Effect */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-900/20 to-cyan-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      <div className="relative z-10">
                        {/* Period */}
                        <div className={`flex items-center gap-2 mb-3 ${
                          index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                        }`}>
                          <Calendar className="w-4 h-4 text-cyan-400" />
                          <span className="text-sm text-cyan-300 font-semibold">{exp.period}</span>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-purple-300 mb-2 group-hover:text-cyan-300 transition-colors duration-300" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                          {exp.title}
                        </h3>

                        {/* Organization */}
                        <p className="text-cyan-400 font-semibold mb-3">{exp.organization}</p>

                        {/* Description */}
                        <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                      </div>
                    </Card>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
