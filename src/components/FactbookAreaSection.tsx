export default function FactbookAreaSection() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-10 space-y-6">
      <h2 className="text-2xl font-bold text-white">Area Analysis</h2>
      <p className="text-[#94a3b8] leading-relaxed">
        The average total area of a country in the CIA Factbook dataset is approximately
        <strong className="text-[#e2e8f0]"> 555,093.55 square kilometers</strong>. This helps us understand which countries stand out in terms of geographic size.
      </p>
      <p className="text-[#94a3b8] leading-relaxed">
        Countries such as <strong className="text-[#e2e8f0]">Russia</strong>, <strong className="text-[#e2e8f0]">Canada</strong>, and <strong className="text-[#e2e8f0]">United States</strong> significantly exceed this average and dominate in terms of physical landmass.
      </p>
      <div className="bg-[#111827] border-l-4 border-[#38bdf8] px-4 py-3 rounded-r-lg text-sm text-[#94a3b8]">
        The top three countries by area are: <strong className="text-[#e2e8f0]">Russia</strong>, <strong className="text-[#e2e8f0]">Canada</strong>, and <strong className="text-[#e2e8f0]">United States</strong>.
      </div>
      <div className="grid md:grid-cols-2 gap-6 pt-6">
        <img src="/projects/cia-factbook/02_area_avg_query.png" alt="SQL query showing average country area" className="rounded-lg border border-[#1e293b]" width={1200} height={700} />
        <img src="/projects/cia-factbook/02_area_above_avg_output.png" alt="Countries with area above average" className="rounded-lg border border-[#1e293b]" width={1200} height={700} />
      </div>
    </section>
  );
}
