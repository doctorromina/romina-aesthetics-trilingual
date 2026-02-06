import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLocale } from '@/contexts/LocaleContext';
import { Locale } from '@/lib/i18n/types';

const BASE_URL = 'https://drromina.com';
const OG_IMAGE = `${BASE_URL}/images/romina-portrait.jpeg`;

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
    'x-default': `${BASE_URL}/en${trailingPath === '/' ? '/' : trailingPath}`,
  };
}

/** Determine page key from pathname */
function getPageKey(pathname: string): string {
  const clean = pathname.replace(/^\/(en|ru)/, '') || '/';
  if (clean === '/' || clean === '') return 'home';
  if (clean.startsWith('/about')) return 'about';
  if (clean.startsWith('/services')) return 'services';
  if (clean.startsWith('/contact')) return 'contact';
  if (clean.startsWith('/privacy')) return 'privacy';
  if (clean.startsWith('/terms')) return 'terms';
  return 'home';
}

/** Get page-specific title and description */
function getPageMeta(pageKey: string, t: any): { title: string; description: string } {
  switch (pageKey) {
    case 'about':
      return {
        title: `${t.about.title} | ${t.meta.title}`,
        description: t.about.heroSubheading,
      };
    case 'services':
      return {
        title: `${t.services.title} | ${t.meta.title}`,
        description: t.services.intro,
      };
    case 'contact':
      return {
        title: `${t.contact.title} | ${t.meta.title}`,
        description: t.contact.subtitle,
      };
    case 'privacy':
      return {
        title: `${t.privacy.title} | ${t.meta.title}`,
        description: t.privacy.title,
      };
    case 'terms':
      return {
        title: `${t.terms.title} | ${t.meta.title}`,
        description: t.terms.title,
      };
    default:
      return {
        title: t.meta.title,
        description: t.meta.description,
      };
  }
}

export function SeoHead() {
  const { locale, t, dir } = useLocale();
  const location = useLocation();

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
  }, [locale, dir]);

  useEffect(() => {
    const pageKey = getPageKey(location.pathname);
    const { title, description } = getPageMeta(pageKey, t);

    // Update title
    document.title = title;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // OG tags
    const canonicalPath = getCanonicalPath(location.pathname, locale);
    const ogTags: Record<string, string> = {
      'og:title': title,
      'og:description': description,
      'og:type': 'website',
      'og:url': `${BASE_URL}${canonicalPath}`,
      'og:locale': ogLocales[locale],
      'og:image': OG_IMAGE,
      'og:site_name': 'Dr. Romina Raykhshtat',
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

    // Twitter card tags
    const twitterTags: Record<string, string> = {
      'twitter:card': 'summary_large_image',
      'twitter:title': title,
      'twitter:description': description,
      'twitter:image': OG_IMAGE,
    };

    Object.entries(twitterTags).forEach(([name, content]) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
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

    // Canonical tag — self-referencing
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `${BASE_URL}${canonicalPath}`);

    return () => {
      document.querySelectorAll('meta[property="og:locale:alternate"]').forEach(el => el.remove());
      document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(el => el.remove());
    };
  }, [locale, location.pathname, t]);

  return null;
}
