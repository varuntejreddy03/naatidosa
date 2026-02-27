import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import OurStory from './pages/OurStory';
import Menu from './pages/Menu';
import FindUs from './pages/FindUs';
import Contact from './pages/Contact';
import Social from './pages/Social';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/story" element={<OurStory />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/find-us" element={<FindUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/social" element={<Social />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
