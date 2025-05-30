import React from 'react'
import HomeHeroSection from './Components/HomeHeroSection'
import HomeProjectSection from './Components/HomeProjectSection'
import HomeAboutSection from './Components/HomeAboutSection'
import HomeTestimonial from './Components/HomeTestimonial'
import HomeOurPropertiesSection from './Components/HomeOurPropertiesSection'
import HomeContactSection from './Components/HomeContactSeaction'

const HomeMainPage = () => {
  return (
    <div>
      <HomeHeroSection />
      <HomeProjectSection />
      <HomeAboutSection />
      <HomeTestimonial />
      <HomeOurPropertiesSection />
      <HomeContactSection />
    </div>
  )
}

export default HomeMainPage