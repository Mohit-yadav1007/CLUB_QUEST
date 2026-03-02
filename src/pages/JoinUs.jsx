import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { openingsData } from '../data/openingsData';

const JoinUs = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Header currentPage="join-us" />

      <main className="mx-auto max-w-7xl px-4 pb-20 pt-36 md:px-6 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mb-10 text-center md:mb-14"
        >
          <h1 className="font-display text-4xl font-bold tracking-tight text-white md:text-6xl">Join Us</h1>
          <p className="mx-auto mt-4 max-w-3xl text-sm text-white/60 md:text-base">
            Admin posted openings for club positions. Click any card to view full interview details and apply.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {openingsData.map((opening, index) => (
            <motion.a
              key={opening.slug}
              href={`/join-us/${opening.slug}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-900 to-zinc-950 p-6 transition-colors hover:border-emerald-400/40"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-emerald-300/85">{opening.clubName}</p>
              <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-white">
                {opening.positionName}
              </h2>
              <p className="mt-4 text-sm font-medium text-white/75">Interview Date: {opening.interviewDate}</p>
              <p className="mt-1 text-sm text-white/65">{opening.interviewTime}</p>
              <p className="mt-5 text-xs uppercase tracking-[0.18em] text-white/45">View Full Requirement</p>
            </motion.a>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default JoinUs;
