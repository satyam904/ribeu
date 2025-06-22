import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { gsap } from 'gsap';
import RibeuIcon from './RibeuIcon';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    gsap.fromTo('.nav-item', 
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, delay: 0.2 }
    );
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-neutral-200' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="nav-item flex items-center space-x-3">
            <div className="transform hover:scale-110 transition-transform duration-300">
              <RibeuIcon className="w-10 h-10 drop-shadow-lg" size={40} />
            </div>
            <div>
              <span className="text-xl font-bold text-neutral-800">Ribeu</span>
              <div className="text-xs text-neutral-600 font-medium">Solutions</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {[
              { name: 'Services', href: 'services' },
              { name: 'Portfolio', href: 'portfolio' },
              { name: 'Testimonials', href: 'testimonials' },
              { name: 'Contact', href: 'contact' }
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="nav-item text-neutral-600 hover:text-blue-600 font-medium transition-colors duration-200 hover:scale-105 transform relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          <div className="hidden md:flex nav-item space-x-3">
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-neutral-600 hover:text-blue-600 font-medium px-4 py-2 rounded-lg hover:bg-blue-50 transition-all duration-200"
            >
              Get Quote
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Start Project
            </button>
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg rounded-b-2xl border-b border-neutral-200">
            <nav className="flex flex-col p-6 space-y-4">
              {[
                { name: 'Services', href: 'services' },
                { name: 'Portfolio', href: 'portfolio' },
                { name: 'Testimonials', href: 'testimonials' },
                { name: 'Contact', href: 'contact' }
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-neutral-600 hover:text-blue-600 font-medium py-2 transition-colors duration-200 text-left"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 border-t border-neutral-200 space-y-3">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full text-neutral-600 hover:text-blue-600 font-medium px-4 py-2 rounded-lg hover:bg-blue-50 transition-all duration-200"
                >
                  Get Quote
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg"
                >
                  Start Project
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;