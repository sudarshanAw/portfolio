export default function FactbookWaterVsLandSection() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-10 space-y-6">
      <h2 className="text-2xl font-bold text-white">Water vs. Land Area Comparison</h2>
      <p className="text-[#94a3b8] leading-relaxed">
        While most countries in the CIA Factbook have a significantly larger land area than water area,
        a few rare outliers exist where the <strong className="text-[#e2e8f0]">water area exceeds the land area</strong>.
        These countries typically include island nations, territories with vast inland water bodies, or unusual geographical boundaries.
      </p>
      <div className="bg-[#111827] border-l-4 border-[#818cf8] px-4 py-3 rounded-r-lg text-sm text-[#94a3b8]">
        Countries with more water than land can indicate <strong className="text-[#e2e8f0]">important maritime zones</strong>,
        <strong className="text-[#e2e8f0]"> coastal economic reliance</strong>, or <strong className="text-[#e2e8f0]">rich freshwater ecosystems</strong>.
      </div>
      <div className="pt-6">
        <img src="/projects/cia-factbook/03_water_vs_land_query_output.png" alt="Countries with more water than land" className="rounded-lg border border-[#1e293b]" width={1200} height={700} />
      </div>
    </section>
  );
}
