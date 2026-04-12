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

const tierStyles: Record<SkillTier, { dotColor: string; bgColor: string; hoverBg: string; textColor: string }> = {
  core: {
    dotColor: 'var(--accent)',
    bgColor: 'color-mix(in srgb, var(--accent) 8%, transparent)',
    hoverBg: 'color-mix(in srgb, var(--accent) 15%, transparent)',
    textColor: 'var(--accent)',
  },
  strong: {
    dotColor: 'var(--accent-2)',
    bgColor: 'color-mix(in srgb, var(--accent-2) 8%, transparent)',
    hoverBg: 'color-mix(in srgb, var(--accent-2) 15%, transparent)',
    textColor: 'var(--accent-2)',
  },
  familiar: {
    dotColor: 'var(--text-faint)',
    bgColor: 'color-mix(in srgb, var(--text-faint) 8%, transparent)',
    hoverBg: 'color-mix(in srgb, var(--text-faint) 12%, transparent)',
    textColor: 'var(--text-muted)',
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
        <h3 className="text-sm font-semibold uppercase tracking-wider" style={{ color: 'var(--text-primary)' }}>{title}</h3>
      </div>

      {/* Skill chips */}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => {
          const s = tierStyles[skill.tier];
          return (
            <motion.span
              key={skill.name}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: delay + i * 0.04 }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium cursor-default transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm"
              style={{
                background: s.bgColor,
                color: s.textColor,
                border: '1px solid var(--skill-chip-border)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = s.hoverBg;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = s.bgColor;
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{ background: s.dotColor }}
              />
              {skill.name}
            </motion.span>
          );
        })}
      </div>
    </motion.div>
  );
}
