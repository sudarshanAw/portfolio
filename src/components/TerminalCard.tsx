'use client';

import { motion } from 'motion/react';
import { useLang } from '@/context/LanguageContext';

export default function TerminalCard() {
  const { t } = useLang();

  return (
    <motion.div
      className="glow-card overflow-hidden font-mono text-sm"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3"
        style={{ background: 'var(--terminal-titlebar)', borderBottom: '1px solid var(--terminal-border)' }}
      >
        <div className="w-3 h-3 rounded-full bg-[#ef4444]" />
        <div className="w-3 h-3 rounded-full bg-[#f59e0b]" />
        <div className="w-3 h-3 rounded-full bg-[#22c55e]" />
        <span className="ml-2 text-xs" style={{ color: 'var(--text-faint)' }}>sudarshan@portfolio:~</span>
      </div>

      {/* Terminal body */}
      <div className="p-5 space-y-3 leading-relaxed">
        <div>
          <span style={{ color: 'var(--green)' }}>$</span>
          <span style={{ color: 'var(--text-muted)' }}> cat about.json</span>
        </div>
        <div style={{ color: 'var(--text-muted)' }} className="pl-2">
          <span style={{ color: 'var(--text-faint)' }}>{'{'}</span><br />
          <span className="pl-4" style={{ color: 'var(--accent-2)' }}>&quot;name&quot;</span>
          <span style={{ color: 'var(--text-faint)' }}>: </span>
          <span style={{ color: 'var(--accent)' }}>&quot;Sudarshan Awasthi&quot;</span>
          <span style={{ color: 'var(--text-faint)' }}>,</span><br />
          <span className="pl-4" style={{ color: 'var(--accent-2)' }}>&quot;location&quot;</span>
          <span style={{ color: 'var(--text-faint)' }}>: </span>
          <span style={{ color: 'var(--accent)' }}>&quot;Mülheim an der Ruhr, DE&quot;</span>
          <span style={{ color: 'var(--text-faint)' }}>,</span><br />
          <span className="pl-4" style={{ color: 'var(--accent-2)' }}>&quot;role&quot;</span>
          <span style={{ color: 'var(--text-faint)' }}>: </span>
          <span style={{ color: 'var(--accent)' }}>&quot;Power Platform Consultant&quot;</span>
          <span style={{ color: 'var(--text-faint)' }}>,</span><br />
          <span className="pl-4" style={{ color: 'var(--accent-2)' }}>&quot;languages&quot;</span>
          <span style={{ color: 'var(--text-faint)' }}>: [</span>
          <span style={{ color: 'var(--accent)' }}>&quot;EN&quot;</span>
          <span style={{ color: 'var(--text-faint)' }}>, </span>
          <span style={{ color: 'var(--accent)' }}>&quot;DE&quot;</span>
          <span style={{ color: 'var(--text-faint)' }}>, </span>
          <span style={{ color: 'var(--accent)' }}>&quot;HI&quot;</span>
          <span style={{ color: 'var(--text-faint)' }}>],</span><br />
          <span className="pl-4" style={{ color: 'var(--accent-2)' }}>&quot;focus&quot;</span>
          <span style={{ color: 'var(--text-faint)' }}>: [</span>
          <span style={{ color: 'var(--accent)' }}>&quot;Power Apps&quot;</span>
          <span style={{ color: 'var(--text-faint)' }}>, </span>
          <span style={{ color: 'var(--accent)' }}>&quot;Power BI&quot;</span>
          <span style={{ color: 'var(--text-faint)' }}>, </span>
          <span style={{ color: 'var(--accent)' }}>&quot;Fabric&quot;</span>
          <span style={{ color: 'var(--text-faint)' }}>, </span>
          <span style={{ color: 'var(--accent)' }}>&quot;React&quot;</span>
          <span style={{ color: 'var(--text-faint)' }}>, </span>
          <span style={{ color: 'var(--accent)' }}>&quot;Data Analysis&quot;</span>
          <span style={{ color: 'var(--text-faint)' }}>],</span><br />
          <span className="pl-4" style={{ color: 'var(--accent-2)' }}>&quot;available&quot;</span>
          <span style={{ color: 'var(--text-faint)' }}>: </span>
          <span style={{ color: 'var(--green)' }}>true</span><br />
          <span style={{ color: 'var(--text-faint)' }}>{'}'}</span>
        </div>
        <div className="pt-1">
          <span style={{ color: 'var(--green)' }}>$</span>
          <span className="animate-pulse" style={{ color: 'var(--text-muted)' }}> _</span>
        </div>
      </div>
    </motion.div>
  );
}
