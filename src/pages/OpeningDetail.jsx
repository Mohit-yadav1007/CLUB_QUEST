import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getOpeningBySlug } from '../data/openingsData';

const OpeningDetail = ({ slug }) => {
  const opening = getOpeningBySlug(slug);
  const [showApplyForm, setShowApplyForm] = useState(
    () => new URLSearchParams(window.location.search).get('openForm') === '1',
  );
  const [submitted, setSubmitted] = useState(false);

  const handleApplySubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (!opening) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white">
        <Header currentPage="join-detail" />
        <main className="mx-auto max-w-4xl px-4 pb-20 pt-36 text-center md:px-6 md:pt-32">
          <h1 className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
            Opening Not Available
          </h1>
          <p className="mt-4 text-sm text-white/60 md:text-base">
            This position is closed or not published right now.
          </p>
          <a
            href="/join-us"
            className="mt-8 inline-flex rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-400"
          >
            Back to Join Us
          </a>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Header currentPage="join-detail" />

      <main className="mx-auto max-w-7xl px-4 pb-20 pt-36 md:px-6 md:pt-32">
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-950 p-6 md:p-10"
        >
          <a href="/join-us" className="text-xs uppercase tracking-[0.2em] text-emerald-300/85">
            Back to All Openings
          </a>
          <p className="mt-5 text-xs uppercase tracking-[0.2em] text-emerald-300/80">{opening.clubName}</p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
            {opening.positionName}
          </h1>
          <p className="mt-4 text-sm text-white/70 md:text-base">
            Interview on {opening.interviewDate} | {opening.interviewTime}
          </p>
        </motion.section>

        <section className="mt-8 grid gap-6 lg:grid-cols-3">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 lg:col-span-2"
          >
            <h2 className="font-display text-2xl font-semibold text-white md:text-3xl">Basic Requirements</h2>
            <ul className="mt-4 space-y-2">
              {opening.requirements.map((requirement) => (
                <li key={requirement} className="flex items-start gap-2 text-sm text-white/70 md:text-base">
                  <span className="mt-2 h-2 w-2 rounded-full bg-emerald-400" />
                  <span>{requirement}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-7 text-lg font-semibold text-white md:text-xl">Experience</h3>
            <p className="mt-2 text-sm text-white/70 md:text-base">{opening.experience}</p>

            <h3 className="mt-7 text-lg font-semibold text-white md:text-xl">Role Responsibilities</h3>
            <ul className="mt-3 space-y-2">
              {opening.responsibilities.map((responsibility) => (
                <li key={responsibility} className="flex items-start gap-2 text-sm text-white/70 md:text-base">
                  <span className="mt-2 h-2 w-2 rounded-full bg-emerald-400" />
                  <span>{responsibility}</span>
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
            <h2 className="font-display text-2xl font-semibold text-white">Interview Details</h2>
            <div className="mt-4 space-y-4 text-sm text-white/75">
              <p>
                <span className="block text-xs uppercase tracking-[0.18em] text-emerald-300/80">Location</span>
                {opening.location}
              </p>
              <p>
                <span className="block text-xs uppercase tracking-[0.18em] text-emerald-300/80">Venue</span>
                {opening.venue}
              </p>
              <p>
                <span className="block text-xs uppercase tracking-[0.18em] text-emerald-300/80">Timing</span>
                {opening.interviewTime}
              </p>
            </div>

            <h3 className="mt-7 text-lg font-semibold text-white">Interview Conductor</h3>
            <p className="mt-2 text-sm text-white/75">{opening.interviewerName}</p>
            <p className="mt-1 text-sm text-white/75">{opening.interviewerContact}</p>

            <button
              type="button"
              onClick={() => {
                setShowApplyForm(true);
                setSubmitted(false);
              }}
              className="mt-7 inline-flex rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-400"
            >
              Apply
            </button>
          </motion.article>
        </section>

        {showApplyForm ? (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="mt-8 rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-900 to-zinc-950 p-6 md:p-8"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="font-display text-2xl font-semibold text-white md:text-3xl">Apply for This Position</h2>
              <button
                type="button"
                onClick={() => setShowApplyForm(false)}
                className="text-sm font-medium text-white/65 transition-colors hover:text-white"
              >
                Close Form
              </button>
            </div>

            <form onSubmit={handleApplySubmit} className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              <label htmlFor="applicant-name" className="block">
                <span className="text-sm text-white/70">Name</span>
                <input
                  id="applicant-name"
                  name="name"
                  type="text"
                  required
                  className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-emerald-400/70"
                  placeholder="Enter your full name"
                />
              </label>

              <label htmlFor="applicant-rollno" className="block">
                <span className="text-sm text-white/70">Roll No</span>
                <input
                  id="applicant-rollno"
                  name="rollNo"
                  type="text"
                  required
                  className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-emerald-400/70"
                  placeholder="Enter roll number"
                />
              </label>

              <label htmlFor="applicant-semester" className="block">
                <span className="text-sm text-white/70">Semester</span>
                <input
                  id="applicant-semester"
                  name="semester"
                  type="text"
                  required
                  className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-emerald-400/70"
                  placeholder="Enter semester"
                />
              </label>

              <label htmlFor="applicant-branch" className="block">
                <span className="text-sm text-white/70">Branch</span>
                <input
                  id="applicant-branch"
                  name="branch"
                  type="text"
                  required
                  className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-emerald-400/70"
                  placeholder="Enter branch"
                />
              </label>

              <label htmlFor="applicant-residence" className="block">
                <span className="text-sm text-white/70">Hosteller / Day Scholar</span>
                <select
                  id="applicant-residence"
                  name="residence"
                  required
                  className="mt-2 w-full rounded-xl border border-white/15 bg-zinc-900 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-emerald-400/70"
                >
                  <option value="">Select an option</option>
                  <option value="hosteller">Hosteller</option>
                  <option value="day-scholar">Day Scholar</option>
                </select>
              </label>

              <label htmlFor="applicant-email" className="block">
                <span className="text-sm text-white/70">Email</span>
                <input
                  id="applicant-email"
                  name="email"
                  type="email"
                  required
                  className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-emerald-400/70"
                  placeholder="Enter email address"
                />
              </label>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="inline-flex rounded-full bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-400"
                >
                  Submit Application
                </button>
              </div>
            </form>

            {submitted ? (
              <p className="mt-4 text-sm text-emerald-300/90">
                Application submitted successfully for {opening.positionName} ({opening.clubName}).
              </p>
            ) : null}
          </motion.section>
        ) : null}
      </main>

      <Footer />
    </div>
  );
};

export default OpeningDetail;
