'use client';

import { motion } from 'motion/react';

export default function SectionHeading({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <motion.div
      id={id}
      className="flex items-center gap-4 mb-12 scroll-mt-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold whitespace-nowrap" style={{ color: 'var(--text-primary)' }}>{children}</h2>
      <div className="h-px flex-1" style={{ background: `linear-gradient(90deg, var(--border), transparent)` }} />
    </motion.div>
  );
}
