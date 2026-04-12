export default function FactbookBirthVsDeathSection() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-10 space-y-6">
      <h2 className="text-2xl font-bold text-[var(--text-primary)]">Birth Rate vs. Death Rate</h2>
      <p className="text-[var(--text-muted)] leading-relaxed">
        A country where the <strong className="text-[var(--foreground)]">death rate exceeds the birth rate</strong> may experience long-term demographic challenges.
        These can include population decline, economic stagnation, labor shortages, and increased strain on healthcare and social systems.
      </p>
      <p className="text-[var(--text-muted)] leading-relaxed">
        The dataset highlights countries like <strong className="text-[var(--foreground)]">Ukraine</strong>, <strong className="text-[var(--foreground)]">Bulgaria</strong>, and <strong className="text-[var(--foreground)]">Latvia</strong> where this imbalance is most pronounced.
      </p>
      <div className="bg-[var(--surface-2)] border-l-4 border-[#f59e0b] px-4 py-3 rounded-r-lg text-sm text-[var(--text-muted)]">
        Negative population growth can lead to social and economic stress unless mitigated by policies like immigration or increased fertility support.
      </div>
      <div className="pt-6">
        <img src="/projects/cia-factbook/04_death_vs_birth_combined.png" alt="Countries with higher death rate than birth rate" className="rounded-lg border border-[var(--border)]" width={1200} height={700} />
      </div>
    </section>
  );
}
