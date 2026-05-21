import { motion, useReducedMotion } from 'framer-motion';

export default function PageTransition({ children }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.main
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
      transition={{ duration: 0.36, ease: 'easeOut' }}
    >
      {children}
    </motion.main>
  );
}
