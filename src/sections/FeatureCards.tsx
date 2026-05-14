import { motion } from 'framer-motion';
import { Stagger, staggerItem } from '@/components/Reveal';
import { assets } from '@/lib/assets';

const cards = [
  {
    title: 'Creative Agency',
    image: assets.creativeAgencyImage,
    icon: assets.creativeAgencyIcon,
  },
  {
    title: 'Quality Work',
    image: assets.qualityWorkImage,
    icon: assets.qualityWorkIcon,
  },
  {
    title: 'Professional Team',
    image: assets.professionalTeamImage,
    icon: assets.professionalTeamIcon,
  },
];

export default function FeatureCards() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container-page">
        <Stagger className="grid gap-6 md:grid-cols-3">
          {cards.map((c) => (
            <motion.article
              key={c.title}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 200, damping: 18 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-sm shadow-card"
            >
              <img
                src={c.image}
                alt={c.title}
                className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-700 ease-out group-hover:scale-[1.06]"
              />
              {/* dark gradient toward bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent group-hover:opacity-0 transition-opacity duration-700" />
              {/* hover: blue tint overlay */}
              <div className="absolute inset-0 bg-[rgba(100,140,200,0.35)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* bottom title bar — solid dark strip, floating inside card */}
              <div className="absolute inset-x-3 bottom-3 flex items-center justify-between bg-black/80 px-4 py-3 rounded-sm">
                <span className="text-[15px] font-semibold text-white">
                  {c.title}
                </span>
                <img
                  src={c.icon}
                  alt=""
                  className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </motion.article>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
