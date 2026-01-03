import React, { useState, useEffect } from 'react'
import { FiMonitor, FiSmartphone, FiUsers, FiX, FiChevronLeft, FiChevronRight, FiZap, FiLayers } from 'react-icons/fi'
import { SiReact, SiNodedotjs, SiMongodb, SiExpo } from 'react-icons/si'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const ProjectShowcase = () => {
  const [activeTab, setActiveTab] = useState('admin')
  const [modalImage, setModalImage] = useState(null)

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (modalImage) {
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
    } else {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
  }, [modalImage])

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && modalImage) {
        setModalImage(null)
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [modalImage])

  // Screenshot data
  const screenshots = {
    admin: [
      { 
        id: 1, 
        title: 'Admin Login with OTP Authentication', 
        path: '/screenshots/admin/adminloginscreen.png',
        description: 'Secure OTP-based authentication system with elegant dark UI'
      },
      { 
        id: 2, 
        title: 'OTP Verification Screen', 
        path: '/screenshots/admin/admin verificationscreen.png',
        description: '6-digit OTP verification with countdown timer and resend functionality'
      },
      { 
        id: 3, 
        title: 'Dashboard Overview', 
        path: '/screenshots/admin/admindashboard.png',
        description: 'Real-time KPIs: $45K revenue, 1.2K orders, 892 customers with trend indicators'
      },
      { 
        id: 4, 
        title: 'Category Management - Tree View', 
        path: '/screenshots/admin/admincategorymanagement.png',
        description: 'Hierarchical category tree with advanced filters and inline editing'
      },
      { 
        id: 5, 
        title: 'Category Analytics Dashboard', 
        path: '/screenshots/admin/categoryanalytic.png',
        description: 'Statistics & Analytics: 17 categories, 12 active, 6 level depth with distribution charts'
      },
      { 
        id: 6, 
        title: 'Multi-level Category Hierarchy', 
        path: '/screenshots/admin/categoryhierarchy.png',
        description: '5-level deep category nesting with commission tracking (Fashion → Womens → Jeans → etc.)'
      },
      { 
        id: 7, 
        title: 'Create Category Form', 
        path: '/screenshots/admin/admincreatecategoryform.png',
        description: 'Multi-language category creation (English, Hindi, Tamil, Telugu) with SEO slug generation'
      },
      { 
        id: 8, 
        title: 'Move Category Modal', 
        path: '/screenshots/admin/movecategoryform.png',
        description: 'Drag-and-drop category reorganization with parent selection'
      },
      { 
        id: 9, 
        title: 'Brand Management - List View', 
        path: '/screenshots/admin/brandlistview.png',
        description: 'Comprehensive brand list with verification status, product counts, and risk assessment'
      },
      { 
        id: 10, 
        title: 'Brand Management - Card View', 
        path: '/screenshots/admin/brandcardview.png',
        description: 'Visual brand cards with verification badges, featured tags, and statistics'
      },
      { 
        id: 11, 
        title: 'Brand Statistics Dashboard', 
        path: '/screenshots/admin/adminbrandmanagement.png',
        description: '12 brands overview with verification metrics, high risk alerts, and active status tracking'
      },
      { 
        id: 12, 
        title: 'Advanced Brand Filters', 
        path: '/screenshots/admin/brandswithfloatingfilterpanel.png',
        description: 'Floating filter panel with status, featured, and deleted brand filters'
      },
      { 
        id: 13, 
        title: 'Create Brand Form - Step 1', 
        path: '/screenshots/admin/createbrandform.png',
        description: '5-step brand onboarding with multi-language support and progress tracking'
      },
    ],
    vendor: [
      { 
        id: 1, 
        title: 'Vendor Login with OTP', 
        path: '/screenshots/vendor/vendorloginscreen.png',
        description: 'Secure vendor authentication with phone number and OTP verification - orange themed UI'
      },
      { 
        id: 2, 
        title: 'OTP Verification Screen', 
        path: '/screenshots/vendor/vendorverificationscreen.png',
        description: '6-digit OTP entry with countdown timer and change phone number option'
      },
      { 
        id: 3, 
        title: 'Vendor Dashboard', 
        path: '/screenshots/vendor/vendordashboard.png',
        description: 'Comprehensive dashboard: $12,450 total sales, 47 active orders, quick action buttons, recent activity feed'
      },
      { 
        id: 4, 
        title: 'Browse Categories - Tree View', 
        path: '/screenshots/vendor/vendorcategoryscreen.png',
        description: 'Hierarchical category browser with level filters, expand/collapse tree, and commission percentages'
      },
      { 
        id: 5, 
        title: 'Categories with Advanced Filters', 
        path: '/screenshots/vendor/categoryscreenwithfilters.png',
        description: 'Featured categories carousel with level-wise filtering and category exploration'
      },
      { 
        id: 6, 
        title: 'Category Grid View', 
        path: '/screenshots/vendor/categorygridview.png',
        description: 'Card-based category display with subcategory counts, commission rates, and quick explore buttons'
      },
    ],
    mobile: [
      { 
        id: 1, 
        title: 'Mobile App Landing Screen', 
        path: '/screenshots/mobile/mobilelandingscreen.jpeg',
        description: 'Stunning splash screen with infinity logo and "Infinite choices. Instant delivery." tagline'
      },
      { 
        id: 2, 
        title: 'Login & Signup with OTP', 
        path: '/screenshots/mobile/mobileloginscreen.jpeg',
        description: 'Beautiful onboarding with "Why choose ZestInfinite?" carousel and OTP authentication'
      },
      { 
        id: 3, 
        title: 'User Profile Setup', 
        path: '/screenshots/mobile/mobileuserinfo.jpeg',
        description: 'Profile completion form with first name, last name, phone, and email fields'
      },
      { 
        id: 4, 
        title: 'OTP Verification', 
        path: '/screenshots/mobile/mobileverification.jpeg',
        description: '6-digit OTP entry with resend timer and 24/7 support indicator'
      },
      { 
        id: 5, 
        title: 'Home Screen - Trending Products', 
        path: '/screenshots/mobile/mobilehomescreen(basic).jpeg',
        description: 'Product cards with discount badges, delivery time, vendor info, and floating cart (5 items)'
      },
      { 
        id: 6, 
        title: 'Product Detail Page', 
        path: '/screenshots/mobile/mobilepdp.jpeg',
        description: 'Fresh carrot PDP: ₹63.92 with 6% off, pack size selector (1kg/2kg), stock status, cart badge (3 items)'
      },
      { 
        id: 7, 
        title: 'Shopping Cart Screen', 
        path: '/screenshots/mobile/mobilecartscreen.jpeg',
        description: 'Cart with apple (3kg, ₹425), delivery in 21 mins, donation option (₹2), bill summary showing ₹75 savings'
      },
      { 
        id: 8, 
        title: 'Connection Lost Error', 
        path: '/screenshots/mobile/mobileconnectionlost.jpeg',
        description: 'User-friendly offline screen with concentric circles animation and retry option'
      },
    ],
  }

  const tabs = [
    { id: 'admin', name: 'Admin Web Dashboard', icon: FiMonitor, count: screenshots.admin.length },
    { id: 'vendor', name: 'Vendor Web Portal', icon: FiUsers, count: screenshots.vendor.length },
    { id: 'mobile', name: 'Customer Mobile App', icon: FiSmartphone, count: screenshots.mobile.length },
  ]

  const projectStats = [
    { label: 'Applications', value: '3', icon: FiLayers },
    { label: 'Screenshots', value: '27', icon: FiMonitor },
    { label: 'API Endpoints', value: '40+', icon: SiNodedotjs },
    { label: 'DB Collections', value: '15+', icon: SiMongodb },
  ]

  const techStack = [
    { name: 'React Native (Expo)', icon: SiReact, color: '#61DAFB' },
    { name: 'Expo RN Web', icon: SiExpo, color: '#000020' },
    { name: 'Node.js + Express', icon: SiNodedotjs, color: '#339933' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  ]

  const keyFeatures = [
    'OTP-based authentication across all platforms',
    'Real-time dashboards with KPIs and analytics',
    'Multi-level hierarchical category management (6 levels deep)',
    'Native mobile shopping experience with React Native',
    'Advanced filtering, search, and cart management',
    'Multi-language support (English, Hindi, Tamil, Telugu)',
    'Vendor portal with inventory and order management',
    'Social donation features integrated in checkout flow',
  ]

  return (
    <section id="projects" className="section-container bg-dark-800/30">
      <div className="animate-on-scroll">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-600/10 border border-primary-600/30 rounded-full px-6 py-2 mb-6">
            <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
            <span className="text-primary-400 font-medium text-sm">Ongoing Project</span>
          </div>
          <h2 className="section-title gradient-text">ZestInfinite</h2>
          <p className="section-subtitle mb-8">
            Production-Grade Multi-Tenant Quick Commerce Platform
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {techStack.map(({ name, icon: Icon, color }) => (
              <div
                key={name}
                className="flex items-center space-x-2 px-4 py-2 bg-dark-800 border border-dark-700 rounded-lg hover:border-primary-600 transition-all"
              >
                <Icon style={{ color }} className="text-xl" />
                <span className="text-sm text-dark-300">{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {projectStats.map(({ label, value, icon: Icon }, index) => (
            <div
              key={index}
              className="card text-center hover:scale-105 transition-all duration-300"
            >
              <Icon className="text-4xl text-primary-500 mx-auto mb-3" />
              <p className="text-3xl font-bold text-white mb-1">{value}</p>
              <p className="text-sm text-dark-400">{label}</p>
            </div>
          ))}
        </div>

        {/* Project Description */}
        <div className="card mb-12 bg-gradient-to-r from-primary-600/10 to-primary-800/10 border-primary-600/30">
          <h3 className="text-2xl font-bold text-white mb-4">About The Project</h3>
          <p className="text-dark-300 leading-relaxed mb-6">
            <span className="text-white font-semibold">ZestInfinite</span> is a comprehensive multi-tenant e-commerce platform 
            built from the ground up using a <span className="text-primary-400 font-semibold">unified React Native codebase</span>. 
            The platform leverages <span className="text-primary-400">Expo React Native Web</span> to deploy seamlessly across 
            mobile (iOS/Android) and web platforms, demonstrating cutting-edge cross-platform architecture.
          </p>
          
          <p className="text-dark-300 leading-relaxed mb-6">
            The ecosystem includes <span className="text-white font-semibold">three complete applications</span>: 
            Admin Dashboard (purple theme), Vendor Portal (orange theme), and Customer Mobile App (green/yellow theme). 
            Each application maintains <span className="text-primary-400">consistent functionality</span> while offering 
            role-specific features, optimized workflows, and distinct branding.
          </p>
          
          {/* Key Features */}
          <h4 className="text-xl font-bold text-white mb-4 mt-8">🚀 Key Features Implemented</h4>
          <div className="grid md:grid-cols-2 gap-3">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-dark-300">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Screenshots Section with Carousel */}
        <div className="mb-8">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Application Screenshots</h3>
          
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {tabs.map(({ id, name, icon: Icon, count }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center space-x-3 px-4 sm:px-6 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === id
                    ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg shadow-primary-500/50 scale-105'
                    : 'bg-dark-800 text-dark-400 hover:text-white hover:bg-dark-700'
                }`}
              >
                <Icon className="text-lg sm:text-xl" />
                <span className="hidden sm:inline text-sm sm:text-base">{name}</span>
                <span className="sm:hidden text-sm">{id.charAt(0).toUpperCase() + id.slice(1)}</span>
                <span className="px-2 py-1 bg-dark-900/50 rounded-full text-xs">{count}</span>
              </button>
            ))}
          </div>

          {/* Carousel Container */}
          <div className="card overflow-hidden portfolio-carousel">
            <Carousel
              showThumbs={window.innerWidth >= 640}
              showStatus={false}
              showIndicators={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={8000}
              transitionTime={600}
              swipeable={true}
              emulateTouch={true}
              showArrows={true}
              stopOnHover={true}
              renderArrowPrev={(clickHandler, hasPrev) => (
                hasPrev && (
                  <button
                    onClick={clickHandler}
                    className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 sm:w-12 sm:h-12 bg-primary-600 rounded-full flex items-center justify-center text-white hover:bg-primary-700 transition-all shadow-lg hover:scale-110"
                    aria-label="Previous slide"
                  >
                    <FiChevronLeft size={16} className="sm:w-6 sm:h-6" />
                  </button>
                )
              )}
              renderArrowNext={(clickHandler, hasNext) => (
                hasNext && (
                  <button
                    onClick={clickHandler}
                    className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 sm:w-12 sm:h-12 bg-primary-600 rounded-full flex items-center justify-center text-white hover:bg-primary-700 transition-all shadow-lg hover:scale-110"
                    aria-label="Next slide"
                  >
                    <FiChevronRight size={16} className="sm:w-6 sm:h-6" />
                  </button>
                )
              )}
              renderThumbs={() =>
                screenshots[activeTab].map((screenshot, index) => (
                  <div key={index} className="cursor-pointer">
                    <img
                      src={screenshot.path}
                      alt={screenshot.title}
                      className="object-cover h-16 rounded"
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="60"><rect width="100" height="60" fill="%231e293b"/><text x="50%" y="50%" fill="%237c3aed" text-anchor="middle" dy=".3em" font-size="10">Screenshot</text></svg>'
                      }}
                    />
                  </div>
                ))
              }
            >
              {screenshots[activeTab].map((screenshot) => (
                <div
                  key={screenshot.id}
                  onClick={() => setModalImage(screenshot)}
                  className="cursor-pointer group"
                >
                  <div className="relative bg-dark-900 rounded-lg overflow-hidden">
                    <img
                      src={screenshot.path}
                      alt={screenshot.title}
                      className="w-full object-contain max-h-[400px] sm:max-h-[500px] group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500"><rect width="800" height="500" fill="%231e293b"/><text x="50%" y="50%" fill="%237c3aed" text-anchor="middle" dy=".3em" font-size="24">Screenshot Coming Soon</text></svg>'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-left">
                        <h4 className="text-base sm:text-xl font-bold text-white mb-1 sm:mb-2">{screenshot.title}</h4>
                        <p className="text-xs sm:text-sm text-dark-300 line-clamp-2">{screenshot.description}</p>
                        <p className="text-primary-400 text-xs sm:text-sm mt-2">Click to view full size →</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>

        {/* Project Links */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          <button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Discuss This Project
          </button>
          <a
            href="/Venkata_Sai_Ram_Pandranki_Resume.pdf"
            download
            className="btn-secondary"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* MODAL PORTAL - OUTSIDE SECTION FOR TRUE CENTER */}
      {modalImage && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            backdropFilter: 'blur(8px)',
            padding: '1rem'
          }}
          onClick={() => setModalImage(null)}
        >
          {/* Close Button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              setModalImage(null)
            }}
            style={{
              position: 'fixed',
              top: '12px',
              right: '12px',
              zIndex: 10000
            }}
            className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-600 rounded-full flex items-center justify-center text-white hover:bg-primary-700 transition-all shadow-2xl hover:scale-110"
            aria-label="Close modal"
          >
            <FiX className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Modal Content */}
          <div 
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <img
              src={modalImage.path}
              alt={modalImage.title}
              style={{
                maxWidth: '100%',
                maxHeight: 'calc(90vh - 150px)',
                objectFit: 'contain',
                borderRadius: '12px',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
              }}
              onError={(e) => {
                e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600"><rect width="800" height="600" fill="%231e293b"/><text x="50%" y="50%" fill="%237c3aed" text-anchor="middle" dy=".3em" font-size="24">Screenshot Coming Soon</text></svg>'
              }}
            />

            {/* Description */}
            <div className="w-full max-w-3xl bg-dark-900/90 rounded-xl p-4 sm:p-6 backdrop-blur-sm border border-dark-700">
              <h3 className="text-base sm:text-xl font-bold text-white mb-2 text-center">{modalImage.title}</h3>
              <p className="text-xs sm:text-base text-dark-300 text-center">{modalImage.description}</p>
            </div>

            {/* Hint */}
            <p className="text-dark-500 text-xs text-center">
              Press <kbd className="px-2 py-1 bg-dark-800 rounded text-primary-400 text-xs">ESC</kbd> or click outside
            </p>
          </div>
        </div>
      )}
    </section>
  )
}

export default ProjectShowcase





