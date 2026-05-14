import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { assets } from '@/lib/assets';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
];

export default function Navigation() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);
  const location = useLocation();

  useMotionValueEvent(scrollY, 'change', (y) => {
    setScrolled(y > 16);
  });

  return (
    <motion.header
      initial={{ y: '-100%', opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={[
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/85 backdrop-blur-md shadow-[0_8px_30px_-18px_rgba(17,17,17,0.18)]'
          : 'bg-white',
      ].join(' ')}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="group flex items-center gap-2" aria-label="VelvetY home">
          <motion.img
            src={assets.logoLong}
            alt="VelvetY"
            initial={{ scale: 1.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.4 }}
            onAnimationComplete={() => setLogoLoaded(true)}
            transition={
              logoLoaded
                ? { duration: 0.3, delay: 0, ease: [0.22, 1, 0.36, 1] }
                : { duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }
            }
            className="h-9 w-auto origin-left"
          />
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => {
            const isActive = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={[
                  'group relative text-[15px] font-medium transition-colors',
                  isActive ? 'text-wine font-semibold' : 'text-ink/80 hover:text-ink',
                ].join(' ')}
              >
                {item.label}
                <span
                  className={[
                    'absolute -bottom-1 left-0 h-px w-full origin-left bg-wine transition-transform duration-300 ease-out',
                    isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
                  ].join(' ')}
                />
              </Link>
            );
          })}
        </nav>

        <Link to="/#cta" className="btn-wine !py-2 !px-4 text-[12px]">
          Contact Us
        </Link>
      </div>
    </motion.header>
  );
}
