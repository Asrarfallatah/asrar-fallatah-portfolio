import { motion, useReducedMotion } from 'framer-motion';

function StarPath({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path d="M12 2.8C13.4 8 16 10.6 21.2 12C16 13.4 13.4 16 12 21.2C10.6 16 8 13.4 2.8 12C8 10.6 10.6 8 12 2.8Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function OrbitBackdrop() {
  const reduceMotion = useReducedMotion();
  const floatMotion = reduceMotion
    ? {}
    : {
        animate: { y: [0, -14, 0], rotate: [0, 3, 0] },
        transition: { duration: 7, repeat: Infinity, ease: 'easeInOut' },
      };

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.span {...floatMotion} className="hero-orb left-[7%] top-[23%] h-36 w-56 bg-berryPlum" />
      <motion.span {...floatMotion} className="hero-orb right-[8%] top-[19%] h-48 w-48 bg-blueAccent/85" style={{ animationDelay: '1.1s' }} />
      <motion.span {...floatMotion} className="hero-orb right-[9%] top-[31%] h-32 w-32 bg-navy/95" style={{ animationDelay: '1.9s' }} />
      <motion.span {...floatMotion} className="hero-orb bottom-[18%] left-[12%] h-28 w-28 bg-royalPurple/88" style={{ animationDelay: '2.2s' }} />
      <motion.div {...floatMotion} className="absolute right-[20%] top-[18%] text-burgundy/65">
        <StarPath className="motion-star h-7 w-7" />
      </motion.div>
      <motion.div {...floatMotion} className="absolute bottom-[26%] left-[24%] text-navy/80">
        <StarPath className="motion-star h-5 w-5" />
      </motion.div>
      <svg className="absolute left-[9%] top-[46%] hidden h-28 w-44 text-navy/46 md:block rtl-flip" viewBox="0 0 180 120" fill="none">
        <path d="M9 96C50 55 92 48 141 18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeDasharray="4 9" />
        <path d="M126 14L150 12L142 36" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}
