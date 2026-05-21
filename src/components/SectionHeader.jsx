import { motion, useReducedMotion } from 'framer-motion';
import { fadeUp } from '../utils/motion.js';

export default function SectionHeader({ eyebrow, title, subtitle, language, align = 'start', className = '' }) {
  const reduceMotion = useReducedMotion();
  const centered = align === 'center';

  return (
    <motion.div
      initial={reduceMotion ? false : 'hidden'}
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeUp}
      className={`${centered ? 'mx-auto text-center' : ''} relative mb-10 max-w-3xl ${className}`}
    >
      {eyebrow ? (
        <p className="orbit-eyebrow">
          <span className="star-dot" />
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-5xl font-semibold leading-tight text-deepBrown sm:text-6xl">{title}</h2>
      <div className={`${centered ? 'mx-auto' : ''} brand-underline ${language === 'ar' ? 'rtl-line' : ''}`} aria-hidden="true">
        <span />
      </div>
      {subtitle ? <p className="mt-4 text-lg leading-8 text-brown/82">{subtitle}</p> : null}
    </motion.div>
  );
}
