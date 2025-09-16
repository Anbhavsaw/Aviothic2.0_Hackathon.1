import React, { memo } from "react";
import situ from "../assests/situ1.jpg";
import abhinav from "../assests/abhinav.jpg";
import nancy from "../assests/nancy.jpg";
import arihant from "../assests/arihant.jpg";
import aditya from "../assests/aditya.jpg";
import Gond from "../assests/aditya.png"
import swati from "../assests/swati.jpg";
import shadab from "../assests/shadab.jpg";
import rashmi from "../assests/rashmi.jpg";
import aman from "../assests/aman.jpg";
import surajsir from "../assests/surajsir.jpg";



const Coordinators = () => {
  // Updated layout for better spacing and alignment
  const coordinators = [
    {
      name: "Situ Saw",
      role: "Event Head",
      course: "B.Tech CSE-(AIML)",
      year: "4th Year",
      image: situ,
      linkedin:
        "https://www.linkedin.com/in/situ-saw-659a9a278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      description:
        "Passionate about organizing tech events and fostering innovation in the student community.",
    },
    {
      name: 'Aditya Gond',
      role: 'Cyber-Shristi President',
      course: 'B.Tech CSE',
      year: '4th Year',
      image: Gond,
      linkedin: 'https://www.linkedin.com/in/adiys/',
      description: 'Experienced faculty member guiding students in their technical journey and hackathon participation.'
    },
    {
      name: "Aditya Singh Sengar",
      role: "Technical Head",
      course: "B.Tech CSE-(AIML)",
      year: "4th Year",
      image: aditya,
      linkedin: "https://www.linkedin.com/in/aditya-singh-sengar-716b6b246/",
      description:
        "Full-stack developer with expertise in modern web technologies and AI/ML applications.",
    },
    {
      name: "Arihant Jain",
      role: "Technical Head",
      course: "B.Tech CSE-(AIML)",
      year: "4th Year",
      image: arihant,
      linkedin:
        "https://www.linkedin.com/in/arihant-jain-278309260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      description:
        "Specializes in IoT and embedded systems, with a keen interest in hardware-software integration.",
    },
    {
      name: "Abhinav Sharma",
      role: "Registration & Onboarding Head",
      course: "B.Tech CSE-(AIML)",
      year: "4th Year",
      image: abhinav,
      linkedin: "https://www.linkedin.com/in/abhinav-sharma-1756072a5",
      description:
        "Creative mind focused on cybersecurity and digital marketing strategies.",
    },
    {
      name: "Nancy Gaur",
      role: "Registration & Onboarding Head",
      course: "B.Tech CSE-(AIML)",
      year: "4th Year",
      image: nancy,
      linkedin:
        "https://www.linkedin.com/in/nancy-gaur-268878270?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      description:
        "Experienced in competitive programming and algorithm design with multiple hackathon wins.",
    }, 
    {
      name: 'Shadab Ahmed',
      role: 'Management & Coordination Head',
      course: 'B.Tech CSE-(AIML)',
      year: '4th Year',
      image: shadab,
      linkedin: 'https://www.linkedin.com/in/shadab-ahmed-19b67024b',
      description: 'Active in open source communities and passionate about building inclusive tech environments.'
    },
    {
      name: 'Aman Chauhan',
      role: 'Management & Coordination Head',
      course: 'B.Tech IT',
      year: '4th Year',
      image: aman,
      linkedin: 'https://www.linkedin.com/in/aman-chauhan-4578a8257/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      description: 'Active in open source communities and passionate about building inclusive tech environments.'
    },
    {
      name: 'Swati Verma',
      role: 'Design & Marketing Head',
      course: 'B.Tech CSE',
      year: '4th Year',
      image: swati,
      linkedin: 'https://www.linkedin.com/in/swati-verma-809274260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      description: 'Active in open source communities and passionate about building inclusive tech environments.'
    },
    {
      name: 'Rashmi Singh',
      role: 'Design & Marketing Head',
      course: 'B.Tech CSE',
      year: '4th Year',
      image: rashmi,
      linkedin: 'https://www.linkedin.com/in/rashmi-singh-461193276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      description: 'Active in open source communities and passionate about building inclusive tech environments.'
    }
  ];

  return (
    <section id="coordinators" className="section-padding bg-dark-800/30">
      <div className="container-custom">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our <span className="text-gradient">Coordinators</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our dedicated team of coordinators is working hard to make Aviothic
            2.0 an unforgettable experience for all participants.
          </p>
        </div>

        {/* Scrollable Container */}
        <div className="overflow-x-auto custom-scrollbar">
          <div className="flex space-x-6 snap-x snap-mandatory">
            {coordinators.map((c, index) => (
              <div
                key={index}
                className="min-w-[80%] sm:min-w-[60%] md:min-w-[45%] lg:min-w-[28%] xl:min-w-[25%] snap-start bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 shadow-lg border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 group flex flex-col h-[480px]"
              >
                {/* Image Section */}
                <div className="relative mb-4 flex justify-center">
                  <img
                    src={c.image}
                    alt={`${c.name} - ${c.role}`}
                    className="w-48 h-48 object-cover rounded-full bg-gradient-to-br from-slate-700 to-blue-800 border border-cyan-500/30 group-hover:border-cyan-400/60 transition-all duration-300"
                    loading="lazy"
                    decoding="async"
                    style={{ willChange: 'auto' }}
                  />
                  <div className="absolute inset-0 w-48 h-48 rounded-full bg-gradient-to-t from-cyan-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 mx-auto"></div>
                </div>
                
                {/* Content Section - Fixed Height */}
                <div className="flex flex-col h-28 mb-4">
                  <h4 className="text-xl font-bold text-cyan-100 mb-2 group-hover:text-cyan-50 transition-colors duration-300 text-center">{c.name}</h4>
                  <div className="text-base text-cyan-300 font-semibold mb-2 group-hover:text-cyan-200 transition-colors duration-300 text-center">
                    {c.role}
                  </div>
                  <div className="text-sm text-blue-200 group-hover:text-blue-100 transition-colors duration-300 text-center">
                    {c.course} • {c.year}
                  </div>
                </div>
                
                {/* LinkedIn Button Section - Fixed Position */}
                <div className="flex justify-center mt-auto">
                  <a
                    href={c.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    <span>Connect</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Coordinators);
