'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useLang } from '@/context/LanguageContext';
import SectionHeading from '@/components/SectionHeading';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};
const fadeItem = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function HomePage() {
  const { t } = useLang();

  const skills = [
    'Power Apps', 'Power Automate', 'Power BI', 'SharePoint Online',
    'PCF Components', 'React', 'Next.js', 'TypeScript',
    'JavaScript', 'FluentUI', 'Tailwind CSS', 'Python',
    'SQL Server', 'REST APIs', 'Office Scripts', 'Git',
    'Flutter', 'Dart', 'Data Modeling', 'AI / LLMs',
  ];

  const certifications = [
    { src: '/certifications/pl200.png', alt: 'Microsoft PL‑200', href: 'https://learn.microsoft.com/api/credentials/share/en-us/SudarshanAwasthi-9727/F415A9CD9614482C?sharingId=481F97FC893BF4E7', label: 'PL-200' },
    { src: '/certifications/pl300.png', alt: 'Microsoft PL‑300', href: 'https://learn.microsoft.com/api/credentials/share/en-us/SudarshanAwasthi-9727/951BA41F633465D4?sharingId=481F97FC893BF4E7', label: 'PL-300' },
    { src: '/certifications/pl900.png', alt: 'Microsoft PL‑900', href: 'https://learn.microsoft.com/api/credentials/share/en-us/SudarshanAwasthi-9727/8FD615F875CFFAE?sharingId=481F97FC893BF4E7', label: 'PL-900' },
    { src: '/certifications/az900.png', alt: 'Microsoft AZ‑900', href: 'https://learn.microsoft.com/api/credentials/share/en-us/SudarshanAwasthi-9727/C971E11739F19E6C?sharingId=481F97FC893BF4E7', label: 'AZ-900' },
    { src: '/certifications/psm1.png', alt: 'PSM I', href: 'https://www.credly.com/badges/562b9924-a98b-4c91-af6f-7c5956497c82', label: 'PSM I' },
  ];

  const projects = [
    { title: t('project.chatbot.title'), desc: t('project.chatbot.desc'), image: '/images/pdf-context-chatbot.png', href: '/projects/pdf-context-chatbot', tags: ['Flask', 'Power Platform', 'AI'] },
    { title: t('project.sales.title'), desc: t('project.sales.desc'), image: '/images/sales-report.png', href: '/projects/sales-report', tags: ['Power BI', 'SQL', 'DAX'] },
    { title: t('project.fifa.title'), desc: t('project.fifa.desc'), image: '/images/fifa.png', href: '/projects/fifa', tags: ['Python', 'Streamlit', 'Plotly'] },
    { title: t('project.cia.title'), desc: t('project.cia.desc'), image: '/images/cia.png', href: '/projects/cia-factbook', tags: ['SQL', 'Jupyter', 'Analysis'] },
  ];

  return (
    <main className="min-h-screen">
      {/* ── Hero Section ─────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#38bdf8]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#818cf8]/10 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <div className="relative w-32 h-32 mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-br from-[#38bdf8] to-[#818cf8] rounded-full blur-sm opacity-60" />
              <Image
                src="/me.jpg"
                alt="Sudarshan Awasthi"
                width={128}
                height={128}
                className="relative rounded-full object-cover w-32 h-32 border-2 border-[#0b0f1a]"
                priority
              />
            </div>
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-[#94a3b8] text-lg mb-3"
          >
            {t('home.greeting')}
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 gradient-text"
          >
            {t('home.name')}
          </motion.h1>

          {/* Role */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xl sm:text-2xl text-[#94a3b8] font-medium mb-6"
          >
            {t('home.role')}
          </motion.p>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-[#64748b] max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {t('home.subtitle')}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-wrap gap-4 justify-center mb-10"
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#38bdf8] to-[#818cf8] text-white font-semibold text-sm hover:shadow-lg hover:shadow-[#38bdf8]/20 transition-all hover:-translate-y-0.5"
            >
              {t('home.cta.projects')}
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-[#1e293b] text-[#94a3b8] font-semibold text-sm hover:border-[#38bdf8]/40 hover:text-white transition-all hover:-translate-y-0.5"
            >
              {t('home.cta.contact')}
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex gap-5 justify-center"
          >
            <a href="https://github.com/sudarshanAw" target="_blank" rel="noopener noreferrer" className="text-[#64748b] hover:text-white transition-colors" aria-label="GitHub">
              <FaGithub className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/sudarshan-awasthi/" target="_blank" rel="noopener noreferrer" className="text-[#64748b] hover:text-[#38bdf8] transition-colors" aria-label="LinkedIn">
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a href="mailto:sudarshanawasthi47@gmail.com" className="text-[#64748b] hover:text-[#818cf8] transition-colors" aria-label="Email">
              <FaEnvelope className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-5 h-8 rounded-full border-2 border-[#1e293b] flex justify-center pt-1.5">
            <motion.div
              className="w-1 h-2 rounded-full bg-[#38bdf8]"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </section>

      {/* ── Content ─────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6 py-24 space-y-32">

        {/* About */}
        <section>
          <SectionHeading id="about">{t('home.about')}</SectionHeading>
          <motion.div
            className="grid md:grid-cols-[1fr_2fr] gap-8 items-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <div className="glow-card p-6">
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#64748b]">Location</span>
                  <span className="text-[#e2e8f0]">Mülheim an der Ruhr, DE</span>
                </div>
                <div className="h-px bg-[#1e293b]" />
                <div className="flex justify-between">
                  <span className="text-[#64748b]">Focus</span>
                  <span className="text-[#e2e8f0]">Microsoft Ecosystem</span>
                </div>
                <div className="h-px bg-[#1e293b]" />
                <div className="flex justify-between">
                  <span className="text-[#64748b]">Languages</span>
                  <span className="text-[#e2e8f0]">EN, DE, HI, JP</span>
                </div>
              </div>
            </div>
            <p className="text-[#94a3b8] leading-relaxed text-lg">
              {t('home.aboutText')}
            </p>
          </motion.div>
        </section>

        {/* Skills */}
        <section>
          <SectionHeading id="skills">{t('home.skills')}</SectionHeading>
          <motion.div
            className="flex flex-wrap gap-3"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            {skills.map((skill) => (
              <motion.span key={skill} variants={fadeItem} className="skill-badge">
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </section>

        {/* Certifications */}
        <section>
          <SectionHeading id="certifications">{t('home.certifications')}</SectionHeading>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            {certifications.map((cert) => (
              <motion.a
                key={cert.src}
                href={cert.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeItem}
                className="glow-card p-4 flex flex-col items-center gap-3 text-center group"
              >
                <div className="relative">
                  <Image src={cert.src} alt={cert.alt} width={80} height={80} className="relative z-10" />
                </div>
                <span className="text-xs text-[#64748b] font-medium group-hover:text-[#38bdf8] transition-colors">
                  {cert.label}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </section>

        {/* Projects */}
        <section>
          <SectionHeading id="projects">{t('home.projects')}</SectionHeading>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <motion.a
                key={project.href}
                href={project.href}
                className="glow-card group block"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={700}
                    height={400}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent opacity-80" />
                </div>
                <div className="relative z-10 p-5 space-y-3">
                  <h3 className="text-lg font-semibold text-white group-hover:text-[#38bdf8] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#64748b] leading-relaxed line-clamp-2">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2.5 py-0.5 rounded-full bg-[#1e293b] text-[#94a3b8] border border-[#1e293b]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section>
          <SectionHeading id="contact">{t('home.contact')}</SectionHeading>
          <motion.div
            className="glow-card p-8 sm:p-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[#94a3b8] text-lg mb-8">{t('home.contactText')}</p>
            <a
              href="mailto:sudarshanawasthi47@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-[#38bdf8] to-[#818cf8] text-white font-semibold text-sm hover:shadow-lg hover:shadow-[#38bdf8]/20 transition-all hover:-translate-y-0.5"
            >
              <FaEnvelope className="w-4 h-4" />
              {t('home.contactBtn')}
            </a>
          </motion.div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-[#1e293b] py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#64748b]">
          <p>{t('home.footer')}</p>
          <div className="flex gap-5">
            <a href="https://github.com/sudarshanAw" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="GitHub">
              <FaGithub className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/in/sudarshan-awasthi/" target="_blank" rel="noopener noreferrer" className="hover:text-[#38bdf8] transition-colors" aria-label="LinkedIn">
              <FaLinkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
