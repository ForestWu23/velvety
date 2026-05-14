import { motion } from 'framer-motion';
import { Reveal } from '@/components/Reveal';
import { assets } from '@/lib/assets';

const testimonials = [
  {
    image: assets.clientCommentImage1,
    quote:
      'Velvety Studio helped bring clarity and structure to a complex product. The experience feels intuitive and well thought out.',
    name: 'Edouard Romain',
    role: 'Co-Founder & CEO, Buyer Folio',
  },
  {
    image: assets.clientCommentImage2,
    quote:
      'Velvety Studio delivered packaging that\u2019s clear, consistent, and ready for retail. It strengthened our product presence.',
    name: 'Jason Norton',
    role: 'CEO, Thrive Freeze Dry',
  },
];

export default function Testimonials() {
  return (
    <section className="relative bg-cream py-24 md:py-28 overflow-hidden">
      {/* ── Animated geometric background (absolute-positioned divs) ── */}

      {/* large rotated square — top-left, slow drift + spin */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-20 -left-20 h-[280px] w-[280px] rounded-xl border border-wine/[0.14]"
        animate={{ rotate: [18, 38, 18], x: [0, 18, 0], y: [0, 12, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* diamond — center-left, float up/down */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-10 top-[40%] h-[120px] w-[120px] rounded border border-wine/[0.16]"
        animate={{ rotate: [45, 65, 45], y: [0, -22, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* small filled diamond — top-center, drift + spin */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-[35%] -top-6 h-[80px] w-[80px] rounded-sm border border-wine/[0.15] bg-wine/[0.05]"
        animate={{ rotate: [45, 90, 45], x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* tall thin rectangle — right side, slow rock */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-10 top-14 h-[340px] w-[60px] rounded-lg border border-wine/[0.12]"
        animate={{ rotate: [-12, 2, -12], y: [0, 20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* medium diamond — bottom-right, spin + float */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-[12%] bottom-8 h-[160px] w-[160px] rounded border-[1.5px] border-wine/[0.13]"
        animate={{ rotate: [45, 90, 45], x: [0, -20, 0], y: [0, -18, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* tiny filled square — bottom-left, bounce */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-16 bottom-20 h-[50px] w-[50px] rounded bg-wine/[0.08]"
        animate={{ rotate: [30, 75, 30], y: [0, -15, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* horizontal stripe accent top */}
      <div aria-hidden className="pointer-events-none absolute top-0 left-[30%] h-[3px] w-[40%] rounded-full bg-wine/[0.08]" />
      {/* horizontal stripe accent bottom */}
      <div aria-hidden className="pointer-events-none absolute bottom-0 left-[20%] h-[3px] w-[55%] rounded-full bg-wine/[0.07]" />
      <div className="container-page grid gap-16 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.1} y={36}>
            <article className="group">
              <div className="relative">
                <motion.img
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 180, damping: 18 }}
                  src={t.image}
                  alt=""
                  className="aspect-[16/9] w-full rounded-sm object-cover shadow-card"
                />
              </div>

              {/* card overlaps image by 32px */}
              <div className="relative -mt-8 mx-4 z-10">
                {/* tilted paper behind card */}
                <div
                  aria-hidden
                  className="absolute inset-0 translate-x-3 translate-y-3 rounded-sm bg-wine/25 shadow-soft"
                />
                <div className="relative rounded-sm bg-white p-6 shadow-card transition-transform duration-500 group-hover:-translate-y-1">
                  <p className="text-[14px] leading-[1.7] text-ink/85">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <p className="mt-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-wine">
                    — {t.name},{' '}
                    <span className="font-medium normal-case tracking-normal text-muted">
                      {t.role}.
                    </span>
                  </p>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
