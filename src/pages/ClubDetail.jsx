import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getClubBySlug } from '../data/clubsData';

const ClubDetail = ({ slug }) => {
  const club = getClubBySlug(slug);
  const instagramDmLink = club?.instagramHandle ? `https://ig.me/m/${club.instagramHandle}` : 'https://instagram.com';

  if (!club) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white">
        <Header currentPage="club-detail" />
        <main className="mx-auto max-w-4xl px-4 pb-20 pt-36 text-center md:px-6 md:pt-32">
          <h1 className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl">Club Not Found</h1>
          <p className="mt-4 text-sm text-white/60 md:text-base">
            The club you are looking for is not available right now.
          </p>
          <a
            href="/clubs"
            className="mt-8 inline-flex rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-400"
          >
            Back to Clubs
          </a>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Header currentPage="club-detail" />

      <main className="mx-auto max-w-7xl px-4 pb-20 pt-36 md:px-6 md:pt-32">
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-950 p-6 md:p-10"
        >
          <a href="/clubs" className="text-xs uppercase tracking-[0.2em] text-emerald-300/85">
            Back to All Clubs
          </a>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-white md:text-6xl">{club.name}</h1>
          <p className="mt-4 max-w-3xl text-sm text-white/65 md:text-base">{club.shortDescription}</p>

          <div className="mt-6 inline-flex rounded-2xl border border-white/15 bg-white/5 p-4">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-emerald-300/80">Club Leaders</p>
              <p className="mt-2 text-sm text-white/85 md:text-base">
                {club.leaders[0]} and {club.leaders[1]}
              </p>
            </div>
          </div>
        </motion.section>

        <section className="mt-8 grid gap-6 lg:grid-cols-3">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 lg:col-span-2"
          >
            <h2 className="font-display text-2xl font-semibold text-white md:text-3xl">Working and Function</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/70 md:text-base">{club.about}</p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <h2 className="font-display text-2xl font-semibold text-white">Ask Anything</h2>
            <p className="mt-3 text-sm text-white/65">
              Have questions about auditions, joining process, or responsibilities?
            </p>
            <a
              href={instagramDmLink}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-400"
            >
              Ask Anything
            </a>
          </motion.article>
        </section>

        <section className="mt-8 grid gap-6 md:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <h2 className="font-display text-2xl font-semibold text-white md:text-3xl">Past Events</h2>
            <ul className="mt-5 space-y-4">
              {club.pastEvents.map((event) => (
                <li key={event.title} className="rounded-2xl border border-white/10 bg-zinc-900/70 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-emerald-300/80">{event.date}</p>
                  <h3 className="mt-2 text-lg font-semibold text-white">{event.title}</h3>
                  <p className="mt-2 text-sm text-white/65">{event.description}</p>
                </li>
              ))}
            </ul>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <h2 className="font-display text-2xl font-semibold text-white md:text-3xl">Upcoming Events</h2>
            <ul className="mt-5 space-y-4">
              {club.upcomingEvents.map((event) => (
                <li key={event.title} className="rounded-2xl border border-white/10 bg-zinc-900/70 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-emerald-300/80">{event.date}</p>
                  <h3 className="mt-2 text-lg font-semibold text-white">{event.title}</h3>
                  <p className="mt-2 text-sm text-white/65">{event.description}</p>
                </li>
              ))}
            </ul>
          </motion.article>
        </section>

        <section className="mt-8">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="font-display text-2xl font-semibold text-white md:text-3xl"
          >
            Past Event Gallery
          </motion.h2>

          <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
            {club.gallery.map((image, index) => (
              <motion.div
                key={image}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.06 }}
                className="overflow-hidden rounded-2xl border border-white/10"
              >
                <img
                  src={image}
                  alt={`${club.name} event ${index + 1}`}
                  className="h-56 w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ClubDetail;
