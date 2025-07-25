export default function FactbookBirthVsDeathSection() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-10 space-y-6">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">📉 Birth Rate vs. Death Rate</h2>

      <p className="text-gray-700 dark:text-gray-300">
        A country where the <strong>death rate exceeds the birth rate</strong> may experience long-term demographic challenges.
        These can include population decline, economic stagnation, labor shortages, and increased strain on healthcare and social systems.
      </p>

      <p className="text-gray-700 dark:text-gray-300">
        The dataset highlights countries like <strong>Ukraine</strong>, <strong>Bulgaria</strong>, and <strong>Latvia</strong> where this imbalance is most pronounced.
      </p>

      <div className="bg-red-50 text-red-800 px-4 py-3 rounded-md border-l-4 border-red-500 shadow">
        ⚠️ Negative population growth can lead to social and economic stress unless mitigated by policies like immigration or increased fertility support.
      </div>

      <div className="pt-6">
        <img
          src="/projects/cia-factbook/04_death_vs_birth_combined.png"
          alt="Query and table: Countries with higher death rate than birth rate"
          className="rounded shadow-md"
        />
      </div>
    </section>
  );
}
