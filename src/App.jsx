import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechStack from './components/TechStack'
import ProjectShowcase from './components/ProjectShowcase'
import Features from './components/Features'
import Architecture from './components/Architecture'
import Contact from './components/Contact'

function App() {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-dark-900 overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <ProjectShowcase />
      <Features />
      <Architecture />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-dark-800 border-t border-dark-700 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-dark-400">
          <p className="mb-2">© 2025 Venkata Sai Ram Pandranki. All rights reserved.</p>
          <p className="text-sm">Built with React + Vite + Tailwind CSS • Deployed on Vercel</p>
        </div>
      </footer>
    </div>
  )
}

export default App
