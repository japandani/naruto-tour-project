import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/i18n/translations';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; label: string }[] = [
    { code: 'ru', label: 'RU' },
    { code: 'en', label: 'EN' },
    { code: 'he', label: 'HE' }
  ];

  return (
    <div className="flex items-center gap-1 bg-background/10 backdrop-blur-sm rounded-lg p-1">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`px-3 py-1.5 rounded-md text-sm font-semibold transition-all duration-200 ${
            language === lang.code
              ? 'bg-primary text-white shadow-md'
              : 'text-background hover:bg-background/20'
          }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
