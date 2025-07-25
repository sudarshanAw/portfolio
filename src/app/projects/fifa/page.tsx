import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-8">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* Header */}
        <section>
          <h1 className="text-4xl font-bold mb-2">
            FIFA World Cup Analysis (1930 - 2018)
          </h1>
          <p className="text-sm text-gray-500">By Sudarshan Awasthi • December 14, 2022</p>
          <p className="mt-4 text-lg text-gray-700">
            A historical data analysis project built with Python, Streamlit, and Plotly to visualize insights across World Cup events, years, and countries.
          </p>

          {/* Jump to Hosting */}
          <div className="mt-4">
            <a
              href="#hosting"
              className="inline-block px-4 py-2 text-sm font-medium border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition"
            >
              ↓ Jump to Hosting & Code
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
          <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
          <p className="text-gray-700 mb-4">
            The goal of this project was to analyze the FIFA World Cup data from 1930–2018 using public sources and generate insights in three layers:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Overall trends (events, wins, goals, scorers)</li>
            <li>Year-wise statistics (host, winner, scoring)</li>
            <li>Country-wise breakdown (performance & players)</li>
          </ul>
        </section>

        {/* Overall Analysis */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Overall Analysis</h2>
          <Image src="/projects/fifa/01_overall_summary_charts.png" alt="World Cup Summary" width={1200} height={700} className="rounded mb-6" />
          <Image src="/projects/fifa/02_goals_by_year.png" alt="Goals by Year" width={1200} height={700} className="rounded mb-6" />
          <Image src="/projects/fifa/03_top_scorers_and_countries.png" alt="Top Scorers and Countries" width={1200} height={700} className="rounded" />
        </section>

        {/* Year-wise Analysis */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Year-Wise Analysis</h2>
          <p className="text-gray-700 mb-4">Sample analysis for the year 1930:</p>
          <Image src="/projects/fifa/04_year_1930_summary.png" alt="1930 Overview" width={1200} height={700} className="rounded mb-6" />
          <Image src="/projects/fifa/05_year_1930_charts.png" alt="1930 Charts" width={1200} height={700} className="rounded" />
        </section>

        {/* Country-wise Analysis */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Country-Wise Analysis</h2>
          <p className="text-gray-700 mb-4">Example: Germany’s participation and stats over the years.</p>
          <Image src="/projects/fifa/06_country_germany_summary.png" alt="Germany Summary" width={1200} height={700} className="rounded mb-6" />
          <Image src="/projects/fifa/07_germany_goals_by_year.png" alt="Germany Goals by Year" width={1200} height={700} className="rounded mb-6" />
          <Image src="/projects/fifa/08_germany_top_scorers.png" alt="Germany Top Scorers" width={1200} height={700} className="rounded" />
        </section>

        {/* Hosting */}
        <section id="hosting">
          <h2 className="text-2xl font-semibold mb-4">Hosting & Source Code</h2>
          <p className="text-gray-700 mb-2">
            The project is deployed using Streamlit and hosted at:
            <a
              href="https://sudarshanaw-fifa-wc-analysis-app-app-i440uw.streamlit.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 underline text-blue-600"
            >
              Streamlit Live App
            </a>
          </p>
          <p className="text-gray-700">
            GitHub Repository:
            <a
              href="https://github.com/sudarshanAw/fifa-wc-analysis-app"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 underline text-blue-600"
            >
              View on GitHub
            </a>
          </p>
        </section>

        {/* Back Navigation */}
        <section className="pt-12">
          <Link href="/" className="text-blue-600 hover:underline text-sm">
            ← Back to Home
          </Link>
        </section>
      </div>
    </main>
  );
}
