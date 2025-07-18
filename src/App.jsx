import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeMainPage from '../src/pages/HomePage/HomeMainPage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import SiteDetailsPage from './pages/DetailsPage/SiteDetailsPage';
import HomeHeroSection from './pages/HomePage/Components/HomeHeroSection';
import HomeContactSection from './pages/HomePage/Components/HomeContactSeaction';
import HomeAboutSection from './pages/HomePage/Components/HomeAboutSection';
import HomeProjectSection from './pages/HomePage/Components/HomeProjectSection';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';
import SocialMediaBar from './components/SocialMediaBar/SocialMediaBar';
import About from './pages/About/About';
import ProjectMainPage from './pages/Project/ProjectMainPage';
import CommercialProjects from './pages/Project/Commercial/CommercialProjects';
import ResidentialProjects from './pages/Project/Residential/ResidentialProjects';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
       <Navbar />
        <Routes>
          <Route path="/" element={<HomeMainPage />} />
          <Route path="/detailspage" element={<SiteDetailsPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<ProjectMainPage />} />
          <Route path="/residential" element={<ResidentialProjects />} />
          <Route path="/commercial" element={<CommercialProjects />} />
        </Routes>
        <SocialMediaBar />
        <WhatsAppButton />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
