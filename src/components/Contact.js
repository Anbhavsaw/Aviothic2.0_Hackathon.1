import React from 'react';

const Contact = () => {
  const contactInfo = [
    {
      title: 'Email',
      value: 'aviothic2.0hackathon@gmail.com',
      link: 'mailto:aviothic2.0hackathon@gmail.com',
      icon: '📧'
    },
    {
      title: 'Event Head',
      value: '+91 91202 65385',
      link: 'tel:+919120265385',
      icon: '📞'
    },
    {
      title: 'Registration Head',
      value: '+91 63866 89393',
      link: 'tel:+916386689393',
      icon: '📱'
    }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {contactInfo.map((contact, index) => (
            <div key={contact.title} className="card text-center min-w-0">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary-600/20 flex items-center justify-center">
                <span className="text-3xl">{contact.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{contact.title}</h3>
              <a
                href={contact.link}
                className="text-primary-400 hover:text-primary-300 transition-colors duration-200 text-lg font-medium break-words"
              >
                {contact.value}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;



