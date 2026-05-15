import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from '@/components/Reveal';
import { AnimatedHeading } from '@/components/AnimatedHeading';
import { assets } from '@/lib/assets';

/* ────────────────────────────── Project Hero ────────────────────────────── */
function ProjectHero() {
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
          Project
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

/* ────────────────────────── Filter Tabs ────────────────────────── */
const filters = ['All', 'App Design', 'Packaging Design'] as const;

function FilterTabs({
  active,
  onChange,
}: {
  active: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="container-page mt-8 flex gap-8">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => onChange(f)}
          className={[
            'text-[13px] font-semibold tracking-wide transition-colors',
            active === f ? 'text-wine' : 'text-[#4B4B4B] hover:text-[#050505]',
          ].join(' ')}
        >
          {f}
        </button>
      ))}
    </div>
  );
}

/* ────────────────────────── Project Showcase ────────────────────────── */
const projects = [
  {
    tag: 'App Design',
    title: 'Buyer Folio Mobile App Design.',
    body: 'Buyer Folio is a co-ownership real estate platform that helps buyers navigate shared property ownership with clarity and confidence. We designed the buyer-side experience from research to interface, translating complex ownership models into an intuitive, decision-friendly product flow.',
    image: assets.buyerfolioImage,
    link: '/projects/buyerfolio',
  },
  {
    tag: 'Packaging Design',
    title: 'Canature NutriBites Packaging Design.',
    body: 'For Canature NutriBites Freeze-Dried Beef Liver and Salmon Treats, Velvety Studio designed the packaging to translate product benefits into a clear, scalable visual language for both dog and cat audiences.',
    image: assets.nutriBitesImage,
    link: '',
  },
];

function ProjectShowcase({ filter }: { filter: string }) {
  const visible = filter === 'All' ? projects : projects.filter((p) => p.tag === filter);

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container-page space-y-0">
        {visible.map((project, i) => {
          const isEven = i % 2 === 0; // even → image left, text right
          return (
            <div
              key={project.title}
              className={[
                'grid md:grid-cols-2',
                // no gap — images and text sit flush
              ].join(' ')}
            >
              {/* Image block */}
              <Reveal
                delay={0.06}
                className={isEven ? 'md:order-1' : 'md:order-2'}
              >
                <div className="flex h-[320px] items-center justify-center bg-[#FFF6F7] p-8 md:h-[380px]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </Reveal>

              {/* Text block */}
              <div
                className={[
                  'flex flex-col justify-center px-8 py-10 md:px-14 md:py-12',
                  isEven ? 'md:order-2' : 'md:order-1',
                ].join(' ')}
              >
                <Reveal delay={0.1}>
                  <h3 className="font-display text-[24px] font-extrabold leading-[1.2] tracking-tight text-[#050505] sm:text-[28px]">
                    {project.title}
                  </h3>
                </Reveal>
                <Reveal delay={0.16}>
                  <p className="mt-4 text-[14px] leading-[1.75] text-[#4B4B4B]">
                    {project.body}
                  </p>
                </Reveal>
                <Reveal delay={0.22}>
                  <div className="mt-6 flex justify-end">
                    {project.link ? (
                      <Link to={project.link} className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#050505] hover:text-wine transition-colors">
                        Read More
                        <ArrowRight size={14} />
                      </Link>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#050505] cursor-default">
                        Read More
                        <ArrowRight size={14} />
                      </span>
                    )}
                  </div>
                </Reveal>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ────────────────────────── Work In Progress Banner ────────────────────────── */
function WorkInProgress() {
  return (
    <section className="bg-[#FFF6F7]">
      <Reveal>
        <div className="flex h-[200px] items-center justify-center">
          <p className="font-display text-[28px] font-extrabold uppercase tracking-[0.18em] text-[#050505] sm:text-[34px] md:text-[40px]">
            WORK IN PROGRESS{' '}
            <span className="text-wine">...</span>
          </p>
        </div>
      </Reveal>
    </section>
  );
}

/* ────────────────────────── CTA Section ────────────────────────── */
function ProjectCTA() {
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

/* ────────────────────────── Project Page ────────────────────────── */
export default function ProjectPage() {
  const [filter, setFilter] = useState('All');

  return (
    <>
      <ProjectHero />
      <FilterTabs active={filter} onChange={setFilter} />
      <ProjectShowcase filter={filter} />
      <WorkInProgress />
      <ProjectCTA />
    </>
  );
}
