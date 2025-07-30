'use client';

import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function HomePage() {
  const certifications = [
    {
      src: "/certifications/pl400.png",
      alt: "Microsoft PL‑400 (Power Platform Developer)",
      href: "https://learn.microsoft.com/api/credentials/share/en-us/SudarshanAwasthi-9727/F415A9CD9614482C?sharingId=481F97FC893BF4E7"
    },
    {
      src: "/certifications/pl300.png",
      alt: "Microsoft PL‑300 (Power BI Data Analyst)",
      href: "https://learn.microsoft.com/api/credentials/share/en-us/SudarshanAwasthi-9727/951BA41F633465D4?sharingId=481F97FC893BF4E7"
    },
    {
      src: "/certifications/pl900.png",
      alt: "Microsoft PL‑900 (Power Platform Fundamentals)",
      href: "https://learn.microsoft.com/api/credentials/share/en-us/SudarshanAwasthi-9727/8FD615F875CFFAE?sharingId=481F97FC893BF4E7"
    },
    {
      src: "/certifications/az900.png",
      alt: "Microsoft AZ‑900 (Azure Fundamentals)",
      href: "https://learn.microsoft.com/api/credentials/share/en-us/SudarshanAwasthi-9727/C971E11739F19E6C?sharingId=481F97FC893BF4E7"
    },
    {
      src: "/certifications/psm1.png",
      alt: "Professional Scrum Master™ I (PSM I)",
      href: "https://www.credly.com/badges/562b9924-a98b-4c91-af6f-7c5956497c82"
    },
  ];

  const projects = [
    {
  title: "AI-Powered PDF Context Chatbot",
  description: "A semantic chatbot that extracts answers from PDFs using Flask, Sentence Transformers, and Power Platform.",
  image: "/images/pdf-context-chatbot.png",
  href: "/projects/pdf-context-chatbot"
  },
  {
    title: "Sales Report",
    description: "A Power BI dashboard to analyze sales trends and regional performance.",
    image: "/images/sales-report.png",
    href: "/projects/sales-report"    
  },
  {
    title: "FIFA World Cup Analysis",
    description: "Interactive Streamlit app to explore FIFA World Cup stats.",
    image: "/images/fifa.png",
    href: "/projects/fifa"
  },
  {
    title: "CIA Factbook Analysis",
    description: "Exploratory data analysis of global facts using SQLite.",
    image: "/images/cia.png",
    href: "/projects/cia-factbook"
  }
];

  return (
    <main className="min-h-screen bg-white text-gray-900 p-8 flex flex-col items-center">
      {/* Profile Section */}
      <section className="text-center mb-6">
        <Image
          src="/me.jpg"
          alt="Profile picture of Sudarshan"
          width={320}
          height={320}
          className="rounded-2xl mx-auto"
        />
        <h1 className="text-4xl font-bold mb-2">{`👋 Hello, I'm Sudarshan Awasthi`}</h1>
        <p className="text-lg text-gray-700 max-w-xl mx-auto">
  {`Power Platform Consultant & Data Analyst passionate about solving real-world problems through modern tech.`}
</p>

        {/* Social Buttons */}
        <div className="flex gap-4 justify-center mt-6">
          <a
            href="https://github.com/sudarshanAw"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
          >
            <FaGithub className="w-5 h-5" />
            <span className="text-sm font-medium">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/sudarshan-awasthi/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-blue-500 text-blue-700 rounded-lg hover:bg-blue-50 transition"
          >
            <FaLinkedin className="w-5 h-5" />
            <span className="text-sm font-medium">LinkedIn</span>
          </a>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="w-full max-w-5xl mt-8 mb-8">
        <h2 className="text-2xl font-semibold text-center mb-4">Certifications</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 place-items-center">
          {certifications.map((cert) => (
            <a
              key={cert.src}
              href={cert.href}
              target="_blank"
              rel="noopener noreferrer"
              title={`View: ${cert.alt}`}
              className="p-2 bg-gray-100 rounded-lg hover:shadow-lg transition transform hover:scale-105"
            >
              <Image
                src={cert.src}
                alt={cert.alt}
                width={100}
                height={100}
              />
            </a>
          ))}
        </div>
      </section>

      {/* Projects Section */}
<section className="w-full max-w-5xl mb-16">
  <h2 className="text-2xl font-semibold text-center mb-6">Projects</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {projects.map((project) => (
      <a
        key={project.title}
        href={project.href}
        className="block bg-white border border-gray-200 rounded-lg overflow-hidden shadow hover:shadow-lg transition transform hover:scale-105"
      >
        <Image
          src={project.image}
          alt={project.title}
          width={600}
          height={350}
          className="w-full h-40 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
          <p className="text-sm text-gray-600">{project.description}</p>
        </div>
      </a>
    ))}
  </div>
</section>


    </main>

    
  );
}

