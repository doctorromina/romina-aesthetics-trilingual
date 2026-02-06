import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Locale, getLocalizedPath } from '@/lib/i18n';

const COOKIE_NAME = 'preferred_locale';
const COOKIE_MAX_AGE = 365 * 24 * 60 * 60; // 1 year in seconds

export function getLocaleCookie(): string | null {
  const match = document.cookie.match(new RegExp(`(?:^|; )${COOKIE_NAME}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

export function setLocaleCookie(locale: Locale): void {
  document.cookie = `${COOKIE_NAME}=${encodeURIComponent(locale)}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`;
}

function detectBrowserLocale(): Locale {
  const browserLang = navigator.language?.toLowerCase() || '';
  
  if (browserLang.startsWith('he')) return 'he';
  if (browserLang.startsWith('ru')) return 'ru';
  // English and all other languages → default (he, since he is default)
  // But per user request: en or any other → / (which is he default)
  // Actually re-reading: "English (en) or any other language → / (default)"
  // The default route / is Hebrew. So only he and ru get redirected.
  return 'he';
}

export function useLanguageDetection(): void {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Only run on the very first page load at root paths
    // Don't redirect if user is already on a locale-prefixed path
    const isRootPath = location.pathname === '/';
    const savedLocale = getLocaleCookie();

    // If user has a saved cookie, we've already handled their preference
    if (savedLocale) return;

    // Only auto-detect on the root path (first visit, no cookie)
    if (!isRootPath) return;

    const detectedLocale = detectBrowserLocale();
    
    // Save the detected locale
    setLocaleCookie(detectedLocale);

    // Only redirect if not already on the right path
    if (detectedLocale !== 'he') {
      const targetPath = getLocalizedPath('/', detectedLocale);
      navigate(targetPath, { replace: true });
    }
  }, []); // Only run once on mount
}
