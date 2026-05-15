import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from '@/components/Reveal';
import { AnimatedHeading } from '@/components/AnimatedHeading';
import { assets } from '@/lib/assets';

export default function Expertise() {
  return (
    <section id="expertise" className="bg-white py-24 md:py-28">
      <div className="container-page">
        {/* heading row */}
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <div>
            <Reveal>
              <span className="eyebrow">Our Projects</span>
            </Reveal>
            {/* Line 1 */}
            <AnimatedHeading
              delay={0.08}
              className="display-h2 mt-4 text-[40px] sm:text-[48px] md:text-[60px]"
            >
              Proven Expertise.
            </AnimatedHeading>

            {/*
              Line 2 — wrapped in a relative container so the pink bar can be
              absolutely positioned at z-0 (always behind the text at z-10).
              Timing:
                line 1 done ≈ 0.08 + 0.10 + 0.75 = ~0.93s
                line 2 done ≈ 0.28 + 0.10 + 0.75 = ~1.13s
                bar starts at 1.25s — after both lines have fully landed.
            */}
            <div className="relative inline-block">
              {/* Pink highlight bar — ALWAYS at z-0, never above text */}
              <motion.div
                aria-hidden
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: false, margin: '-80px' }}
                transition={{ duration: 0.85, delay: 1.25, ease: [0.22, 1, 0.36, 1] }}
                className="absolute origin-left"
                style={{
                  zIndex: 0,
                  backgroundColor: '#F5C5CF',
                  height: '52%',       // tall enough to overlap into the letterforms
                  bottom: '6px',       // sits behind lower half of text
                  left: 0,
                  right: 0,
                  borderRadius: '3px',
                }}
              />
              {/* Text — always above the bar */}
              <div className="relative" style={{ zIndex: 1 }}>
                <AnimatedHeading
                  delay={0.28}
                  className="display-h2 text-[40px] sm:text-[48px] md:text-[60px]"
                >
                  Proven Results.
                </AnimatedHeading>
              </div>
            </div>
          </div>
          <div className="md:pb-2">
            <Reveal delay={0.18}>
              <p className="max-w-md body-copy">
                By combining strategic thinking with thoughtful design, we help
                brands communicate clearly, scale consistently, and make
                confident decisions across touchpoints.
              </p>
            </Reveal>
            <Reveal delay={0.28}>
              <Link to="/projects" className="btn-wine mt-5 group">
                Explore All Project
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </Reveal>
          </div>
        </div>

        {/* case study 1 */}
        <CaseStudy
          flip={false}
          image={assets.buyerfolioImage}
          imageAlt="Buyer Folio mobile app screens"
          title="Buyer Folio Mobile App Design."
          body="Buyer Folio is a co-ownership real estate platform that helps buyers navigate shared property ownership with clarity and confidence. We designed the buyer-side experience from research to interface, translating complex ownership models into an intuitive, decision-friendly product flow."
          className="mt-20"
        />

        {/* case study 2 */}
        <CaseStudy
          flip
          image={assets.nutriBitesImage}
          imageAlt="Canature NutriBites packaging"
          title="Canature NutriBites Packaging Design."
          body="For Canature NutriBites Freeze-Dried Beef Liver and Salmon Treats, Velvety Studio designed the packaging to translate product benefits into a clear, scalable visual language for both dog and cat audiences."
          className="mt-16"
        />
      </div>
    </section>
  );
}

type CaseStudyProps = {
  image: string;
  imageAlt: string;
  title: string;
  body: string;
  flip?: boolean;
  className?: string;
};

function CaseStudy({ image, imageAlt, title, body, flip = false, className }: CaseStudyProps) {
  return (
    <div
      className={[
        'grid items-center gap-10 md:grid-cols-2 md:gap-14',
        className ?? '',
      ].join(' ')}
    >
      <Reveal
        y={36}
        className={['relative', flip ? 'md:order-2' : 'md:order-1'].join(' ')}
      >
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ type: 'spring', stiffness: 180, damping: 18 }}
          className="relative mx-auto w-full max-w-[460px]"
        >
          {/* paper backdrop */}
          <div
            aria-hidden
            className="paper-tile inset-0 -translate-x-3 translate-y-3 rotate-[-4deg] bg-cream-300"
          />
          <img
            src={image}
            alt={imageAlt}
            className="relative z-10 w-full rounded-sm object-contain"
          />
        </motion.div>
      </Reveal>

      <div className={flip ? 'md:order-1' : 'md:order-2'}>
        <Reveal>
          <motion.h3
            className="display-h2 text-[28px] sm:text-[32px] md:text-[34px] cursor-default"
            initial={{ x: 0 }}
            whileInView={{ x: [0, -7, 7, -5, 5, -3, 3, 0] }}
            whileHover={{ x: [0, -6, 6, -4, 4, -2, 2, 0] }}
            transition={{ duration: 0.6, delay: 0.85, ease: 'easeInOut' }}
            viewport={{ once: false, amount: 0.6 }}
          >
            {title}
          </motion.h3>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-5 max-w-lg body-copy">{body}</p>
        </Reveal>
        <Reveal delay={0.22}>
          <a
            href="#expertise"
            className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold text-wine transition-colors hover:text-wine-deep"
          >
            Read More
            <span className="grid h-7 w-7 place-items-center rounded-full bg-wine text-white transition-transform duration-300 hover:translate-x-1">
              <ArrowRight size={12} />
            </span>
          </a>
        </Reveal>
      </div>
    </div>
  );
}
