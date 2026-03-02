import { motion } from 'framer-motion';

const Header = ({ currentPage = 'home' }) => {
  const isHomePage = currentPage === 'home';
  const isInternalPage = !isHomePage;

  const navLinks = [
    { label: 'Home', href: isInternalPage ? '/#home' : '#home' },
    { label: 'Clubs', href: '/clubs' },
    { label: 'Events', href: '/events' },
    { label: 'Join Us', href: '/join-us' },
    { label: 'Memories', href: '/memories' },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 bg-transparent"
    >
      <div className="mx-auto max-w-7xl px-4 py-3 md:px-6">
        <div className="flex items-center justify-between gap-3">
          <div className="flex flex-1 justify-start">
            <motion.a
              href={isInternalPage ? '/#home' : '#home'}
              whileHover={{ scale: 1.04 }}
              transition={{ type: 'spring', stiffness: 260, damping: 18 }}
              className="font-display text-xl font-bold tracking-tight text-white md:text-2xl"
            >
              Club Quest
            </motion.a>
          </div>

          <div className="hidden flex-1 justify-center md:flex">
            <nav className="rounded-full border border-white/20 bg-white/10 px-6 py-2 backdrop-blur-md">
              <ul className="flex items-center gap-1">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <motion.a
                      href={link.href}
                      whileHover={{ y: -1, scale: 1.03 }}
                      className="whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium text-white/85 transition-colors hover:bg-white/10 hover:text-white"
                    >
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex flex-1 justify-end">
            <motion.a
              href="/get-started"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition-colors hover:bg-emerald-400 md:px-6 md:py-2.5"
            >
              Get Started
            </motion.a>
          </div>
        </div>

        <div className="mt-3 flex justify-center md:hidden">
          <nav className="w-full max-w-full overflow-x-auto rounded-full border border-white/20 bg-white/10 px-3 py-2 backdrop-blur-md [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <ul className="flex items-center justify-start gap-1 whitespace-nowrap">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="whitespace-nowrap rounded-full px-3 py-1 text-xs font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
