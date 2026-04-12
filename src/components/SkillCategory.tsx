'use client';

import { motion } from 'motion/react';

export type SkillTier = 'core' | 'strong' | 'familiar';

export interface Skill {
  name: string;
  tier: SkillTier;
}

interface SkillCategoryProps {
  icon: string;
  title: string;
  skills: Skill[];
  delay?: number;
}

const tierConfig: Record<SkillTier, { label: { en: string; de: string }; dot: string; ring: string; bg: string; text: string }> = {
  core: {
    label: { en: 'Core', de: 'Kern' },
    dot: 'bg-[#38bdf8]',
    ring: 'ring-[#38bdf8]/30',
    bg: 'bg-[#38bdf8]/8 hover:bg-[#38bdf8]/15',
    text: 'text-[#38bdf8]',
  },
  strong: {
    label: { en: 'Strong', de: 'Stark' },
    dot: 'bg-[#818cf8]',
    ring: 'ring-[#818cf8]/30',
    bg: 'bg-[#818cf8]/8 hover:bg-[#818cf8]/15',
    text: 'text-[#818cf8]',
  },
  familiar: {
    label: { en: 'Familiar', de: 'Vertraut' },
    dot: 'bg-[#64748b]',
    ring: 'ring-[#64748b]/20',
    bg: 'bg-[#64748b]/8 hover:bg-[#64748b]/12',
    text: 'text-[#94a3b8]',
  },
};

export default function SkillCategory({ icon, title, skills, delay = 0 }: SkillCategoryProps) {
  return (
    <motion.div
      className="glow-card p-5"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay }}
    >
      {/* Category header */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-lg">{icon}</span>
        <h3 className="text-sm font-semibold text-white uppercase tracking-wider">{title}</h3>
      </div>

      {/* Skill chips */}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => {
          const cfg = tierConfig[skill.tier];
          return (
            <motion.span
              key={skill.name}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: delay + i * 0.04 }}
              className={`
                inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium
                border border-[#162033] transition-all duration-300 cursor-default
                ${cfg.bg} ${cfg.text}
                hover:border-current/20 hover:-translate-y-0.5
                hover:shadow-sm
              `}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot} shrink-0`} />
              {skill.name}
            </motion.span>
          );
        })}
      </div>
    </motion.div>
  );
}
