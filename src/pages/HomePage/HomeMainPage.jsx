import React, { useEffect, useState } from 'react'
import HomeHeroSection from './Components/HomeHeroSection'
import HomeProjectSection from './Components/HomeProjectSection'
import HomeAboutSection from './Components/HomeAboutSection'
import HomeTestimonial from './Components/HomeTestimonial'
import HomeOurPropertiesSection from './Components/HomeOurPropertiesSection'
import HomeContactSection from './Components/HomeContactSeaction'
import AllProject from './Components/AllProjects'
import HomeVisionMission from './Components/HomeVisionMission'
import SmartInvestment from './Components/SmartLandInvestment'
import LoadingBanner from '../../../src/components/Banner/LoadingBanner'

const HomeMainPage = () => {
  // Scroll to top on component mount/reload

  const [initialBanner, setInitialBanner] = useState(false);

  useEffect(() => {
  const getFirstTime = localStorage.getItem('isFirst');
  

  if (getFirstTime === null || parseInt(getFirstTime) < 5) {
    let num = getFirstTime ? parseInt(getFirstTime) : 0;
    num++; // Increment the visit count
    localStorage.setItem('isFirst', num.toString());
    
    setInitialBanner(true);
    setTimeout(() => {
      setInitialBanner(false);
    }, 8000);
  }
}, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if(initialBanner){
    return (
      <>
        <LoadingBanner  />
      </>
    )
  }

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
