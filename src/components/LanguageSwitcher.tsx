'use client';

import { useLang } from '@/context/LanguageContext';

export default function LanguageSwitcher() {
  const { lang, setLang } = useLang();

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-1 bg-white border border-gray-200 rounded-full shadow px-2 py-1">
      <button
        onClick={() => setLang('en')}
        className={`px-3 py-1 text-sm font-semibold rounded-full transition ${
          lang === 'en'
            ? 'bg-gray-900 text-white'
            : 'text-gray-500 hover:text-gray-900'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => setLang('de')}
        className={`px-3 py-1 text-sm font-semibold rounded-full transition ${
          lang === 'de'
            ? 'bg-gray-900 text-white'
            : 'text-gray-500 hover:text-gray-900'
        }`}
        aria-label="Auf Deutsch umschalten"
      >
        DE
      </button>
    </div>
  );
}
