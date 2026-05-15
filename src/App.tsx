import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import BackToTop from '@/components/BackToTop';
import Footer from '@/sections/Footer';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ServicesPage from '@/pages/ServicesPage';
import ProjectPage from '@/pages/ProjectPage';
import ContactPage from '@/pages/ContactPage';
import BuyerFolioPage from '@/pages/BuyerFolioPage';
import { useSmoothScroll } from '@/lib/useSmoothScroll';

/** Scroll to top on route change, or to hash target if present */
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  /* Send page_view to Google Analytics on every route change */
  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('config', 'G-5FL3MVX8EZ', {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return null;
}

export default function App() {
  useSmoothScroll();

  return (
    <div className="relative bg-white text-ink">
      <ScrollToTop />
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects/buyerfolio" element={<BuyerFolioPage />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
