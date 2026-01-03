import React from 'react'
import { FiAward, FiTarget, FiTrendingUp, FiZap } from 'react-icons/fi'

const About = () => {
  const highlights = [
    {
      icon: FiZap,
      title: 'Production-Grade Development',
      description: 'Building enterprise-level applications with focus on scalability, security, and performance',
    },
    {
      icon: FiTarget,
      title: 'Full-Stack Expertise',
      description: 'End-to-end ownership from database design to cross-platform UI implementation',
    },
    {
      icon: FiTrendingUp,
      title: 'Modern Architecture',
      description: 'Multi-tenant systems, microservices patterns, and unified codebase strategies',
    },
    {
      icon: FiAward,
      title: 'Quality Focused',
      description: 'Perfectionist approach to code quality with emphasis on best practices and clean architecture',
    },
  ]

  return (
    <section id="about" className="section-container bg-dark-800/30">
      <div className="animate-on-scroll">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title gradient-text">About Me</h2>
          <p className="section-subtitle">
            Passionate about building real-world products that solve complex problems
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Story */}
          <div className="space-y-6">
            <div className="card">
              <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
              <div className="space-y-4 text-dark-300 leading-relaxed">
                <p>
                  I'm a <span className="text-primary-400 font-semibold">Full-Stack Software Engineer</span> from{' '}
                  <span className="text-white">Visakhapatnam, India</span>, currently pursuing my{' '}
                  <span className="text-white">M.Tech in Mechanical Engineering</span> at NSRIT Engineering College.
                </p>
                <p>
                  What drives me is the challenge of building <span className="text-primary-400 font-semibold">production-grade systems</span> from scratch.
                  With <span className="text-white font-semibold">ZestInfinite</span>, I'm architecting a complete{' '}
                  <span className="text-white">multi-tenant quick commerce platform</span> that includes three applications,
                  a scalable backend API, and enterprise-level features.
                </p>
                <p>
                  My expertise lies in creating <span className="text-primary-400 font-semibold">cross-platform applications</span> using{' '}
                  <span className="text-white">React Native with Expo React Native Web</span>, enabling a unified codebase
                  that deploys seamlessly to mobile and web platforms.
                </p>
                <p className="text-primary-400 font-medium">
                  💼 Currently seeking opportunities to apply my skills in building scalable, production-ready applications.
                </p>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="card">
              <h3 className="text-xl font-bold text-white mb-4">Quick Facts</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <p className="text-dark-300">📍 Based in Visakhapatnam, Andhra Pradesh</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <p className="text-dark-300">🎓 M.Tech - Mechanical Engineering</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <p className="text-dark-300">💻 Full-Stack Development (JS Specialist)</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <p className="text-dark-300">🚀 Building ZestInfinite E-Commerce Platform</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map(({ icon: Icon, title, description }, index) => (
              <div
                key={index}
                className="card group hover:bg-primary-600/10 hover:scale-105 cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-primary-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-600 transition-all duration-300">
                  <Icon className="text-2xl text-primary-400 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{title}</h4>
                <p className="text-sm text-dark-400 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
