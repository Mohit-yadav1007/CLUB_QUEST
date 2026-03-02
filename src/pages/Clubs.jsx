import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { clubsData } from '../data/clubsData';

const Clubs = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Header currentPage="clubs" />

      <main className="mx-auto max-w-7xl px-4 pb-20 pt-36 md:px-6 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mb-10 text-center md:mb-14"
        >
          <h1 className="font-display text-4xl font-bold tracking-tight text-white md:text-6xl">All Clubs</h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-white/60 md:text-base">
            Explore every community in Club Quest. Each club card includes a quick overview and the two club leaders.
          </p>
        </motion.div>

        <div className="space-y-5 md:space-y-6">
          {clubsData.map((club, index) => (
            <motion.a
              key={club.name}
              href={`/clubs/${club.slug}`}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              whileHover={{ scale: 1.01 }}
              className="block w-full rounded-3xl border border-white/10 bg-gradient-to-r from-zinc-900 to-zinc-950 p-5 transition-colors hover:border-emerald-400/30 md:p-8"
            >
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between md:gap-8">
                <div className="max-w-3xl">
                  <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
                    {club.name}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-white/65 md:text-base">{club.shortDescription}</p>
                  <p className="mt-4 text-xs uppercase tracking-[0.2em] text-emerald-300/80">View Club Details</p>
                </div>

                <div className="min-w-[210px] rounded-2xl border border-white/15 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-emerald-300/80">Club Leaders</p>
                  <ul className="mt-3 space-y-2">
                    {club.leaders.map((leader) => (
                      <li key={leader} className="text-sm font-medium text-white/85 md:text-base">
                        {leader}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Clubs;
