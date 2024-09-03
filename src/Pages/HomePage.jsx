import React from 'react'
import HeroSection from '../Components/HeroSection'
import Partners from '../Components/Partners'
import Service from './Service'
import HowItWorksCard from '../Components/HowItWorksCard'
import HowItWork from './HowItWork'
import Footer from '../Components/Footer'

const HomePage = () => {
  return (
    <div className='homepage'>
      <HeroSection />
      <Partners />
      <Service />
      <HowItWork />
      <Footer />
    </div>
  )
}

export default HomePage