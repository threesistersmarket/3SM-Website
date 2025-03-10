import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ThreeSisters from './pages/ThreeSisters';
import CoopEducation from './pages/CoopEducation';
import FoodJustice from './pages/FoodJustice';
import Ownership from './pages/Ownership';
import Donate from './pages/Donate';
import Contact from './pages/Contact';
import BlogsAll from './pages/BlogsAll';
import BlogPost from './pages/BlogPost';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';
import MediaDisclaimer from './pages/MediaDisclaimer';
import Team from './pages/Team';

function ScrollToTop() {
  const location = useLocation();
  
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/three-sisters" element={<ThreeSisters />} />
          <Route path="/coop-education" element={<CoopEducation />} />
          <Route path="/food-justice" element={<FoodJustice />} />
          <Route path="/ownership" element={<Ownership />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/blog" element={<BlogsAll />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/media-disclaimer" element={<MediaDisclaimer />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;