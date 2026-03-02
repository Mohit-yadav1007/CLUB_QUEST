import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { memoriesData } from '../data/memoriesData';

const Memories = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Header currentPage="memories" />

      <main className="mx-auto max-w-7xl px-4 pb-20 pt-36 md:px-6 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mb-10 text-center md:mb-14"
        >
          <h1 className="font-display text-4xl font-bold tracking-tight text-white md:text-6xl">Memories</h1>
          <p className="mx-auto mt-4 max-w-3xl text-sm text-white/60 md:text-base">
            Browse past event highlights. Each event has a horizontal scroll gallery of memories.
          </p>
        </motion.div>

        <div className="space-y-8 md:space-y-10">
          {memoriesData.map((memory, index) => (
            <motion.section
              key={memory.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              <h2 className="mb-4 font-display text-2xl font-semibold tracking-tight text-white md:text-3xl">
                {memory.eventName}
              </h2>

              <div className="flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {memory.images.map((image, imageIndex) => (
                  <div
                    key={`${memory.id}-${imageIndex}`}
                    className="h-56 min-w-[280px] overflow-hidden rounded-2xl border border-white/10 sm:min-w-[340px] md:h-64 md:min-w-[380px]"
                  >
                    <img
                      src={image}
                      alt={`${memory.eventName} ${imageIndex + 1}`}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Memories;
