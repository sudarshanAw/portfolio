export default function FactbookPopulationSection() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-10 space-y-6">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Population Analysis</h2>

      <p className="text-gray-700 dark:text-gray-300">
        Initially, the dataset reported the maximum population as <strong>7.25 billion</strong>. However, this row represented the total for the entire <strong>"World"</strong>, and not a specific country.
      </p>

      <div className="grid md:grid-cols-2 gap-6 pt-2">
        <img
          src="/projects/cia-factbook/01_population_summary_query.png"
          alt="Population summary with world"
          className="rounded shadow"
        />
        <div className="space-y-4">
          <img
            src="/projects/cia-factbook/01_population_country_output_max.png"
            alt="Country with max pop (World)"
            className="rounded shadow"
          />
          <img
            src="/projects/cia-factbook/01_population_country_output_min.png"
            alt="Country with min pop (Antarctica)"
            className="rounded shadow"
          />
        </div>
      </div>

      <h3 className="text-xl font-semibold pt-8">Refining the Analysis: Excluding the "World"</h3>

      <p className="text-gray-700 dark:text-gray-300">
        After excluding the <strong>"World"</strong> row, the actual country with the highest population is <strong>China</strong>, with approximately <strong>1.36 billion</strong> people.
      </p>

      <div className="grid md:grid-cols-2 gap-6 pt-2">
        <img
          src="/projects/cia-factbook/01b_population_summary_excluding_world.png"
          alt="Population summary without world"
          className="rounded shadow"
        />
        <img
          src="/projects/cia-factbook/01b_population_country_china_output.png"
          alt="China population"
          className="rounded shadow"
        />
      </div>
    </section>
  );
}
