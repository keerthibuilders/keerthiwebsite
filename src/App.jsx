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


function App() {
  return (
    <BrowserRouter>
      <div className="App">
       <Navbar />
        <Routes>
          <Route path="/" element={<HomeMainPage />} />
          <Route path="/home" element={<HomeHeroSection />} />
          <Route path="/about" element={<HomeAboutSection />} />
          <Route path="/projects" element={<HomeProjectSection />} />
          <Route path="/contact" element={<HomeContactSection />} />

          <Route path="/detailspage" element={<SiteDetailsPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
