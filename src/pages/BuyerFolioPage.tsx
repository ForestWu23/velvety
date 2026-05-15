import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef, type MouseEvent as ReactMouseEvent } from 'react';
import { Reveal } from '@/components/Reveal';
import { AnimatedHeading } from '@/components/AnimatedHeading';
import { assets } from '@/lib/assets';

/* ───────────────── 3-D tilt wrapper (hover + follow mouse) ───────────────── */
function Tilt3D({
  children,
  className = '',
  scale = 1.08,
  tiltDeg = 18,
  movePx = 15,
}: {
  children: React.ReactNode;
  className?: string;
  scale?: number;
  tiltDeg?: number;
  movePx?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springCfg = { stiffness: 200, damping: 20, mass: 0.5 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [tiltDeg, -tiltDeg]), springCfg);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-tiltDeg, tiltDeg]), springCfg);
  const translateX = useSpring(useTransform(x, [-0.5, 0.5], [-movePx, movePx]), springCfg);
  const translateY = useSpring(useTransform(y, [-0.5, 0.5], [-movePx, movePx]), springCfg);
  const scaleV = useMotionValue(1);
  const springScale = useSpring(scaleV, springCfg);

  function handleMove(e: ReactMouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleEnter() {
    scaleV.set(scale);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
    scaleV.set(1);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, x: translateX, y: translateY, scale: springScale, perspective: 800 }}
      className={`will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
}

/* ────────────────────────────── Hero ────────────────────────────── */
function BuyerFolioHero() {
  return (
    <section className="bg-white pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="container-page grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
        {/* Left text */}
        <div>
          <AnimatedHeading
            delay={0.1}
            className="font-display text-[56px] font-semibold leading-[0.95] tracking-tightest text-[#050505] sm:text-[72px] md:text-[88px]"
          >
            BuyerFolio
          </AnimatedHeading>
          <Reveal delay={0.25}>
            <p className="mt-4 text-[14px] font-semibold uppercase tracking-[0.22em] text-wine">
              Mobile App Design
            </p>
          </Reveal>
          <Reveal delay={0.35}>
            <p className="mt-6 max-w-[480px] text-[15px] leading-[1.75] text-[#4B4B4B]">
              BuyerFolio is an innovative co-ownership platform designed to make
              homeownership more accessible and affordable. It leverages
              AI-driven credit assessments and personalized property matches to
              effortlessly connect co-buyers, simplifying and enhancing the
              journey to joint homeownership.
            </p>
          </Reveal>
        </div>

        {/* Right image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Tilt3D scale={1.06} tiltDeg={10}>
            <img
              src={assets.buyerfolioPageBanner}
              alt="BuyerFolio app screens"
              className="w-full max-w-[500px] mx-auto object-contain"
            />
          </Tilt3D>
        </motion.div>
      </div>
    </section>
  );
}

/* ────────────────────────── Context ────────────────────────── */
function ContextSection() {
  return (
    <section className="bg-white">
      <div className="container-page">
        <div className="h-px w-full bg-[#E7D4D8]" />
        <div className="grid gap-10 py-16 md:grid-cols-[0.35fr_0.65fr] md:py-20">
          <Reveal>
            <h2 className="font-display text-[28px] font-semibold tracking-tightest text-[#050505] sm:text-[32px]">
              Context
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="space-y-5 text-[15px] leading-[1.75] text-[#4B4B4B]">
              <p>
                As a startup focusing on co-ownership, BuyerFolio aims to
                provide an innovative housing experience for homebuyers. In its
                initial phase, Buyer Folio focused its efforts on the East
                Coast, particularly in highly competitive real estate markets
                like New York and Boston.
              </p>
              <p>
                Currently, Buyer Folio has developed their website, but the app
                is where their business truly comes to life. The reality of
                co-ownership transactions involves both &ldquo;Buyers&rdquo; and
                &ldquo;Sellers.&rdquo; Before the CEO approached our team, there
                was already an existing design for the Buyer side of the app,
                although it was not fully optimized.
              </p>
            </div>
          </Reveal>
        </div>
        <div className="h-px w-full bg-[#E7D4D8]" />
      </div>
    </section>
  );
}

/* ────────────────────────── Solutions ────────────────────────── */
function SolutionsSection() {
  return (
    <section className="bg-white">
      <div className="container-page">
        <div className="grid gap-10 py-16 md:grid-cols-[0.35fr_0.65fr] md:py-20">
          <Reveal>
            <h2 className="font-display text-[28px] font-semibold tracking-tightest text-[#050505] sm:text-[32px]">
              Solutions
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="text-[15px] leading-[1.75] text-[#4B4B4B]">
              Over a three-month engagement, VelvetY Studio led the product
              design for Buyer Folio, refining the buyer-side user flow and
              fully designing the seller experience within the existing brand
              system. Our work translated complex ownership logic into a clear,
              cohesive product experience across both sides of the platform.
            </p>
          </Reveal>
        </div>
        <div className="h-px w-full bg-[#E7D4D8]" />
      </div>
    </section>
  );
}

/* ────────────────────────── Key Features ────────────────────────── */
const features = [
  {
    num: '01',
    title: 'Seamless Onboarding',
    image: assets.buyerfolioPageChooseBuyerOrSeller,
  },
  {
    num: '02',
    title: 'Integrated Seller Dashboard',
    image: assets.buyerfolioPageDashboard,
  },
  {
    num: '03',
    title: 'Co-Buyer Discovery',
    image: assets.buyerfolioPageDiscovery,
  },
  {
    num: '04',
    title: 'Dynamic Offer Room',
    image: assets.buyerfolioPageDynamicOfferRoom,
  },
  {
    num: '05',
    title: 'Communication Hub',
    image: assets.buyerfolioPageCommunicationHub,
  },
  {
    num: '06',
    title: 'Account Management Center',
    image: assets.buyerfolioPageAccountManagement,
  },
];

function KeyFeaturesSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container-page">
        <Reveal>
          <h2 className="font-display text-[28px] font-semibold tracking-tightest text-[#050505] sm:text-[32px]">
            Key Features
          </h2>
        </Reveal>

        <div className="mt-14 space-y-12">
          {features.map((f) => (
            <div key={f.num}>
              <div className="flex flex-col items-center gap-6 md:flex-row md:items-start md:gap-12">
                {/* Number + title — always left */}
                <div className="md:w-[35%]">
                  <Reveal delay={0.06}>
                    <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-wine">
                      {f.num}
                    </p>
                    <h3 className="mt-2 font-display text-[22px] font-semibold leading-[1.2] tracking-tight text-[#050505] sm:text-[26px]">
                      {f.title}
                    </h3>
                  </Reveal>
                </div>

                {/* Image — always right */}
                <Reveal delay={0.12} className="md:w-[65%] flex justify-end">
                  <Tilt3D>
                    <img
                      src={f.image}
                      alt={f.title}
                      className="max-w-[300px] w-full object-contain"
                    />
                  </Tilt3D>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────── Other Success Stories ────────────────────────── */
function OtherStories() {
  return (
    <section className="bg-[#FFF6F7] py-20 md:py-28">
      <div className="container-page">
        <Reveal>
          <h2 className="font-display text-[26px] font-extrabold tracking-tightest text-wine sm:text-[30px] md:text-[34px]">
            Check out other success stories
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-12 grid overflow-hidden rounded-sm bg-white md:grid-cols-[0.5fr_0.5fr]">
            {/* Image */}
            <div className="flex items-center justify-center bg-white p-8">
              <img
                src={assets.buyerfolioPageMoreProject}
                alt="Canature NutriBites Packaging"
                className="max-h-[280px] w-full object-contain"
              />
            </div>
            {/* Text — pink bg with white-bordered inner box */}
            <div className="relative bg-[#FFF6F7] pl-0 pr-3 pt-3 pb-3">
              <div className="flex h-full w-full flex-col justify-center border border-white px-8 py-10 md:px-10">
                <h3 className="font-display text-[22px] font-extrabold leading-[1.2] tracking-tight text-[#050505] sm:text-[26px]">
                  Canature NutriBites Packaging Design.
                </h3>
                <p className="mt-4 text-[14px] leading-[1.75] text-[#4B4B4B]">
                  For Canature NutriBites Freeze-Dried Beef Liver and Salmon
                  Treats, VelvetY Studio designed the packaging to translate
                  product benefits into a clear, scalable visual language for both
                  dog and cat audiences.
                </p>
                <div className="mt-6 flex justify-end">
                  <span className="inline-flex cursor-pointer items-center gap-1.5 text-[13px] font-semibold text-[#050505] transition-colors hover:text-wine">
                    Read More
                    <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ────────────────────────── CTA ────────────────────────── */
function BuyerFolioCTA() {
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

/* ────────────────────────── Page ────────────────────────── */
export default function BuyerFolioPage() {
  return (
    <>
      <BuyerFolioHero />
      <ContextSection />
      <SolutionsSection />
      <KeyFeaturesSection />
      <OtherStories />
      <BuyerFolioCTA />
    </>
  );
}
