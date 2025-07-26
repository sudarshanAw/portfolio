export default function FactbookWaterVsLandSection() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-10 space-y-6">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">🌊 Water vs. Land Area Comparison</h2>

      <p className="text-gray-700 dark:text-gray-300">
        While most countries in the CIA Factbook have a significantly larger land area than water area,
        a few rare outliers exist where the <strong>water area exceeds the land area</strong>.
        These countries typically include island nations, territories with vast inland water bodies, or unusual geographical boundaries.
      </p>

      <div className="bg-yellow-50 text-yellow-800 px-4 py-3 rounded-md border-l-4 border-yellow-500 shadow">
        🔍 Countries with more water than land can indicate <strong>important maritime zones</strong>, 
        <strong>coastal economic reliance</strong>, or <strong>rich freshwater ecosystems</strong>.
      </div>

      <div className="pt-6">
        <img
          src="/projects/cia-factbook/03_water_vs_land_query_output.png"
          alt="SQL query and output: Countries with more water than land"
          className="rounded shadow-md"
          width={1200}
          height={700}
        />
      </div>
    </section>
  );
}
