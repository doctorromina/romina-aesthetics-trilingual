import { Link, useLocation } from 'react-router-dom';
import { locales, Locale, getLocalizedPath } from '@/lib/i18n';
import { useLocale } from '@/contexts/LocaleContext';

export function LanguageSwitcher() {
  const location = useLocation();
  const { locale: currentLocale } = useLocale();

  // Get the path without the locale prefix
  const getCleanPath = () => {
    const path = location.pathname;
    return path.replace(/^\/(en|ru)/, '') || '/';
  };

  const languages: { code: Locale; label: string }[] = [
    { code: 'he', label: 'עברית' },
    { code: 'en', label: 'English' },
    { code: 'ru', label: 'Русский' },
  ];

  return (
    <div className="flex items-center gap-1 text-sm">
      {languages.map((lang, index) => (
        <span key={lang.code} className="flex items-center">
          {index > 0 && <span className="text-muted-foreground mx-1">|</span>}
          <Link
            to={getLocalizedPath(getCleanPath(), lang.code)}
            className={`
              px-1 py-0.5 rounded transition-colors
              ${currentLocale === lang.code 
                ? 'text-primary font-medium' 
                : 'text-muted-foreground hover:text-primary'}
            `}
            lang={lang.code}
            dir={lang.code === 'he' ? 'rtl' : 'ltr'}
          >
            {lang.label}
          </Link>
        </span>
      ))}
    </div>
  );
}
