import { motion, useReducedMotion, type HTMLMotionProps } from 'framer-motion';
import { type ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  /** Delay before the reveal animation starts, in seconds. */
  delay?: number;
  /** Vertical translate distance, in pixels. */
  y?: number;
  /** Animation duration in seconds. */
  duration?: number;
  /** Once true, the reveal only fires the first time it enters the viewport. */
  once?: boolean;
  /** Viewport margin passed to framer-motion (controls trigger threshold). */
  margin?: string;
  className?: string;
} & Omit<HTMLMotionProps<'div'>, 'initial' | 'whileInView' | 'viewport'>;

export function Reveal({
  children,
  delay = 0,
  y = 28,
  duration = 0.7,
  once = true,
  margin = '-80px',
  className,
  ...rest
}: RevealProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: margin as unknown as undefined }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

type StaggerProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
};

/** Container that staggers its direct motion children. */
export function Stagger({
  children,
  className,
  delay = 0,
  stagger = 0.1,
}: StaggerProps) {
  const prefersReduced = useReducedMotion();
  if (prefersReduced) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: {},
        visible: { transition: { delayChildren: delay, staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  );
}

export const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};
