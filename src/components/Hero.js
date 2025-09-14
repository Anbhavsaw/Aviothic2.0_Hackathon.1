import React, { memo, useState, useEffect } from 'react';
import neonStreak from '../assests/neon_streak.webm';

const Hero = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [useStaticBackground, setUseStaticBackground] = useState(false);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setUseStaticBackground(true);
    }

    // Fallback for slow connections
    const timer = setTimeout(() => {
      if (!videoLoaded) {
        setUseStaticBackground(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [videoLoaded]);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Optimized Background */}
      <div className="absolute inset-0 z-0">
        {!useStaticBackground ? (
          <video
            src={neonStreak}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            onLoadedData={handleVideoLoad}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ 
              filter: 'brightness(0.8) contrast(1.2)',
              willChange: 'auto'
            }}
          />
        ) : (
          <div 
            className="absolute inset-0 w-full h-full bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900"
            style={{
              backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(0, 194, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(0, 255, 179, 0.1) 0%, transparent 50%)'
            }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900/20 via-dark-800/15 to-dark-900/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center flex flex-col justify-center h-full">
        <div className="max-w-5xl mx-auto">
          {/* Main Title */}
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold mb-8" style={{ 
            fontFamily: '"Rqnd Pro", monospace, "Courier New", monospace',
            willChange: 'auto'
          }}>
            <span 
              className="aviothic-glow-static"
              style={{
                background: 'linear-gradient(45deg, #00c2ff, #00ffb3)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 5px rgba(0, 194, 255, 0.3), 0 0 10px rgba(0, 255, 179, 0.2)'
              }}
            >
              Aviothic 2.0
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-3xl md:text-4xl lg:text-5xl mb-10 font-light" style={{ fontFamily: 'Pacifico, cursive' }}>
            <span className="text-neon-green">Code</span> • <span className="text-neon-green">Create</span> • <span className="text-neon-green">Collaborate</span>
          </p>
          
          {/* Description */}
          
          
          {/* CTA Button */}
          <div>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSef8wEiBN0mDfrDJo4vEhiU4jvYTXU6yKFNFtGV_4rKs86gAA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block group"
            >
              <div className="bg-gradient-to-r from-neon-blue to-neon-green hover:from-neon-pink hover:to-neon-orange text-white text-base sm:text-lg md:text-xl px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-full font-semibold transition-colors duration-150">
                <span className="flex items-center">
                  Register Now
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 inline-block ml-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </span>
              </div>
            </a>
          </div>
          
        </div>
      </div>

      {/* Static Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-neon-blue rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neon-blue rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default memo(Hero);
