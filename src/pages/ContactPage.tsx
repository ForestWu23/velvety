import { motion } from 'framer-motion';
import { Mail, Phone, Clock, ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { AnimatedHeading } from '@/components/AnimatedHeading';

/* ────────────────────────────── Contact Hero ────────────────────────────── */
function ContactHero() {
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
          Contact
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

/* ────────────────────────── Get In Touch ────────────────────────── */
function GetInTouch() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-page grid items-start gap-16 md:grid-cols-[1.1fr_0.9fr]">
        {/* Left — intro text */}
        <div>
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-wine">
              GET IN TOUCH
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-5 font-display text-[32px] font-extrabold leading-[1.12] tracking-tightest text-[#050505] sm:text-[38px] md:text-[44px]">
              Let&rsquo;s Start a{' '}
              <span className="text-wine">Conversation</span>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-lg text-[15px] leading-[1.75] text-[#4B4B4B]">
              Whether you need branding, web design, packaging, or a full
              digital transformation — we&rsquo;d love to hear about your
              project. Reach out by phone or email and we&rsquo;ll get back to
              you within one business day.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <a
              href="mailto:info@velvetydesign.com"
              className="btn-wine mt-8 group"
            >
              Send Us an Email
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </Reveal>
        </div>

        {/* Right — contact cards */}
        <div className="space-y-6">
          {/* Email */}
          <Reveal delay={0.08}>
            <a
              href="mailto:info@velvetydesign.com"
              className="group flex items-start gap-5 rounded-lg border border-[#E7D4D8] bg-white p-6 transition-all hover:border-wine/40 hover:shadow-md"
            >
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-wine/10">
                <Mail size={20} className="text-wine" />
              </div>
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-[0.15em] text-[#4B4B4B]">
                  Email
                </p>
                <p className="mt-1 text-[17px] font-bold text-[#050505] transition-colors group-hover:text-wine">
                  info@velvetydesign.com
                </p>
                <p className="mt-1 text-[13px] text-[#4B4B4B]">
                  We typically respond within 24 hours
                </p>
              </div>
            </a>
          </Reveal>

          {/* Phone */}
          <Reveal delay={0.14}>
            <a
              href="tel:+12066015969"
              className="group flex items-start gap-5 rounded-lg border border-[#E7D4D8] bg-white p-6 transition-all hover:border-wine/40 hover:shadow-md"
            >
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-wine/10">
                <Phone size={20} className="text-wine" />
              </div>
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-[0.15em] text-[#4B4B4B]">
                  Phone
                </p>
                <p className="mt-1 text-[17px] font-bold text-[#050505] transition-colors group-hover:text-wine">
                  (206) 601-5969
                </p>
                <p className="mt-1 text-[13px] text-[#4B4B4B]">
                  Mon – Fri, 9:00 AM – 6:00 PM PST
                </p>
              </div>
            </a>
          </Reveal>

          {/* Hours */}
          <Reveal delay={0.2}>
            <div className="flex items-start gap-5 rounded-lg border border-[#E7D4D8] bg-white p-6">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-wine/10">
                <Clock size={20} className="text-wine" />
              </div>
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-[0.15em] text-[#4B4B4B]">
                  Business Hours
                </p>
                <p className="mt-1 text-[17px] font-bold text-[#050505]">
                  Mon – Fri, 9 AM – 6 PM
                </p>
                <p className="mt-1 text-[13px] text-[#4B4B4B]">
                  Pacific Standard Time (PST)
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────── How We Work ────────────────────────── */
const steps = [
  {
    num: '01',
    title: 'Reach Out',
    body: 'Send us an email or give us a call. Share a brief overview of your project, timeline, and goals.',
  },
  {
    num: '02',
    title: 'Free Consultation',
    body: 'We schedule a 30-minute call to understand your needs, discuss scope, and explore how we can help.',
  },
  {
    num: '03',
    title: 'Proposal & Kickoff',
    body: 'We deliver a tailored proposal with clear deliverables, timeline, and pricing. Once approved, we begin.',
  },
];

function HowWeWork() {
  return (
    <section className="bg-[#FFF6F7] py-24 md:py-32">
      <div className="container-page">
        <Reveal>
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-wine">
            HOW WE WORK
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mx-auto mt-5 max-w-[480px] text-center font-display text-[32px] font-extrabold leading-[1.15] tracking-tightest text-[#050505] sm:text-[38px] md:text-[42px]">
            Simple <span className="text-wine">&</span> Transparent Process
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-10 sm:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="flex flex-col">
                <span className="font-display text-[48px] font-extrabold leading-none tracking-tightest text-wine/20">
                  {s.num}
                </span>
                <h3 className="mt-4 text-[18px] font-extrabold text-[#050505]">
                  {s.title}
                </h3>
                <div className="mt-3 h-px w-full bg-[#E7D4D8]" />
                <p className="mt-4 text-[14px] leading-[1.75] text-[#4B4B4B]">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────── CTA Banner ────────────────────────── */
function ContactCTA() {
  return (
    <section className="bg-white py-24 md:py-28">
      <div className="container-page text-center">
        <Reveal>
          <h2 className="mx-auto max-w-[640px] font-display text-[32px] font-extrabold leading-[1.12] tracking-tightest text-[#050505] sm:text-[38px] md:text-[44px]">
            Ready to Build Something{' '}
            <span className="text-wine">Meaningful</span>?
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mx-auto mt-6 max-w-md text-[15px] leading-[1.75] text-[#4B4B4B]">
            We&rsquo;d love to learn about your brand and goals. Get in touch
            and let&rsquo;s create something great together.
          </p>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
            <a
              href="mailto:info@velvetydesign.com"
              className="btn-wine group"
            >
              Email Us
              <Mail size={14} />
            </a>
            <a
              href="tel:+12066015969"
              className="inline-flex items-center gap-2 rounded-md border-2 border-wine px-5 py-3 text-sm font-semibold text-wine transition-all duration-300 hover:bg-wine hover:text-white"
            >
              Call (206) 601-5969
              <Phone size={14} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ────────────────────────── Contact Page ────────────────────────── */
export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <GetInTouch />
      <HowWeWork />
      <ContactCTA />
    </>
  );
}
