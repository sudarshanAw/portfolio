export default function FactbookAreaSection() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-10 space-y-6">
      <h2 className="text-2xl font-bold text-[var(--text-primary)]">Area Analysis</h2>
      <p className="text-[var(--text-muted)] leading-relaxed">
        The average total area of a country in the CIA Factbook dataset is approximately
        <strong className="text-[var(--foreground)]"> 555,093.55 square kilometers</strong>. This helps us understand which countries stand out in terms of geographic size.
      </p>
      <p className="text-[var(--text-muted)] leading-relaxed">
        Countries such as <strong className="text-[var(--foreground)]">Russia</strong>, <strong className="text-[var(--foreground)]">Canada</strong>, and <strong className="text-[var(--foreground)]">United States</strong> significantly exceed this average and dominate in terms of physical landmass.
      </p>
      <div className="bg-[var(--surface-2)] border-l-4 border-[#38bdf8] px-4 py-3 rounded-r-lg text-sm text-[var(--text-muted)]">
        The top three countries by area are: <strong className="text-[var(--foreground)]">Russia</strong>, <strong className="text-[var(--foreground)]">Canada</strong>, and <strong className="text-[var(--foreground)]">United States</strong>.
      </div>
      <div className="grid md:grid-cols-2 gap-6 pt-6">
        <img src="/projects/cia-factbook/02_area_avg_query.png" alt="SQL query showing average country area" className="rounded-lg border border-[var(--border)]" width={1200} height={700} />
        <img src="/projects/cia-factbook/02_area_above_avg_output.png" alt="Countries with area above average" className="rounded-lg border border-[var(--border)]" width={1200} height={700} />
      </div>
    </section>
  );
}
