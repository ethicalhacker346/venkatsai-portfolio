import React from 'react'
import { 
  FiShield, 
  FiTrendingUp, 
  FiLayers, 
  FiDatabase, 
  FiGlobe, 
  FiZap,
  FiPackage,
  FiFilter,
  FiBarChart2,
  FiSettings,
  FiCreditCard,
  FiMail
} from 'react-icons/fi'

const Features = () => {
  const features = [
    {
      category: 'Authentication & Security',
      icon: FiShield,
      color: 'from-red-500 to-pink-600',
      items: [
        'OTP-based secure authentication',
        'JWT token management',
        'Role-based access control (Admin, Vendor, Customer)',
        'Session management with auto-logout',
      ],
    },
    {
      category: 'Data Management',
      icon: FiDatabase,
      color: 'from-green-500 to-emerald-600',
      items: [
        'Multi-level hierarchical category system (6 levels deep)',
        'Brand management with verification badges',
        'Product catalog with advanced attributes',
        'Order and inventory tracking',
      ],
    },
    {
      category: 'Analytics & Reporting',
      icon: FiBarChart2,
      color: 'from-blue-500 to-cyan-600',
      items: [
        'Real-time KPI dashboards',
        'Revenue and sales tracking',
        'Category distribution analytics',
        'Brand performance metrics',
      ],
    },
    {
      category: 'Advanced Features',
      icon: FiZap,
      color: 'from-purple-500 to-violet-600',
      items: [
        'Multi-language support (4 languages)',
        'Advanced filtering and search',
        'Drag-and-drop category management',
        'Step-by-step onboarding wizards',
      ],
    },
    {
      category: 'Integrations',
      icon: FiPackage,
      color: 'from-orange-500 to-red-600',
      items: [
        'Razorpay payment gateway',
        'Nodemailer email notifications',
        'Cloudinary media storage',
        'SMS OTP service integration',
      ],
    },
    {
      category: 'Architecture',
      icon: FiLayers,
      color: 'from-indigo-500 to-blue-600',
      items: [
        'Multi-tenant database architecture',
        'PM2 cluster mode for scaling',
        'RESTful API with modular design',
        'Unified React Native codebase (mobile + web)',
      ],
    },
  ]

  const technicalHighlights = [
    {
      icon: FiGlobe,
      title: 'Cross-Platform Excellence',
      description: 'Single codebase deploying to iOS, Android, and Web using Expo React Native Web',
      stat: '3 Platforms',
    },
    {
      icon: FiTrendingUp,
      title: 'Scalable Infrastructure',
      description: 'PM2 cluster mode with multi-instance deployment for high availability',
      stat: '99.9% Uptime',
    },
    {
      icon: FiSettings,
      title: 'Modular Architecture',
      description: 'Clean, maintainable code with separation of concerns and reusable components',
      stat: '50+ Components',
    },
  ]

  return (
    <section id="features" className="section-container">
      <div className="animate-on-scroll">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title gradient-text">Features & Capabilities</h2>
          <p className="section-subtitle">
            Enterprise-level features built with production-grade quality
          </p>
        </div>

        {/* Technical Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {technicalHighlights.map(({ icon: Icon, title, description, stat }, index) => (
            <div
              key={index}
              className="card text-center hover:scale-105 transition-all duration-300 bg-gradient-to-br from-primary-600/10 to-primary-800/10 border-primary-600/30"
            >
              <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-primary-500/50">
                <Icon className="text-3xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
              <p className="text-sm text-dark-400 mb-4">{description}</p>
              <div className="text-3xl font-bold text-primary-400">{stat}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ category, icon: Icon, color, items }, index) => (
            <div
              key={index}
              className="card group hover:scale-105 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center shadow-lg`}>
                  <Icon className="text-2xl text-white" />
                </div>
                <h3 className="text-lg font-bold text-white">{category}</h3>
              </div>

              {/* Feature Items */}
              <ul className="space-y-3">
                {items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-dark-300 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="card mt-12 bg-dark-800 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">By The Numbers</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <p className="text-4xl font-bold text-primary-400 mb-2">40+</p>
              <p className="text-sm text-dark-400">API Endpoints</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary-400 mb-2">15+</p>
              <p className="text-sm text-dark-400">Database Collections</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary-400 mb-2">50+</p>
              <p className="text-sm text-dark-400">Reusable Components</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary-400 mb-2">4</p>
              <p className="text-sm text-dark-400">Languages Supported</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
