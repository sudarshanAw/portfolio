'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { useLang } from '@/context/LanguageContext';

export default function SalesReportPage() {
  const { t } = useLang();

  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6 space-y-16">

        {/* Header */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="flex flex-wrap gap-2 mb-4">
            {['Power BI', 'SQL Server', 'DAX', 'Data Modeling'].map(tag => (
              <span key={tag} className="text-xs px-2.5 py-0.5 rounded-full bg-[#1e293b] text-[#94a3b8] border border-[#1e293b]">{tag}</span>
            ))}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">{t('sales.h1')}</h1>
          <p className="text-sm text-[#64748b] mb-4">{t('sales.byline')}</p>
          <p className="text-[#94a3b8] text-lg leading-relaxed">{t('sales.lead')}</p>
          <a
            href="#preview"
            className="inline-block mt-4 px-4 py-2 text-sm font-medium border border-[#1e293b] text-[#94a3b8] rounded-lg hover:border-[#38bdf8]/40 hover:text-white transition-all"
          >
            {t('sales.jumpBtn')}
          </a>
        </motion.section>

        {/* Highlights */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">{t('sales.glance.h2')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[1,2,3,4,5].map(n => (
              <Image key={n} src={`/projects/sales-report/highlights${n}.png`} alt={`Highlight ${n}`} width={600} height={400} className="rounded-lg border border-[#1e293b]" />
            ))}
          </div>
        </section>

        {/* Business Requirements */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">{t('sales.need.h2')}</h2>
          <p className="text-[#94a3b8] leading-relaxed">{t('sales.need.p')}</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-[#1e293b] rounded-lg overflow-hidden">
              <thead className="bg-[#111827]">
                <tr>
                  <th className="p-3 border-b border-[#1e293b] text-left text-[#94a3b8] font-medium">{t('sales.need.stakeholder')}</th>
                  <th className="p-3 border-b border-[#1e293b] text-left text-[#94a3b8] font-medium">{t('sales.need.request')}</th>
                  <th className="p-3 border-b border-[#1e293b] text-left text-[#94a3b8] font-medium">{t('sales.need.purpose')}</th>
                </tr>
              </thead>
              <tbody className="text-[#94a3b8]">
                {[['r1a','r1b','r1c'],['r2a','r2b','r2c'],['r3a','r3b','r3c']].map((row, i) => (
                  <tr key={i} className="border-b border-[#1e293b]/50 hover:bg-[#111827]/50 transition-colors">
                    {row.map((key) => <td key={key} className="p-3">{t(`sales.need.${key}`)}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Data */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-white">{t('sales.data.h2')}</h2>
          <p className="text-[#94a3b8] leading-relaxed">{t('sales.data.p')}</p>
          <Image src="/projects/sales-report/sql_customers.png" alt="Customers SQL" width={800} height={500} className="rounded-lg border border-[#1e293b]" />
          <Image src="/projects/sales-report/sql_product.png" alt="Products SQL" width={800} height={500} className="rounded-lg border border-[#1e293b]" />
          <Image src="/projects/sales-report/sql_date.png" alt="Date SQL" width={800} height={500} className="rounded-lg border border-[#1e293b]" />
        </section>

        {/* Data Model */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">{t('sales.model.h2')}</h2>
          <p className="text-[#94a3b8] leading-relaxed">{t('sales.model.p')}</p>
          <Image src="/projects/sales-report/data-model.png" alt="Data Model" width={1000} height={600} className="rounded-lg border border-[#1e293b]" />
        </section>

        {/* Dashboards */}
        <section className="space-y-10">
          <h2 className="text-xl font-semibold text-white">{t('sales.dashboards.h2')}</h2>
          {[
            { h: 'sales.dash.sales.h3', p: 'sales.dash.sales.p', img: 'sales-dashboard' },
            { h: 'sales.dash.customer.h3', p: 'sales.dash.customer.p', img: 'customer-dashboard' },
            { h: 'sales.dash.product.h3', p: 'sales.dash.product.p', img: 'product-dashboard' },
          ].map(d => (
            <div key={d.img} className="space-y-4">
              <h3 className="text-lg font-medium text-white">{t(d.h)}</h3>
              <p className="text-[#94a3b8] leading-relaxed">{t(d.p)}</p>
              <Image src={`/projects/sales-report/${d.img}.png`} alt={d.img} width={1000} height={600} className="rounded-lg border border-[#1e293b]" />
            </div>
          ))}
        </section>

        {/* Preview */}
        <section id="preview" className="scroll-mt-24 space-y-4">
          <h2 className="text-xl font-semibold text-white">{t('sales.preview.h2')}</h2>
          <div className="w-full aspect-video rounded-xl overflow-hidden border border-[#1e293b]">
            <iframe
              src="https://app.powerbi.com/view?r=eyJrIjoiNDQyMDllY2QtNzg3ZC00MzdiLWFlYjktOGZiZjlmZjc0Yjg1IiwidCI6Ijg1NGI2MzM2LWRlNjctNDdlNy05NDhmLTUyODZkM2VlY2E0ZSJ9&pageName=ReportSection"
              width="100%"
              height="100%"
              allowFullScreen
            />
          </div>
          <a
            href="https://app.powerbi.com/view?r=eyJrIjoiNDQyMDllY2QtNzg3ZC00MzdiLWFlYjktOGZiZjlmZjc0Yjg1IiwidCI6Ijg1NGI2MzM2LWRlNjctNDdlNy05NDhmLTUyODZkM2VlY2E0ZSJ9&pageName=ReportSection"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[#38bdf8] to-[#818cf8] text-white font-semibold text-sm hover:shadow-lg hover:shadow-[#38bdf8]/20 transition-all hover:-translate-y-0.5"
          >
            {t('sales.preview.btn')}
          </a>
        </section>

        {/* Back */}
        <Link href="/" className="inline-flex items-center gap-1 text-sm text-[#64748b] hover:text-[#38bdf8] transition-colors">
          {t('nav.backHome')}
        </Link>
      </div>
    </main>
  );
}
