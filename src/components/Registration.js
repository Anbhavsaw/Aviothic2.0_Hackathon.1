import React from 'react';

const Registration = () => {
  const registrationDetails = [
    {
      title: 'Team Size',
      value: '2-4 Members',
      description: 'Form a team with 2 to 4 participants',
      icon: '👥'
    },
    {
      title: 'Registration Fee',
      value: '₹200 per team',
      description: 'One-time payment for the entire team',
      icon: '💳'
    },
    {
      title: 'Registration Deadline',
      value: '30 SEPT,2025',
      description: 'Limited spots available, register early',
      icon: '⏰'
    }
  ];

  return (
    <section id="register" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Register Your <span className="text-gradient">Team</span>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="card">
            <h3 className="text-2xl font-bold text-primary-400 mb-6">Registration Details</h3>
            <div className="space-y-6">
              {registrationDetails.map((detail, index) => (
                <div key={detail.title} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">{detail.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">{detail.title}</h4>
                    <div className="text-xl font-bold text-primary-400 mb-1">{detail.value}</div>
                    <p className="text-gray-400">{detail.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Register Button */}
          <div className="text-center mt-8">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSef8wEiBN0mDfrDJo4vEhiU4jvYTXU6yKFNFtGV_4rKs86gAA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block"
            >
              <div className="relative bg-gray-800 text-white text-lg px-8 py-4 rounded-full font-semibold border-2 border-neon-blue animate-pulse"
                   style={{
                     boxShadow: '0 0 20px rgba(0, 194, 255, 0.6), 0 0 40px rgba(0, 194, 255, 0.4), 0 0 60px rgba(0, 194, 255, 0.2)',
                     animation: 'pulse 2s infinite'
                   }}>
                Register Now
                <svg className="w-4 h-4 inline-block ml-2" fill="currentColor" viewBox="0 0 24 24">
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
    </section>
  );
};

export default Registration;

