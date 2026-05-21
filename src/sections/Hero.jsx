import { ArrowDown, FileText, Sparkles } from 'lucide-react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import OrbitBackdrop from '../components/OrbitBackdrop.jsx';
import LogoMark from '../components/LogoMark.jsx';
import { cvUrl, siteContent } from '../data/siteContent.js';
import { fadeUp, staggerContainer } from '../utils/motion.js';

function Star({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={`tiny-star absolute ${className}`} fill="none" aria-hidden="true">
      <path d="M12 2.8C13.4 8 16 10.6 21.2 12C16 13.4 13.4 16 12 21.2C10.6 16 8 13.4 2.8 12C8 10.6 10.6 8 12 2.8Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function OrbitLock({ language }) {
  return (
    <motion.div className="orbit-lock mx-auto mb-7" variants={fadeUp} aria-hidden="true">
      <LogoMark className="relative z-10 h-20 w-20" />
      <span className="orbit-ring orbit-ring-one" />
      <span className="orbit-ring orbit-ring-two" />
      <span className={`orbit-sweep ${language === 'ar' ? 'rtl-flip' : ''}`} />
    </motion.div>
  );
}

export default function Hero({ language }) {
  const t = (value) => value[language];
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const decorY = useTransform(scrollYProgress, [0, 0.32], [0, 44]);
  const decorYReverse = useTransform(scrollYProgress, [0, 0.32], [0, -36]);
  const chips = ['Java', 'Spring Boot', 'REST APIs', 'MySQL', 'SwiftUI'];

  return (
    <section id="home" className="hero-tone relative grid min-h-[94vh] place-items-center overflow-hidden px-4 pb-16 pt-28">
      <div className="hero-bottom-bridge" aria-hidden="true" />
      <OrbitBackdrop />
      <motion.div className="absolute inset-0" style={reduceMotion ? undefined : { y: decorY }}>
        <Star className="motion-star left-[11%] top-[25%]" />
        <Star className="motion-star right-[13%] top-[28%] h-6 w-6" />
      </motion.div>
      <motion.div className="absolute inset-0" style={reduceMotion ? undefined : { y: decorYReverse }}>
        <Star className="motion-star bottom-[22%] left-[22%] h-4 w-4" />
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial={reduceMotion ? false : 'hidden'}
        animate="show"
        className="relative z-10 mx-auto max-w-5xl text-center"
      >
        <OrbitLock language={language} />
        <motion.div variants={fadeUp} className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-burgundy/14 bg-cream/78 px-4 py-2 text-center text-sm font-semibold text-burgundy shadow-soft backdrop-blur">
          <Sparkles className="h-4 w-4" />
          <span className="min-w-0">{t(siteContent.hero.tagline)}</span>
        </motion.div>
        <div className="relative mx-auto w-fit">
          <motion.h1
            variants={fadeUp}
            className="relative mx-auto max-w-[11ch] font-display text-[clamp(3.8rem,14vw,10rem)] font-semibold leading-[0.88] tracking-normal text-deepBrown sm:max-w-none"
          >
            {t(siteContent.hero.name)}
          </motion.h1>
          <div className="brand-underline mx-auto mt-3 w-[min(70vw,560px)]" aria-hidden="true"><span /></div>
        </div>
        <motion.p
          variants={fadeUp}
          className="mx-auto mt-8 max-w-3xl text-balance text-lg leading-8 text-brown sm:text-xl"
        >
          {t(siteContent.hero.sentence)}
        </motion.p>
        <motion.div variants={fadeUp} className="mt-7 flex flex-wrap items-center justify-center gap-2">
          {chips.map((chip, index) => (
            <motion.span
              key={chip}
              className="orbit-chip"
              animate={reduceMotion ? {} : { y: [0, index % 2 ? -4 : 4, 0] }}
              transition={{ duration: 5 + index * 0.6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="star-dot text-burgundy" />
              {chip}
            </motion.span>
          ))}
        </motion.div>
        <motion.div variants={fadeUp} className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#projects" className="soft-link primary-link px-6">
            <ArrowDown className="h-4 w-4" />
            {t(siteContent.hero.primary)}
          </a>
          <a href="#journey" className="soft-link px-6">
            {t(siteContent.hero.secondary)}
          </a>
          <a href={cvUrl} target="_blank" rel="noopener noreferrer" className="soft-link px-6">
            <FileText className="h-4 w-4" />
            {t(siteContent.hero.cv)}
          </a>
        </motion.div>
      </motion.div>

      <motion.svg className="absolute bottom-10 right-[12%] hidden h-20 w-44 text-navy/45 md:block rtl-flip" viewBox="0 0 180 70" fill="none" aria-hidden="true" initial={reduceMotion ? false : 'hidden'} animate="show">
        <motion.path d="M4 44C45 12 92 12 141 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="5 8" variants={{ hidden: { pathLength: 0, opacity: 0 }, show: { pathLength: 1, opacity: 1, transition: { duration: 1.15, delay: 0.65, ease: [0.22, 1, 0.36, 1] } } }} />
        <motion.path d="M138 24L160 46L128 51" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" variants={{ hidden: { pathLength: 0, opacity: 0 }, show: { pathLength: 1, opacity: 1, transition: { duration: 0.62, delay: 1.1, ease: [0.22, 1, 0.36, 1] } } }} />
      </motion.svg>
    </section>
  );
}
