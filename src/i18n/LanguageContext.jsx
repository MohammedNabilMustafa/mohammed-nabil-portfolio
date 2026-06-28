import { useEffect, useMemo, useState } from 'react';
import ar from './translations/ar';
import { buildContent } from './buildContent';
import { LanguageContext } from './languageContextState';

function getInitialLang() {
  try {
    return localStorage.getItem('portfolio-lang') === 'ar' ? 'ar' : 'en';
  } catch {
    return 'en';
  }
}

function getSafeContent(lang) {
  try {
    return buildContent(lang, lang === 'ar' ? ar : null);
  } catch (error) {
    console.error('Failed to build content:', error);
    return buildContent('en');
  }
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(getInitialLang);
  const setLang = (next) => setLangState(next === 'ar' ? 'ar' : 'en');

  const content = useMemo(() => getSafeContent(lang), [lang]);
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    try {
      localStorage.setItem('portfolio-lang', lang);
    } catch {
      // ignore storage errors
    }
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    document.body.style.overflow = '';
  }, [lang, dir]);

  const value = useMemo(
    () => ({
      lang,
      dir,
      isRtl: lang === 'ar',
      setLang,
      content,
      t: (key) => {
        const keys = key.split('.');
        let val = content;
        for (const k of keys) {
          val = val?.[k];
        }
        return val ?? key;
      },
    }),
    [lang, dir, content]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export { useLanguage } from './useLanguage';
