import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Features from './components/Features'
import Workflow from './components/Workflow'
import Pricing from './components/Pricing'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
      </div>
      <Features />
      <Workflow />
      <Pricing />
      <Testimonial />
      <Footer />
    </>
  )
}

export default App