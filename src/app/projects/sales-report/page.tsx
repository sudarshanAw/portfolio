'use client';

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/context/LanguageContext";

export default function SalesReportPage() {
  const { t } = useLang();

  return (
    <main className="min-h-screen bg-white text-gray-900 p-8">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* Header */}
        <section>
          <h1 className="text-4xl font-bold mb-2">{t('sales.h1')}</h1>
          <p className="text-sm text-gray-500">{t('sales.byline')}</p>
          <p className="mt-4 text-lg text-gray-700">{t('sales.lead')}</p>
          <div className="mt-4">
            <a
              href="#preview"
              className="inline-block px-4 py-2 text-sm font-medium border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition"
            >
              {t('sales.jumpBtn')}
            </a>
          </div>
        </section>

        {/* Highlights */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('sales.glance.h2')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5].map((n) => (
              <Image
                key={n}
                src={`/projects/sales-report/highlights${n}.png`}
                alt={`Highlight ${n}`}
                width={600}
                height={400}
                className="rounded"
              />
            ))}
          </div>
        </section>

        {/* Business Requirements */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('sales.need.h2')}</h2>
          <p className="mb-4 text-gray-700">{t('sales.need.p')}</p>
          <table className="w-full text-sm border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border">{t('sales.need.stakeholder')}</th>
                <th className="p-2 border">{t('sales.need.request')}</th>
                <th className="p-2 border">{t('sales.need.purpose')}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border">{t('sales.need.r1a')}</td>
                <td className="p-2 border">{t('sales.need.r1b')}</td>
                <td className="p-2 border">{t('sales.need.r1c')}</td>
              </tr>
              <tr>
                <td className="p-2 border">{t('sales.need.r2a')}</td>
                <td className="p-2 border">{t('sales.need.r2b')}</td>
                <td className="p-2 border">{t('sales.need.r2c')}</td>
              </tr>
              <tr>
                <td className="p-2 border">{t('sales.need.r3a')}</td>
                <td className="p-2 border">{t('sales.need.r3b')}</td>
                <td className="p-2 border">{t('sales.need.r3c')}</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Data Extraction */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('sales.data.h2')}</h2>
          <p className="mb-6 text-gray-700">{t('sales.data.p')}</p>
          <Image src="/projects/sales-report/sql_customers.png" alt="Customers SQL" width={800} height={500} className="rounded mb-6" />
          <Image src="/projects/sales-report/sql_product.png" alt="Products SQL" width={800} height={500} className="rounded mb-6" />
          <Image src="/projects/sales-report/sql_date.png" alt="Date SQL" width={800} height={500} className="rounded" />
        </section>

        {/* Data Model */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('sales.model.h2')}</h2>
          <p className="mb-6 text-gray-700">{t('sales.model.p')}</p>
          <Image src="/projects/sales-report/data-model.png" alt="Data Model" width={1000} height={600} className="rounded" />
        </section>

        {/* Dashboards */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('sales.dashboards.h2')}</h2>

          <div className="mb-10">
            <h3 className="text-xl font-medium mb-2">{t('sales.dash.sales.h3')}</h3>
            <p className="mb-4 text-gray-700">{t('sales.dash.sales.p')}</p>
            <Image src="/projects/sales-report/sales-dashboard.png" alt="Sales Dashboard" width={1000} height={600} className="rounded" />
          </div>

          <div className="mb-10">
            <h3 className="text-xl font-medium mb-2">{t('sales.dash.customer.h3')}</h3>
            <p className="mb-4 text-gray-700">{t('sales.dash.customer.p')}</p>
            <Image src="/projects/sales-report/customer-dashboard.png" alt="Customer Dashboard" width={1000} height={600} className="rounded" />
          </div>

          <div>
            <h3 className="text-xl font-medium mb-2">{t('sales.dash.product.h3')}</h3>
            <p className="mb-4 text-gray-700">{t('sales.dash.product.p')}</p>
            <Image src="/projects/sales-report/product-dashboard.png" alt="Product Dashboard" width={1000} height={600} className="rounded" />
          </div>
        </section>

        {/* Interactive Preview */}
        <section id="preview">
          <h2 className="text-2xl font-semibold mb-4">{t('sales.preview.h2')}</h2>
          <div className="w-full aspect-video rounded overflow-hidden border mb-4">
            <iframe
              src="https://app.powerbi.com/view?r=eyJrIjoiNDQyMDllY2QtNzg3ZC00MzdiLWFlYjktOGZiZjlmZjc0Yjg1IiwidCI6Ijg1NGI2MzM2LWRlNjctNDdlNy05NDhmLTUyODZkM2VlY2E0ZSJ9&pageName=ReportSection"
              width="100%"
              height="100%"
              allowFullScreen
            ></iframe>
          </div>
          <a
            href="https://app.powerbi.com/view?r=eyJrIjoiNDQyMDllY2QtNzg3ZC00MzdiLWFlYjktOGZiZjlmZjc0Yjg1IiwidCI6Ijg1NGI2MzM2LWRlNjctNDdlNy05NDhmLTUyODZkM2VlY2E0ZSJ9&pageName=ReportSection"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition"
          >
            {t('sales.preview.btn')}
          </a>
        </section>

        {/* Back to Home */}
        <section className="pt-12">
          <Link href="/" className="text-blue-600 hover:underline text-sm">
            {t('nav.backHome')}
          </Link>
        </section>
      </div>
    </main>
  );
}
