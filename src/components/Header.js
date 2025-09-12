import React, { useState, useEffect } from 'react';
import HackLogo from '../assests/HackLogo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Themes', href: '#themes' },
    { name: 'Rewards', href: '#rewards' },
    { name: 'Register', href: '#register' },
    { name: 'Coordinators', href: '#coordinators' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-dark-900/95 backdrop-blur-md border-b border-neon-green/30' 
        : 'bg-transparent'
    }`}>
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <div className="flex-shrink-0 ml-4 mr-8">
            <div className="flex items-center space-x-3">
                <div className="w-14 h-14 rounded-lg overflow-hidden">
                  <img 
                    src={HackLogo} 
                    alt="Aviothic 2.0 Logo" 
                    className="w-full h-full object-cover"
                  />
              </div>
              <span className="text-3xl lg:text-4xl font-bold text-neon-blue">Aviothic 2.0</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-12 mr-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-dark-200 hover:text-neon-green transition-colors duration-200 font-medium text-xl"
              >
                {item.name}
              </button>
            ))}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSef8wEiBN0mDfrDJo4vEhiU4jvYTXU6yKFNFtGV_4rKs86gAA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block group"
            >
              <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white text-xl px-8 py-4 rounded-full font-semibold overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg"
                   style={{
                     background: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 50%, #1e3a8a 100%)',
                     boxShadow: '0 4px 15px rgba(30, 64, 175, 0.3)'
                   }}>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative z-10">Register</span>
              </div>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-dark-200 hover:text-neon-green transition-colors duration-200 text-xl"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-dark-900/95 backdrop-blur-md border-t border-neon-green/30">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-2 text-dark-200 hover:text-neon-green hover:bg-dark-800/50 rounded-md transition-colors duration-200 text-xl"
                >
                  {item.name}
                </button>
              ))}
              <a
                href="https://forms.google.com/register"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center mt-4 group"
              >
                <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white text-xl px-8 py-4 rounded-full font-semibold overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg"
                     style={{
                       background: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 50%, #1e3a8a 100%)',
                       boxShadow: '0 4px 15px rgba(30, 64, 175, 0.3)'
                     }}>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <span className="relative z-10">Register</span>
                </div>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
