import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeMainPage from '../src/pages/HomePage/HomeMainPage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import SiteDetailsPage from './pages/DetailsPage/SiteDetailsPage';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
       <Navbar />
        <Routes>
          <Route path="/" element={<HomeMainPage />} />
          <Route path="/detailspage" element={<SiteDetailsPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
