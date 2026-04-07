'use client';

import { useLang } from '@/context/LanguageContext';
import { useEffect, useState } from 'react';

export default function NavBar() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0b0f1a]/80 backdrop-blur-xl border-b border-[#1e293b]/60 shadow-lg shadow-black/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#38bdf8] to-[#818cf8] flex items-center justify-center text-white font-bold text-sm">
            SA
          </div>
          <span className="text-sm font-semibold text-[#e2e8f0] hidden sm:block group-hover:text-white transition-colors">
            Sudarshan Awasthi
          </span>
        </a>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Nav links (desktop) */}
          <div className="hidden md:flex items-center gap-6 text-sm text-[#94a3b8]">
            <a href="#about" className="hover:text-white transition-colors">{t('nav.about')}</a>
            <a href="#skills" className="hover:text-white transition-colors">{t('nav.skills')}</a>
            <a href="#certifications" className="hover:text-white transition-colors">{t('nav.certifications')}</a>
            <a href="#projects" className="hover:text-white transition-colors">{t('nav.projects')}</a>
          </div>

          {/* Lang toggle */}
          <div className="flex items-center gap-0.5 bg-[#111827] border border-[#1e293b] rounded-full p-0.5">
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1 text-xs font-semibold rounded-full transition-all ${
                lang === 'en'
                  ? 'bg-gradient-to-r from-[#38bdf8] to-[#818cf8] text-white shadow-md'
                  : 'text-[#64748b] hover:text-[#94a3b8]'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang('de')}
              className={`px-3 py-1 text-xs font-semibold rounded-full transition-all ${
                lang === 'de'
                  ? 'bg-gradient-to-r from-[#38bdf8] to-[#818cf8] text-white shadow-md'
                  : 'text-[#64748b] hover:text-[#94a3b8]'
              }`}
            >
              DE
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
