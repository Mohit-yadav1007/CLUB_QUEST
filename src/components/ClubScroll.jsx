import { useEffect, useRef, useState } from 'react';
import { motion, useAnimationFrame, useMotionValue } from 'framer-motion';

const clubs = [
  'VibenZ',
  'Dhawani',
  'Reflection',
  'Panache',
  'Nati',
  'Nat Samrath',
  'Lethal Giddha Squad',
  'Bhangra Squad',
  'Happiness Club',
  'Custody',
];

const SCROLL_SPEED = 74;

const ClubScroll = () => {
  const x = useMotionValue(0);
  const trackRef = useRef(null);
  const [loopWidth, setLoopWidth] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const measureWidth = () => {
      if (!trackRef.current) {
        return;
      }

      setLoopWidth(trackRef.current.scrollWidth / 2);
    };

    measureWidth();
    window.addEventListener('resize', measureWidth);

    return () => window.removeEventListener('resize', measureWidth);
  }, []);

  useEffect(() => {
    if (loopWidth > 0) {
      x.set(0);
    }
  }, [loopWidth, x]);

  useAnimationFrame((_, delta) => {
    if (isPaused || loopWidth === 0) {
      return;
    }

    const distance = (SCROLL_SPEED * delta) / 1000;
    const next = x.get() - distance;

    if (next <= -loopWidth) {
      x.set(next + loopWidth);
      return;
    }

    x.set(next);
  });

  return (
    <section id="clubs" className="bg-black py-14 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-7xl px-4 md:px-6"
      >
        <p className="mb-6 text-center text-xs uppercase tracking-[0.3em] text-white/45 md:mb-8">
          Club Lineup
        </p>

        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] py-5 md:py-7"
        >
          <motion.div ref={trackRef} style={{ x }} className="flex w-max items-center gap-4 pr-4 md:gap-5 md:pr-5">
            {[...clubs, ...clubs].map((club, index) => (
              <motion.div
                key={`${club}-${index}`}
                whileHover={{ scale: 1.06 }}
                className="rounded-full border border-white/20 bg-white/5 px-5 py-2.5 backdrop-blur-sm md:px-7 md:py-3"
              >
                <span className="font-display text-lg font-semibold tracking-tight text-white/90 md:text-2xl">
                  {club}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ClubScroll;
