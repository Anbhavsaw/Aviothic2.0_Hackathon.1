import React, { memo } from 'react';
import img1 from '../assests/1.JPG';
import img2 from '../assests/2.JPG';
import img3 from '../assests/3.JPG';
import img4 from '../assests/4.JPG';
import img5 from '../assests/5.jpg';
import img6 from '../assests/6.JPG';
import img7 from '../assests/7.png';

const About = () => {

  // Aviothic 1.0 history images from assets
  const historyImages = [
    { src: img1, alt: 'Aviothic 1.0 - Opening Ceremony', caption: 'Opening Ceremony' },
    { src: img2, alt: 'Aviothic 1.0 - Coding Session', caption: 'Intense Coding Session' },
    { src: img3, alt: 'Aviothic 1.0 - Team Collaboration', caption: 'Team Collaboration' },
    { src: img4, alt: 'Aviothic 1.0 - Project Presentation', caption: 'Project Presentations' },
    { src: img5, alt: 'Aviothic 1.0 - Winners', caption: 'Winners Celebration' },
    { src: img6, alt: 'Aviothic 1.0 - Group Photo', caption: 'Group Photo' },
    { src: img7, alt: 'Aviothic 1.0 - Final Moments', caption: 'Final Moments' },
  ];


  return (
    <section id="about" className="section-padding bg-dark-800/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-neon-green">Aviothic 2.0</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-stretch mb-16">
          {/* Event Details */}
          <div className="order-1 lg:order-1">
            <div className="card h-full hover:border-neon-blue/80 transition-all duration-300 group">
              <h3 className="text-4xl font-bold text-neon-blue mb-6 group-hover:text-neon-blue transition-all duration-300">Event Details</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-neon-pink/20 rounded-lg flex items-center justify-center group-hover:bg-neon-pink/40 group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                    <svg className="w-8 h-8 text-neon-pink group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-dark-100 text-xl group-hover:text-neon-pink transition-colors duration-300">Date</div>
                    <div className="text-dark-200 text-xl group-hover:text-white transition-colors duration-300">15 October 2025</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-neon-green/20 rounded-lg flex items-center justify-center group-hover:bg-neon-green/40 group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                    <svg className="w-8 h-8 text-neon-green group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-dark-100 text-xl group-hover:text-neon-green transition-colors duration-300">Time</div>
                    <div className="text-dark-500 text-xl group-hover:text-white transition-colors duration-300">To Be Announced</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-neon-blue/20 rounded-lg flex items-center justify-center group-hover:bg-neon-blue/40 group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                    <svg className="w-8 h-8 text-neon-blue group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-dark-100 text-xl group-hover:text-neon-blue transition-colors duration-300">Venue</div>
                    <div className="text-dark-200 text-xl group-hover:text-white transition-colors duration-300 leading-relaxed">
                      CT-Lab, Kanpur<br />
                      Institute of Technology
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="order-2 lg:order-2">
            <div className="card h-full hover:border-neon-green/80 transition-all duration-300 group">
              <h3 className="text-4xl font-bold text-neon-green mb-6 group-hover:text-neon-green transition-all duration-300">What is Aviothic 2.0?</h3>
              <div className="space-y-6">
                <p className="text-dark-100 leading-relaxed text-xl group-hover:text-white transition-colors duration-300">
                🚀 Get ready for an electrifying 6-hour coding marathon, powered by the visionary Initiatives by Cyber Shristi!
                </p>
                <p className="text-dark-100 leading-relaxed text-xl group-hover:text-white transition-colors duration-300">
                💻 Code, Create, and Collaborate with fellow innovators in a fast-paced, high-energy environment.
                </p>
                <p className="text-dark-100 leading-relaxed text-xl group-hover:text-white transition-colors duration-300">
                🏆 This is your chance to showcase skills, solve problems, learn, and compete for exciting prizes 🎖 and recognition 🌐.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Aviothic 1.0 History */}
        <div className="text-center mb-12">
          <h3 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-neon-green">Aviothic 1.0 - Our Journey</span>
          </h3>
          <p className="text-dark-200 max-w-3xl mx-auto text-lg">
            Take a look back at the incredible moments from our first hackathon that set the foundation for Aviothic 2.0
          </p>
        </div>

        {/* Stylish Image Slider */}
        <div className="overflow-x-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <div className="flex space-x-6 snap-x snap-mandatory pb-4" style={{ WebkitScrollbar: { display: 'none' } }}>
            {historyImages.map((image, index) => (
              <div
                key={index}
                className="min-w-[300px] sm:min-w-[350px] md:min-w-[400px] snap-start group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                    style={{ willChange: 'auto' }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  
                  {/* Simplified Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                </div>
                
                {/* Border Glow */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-neon-blue/50 transition-colors duration-500"></div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default memo(About);
