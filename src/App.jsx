import { AnimatePresence, MotionConfig } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import IntroLoader from './components/IntroLoader.jsx';
import Footer from './layout/Footer.jsx';
import Navbar from './layout/Navbar.jsx';
import CertificatesArchive from './pages/CertificatesArchive.jsx';
import Home from './pages/Home.jsx';
import ProjectsArchive from './pages/ProjectsArchive.jsx';

function NotFound({ language }) {
  return (
    <main className="page-shell grid min-h-screen place-items-center pt-28 text-center">
      <div className="orbit-card rounded-[28px] p-10">
        <h1 className="font-display text-6xl font-semibold text-deepBrown">404</h1>
        <p className="mt-3 text-brown">{language === 'ar' ? 'معذرة على الإزعاج، الصفحة المطلوبة غير موجودة' : 'The page you are looking for does not exist.'}</p>
      </div>
    </main>
  );
}

function scrollToCurrentHash(behavior = 'smooth') {
  if (!window.location.hash) return false;
  const id = window.location.hash.replace('#', '');
  const target = document.getElementById(id);
  if (!target) return false;
  target.scrollIntoView({ behavior, block: 'start' });
  return true;
}

export default function App() {
  const [language, setLanguage] = useState(() => window.localStorage.getItem('asrarLanguage') || 'en');
  const location = useLocation();

  useEffect(() => {
    window.localStorage.setItem('asrarLanguage', language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  useEffect(() => {
    if (location.hash) {
      [80, 300, 700].forEach((delay) => {
        window.setTimeout(() => scrollToCurrentHash('auto'), delay);
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const handleHashChange = () => {
      [40, 260, 620].forEach((delay) => {
        window.setTimeout(() => scrollToCurrentHash('auto'), delay);
      });
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <MotionConfig transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}>
      <IntroLoader />
      <Navbar language={language} setLanguage={setLanguage} />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home language={language} />} />
          <Route path="/projects" element={<ProjectsArchive language={language} />} />
          <Route path="/certificates" element={<CertificatesArchive language={language} />} />
          <Route path="*" element={<NotFound language={language} />} />
        </Routes>
      </AnimatePresence>
      <Footer language={language} />
    </MotionConfig>
  );
}
