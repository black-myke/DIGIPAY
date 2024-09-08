import React from 'react'
import HeroSection from '../Components/HeroSection'
import Partners from '../Components/Partners'
import Service from './Service'
import HowItWork from './HowItWork'
import Faq from './Faq'
import FairPricing from '../Components/FairPricing'
import ContactUs from './ContactUs'

const HomePage = () => {
  return (
    <div className='homepage'>
      <HeroSection />
      <Partners />
      <Service />
      <HowItWork />
      <Faq />
      <FairPricing />
      <ContactUs />
    </div>
  )
}

export default HomePage