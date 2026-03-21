import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface IntroOverlayProps {
  show: boolean;
}

const IntroOverlay: React.FC<IntroOverlayProps> = ({ show }) => {
  const words = ['Welcome', 'to', 'Neura Link'];

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeOut' } }}
          className="fixed inset-0 z-[120] flex items-center justify-center bg-slate-900 text-white"
        >
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.12
                }
              }
            }}
            className="relative px-6 text-center"
          >
            {words.map((word) => (
              <div key={word} className="overflow-hidden">
                <motion.p
                  variants={{ hidden: { y: '100%' }, show: { y: 0 } }}
                  transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
                  className="heading-display text-4xl font-bold leading-tight sm:text-5xl"
                >
                  {word}
                </motion.p>
              </div>
            ))}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-4 text-slate-300 text-sm"
            >
              Your learning journey starts here
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeInOut' }}
            className="absolute bottom-24 h-1 w-32 origin-left bg-amber-600 rounded-full"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroOverlay;
