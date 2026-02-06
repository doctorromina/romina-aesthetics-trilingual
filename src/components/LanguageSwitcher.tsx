import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe } from 'lucide-react';
import { locales, Locale, getLocalizedPath } from '@/lib/i18n';
import { useLocale } from '@/contexts/LocaleContext';
import { setLocaleCookie } from '@/hooks/useLanguageDetection';

export function LanguageSwitcher() {
  const location = useLocation();
  const { locale: currentLocale } = useLocale();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const getCleanPath = () => {
    const path = location.pathname;
    return path.replace(/^\/(en|ru)/, '') || '/';
  };

  const languages: { code: Locale; label: string; short: string }[] = [
    { code: 'he', label: 'עברית', short: 'HE' },
    { code: 'en', label: 'English', short: 'EN' },
    { code: 'ru', label: 'Русский', short: 'RU' },
  ];

  const handleLanguageSwitch = (locale: Locale) => {
    setLocaleCookie(locale);
    setOpen(false);
  };

  const currentLang = languages.find(l => l.code === currentLocale);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-2 py-1.5 rounded-full text-muted-foreground hover:text-primary hover:bg-muted/60 transition-colors duration-200"
        aria-label="Switch language"
      >
        <Globe size={16} strokeWidth={1.8} />
        <span className="text-xs font-medium tracking-wide">{currentLang?.short}</span>
      </button>

      {open && (
        <div className="absolute top-full mt-2 end-0 bg-background border border-border/60 rounded-xl shadow-lg shadow-black/5 py-1.5 min-w-[140px] z-50 animate-fade-in">
          {languages.map((lang) => (
            <Link
              key={lang.code}
              to={getLocalizedPath(getCleanPath(), lang.code)}
              onClick={() => handleLanguageSwitch(lang.code)}
              className={`
                flex items-center justify-between px-4 py-2 text-sm transition-colors
                ${currentLocale === lang.code
                  ? 'text-primary font-medium bg-muted/40'
                  : 'text-muted-foreground hover:text-primary hover:bg-muted/30'}
              `}
              lang={lang.code}
              dir="ltr"
            >
              <span>{lang.label}</span>
              {currentLocale === lang.code && (
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
