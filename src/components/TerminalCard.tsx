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
      <div className="flex items-center gap-2 px-4 py-3 bg-[#0f172a] border-b border-[#1e293b]">
        <div className="w-3 h-3 rounded-full bg-[#ef4444]" />
        <div className="w-3 h-3 rounded-full bg-[#f59e0b]" />
        <div className="w-3 h-3 rounded-full bg-[#22c55e]" />
        <span className="ml-2 text-[#64748b] text-xs">sudarshan@portfolio:~</span>
      </div>

      {/* Terminal body */}
      <div className="p-5 space-y-3 leading-relaxed">
        <div>
          <span className="text-[#22c55e]">$</span>
          <span className="text-[#94a3b8]"> cat about.json</span>
        </div>
        <div className="text-[#94a3b8] pl-2">
          <span className="text-[#64748b]">{'{'}</span><br />
          <span className="pl-4 text-[#818cf8]">&quot;name&quot;</span>
          <span className="text-[#64748b]">: </span>
          <span className="text-[#38bdf8]">&quot;Sudarshan Awasthi&quot;</span>
          <span className="text-[#64748b]">,</span><br />
          <span className="pl-4 text-[#818cf8]">&quot;location&quot;</span>
          <span className="text-[#64748b]">: </span>
          <span className="text-[#38bdf8]">&quot;Mülheim an der Ruhr, DE&quot;</span>
          <span className="text-[#64748b]">,</span><br />
          <span className="pl-4 text-[#818cf8]">&quot;role&quot;</span>
          <span className="text-[#64748b]">: </span>
          <span className="text-[#38bdf8]">&quot;Power Platform Consultant&quot;</span>
          <span className="text-[#64748b]">,</span><br />
          <span className="pl-4 text-[#818cf8]">&quot;languages&quot;</span>
          <span className="text-[#64748b]">: [</span>
          <span className="text-[#38bdf8]">&quot;EN&quot;</span>
          <span className="text-[#64748b]">, </span>
          <span className="text-[#38bdf8]">&quot;DE&quot;</span>
          <span className="text-[#64748b]">, </span>
          <span className="text-[#38bdf8]">&quot;HI&quot;</span>
          <span className="text-[#64748b]">],</span><br />
          <span className="pl-4 text-[#818cf8]">&quot;focus&quot;</span>
          <span className="text-[#64748b]">: [</span>
          <span className="text-[#38bdf8]">&quot;Power Apps&quot;</span>
          <span className="text-[#64748b]">, </span>
          <span className="text-[#38bdf8]">&quot;Power BI&quot;</span>
          <span className="text-[#64748b]">, </span>
          <span className="text-[#38bdf8]">&quot;React&quot;</span>
          <span className="text-[#64748b]">, </span>
          <span className="text-[#38bdf8]">&quot;Data Analysis&quot;</span>
          <span className="text-[#64748b]">],</span><br />
          <span className="pl-4 text-[#818cf8]">&quot;available&quot;</span>
          <span className="text-[#64748b]">: </span>
          <span className="text-[#22c55e]">true</span><br />
          <span className="text-[#64748b]">{'}'}</span>
        </div>
        <div className="pt-1">
          <span className="text-[#22c55e]">$</span>
          <span className="text-[#94a3b8] animate-pulse"> _</span>
        </div>
      </div>
    </motion.div>
  );
}
