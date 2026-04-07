'use client';

import FactbookPopulationSection from '@/components/FactbookPopulationSection';
import FactbookAreaSection from '@/components/FactbookAreaSection';
import FactbookWaterVsLandSection from '@/components/FactbookWaterVsLandSection';
import FactbookBirthVsDeathSection from '@/components/FactbookBirthVsDeathSection';
import FactbookPopulationDensitySection from '@/components/FactbookPopulationDensitySection';
import Link from 'next/link';
import { motion } from 'motion/react';
import { useLang } from '@/context/LanguageContext';

export default function CIAFactbookPage() {
  const { t } = useLang();

  return (
    <main className="min-h-screen pt-24 pb-20">
      {/* Header */}
      <motion.section
        className="max-w-4xl mx-auto px-6 text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-wrap gap-2 justify-center mb-4">
          {['SQL', 'Jupyter Notebook', 'SQLite', 'Data Analysis'].map(tag => (
            <span key={tag} className="text-xs px-2.5 py-0.5 rounded-full bg-[#1e293b] text-[#94a3b8] border border-[#1e293b]">{tag}</span>
          ))}
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">{t('cia.h1')}</h1>
        <p className="text-[#94a3b8] text-lg">{t('cia.subtitle')}</p>
      </motion.section>

      <FactbookPopulationSection />
      <FactbookAreaSection />
      <FactbookWaterVsLandSection />
      <FactbookBirthVsDeathSection />
      <FactbookPopulationDensitySection />

      {/* CTA & Back */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center space-y-6">
        <h3 className="text-xl font-semibold text-white">{t('cia.notebook.h3')}</h3>
        <a
          href="https://github.com/sudarshanAw/cia-factbook-analysis/blob/master/CIA%2BFactbook.ipynb"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[#38bdf8] to-[#818cf8] text-white font-semibold text-sm hover:shadow-lg hover:shadow-[#38bdf8]/20 transition-all hover:-translate-y-0.5"
        >
          {t('cia.notebook.btn')}
        </a>
        <div className="pt-8">
          <Link href="/" className="inline-flex items-center gap-1 text-sm text-[#64748b] hover:text-[#38bdf8] transition-colors">
            {t('nav.backHome')}
          </Link>
        </div>
      </section>
    </main>
  );
}
