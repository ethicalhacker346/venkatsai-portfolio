import React from 'react'
import { 
  FiServer, 
  FiDatabase, 
  FiSmartphone, 
  FiMonitor,
  FiCloud,
  FiLock,
  FiZap,
  FiLayers,
  FiGlobe,
  FiPackage,
  FiCpu,
  FiShield
} from 'react-icons/fi'
import { SiReact, SiNodedotjs, SiMongodb, SiExpo, SiCloudinary, SiRazorpay } from 'react-icons/si'

const Architecture = () => {
  const architectureLayers = [
    {
      title: 'Frontend Layer',
      color: 'from-blue-500 to-cyan-600',
      icon: FiMonitor,
      components: [
        {
          name: 'Admin Web Dashboard',
          tech: 'React Native Web (Expo)',
          icon: SiExpo,
          features: ['Category Management', 'Brand Management', 'Analytics', 'Vendor Onboarding'],
        },
        {
          name: 'Vendor Web Portal',
          tech: 'React Native Web (Expo)',
          icon: SiExpo,
          features: ['Product Management', 'Order Processing', 'Inventory Tracking', 'Performance Analytics'],
        },
        {
          name: 'Customer Mobile App',
          tech: 'React Native (Expo)',
          icon: FiSmartphone,
          features: ['Product Browsing', 'Cart Management', 'Order Placement', 'Real-time Tracking'],
        },
      ],
    },
    {
      title: 'Backend Layer',
      color: 'from-green-500 to-emerald-600',
      icon: FiServer,
      components: [
        {
          name: 'REST API Server',
          tech: 'Node.js + Express.js',
          icon: SiNodedotjs,
          features: ['RESTful Endpoints', 'Authentication Middleware', 'Business Logic', 'Error Handling'],
        },
        {
          name: 'Process Management',
          tech: 'PM2 Cluster Mode',
          icon: FiCpu,
          features: ['Multi-Instance', 'Load Balancing', 'Auto-Restart', 'Performance Monitoring'],
        },
      ],
    },
    {
      title: 'Database Layer',
      color: 'from-emerald-500 to-green-600',
      icon: FiDatabase,
      components: [
        {
          name: 'MongoDB Database',
          tech: 'NoSQL Document Store',
          icon: SiMongodb,
          features: ['Multi-Tenant Schema', '15+ Collections', 'Indexed Queries', 'Aggregation Pipelines'],
        },
      ],
    },
    {
      title: 'Integration Layer',
      color: 'from-purple-500 to-pink-600',
      icon: FiPackage,
      components: [
        {
          name: 'Payment Gateway',
          tech: 'Razorpay',
          icon: SiRazorpay,
          features: ['Secure Transactions', 'Auto Reconciliation', 'Webhook Events', 'Refund Management'],
        },
        {
          name: 'Cloud Storage',
          tech: 'Cloudinary',
          icon: SiCloudinary,
          features: ['Image Optimization', 'CDN Delivery', 'Auto Compression', 'Media Management'],
        },
        {
          name: 'Email Service',
          tech: 'Nodemailer',
          icon: FiCloud,
          features: ['OTP Delivery', 'Order Notifications', 'Admin Alerts', 'HTML Templates'],
        },
      ],
    },
  ]

  const securityFeatures = [
    { icon: FiLock, title: 'OTP Authentication', description: 'Secure phone-based verification' },
    { icon: FiShield, title: 'JWT Tokens', description: 'Stateless authentication with refresh tokens' },
    { icon: FiZap, title: 'Rate Limiting', description: 'API throttling and DDoS protection' },
    { icon: FiLayers, title: 'Data Encryption', description: 'Encrypted sensitive data at rest and in transit' },
  ]

  const dataFlow = [
    { step: '1', title: 'User Request', description: 'Client sends request to API', icon: FiSmartphone },
    { step: '2', title: 'Authentication', description: 'JWT token validation', icon: FiLock },
    { step: '3', title: 'Business Logic', description: 'Process request in Express', icon: SiNodedotjs },
    { step: '4', title: 'Database Query', description: 'Fetch/update data in MongoDB', icon: SiMongodb },
    { step: '5', title: 'Response', description: 'Send JSON response to client', icon: FiZap },
  ]

  return (
    <section id="architecture" className="section-container bg-dark-800/30">
      <div className="animate-on-scroll">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title gradient-text">System Architecture</h2>
          <p className="section-subtitle">
            Scalable, secure, and production-ready multi-tenant platform design
          </p>
        </div>

        {/* Architecture Overview */}
        <div className="card mb-12 bg-gradient-to-r from-primary-600/10 to-primary-800/10 border-primary-600/30">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Unified Codebase Strategy</h3>
            <p className="text-dark-300 max-w-3xl mx-auto leading-relaxed">
              ZestInfinite leverages <span className="text-primary-400 font-semibold">Expo React Native Web</span> to 
              deploy a single codebase across multiple platforms. This approach reduces development time, ensures UI consistency, 
              and simplifies maintenance while delivering native-quality experiences on mobile and web.
            </p>
          </div>
          
          {/* Quick Architecture Diagram */}
          <div className="flex flex-wrap justify-center items-center gap-4 text-sm">
            <div className="flex items-center space-x-2 px-4 py-2 bg-dark-800 rounded-lg border border-dark-700">
              <SiReact className="text-2xl text-cyan-400" />
              <span className="text-white">React Native</span>
            </div>
            <span className="text-primary-400 text-2xl">→</span>
            <div className="flex items-center space-x-2 px-4 py-2 bg-dark-800 rounded-lg border border-dark-700">
              <SiExpo className="text-2xl text-white" />
              <span className="text-white">Expo RN Web</span>
            </div>
            <span className="text-primary-400 text-2xl">→</span>
            <div className="flex items-center space-x-2 px-4 py-2 bg-dark-800 rounded-lg border border-dark-700">
              <FiSmartphone className="text-2xl text-primary-400" />
              <FiMonitor className="text-2xl text-primary-400" />
              <span className="text-white">Mobile + Web</span>
            </div>
          </div>
        </div>

        {/* Architecture Layers */}
        <div className="space-y-8 mb-12">
          {architectureLayers.map(({ title, color, icon: LayerIcon, components }, layerIndex) => (
            <div key={layerIndex} className="card">
              {/* Layer Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-14 h-14 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center shadow-lg`}>
                  <LayerIcon className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">{title}</h3>
              </div>

              {/* Components Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {components.map(({ name, tech, icon: CompIcon, features }, compIndex) => (
                  <div
                    key={compIndex}
                    className="bg-dark-900/50 rounded-xl p-5 border border-dark-700 hover:border-primary-600/50 transition-all"
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <CompIcon className="text-2xl text-primary-400" />
                      <div>
                        <h4 className="text-lg font-bold text-white">{name}</h4>
                        <p className="text-xs text-dark-400">{tech}</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2">
                          <div className="w-1 h-1 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-xs text-dark-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Data Flow */}
        <div className="card mb-12">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Request-Response Data Flow</h3>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {dataFlow.map(({ step, title, description, icon: Icon }, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col items-center text-center max-w-[180px]">
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mb-3 shadow-lg shadow-primary-500/50 relative">
                    <Icon className="text-2xl text-white" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-dark-900 border-2 border-primary-600 rounded-full flex items-center justify-center text-xs font-bold text-primary-400">
                      {step}
                    </div>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">{title}</h4>
                  <p className="text-xs text-dark-400">{description}</p>
                </div>
                {index < dataFlow.length - 1 && (
                  <div className="text-primary-400 text-2xl hidden sm:block">→</div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Security Features */}
        <div className="card bg-gradient-to-r from-red-600/10 to-pink-800/10 border-red-600/30">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Security & Authentication</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityFeatures.map(({ icon: Icon, title, description }, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 bg-red-600/20 border border-red-600/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-2xl text-red-400" />
                </div>
                <h4 className="text-sm font-bold text-white mb-2">{title}</h4>
                <p className="text-xs text-dark-400">{description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Advantages */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="card text-center bg-gradient-to-br from-blue-600/10 to-cyan-800/10 border-blue-600/30">
            <FiGlobe className="text-4xl text-blue-400 mx-auto mb-4" />
            <h4 className="text-lg font-bold text-white mb-2">Cross-Platform</h4>
            <p className="text-sm text-dark-400">One codebase, three platforms (iOS, Android, Web)</p>
          </div>
          <div className="card text-center bg-gradient-to-br from-green-600/10 to-emerald-800/10 border-green-600/30">
            <FiZap className="text-4xl text-green-400 mx-auto mb-4" />
            <h4 className="text-lg font-bold text-white mb-2">High Performance</h4>
            <p className="text-sm text-dark-400">PM2 cluster mode with load balancing</p>
          </div>
          <div className="card text-center bg-gradient-to-br from-purple-600/10 to-pink-800/10 border-purple-600/30">
            <FiLayers className="text-4xl text-purple-400 mx-auto mb-4" />
            <h4 className="text-lg font-bold text-white mb-2">Scalable Design</h4>
            <p className="text-sm text-dark-400">Multi-tenant architecture ready to scale</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Architecture
