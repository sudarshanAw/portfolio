'use client';

import { useLang } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import { useEffect, useState } from 'react';

export default function NavBar() {
  const { lang, setLang, t } = useLang();
  const { theme, toggleTheme } = useTheme();
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
          ? 'backdrop-blur-xl shadow-lg'
          : 'bg-transparent'
      }`}
      style={scrolled ? {
        background: 'var(--nav-bg)',
        borderBottom: '1px solid var(--nav-border)',
        boxShadow: `0 4px 12px ${theme === 'dark' ? 'rgba(0,0,0,0.1)' : 'rgba(0,0,0,0.04)'}`,
      } : undefined}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] flex items-center justify-center text-white font-bold text-sm">
            SA
          </div>
          <span className="text-sm font-semibold hidden sm:block transition-colors"
            style={{ color: 'var(--foreground)' }}
          >
            Sudarshan Awasthi
          </span>
        </a>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Nav links (desktop) */}
          <div className="hidden md:flex items-center gap-6 text-sm"
            style={{ color: 'var(--text-muted)' }}
          >
            <a href="#about" className="hover:opacity-80 transition-opacity" style={{ color: 'var(--text-muted)' }}>{t('nav.about')}</a>
            <a href="#skills" className="hover:opacity-80 transition-opacity" style={{ color: 'var(--text-muted)' }}>{t('nav.skills')}</a>
            <a href="#certifications" className="hover:opacity-80 transition-opacity" style={{ color: 'var(--text-muted)' }}>{t('nav.certifications')}</a>
            <a href="#projects" className="hover:opacity-80 transition-opacity" style={{ color: 'var(--text-muted)' }}>{t('nav.projects')}</a>
          </div>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              color: 'var(--text-muted)',
            }}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              /* Sun icon */
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              /* Moon icon */
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>

          {/* Lang toggle */}
          <div className="flex items-center gap-0.5 rounded-full p-0.5"
            style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
          >
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1 text-xs font-semibold rounded-full transition-all ${
                lang === 'en'
                  ? 'bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white shadow-md'
                  : ''
              }`}
              style={lang !== 'en' ? { color: 'var(--text-faint)' } : undefined}
            >
              EN
            </button>
            <button
              onClick={() => setLang('de')}
              className={`px-3 py-1 text-xs font-semibold rounded-full transition-all ${
                lang === 'de'
                  ? 'bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white shadow-md'
                  : ''
              }`}
              style={lang !== 'de' ? { color: 'var(--text-faint)' } : undefined}
            >
              DE
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
