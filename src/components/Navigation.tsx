import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
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
  const [menuOpen, setMenuOpen] = useState(false);
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
        scrolled || menuOpen
          ? 'bg-white/95 backdrop-blur-md shadow-[0_8px_30px_-18px_rgba(17,17,17,0.18)]'
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

        {/* Desktop nav */}
        <nav className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => {
            const isActive = item.to === '/'
              ? location.pathname === '/'
              : location.pathname.startsWith(item.to);
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

        {/* Desktop CTA */}
        <Link to="/contact" className="btn-wine !py-2 !px-4 text-[12px] hidden md:inline-flex">
          Contact Us
        </Link>

        {/* Mobile hamburger button */}
        <button
          className="flex md:hidden flex-col items-center justify-center w-10 h-10 gap-[6px] rounded-md focus:outline-none"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="block h-[2px] w-6 rounded-full bg-ink origin-center"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.2 }}
            className="block h-[2px] w-6 rounded-full bg-ink"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="block h-[2px] w-6 rounded-full bg-ink origin-center"
          />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden md:hidden border-t border-ink/10"
          >
            <div className="container-page flex flex-col py-4 gap-1">
              {navItems.map((item, i) => {
                const isActive = item.to === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(item.to);
                return (
                  <motion.div
                    key={item.to}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      to={item.to}
                      onClick={() => setMenuOpen(false)}
                      className={[
                        'block py-3 text-[16px] font-medium border-b border-ink/[0.07] transition-colors',
                        isActive ? 'text-wine font-semibold' : 'text-ink/80 hover:text-wine',
                      ].join(' ')}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, delay: navItems.length * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="pt-4"
              >
                <Link
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="btn-wine !py-2 !px-4 text-[13px] w-full text-center"
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
