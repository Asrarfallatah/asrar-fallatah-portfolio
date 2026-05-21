import { motion, useReducedMotion } from 'framer-motion';

const densityMap = {
  low: [
    ['left-[8%] top-[18%] h-2 w-2 bg-blueAccent', 0],
    ['right-[12%] bottom-[18%] h-2.5 w-2.5 bg-softPink', 1.1],
  ],
  medium: [
    ['left-[6%] top-[18%] h-2.5 w-2.5 bg-blueAccent', 0],
    ['right-[8%] top-[24%] h-2 w-2 bg-cream', 1.4],
    ['left-[18%] bottom-[14%] h-2 w-2 bg-softPink', 2.2],
  ],
  high: [
    ['left-[5%] top-[14%] h-2.5 w-2.5 bg-blueAccent', 0],
    ['right-[7%] top-[22%] h-2.5 w-2.5 bg-softPink', 1.1],
    ['left-[20%] bottom-[12%] h-2 w-2 bg-cream', 1.8],
    ['right-[24%] bottom-[18%] h-2 w-2 bg-roseWine', 2.5],
  ],
};

function OrbitPath({ className = '', delay = 0 }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.svg
      className={`absolute ${className}`}
      viewBox="0 0 260 110"
      fill="none"
      aria-hidden="true"
      initial={reduceMotion ? false : { opacity: 0, pathLength: 0 }}
      whileInView={reduceMotion ? {} : { opacity: 1, pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.3, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.path d="M8 74C55 12 132 8 208 52C224 61 239 69 252 72" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="5 10" />
      <motion.path d="M214 50C226 39 239 38 252 47" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </motion.svg>
  );
}

export default function FloatingOrbitLayer({ density = 'medium', className = '' }) {
  const reduceMotion = useReducedMotion();
  const items = densityMap[density] || densityMap.medium;

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {items.map(([classes, delay]) => (
        <span
          key={classes}
          className={`signal-dot absolute rounded-full ${classes}`}
          style={reduceMotion ? undefined : { animationDelay: `${delay}s` }}
        />
      ))}
      <OrbitPath className="bottom-[8%] left-[7%] hidden h-24 w-56 text-blueAccent/30 md:block rtl-flip" delay={0.1} />
      <OrbitPath className="right-[8%] top-[10%] hidden h-20 w-48 text-softPink/35 md:block" delay={0.22} />
      <motion.span
        className="absolute right-[18%] top-[16%] h-5 w-5 text-softPink/70"
        animate={reduceMotion ? {} : { opacity: [0.4, 1, 0.4], scale: [0.9, 1.18, 0.9] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="star-dot h-full w-full" />
      </motion.span>
    </div>
  );
}
