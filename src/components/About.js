import React, { useState } from 'react';
import img1 from '../assests/1.JPG';
import img2 from '../assests/2.JPG';
import img3 from '../assests/3.JPG';
import img4 from '../assests/4.JPG';
import img5 from '../assests/5.jpg';
import img6 from '../assests/6.JPG';
import img7 from '../assests/7.png';

const About = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

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

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % historyImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + historyImages.length) % historyImages.length);
  };

  // Touch event handlers
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setDragOffset(0);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - startX;
    setDragOffset(diff);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    if (Math.abs(dragOffset) > 50) {
      if (dragOffset > 0) {
        prevImage();
      } else {
        nextImage();
      }
    }
    setDragOffset(0);
  };

  // Mouse event handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setDragOffset(0);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    const diff = currentX - startX;
    setDragOffset(diff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    if (Math.abs(dragOffset) > 50) {
      if (dragOffset > 0) {
        prevImage();
      } else {
        nextImage();
      }
    }
    setDragOffset(0);
  };

  return (
    <section id="about" className="section-padding bg-dark-800/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-gradient">Aviothic 2.0</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-stretch mb-16">
          {/* Event Details */}
          <div className="order-1 lg:order-1">
            <div className="card h-full hover:border-neon-blue/80 hover:shadow-2xl hover:shadow-neon-blue/30 transition-all duration-300 group">
              <h3 className="text-4xl font-bold text-neon-blue mb-6 group-hover:text-neon-blue group-hover:drop-shadow-lg group-hover:drop-shadow-neon-blue/50 transition-all duration-300">Event Details</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-neon-pink/20 rounded-lg flex items-center justify-center neon-glow-pink group-hover:bg-neon-pink/40 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-neon-pink/50 transition-all duration-300">
                    <svg className="w-8 h-8 text-neon-pink group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-dark-100 text-xl group-hover:text-neon-pink transition-colors duration-300">Date</div>
                    <div className="text-dark-200 text-xl group-hover:text-white transition-colors duration-300">15 October 2025</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-neon-green/20 rounded-lg flex items-center justify-center neon-glow-green group-hover:bg-neon-green/40 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-neon-green/50 transition-all duration-300">
                    <svg className="w-8 h-8 text-neon-green group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-dark-100 text-xl group-hover:text-neon-green transition-colors duration-300">Time</div>
                    <div className="text-dark-500 text-xl group-hover:text-white transition-colors duration-300">To Be Announced</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-neon-blue/20 rounded-lg flex items-center justify-center neon-glow group-hover:bg-neon-blue/40 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-neon-blue/50 transition-all duration-300">
                    <svg className="w-8 h-8 text-neon-blue group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-dark-100 text-xl group-hover:text-neon-blue transition-colors duration-300">Venue</div>
                    <div className="text-dark-200 text-xl group-hover:text-white transition-colors duration-300">Kanpur Institute of Technology</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="order-2 lg:order-2">
            <div className="card h-full hover:border-neon-green/80 hover:shadow-2xl hover:shadow-neon-green/30 transition-all duration-300 group">
              <h3 className="text-4xl font-bold text-neon-green mb-6 group-hover:text-neon-green group-hover:drop-shadow-lg group-hover:drop-shadow-neon-green/50 transition-all duration-300">What is Aviothic 2.0?</h3>
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
          <h3 className="text-5xl font-bold text-neon-green mb-4" style={{ fontFamily: 'cursive', fontStyle: 'italic', fontWeight: '400', textShadow: '0 0 20px rgba(0, 255, 179, 0.8)' }}>Aviothic 1.0 - Our Journey</h3>
          <p className="text-dark-200 max-w-3xl mx-auto text-lg">
            Take a look back at the incredible moments from our first hackathon that set the foundation for Aviothic 2.0
          </p>
        </div>

        {/* Image Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="card p-0 overflow-hidden">
            <div 
              className="relative touch-pan-y select-none"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              <img
                src={historyImages[currentImage].src}
                alt={historyImages[currentImage].alt}
                className="w-full h-64 md:h-80 object-cover transition-transform duration-300 ease-out"
                style={{ transform: `translateX(${dragOffset}px)` }}
              />
              
              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-dark-900/80 hover:bg-dark-900 text-white p-2 rounded-full transition-all duration-200 hover:scale-110"
                aria-label="Previous image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-dark-900/80 hover:bg-dark-900 text-white p-2 rounded-full transition-all duration-200 hover:scale-110"
                aria-label="Next image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
          </div>
          
          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {historyImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentImage 
                    ? 'bg-neon-blue scale-125 neon-glow' 
                    : 'bg-dark-600 hover:bg-neon-green'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
