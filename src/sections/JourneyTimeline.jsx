import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import FloatingOrbitLayer from '../components/FloatingOrbitLayer.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { timeline } from '../data/timeline.js';
import { siteContent } from '../data/siteContent.js';
import { fromSide, staggerContainer } from '../utils/motion.js';

export default function JourneyTimeline({ language }) {
  const t = (value) => value[language];
  const reduceMotion = useReducedMotion();
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 72%', 'end 36%'],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="journey" className="section-band section-tone-orbit-dark section-pad">
      <FloatingOrbitLayer density="medium" />
      <div className="page-shell relative">
        <SectionHeader
          title={t(siteContent.sectionTitles.journey)}
          subtitle={language === 'ar' ? 'مسار بدأ بالفضول وكبر بالتعلم والتجربة' : 'A path that started with curiosity and grew with learning and experimentation.'}
          language={language}
        />
        <div ref={timelineRef} className="relative mx-auto max-w-5xl">
          <svg
            viewBox="0 0 42 900"
            preserveAspectRatio="none"
            className="absolute bottom-0 top-0 hidden h-full w-12 text-cream/20 ltr:-left-2 rtl:-right-2 rtl-flip sm:block"
            fill="none"
            aria-hidden="true"
          >
            <path d="M21 8C9 92 33 160 20 244C8 330 34 414 20 502C6 600 33 682 21 892" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="7 10" />
          </svg>
          <div className="absolute bottom-0 top-0 w-px bg-cream/25 ltr:left-4 rtl:right-4 sm:hidden" />
          <motion.div className="timeline-progress ltr:left-4 rtl:right-4 sm:ltr:-left-2 sm:rtl:-right-2" style={reduceMotion ? undefined : { scaleY: lineScale }} />
          <motion.div variants={staggerContainer} initial={reduceMotion ? false : 'hidden'} whileInView="show" viewport={{ once: true, amount: 0.18 }} className="space-y-8">
            {timeline.map((item, index) => (
              <motion.article
                key={item.role.en}
                variants={fromSide(index % 2 === 0 ? (language === 'ar' ? 'right' : 'left') : (language === 'ar' ? 'left' : 'right'))}
                whileHover={reduceMotion ? undefined : { x: language === 'ar' ? -4 : 4 }}
                className={`relative ps-12 ${index % 2 === 1 ? 'lg:ps-28' : ''}`}
              >
                <span className="timeline-dot absolute top-7 ltr:left-2 rtl:right-2">
                  <span className="star-dot h-4 w-4 text-burgundy drop-shadow-sm" />
                </span>
                <div className={`orbit-card timeline-card ${item.accent} rounded-[30px] p-6`}>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="timeline-year">{t(item.date)}</p>
                      <h3 className="mt-3 text-2xl font-bold text-deepBrown">{t(item.role)}</h3>
                    </div>
                    <div className="flex h-16 w-28 items-center justify-center rounded-[16px] border border-burgundy/10 bg-white/76 p-3 shadow-sm">
                      <img src={item.logo} alt={t(item.organization)} className="max-h-10 max-w-full object-contain" loading="lazy" />
                    </div>
                  </div>
                  <p className="mt-3 font-semibold text-brown">{t(item.organization)} · <span className="italic text-brown/75">{t(item.subtitle)}</span></p>
                  <div className="brand-underline mt-2 w-44" aria-hidden="true"><span /></div>
                  <ul className="mt-4 space-y-2 text-brown">
                    {item.bullets.map((bullet) => <li key={bullet.en} className="leading-7">• {t(bullet)}</li>)}
                  </ul>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
