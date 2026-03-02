import { motion } from 'framer-motion';

const Footer = () => {
  const quickLinks = [
    { label: 'Home', href: '/#home' },
    { label: 'Clubs', href: '/clubs' },
    { label: 'Events', href: '/events' },
    { label: 'Join Us', href: '/join-us' },
    { label: 'Memories', href: '/memories' },
    { label: 'Contact', href: '/#contact' },
  ];

  const contactInfo = ['clubquest@campus.edu', '+1 234 567 8900', 'Campus Center, Building A'];

  const socialLinks = [
    { name: 'Instagram', code: 'IG' },
    { name: 'Twitter', code: 'X' },
    { name: 'LinkedIn', code: 'IN' },
    { name: 'YouTube', code: 'YT' },
  ];

  return (
    <footer id="contact" className="border-t border-white/10 bg-black px-4 py-16 text-white md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-2xl font-bold tracking-tight text-white">Club Quest</h2>
            <p className="mt-4 max-w-xs text-sm text-white/55">
              Your gateway to college clubs, creativity, and community.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white/55 transition-colors hover:text-emerald-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-white">Contact Info</h3>
            <ul className="mt-4 space-y-2">
              {contactInfo.map((info, index) => (
                <li key={index} className="text-sm text-white/55">
                  {info}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold text-white">Social</h3>
            <div className="mt-4 flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href="#"
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-xs font-semibold text-white/85 transition-colors hover:bg-emerald-500"
                  aria-label={social.name}
                >
                  {social.code}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-8 text-sm text-white/40 md:flex-row md:items-center"
        >
          <p>Copyright 2026 Club Quest. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
