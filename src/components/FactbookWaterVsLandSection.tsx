export default function FactbookWaterVsLandSection() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-10 space-y-6">
      <h2 className="text-2xl font-bold text-[var(--text-primary)]">Water vs. Land Area Comparison</h2>
      <p className="text-[var(--text-muted)] leading-relaxed">
        While most countries in the CIA Factbook have a significantly larger land area than water area,
        a few rare outliers exist where the <strong className="text-[var(--foreground)]">water area exceeds the land area</strong>.
        These countries typically include island nations, territories with vast inland water bodies, or unusual geographical boundaries.
      </p>
      <div className="bg-[var(--surface-2)] border-l-4 border-[#818cf8] px-4 py-3 rounded-r-lg text-sm text-[var(--text-muted)]">
        Countries with more water than land can indicate <strong className="text-[var(--foreground)]">important maritime zones</strong>,
        <strong className="text-[var(--foreground)]"> coastal economic reliance</strong>, or <strong className="text-[var(--foreground)]">rich freshwater ecosystems</strong>.
      </div>
      <div className="pt-6">
        <img src="/projects/cia-factbook/03_water_vs_land_query_output.png" alt="Countries with more water than land" className="rounded-lg border border-[var(--border)]" width={1200} height={700} />
      </div>
    </section>
  );
}
