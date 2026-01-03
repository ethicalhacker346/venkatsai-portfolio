import React from 'react'
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiDownload, FiExternalLink } from 'react-icons/fi'

const Contact = () => {
  const contactMethods = [
    {
      icon: FiMail,
      title: 'Email Me',
      value: 'pvsram346@gmail.com',
      href: 'mailto:pvsram346@gmail.com',
      color: 'from-red-500 to-pink-600',
      description: 'Best way to reach me for opportunities',
      buttonText: 'Send Email',
    },
    {
      icon: FiPhone,
      title: 'Call Me',
      value: '+91 7075002630',
      href: 'tel:+917075002630',
      color: 'from-green-500 to-emerald-600',
      description: 'Available for calls during business hours',
      buttonText: 'Call Now',
    },
    {
      icon: FiMapPin,
      title: 'Location',
      value: 'Visakhapatnam, Andhra Pradesh',
      href: 'https://maps.google.com/?q=Visakhapatnam',
      color: 'from-blue-500 to-cyan-600',
      description: 'Based in India, open to remote work',
      buttonText: 'View Map',
    },
  ]

  const socialLinks = [
    {
      icon: FiLinkedin,
      label: 'LinkedIn',
      username: '@venkat sai',
      href: 'https://www.linkedin.com/in/venkat-sai-6888823a3',
      color: '#0A66C2',
      description: 'Connect with me professionally',
    },
    {
      icon: FiGithub,
      label: 'GitHub',
      username: '@ethicalhacker346',
      href: 'https://github.com/ethicalhacker346',
      color: '#333',
      description: 'Check out my code repositories',
    },
  ]

  return (
    <section id="contact" className="section-container bg-dark-800/30">
      <div className="animate-on-scroll">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title gradient-text">Get In Touch</h2>
          <p className="section-subtitle mb-8">
            I'm actively seeking full-stack developer opportunities. Let's build something amazing together!
          </p>
          
          {/* Quick Status Badge */}
          <div className="inline-flex items-center space-x-2 bg-green-600/10 border border-green-600/30 rounded-full px-6 py-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-400 font-medium">Open to Full-Time & Contract Roles</span>
          </div>
        </div>

        {/* Main Contact Methods */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map(({ icon: Icon, title, value, href, color, description, buttonText }, index) => (
            <div
              key={index}
              className="card group hover:scale-105 transition-all duration-300 text-center"
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                <Icon className="text-3xl text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
              <p className="text-sm text-dark-400 mb-3">{description}</p>
              <p className="text-lg font-semibold text-primary-400 mb-4">{value}</p>
              
              {/* CTA Button */}
              <a
                href={href}
                target={title === 'Location' ? '_blank' : '_self'}
                rel={title === 'Location' ? 'noopener noreferrer' : ''}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-dark-900 border border-dark-700 rounded-lg text-dark-300 hover:text-white hover:border-primary-600 hover:bg-primary-600/10 transition-all duration-300 group/btn"
              >
                <span className="text-sm font-medium">{buttonText}</span>
                <FiExternalLink className="text-sm group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        {/* Social Links Section */}
        <div className="card mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Connect on Social Media</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {socialLinks.map(({ icon: Icon, label, username, href, color, description }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-6 bg-dark-900/50 rounded-xl border border-dark-700 hover:border-primary-600 hover:bg-primary-600/10 transition-all duration-300 group"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${color}20`, border: `2px solid ${color}40` }}
                >
                  <Icon className="text-2xl" style={{ color }} />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-white mb-1">{label}</h4>
                  <p className="text-sm text-primary-400 mb-1">{username}</p>
                  <p className="text-xs text-dark-400">{description}</p>
                </div>
                <FiExternalLink className="text-dark-400 group-hover:text-primary-400 group-hover:translate-x-1 transition-all" />
              </a>
            ))}
          </div>
        </div>

        {/* Resume Download Section */}
        <div className="card bg-gradient-to-r from-primary-600/10 to-primary-800/10 border-primary-600/30 text-center">
          <FiDownload className="text-5xl text-primary-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-3">Download My Resume</h3>
          <p className="text-dark-300 mb-6 max-w-2xl mx-auto">
            Get a detailed overview of my skills, experience, and the ZestInfinite project. 
            Perfect for sharing with your hiring team!
          </p>
          <a
            href="/Venkata_Sai_Ram_Pandranki_Resume.pdf"
            download
            className="inline-flex items-center space-x-3 btn-primary"
          >
            <FiDownload className="text-xl" />
            <span>Download Resume (PDF)</span>
          </a>
        </div>

        {/* Quick Note */}
        <div className="mt-8 text-center">
          <p className="text-dark-400 text-sm">
            💼 Currently seeking <span className="text-primary-400 font-semibold">Full-Stack Developer</span> roles •{' '}
            🌍 Open to <span className="text-primary-400 font-semibold">Remote</span> & <span className="text-primary-400 font-semibold">Hybrid</span> opportunities •{' '}
            ⚡ Available to start <span className="text-primary-400 font-semibold">immediately</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact

