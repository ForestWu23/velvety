import { motion } from 'framer-motion';

type Props = {
  children: string;
  className?: string;
  delay?: number;
  /** Split by 'word' (default) or 'char' */
  splitBy?: 'word' | 'char';
};

/**
 * Splits heading text into words (or chars) and reveals each one
 * with a masked slide-up — replays every time the element enters the viewport.
 */
export function AnimatedHeading({
  children,
  className = '',
  delay = 0,
  splitBy = 'word',
}: Props) {
  const parts = splitBy === 'char'
    ? children.split('')
    : children.split(' ');

  const container = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: delay,
        staggerChildren: splitBy === 'char' ? 0.04 : 0.1,
      },
    },
  };

  const item = {
    hidden: { y: '110%', opacity: 0 },
    visible: {
      y: '0%',
      opacity: 1,
      transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.h2
      className={`overflow-visible ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: '-80px' }}
    >
      {parts.map((part, i) => (
        <span key={i} className="inline-block overflow-hidden leading-[1.15]">
          <motion.span
            className="inline-block"
            variants={item}
          >
            {part}
          </motion.span>
          {/* re-add spaces between words */}
          {splitBy === 'word' && i < parts.length - 1 && '\u00a0'}
        </span>
      ))}
    </motion.h2>
  );
}
