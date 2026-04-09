import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/mock';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card } from './ui/card';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef(null);
  const { toast } = useToast();

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (frontend-only for now)
    setTimeout(() => {
      console.log('Form submitted:', formData);
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Github':
        return <Github className="w-5 h-5" />;
      case 'Linkedin':
        return <Linkedin className="w-5 h-5" />;
      case 'Twitter':
        return <Twitter className="w-5 h-5" />;
      case 'Mail':
        return <Mail className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-20 px-4 md:px-8 bg-gradient-to-b from-[#0a0a0f] to-[#1a1a2e] overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #a855f7 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Title */}
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-4"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className={`md:col-span-2 space-y-6 transition-all duration-1000 delay-300 transform ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <Card className="p-6 bg-[#1a1a2e]/70 backdrop-blur-xl border-2 border-purple-500/30 rounded-xl"
              style={{
                boxShadow: '0 0 30px rgba(168, 85, 247, 0.2)'
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-lg border border-purple-500/40">
                  <Mail className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-sm text-gray-400">Email</h3>
                  <p className="text-cyan-300 font-semibold">{personalInfo.email}</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-[#1a1a2e]/70 backdrop-blur-xl border-2 border-cyan-500/30 rounded-xl"
              style={{
                boxShadow: '0 0 30px rgba(59, 130, 246, 0.2)'
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg border border-cyan-500/40">
                  <Phone className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-sm text-gray-400">Let's Connect</h3>
                  <p className="text-purple-300 font-semibold">Available for projects</p>
                </div>
              </div>
            </Card>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-[#1a1a2e]/70 backdrop-blur-xl border-2 border-purple-500/30 rounded-lg hover:border-cyan-500/60 transition-all duration-300 hover:scale-110"
                  style={{
                    boxShadow: '0 0 20px rgba(168, 85, 247, 0.2)'
                  }}
                >
                  <div className="text-purple-400 group-hover:text-cyan-400 transition-colors duration-300">
                    {getIcon(social.icon)}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <Card className={`md:col-span-3 p-8 bg-[#1a1a2e]/70 backdrop-blur-xl border-2 border-purple-500/30 rounded-xl transition-all duration-1000 delay-500 transform ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}
            style={{
              boxShadow: '0 0 40px rgba(168, 85, 247, 0.3)'
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-purple-300 mb-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  Name *
                </label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#0a0a0f]/50 border-2 border-purple-500/30 focus:border-cyan-500 text-white placeholder-gray-500 rounded-lg px-4 py-3 transition-all duration-300"
                  placeholder="Your name"
                  style={{
                    boxShadow: '0 0 20px rgba(168, 85, 247, 0.1)'
                  }}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-purple-300 mb-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  Email *
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#0a0a0f]/50 border-2 border-purple-500/30 focus:border-cyan-500 text-white placeholder-gray-500 rounded-lg px-4 py-3 transition-all duration-300"
                  placeholder="your.email@example.com"
                  style={{
                    boxShadow: '0 0 20px rgba(168, 85, 247, 0.1)'
                  }}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-purple-300 mb-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  Phone
                </label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-[#0a0a0f]/50 border-2 border-purple-500/30 focus:border-cyan-500 text-white placeholder-gray-500 rounded-lg px-4 py-3 transition-all duration-300"
                  placeholder="+91 1234567890"
                  style={{
                    boxShadow: '0 0 20px rgba(168, 85, 247, 0.1)'
                  }}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-purple-300 mb-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  Message *
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-[#0a0a0f]/50 border-2 border-purple-500/30 focus:border-cyan-500 text-white placeholder-gray-500 rounded-lg px-4 py-3 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or inquiry..."
                  style={{
                    boxShadow: '0 0 20px rgba(168, 85, 247, 0.1)'
                  }}
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full px-8 py-6 text-lg font-semibold bg-transparent border-2 border-purple-500 text-purple-300 hover:text-white overflow-hidden transition-all duration-300"
                style={{ fontFamily: 'Orbitron, sans-serif' }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="w-5 h-5" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                  boxShadow: '0 0 30px rgba(168, 85, 247, 0.8), 0 0 50px rgba(59, 130, 246, 0.5)'
                }}></div>
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
