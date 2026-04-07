'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLang } from '@/context/LanguageContext';

export default function PDFChatbotPage() {
  const { t } = useLang();

  return (
    <main className="min-h-screen bg-white text-gray-900 p-8">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* Header */}
        <section>
          <h1 className="text-4xl font-bold mb-2">{t('chatbot.h1')}</h1>
          <p className="text-sm text-gray-500">{t('chatbot.byline')}</p>
          <p className="mt-4 text-lg text-gray-700">{t('chatbot.intro.lead')}</p>
        </section>

        <Image
          src="/images/pdf-context-chatbot.png"
          alt="PDF Context Chatbot Banner"
          width={1200}
          height={600}
          className="rounded-xl"
        />

        {/* Introduction */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('chatbot.intro.h2')}</h2>
          <p className="text-gray-700">{t('chatbot.intro.p')}</p>
        </section>

        {/* Problem Statement */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('chatbot.problem.h2')}</h2>
          <p className="text-gray-700 mb-4">{t('chatbot.problem.p')}</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>{t('chatbot.problem.li1')}</li>
            <li>{t('chatbot.problem.li2')}</li>
            <li>{t('chatbot.problem.li3')}</li>
            <li>{t('chatbot.problem.li4')}</li>
          </ul>
        </section>

        {/* Technologies */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('chatbot.tech.h2')}</h2>
          <table className="w-full text-sm border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border">{t('chatbot.tech.layer')}</th>
                <th className="p-2 border">{t('chatbot.tech.tech')}</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-2 border">UI</td><td className="p-2 border">Power Apps (Canvas App)</td></tr>
              <tr><td className="p-2 border">Automation</td><td className="p-2 border">Power Automate</td></tr>
              <tr><td className="p-2 border">Backend</td><td className="p-2 border">Python Flask + Sentence Transformers</td></tr>
              <tr><td className="p-2 border">Embedding Model</td><td className="p-2 border">all-mpnet-base-v2</td></tr>
              <tr><td className="p-2 border">PDF Parsing</td><td className="p-2 border">PyPDF2</td></tr>
              <tr><td className="p-2 border">Hosting</td><td className="p-2 border">Ngrok (Dev)</td></tr>
              <tr><td className="p-2 border">Memory Logs</td><td className="p-2 border">psutil</td></tr>
            </tbody>
          </table>
        </section>

        {/* Architecture */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('chatbot.arch.h2')}</h2>
          <Image
            src="/projects/pdf-context-chatbot/architecture_diagram.png"
            alt="Architecture Diagram"
            width={1200}
            height={700}
            className="rounded shadow mb-6"
          />
          <p className="text-gray-700">{t('chatbot.arch.p')}</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
            <li><strong>Power Apps:</strong> {t('chatbot.arch.li1')}</li>
            <li><strong>Power Automate:</strong> {t('chatbot.arch.li2')}</li>
            <li><strong>Flask API:</strong> {t('chatbot.arch.li3')}</li>
            <li><strong>AI Builder:</strong> {t('chatbot.arch.li4')}</li>
            <li><strong>Power Apps:</strong> {t('chatbot.arch.li5')}</li>
          </ul>
          <p className="text-gray-700 mt-4">{t('chatbot.arch.p2')}</p>
        </section>

        {/* Power Apps Screenshot */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('chatbot.powerapps.h2')}</h2>
          <Image
            src="/projects/pdf-context-chatbot/powerapps_ui.png"
            alt="Power Apps UI"
            width={1200}
            height={700}
            className="rounded shadow"
          />
        </section>

        {/* Power Automate */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('chatbot.automate.h2')}</h2>
          <p className="text-gray-700">{t('chatbot.automate.p')}</p>

          <div className="space-y-6 mt-6 text-gray-700">
            <h3 className="text-lg font-semibold">{t('chatbot.automate.h3')}</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li><strong>Trigger:</strong> {t('chatbot.automate.step1')}</li>
              <li><strong>Step 1:</strong> {t('chatbot.automate.step2')}</li>
              <li><strong>Step 2:</strong> {t('chatbot.automate.step3')}</li>
              <li><strong>Step 3:</strong> {t('chatbot.automate.step4')}</li>
              <li><strong>Step 4:</strong> {t('chatbot.automate.step5')}</li>
            </ol>

            <div className="bg-blue-50 text-blue-800 px-4 py-3 rounded-md border-l-4 border-blue-500 shadow mt-6">
              📌 Summary of Flow:<br />
              <code>
                [User Question] → [Power Automate Triggered] → [HTTP → Flask API] → [Reduced Context] → [AI Prompt] → [Answer Returned]
              </code>
            </div>
          </div>

          <Image
            src="/projects/pdf-context-chatbot/powerautomate_flow.png"
            alt="Power Automate Flow"
            width={1200}
            height={700}
            className="rounded shadow mt-6"
          />
        </section>

        {/* Sample Prompt */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('chatbot.sample.h2')}</h2>
          <p className="text-gray-700 mb-4">{t('chatbot.sample.p')}</p>

          <div className="space-y-6 text-gray-700">
            <h3 className="text-lg font-semibold">{t('chatbot.sample.qh')}</h3>
            <div className="bg-gray-100 p-4 rounded shadow">
              {t('chatbot.sample.q')}
            </div>

            <h3 className="text-lg font-semibold">{t('chatbot.sample.rch')}</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Power BI can connect directly to SharePoint Online lists using the SharePoint Online List connector.</li>
              <li>When prompted, users must enter the site URL and then select the list to connect.</li>
              <li>SharePoint data is imported as a structured table that can be shaped using Power Query.</li>
              <li>For scheduled refresh, the dataset must be published to Power BI Service.</li>
              <li>A gateway is not required if the data source is cloud-based, such as SharePoint Online.</li>
              <li>In the Power BI Service, users can configure refresh frequency under the dataset settings.</li>
              <li>You can set up daily or hourly refresh schedules depending on your license tier (Pro or Premium).</li>
              <li>Authentication is typically handled via OAuth2 and requires access permission to the SharePoint site.</li>
              <li>Errors during refresh can be traced in the refresh history panel of the dataset.</li>
              <li>It is important to avoid columns with complex field types like lookup or person fields as they may not load cleanly.</li>
            </ul>

            <h3 className="text-lg font-semibold">{t('chatbot.sample.aih')}</h3>
            <div className="bg-green-50 border-l-4 border-green-500 text-green-900 p-4 rounded shadow">
              To connect Power BI to SharePoint, use the SharePoint Online List connector and provide the site URL and list name.
              After shaping the data with Power Query, publish the report to Power BI Service. Then, configure automatic refresh
              under dataset settings — no gateway is needed for SharePoint Online. Make sure your authentication is set up
              correctly and avoid using unsupported SharePoint columns.
            </div>

            <h3 className="text-lg font-semibold">{t('chatbot.sample.prompth')}</h3>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
{`Use the following context to answer the user's question.
Context:
[Top 5–10 relevant sentences extracted from PDFs]

Question:
[User input]`}
            </pre>
          </div>
        </section>

        {/* GitHub Link */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('chatbot.repo.h2')}</h2>
          <p className="text-gray-700 mb-4">{t('chatbot.repo.p')}</p>
          <a
            href="https://github.com/sudarshanAw/knowledge-book-API"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition"
          >
            {t('chatbot.repo.btn')}
          </a>
        </section>

        {/* Conclusion */}
        <section className="pt-12">
          <h2 className="text-2xl font-semibold mb-4">{t('chatbot.conclusion.h2')}</h2>
          <p className="text-gray-700">{t('chatbot.conclusion.p')}</p>
        </section>

        {/* Back to Home */}
        <section className="pt-12">
          <Link href="/" className="text-blue-600 hover:underline text-sm">
            {t('nav.backHome')}
          </Link>
        </section>
      </div>
    </main>
  );
}
