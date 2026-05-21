import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import LogoMark from './LogoMark.jsx';

export default function IntroLoader() {
  const [show, setShow] = useState(() => window.sessionStorage.getItem('asrarIntroSeen') !== 'true');
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!show) return undefined;
    const timer = window.setTimeout(() => {
      window.sessionStorage.setItem('asrarIntroSeen', 'true');
      setShow(false);
    }, reduceMotion ? 120 : 1250);
    return () => window.clearTimeout(timer);
  }, [reduceMotion, show]);

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          className="fixed inset-0 z-[80] grid place-items-center bg-cream"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.38 }}
          aria-hidden="true"
        >
          <motion.div
            initial={reduceMotion ? false : { scale: 0.78, y: 20, rotate: -4 }}
            animate={reduceMotion ? {} : { scale: [0.78, 1.06, 1], y: [20, 0, -34], rotate: [-4, 2, 0] }}
            transition={{ duration: 1.05, ease: 'easeInOut' }}
            className="text-brown"
          >
            <LogoMark className="h-24 w-24" />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
