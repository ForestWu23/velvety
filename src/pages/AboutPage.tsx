import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { assets } from '@/lib/assets';

/* ────────────────────────────── About Hero ────────────────────────────── */
function AboutHero() {
  return (
    <section className="bg-white pt-32 pb-0 md:pt-40">
      <div className="container-page">
        <Reveal>
          <span className="eyebrow">VELVETY LLC .</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-6 font-display text-[72px] font-extrabold leading-[0.95] tracking-tightest text-wine sm:text-[88px] md:text-[110px]">
            About
          </h1>
        </Reveal>
        <div className="mt-12 h-px w-full bg-ink/10" />
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
            <div
              aria-hidden
              className="paper-tile inset-0 translate-x-3 translate-y-3 rotate-[2deg] bg-cream-300"
            />
            <img
              src={assets.whoWeAreImage}
              alt="Our team"
              className="relative z-10 aspect-[4/3] w-full rounded-sm object-cover shadow-card"
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
            <span className="mx-6 inline-block text-wine">—</span>
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
      <div className="container-page grid gap-16 md:grid-cols-2">
        {/* Left column */}
        <div>
          <Reveal>
            <div className="mb-8 h-px w-16 bg-ink/20" />
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="font-display text-[28px] font-extrabold uppercase leading-[1.25] tracking-tightest text-[#050505] sm:text-[32px]">
              We&rsquo;re a creative and
              <br />
              talented team of designers
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-6 flex gap-1.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={22}
                  className="fill-wine text-wine"
                />
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right column */}
        <div>
          <Reveal>
            <p className="text-[15px] leading-[1.8] text-[#4B4B4B]">
              Our designers all hold master&rsquo;s degrees in digital
              design-related fields and bring over a decade of combined
              industry experience. This academic foundation and hands-on
              practice inform every project we deliver.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Big numbers */}
      <div className="container-page mt-16 grid grid-cols-2 gap-8">
        <Reveal>
          <div>
            <span className="font-display text-[72px] font-extrabold leading-none tracking-tightest text-wine sm:text-[90px] md:text-[110px]">
              100+
            </span>
            <p className="mt-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#4B4B4B]">
              100+ Creative &amp; Futuristic
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div>
            <span className="font-display text-[72px] font-extrabold leading-none tracking-tightest text-wine sm:text-[90px] md:text-[110px]">
              10yr
            </span>
            <p className="mt-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#4B4B4B]">
              Have working 10 years+
            </p>
          </div>
        </Reveal>
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
            <a href="mailto:info@velvetydesign.com" className="btn-wine mt-8 group">
              Book a Free Consultation
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
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
      <AboutCTA />
    </>
  );
}
