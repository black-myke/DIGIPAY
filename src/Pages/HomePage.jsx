import React from 'react'
import HeroSection from '../Components/HeroSection'
import Partners from '../Components/Partners'
import Service from './Service'
import HowItWorksCard from '../Components/HowItWorksCard'
import HowItWork from './HowItWork'

const HomePage = () => {
  return (
    <div className='homepage'>
      <HeroSection />
      <Partners />
      <Service />
      <HowItWork />
    </div>
  )
}

export default HomePage