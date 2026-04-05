import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Booking from './components/Booking'
import Story from './components/Story'
import VisualShowcase from './components/VisualShowcase'
import Analysis from './components/Analysis'
import Rates from './components/Rates'
import Skills from './components/Skills'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Fleet from './pages/Fleet'
import Contact from './pages/Contact'
import About from './pages/About'
import Billing from './pages/Billing'
import { motion, useMotionValue, useSpring } from 'framer-motion'

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

const MouseFollower = () => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 50, stiffness: 400 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 10)
      mouseY.set(e.clientY - 10)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <motion.div 
      style={{ x, y }} 
      className="fixed top-0 left-0 w-5 h-5 bg-gray-900 rounded-full z-[9999] pointer-events-none mix-blend-difference hidden md:block"
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ repeat: Infinity, duration: 2 }}
    />
  )
}

function HomePage() {
  return (
    <div className="bg-white selection:bg-gray-900 selection:text-white">
      <Hero />
      <Booking />
      <Story />
      <VisualShowcase />
      <Analysis />
      <Rates />
      <Skills />
      <FAQ />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <MouseFollower />
      {/* Global Grain Texture for Premium Feel */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] grayscale bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/fleet" element={<Fleet />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/billing" element={<Billing />} />
      </Routes>
    </Router>
  )
}

export default App
