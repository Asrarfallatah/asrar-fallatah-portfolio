import { motion, useReducedMotion } from 'framer-motion';
import FloatingOrbitLayer from '../components/FloatingOrbitLayer.jsx';
import LogoMark from '../components/LogoMark.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { siteContent } from '../data/siteContent.js';
import { fadeUp, staggerContainer } from '../utils/motion.js';

export default function About({ language }) {
  const t = (value) => value[language];
  const reduceMotion = useReducedMotion();
  return (
    <section id="about" className="section-band section-tone-cream section-pad">
      <FloatingOrbitLayer density="low" />
      <motion.div
        variants={staggerContainer}
        initial={reduceMotion ? false : 'hidden'}
        whileInView="show"
        viewport={{ once: true, amount: 0.28 }}
        className="page-shell about-two-column"
      >
        <motion.div variants={fadeUp} className="about-orbit-card orbit-card overflow-hidden rounded-[34px] p-6 sm:p-7">
          <div className="about-logo-stage">
            <span className="about-orbit-ring about-orbit-ring-one" />
            <span className="about-orbit-ring about-orbit-ring-two" />
            <motion.span
              className="about-orbit-ring about-orbit-ring-spin"
              animate={reduceMotion ? {} : { rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            />
            <LogoMark className="relative z-10 h-36 w-36 sm:h-40 sm:w-40" />
            <span className="about-satellite about-satellite-one" />
            <span className="about-satellite about-satellite-two" />
            <span className="about-satellite about-satellite-three" />
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="about-story-card orbit-card rounded-[34px] p-7 sm:p-9">
          <SectionHeader
            eyebrow={t(siteContent.about.eyebrow)}
            title={t(siteContent.about.title)}
            subtitle={language === 'ar' ? 'عندما يجتمع الفن مع التقنية و الأنظمة ' : 'Where art meets systems and technology'}
            language={language}
            className="mb-5"
          />
          <div className="space-y-5 text-lg leading-9 text-brown">
            <p>{t(siteContent.about.letter)}</p>
            <p>{t(siteContent.about.detail)}</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
