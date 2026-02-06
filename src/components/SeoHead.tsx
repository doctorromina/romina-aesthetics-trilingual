import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLocale } from '@/contexts/LocaleContext';
import { Locale } from '@/lib/i18n/types';

const BASE_URL = 'https://drromina.com';

const ogLocales: Record<Locale, string> = {
  he: 'he_IL',
  en: 'en_US',
  ru: 'ru_RU',
};

const alternateLocales: Record<Locale, string[]> = {
  he: ['en_US', 'ru_RU'],
  en: ['he_IL', 'ru_RU'],
  ru: ['he_IL', 'en_US'],
};

function getCanonicalPath(pathname: string, locale: Locale): string {
  const cleanPath = pathname.replace(/^\/(en|ru)/, '') || '/';
  if (locale === 'he') return cleanPath;
  return `/${locale}${cleanPath === '/' ? '' : cleanPath}`;
}

function getAlternatePaths(pathname: string): Record<string, string> {
  const cleanPath = pathname.replace(/^\/(en|ru)/, '') || '/';
  const trailingPath = cleanPath === '/' ? '/' : cleanPath + '/';
  
  return {
    he: `${BASE_URL}${trailingPath}`,
    en: `${BASE_URL}/en${trailingPath === '/' ? '/' : trailingPath}`,
    ru: `${BASE_URL}/ru${trailingPath === '/' ? '/' : trailingPath}`,
    'x-default': `${BASE_URL}${trailingPath}`,
  };
}

export function SeoHead() {
  const { locale, t, dir } = useLocale();
  const location = useLocation();

  useEffect(() => {
    // Update <html> lang and dir
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
  }, [locale, dir]);

  useEffect(() => {
    // Update title
    document.title = t.meta.title;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', t.meta.description);
    }

    // OG tags
    const ogTags: Record<string, string> = {
      'og:title': t.meta.title,
      'og:description': t.meta.description,
      'og:type': 'website',
      'og:url': `${BASE_URL}${getCanonicalPath(location.pathname, locale)}`,
      'og:locale': ogLocales[locale],
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });

    // Remove existing alternate locale tags
    document.querySelectorAll('meta[property="og:locale:alternate"]').forEach(el => el.remove());

    // Add alternate locale tags
    alternateLocales[locale].forEach((altLocale) => {
      const tag = document.createElement('meta');
      tag.setAttribute('property', 'og:locale:alternate');
      tag.setAttribute('content', altLocale);
      document.head.appendChild(tag);
    });

    // Hreflang tags
    document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(el => el.remove());

    const alternatePaths = getAlternatePaths(location.pathname);
    Object.entries(alternatePaths).forEach(([hreflang, href]) => {
      const link = document.createElement('link');
      link.setAttribute('rel', 'alternate');
      link.setAttribute('hreflang', hreflang);
      link.setAttribute('href', href);
      document.head.appendChild(link);
    });

    // Canonical tag
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `${BASE_URL}${getCanonicalPath(location.pathname, locale)}`);

    return () => {
      document.querySelectorAll('meta[property="og:locale:alternate"]').forEach(el => el.remove());
      document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(el => el.remove());
    };
  }, [locale, location.pathname, t]);

  return null;
}
