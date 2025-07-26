import FactbookPopulationSection from "@/components/FactbookPopulationSection";
import FactbookAreaSection from "@/components/FactbookAreaSection";
import FactbookWaterVsLandSection from "@/components/FactbookWaterVsLandSection";
import FactbookBirthVsDeathSection from "@/components/FactbookBirthVsDeathSection";
import FactbookPopulationDensitySection from "@/components/FactbookPopulationDensitySection";
import Link from 'next/link';


export default function CIAFactbookPage() {
  return (
    <main className="bg-white dark:bg-gray-900 min-h-screen">
      <section className="px-4 py-12 text-center">
        <h1 className="text-4xl font-bold">CIA World Factbook Analysis</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Data-driven insights using SQL + Jupyter Notebook
        </p>
      </section>

      <FactbookPopulationSection />
      <FactbookAreaSection />
      <FactbookWaterVsLandSection />
      <FactbookBirthVsDeathSection />
      <FactbookPopulationDensitySection />

<section className="max-w-4xl mx-auto px-4 py-16 text-center">
  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
    📘 Want to explore the full code and analysis?
  </h3>
  <a
    href="https://github.com/sudarshanAw/cia-factbook-analysis/blob/master/CIA%2BFactbook.ipynb"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition"
  >
    View Full Notebook on GitHub
  </a>

  <div className="mt-8">
    <Link
  href="/"
  className="text-blue-600 hover:text-blue-800 font-medium underline transition"
>
  ← Back to Home
</Link>

  </div>
</section>

    </main>
  );
}
