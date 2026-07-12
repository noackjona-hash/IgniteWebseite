import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { LanguageProvider } from './i18n/LanguageProvider';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroPage from './pages/HeroPage';
import AlgorithmPage from './pages/AlgorithmPage';
import ArchitecturePage from './pages/ArchitecturePage';
import DownloadPage from './pages/DownloadPage';
import AboutPage from './pages/AboutPage';
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <Routes location={location}>
          <Route path="/" element={<HeroPage />} />
          <Route path="/algorithm" element={<AlgorithmPage />} />
          <Route path="/architecture" element={<ArchitecturePage />} />
          <Route path="/download" element={<DownloadPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="app">
          <Navbar />
          <AnimatedRoutes />
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}
