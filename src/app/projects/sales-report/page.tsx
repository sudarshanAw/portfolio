import Image from "next/image";
import Link from "next/link";

export default function SalesReportPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-8">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Header */}
        <section>
          <h1 className="text-4xl font-bold mb-2">
            Sales Insight Dashboard: Turning Data Into Action
          </h1>
          <p className="text-sm text-gray-500">By Sudarshan Awasthi • November 27, 2022</p>
          <p className="mt-4 text-lg text-gray-700">
            A business-driven Power BI solution to help Sales, Product, and Customer teams make smarter decisions using real-time insights.
          </p>

          {/* Jump to Preview Button */}
          <div className="mt-4">
            <a
              href="#preview"
              className="inline-block px-4 py-2 text-sm font-medium border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition"
            >
              ↓ Jump to Interactive Preview
            </a>
          </div>
        </section>

        {/* Highlights */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Project at a Glance</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5].map((n) => (
              <Image
                key={n}
                src={`/projects/sales-report/highlights${n}.png`}
                alt={`Highlight ${n}`}
                width={600}
                height={400}
                className="rounded"
              />
            ))}
          </div>
        </section>

        {/* Business Requirements */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Understanding the Business Need</h2>
          <p className="mb-4 text-gray-700">
            I collaborated with key stakeholders to gather insights into what information would drive impact. This helped define KPIs and visual structure.
          </p>
          <table className="w-full text-sm border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border">Stakeholder</th>
                <th className="p-2 border">Request</th>
                <th className="p-2 border">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-2 border">Sales Manager</td><td className="p-2 border">Overview of sales</td><td className="p-2 border">Track performance, top products</td></tr>
              <tr><td className="p-2 border">Customer Team</td><td className="p-2 border">Customer-wise breakdown</td><td className="p-2 border">Personalized targeting</td></tr>
              <tr><td className="p-2 border">Product Manager</td><td className="p-2 border">Subcategory trends</td><td className="p-2 border">Optimize inventory</td></tr>
            </tbody>
          </table>
        </section>

        {/* Data Extraction */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Data Collection & Preparation</h2>
          <p className="mb-6 text-gray-700">
            Using SQL Server, I wrote custom queries to pull relevant data, and cleaned it using Power Query. Key dimensions included Customers, Products, and Dates.
          </p>
          <Image src="/projects/sales-report/sql_customers.png" alt="Customers SQL" width={800} height={500} className="rounded mb-6" />
          <Image src="/projects/sales-report/sql_product.png" alt="Products SQL" width={800} height={500} className="rounded mb-6" />
          <Image src="/projects/sales-report/sql_date.png" alt="Date SQL" width={800} height={500} className="rounded" />
        </section>

        {/* Data Model */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Data Model Design</h2>
          <p className="mb-6 text-gray-700">
            I built a star schema with Sales as the fact table and Date, Customer, Product as dimension tables. Relationships were configured using primary/foreign keys.
          </p>
          <Image src="/projects/sales-report/data-model.png" alt="Data Model" width={1000} height={600} className="rounded" />
        </section>

        {/* Dashboards */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Final Dashboards & Key Insights</h2>

          <div className="mb-10">
            <h3 className="text-xl font-medium mb-2">📈 Sales Dashboard</h3>
            <p className="mb-4 text-gray-700">
              Sales exceeded the target by 126.6%. North America led performance. Insights by category and time helped identify seasonality and key contributors.
            </p>
            <Image src="/projects/sales-report/sales-dashboard.png" alt="Sales Dashboard" width={1000} height={600} className="rounded" />
          </div>

          <div className="mb-10">
            <h3 className="text-xl font-medium mb-2">👥 Customer Dashboard</h3>
            <p className="mb-4 text-gray-700">
              Repeat buyers and specific demographics contributed heavily to sales. Gender and marital filters uncovered unique patterns in customer behavior.
            </p>
            <Image src="/projects/sales-report/customer-dashboard.png" alt="Customer Dashboard" width={1000} height={600} className="rounded" />
          </div>

          <div>
            <h3 className="text-xl font-medium mb-2">📦 Product Dashboard</h3>
            <p className="mb-4 text-gray-700">
              Only a few subcategories made up most of the sales. Visuals helped identify underperforming items to review for promotion or removal.
            </p>
            <Image src="/projects/sales-report/product-dashboard.png" alt="Product Dashboard" width={1000} height={600} className="rounded" />
          </div>
        </section>

        {/* Interactive Preview */}
        <section id="preview">
          <h2 className="text-2xl font-semibold mb-4">Interactive Preview</h2>
          <div className="w-full aspect-video rounded overflow-hidden border mb-4">
            <iframe
              src="https://app.powerbi.com/view?r=eyJrIjoiNDQyMDllY2QtNzg3ZC00MzdiLWFlYjktOGZiZjlmZjc0Yjg1IiwidCI6Ijg1NGI2MzM2LWRlNjctNDdlNy05NDhmLTUyODZkM2VlY2E0ZSJ9&pageName=ReportSection"
              width="100%"
              height="100%"
              allowFullScreen
            ></iframe>
          </div>

          <a
            href="https://app.powerbi.com/view?r=eyJrIjoiNDQyMDllY2QtNzg3ZC00MzdiLWFlYjktOGZiZjlmZjc0Yjg1IiwidCI6Ijg1NGI2MzM2LWRlNjctNDdlNy05NDhmLTUyODZkM2VlY2E0ZSJ9&pageName=ReportSection"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition"
          >
            🔗 View Full Dashboard on Power BI
          </a>
        </section>

        {/* Back to Home */}
        <section className="pt-12">
          <Link href="/" className="text-blue-600 hover:underline text-sm">
            ← Back to Home
          </Link>
        </section>
      </div>
    </main>
  );
}
