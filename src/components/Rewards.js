import React, { useState } from 'react';

const Rewards = () => {
  const [currentReward, setCurrentReward] = useState(0);

  const rewards = [
    {
      title: 'Prize Pool',
      amount: '₹8,000',
      description: 'Total prize money to be distributed among winners',
      icon: '🏆',
      color: 'from-yellow-500 to-amber-500'
    },
    {
      title: 'Medals',
      description: 'Exclusive medals for top 3 teams',
      icon: '🥇',
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      title: 'Certificates',
      description: 'Participation certificates for all participants',
      icon: '📜',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Goodies',
      description: 'Exciting goodies for all participants',
      icon: '🎁',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const nextReward = () => {
    setCurrentReward((prev) => (prev + 1) % rewards.length);
  };

  const prevReward = () => {
    setCurrentReward((prev) => (prev - 1 + rewards.length) % rewards.length);
  };

  const handleBoxClick = () => {
    nextReward();
  };

  return (
    <section id="rewards" className="section-padding bg-dark-800/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Rewards</span> & Recognition
          </h2>
        </div>


        {/* Mobile/Tablet Slider */}
        <div className="lg:hidden overflow-x-auto custom-scrollbar mb-8">
          <div className="flex space-x-6 snap-x snap-mandatory pb-4">
            {rewards.map((reward, index) => (
              <div
                key={reward.title}
                className="min-w-[85%] sm:min-w-[70%] snap-start bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 shadow-lg border border-cyan-500/20 hover:border-cyan-400/40 transition-colors duration-200 group relative"
              >
                <div className="text-center">
                  {/* Icon */}
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${reward.color} flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-200`}>
                    {reward.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-cyan-100 mb-2 group-hover:text-cyan-50 transition-colors duration-200">
                    {reward.title}
                  </h3>
                  
                  {/* Amount (if applicable) */}
                  {reward.amount && (
                    <div className="text-2xl font-bold text-cyan-300 mb-3 group-hover:text-cyan-200 transition-colors duration-200">
                      {reward.amount}
                    </div>
                  )}
                  
                  {/* Description */}
                  <p className="text-blue-200 text-sm leading-relaxed group-hover:text-blue-100 transition-colors duration-200">
                    {reward.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-4 gap-8">
          {rewards.map((reward, index) => (
            <div
              key={reward.title}
              className="card group hover:scale-105 transition-all duration-300 text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${reward.color} flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300`}>
                {reward.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors duration-300">
                {reward.title}
              </h3>
              
              {/* Amount (if applicable) */}
              {reward.amount && (
                <div className="text-2xl font-bold text-primary-400 mb-4">
                  {reward.amount}
                </div>
              )}
              
              {/* Description */}
              <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
                {reward.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Rewards;
