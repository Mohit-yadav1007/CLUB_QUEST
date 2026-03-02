import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { clubsData } from '../data/clubsData';
import { getOpeningByClubName } from '../data/openingsData';

const roles = ['Designer', 'Video Editor', 'Event Manager', 'Social Media Manager'];

const ClubCards = () => {
  const [flippedCards, setFlippedCards] = useState({});
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollRef = useRef(null);

  const updateScrollState = () => {
    const element = scrollRef.current;
    if (!element) {
      return;
    }

    setCanScrollLeft(element.scrollLeft > 4);
    setCanScrollRight(element.scrollLeft + element.clientWidth < element.scrollWidth - 4);
  };

  useEffect(() => {
    updateScrollState();
    window.addEventListener('resize', updateScrollState);

    return () => window.removeEventListener('resize', updateScrollState);
  }, []);

  const toggleFlip = (index) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const scrollCards = (direction) => {
    const element = scrollRef.current;
    if (!element) {
      return;
    }

    const scrollAmount = Math.max(element.clientWidth * 0.75, 320);
    element.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section id="clubs-grid" className="bg-black px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-10 max-w-2xl text-center md:mb-14"
        >
          <h2 className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl">Explore Clubs</h2>
          <p className="mt-3 text-sm text-white/55 md:text-base">Use arrows to browse. Click any card to flip.</p>
        </motion.div>

        <div className="mb-6 flex justify-end gap-3">
          <button
            type="button"
            onClick={() => scrollCards(-1)}
            disabled={!canScrollLeft}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-lg text-white transition-colors enabled:hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Scroll left"
          >
            &larr;
          </button>
          <button
            type="button"
            onClick={() => scrollCards(1)}
            disabled={!canScrollRight}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-lg text-white transition-colors enabled:hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Scroll right"
          >
            &rarr;
          </button>
        </div>

        <div
          ref={scrollRef}
          onScroll={updateScrollState}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {clubsData.map((club, index) => {
            const isFlipped = Boolean(flippedCards[index]);

            return (
              <motion.article
                key={club.name}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 240, damping: 18 }}
                className="relative h-[340px] min-w-[280px] snap-start [perspective:1200px] sm:min-w-[320px] md:min-w-[360px]"
              >
                <motion.div
                  role="button"
                  tabIndex={0}
                  onClick={() => toggleFlip(index)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      toggleFlip(index);
                    }
                  }}
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                  className="relative h-full w-full cursor-pointer rounded-3xl [transform-style:preserve-3d]"
                >
                  <div className="absolute inset-0 flex h-full flex-col justify-between rounded-3xl border border-white/15 bg-gradient-to-b from-zinc-900 to-zinc-950 p-6 [backface-visibility:hidden]">
                    <div>
                      <p className="mb-3 text-xs uppercase tracking-[0.28em] text-emerald-300/80">Club Card</p>
                      <h3 className="font-display text-3xl font-semibold tracking-tight text-white">{club.name}</h3>
                    </div>

                    <p className="text-sm leading-relaxed text-white/65">{club.shortDescription}</p>

                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">Click to flip</p>
                  </div>

                  <div className="absolute inset-0 flex h-full flex-col rounded-3xl border border-white/15 bg-gradient-to-b from-zinc-900 to-zinc-950 p-6 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <h3 className="font-display text-2xl font-semibold text-white">Roles Hiring</h3>

                    <ul className="mt-4 flex-1 space-y-2">
                      {roles.map((role) => (
                        <li key={role} className="flex items-center gap-2 text-sm text-white/75">
                          <span className="h-2 w-2 rounded-full bg-emerald-400" />
                          {role}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 grid grid-cols-2 gap-3">
                      <motion.button
                        type="button"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        onClick={(event) => {
                          event.stopPropagation();
                          const opening = getOpeningByClubName(club.name);
                          window.location.href = opening ? `/join-us/${opening.slug}?openForm=1` : '/join-us';
                        }}
                        className="rounded-full bg-emerald-500 px-3 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-emerald-400"
                      >
                        Join Now
                      </motion.button>
                      <motion.button
                        type="button"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        onClick={(event) => {
                          event.stopPropagation();
                          window.location.href = `/clubs/${club.slug}`;
                        }}
                        className="rounded-full border border-white/20 bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-white/10"
                      >
                        About Club
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ClubCards;
