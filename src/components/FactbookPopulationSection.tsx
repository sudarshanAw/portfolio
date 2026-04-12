export default function FactbookPopulationSection() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-10 space-y-6">
      <h2 className="text-2xl font-bold text-[var(--text-primary)]">Population Analysis</h2>
      <p className="text-[var(--text-muted)] leading-relaxed">
        Initially, the dataset reported the maximum population as <strong className="text-[var(--foreground)]">7.25 billion</strong>. However, this row represented the total for the entire <strong className="text-[var(--foreground)]">&quot;World&quot;</strong>, and not a specific country.
      </p>
      <div className="grid md:grid-cols-2 gap-6 pt-2">
        <img src="/projects/cia-factbook/01_population_summary_query.png" alt="Population summary with world" className="rounded-lg border border-[var(--border)]" width={1200} height={700} />
        <div className="space-y-4">
          <img src="/projects/cia-factbook/01_population_country_output_max.png" alt="Country with max pop (World)" className="rounded-lg border border-[var(--border)]" width={1200} height={700} />
          <img src="/projects/cia-factbook/01_population_country_output_min.png" alt="Country with min pop (Antarctica)" className="rounded-lg border border-[var(--border)]" width={1200} height={700} />
        </div>
      </div>
      <h3 className="text-lg font-semibold text-[var(--text-primary)] pt-8">Refining the Analysis: Excluding the &quot;World&quot;</h3>
      <p className="text-[var(--text-muted)] leading-relaxed">
        After excluding the <strong className="text-[var(--foreground)]">&quot;World&quot;</strong> row, the actual country with the highest population is <strong className="text-[var(--foreground)]">China</strong>, with approximately <strong className="text-[var(--foreground)]">1.36 billion</strong> people.
      </p>
      <div className="grid md:grid-cols-2 gap-6 pt-2">
        <img src="/projects/cia-factbook/01b_population_summary_excluding_world.png" alt="Population summary without world" className="rounded-lg border border-[var(--border)]" width={1200} height={700} />
        <img src="/projects/cia-factbook/01b_population_country_china_output.png" alt="China population" className="rounded-lg border border-[var(--border)]" width={1200} height={700} />
      </div>
    </section>
  );
}
