export type Locale = 'he' | 'en' | 'ru';

export interface LocaleConfig {
  code: Locale;
  name: string;
  nativeName: string;
  dir: 'ltr' | 'rtl';
  urlPrefix: string;
}

export const locales: Record<Locale, LocaleConfig> = {
  he: {
    code: 'he',
    name: 'Hebrew',
    nativeName: 'עברית',
    dir: 'rtl',
    urlPrefix: '',
  },
  en: {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    dir: 'ltr',
    urlPrefix: '/en',
  },
  ru: {
    code: 'ru',
    name: 'Russian',
    nativeName: 'Русский',
    dir: 'ltr',
    urlPrefix: '/ru',
  },
};

export const defaultLocale: Locale = 'he';
