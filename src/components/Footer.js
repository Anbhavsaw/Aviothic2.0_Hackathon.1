import React from 'react';
import HackLogo from '../assests/HackLogo.png';
import CyberLogo from '../assests/cyber.png';
import KitLogo from '../assests/kitlogo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();


  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/aviothic_2.0_hackathon/?igsh=MXBnbWdnYm4wZHY4bw%3D%3D#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.928-.875-1.418-2.026-1.418-3.323s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-dark-900 border-t border-dark-700">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Left: Aviothic Logo */}
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start space-x-3 mb-4">
                <img 
                  src={HackLogo} 
                  alt="Aviothic 2.0 Logo" 
                  className="w-16 h-16 object-contain"
                />
                <div>
                  <h3 className="text-2xl font-bold text-white">Aviothic 2.0</h3>
                  <p className="text-gray-400 text-sm">Code • Create • Collaborate</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm max-w-xs mx-auto lg:mx-0">
                The ultimate internal hackathon experience at Kanpur Institute of Technology.
              </p>
            </div>

            {/* Center: Innovation Partner */}
            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-300 mb-4">Innovation Partner</h4>
              <div className="flex items-center justify-center space-x-3 mb-2">
                <img 
                  src={CyberLogo} 
                  alt="Cyber Srishti Logo" 
                  className="w-16 h-16 object-contain"
                />
                <div className="text-2xl font-bold text-primary-400">Cyber Srishti</div>
              </div>
              <p className="text-gray-400 text-sm">Empowering Innovation</p>
            </div>

            {/* Right: KIT Logo */}
            <div className="text-center lg:text-right">
              <h4 className="text-lg font-semibold text-gray-300 mb-4">Organized By</h4>
               <div className="flex items-center justify-center lg:justify-end space-x-3 mb-2">
                 <img 
                   src={KitLogo} 
                   alt="KIT Logo" 
                   className="w-32 h-20 object-contain"
                 />
                 <div className="text-xl font-bold text-white">KIT</div>
               </div>
              <p className="text-gray-400 text-sm">Kanpur Institute of Technology</p>
            </div>
          </div>


          {/* Social Media */}
          <div className="mt-12 text-center">
            <h5 className="text-lg font-semibold text-white mb-6">Follow Us</h5>
            <div className="flex justify-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-dark-800 hover:bg-primary-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 hover:scale-110"
                  aria-label={`Follow us on ${social.name}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Aviothic 2.0. All rights reserved. | 
              <span className="ml-2">Organized by Kanpur Institute of Technology</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#privacy" className="hover:text-primary-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-primary-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#contact" className="hover:text-primary-400 transition-colors duration-200">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;





