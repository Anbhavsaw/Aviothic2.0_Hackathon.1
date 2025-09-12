import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
        {/* Animated Blue Neon Boxes */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Box 1 - Large moving box */}
          <div className="absolute w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 border-2 border-cyan-400/60 rounded-lg animate-float-1"
               style={{
                 boxShadow: '0 0 30px rgba(34, 211, 238, 0.4), 0 0 60px rgba(34, 211, 238, 0.2)',
                 background: 'linear-gradient(45deg, rgba(34, 211, 238, 0.1), rgba(6, 182, 212, 0.05))',
                 willChange: 'transform'
               }}>
          </div>
          
          {/* Box 2 - Medium moving box */}
          <div className="absolute w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 border-2 border-blue-400/50 rounded-lg animate-float-2"
               style={{
                 boxShadow: '0 0 25px rgba(59, 130, 246, 0.3), 0 0 50px rgba(59, 130, 246, 0.15)',
                 background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.08), rgba(37, 99, 235, 0.04))',
                 willChange: 'transform'
               }}>
          </div>
          
          {/* Box 3 - Small moving box */}
          <div className="absolute w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 border-2 border-sky-400/40 rounded-lg animate-float-3"
               style={{
                 boxShadow: '0 0 20px rgba(14, 165, 233, 0.25), 0 0 40px rgba(14, 165, 233, 0.1)',
                 background: 'linear-gradient(225deg, rgba(14, 165, 233, 0.06), rgba(2, 132, 199, 0.03))',
                 willChange: 'transform'
               }}>
          </div>
          
          {/* Box 4 - Rotating square */}
          <div className="absolute w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 border-2 border-cyan-300/50 rounded-lg animate-rotate-float"
               style={{
                 boxShadow: '0 0 15px rgba(103, 232, 249, 0.3), 0 0 30px rgba(103, 232, 249, 0.15)',
                 background: 'linear-gradient(90deg, rgba(103, 232, 249, 0.05), rgba(34, 211, 238, 0.02))',
                 willChange: 'transform'
               }}>
          </div>
          
          {/* Box 5 - Diagonal moving box */}
          <div className="absolute w-28 h-28 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 border-2 border-blue-300/45 rounded-lg animate-diagonal-float"
               style={{
                 boxShadow: '0 0 22px rgba(96, 165, 250, 0.25), 0 0 44px rgba(96, 165, 250, 0.12)',
                 background: 'linear-gradient(315deg, rgba(96, 165, 250, 0.07), rgba(59, 130, 246, 0.035))',
                 willChange: 'transform'
               }}>
          </div>
          
          {/* Box 6 - Pulsing box */}
          <div className="absolute w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 border-2 border-sky-300/40 rounded-lg animate-pulse-float"
               style={{
                 boxShadow: '0 0 18px rgba(125, 211, 252, 0.2), 0 0 36px rgba(125, 211, 252, 0.1)',
                 background: 'linear-gradient(180deg, rgba(125, 211, 252, 0.04), rgba(56, 189, 248, 0.02))',
                 willChange: 'transform'
               }}>
          </div>
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(34, 211, 238, 0.3) 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }}></div>
        
        {/* Floating Code Elements - Reduced for Performance */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 text-cyan-400/40 text-6xl font-mono animate-pulse"
               style={{ willChange: 'transform' }}>&lt;/&gt;</div>
          <div className="absolute bottom-1/3 left-1/3 text-sky-400/30 text-5xl font-mono animate-pulse"
               style={{ willChange: 'transform' }}>()</div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center flex flex-col justify-center h-full">
        <div className="max-w-5xl mx-auto">
          {/* Main Title */}
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold mb-8 animate-fade-in" style={{ 
            fontFamily: '"Rqnd Pro", monospace, "Courier New", monospace'
          }}>
            <span className="bg-gradient-to-r from-neon-blue to-neon-green drop-shadow-2xl bg-clip-text text-transparent" style={{ textShadow: '0 0 20px rgba(0, 194, 255, 0.5)' }}>Aviothic 2.0</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-3xl md:text-4xl lg:text-5xl mb-10 animate-fade-in font-light" style={{ animationDelay: '0.2s', fontFamily: 'Pacifico, cursive' }}>
            <span className="text-neon-green">Code</span> • <span className="text-neon-green">Create</span> • <span className="text-neon-green">Collaborate</span>
          </p>
          
          {/* Description */}
          
          
          {/* CTA Button */}
          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSef8wEiBN0mDfrDJo4vEhiU4jvYTXU6yKFNFtGV_4rKs86gAA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block"
            >
              <div className="relative bg-gray-800 text-white text-lg sm:text-xl md:text-2xl px-8 py-4 sm:px-12 sm:py-6 md:px-16 md:py-8 rounded-full font-semibold border-2 border-neon-blue animate-pulse"
                   style={{
                     boxShadow: '0 0 20px rgba(0, 194, 255, 0.6), 0 0 40px rgba(0, 194, 255, 0.4), 0 0 60px rgba(0, 194, 255, 0.2)',
                     animation: 'pulse 2s infinite'
                   }}>
                Register Now
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 inline-block ml-2 sm:ml-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              {/* Pulsing outline effect */}
              <div className="absolute inset-0 rounded-full border-2 border-neon-blue animate-ping opacity-75"
                   style={{
                     boxShadow: '0 0 20px rgba(0, 194, 255, 0.8), 0 0 40px rgba(0, 194, 255, 0.6), 0 0 60px rgba(0, 194, 255, 0.4)'
                   }}></div>
            </a>
          </div>
          
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-neon-blue rounded-full flex justify-center neon-glow">
          <div className="w-1 h-3 bg-neon-blue rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
