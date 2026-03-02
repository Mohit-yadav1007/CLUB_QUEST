import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { eventsData } from '../data/eventsData';

const Events = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Header currentPage="events" />

      <main className="mx-auto max-w-7xl px-4 pb-20 pt-36 md:px-6 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mb-10 text-center md:mb-14"
        >
          <h1 className="font-display text-4xl font-bold tracking-tight text-white md:text-6xl">Upcoming Events</h1>
          <p className="mx-auto mt-4 max-w-3xl text-sm text-white/60 md:text-base">
            Explore all listed college events and guest sessions. Each card includes event date, time, description, and
            a quick join action.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {eventsData.map((event, index) => (
            <motion.article
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-900 to-zinc-950"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="p-5 md:p-6">
                <h2 className="font-display text-2xl font-semibold tracking-tight text-white">{event.title}</h2>
                <p className="mt-3 text-xs uppercase tracking-[0.18em] text-emerald-300/85">{event.date}</p>
                <p className="mt-1 text-sm font-medium text-white/75">{event.time}</p>
                <p className="mt-4 text-sm leading-relaxed text-white/65">{event.description}</p>

                <button
                  type="button"
                  className="mt-6 inline-flex rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-400"
                >
                  Join The Event
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Events;
