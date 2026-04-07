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
      <h2 className="text-2xl font-bold text-white whitespace-nowrap">{children}</h2>
      <div className="h-px flex-1 bg-gradient-to-r from-[#1e293b] to-transparent" />
    </motion.div>
  );
}
