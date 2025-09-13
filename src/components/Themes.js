import React, { memo } from 'react';
import themepageImage from '../assests/themepage.jpg';

const Themes = () => {
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

  return (
    <section 
      id="themes" 
      className="section-padding relative"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={themepageImage}
          alt="Themes Background"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900/20 via-dark-800/15 to-dark-900/20"></div>
      </div>
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-neon-green">HACKATHON THEMES</span>
            </h1>
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

        {/* Horizontal Scrollable Slider */}
        <div className="overflow-x-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <div className="flex space-x-6 snap-x snap-mandatory pb-4" style={{ WebkitScrollbar: { display: 'none' } }}>
            {themeSlides.map((theme, index) => (
              <div
                key={theme.title}
                className={`min-w-[280px] sm:min-w-[320px] md:min-w-[350px] lg:min-w-[380px] snap-start bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-md rounded-xl p-6 shadow-lg border border-neon-blue/40 hover:border-neon-blue/60 transition-all duration-300 group relative`}
              >
                
                <div className="text-center relative z-20">
                  {/* Icon */}
                  <div className="text-6xl sm:text-7xl md:text-8xl mb-4 sm:mb-6 transform transition-transform duration-300 hover:scale-110">
                    {theme.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-neon-blue to-neon-green bg-clip-text text-transparent">
                    {theme.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-white/90 text-sm sm:text-base leading-relaxed group-hover:text-white transition-colors duration-300">
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

export default memo(Themes);
