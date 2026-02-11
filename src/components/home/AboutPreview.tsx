import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useLocale } from '@/contexts/LocaleContext';

export function AboutPreview() {
  const { t, getPath, dir } = useLocale();
  const Arrow = dir === 'rtl' ? ArrowLeft : ArrowRight;
  const photoWrapRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  // Curtain reveal on scroll
  useEffect(() => {
    const el = photoWrapRef.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Parallax — desktop only
  useEffect(() => {
    const el = photoWrapRef.current;
    if (!el) return;
    if (window.innerWidth < 1024 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const rect = el.getBoundingClientRect();
          const center = window.innerHeight / 2;
          const offset = (rect.top + rect.height / 2 - center) * 0.1;
          el.style.transform = `translateY(${offset}px)`;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Subtle periwinkle accent */}
      <div className="absolute top-0 end-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="scroll-reveal container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image with curtain reveal + grain */}
          <div className="order-2 lg:order-1 relative flex justify-center">
            <div ref={photoWrapRef} className="relative about-photo-wrap">
              <img 
                src="/images/dr-romina-about.jpeg"
                alt="Dr. Romina Raykhshtat"
                className="w-[371px] h-[471px] object-cover photo-organic-2 shadow-xl"
                loading="lazy"
              />
              {/* Film grain overlay */}
              <div className="absolute inset-0 photo-organic-2 pointer-events-none about-grain" />
              {/* Curtain overlay */}
              <div
                className={`absolute inset-0 photo-organic-2 pointer-events-none about-curtain ${revealed ? 'about-curtain-open' : ''}`}
              />
            </div>
            {/* Small dot accent only */}
            <div className="absolute -top-3 -start-3 w-10 h-10 rounded-full bg-secondary/30" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            {/* Accent dot + line */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-secondary" />
              <div className="w-10 h-px bg-secondary" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
              <span translate="no">{t.about.title}</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t.about.previewBio}
            </p>

            <Link 
              to={getPath('/about')}
              className="inline-flex items-center gap-2 text-primary font-medium group"
            >
              {t.about.readMore}
              <Arrow 
                size={18} 
                className="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" 
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
