'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { useLang } from '@/context/LanguageContext';

export default function PDFChatbotPage() {
  const { t } = useLang();

  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6 space-y-16">

        {/* Header */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="flex flex-wrap gap-2 mb-4">
            {['Flask', 'Power Platform', 'AI', 'Python'].map(tag => (
              <span key={tag} className="text-xs px-2.5 py-0.5 rounded-full bg-[#1e293b] text-[#94a3b8] border border-[#1e293b]">{tag}</span>
            ))}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">{t('chatbot.h1')}</h1>
          <p className="text-sm text-[#64748b] mb-4">{t('chatbot.byline')}</p>
          <p className="text-[#94a3b8] text-lg leading-relaxed">{t('chatbot.intro.lead')}</p>
        </motion.section>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }}>
          <Image src="/images/pdf-context-chatbot.png" alt="PDF Context Chatbot" width={1200} height={600} className="rounded-xl border border-[#1e293b]" />
        </motion.div>

        {/* Introduction */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">{t('chatbot.intro.h2')}</h2>
          <p className="text-[#94a3b8] leading-relaxed">{t('chatbot.intro.p')}</p>
        </section>

        {/* Problem Statement */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">{t('chatbot.problem.h2')}</h2>
          <p className="text-[#94a3b8] leading-relaxed">{t('chatbot.problem.p')}</p>
          <ul className="space-y-2 text-[#94a3b8]">
            {['chatbot.problem.li1','chatbot.problem.li2','chatbot.problem.li3','chatbot.problem.li4'].map(k => (
              <li key={k} className="flex items-start gap-2"><span className="text-[#38bdf8] mt-1.5 shrink-0">&#9656;</span>{t(k)}</li>
            ))}
          </ul>
        </section>

        {/* Technologies */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">{t('chatbot.tech.h2')}</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-[#1e293b] rounded-lg overflow-hidden">
              <thead className="bg-[#111827]">
                <tr>
                  <th className="p-3 border-b border-[#1e293b] text-left text-[#94a3b8] font-medium">{t('chatbot.tech.layer')}</th>
                  <th className="p-3 border-b border-[#1e293b] text-left text-[#94a3b8] font-medium">{t('chatbot.tech.tech')}</th>
                </tr>
              </thead>
              <tbody className="text-[#94a3b8]">
                {[['UI','Power Apps (Canvas App)'],['Automation','Power Automate'],['Backend','Python Flask + Sentence Transformers'],['Embedding Model','all-mpnet-base-v2'],['PDF Parsing','PyPDF2'],['Hosting','Ngrok (Dev)'],['Memory Logs','psutil']].map(([layer, tech]) => (
                  <tr key={layer} className="border-b border-[#1e293b]/50 hover:bg-[#111827]/50 transition-colors">
                    <td className="p-3 text-[#e2e8f0]">{layer}</td>
                    <td className="p-3">{tech}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Architecture */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">{t('chatbot.arch.h2')}</h2>
          <Image src="/projects/pdf-context-chatbot/architecture_diagram.png" alt="Architecture" width={1200} height={700} className="rounded-xl border border-[#1e293b]" />
          <p className="text-[#94a3b8] leading-relaxed">{t('chatbot.arch.p')}</p>
          <ul className="space-y-2 text-[#94a3b8]">
            {['chatbot.arch.li1','chatbot.arch.li2','chatbot.arch.li3','chatbot.arch.li4','chatbot.arch.li5'].map(k => (
              <li key={k} className="flex items-start gap-2"><span className="text-[#38bdf8] mt-1.5 shrink-0">&#9656;</span>{t(k)}</li>
            ))}
          </ul>
          <p className="text-[#94a3b8] leading-relaxed">{t('chatbot.arch.p2')}</p>
        </section>

        {/* Power Apps UI */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">{t('chatbot.powerapps.h2')}</h2>
          <Image src="/projects/pdf-context-chatbot/powerapps_ui.png" alt="Power Apps UI" width={1200} height={700} className="rounded-xl border border-[#1e293b]" />
        </section>

        {/* Power Automate */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">{t('chatbot.automate.h2')}</h2>
          <p className="text-[#94a3b8] leading-relaxed">{t('chatbot.automate.p')}</p>
          <h3 className="text-lg font-medium text-white pt-2">{t('chatbot.automate.h3')}</h3>
          <ol className="space-y-2 text-[#94a3b8] list-decimal list-inside">
            {['chatbot.automate.step1','chatbot.automate.step2','chatbot.automate.step3','chatbot.automate.step4','chatbot.automate.step5'].map(k => (
              <li key={k}>{t(k)}</li>
            ))}
          </ol>
          <div className="bg-[#111827] border-l-4 border-[#38bdf8] px-4 py-3 rounded-r-lg text-sm text-[#94a3b8]">
            <code>[User Question] → [Power Automate] → [Flask API] → [Reduced Context] → [AI Prompt] → [Answer]</code>
          </div>
          <Image src="/projects/pdf-context-chatbot/powerautomate_flow.png" alt="Power Automate Flow" width={1200} height={700} className="rounded-xl border border-[#1e293b]" />
        </section>

        {/* Sample Prompt */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">{t('chatbot.sample.h2')}</h2>
          <p className="text-[#94a3b8]">{t('chatbot.sample.p')}</p>
          <div className="glow-card p-4">
            <h3 className="text-sm font-medium text-[#38bdf8] mb-2">{t('chatbot.sample.qh')}</h3>
            <p className="text-[#e2e8f0] text-sm">{t('chatbot.sample.q')}</p>
          </div>
          <div className="glow-card p-4">
            <h3 className="text-sm font-medium text-[#22c55e] mb-2">{t('chatbot.sample.aih')}</h3>
            <p className="text-[#e2e8f0] text-sm leading-relaxed">
              To connect Power BI to SharePoint, use the SharePoint Online List connector and provide the site URL and list name.
              After shaping the data with Power Query, publish the report to Power BI Service. Then, configure automatic refresh
              under dataset settings — no gateway is needed for SharePoint Online.
            </p>
          </div>
        </section>

        {/* GitHub Link */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">{t('chatbot.repo.h2')}</h2>
          <p className="text-[#94a3b8]">{t('chatbot.repo.p')}</p>
          <a
            href="https://github.com/sudarshanAw/knowledge-book-API"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[#38bdf8] to-[#818cf8] text-white font-semibold text-sm hover:shadow-lg hover:shadow-[#38bdf8]/20 transition-all hover:-translate-y-0.5"
          >
            {t('chatbot.repo.btn')}
          </a>
        </section>

        {/* Conclusion */}
        <section className="space-y-4 pt-8 border-t border-[#1e293b]">
          <h2 className="text-xl font-semibold text-white">{t('chatbot.conclusion.h2')}</h2>
          <p className="text-[#94a3b8] leading-relaxed">{t('chatbot.conclusion.p')}</p>
        </section>

        {/* Back */}
        <Link href="/" className="inline-flex items-center gap-1 text-sm text-[#64748b] hover:text-[#38bdf8] transition-colors">
          {t('nav.backHome')}
        </Link>
      </div>
    </main>
  );
}
