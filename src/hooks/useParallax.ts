import { useEffect, useRef } from 'react';

export function useParallax(speed = 0.25) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Disable on mobile and for reduced motion
    if (window.innerWidth < 1024 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let ticking = false;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const elementCenter = rect.top + rect.height / 2;
      const offset = (elementCenter - viewportCenter) * speed;
      el.style.transform = `translateY(${offset}px)`;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => window.removeEventListener('scroll', onScroll);
  }, [speed]);

  return ref;
}
