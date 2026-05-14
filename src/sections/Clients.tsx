import { useEffect, useRef } from 'react';
import { Reveal } from '@/components/Reveal';
import { assets } from '@/lib/assets';

const logos = [
  { src: assets.huagenLogo,    alt: 'Huagen' },
  { src: assets.thriveLogo,    alt: 'Thrive' },
  { src: assets.majorPetsLogo, alt: 'Major Pets' },
  { src: assets.homeLinkLogo,  alt: 'HomeLink' },
];

// Duplicate for seamless loop
const REEL = [...logos, ...logos, ...logos];
const SPEED = 0.6; // px per frame

export default function Clients() {
  const trackRef  = useRef<HTMLDivElement>(null);
  const wrapRef   = useRef<HTMLDivElement>(null);
  const xRef      = useRef(0);
  const rafRef    = useRef(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    const wrap  = wrapRef.current;
    if (!track || !wrap) return;

    const tick = () => {
      if (!pausedRef.current) {
        xRef.current -= SPEED;
        // reset when we've scrolled one full copy width (1/3 of track)
        const oneSetWidth = track.scrollWidth / 3;
        if (Math.abs(xRef.current) >= oneSetWidth) xRef.current = 0;
        track.style.transform = `translateX(${xRef.current}px)`;
      }

      // Scale each logo based on its distance from the container centre
      const wrapRect  = wrap.getBoundingClientRect();
      const centerX   = wrapRect.left + wrapRect.width / 2;
      const halfZone  = wrapRect.width * 0.28; // zone where scale is applied

      const items = track.querySelectorAll<HTMLElement>('[data-logo-item]');
      items.forEach((item) => {
        const r     = item.getBoundingClientRect();
        const itemCX = r.left + r.width / 2;
        const dist  = Math.abs(itemCX - centerX);
        const t     = Math.max(0, 1 - dist / halfZone);  // 0–1, 1 = dead centre
        const scale = 1 + t * 0.65;                       // 1x → 1.65x at centre
        const opacity = 0.55 + t * 0.45;                  // 0.55 → 1 at centre
        item.style.transform = `scale(${scale})`;
        item.style.opacity   = String(opacity);
      });

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <section className="bg-white py-16">
      <div className="container-page">
        <Reveal>
          <p className="mb-10 text-center text-[11px] font-semibold uppercase tracking-[0.32em] text-muted-soft">
            Trusted by ambitious brands
          </p>
        </Reveal>

        {/* Outer mask */}
        <div
          ref={wrapRef}
          className="mask-fade-edges relative overflow-hidden"
          onMouseEnter={() => { pausedRef.current = true; }}
          onMouseLeave={() => { pausedRef.current = false; }}
        >
          {/* Moving track */}
          <div
            ref={trackRef}
            className="flex w-max items-center gap-24 will-change-transform"
            style={{ paddingBlock: '24px' }}
          >
            {REEL.map((logo, idx) => (
              <div
                key={`${logo.alt}-${idx}`}
                data-logo-item
                className="shrink-0 transition-[transform,opacity] duration-75"
                style={{ transformOrigin: 'center center' }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-14 w-auto md:h-16"
                  style={{ display: 'block' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
