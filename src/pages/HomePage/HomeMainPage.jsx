import React, { useEffect } from 'react'
import HomeHeroSection from './Components/HomeHeroSection'
import HomeProjectSection from './Components/HomeProjectSection'
import HomeAboutSection from './Components/HomeAboutSection'
import HomeTestimonial from './Components/HomeTestimonial'
import HomeOurPropertiesSection from './Components/HomeOurPropertiesSection'
import HomeContactSection from './Components/HomeContactSeaction'
import AllProject from './Components/AllProjects'
import HomeVisionMission from './Components/HomeVisionMission'
import SmartInvestment from './Components/SmartLandInvestment'

const HomeMainPage = () => {
  // Scroll to top on component mount/reload
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <HomeHeroSection />
      <SmartInvestment />
      <HomeProjectSection />
      <HomeOurPropertiesSection />
      <AllProject />
      <HomeTestimonial />
      {/* <HomeAboutSection />
      <HomeVisionMission /> */}
      <HomeContactSection />
    </div>
  )
}

export default HomeMainPage
