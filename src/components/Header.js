import React, { useState, memo } from 'react';
import HackLogo from '../assests/HackLogo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      
      // Use requestAnimationFrame for smooth performance
      requestAnimationFrame(() => {
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        background: 'transparent',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(34, 197, 94, 0.3)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
        position: 'sticky',
        top: '0',
        zIndex: '50'
      }}
    >
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
                    loading="eager"
                    decoding="async"
                    style={{ willChange: 'auto' }}
                  />
              </div>
              <span className="text-3xl lg:text-4xl font-bold text-accent-blue">Aviothic 2.0</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-12 mr-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-dark-200 hover:text-neon-green transition-colors duration-150 font-medium text-xl"
              >
                {item.name}
              </button>
            ))}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSef8wEiBN0mDfrDJo4vEhiU4jvYTXU6yKFNFtGV_4rKs86gAA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-neon-blue to-neon-green hover:from-neon-pink hover:to-neon-orange text-white text-xl px-8 py-4 rounded-full font-semibold transition-colors duration-150"
            >
              Register
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-dark-200 hover:text-neon-green transition-colors duration-150 text-xl p-2 rounded-lg hover:bg-dark-800/50"
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
            <div 
              className="px-2 pt-2 pb-3 space-y-1"
              style={{
                background: 'transparent',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderTop: '1px solid rgba(34, 197, 94, 0.3)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
              }}
            >
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-2 text-dark-200 hover:text-neon-green hover:bg-dark-800/50 rounded-md transition-colors duration-150 text-xl"
                >
                  {item.name}
                </button>
              ))}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSef8wEiBN0mDfrDJo4vEhiU4jvYTXU6yKFNFtGV_4rKs86gAA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center mt-4 bg-gradient-to-r from-neon-blue to-neon-green hover:from-neon-pink hover:to-neon-orange text-white text-xl px-8 py-4 rounded-full font-semibold transition-colors duration-150"
              >
                Register
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default memo(Header);
