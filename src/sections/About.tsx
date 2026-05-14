import { motion } from 'framer-motion';
import { Reveal } from '@/components/Reveal';
import { AnimatedHeading } from '@/components/AnimatedHeading';
import { assets } from '@/lib/assets';

// Base pink background + one large tilted rectangle of a slightly deeper pink.
// No background images used.
const BG      = '#DEC4C9';   // dusty rose base
const TILE    = '#C9A0A8';   // deeper mauve rectangle (overlaps edges)

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 md:py-28"
      style={{ backgroundColor: BG }}
    >
      {/* ── Large tilted background rectangle ── */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, rotate: -4, scaleX: 0.8 }}
        whileInView={{ opacity: 1, rotate: -9, scaleX: 1 }}
        viewport={{ once: false, margin: '-80px' }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute"
        style={{
          backgroundColor: TILE,
          width: '80%',
          height: '140%',
          top: '-20%',
          left: '15%',
          borderRadius: '8px',
          transformOrigin: 'center center',
        }}
      />

      {/* ── Content ── */}
      <div className="container-page relative z-10 grid items-center gap-14 md:grid-cols-2">
        <div>
          <Reveal>
            <span className="eyebrow">About Us</span>
          </Reveal>
          <AnimatedHeading
            delay={0.1}
            className="display-h2 mt-4 text-[40px] sm:text-[48px] md:text-[56px] text-ink"
          >
            Who We Are.
          </AnimatedHeading>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl body-copy text-ink/80">
              <strong className="font-semibold text-ink">VELVETY LLC</strong> is
              a Washington-based design agency founded in February 2025. We
              specialize in branding, visual design, web and product design,
              and marketing content tailored for small to mid-sized enterprises
              in real estate, finance, food, and industrial sectors.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="mt-4 max-w-xl body-copy text-ink/80">
              We help our clients build cohesive, conversion-driven brand
              identities with a focus on both beauty and functionality.
            </p>
          </Reveal>
        </div>

        {/* ── Layered paper + photo ── */}
        <Reveal y={36} className="relative mx-auto w-full max-w-[460px]">
          <div className="relative aspect-[4/3]">
            {/* wine block behind photo */}
            <motion.div
              initial={{ opacity: 0, rotate: 0 }}
              whileInView={{ opacity: 1, rotate: -6, x: -18, y: 18 }}
              viewport={{ once: false, margin: '-80px' }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 rounded-sm bg-wine/90"
            />
            {/* lighter pink paper */}
            <motion.div
              initial={{ opacity: 0, rotate: 0 }}
              whileInView={{ opacity: 1, rotate: 4, x: 14, y: -10 }}
              viewport={{ once: false, margin: '-80px' }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 rounded-sm"
              style={{ backgroundColor: '#C9A0A8' }}
            />
            {/* photo */}
            <motion.img
              src={assets.whoWeAreImage}
              alt="Seattle skyline"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, margin: '-80px' }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 h-full w-full rounded-sm object-cover shadow-card"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
