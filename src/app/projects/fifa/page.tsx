'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { useLang } from '@/context/LanguageContext';

export default function FifaPage() {
  const { t } = useLang();

  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6 space-y-16">

        {/* Header */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="flex flex-wrap gap-2 mb-4">
            {['Python', 'Streamlit', 'Plotly', 'Pandas'].map(tag => (
              <span key={tag} className="text-xs px-2.5 py-0.5 rounded-full bg-[#1e293b] text-[#94a3b8] border border-[#1e293b]">{tag}</span>
            ))}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">{t('fifa.h1')}</h1>
          <p className="text-sm text-[#64748b] mb-4">{t('fifa.byline')}</p>
          <p className="text-[#94a3b8] text-lg leading-relaxed">{t('fifa.lead')}</p>
          <a href="#hosting" className="inline-block mt-4 px-4 py-2 text-sm font-medium border border-[#1e293b] text-[#94a3b8] rounded-lg hover:border-[#38bdf8]/40 hover:text-white transition-all">
            {t('fifa.jumpBtn')}
          </a>
        </motion.section>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }}>
          <Image src="/images/fifa.png" alt="FIFA World Cup Banner" width={1200} height={600} className="rounded-xl border border-[#1e293b]" />
        </motion.div>

        {/* Overview */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">{t('fifa.overview.h2')}</h2>
          <p className="text-[#94a3b8] leading-relaxed">{t('fifa.overview.p')}</p>
          <ul className="space-y-2 text-[#94a3b8]">
            {['fifa.overview.li1','fifa.overview.li2','fifa.overview.li3'].map(k => (
              <li key={k} className="flex items-start gap-2"><span className="text-[#38bdf8] mt-1.5 shrink-0">&#9656;</span>{t(k)}</li>
            ))}
          </ul>
        </section>

        {/* Overall Analysis */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-white">{t('fifa.overall.h2')}</h2>
          <Image src="/projects/fifa/01_overall_summary_charts.png" alt="Summary" width={1200} height={700} className="rounded-lg border border-[#1e293b]" />
          <Image src="/projects/fifa/02_goals_by_year.png" alt="Goals by Year" width={1200} height={700} className="rounded-lg border border-[#1e293b]" />
          <Image src="/projects/fifa/03_top_scorers_and_countries.png" alt="Top Scorers" width={1200} height={700} className="rounded-lg border border-[#1e293b]" />
        </section>

        {/* Year-wise */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">{t('fifa.year.h2')}</h2>
          <p className="text-[#94a3b8]">{t('fifa.year.p')}</p>
          <Image src="/projects/fifa/04_year_1930_summary.png" alt="1930 Overview" width={1200} height={700} className="rounded-lg border border-[#1e293b]" />
          <Image src="/projects/fifa/05_year_1930_charts.png" alt="1930 Charts" width={1200} height={700} className="rounded-lg border border-[#1e293b]" />
        </section>

        {/* Country-wise */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">{t('fifa.country.h2')}</h2>
          <p className="text-[#94a3b8]">{t('fifa.country.p')}</p>
          <Image src="/projects/fifa/06_country_germany_summary.png" alt="Germany Summary" width={1200} height={700} className="rounded-lg border border-[#1e293b]" />
          <Image src="/projects/fifa/07_germany_goals_by_year.png" alt="Germany Goals" width={1200} height={700} className="rounded-lg border border-[#1e293b]" />
          <Image src="/projects/fifa/08_germany_top_scorers.png" alt="Germany Top Scorers" width={1200} height={700} className="rounded-lg border border-[#1e293b]" />
        </section>

        {/* Hosting */}
        <section id="hosting" className="scroll-mt-24 space-y-4">
          <h2 className="text-xl font-semibold text-white">{t('fifa.hosting.h2')}</h2>
          <p className="text-[#94a3b8]">
            {t('fifa.hosting.p1')}
            <a href="https://sudarshanaw-fifa-wc-analysis-app-app-i440uw.streamlit.app/" target="_blank" rel="noopener noreferrer" className="ml-1 text-[#38bdf8] hover:underline">
              {t('fifa.hosting.streamlit')}
            </a>
          </p>
          <p className="text-[#94a3b8]">
            {t('fifa.hosting.p2')}
            <a href="https://github.com/sudarshanAw/fifa-wc-analysis-app" target="_blank" rel="noopener noreferrer" className="ml-1 text-[#38bdf8] hover:underline">
              {t('fifa.hosting.github')}
            </a>
          </p>
        </section>

        {/* Back */}
        <Link href="/" className="inline-flex items-center gap-1 text-sm text-[#64748b] hover:text-[#38bdf8] transition-colors">
          {t('nav.backHome')}
        </Link>
      </div>
    </main>
  );
}
