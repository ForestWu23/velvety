import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from '@/components/Reveal';
import { assets } from '@/lib/assets';

export default function ClosingCTA() {
  return (
    <section id="cta" className="bg-white py-24 md:py-28">
      <div className="container-page grid items-center gap-12 md:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Reveal>
            <span className="eyebrow">Project</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display-h2 mt-4 text-[40px] sm:text-[48px] md:text-[56px]">
              Ready to Build Better <br />
              Digital{' '}
              <span className="relative inline-block">
                <span className="relative z-10">Experiences?</span>
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
