'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLang } from '@/context/LanguageContext';

export default function FifaPage() {
  const { t } = useLang();

  return (
    <main className="min-h-screen bg-white text-gray-900 p-8">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* Header */}
        <section>
          <h1 className="text-4xl font-bold mb-2">{t('fifa.h1')}</h1>
          <p className="text-sm text-gray-500">{t('fifa.byline')}</p>
          <p className="mt-4 text-lg text-gray-700">{t('fifa.lead')}</p>
          <div className="mt-4">
            <a
              href="#hosting"
              className="inline-block px-4 py-2 text-sm font-medium border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition"
            >
              {t('fifa.jumpBtn')}
            </a>
          </div>
        </section>

        {/* Banner */}
        <Image
          src="/images/fifa.png"
          alt="FIFA World Cup Banner"
          width={1200}
          height={600}
          className="rounded-xl"
        />

        {/* Project Overview */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('fifa.overview.h2')}</h2>
          <p className="text-gray-700 mb-4">{t('fifa.overview.p')}</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>{t('fifa.overview.li1')}</li>
            <li>{t('fifa.overview.li2')}</li>
            <li>{t('fifa.overview.li3')}</li>
          </ul>
        </section>

        {/* Overall Analysis */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('fifa.overall.h2')}</h2>
          <Image src="/projects/fifa/01_overall_summary_charts.png" alt="World Cup Summary" width={1200} height={700} className="rounded mb-6" />
          <Image src="/projects/fifa/02_goals_by_year.png" alt="Goals by Year" width={1200} height={700} className="rounded mb-6" />
          <Image src="/projects/fifa/03_top_scorers_and_countries.png" alt="Top Scorers and Countries" width={1200} height={700} className="rounded" />
        </section>

        {/* Year-wise Analysis */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('fifa.year.h2')}</h2>
          <p className="text-gray-700 mb-4">{t('fifa.year.p')}</p>
          <Image src="/projects/fifa/04_year_1930_summary.png" alt="1930 Overview" width={1200} height={700} className="rounded mb-6" />
          <Image src="/projects/fifa/05_year_1930_charts.png" alt="1930 Charts" width={1200} height={700} className="rounded" />
        </section>

        {/* Country-wise Analysis */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('fifa.country.h2')}</h2>
          <p className="text-gray-700 mb-4">{t('fifa.country.p')}</p>
          <Image src="/projects/fifa/06_country_germany_summary.png" alt="Germany Summary" width={1200} height={700} className="rounded mb-6" />
          <Image src="/projects/fifa/07_germany_goals_by_year.png" alt="Germany Goals by Year" width={1200} height={700} className="rounded mb-6" />
          <Image src="/projects/fifa/08_germany_top_scorers.png" alt="Germany Top Scorers" width={1200} height={700} className="rounded" />
        </section>

        {/* Hosting */}
        <section id="hosting">
          <h2 className="text-2xl font-semibold mb-4">{t('fifa.hosting.h2')}</h2>
          <p className="text-gray-700 mb-2">
            {t('fifa.hosting.p1')}
            <a
              href="https://sudarshanaw-fifa-wc-analysis-app-app-i440uw.streamlit.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 underline text-blue-600"
            >
              {t('fifa.hosting.streamlit')}
            </a>
          </p>
          <p className="text-gray-700">
            {t('fifa.hosting.p2')}
            <a
              href="https://github.com/sudarshanAw/fifa-wc-analysis-app"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 underline text-blue-600"
            >
              {t('fifa.hosting.github')}
            </a>
          </p>
        </section>

        {/* Back Navigation */}
        <section className="pt-12">
          <Link href="/" className="text-blue-600 hover:underline text-sm">
            {t('nav.backHome')}
          </Link>
        </section>
      </div>
    </main>
  );
}
