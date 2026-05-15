import { motion } from 'framer-motion';
import { ArrowRight, Check, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from '@/components/Reveal';
import { AnimatedHeading } from '@/components/AnimatedHeading';
import { assets } from '@/lib/assets';

/* ────────────────────────────── Services Hero ────────────────────────────── */
function ServicesHero() {
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
          Services
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

/* ────────────────────────── Service Offerings ────────────────────────── */
const offerings = [
  {
    icon: assets.servicePageBrandIdentityIcon,
    title: 'Brand Identity &\nLogo Design',
    body: 'Creating logos, brand systems, and style guides that communicate clearly and consistently.',
  },
  {
    icon: assets.servicePageWebProductIcon,
    title: 'Web &\nProduct Design',
    body: 'UX/UI design for websites, dashboards, mobile interfaces, with usability-focused prototyping.',
  },
  {
    icon: assets.servicePagePackagingIcon,
    title: 'Packaging &\nPrint Collateral',
    body: 'Brochures, product labels, pitch decks, posters, and POS materials for physical and digital use.',
  },
  {
    icon: assets.servicePageSocialIcon,
    title: 'Social Media &\nCampaign Assets',
    body: 'Instagram reels, WeChat articles, and visual storytelling customized for multicultural audiences.',
  },
  {
    icon: null,
    title: 'Shopify Store\nDesign & Development',
    body: 'Custom Shopify theme design, store setup, product page optimization, and conversion-focused e-commerce experiences.',
  },
];

function ServiceOfferings() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-page">
        {/* Section header — centered */}
        <Reveal>
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-wine">
            WHAT WE&rsquo;RE OFFERING
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mx-auto mt-5 max-w-[520px] text-center font-display text-[32px] font-extrabold leading-[1.15] tracking-tightest text-[#050505] sm:text-[38px] md:text-[42px]">
            <span className="text-wine">Services</span> We&rsquo;re Providing
            <br />
            To Our Clients
          </h2>
        </Reveal>

        {/* Five-column grid */}
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          {offerings.map((item, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <div className="flex flex-col">
                {/* Icon */}
                {item.icon ? (
                  <img
                    src={item.icon}
                    alt=""
                    className="h-[52px] w-[52px] object-contain"
                  />
                ) : (
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: [20, -18, 4, -8, 2, 0], opacity: 1 }}
                    viewport={{ once: false, margin: '-60px' }}
                    transition={{ duration: 1, delay: 0.1, ease: 'easeOut' }}
                    whileHover={{ y: [0, -22, 6, -10, 3, 0], transition: { duration: 0.7 } }}
                    className="inline-block"
                  >
                    <ShoppingBag size={52} strokeWidth={1.2} className="text-[#050505]" />
                  </motion.div>
                )}
                {/* Title */}
                <h3 className="mt-6 whitespace-pre-line font-display text-[17px] font-extrabold leading-[1.35] tracking-tight text-[#050505]">
                  {item.title}
                </h3>
                {/* Divider */}
                <div className="mt-4 h-px w-full bg-[#E7D4D8]" />
                {/* Body */}
                <p className="mt-4 text-[13.5px] leading-[1.75] text-[#4B4B4B]">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────── Why Choose Us ────────────────────────── */
const reasons = [
  {
    title: 'Designing with intention',
    body: 'Every decision is grounded in research and context, focusing on clarity, usability, and long-term consistency.',
  },
  {
    title: 'Building with experience',
    body: "Our designers hold master's degrees in digital design-related fields, bringing over a decade of combined industry experience.",
  },
  {
    title: 'Delivering with real-world focus',
    body: 'From digital products to physical packaging, we create systems that work across platforms, touchpoints, and constraints.',
  },
];

function WhyChooseUs() {
  return (
    <section className="bg-[#FFF6F7] py-24 md:py-32">
      <div className="container-page grid items-center gap-14 md:grid-cols-[1.05fr_0.95fr]">
        {/* Left content */}
        <div>
          <Reveal once={false}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-wine">
              WHY CHOOSE US
            </p>
          </Reveal>
          <Reveal delay={0.06} once={false}>
            <h2 className="mt-5 font-display text-[32px] font-extrabold leading-[1.12] tracking-tightest text-[#050505] sm:text-[38px] md:text-[44px]">
              Providing The{' '}
              <span className="text-wine">Best</span> Services
            </h2>
          </Reveal>

          {/* Reasons list */}
          <div className="mt-10 space-y-7">
            {reasons.map((r, i) => (
              <Reveal key={i} delay={0.08 + i * 0.06} once={false}>
                <div className="flex gap-4">
                  {/* Checkmark circle */}
                  <div className="mt-0.5 flex h-[26px] w-[26px] flex-shrink-0 items-center justify-center rounded-full bg-wine">
                    <Check size={14} className="text-white" strokeWidth={3} />
                  </div>
                  <div>
                    <p className="text-[15px] font-bold text-[#050505]">
                      {r.title}
                    </p>
                    <p className="mt-1.5 text-[13.5px] leading-[1.7] text-[#4B4B4B]">
                      {r.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Right image */}
        <Reveal y={36} once={false}>
          <div className="relative mx-auto w-full max-w-[500px]">
            <motion.div
              aria-hidden
              initial={{ rotate: 0, opacity: 0 }}
              whileInView={{ rotate: 2, opacity: 1 }}
              viewport={{ once: false, margin: '-80px' }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="paper-tile inset-0 translate-x-3 translate-y-3 bg-cream-300"
            />
            <motion.img
              src={assets.ourServicesImage}
              alt="Our services"
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

/* ────────────────────────── CTA Section ────────────────────────── */
function ServicesCTA() {
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

/* ────────────────────────── Services Page ────────────────────────── */
export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServiceOfferings />
      <WhyChooseUs />
      <ServicesCTA />
    </>
  );
}
