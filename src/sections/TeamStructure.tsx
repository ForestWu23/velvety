import { motion } from 'framer-motion';
import { Reveal } from '@/components/Reveal';
import { assets } from '@/lib/assets';

/* ── Circular avatar ── */
function Avatar({
  src,
  alt,
  size = 200,
}: {
  src: string;
  alt: string;
  size?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="flex-shrink-0 rounded-full border-[3px] border-wine/30 p-[3px]"
      style={{ width: size + 12, height: size + 12 }}
    >
      <img
        src={src}
        alt={alt}
        className="h-full w-full rounded-full object-cover"
      />
    </motion.div>
  );
}

/* ── Member info block ── */
function MemberInfo({
  name,
  role,
  bio,
  delay = 0,
}: {
  name: string;
  role: string;
  bio: string;
  delay?: number;
}) {
  return (
    <div className="flex max-w-[340px] flex-col justify-center">
      <Reveal delay={delay}>
        <p className="text-[18px] font-extrabold uppercase tracking-[0.22em] text-wine">
          {name}
        </p>
      </Reveal>
      <Reveal delay={delay + 0.06}>
        <p className="mt-2 text-[15px] font-semibold text-[#050505]">{role}</p>
      </Reveal>
      <Reveal delay={delay + 0.12}>
        <p className="mt-3 text-[14px] leading-[1.75] text-[#4B4B4B]">{bio}</p>
      </Reveal>
    </div>
  );
}

