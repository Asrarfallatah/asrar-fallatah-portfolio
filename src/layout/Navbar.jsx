import { Menu, X } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import LogoMark from '../components/LogoMark.jsx';
import LanguageToggle from '../components/LanguageToggle.jsx';
import { siteContent } from '../data/siteContent.js';

const navItems = [
  ['home', '/'],
  ['about', '/#about'],
  ['projects', '/#projects'],
  ['skills', '/#skills'],
  ['journey', '/#journey'],
  ['certificates', '/#certificates'],
  ['contact', '/#contact'],
];

const sectionIds = ['home', ...navItems.map(([, href]) => href.split('#')[1]).filter(Boolean)];

export default function Navbar({ language, setLanguage }) {
  const t = (value) => value[language];
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('#home');
  const reduceMotion = useReducedMotion();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname, location.hash]);

  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveHash('');
      return undefined;
    }

    let frameId = 0;

    const updateActiveSection = () => {
      if (window.scrollY < 120) {
        setActiveHash('#home');
        return;
      }

      const scrollAnchor = window.scrollY + 160;
      let currentSection = '#home';

      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (!element) return;

        if (element.offsetTop <= scrollAnchor) {
          currentSection = `#${id}`;
        }
      });

      setActiveHash(currentSection);
    };

    const requestUpdate = () => {
      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
    };
  }, [location.pathname]);

  const isActive = (href) => {
    const [path, hash] = href.split('#');

    if (location.pathname === '/') {
      if (href === '/') return activeHash === '#home' || !activeHash;
      if (hash) return activeHash === `#${hash}`;
    }

    if (!hash && path !== '/') return location.pathname === path;
    return false;
  };

  const goTo = (href) => {
    const [path, hash] = href.split('#');

    if (hash && location.pathname !== '/') {
      setActiveHash(`#${hash}`);
      navigate(`/#${hash}`);
      window.setTimeout(() => document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' }), 80);
      return;
    }

    if (hash) {
      setActiveHash(`#${hash}`);
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
      window.history.replaceState(null, '', `#${hash}`);
      return;
    }

    setActiveHash('#home');
    navigate(path);
    window.setTimeout(() => {
      window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
      if (window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname);
      }
    }, 0);
  };

  return (
    <motion.header
      initial={reduceMotion ? false : { opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 0 }}
      className={`fixed inset-x-0 top-0 z-50 border-b border-burgundy/14 bg-cream/95 text-navy shadow-[0_12px_34px_rgba(5,31,68,0.10)] backdrop-blur-2xl transition-all duration-300 ${
        scrolled ? 'bg-cream/95 shadow-[0_14px_38px_rgba(5,31,68,0.14)]' : ''
      }`}
    >
      <nav className={`page-shell flex items-center justify-between gap-4 transition-all duration-300 ${scrolled ? 'h-16' : 'h-20'}`}>
        <button type="button" onClick={() => goTo('/')} className="focus-ring inline-flex items-center gap-3 rounded-full text-navy transition hover:text-burgundy">
          <LogoMark className="h-10 w-10" />
          <span className="font-display text-2xl font-semibold">Asrar</span>
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map(([key, href]) => {
            const active = isActive(href);
            return (
              <button
                key={key}
                type="button"
                onClick={() => goTo(href)}
                className={`focus-ring relative rounded-full px-3 py-2 text-sm font-bold transition-colors duration-300 ${
                  active
                    ? "bg-burgundy text-cream shadow-[0_10px_22px_rgba(101,4,37,0.20)] after:absolute after:-bottom-1 after:left-1/2 after:h-1.5 after:w-1.5 after:-translate-x-1/2 after:rotate-45 after:bg-burgundy after:content-['']"
                    : 'text-navy hover:bg-burgundy/10 hover:text-burgundy'
                }`}
              >
                {t(siteContent.nav[key])}
              </button>
            );
          })}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <LanguageToggle language={language} setLanguage={setLanguage} />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageToggle language={language} setLanguage={setLanguage} />
          <button type="button" onClick={() => setOpen((value) => !value)} className="focus-ring rounded-full border border-burgundy/25 bg-cream p-2.5 text-navy shadow-[0_8px_20px_rgba(5,31,68,0.10)]" aria-expanded={open} aria-controls="mobile-navigation" aria-label="Toggle navigation">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div id="mobile-navigation" className="page-shell mb-4 rounded-[18px] border border-burgundy/20 bg-cream/95 p-3 shadow-paper backdrop-blur lg:hidden">
          {navItems.map(([key, href]) => (
            <button key={key} type="button" onClick={() => goTo(href)} className={`focus-ring block w-full rounded-xl px-4 py-3 text-start text-sm font-bold transition ${isActive(href) ? 'bg-burgundy text-cream' : 'text-navy hover:bg-burgundy/10 hover:text-burgundy'}`}>
              {t(siteContent.nav[key])}
            </button>
          ))}
        </div>
      ) : null}
    </motion.header>
  );
}
