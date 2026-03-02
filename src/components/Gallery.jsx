import { motion } from 'framer-motion';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1000&q=80',
    alt: 'Campus Event',
    size: 'col-span-2 row-span-2 md:col-span-2 md:row-span-2 lg:col-span-3 lg:row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1000&q=80',
    alt: 'Club Meeting',
    size: 'col-span-1 row-span-1 md:col-span-2 md:row-span-1 lg:col-span-2 lg:row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=80',
    alt: 'Cultural Fest',
    size: 'col-span-1 row-span-1 md:col-span-2 md:row-span-2 lg:col-span-1 lg:row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=80',
    alt: 'Performance',
    size: 'col-span-2 row-span-1 md:col-span-4 md:row-span-1 lg:col-span-3 lg:row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=1000&q=80',
    alt: 'Team Event',
    size: 'col-span-1 row-span-1 md:col-span-2 md:row-span-1 lg:col-span-2 lg:row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=80',
    alt: 'Club Gathering',
    size: 'col-span-1 row-span-1 md:col-span-2 md:row-span-1 lg:col-span-1 lg:row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1000&q=80',
    alt: 'Workshop Session',
    size: 'col-span-2 row-span-1 md:col-span-2 md:row-span-1 lg:col-span-3 lg:row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1000&q=80',
    alt: 'Campus Team Spirit',
    size: 'col-span-2 row-span-1 md:col-span-4 md:row-span-1 lg:col-span-6 lg:row-span-1',
  },
];

const Gallery = () => {
  return (
    <section id="memories" className="bg-black px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center font-display text-4xl font-bold tracking-tight text-white md:mb-14 md:text-5xl"
        >
          Memories
        </motion.h2>

        <div className="grid grid-cols-2 auto-rows-[130px] gap-3 md:grid-cols-4 md:auto-rows-[170px] md:gap-4 lg:grid-cols-6 lg:auto-rows-[160px]">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              className={`relative overflow-hidden rounded-2xl border border-white/10 ${image.size}`}
            >
              <motion.img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.35 }}
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/65 via-black/20 to-transparent p-3 opacity-0 transition-opacity duration-300 hover:opacity-100 md:p-4">
                <span className="text-sm font-medium text-white/90">{image.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
