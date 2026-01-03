import React from 'react'
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiExpo,
  SiHtml5,
  SiCss3,
  SiGit,
  SiPostman,
  SiCloudinary,
  SiPython,
} from 'react-icons/si'
import { FiDatabase, FiServer, FiSmartphone, FiGlobe } from 'react-icons/fi'

const TechStack = () => {
  const categories = [
    {
      title: 'Backend & Server',
      icon: FiServer,
      color: 'from-green-500 to-emerald-600',
      technologies: [
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
        { name: 'Express.js', icon: SiExpress, color: '#000000' },
        { name: 'PM2', icon: FiServer, color: '#2B037A' },
        { name: 'RESTful APIs', icon: FiGlobe, color: '#7C3AED' },
      ],
    },
    {
      title: 'Frontend & Mobile',
      icon: FiSmartphone,
      color: 'from-blue-500 to-cyan-600',
      technologies: [
        { name: 'React.js', icon: SiReact, color: '#61DAFB' },
        { name: 'React Native', icon: SiReact, color: '#61DAFB' },
        { name: 'Expo', icon: SiExpo, color: '#000020' },
        { name: 'Expo RN Web', icon: SiExpo, color: '#7C3AED' },
      ],
    },
    {
      title: 'Database & Storage',
      icon: FiDatabase,
      color: 'from-emerald-500 to-green-600',
      technologies: [
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'Cloudinary', icon: SiCloudinary, color: '#3448C5' },
        { name: 'Schema Design', icon: FiDatabase, color: '#7C3AED' },
      ],
    },
    {
      title: 'Tools & Others',
      icon: FiGlobe,
      color: 'from-purple-500 to-pink-600',
      technologies: [
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
        { name: 'Git', icon: SiGit, color: '#F05032' },
        { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
        { name: 'HTML/CSS', icon: SiHtml5, color: '#E34F26' },
        { name: 'Python', icon: SiPython, color: '#3776AB' },
      ],
    },
  ]

  return (
    <section id="tech" className="section-container">
      <div className="animate-on-scroll">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title gradient-text">Tech Stack</h2>
          <p className="section-subtitle">
            Technologies and tools I use to build production-grade applications
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {categories.map(({ title, icon: CategoryIcon, color, technologies }, categoryIndex) => (
            <div
              key={categoryIndex}
              className="card group hover:scale-105 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-14 h-14 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center shadow-lg`}>
                  <CategoryIcon className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">{title}</h3>
              </div>

              {/* Technologies List */}
              <div className="grid grid-cols-2 gap-4">
                {technologies.map(({ name, icon: Icon, color }, techIndex) => (
                  <div
                    key={techIndex}
                    className="flex items-center space-x-3 p-3 bg-dark-900/50 rounded-lg hover:bg-dark-700 transition-all duration-300 group/item cursor-pointer"
                  >
                    <Icon
                      className="text-2xl transition-transform duration-300 group-hover/item:scale-110"
                      style={{ color }}
                    />
                    <span className="text-sm font-medium text-dark-300 group-hover/item:text-white transition-colors">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Key Skills Banner */}
        <div className="mt-12 card bg-gradient-to-r from-primary-600/10 to-primary-800/10 border-primary-600/30">
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-4">Core Expertise</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Multi-Tenant Architecture',
                'Cross-Platform Development',
                'RESTful API Design',
                'Database Schema Design',
                'Server Scaling (PM2)',
                'OTP Authentication',
                'Payment Integration',
                'Real-time Analytics',
                'Cloud Storage',
                'Modular Architecture',
              ].map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-primary-600/20 border border-primary-600/30 rounded-full text-sm text-primary-300 hover:bg-primary-600/30 transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechStack
