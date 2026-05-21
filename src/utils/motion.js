export const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.78, ease: [0.22, 1, 0.36, 1] } },
};

export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.06,
    },
  },
};

export const softScale = {
  hidden: { opacity: 0, scale: 0.96, y: 18, filter: 'blur(8px)' },
  show: { opacity: 1, scale: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] } },
};

export const drawPath = {
  hidden: { pathLength: 0, opacity: 0 },
  show: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

export const hoverLift = {
  y: -8,
  rotate: 0,
  scale: 1.015,
  transition: { duration: 0.32, ease: [0.22, 1, 0.36, 1] },
};

export const fromSide = (direction = 'left') => ({
  hidden: { opacity: 0, x: direction === 'left' ? -26 : 26, y: 10, filter: 'blur(8px)' },
  show: { opacity: 1, x: 0, y: 0, filter: 'blur(0px)', transition: { duration: 0.82, ease: [0.22, 1, 0.36, 1] } },
});
