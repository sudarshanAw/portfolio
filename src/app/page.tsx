'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useLang } from '@/context/LanguageContext';
import SectionHeading from '@/components/SectionHeading';
import ParticleNetwork from '@/components/ParticleNetwork';
import TypeWriter from '@/components/TypeWriter';
import AnimatedCounter from '@/components/AnimatedCounter';
import SkillCategory from '@/components/SkillCategory';
import TerminalCard from '@/components/TerminalCard';

export default function HomePage() {
  const { t, lang } = useLang();

  const roles = lang === 'de'
    ? ['Power Platform Berater', 'Full-Stack-Entwickler', 'Datenanalyst', 'PCF-Entwickler']
    : ['Power Platform Consultant', 'Full-Stack Developer', 'Data Analyst', 'PCF Developer'];

  const certifications = [
    { src: '/certifications/pl200.png', alt: 'PL‑200', href: 'https://learn.microsoft.com/api/credentials/share/en-us/SudarshanAwasthi-9727/F415A9CD9614482C?sharingId=481F97FC893BF4E7', label: 'PL-200', desc: 'Functional Consultant' },
    { src: '/certifications/pl300.png', alt: 'PL‑300', href: 'https://learn.microsoft.com/api/credentials/share/en-us/SudarshanAwasthi-9727/951BA41F633465D4?sharingId=481F97FC893BF4E7', label: 'PL-300', desc: 'Power BI Analyst' },
    { src: '/certifications/pl900.png', alt: 'PL‑900', href: 'https://learn.microsoft.com/api/credentials/share/en-us/SudarshanAwasthi-9727/8FD615F875CFFAE?sharingId=481F97FC893BF4E7', label: 'PL-900', desc: 'Power Platform' },
    { src: '/certifications/az900.png', alt: 'AZ‑900', href: 'https://learn.microsoft.com/api/credentials/share/en-us/SudarshanAwasthi-9727/C971E11739F19E6C?sharingId=481F97FC893BF4E7', label: 'AZ-900', desc: 'Azure Fundamentals' },
    { src: '/certifications/psm1.png', alt: 'PSM I', href: 'https://www.credly.com/badges/562b9924-a98b-4c91-af6f-7c5956497c82', label: 'PSM I', desc: 'Scrum Master' },
  ];

  const projects = [
    { title: t('project.chatbot.title'), desc: t('project.chatbot.desc'), image: '/images/pdf-context-chatbot.png', href: '/projects/pdf-context-chatbot', tags: ['Flask', 'Power Platform', 'AI', 'Python'], featured: true },
    { title: t('project.sales.title'), desc: t('project.sales.desc'), image: '/images/sales-report.png', href: '/projects/sales-report', tags: ['Power BI', 'SQL', 'DAX'] },
    { title: t('project.fifa.title'), desc: t('project.fifa.desc'), image: '/images/fifa.png', href: '/projects/fifa', tags: ['Python', 'Streamlit', 'Plotly'] },
    { title: t('project.cia.title'), desc: t('project.cia.desc'), image: '/images/cia.png', href: '/projects/cia-factbook', tags: ['SQL', 'Jupyter', 'SQLite'] },
  ];

  const featured = projects[0];
  const rest = projects.slice(1);

  const skillCategories = [
    {
      icon: '⚡', titleKey: 'home.cat.microsoft',
      skills: [
        { name: 'Power Apps', level: 95 },
        { name: 'Power Automate', level: 90 },
        { name: 'Power BI', level: 88 },
        { name: 'Microsoft Fabric', level: 80 },
        { name: 'SharePoint Online', level: 85 },
        { name: 'PCF Components', level: 82 },
      ],
    },
    {
      icon: '🎨', titleKey: 'home.cat.frontend',
      skills: [
        { name: 'React / Next.js', level: 85 },
        { name: 'TypeScript', level: 82 },
        { name: 'Tailwind CSS', level: 80 },
        { name: 'FluentUI', level: 78 },
        { name: 'HTML / CSS', level: 90 },
      ],
    },
    {
      icon: '🔧', titleKey: 'home.cat.backend',
      skills: [
        { name: 'Python / Flask', level: 80 },
        { name: 'SQL Server', level: 85 },
        { name: 'REST APIs', level: 82 },
        { name: 'Data Modeling', level: 80 },
        { name: 'Office Scripts', level: 78 },
      ],
    },
    {
      icon: '🛠', titleKey: 'home.cat.tools',
      skills: [
        { name: 'Git / GitHub', level: 85 },
        { name: 'Flutter / Dart', level: 65 },
        { name: 'AI / LLMs', level: 75 },
        { name: 'Jupyter Notebooks', level: 78 },
        { name: 'npm / CLI Tools', level: 80 },
      ],
    },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden">

      {/* ═══════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ParticleNetwork />
        <div className="glow-orb-blue top-1/4 -left-48" />
        <div className="glow-orb-indigo bottom-1/4 -right-40" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          {/* Profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <div className="relative w-28 h-28 mx-auto">
              <div className="absolute -inset-1.5 bg-gradient-to-br from-[#38bdf8] to-[#818cf8] rounded-full opacity-50 blur-md" />
              <div className="absolute -inset-0.5 bg-gradient-to-br from-[#38bdf8] to-[#818cf8] rounded-full opacity-80" />
              <Image
                src="/me.jpg"
                alt="Sudarshan Awasthi"
                width={320}
                height={320}
                className="relative rounded-full object-cover w-28 h-28 border-2 border-[#060a13]"
                priority
                quality={90}
              />
            </div>
          </motion.div>

          {/* Code comment */}
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="code-comment mb-3"
          >
            {'// ' + t('home.greeting')}
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-5 gradient-text leading-tight"
          >
            {t('home.name')}
          </motion.h1>

          {/* Typewriter role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-xl sm:text-2xl text-[#94a3b8] font-medium mb-6 h-9"
          >
            <TypeWriter words={roles} className="font-mono" />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-[#64748b] max-w-xl mx-auto mb-10 leading-relaxed"
          >
            {t('home.subtitle')}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex flex-wrap gap-4 justify-center mb-10"
          >
            <a href="#projects" className="group relative px-7 py-3 rounded-lg bg-gradient-to-r from-[#38bdf8] to-[#818cf8] text-white font-semibold text-sm overflow-hidden transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#38bdf8]/20">
              <span className="relative z-10">{t('home.cta.projects')}</span>
            </a>
            <a href="#contact" className="px-7 py-3 rounded-lg border border-[#162033] text-[#94a3b8] font-semibold text-sm hover:border-[#38bdf8]/30 hover:text-white transition-all hover:-translate-y-0.5">
              {t('home.cta.contact')}
            </a>
            <a href="/SudarshanAwasthi_EN.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-7 py-3 rounded-lg border border-[#162033] text-[#94a3b8] font-semibold text-sm hover:border-[#38bdf8]/30 hover:text-white transition-all hover:-translate-y-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              CV
            </a>
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.85, duration: 0.5 }}
            className="flex gap-5 justify-center"
          >
            <a href="https://github.com/sudarshanAw" target="_blank" rel="noopener noreferrer" className="text-[#64748b] hover:text-white transition-colors" aria-label="GitHub"><FaGithub className="w-5 h-5" /></a>
            <a href="https://www.linkedin.com/in/sudarshan-awasthi/" target="_blank" rel="noopener noreferrer" className="text-[#64748b] hover:text-[#38bdf8] transition-colors" aria-label="LinkedIn"><FaLinkedin className="w-5 h-5" /></a>
            <a href="mailto:sudarshanawasthi47@gmail.com" className="text-[#64748b] hover:text-[#818cf8] transition-colors" aria-label="Email"><FaEnvelope className="w-5 h-5" /></a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-5 h-8 rounded-full border-2 border-[#162033] flex justify-center pt-1.5">
            <motion.div
              className="w-1 h-2 rounded-full bg-[#38bdf8]"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          STATS BAR
      ═══════════════════════════════════════════════════════ */}
      <section className="border-y border-[#162033] bg-[#0c1222]/60 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 py-10 grid grid-cols-3 gap-6">
          <AnimatedCounter target={5} label={t('home.stat.certs')} />
          <AnimatedCounter target={20} suffix="+" label={t('home.stat.tech')} />
          <AnimatedCounter target={4} suffix="+" label={t('home.stat.projects')} />
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-20 space-y-32">

        {/* ═══════════════════════════════════════════════════════
            ABOUT
        ═══════════════════════════════════════════════════════ */}
        <section id="about">
          <div className="section-tag">{t('home.aboutLead')}</div>
          <SectionHeading>{t('home.about')}</SectionHeading>
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 items-start">
            <TerminalCard />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="space-y-6"
            >
              <p className="text-[#94a3b8] leading-relaxed text-lg">
                {t('home.aboutText')}
              </p>
              <div className="flex flex-wrap gap-3">
                {['Power Apps', 'Power BI', 'Fabric', 'React', 'Python', 'SQL', 'TypeScript'].map(s => (
                  <span key={s} className="skill-badge">{s}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            SKILLS
        ═══════════════════════════════════════════════════════ */}
        <section id="skills">
          <div className="section-tag">{t('home.skillsLead')}</div>
          <SectionHeading>{t('home.skills')}</SectionHeading>
          <div className="grid sm:grid-cols-2 gap-5">
            {skillCategories.map((cat, i) => (
              <SkillCategory
                key={cat.titleKey}
                icon={cat.icon}
                title={t(cat.titleKey)}
                skills={cat.skills}
                delay={i * 0.1}
              />
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            CERTIFICATIONS
        ═══════════════════════════════════════════════════════ */}
        <section id="certifications">
          <div className="section-tag">{t('home.certificationsLead')}</div>
          <SectionHeading>{t('home.certifications')}</SectionHeading>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {certifications.map((cert, i) => (
              <motion.a
                key={cert.src}
                href={cert.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glow-card p-4 flex flex-col items-center gap-2 text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Image src={cert.src} alt={cert.alt} width={72} height={72} />
                <span className="text-xs font-bold text-white group-hover:text-[#38bdf8] transition-colors">{cert.label}</span>
                <span className="text-[10px] text-[#64748b] leading-tight">{cert.desc}</span>
              </motion.a>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            PROJECTS
        ═══════════════════════════════════════════════════════ */}
        <section id="projects">
          <div className="section-tag">{t('home.projectsLead')}</div>
          <SectionHeading>{t('home.projects')}</SectionHeading>

          {/* Featured project */}
          <motion.a
            href={featured.href}
            className="featured-card group block mb-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid md:grid-cols-[1.3fr_1fr] gap-0">
              <div className="relative overflow-hidden">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  width={800}
                  height={500}
                  className="w-full h-64 md:h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0c1222] hidden md:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1222] via-transparent to-transparent md:hidden" />
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <div className="flex flex-wrap gap-2 mb-3">
                  {featured.tags.map(tag => (
                    <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-[#162033] text-[#38bdf8] border border-[#162033] font-semibold uppercase tracking-wider">{tag}</span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#38bdf8] transition-colors">{featured.title}</h3>
                <p className="text-sm text-[#64748b] leading-relaxed mb-5">{featured.desc}</p>
                <span className="text-sm font-semibold text-[#38bdf8] group-hover:translate-x-1 transition-transform inline-block">
                  {t('home.viewProject')}
                </span>
              </div>
            </div>
          </motion.a>

          {/* Rest */}
          <div className="grid sm:grid-cols-3 gap-5">
            {rest.map((project, i) => (
              <motion.a
                key={project.href}
                href={project.href}
                className="glow-card group block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={380}
                    className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1222] via-transparent to-transparent opacity-80" />
                </div>
                <div className="relative z-10 p-4 space-y-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-[#162033] text-[#94a3b8] border border-[#162033]">{tag}</span>
                    ))}
                  </div>
                  <h3 className="text-sm font-semibold text-white group-hover:text-[#38bdf8] transition-colors">{project.title}</h3>
                  <p className="text-xs text-[#64748b] leading-relaxed line-clamp-2">{project.desc}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            CV DOWNLOADS
        ═══════════════════════════════════════════════════════ */}
        <section id="cv">
          <SectionHeading>{t('home.cv.title')}</SectionHeading>
          <motion.div
            className="glow-card p-6 sm:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col sm:flex-row items-center gap-6">
              {/* Document icon */}
              <div className="shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-[#38bdf8]/20 to-[#818cf8]/20 border border-[#162033] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-[#38bdf8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <p className="code-comment mb-1">{'// ' + t('home.cv.subtitle')}</p>
                <p className="text-white font-semibold">Sudarshan Awasthi — CV / Lebenslauf</p>
              </div>
              <div className="flex flex-wrap gap-3 shrink-0">
                <a
                  href="/SudarshanAwasthi_EN.pdf"
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#38bdf8] to-[#818cf8] text-white font-semibold text-sm hover:shadow-lg hover:shadow-[#38bdf8]/20 transition-all hover:-translate-y-0.5"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                  {t('home.cta.cv.en')}
                </a>
                <a
                  href="/SudarshanAwasthi_DE.pdf"
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#162033] text-[#94a3b8] font-semibold text-sm hover:border-[#38bdf8]/30 hover:text-white transition-all hover:-translate-y-0.5"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                  {t('home.cta.cv.de')}
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            CONTACT
        ═══════════════════════════════════════════════════════ */}
        <section id="contact">
          <SectionHeading>{t('home.contact')}</SectionHeading>
          <motion.div
            className="featured-card p-8 sm:p-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <p className="code-comment mb-4">{'// ' + (lang === 'de' ? 'Bereit für neue Herausforderungen' : 'Open for new opportunities')}</p>
            <p className="text-[#94a3b8] text-lg mb-8">{t('home.contactText')}</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:sudarshanawasthi47@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-[#38bdf8] to-[#818cf8] text-white font-semibold text-sm hover:shadow-lg hover:shadow-[#38bdf8]/20 transition-all hover:-translate-y-0.5"
              >
                <FaEnvelope className="w-4 h-4" />
                {t('home.contactBtn')}
              </a>
              <a
                href="https://www.linkedin.com/in/sudarshan-awasthi/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border border-[#162033] text-[#94a3b8] font-semibold text-sm hover:border-[#38bdf8]/30 hover:text-white transition-all hover:-translate-y-0.5"
              >
                <FaLinkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </motion.div>
        </section>
      </div>

      {/* ═══════════════════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════════════════ */}
      <footer className="border-t border-[#162033] py-8 mt-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#64748b]">
          <p className="code-comment">{t('home.footer')}</p>
          <div className="flex gap-5">
            <a href="https://github.com/sudarshanAw" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><FaGithub className="w-4 h-4" /></a>
            <a href="https://www.linkedin.com/in/sudarshan-awasthi/" target="_blank" rel="noopener noreferrer" className="hover:text-[#38bdf8] transition-colors"><FaLinkedin className="w-4 h-4" /></a>
          </div>
        </div>
      </footer>
    </main>
  );
}
