export default function FactbookPopulationDensitySection() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-10 space-y-6">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">🏙️ Population Density</h2>

      <p className="text-gray-700 dark:text-gray-300">
        Population density measures how many people live per square kilometer of land. 
        It is calculated by dividing a country's population by its total area.
      </p>

      <p className="text-gray-700 dark:text-gray-300">
        Countries with very high population densities tend to be small, highly urbanized, or both. 
        This includes places like <strong>Macau</strong>, <strong>Monaco</strong>, and <strong>Singapore</strong>.
      </p>

      <div className="bg-green-50 text-green-800 px-4 py-3 rounded-md border-l-4 border-green-500 shadow">
        📌 <strong>Macau</strong> tops the list with over <strong>21,000 people per km²</strong> — highlighting an extremely concentrated urban population.
      </div>

      <div className="pt-6">
        <img
          src="/projects/cia-factbook/05_population_density_combined.png"
          alt="SQL query and output for population density"
          className="rounded shadow-md"
        />
      </div>
    </section>
  );
}
