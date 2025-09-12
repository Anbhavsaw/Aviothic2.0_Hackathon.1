import React, { useState } from 'react';
import themesImage from '../assests/themes.png';

const Themes = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const themeSlides = [
    {
      title: 'AI/ML',
      description: 'Build intelligent applications using cutting-edge AI tools and machine learning algorithms',
      icon: '🤖',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-gradient-to-br from-blue-400 to-cyan-300'
    },
    {
      title: 'IoT',
      description: 'Innovate with connected devices and create smart solutions for the Internet of Things',
      icon: '🌐',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-gradient-to-br from-green-400 to-emerald-300'
    },
    {
      title: 'Web Development',
      description: 'Create full-stack applications with modern frameworks and technologies',
      icon: '💻',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-gradient-to-br from-purple-400 to-pink-300'
    },
    {
      title: 'Cyber Security',
      description: 'Solve real-world security challenges and protect digital assets',
      icon: '🔒',
      color: 'from-red-500 to-orange-500',
      bgColor: 'bg-gradient-to-br from-red-400 to-orange-300'
    },
    {
      title: 'Embedded Systems',
      description: 'Work on hardware-software integration projects and embedded solutions',
      icon: '⚡',
      color: 'from-yellow-500 to-amber-500',
      bgColor: 'bg-gradient-to-br from-yellow-400 to-amber-300'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % themeSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + themeSlides.length) % themeSlides.length);
  };

  return (
    <section 
      id="themes" 
      className="section-padding relative bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900"
    >
      {/* Neon Light Blue Bubbles Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Base Neon Light Blue Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-cyan-900/15 to-blue-800/20"></div>
        
        {/* Large Animated Neon Light Blue Bubbles - Performance Optimized */}
        {/* Top Row - Larger Bubbles */}
        <div className="absolute top-1/12 left-1/12 w-32 h-32 bg-gradient-to-br from-cyan-300/40 to-blue-400/30 rounded-full opacity-60"
             style={{ 
               boxShadow: '0 0 50px rgba(34, 211, 238, 0.6), 0 0 100px rgba(34, 211, 238, 0.3), inset 0 0 25px rgba(34, 211, 238, 0.2)',
               animation: 'bubble-float-1 8s ease-in-out infinite',
               willChange: 'transform'
             }}></div>
        
        <div className="absolute top-1/12 left-1/6 w-28 h-28 bg-gradient-to-br from-blue-300/35 to-cyan-400/25 rounded-full opacity-55"
             style={{ 
               boxShadow: '0 0 45px rgba(59, 130, 246, 0.5), 0 0 90px rgba(59, 130, 246, 0.25), inset 0 0 20px rgba(59, 130, 246, 0.15)',
               animation: 'bubble-float-2 10s ease-in-out infinite',
               willChange: 'transform'
             }}></div>
        
        <div className="absolute top-1/12 left-1/3 w-36 h-36 bg-gradient-to-br from-cyan-200/30 to-blue-300/20 rounded-full opacity-50"
             style={{ 
               boxShadow: '0 0 55px rgba(34, 211, 238, 0.4), 0 0 110px rgba(34, 211, 238, 0.2), inset 0 0 30px rgba(34, 211, 238, 0.1)',
               animation: 'bubble-float-3 12s ease-in-out infinite',
               willChange: 'transform'
             }}></div>
        
        <div className="absolute top-1/12 left-1/2 w-30 h-30 bg-gradient-to-br from-blue-400/40 to-cyan-300/30 rounded-full opacity-65"
             style={{ 
               boxShadow: '0 0 48px rgba(59, 130, 246, 0.6), 0 0 96px rgba(59, 130, 246, 0.3), inset 0 0 24px rgba(59, 130, 246, 0.2)',
               animation: 'bubble-float-4 9s ease-in-out infinite',
               willChange: 'transform'
             }}></div>
        
        <div className="absolute top-1/12 left-2/3 w-26 h-26 bg-gradient-to-br from-cyan-400/45 to-blue-300/35 rounded-full opacity-70"
             style={{ 
               boxShadow: '0 0 42px rgba(34, 211, 238, 0.7), 0 0 84px rgba(34, 211, 238, 0.35), inset 0 0 21px rgba(34, 211, 238, 0.25)',
               animation: 'bubble-float-5 7s ease-in-out infinite',
               willChange: 'transform'
             }}></div>
        
        <div className="absolute top-1/12 left-5/6 w-24 h-24 bg-gradient-to-br from-blue-300/40 to-cyan-400/30 rounded-full opacity-60"
             style={{ 
               boxShadow: '0 0 40px rgba(59, 130, 246, 0.6), 0 0 80px rgba(59, 130, 246, 0.3), inset 0 0 20px rgba(59, 130, 246, 0.2)',
               animation: 'bubble-float-6 8s ease-in-out infinite',
               willChange: 'transform'
             }}></div>
        
        <div className="absolute top-1/12 right-1/12 w-28 h-28 bg-gradient-to-br from-cyan-300/35 to-blue-400/25 rounded-full opacity-55"
             style={{ 
               boxShadow: '0 0 45px rgba(34, 211, 238, 0.5), 0 0 90px rgba(34, 211, 238, 0.25), inset 0 0 20px rgba(34, 211, 238, 0.15)',
               animation: 'bubble-float-7 10s ease-in-out infinite',
               willChange: 'transform'
             }}></div>

        {/* Middle Row - Larger Bubbles */}
        <div className="absolute top-1/2 left-1/12 w-34 h-34 bg-gradient-to-br from-blue-300/35 to-cyan-400/25 rounded-full opacity-45"
             style={{ 
               boxShadow: '0 0 52px rgba(59, 130, 246, 0.5), 0 0 104px rgba(59, 130, 246, 0.25), inset 0 0 26px rgba(59, 130, 246, 0.15)',
               animation: 'bubble-float-8 11s ease-in-out infinite',
               willChange: 'transform'
             }}></div>
        
        <div className="absolute top-1/2 left-1/6 w-28 h-28 bg-gradient-to-br from-cyan-300/50 to-blue-400/40 rounded-full opacity-75"
             style={{ 
               boxShadow: '0 0 45px rgba(34, 211, 238, 0.8), 0 0 90px rgba(34, 211, 238, 0.4), inset 0 0 20px rgba(34, 211, 238, 0.3)',
               animation: 'bubble-float-9 6s ease-in-out infinite',
               willChange: 'transform'
             }}></div>
        
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-gradient-to-br from-blue-400/30 to-cyan-200/20 rounded-full opacity-40"
             style={{ 
               boxShadow: '0 0 50px rgba(59, 130, 246, 0.4), 0 0 100px rgba(59, 130, 246, 0.2), inset 0 0 25px rgba(59, 130, 246, 0.1)',
               animation: 'bubble-float-10 13s ease-in-out infinite',
               willChange: 'transform'
             }}></div>
        
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-gradient-to-br from-cyan-400/40 to-blue-300/30 rounded-full opacity-60"
             style={{ 
               boxShadow: '0 0 60px rgba(34, 211, 238, 0.6), 0 0 120px rgba(34, 211, 238, 0.3), inset 0 0 30px rgba(34, 211, 238, 0.2)',
               animation: 'bubble-float-11 9s ease-in-out infinite',
               willChange: 'transform'
             }}></div>
        
        <div className="absolute top-1/2 left-2/3 w-30 h-30 bg-gradient-to-br from-blue-300/35 to-cyan-400/25 rounded-full opacity-55"
             style={{ 
               boxShadow: '0 0 48px rgba(59, 130, 246, 0.5), 0 0 96px rgba(59, 130, 246, 0.25), inset 0 0 24px rgba(59, 130, 246, 0.15)',
               animation: 'bubble-float-12 10s ease-in-out infinite',
               willChange: 'transform'
             }}></div>
        
        <div className="absolute top-1/2 left-5/6 w-26 h-26 bg-gradient-to-br from-cyan-300/40 to-blue-400/30 rounded-full opacity-60"
             style={{ 
               boxShadow: '0 0 42px rgba(34, 211, 238, 0.6), 0 0 84px rgba(34, 211, 238, 0.3), inset 0 0 21px rgba(34, 211, 238, 0.2)',
               animation: 'bubble-float-13 8s ease-in-out infinite',
               willChange: 'transform'
             }}></div>
        
        <div className="absolute top-1/2 right-1/12 w-32 h-32 bg-gradient-to-br from-blue-400/35 to-cyan-300/25 rounded-full opacity-55"
             style={{ 
               boxShadow: '0 0 50px rgba(59, 130, 246, 0.5), 0 0 100px rgba(59, 130, 246, 0.25), inset 0 0 25px rgba(59, 130, 246, 0.15)',
               animation: 'bubble-float-14 10s ease-in-out infinite',
               willChange: 'transform'
             }}></div>

        {/* Bottom Row - Larger Bubbles */}
        <div className="absolute bottom-1/12 left-1/12 w-30 h-30 bg-gradient-to-br from-cyan-300/45 to-blue-400/35 rounded-full opacity-65"
             style={{ 
               boxShadow: '0 0 48px rgba(34, 211, 238, 0.6), 0 0 96px rgba(34, 211, 238, 0.3), inset 0 0 24px rgba(34, 211, 238, 0.2)',
               animation: 'bubble-float-15 8s ease-in-out infinite',
               willChange: 'transform'
             }}></div>
        
        <div className="absolute bottom-1/12 left-1/6 w-26 h-26 bg-gradient-to-br from-blue-400/50 to-cyan-300/40 rounded-full opacity-70"
             style={{ 
               boxShadow: '0 0 42px rgba(59, 130, 246, 0.7), 0 0 84px rgba(59, 130, 246, 0.35), inset 0 0 21px rgba(59, 130, 246, 0.25)',
               animation: 'bubble-float-16 7s ease-in-out infinite',
               willChange: 'transform'
             }}></div>
        
        <div className="absolute bottom-1/12 left-1/3 w-32 h-32 bg-gradient-to-br from-cyan-200/30 to-blue-300/20 rounded-full opacity-50"
             style={{ 
               boxShadow: '0 0 50px rgba(34, 211, 238, 0.4), 0 0 100px rgba(34, 211, 238, 0.2), inset 0 0 25px rgba(34, 211, 238, 0.1)',
               animation: 'bubble-float-17 12s ease-in-out infinite',
               willChange: 'transform'
             }}></div>
        
        <div className="absolute bottom-1/12 left-1/2 w-36 h-36 bg-gradient-to-br from-blue-300/40 to-cyan-400/30 rounded-full opacity-60"
             style={{ 
               boxShadow: '0 0 55px rgba(59, 130, 246, 0.6), 0 0 110px rgba(59, 130, 246, 0.3), inset 0 0 28px rgba(59, 130, 246, 0.2)',
               animation: 'bubble-float-18 9s ease-in-out infinite',
               willChange: 'transform'
             }}></div>
        
        <div className="absolute bottom-1/12 left-2/3 w-28 h-28 bg-gradient-to-br from-cyan-400/40 to-blue-300/30 rounded-full opacity-60"
             style={{ 
               boxShadow: '0 0 45px rgba(34, 211, 238, 0.6), 0 0 90px rgba(34, 211, 238, 0.3), inset 0 0 20px rgba(34, 211, 238, 0.2)',
               animation: 'bubble-float-19 8s ease-in-out infinite',
               willChange: 'transform'
             }}></div>
        
        <div className="absolute bottom-1/12 left-5/6 w-24 h-24 bg-gradient-to-br from-blue-300/35 to-cyan-400/25 rounded-full opacity-55"
             style={{ 
               boxShadow: '0 0 40px rgba(59, 130, 246, 0.5), 0 0 80px rgba(59, 130, 246, 0.25), inset 0 0 20px rgba(59, 130, 246, 0.15)',
               animation: 'bubble-float-20 10s ease-in-out infinite',
               willChange: 'transform'
             }}></div>
        
        <div className="absolute bottom-1/12 right-1/12 w-30 h-30 bg-gradient-to-br from-cyan-300/40 to-blue-400/30 rounded-full opacity-60"
             style={{ 
               boxShadow: '0 0 48px rgba(34, 211, 238, 0.6), 0 0 96px rgba(34, 211, 238, 0.3), inset 0 0 24px rgba(34, 211, 238, 0.2)',
               animation: 'bubble-float-21 8s ease-in-out infinite',
               willChange: 'transform'
             }}></div>

        {/* Strategic Large Bubbles - Performance Optimized */}
        <div className="absolute top-1/4 left-1/6 w-24 h-24 bg-gradient-to-br from-cyan-400/50 to-blue-300/40 rounded-full opacity-70"
             style={{ 
               boxShadow: '0 0 40px rgba(34, 211, 238, 0.7), 0 0 80px rgba(34, 211, 238, 0.35), inset 0 0 20px rgba(34, 211, 238, 0.25)',
               animation: 'bubble-float-22 6s ease-in-out infinite',
               willChange: 'transform'
             }}></div>
        
        <div className="absolute top-1/4 right-1/6 w-22 h-22 bg-gradient-to-br from-blue-300/55 to-cyan-400/45 rounded-full opacity-75"
             style={{ 
               boxShadow: '0 0 38px rgba(59, 130, 246, 0.7), 0 0 76px rgba(59, 130, 246, 0.35), inset 0 0 18px rgba(59, 130, 246, 0.25)',
               animation: 'bubble-float-23 8s ease-in-out infinite',
               willChange: 'transform'
             }}></div>
        
        <div className="absolute bottom-1/4 left-1/6 w-26 h-26 bg-gradient-to-br from-cyan-300/60 to-blue-400/50 rounded-full opacity-80"
             style={{ 
               boxShadow: '0 0 42px rgba(34, 211, 238, 0.8), 0 0 84px rgba(34, 211, 238, 0.4), inset 0 0 21px rgba(34, 211, 238, 0.3)',
               animation: 'bubble-float-24 7s ease-in-out infinite',
               willChange: 'transform'
             }}></div>
        
        <div className="absolute bottom-1/4 right-1/6 w-24 h-24 bg-gradient-to-br from-blue-400/55 to-cyan-300/45 rounded-full opacity-75"
             style={{ 
               boxShadow: '0 0 40px rgba(59, 130, 246, 0.7), 0 0 80px rgba(59, 130, 246, 0.35), inset 0 0 20px rgba(59, 130, 246, 0.25)',
               animation: 'bubble-float-25 9s ease-in-out infinite',
               willChange: 'transform'
             }}></div>


        {/* Floating Light Blue Particles - Reduced for Performance */}
        <div className="absolute top-1/6 left-1/2 w-3 h-3 bg-cyan-400/70 rounded-full opacity-60 animate-ping"
             style={{ boxShadow: '0 0 12px rgba(34, 211, 238, 0.8)', willChange: 'transform' }}></div>
        <div className="absolute bottom-1/6 right-1/2 w-3 h-3 bg-blue-300/60 rounded-full opacity-55 animate-ping"
             style={{ boxShadow: '0 0 14px rgba(59, 130, 246, 0.8)', willChange: 'transform' }}></div>
      </div>
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-yellow-400 via-orange-500 to-red-600 mb-8 block">
              HACKATHON
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-yellow-400 via-orange-500 to-red-600 block">
              THEMES
            </h2>
          </div>
          <p className="text-lg sm:text-xl text-orange-200 max-w-3xl mx-auto mb-8">
            
            Explore diverse technology domains and showcase your expertise in any area that excites you
          </p>
          
          {/* Main Theme */}
          <div className="max-w-2xl mx-auto mb-8 sm:mb-12">
            <div className="card text-center bg-gradient-to-r from-primary-600/10 to-primary-500/10 border-primary-500/30 p-4 sm:p-6">
              <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4">🚀</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 mb-3 sm:mb-4">Open Innovation</h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-300">
                The main theme for Aviothic 2.0 is <strong className="text-white">Open Innovation</strong>. 
                We encourage participants to think outside the box and create solutions 
                that can make a real impact in the world.
              </p>
            </div>
          </div>
        </div>

        {/* Desktop: Image Slider with Overlapping Cards */}
        <div className="hidden lg:block relative max-w-7xl mx-auto mb-16">
          <div className="relative h-[400px] sm:h-[450px] md:h-[500px] flex items-center justify-center">
            {/* Transparent background with neon border */}
            <div className="absolute inset-0 bg-transparent rounded-3xl border-2 border-neon-green/50 backdrop-blur-sm"></div>
            
            {/* Slider Container */}
            <div className="relative flex items-center justify-center space-x-4 w-full h-full">
              {/* Previous Button */}
              <button
                onClick={prevSlide}
                className="absolute left-2 sm:left-4 z-20 bg-dark-800/60 hover:bg-dark-800/80 text-neon-green border border-neon-green/50 hover:border-neon-green p-2 sm:p-3 rounded-full transition-all duration-200 hover:scale-110 neon-glow-green"
                aria-label="Previous theme"
              >
                <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Next Button */}
              <button
                onClick={nextSlide}
                className="absolute right-2 sm:right-4 z-20 bg-dark-800/60 hover:bg-dark-800/80 text-neon-green border border-neon-green/50 hover:border-neon-green p-2 sm:p-3 rounded-full transition-all duration-200 hover:scale-110 neon-glow-green"
                aria-label="Next theme"
              >
                <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Theme Cards with Overlapping Effect */}
              {themeSlides.map((theme, index) => {
                const isActive = index === currentSlide;
                const isPrev = index === (currentSlide - 1 + themeSlides.length) % themeSlides.length;
                const isNext = index === (currentSlide + 1) % themeSlides.length;
                
                let position = 'hidden';
                if (isActive) position = 'z-30 transform scale-100';
                else if (isPrev) position = 'z-20 transform scale-90 -translate-x-8 sm:-translate-x-12 md:-translate-x-16 opacity-70';
                else if (isNext) position = 'z-20 transform scale-90 translate-x-8 sm:translate-x-12 md:translate-x-16 opacity-70';

                return (
                  <div
                    key={theme.title}
                    className={`absolute transition-all duration-300 ease-out ${position}`}
                  >
                    <div className={`w-80 h-72 sm:w-96 sm:h-80 rounded-2xl border-2 border-neon-green/60 shadow-2xl bg-dark-800/40 backdrop-blur-sm flex flex-col items-center justify-center text-center p-4 sm:p-6 md:p-8`}>
                      {/* Icon */}
                      <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl mb-4 sm:mb-6">
                        {theme.icon}
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                        {theme.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                        {theme.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Mobile/Tablet: Horizontal Slider */}
        <div className="lg:hidden overflow-x-auto blue-neon-scrollbar mb-8">
          <div className="flex space-x-6 snap-x snap-mandatory pb-4">
            {themeSlides.map((theme, index) => (
              <div
                key={theme.title}
                className="min-w-[85%] sm:min-w-[70%] snap-start bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-cyan-500/20 hover:border-cyan-400/40 transition-colors duration-200 group relative"
              >
                {/* Blur overlay for non-active cards */}
                {index !== currentSlide && (
                  <div className="absolute inset-0 bg-black/30 rounded-xl z-10 pointer-events-none"></div>
                )}
                
                <div className="text-center">
                  {/* Icon */}
                  <div className="text-6xl sm:text-7xl mb-4 sm:mb-6">
                    {theme.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-cyan-100 mb-3 sm:mb-4 group-hover:text-cyan-50 transition-colors duration-300">
                    {theme.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-blue-200 text-sm sm:text-base leading-relaxed group-hover:text-blue-100 transition-colors duration-300">
                    {theme.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

export default Themes;
