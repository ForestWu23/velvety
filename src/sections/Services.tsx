import { motion } from 'framer-motion';
import { Reveal, Stagger, staggerItem } from '@/components/Reveal';
import { AnimatedHeading } from '@/components/AnimatedHeading';
import { assets } from '@/lib/assets';

const services = [
  {
    title: 'Brand Identity & Logo Design',
    body: 'Creating logos, brand systems, and style guides that communicate clearly and consistently.',
    icon: assets.brandIdentityIcon,
  },
  {
    title: 'Web & Product Design',
    body: 'UX/UI design for websites, dashboards, mobile interfaces, with usability-focused prototyping.',
    icon: assets.webProductIcon,
  },
  {
    title: 'Packaging & Print Collateral',
    body: 'Brochures, product labels, pitch decks, posters, and POS materials for physical and digital use.',
    icon: assets.packagingPrintIcon,
  },
  {
    title: 'Social Media & Campaign Assets',
    body: 'Instagram reels, WeChat articles, and visual storytelling customized for multicultural audiences.',
    icon: assets.socialMediaAssetsIcon,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-24 md:py-28" style={{ backgroundColor: '#FFF0F2' }}>

      {/* ── Decorative rotated blocks (background layer, no images) ── */}
      {/* Large centre block — slightly deeper pink, tilted ~-12° */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, rotate: -8, scale: 0.85 }}
        whileInView={{ opacity: 1, rotate: -12, scale: 1 }}
        viewport={{ once: false, margin: '-120px' }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute"
        style={{
          backgroundColor: '#F5D5DB',
          width: '75%',
          height: '130%',
          top: '-15%',
          left: '10%',
          borderRadius: '6px',
        }}
      />

      {/* Smaller accent block — right side, opposite tilt, slightly darker */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, rotate: 10, scale: 0.85 }}
        whileInView={{ opacity: 0.6, rotate: 14, scale: 1 }}
        viewport={{ once: false, margin: '-120px' }}
        transition={{ duration: 1.2, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute"
        style={{
          backgroundColor: '#EEBEC8',
          width: '40%',
          height: '80%',
          top: '10%',
          right: '-8%',
          borderRadius: '6px',
        }}
      />

      {/* Small top-left accent block */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, rotate: 0, scale: 0.7 }}
        whileInView={{ opacity: 0.5, rotate: -8, scale: 1 }}
        viewport={{ once: false, margin: '-120px' }}
        transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute"
        style={{
          backgroundColor: '#F0C4CC',
          width: '22%',
          height: '50%',
          bottom: '-5%',
          left: '-4%',
          borderRadius: '6px',
        }}
      />

      {/* ── Content (sits above the decorative blocks) ── */}
      <div className="container-page relative z-10 grid gap-16 md:grid-cols-2 md:gap-20">
        {/* left column: copy + image */}
        <div>
          <Reveal>
            <span className="eyebrow">Illuminates</span>
          </Reveal>
          <AnimatedHeading
            delay={0.1}
            className="display-h2 mt-4 text-[40px] sm:text-[48px] md:text-[56px]"
          >
            Our Services.
          </AnimatedHeading>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-md body-copy">
              At Velvety Studio, we design brand, web, and visual systems with
              clarity and consistency in mind—supporting brands across digital
              and physical touchpoints.
            </p>
          </Reveal>

          <Reveal delay={0.24} y={36} className="mt-10">
            <motion.img
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 160, damping: 18 }}
              src={assets.ourServicesImage}
              alt="Studio collage"
              className="w-full max-w-[420px] rounded-sm shadow-card"
            />
          </Reveal>
        </div>

        {/* right column: services list */}
        <Stagger className="space-y-7" stagger={0.08}>
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={staggerItem}
              className="group flex items-start gap-5"
            >
              <img
                src={s.icon}
                alt=""
                className="h-12 w-12 shrink-0 object-contain transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105"
              />
              <div>
                <motion.h3
                  className="text-[17px] font-semibold text-ink cursor-default"
                  initial={{ x: 0 }}
                  whileInView={{ x: [0, -6, 6, -4, 4, -2, 2, 0] }}
                  whileHover={{ x: [0, -5, 5, -3, 3, -1, 1, 0] }}
                  transition={{ duration: 0.55, delay: 0.7, ease: 'easeInOut' }}
                  viewport={{ once: false, amount: 0.8 }}
                >
                  {s.title}
                </motion.h3>
                <p className="mt-1.5 max-w-md body-copy">{s.body}</p>
              </div>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
