import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from '@/components/Reveal';
import { AnimatedHeading } from '@/components/AnimatedHeading';
import { assets } from '@/lib/assets';
import TeamStructure from '@/sections/TeamStructure';

/* ────────────────────────────── About Hero ────────────────────────────── */
function AboutHero() {
  return (
    <section className="bg-white pt-32 pb-0 md:pt-40">
      <div className="container-page">
        <Reveal>
          <span className="eyebrow">VELVETY LLC .</span>
        </Reveal>
        <AnimatedHeading
          delay={0.1}
          className="mt-6 font-display text-[72px] font-semibold leading-[0.95] tracking-tightest text-[#050505] sm:text-[88px] md:text-[110px]"
        >
          About
        </AnimatedHeading>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 h-px w-full origin-left bg-ink/10"
        />
      </div>
    </section>
  );
}

/* ────────────────────────────── Intro ────────────────────────────── */
function AboutIntro() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-page grid items-center gap-14 md:grid-cols-2">
        {/* Text */}
        <div>
          <Reveal>
            <p className="text-[17px] font-semibold leading-[1.8] text-[#4B4B4B]">
              <span className="font-bold text-wine">VELVETY LLC</span> is a
              Washington-based design agency founded in February 2025. We
              specialize in branding, visual design, web and product design,
              and marketing content tailored for small to mid-sized enterprises
              in real estate, finance, food, and industrial sectors.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 text-[17px] font-semibold leading-[1.8] text-[#4B4B4B]">
              We help our clients build cohesive, conversion-driven brand
              identities with a focus on both beauty and functionality.
            </p>
          </Reveal>
        </div>

        {/* Image */}
        <Reveal y={36}>
          <div className="relative mx-auto w-full max-w-[520px]">
            <motion.div
              aria-hidden
              initial={{ rotate: 0, opacity: 0 }}
              whileInView={{ rotate: 2, opacity: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="paper-tile inset-0 translate-x-3 translate-y-3 bg-cream-300"
            />
            <motion.img
              src={assets.whoWeAreImage}
              alt="Our team"
              className="relative z-10 aspect-[4/3] w-full rounded-sm object-cover shadow-card"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 180, damping: 18 }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ────────────────────────── Marquee Typography ────────────────────────── */
const marqueeItems = [
  'Web Design',
  'Product Design',
  'Brand Identity',
  'Visual Design',
];

function AboutMarquee() {
  return (
    <section className="overflow-hidden bg-white py-4">
      <div className="flex animate-marquee whitespace-nowrap">
        {/* Duplicate content for seamless loop */}
        {[...marqueeItems, ...marqueeItems].map((text, i) => (
          <span
            key={i}
            className="inline-flex items-center text-[120px] font-extrabold leading-none tracking-tightest text-[#050505] md:text-[150px]"
          >
            {text}
            <span className="mx-8 inline-block align-middle" />&nbsp;
          </span>
        ))}
      </div>
    </section>
  );
}

/* ────────────────────────── Stats / Team ────────────────────────── */
function AboutStats() {
  return (
    <section className="bg-cream py-24 md:py-32">
      {/* Top two-column: title + stars | paragraph */}
      <div className="container-page grid items-start gap-16 md:grid-cols-[0.9fr_1.1fr]">
        {/* Left column */}
        <div>
          <Reveal>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6 h-px w-12 origin-left bg-ink/25"
            />
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="font-display text-[18px] font-extrabold uppercase leading-[1.35] tracking-tight text-[#050505] sm:text-[20px]">
              We&rsquo;re a creative and
              <br />
              talented team of designers
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-4 flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className="fill-wine text-wine"
                />
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right column */}
        <div>
          <Reveal>
            <p className="text-[16px] leading-[1.8] text-[#4B4B4B]">
              Our designers all hold master&rsquo;s degrees in digital
              design-related fields and bring over a decade of combined
              industry experience. This academic foundation and hands-on
              practice inform every project we deliver.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Big numbers — aligned with right column (paragraph) above */}
      <div className="container-page mt-20 grid items-start gap-16 md:grid-cols-[0.9fr_1.1fr]">
        {/* empty left spacer to match grid above */}
        <div className="hidden md:block" />
        <div className="flex gap-24 md:gap-32">
          <Reveal>
            <div>
              <motion.span
                className="font-display text-[64px] font-semibold leading-none tracking-tightest text-wine sm:text-[80px] md:text-[96px] inline-block"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                100+
              </motion.span>
              <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#4B4B4B]">
                100+ Creative &amp; Futuristic
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div>
              <motion.span
                className="font-display text-[64px] font-semibold leading-none tracking-tightest text-wine sm:text-[80px] md:text-[96px] inline-block"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                10yr
              </motion.span>
              <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#4B4B4B]">
                Have working 10 years+
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────── CTA (same as homepage) ────────────────────────── */
function AboutCTA() {
  return (
    <section className="bg-white py-24 md:py-28">
      <div className="container-page grid items-center gap-12 md:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Reveal>
            <span className="eyebrow">Bright</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display-h2 mt-4 text-[40px] sm:text-[48px] md:text-[56px]">
              Ready to Build Better <br />
              Digital{' '}
              <span className="relative inline-block">
                <span className="relative z-10">
                  Experience<span className="text-wine">?</span>
                </span>
                <motion.span
                  aria-hidden
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-x-0 bottom-1 -z-0 h-3 origin-left bg-cream-400"
                />
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-6 max-w-md body-copy">
              We design digital experiences that balance strategy, usability,
              and visual clarity. Let&rsquo;s build something meaningful
              together.
            </p>
          </Reveal>
          <Reveal delay={0.26}>
            <Link to="/contact" className="btn-wine mt-8 group">
              Book a Free Consultation
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </Reveal>
        </div>

        <Reveal y={36}>
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 160, damping: 18 }}
            className="relative mx-auto w-full max-w-[460px]"
          >
            <div
              aria-hidden
              className="paper-tile inset-0 translate-x-3 translate-y-3 rotate-[3deg] bg-cream-400"
            />
            <img
              src={assets.brightRightImage}
              alt="Designer working at laptop"
              className="relative z-10 aspect-[4/5] w-full rounded-sm object-cover shadow-card"
            />
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}

/* ────────────────────────── About Page ────────────────────────── */
export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutIntro />
      <AboutMarquee />
      <AboutStats />
      <TeamStructure />
      <AboutCTA />
    </>
  );
}
