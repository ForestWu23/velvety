import { motion, useMotionValueEvent, useScroll, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, 'change', (y) => {
    setVisible(y > 400);
  });

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollTop}
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed bottom-8 right-8 z-50 grid h-14 w-14 place-items-center rounded-full bg-white text-wine shadow-card transition-transform duration-300 hover:-translate-y-1 hover:shadow-soft"
        >
          <ArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
