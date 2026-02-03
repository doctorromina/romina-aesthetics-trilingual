import { he } from './dictionaries/he';
import { en } from './dictionaries/en';
import { ru } from './dictionaries/ru';
import { Locale, locales, defaultLocale } from './types';

export type { Locale };
export { locales, defaultLocale };

export type Dictionary = typeof he;

const dictionaries: Record<Locale, Dictionary> = {
  he,
  en,
  ru,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] || dictionaries[defaultLocale];
}

export function getLocaleFromPath(pathname: string): Locale {
  if (pathname.startsWith('/en')) return 'en';
  if (pathname.startsWith('/ru')) return 'ru';
  return 'he';
}

export function getLocalizedPath(path: string, locale: Locale): string {
  // Remove any existing locale prefix
  const cleanPath = path.replace(/^\/(en|ru)/, '');
  
  if (locale === 'he') {
    return cleanPath || '/';
  }
  
  return `/${locale}${cleanPath || ''}`;
}

export function getWhatsAppUrl(locale: Locale, phoneNumber: string = '9725XXXXXXXX'): string {
  const messages: Record<Locale, string> = {
    he: 'שלום, אשמח לקבוע ייעוץ',
    en: 'Hi, I\'d like to book a consultation',
    ru: 'Здравствуйте, хочу записаться на консультацию',
  };
  
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(messages[locale])}`;
}