/* ── Ribbon decoration (top-left partial) ── */
function RibbonDecoration() {
  return (
    <motion.svg
      viewBox="0 0 200 180"
      xmlns="http://www.w3.org/2000/svg"
      className="pointer-events-none absolute -top-8 -left-8 w-[160px] opacity-20"
      initial={{ opacity: 0, rotate: -10 }}
      whileInView={{ opacity: 0.2, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
    >
      <g fill="none" stroke="#8A2E45" strokeWidth="1">
        <path d="M20 80 C45 10, 85 5, 95 65 C105 125, 40 150, 28 95 C15 40, 65 20, 103 53" />
        <path d="M25 78 C50 15, 87 10, 98 67 C110 120, 45 145, 32 95 C20 45, 68 25, 106 56" />
        <path d="M30 76 C55 20, 89 15, 101 69 C115 115, 50 140, 36 95 C25 50, 71 30, 109 59" />
        <path d="M35 74 C60 25, 91 20, 104 71 C120 110, 55 135, 40 95 C30 55, 74 35, 112 62" />
        <path d="M40 72 C65 30, 93 25, 107 73 C125 105, 60 130, 44 95 C35 60, 77 40, 115 65" />
      </g>
    </motion.svg>
  );
}

/* ── Team members data ── */
const members = [
  {
    name: 'Ya Li',
    role: 'Founder & Marketing Manager',
    bio: 'Seasoned professional in business management and marketing strategy, with deep expertise in Shopify store setup, optimization, and e-commerce consulting. Drives brand growth through data-informed campaigns and operational excellence.',
    photo: assets.yaLiPhoto,
  },
  {
    name: 'Sihang Yang',
    role: 'Product Design Lead',
    bio: '9 years of experience in design and product strategy, Sihang leads VelvetY\'s creative vision across branding, digital products, and marketing. She combines deep expertise in UI/UX, visual identity, and cross-platform design to deliver cohesive experiences that drive real business impact.',
    photo: assets.sihangYangPhoto,
  },
  {
    name: 'Sammi Tang',
    role: 'Digital Media Specialist',
    bio: 'Experienced in digital experience design and digital marketing across real estate, education, fashion, non-profit, e-commerce, and broadcasting.',
    photo: assets.sammiTangPhoto,
  },
  {
    name: 'Jin Xu',
    role: 'Product & UX Designer',
    bio: 'Focused on designing strategic digital experiences for AI SaaS, e-commerce, and mobility products. Experienced in UX research, interaction design, and design systems, combining analytical thinking with creative problem-solving to improve user decision-making and engagement.',
    photo: assets.jinXuPhoto,
  },
  {
    name: 'Forest Wu',
    role: 'Technical Advisor',
    bio: 'Amazon software engineer with 11 years of experience at top tech companies. Specializes in full-stack development, e-commerce platforms, and Shopify storefront engineering, delivering scalable and high-performance digital products.',
    photo: assets.forestWuPhoto,
  },
  {
    name: 'Leslie Chen',
    role: 'External Development Partner',
    bio: 'Googler software engineer with 8 years of full-stack development experience. Brings deep technical expertise across front-end and back-end systems, delivering scalable and reliable digital products.',
    photo: assets.leslieChenPhoto,
  },
];

/* ────────────────────────── Team Structure Section ────────────────────────── */
export default function TeamStructure() {
  return (
    <section className="relative bg-white py-20 md:py-24 overflow-hidden">
      {/* Top-left ribbon decoration */}
      <RibbonDecoration />

      {/* Section title */}
      <Reveal>
        <h2 className="text-center font-display text-[28px] font-semibold uppercase tracking-[0.18em] text-[#050505] sm:text-[32px]">
          Team Structure
        </h2>
      </Reveal>

      {/* Members — editorial staggered layout */}
      <div className="mx-auto mt-16 max-w-[1080px] px-6 lg:px-10">

        {/* ── Member 01: Avatar left, text right — top-left area ── */}
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:gap-14 md:max-w-[75%]">
          <Avatar src={members[0].photo} alt={members[0].name} size={200} />
          <MemberInfo
            name={members[0].name}
            role={members[0].role}
            bio={members[0].bio}
          />
        </div>

        {/* ── Member 02: Text left, avatar right — offset right & down ── */}
        <div className="mt-14 md:mt-16 flex flex-col items-center gap-10 md:flex-row-reverse md:items-center md:gap-14 md:ml-auto md:max-w-[75%]">
          <Avatar src={members[1].photo} alt={members[1].name} size={190} />
          <MemberInfo
            name={members[1].name}
            role={members[1].role}
            bio={members[1].bio}
            delay={0.05}
          />
        </div>

        {/* ── Member 03: Avatar left, text right — offset slightly right & down ── */}
        <div className="mt-14 md:mt-16 flex flex-col items-center gap-10 md:flex-row md:items-center md:gap-14 md:ml-[10%] md:max-w-[75%]">
          <Avatar src={members[2].photo} alt={members[2].name} size={200} />
          <MemberInfo
            name={members[2].name}
            role={members[2].role}
            bio={members[2].bio}
            delay={0.05}
          />
        </div>

        {/* ── Member 04: Text left, avatar right — offset right & down ── */}
        <div className="mt-14 md:mt-16 flex flex-col items-center gap-10 md:flex-row-reverse md:items-center md:gap-14 md:ml-auto md:max-w-[75%]">
          <Avatar src={members[3].photo} alt={members[3].name} size={190} />
          <MemberInfo
            name={members[3].name}
            role={members[3].role}
            bio={members[3].bio}
            delay={0.05}
          />
        </div>

        {/* ── Member 05: Avatar left, text right — centered ── */}
        <div className="mt-14 md:mt-16 flex flex-col items-center gap-10 md:flex-row md:items-center md:gap-14 md:mx-auto md:max-w-[75%]">
          <Avatar src={members[4].photo} alt={members[4].name} size={200} />
          <MemberInfo
            name={members[4].name}
            role={members[4].role}
            bio={members[4].bio}
            delay={0.05}
          />
        </div>

        {/* ── Member 06: Text left, avatar right ── */}
        <div className="mt-14 md:mt-16 flex flex-col items-center gap-10 md:flex-row-reverse md:items-center md:gap-14 md:ml-auto md:max-w-[75%]">
          <Avatar src={members[5].photo} alt={members[5].name} size={190} />
          <MemberInfo
            name={members[5].name}
            role={members[5].role}
            bio={members[5].bio}
            delay={0.05}
          />
        </div>
      </div>
    </section>
  );
}
