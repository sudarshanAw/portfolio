import Image from 'next/image';

export default function FactbookPopulationDensitySection() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-10 space-y-6">
      <h2 className="text-2xl font-bold text-[var(--text-primary)]">Population Density</h2>
      <p className="text-[var(--text-muted)] leading-relaxed">
        Population density measures how many people live per square kilometer of land.
        It is calculated by dividing a country&apos;s population by its total area.
      </p>
      <p className="text-[var(--text-muted)] leading-relaxed">
        Countries with very high population densities tend to be small, highly urbanized, or both.
        This includes places like <strong className="text-[var(--foreground)]">Macau</strong>, <strong className="text-[var(--foreground)]">Monaco</strong>, and <strong className="text-[var(--foreground)]">Singapore</strong>.
      </p>
      <div className="bg-[var(--surface-2)] border-l-4 border-[#22c55e] px-4 py-3 rounded-r-lg text-sm text-[var(--text-muted)]">
        <strong className="text-[var(--foreground)]">Macau</strong> tops the list with over <strong className="text-[var(--foreground)]">21,000 people per km²</strong> — highlighting an extremely concentrated urban population.
      </div>
      <div className="pt-6">
        <Image src="/projects/cia-factbook/05_population_density_combined.png" alt="Population density" className="rounded-lg border border-[var(--border)]" width={1200} height={700} />
      </div>
    </section>
  );
}
