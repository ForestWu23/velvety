import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from '@/components/Reveal';
import { assets } from '@/lib/assets';

const footerNav = [
  { label: 'Contact Us', to: '/#cta' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-wine text-cream">
      <div className="container-page pt-16 pb-10">
        {/* Y mark */}
        <Reveal>
          <motion.img
            src={assets.logoSmall2}
            alt="VelvetY"
            className="h-12 w-auto"
            animate={{ rotate: [0, -4, 0, 4, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </Reveal>

        {/* divider */}
        <div className="mt-8 h-px w-full bg-cream/15" />

        <div className="mt-12 grid gap-12 md:grid-cols-[1.3fr_0.7fr_0.7fr]">
          {/* left */}
          <div>
            <Reveal>
              <p className="text-[12px] font-medium uppercase tracking-[0.28em] text-cream/70">
                Let&rsquo;s start working together
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <a
                href="mailto:info@velvetydesign.com"
                className="mt-4 inline-block font-display text-3xl font-extrabold leading-tight tracking-tightest text-white transition-colors hover:text-cream md:text-4xl"
              >
                info@velvetydesign.com
              </a>
            </Reveal>

            <Reveal delay={0.18}>
              <ul className="mt-8 space-y-3 text-[13px] text-cream/85">
                <li className="flex items-center gap-3">
                  <MapPin size={14} />
                  <span>1563427th Dr SE, Mill Creek, WA 98012</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={14} />
                  <a
                    href="mailto:info@velvetydesign.com"
                    className="transition-colors hover:text-white"
                  >
                    info@velvetydesign.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={14} />
                  <span>(206) 601-5969</span>
                </li>
              </ul>
            </Reveal>
          </div>

          {/* nav */}
          <Reveal delay={0.1}>
            <p className="text-[12px] font-semibold uppercase tracking-[0.28em] text-cream/70">
              Company
            </p>
            <ul className="mt-5 space-y-3 text-[14px] text-cream/85">
              {footerNav.map((n) => (
                <li key={n.label}>
                  <Link
                    to={n.to}
                    className="group inline-flex items-center gap-2 transition-colors hover:text-white"
                  >
                    {n.label}
                    <span className="block h-px w-0 bg-cream/80 transition-all duration-300 group-hover:w-5" />
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* subscribe */}
          <Reveal delay={0.18}>
            <p className="text-[12px] font-semibold uppercase tracking-[0.28em] text-cream/70">
              Subscribe
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-5 flex items-center gap-2 rounded-full border border-cream/20 bg-white/5 p-1 pl-4 backdrop-blur"
            >
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email"
                className="w-full bg-transparent text-[13px] text-white placeholder:text-cream/50 focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-full bg-white px-4 py-2 text-[12px] font-semibold text-wine transition-colors hover:bg-cream"
              >
                Submit
              </button>
            </form>

          </Reveal>
        </div>

        <div className="mt-14 border-t border-cream/10 pt-6 text-center text-[12px] text-cream/60">
          © Copyright 2026 by VELVETY LLC
        </div>
      </div>
    </footer>
  );
}
