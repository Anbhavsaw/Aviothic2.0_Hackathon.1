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
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
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





