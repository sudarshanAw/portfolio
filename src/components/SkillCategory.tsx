'use client';

import { motion } from 'motion/react';

interface SkillCategoryProps {
  icon: string;
  title: string;
  skills: { name: string; level: number }[];
  delay?: number;
}

export default function SkillCategory({ icon, title, skills, delay = 0 }: SkillCategoryProps) {
  return (
    <motion.div
      className="glow-card p-5"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex items-center gap-2 mb-4">
        <span className="text-lg">{icon}</span>
        <h3 className="text-sm font-semibold text-white uppercase tracking-wider">{title}</h3>
      </div>
      <div className="space-y-3">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="text-[#94a3b8]">{skill.name}</span>
              <span className="text-[#64748b] font-mono">{skill.level}%</span>
            </div>
            <div className="h-1.5 bg-[#1e293b] rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-[#38bdf8] to-[#818cf8]"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: delay + 0.2, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
