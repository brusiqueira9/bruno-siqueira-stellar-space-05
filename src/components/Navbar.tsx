
import { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Zap } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'curriculum', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: 'INÍCIO', id: 'home', icon: '◉' },
    { name: 'SOBRE', id: 'about', icon: '◈' },
    { name: 'HABILIDADES', id: 'skills', icon: '◊' },
    { name: 'PROJETOS', id: 'projects', icon: '◇' },
    { name: 'EXPERIÊNCIA', id: 'curriculum', icon: '◌' },
    { name: 'CONTATO', id: 'contact', icon: '◎' }
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-700 ${
        isScrolled
          ? 'holographic-display border-b border-neon-cyan/30 backdrop-blur-2xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-5">
          {/* Logo with Downloaded Image */}
          <div className="flex items-center gap-3">
            <div className="relative group">
              <div className="w-12 h-12 holographic-display rounded-full flex items-center justify-center border-2 border-neon-cyan/40 transition-all duration-500 group-hover:scale-110 overflow-hidden">
                <img 
                  src="/src/assets/logo.png" 
                  alt="Bruno Siqueira Logo" 
                  className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-neon-pink rounded-full animate-pulse shadow-lg shadow-neon-pink/50"></div>
              <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-neon-purple rounded-full animate-pulse shadow-lg shadow-neon-purple/50" style={{ animationDelay: '0.5s' }}></div>
            </div>
            <div className="font-orbitron font-black text-2xl hologram-text hover:scale-105 transition-transform duration-300 cursor-pointer">
              Bruno.Siqueira
            </div>
          </div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`quantum-button group relative px-6 py-3 font-rajdhani font-bold text-sm tracking-wider transition-all duration-500 hover:scale-105 rounded-2xl ${
                  activeSection === item.id 
                    ? 'border-neon-cyan text-neon-cyan shadow-lg shadow-neon-cyan/30' 
                    : 'border-white/20 text-gray-300 hover:text-neon-cyan hover:border-neon-cyan/50'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 holographic-display rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"></div>
                <div className="relative flex items-center gap-2 z-10">
                  <span className="text-lg animate-pulse">{item.icon}</span>
                  {item.name}
                </div>
                <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-neon-cyan via-neon-pink to-neon-purple transition-all duration-700 ${
                  activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></div>
              </button>
            ))}
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button
            className="md:hidden quantum-button p-3 rounded-2xl border-2 border-neon-cyan/40 transition-all duration-500 hover:scale-110 hover:border-neon-cyan"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="relative">
              {isMobileMenuOpen ? (
                <X className="w-7 h-7 text-neon-cyan animate-spin" />
              ) : (
                <Menu className="w-7 h-7 text-neon-cyan animate-pulse" />
              )}
            </div>
          </button>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-700 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="holographic-display mx-4 mb-6 rounded-3xl border-2 border-neon-cyan/30 p-6 backdrop-blur-2xl">
          <div className="space-y-3">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`quantum-button w-full text-left px-6 py-4 font-rajdhani font-bold text-base tracking-wider transition-all duration-500 rounded-2xl relative group ${
                  activeSection === item.id
                    ? 'text-neon-cyan border-neon-cyan/50 shadow-lg shadow-neon-cyan/20'
                    : 'text-gray-300 hover:text-neon-cyan border-white/10 hover:border-neon-cyan/30'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute left-0 top-1/2 w-0 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-pink group-hover:w-3 transition-all duration-500 transform -translate-y-1/2"></div>
                <div className="flex items-center gap-3 pl-6 group-hover:pl-8 transition-all duration-500">
                  <span className="text-xl animate-pulse">{item.icon}</span>
                  {item.name}
                </div>
                <div className="absolute inset-0 holographic-display rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              </button>
            ))}
          </div>
          
          {/* Mobile Menu Footer */}
          <div className="mt-6 pt-6 border-t border-neon-cyan/20">
            <div className="flex items-center justify-center gap-2">
              <Zap className="w-4 h-4 text-neon-cyan animate-pulse" />
              <span className="text-sm text-gray-400 font-orbitron">QUANTUM NAVIGATION SYSTEM</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
