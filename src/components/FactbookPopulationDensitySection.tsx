import Image from 'next/image';

export default function FactbookPopulationDensitySection() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-10 space-y-6">
      <h2 className="text-2xl font-bold text-white">Population Density</h2>
      <p className="text-[#94a3b8] leading-relaxed">
        Population density measures how many people live per square kilometer of land.
        It is calculated by dividing a country&apos;s population by its total area.
      </p>
      <p className="text-[#94a3b8] leading-relaxed">
        Countries with very high population densities tend to be small, highly urbanized, or both.
        This includes places like <strong className="text-[#e2e8f0]">Macau</strong>, <strong className="text-[#e2e8f0]">Monaco</strong>, and <strong className="text-[#e2e8f0]">Singapore</strong>.
      </p>
      <div className="bg-[#111827] border-l-4 border-[#22c55e] px-4 py-3 rounded-r-lg text-sm text-[#94a3b8]">
        <strong className="text-[#e2e8f0]">Macau</strong> tops the list with over <strong className="text-[#e2e8f0]">21,000 people per km²</strong> — highlighting an extremely concentrated urban population.
      </div>
      <div className="pt-6">
        <Image src="/projects/cia-factbook/05_population_density_combined.png" alt="Population density" className="rounded-lg border border-[#1e293b]" width={1200} height={700} />
      </div>
    </section>
  );
}
