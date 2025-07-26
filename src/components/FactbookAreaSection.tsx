export default function FactbookAreaSection() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-10 space-y-6">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">🌍 Area Analysis</h2>

      <p className="text-gray-700 dark:text-gray-300">
        The average total area of a country in the CIA Factbook dataset is approximately 
        <strong> 555,093.55 square kilometers</strong>. This helps us understand which countries stand out in terms of geographic size.
      </p>

      <p className="text-gray-700 dark:text-gray-300">
        Countries such as <strong>Russia</strong>, <strong>Canada</strong>, and <strong>United States</strong> 
        significantly exceed this average and dominate in terms of physical landmass.
      </p>

      <div className="bg-blue-50 text-blue-800 px-4 py-3 rounded-md border-l-4 border-blue-500 shadow">
        📌 The top three countries by area are: <strong>Russia</strong>, <strong>Canada</strong>, and <strong>United States</strong>.
      </div>

      <div className="grid md:grid-cols-2 gap-6 pt-6">
        <img
          src="/projects/cia-factbook/02_area_avg_query.png"
          alt="SQL query showing average country area"
          className="rounded shadow-md"
          width={1200}
          height={700}
        />
        <img
          src="/projects/cia-factbook/02_area_above_avg_output.png"
          alt="Countries with area above average"
          className="rounded shadow-md"
          width={1200}
          height={700}
        />
      </div>
    </section>
  );
}
