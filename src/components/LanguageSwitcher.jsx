import { useLanguage } from '../i18n/LanguageContext';

export default function LanguageSwitcher({ className = '' }) {
  const { lang, setLang, content } = useLanguage();

  return (
    <div className={`lang-switcher ${className}`.trim()} role="group" aria-label="Language">
      <button
        type="button"
        className={`lang-switcher__btn${lang === 'en' ? ' is-active' : ''}`}
        onClick={() => setLang('en')}
      >
        {content.common.lang.en}
      </button>
      <button
        type="button"
        className={`lang-switcher__btn${lang === 'ar' ? ' is-active' : ''}`}
        onClick={() => setLang('ar')}
      >
        {content.common.lang.ar}
      </button>
    </div>
  );
}
