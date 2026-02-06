import { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

import { SchemaMarkup } from './SchemaMarkup';
import { SeoHead } from './SeoHead';

export function Layout() {
  const location = useLocation();
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Global scroll-reveal observer — applies to any element with .scroll-reveal or .scroll-reveal-stagger
  useEffect(() => {
    observerRef.current?.disconnect();

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const timeout = setTimeout(() => {
      const els = document.querySelectorAll(
        '.scroll-reveal:not(.revealed), .scroll-reveal-stagger:not(.revealed)'
      );

      if (prefersReducedMotion) {
        els.forEach(el => el.classList.add('revealed'));
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
      );

      const hash = location.hash?.slice(1);
      els.forEach(el => {
        // Immediately reveal elements targeted by URL hash
        if (hash && (el.id === hash || el.querySelector(`#${hash}`))) {
          el.classList.add('revealed');
        } else {
          observer.observe(el);
        }
      });

      observerRef.current = observer;
    }, 60);

    return () => {
      clearTimeout(timeout);
      observerRef.current?.disconnect();
    };
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen flex flex-col relative bg-background">
      <SeoHead />
      <SchemaMarkup />
      <Header />
      <main className="flex-1 relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
