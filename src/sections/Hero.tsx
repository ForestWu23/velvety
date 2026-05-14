import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { assets } from '@/lib/assets';

const VP = { once: false, margin: '-60px' } as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: VP,
  transition: { duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28"
      style={{ backgroundColor: '#fffdff' }}
    >
      {/* faint ambient gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            'radial-gradient(60% 60% at 80% 0%, rgba(138,46,69,0.06) 0%, rgba(255,255,255,0) 60%)',
        }}
      />

      <div className="container-page grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <div className="relative">
          <motion.h1
            {...fadeUp(0)}
            className="display-h1 text-[44px] sm:text-[56px] md:text-[64px] lg:text-[72px]"
          >
            {/* "VelvetY" wobbles diagonally ×2 after fading in */}
            <motion.span
              className="inline-block origin-bottom-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{
                opacity: 1,
                y:      [30, 0, 0, 0, 0, 0],
                x:      [0,  0, 10, -8, 5, 0],
                rotate: [0,  0, 4, -3, 2, 0],
              }}
              viewport={VP}
              transition={{
                duration: 1.6,
                ease: 'easeInOut',
                times: [0, 0.25, 0.45, 0.62, 0.78, 1],
              }}
            >
              Velvet
              {/* "Y" fades from black → wine red as the wobble settles */}
              <motion.span
                initial={{ color: '#111111' }}
                whileInView={{ color: ['#111111', '#111111', '#8A2E45'] }}
                viewport={VP}
                transition={{
                  duration: 1.6,
                  ease: 'easeInOut',
                  times: [0, 0.75, 1],
                }}
              >
                Y
              </motion.span>
            </motion.span>
          </motion.h1>

          {/* Subtitle — word-by-word after VelvetY animation (~1.6s) */}
          <motion.p
            className="mt-1 font-display text-[26px] font-normal text-ink/75 sm:text-[30px] md:text-[34px] flex flex-wrap gap-x-[0.25em]"
          >
            {['Brand', '&', 'Digital', 'Design'].map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VP}
                transition={{ duration: 0.5, delay: 1.6 + i * 0.13, ease: [0.22, 1, 0.36, 1] }}
              >
                {word}
              </motion.span>
            ))}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VP}
            transition={{ duration: 0.7, delay: 2.55, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 font-script text-[24px] text-wine md:text-[26px]"
          >
            Designing what matters...
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VP}
            transition={{ duration: 0.7, delay: 2.55, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-md body-copy"
          >
            Empowering brands through intuitive design, strategic storytelling,
            and meaningful user experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VP}
            transition={{ duration: 0.7, delay: 2.55, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8"
          >
            <a href="#cta" className="btn-wine group">
              Schedule a FREE Consultation
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </motion.div>
        </div>

        {/* Hero banner video — blends with background via radial mask, slowed playback */}
        <div className="flex items-center justify-center md:justify-end">
          <div className="relative w-full max-w-[560px]">
            <video
              ref={(el) => { if (el) el.playbackRate = 0.55; }}
              autoPlay
              loop
              muted
              playsInline
              className="w-full"
              style={{
                mixBlendMode: 'multiply',
                WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 45% 45%, black 40%, transparent 75%)',
                maskImage: 'radial-gradient(ellipse 70% 70% at 45% 45%, black 40%, transparent 75%)',
              }}
            >
              <source src={assets.homepageBannerWebm} type="video/webm" />
              <source src={assets.homepageBannerMp4} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
