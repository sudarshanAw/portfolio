'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function PDFChatbotPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-8">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* Header */}
        <section>
          <h1 className="text-4xl font-bold mb-2">
            AI-Powered PDF Context Chatbot Using Flask &amp; Power Platform
          </h1>
          <p className="text-sm text-gray-500">By Sudarshan Awasthi • 2025</p>
          <p className="mt-4 text-lg text-gray-700">
            An intelligent chatbot that semantically reads PDFs and answers natural language questions using embeddings, Flask API, and Power Apps UI.
          </p>
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
          <h2 className="text-2xl font-semibold mb-4">📖 Introduction</h2>
          <p className="text-gray-700">
            In today&apos;s information-heavy environments, finding specific content inside large collections of PDFs is frustrating. This project solves that problem by enabling a chatbot to semantically understand and answer user queries — not just with keyword search, but true contextual understanding.
          </p>
        </section>

        {/* Problem Statement */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">🎯 Problem Statement</h2>
          <p className="text-gray-700 mb-4">
            Traditional search fails when the exact wording is unknown or information is scattered across documents. This solution enables:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Natural language question input</li>
            <li>Contextual understanding of PDF content using semantic embeddings</li>
            <li>AI-generated answers</li>
            <li>Seamless low-code UI with Power Platform</li>
          </ul>
        </section>

        {/* Technologies */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">🛠️ Technologies Used</h2>
          <table className="w-full text-sm border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border">Layer</th>
                <th className="p-2 border">Technology</th>
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

        {/* Architecture Diagram */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">🧭 Architecture Overview</h2>
          <Image
            src="/projects/pdf-context-chatbot/architecture_diagram.png"
            alt="Architecture Diagram"
            width={1200}
            height={700}
            className="rounded shadow mb-6"
          />
          <p className="text-gray-700">
            The system combines Power Apps → Power Automate → Flask → Sentence Embeddings → AI Reasoning and flows the answer back to Power Apps dynamically.
          </p>
        </section>

        {/* Power Apps Screenshot */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">💬 Power Apps Chat UI</h2>
          <Image
            src="/projects/pdf-context-chatbot/powerapps_ui.png"
            alt="Power Apps UI"
            width={1200}
            height={700}
            className="rounded shadow"
          />
        </section>

        {/* Power Automate Explanation */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">🔄 Power Automate – Orchestrating the Flow</h2>
          <p className="text-gray-700">
            Power Automate plays a crucial role in connecting the user interface built in Power Apps with the backend AI system powered by Flask and Python. It acts as the middleware that sends and receives data, triggers the AI logic, and ensures that user queries are processed intelligently and efficiently.
          </p>

          <div className="space-y-6 mt-6 text-gray-700">
            <h3 className="text-lg font-semibold">📌 What Happens in Power Automate?</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li><strong>Trigger:</strong> Captures the question from Power Apps via &quot;When a Power Apps button is clicked&quot;.</li>
              <li><strong>Step 1:</strong> Sends HTTP POST to the Flask API hosted on Ngrok.</li>
              <li><strong>Step 2:</strong> Receives reduced context (top matching sentences) from PDFs.</li>
              <li><strong>Step 3:</strong> Sends both context and question into the AI Builder &quot;Run a prompt&quot; action.</li>
              <li><strong>Step 4:</strong> Returns the AI-generated answer back to Power Apps and updates the UI.</li>
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

        {/* AI Prompt Sample */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">🧪 Sample Prompt Execution – Power BI Example</h2>

          <p className="text-gray-700 mb-4">
            Here&apos;s a real-world example that demonstrates how the chatbot processes a Power Platform question using embedded content from Power BI documentation:
          </p>

          <div className="space-y-6 text-gray-700">
            <h3 className="text-lg font-semibold">🧾 Question:</h3>
            <div className="bg-gray-100 p-4 rounded shadow">
              &quot;How do I connect Power BI to SharePoint and refresh the data automatically?&quot;
            </div>

            <h3 className="text-lg font-semibold">🔍 Reduced Context:</h3>
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

            <h3 className="text-lg font-semibold">🧠 Final AI Answer:</h3>
            <div className="bg-green-50 border-l-4 border-green-500 text-green-900 p-4 rounded shadow">
              To connect Power BI to SharePoint, use the SharePoint Online List connector and provide the site URL and list name.
              After shaping the data with Power Query, publish the report to Power BI Service. Then, configure automatic refresh
              under dataset settings — no gateway is needed for SharePoint Online. Make sure your authentication is set up
              correctly and avoid using unsupported SharePoint columns.
            </div>

            <h3 className="text-lg font-semibold">📄 AI Builder Prompt Format:</h3>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
{`Use the following context to answer the user&apos;s question.
Context:
[Top 5–10 relevant sentences extracted from PDFs]

Question:
[User input]`}
            </pre>
          </div>
        </section>

        {/* GitHub Link */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">🔗 Code Repository</h2>
          <p className="text-gray-700 mb-4">
            Explore the backend Flask code and setup instructions here:
          </p>
          <a
            href="https://github.com/sudarshanAw/knowledge-book-API"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition"
          >
            View on GitHub
          </a>
        </section>

        {/* Conclusion */}
        <section className="pt-12">
          <h2 className="text-2xl font-semibold mb-4">✅ Conclusion</h2>
          <p className="text-gray-700">
            This chatbot showcases the power of combining AI, semantic search, and low-code platforms to solve real-world document analysis challenges. It&apos;s a production-ready, extensible solution for knowledge retrieval.
          </p>
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
