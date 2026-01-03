import React from 'react'
import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiCode, FiLayers } from 'react-icons/fi'
import { SiReact, SiNodedotjs, SiMongodb, SiExpo } from 'react-icons/si'

const Hero = () => {
  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/ethicalhacker346', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/venkat-sai-6888823a3', label: 'LinkedIn' },
    { icon: FiMail, href: 'mailto:pvsram346@gmail.com', label: 'Email' },
  ]

  const floatingIcons = [
    { Icon: SiReact, color: '#61DAFB', delay: '0s', position: 'top-20 left-10' },
    { Icon: SiNodedotjs, color: '#339933', delay: '1s', position: 'top-40 right-20' },
    { Icon: SiMongodb, color: '#47A248', delay: '2s', position: 'bottom-40 left-20' },
    { Icon: SiExpo, color: '#000020', delay: '3s', position: 'bottom-20 right-10' },
  ]

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-primary-600/20 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-primary-800/20 rounded-full blur-3xl bottom-10 right-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Floating Tech Icons - Hidden on mobile */}
        <div className="hidden lg:block">
          {floatingIcons.map(({ Icon, color, delay, position }, index) => (
            <div
              key={index}
              className={`absolute ${position} opacity-10 animate-float`}
              style={{ animationDelay: delay }}
            >
              <Icon size={80} style={{ color }} />
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 section-container text-center">
        <div className="animate-slide-up">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary-600/10 border border-primary-600/30 rounded-full px-4 sm:px-6 py-2 mb-6 sm:mb-8">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-primary-400 font-medium text-xs sm:text-sm">Available for Opportunities</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display mb-4 sm:mb-6 leading-tight px-4">
            Hi, I'm{' '}
            <span className="gradient-text animate-gradient bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 bg-300%">
              Venkat Sai
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl md:text-3xl text-dark-300 mb-3 sm:mb-4 font-display px-4">
            Full-Stack Software Engineer
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-dark-400 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4">
            Architecting production-grade, multi-tenant e-commerce platforms with{' '}
            <span className="text-primary-400 font-semibold">React Native</span>,{' '}
            <span className="text-primary-400 font-semibold">Node.js</span>, and{' '}
            <span className="text-primary-400 font-semibold">MongoDB</span>.
            Building world-class cross-platform applications that scale.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-8 sm:mb-12 px-4">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <FiCode className="text-primary-500 text-xl sm:text-2xl" />
                <p className="text-3xl sm:text-4xl font-bold text-white">3+</p>
              </div>
              <p className="text-xs sm:text-sm text-dark-400">Applications Built</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <FiLayers className="text-primary-500 text-xl sm:text-2xl" />
                <p className="text-3xl sm:text-4xl font-bold text-white">50+</p>
              </div>
              <p className="text-xs sm:text-sm text-dark-400">Features Delivered</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <SiReact className="text-primary-500 text-xl sm:text-2xl" />
                <p className="text-3xl sm:text-4xl font-bold text-white">100%</p>
              </div>
              <p className="text-xs sm:text-sm text-dark-400">Production Ready</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mb-8 sm:mb-12 px-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="btn-primary text-sm sm:text-base"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-secondary text-sm sm:text-base"
            >
              Get In Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 sm:space-x-6 px-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-dark-800 border border-dark-700 rounded-lg text-dark-400 hover:text-primary-400 hover:border-primary-600 hover:bg-primary-600/10 transition-all duration-300 transform hover:scale-110"
                aria-label={label}
              >
                <Icon size={18} className="sm:w-5 sm:h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Fixed with smooth scroll */}
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer focus:outline-none group"
        aria-label="Scroll to about section"
      >
        <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-primary-600/20 border border-primary-600 rounded-full text-primary-400 hover:bg-primary-600 hover:text-white transition-all duration-300">
          <FiArrowDown size={20} />
        </div>
      </button>
    </section>
  )
}

export default Hero
