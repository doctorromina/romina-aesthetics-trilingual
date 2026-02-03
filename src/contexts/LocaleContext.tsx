import React, { createContext, useContext, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  Locale, 
  locales, 
  getDictionary, 
  getLocaleFromPath, 
  getLocalizedPath,
  getWhatsAppUrl,
  Dictionary 
} from '@/lib/i18n';

interface LocaleContextType {
  locale: Locale;
  dir: 'ltr' | 'rtl';
  t: Dictionary;
  getPath: (path: string) => string;
  whatsAppUrl: string;
}

const LocaleContext = createContext<LocaleContextType | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const location = useLocation();
  const locale = getLocaleFromPath(location.pathname);
  const localeConfig = locales[locale];
  const t = getDictionary(locale);

  const getPath = (path: string) => getLocalizedPath(path, locale);
  const whatsAppUrl = getWhatsAppUrl(locale);

  return (
    <LocaleContext.Provider value={{ 
      locale, 
      dir: localeConfig.dir, 
      t, 
      getPath,
      whatsAppUrl 
    }}>
      <div dir={localeConfig.dir} lang={locale}>
        {children}
      </div>
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
}
