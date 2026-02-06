import { useLocale } from '@/contexts/LocaleContext';
import { useParallax } from '@/hooks/useParallax';

export function HeroSection() {
  const { t } = useLocale();
  const parallaxRef = useParallax(0.25);

  return (
    <section className="relative min-h-[80vh] flex items-center gradient-hero overflow-hidden">
      {/* Brand symbol watermark */}
      <div className="absolute inset-inline-end-0 bottom-0 pointer-events-none select-none opacity-[0.03]">
        <img 
          src="/images/brand-symbol.svg" 
          alt="" 
          aria-hidden="true"
          className="w-[500px] h-[500px] md:w-[600px] md:h-[600px]"
        />
      </div>

      {/* Periwinkle accent blobs */}
      <div className="absolute top-20 start-10 w-64 h-64 rounded-full bg-secondary/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 end-1/4 w-48 h-48 rounded-full bg-secondary/8 blur-2xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Content — staggered entrance */}
          <div className="max-w-xl">
            {/* Accent dot + line */}
            <div className="flex items-center gap-3 mb-6 hero-text-reveal">
              <div className="w-2 h-2 rounded-full bg-secondary" />
              <div className="w-12 h-px bg-secondary" />
            </div>

            {/* Tagline */}
            <p
              className="text-xs tracking-[0.3em] text-muted-foreground mb-4 font-body uppercase hero-text-reveal"
              style={{ animationDelay: '0.15s' }}
            >
              {t.hero.tagline}
            </p>

            {/* Headline */}
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mb-6 leading-tight text-balance hero-text-reveal"
              style={{ animationDelay: '0.3s' }}
            >
              {t.hero.headline}
            </h1>

            {/* Subheadline */}
            <p 
              className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed hero-text-reveal"
              style={{ animationDelay: '0.5s' }}
              dangerouslySetInnerHTML={{ 
                __html: t.hero.subheadline.replace(
                  /Dr\.\s*Romina(\s*Raykhshtat)?/gi,
                  (match) => `<span style="white-space: nowrap;">${match.replace(/\s+/g, '\u00A0')}</span>`
                )
              }}
            />

          </div>

          {/* Hero Photo — Desktop with parallax, premium blend */}
          <div ref={parallaxRef} className="relative hidden lg:block">
            <div className="aspect-[4/4] relative hero-photo-reveal max-h-[520px]">
              <img 
                src="/images/romina-portrait.jpeg"
                alt="Dr. Romina Raykhshtat"
                className="w-full h-full object-cover object-top rounded-[2rem]"
                loading="eager"
              />
              {/* Soft edge gradient blending into background */}
              <div className="absolute inset-0 rounded-[2rem] pointer-events-none"
                style={{
                  background: `
                    linear-gradient(to right, hsl(var(--background)) 0%, transparent 12%, transparent 88%, hsl(var(--background)) 100%),
                    linear-gradient(to bottom, hsl(var(--background)) 0%, transparent 8%, transparent 90%, hsl(var(--background)) 100%)
                  `
                }}
              />
            </div>

            {/* Brand accent decorations — staggered */}
            <div className="absolute -bottom-4 -start-4 w-20 h-20 rounded-full bg-secondary/30 hero-text-reveal" style={{ animationDelay: '0.8s' }} />
            <div className="absolute -top-3 -end-3 w-12 h-12 rounded-full bg-secondary/20 hero-text-reveal" style={{ animationDelay: '1s' }} />
          </div>

          {/* Mobile Hero Photo */}
          <div className="lg:hidden">
            <div className="relative max-w-sm mx-auto hero-photo-reveal">
              <img 
                src="/images/romina-portrait.jpeg"
                alt="Dr. Romina Raykhshtat"
                className="w-full aspect-[3/4] object-cover object-top rounded-2xl"
                loading="eager"
              />
              <div className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  background: `
                    linear-gradient(to bottom, hsl(var(--background)) 0%, transparent 8%, transparent 88%, hsl(var(--background)) 100%),
                    linear-gradient(to right, hsl(var(--background) / 0.2) 0%, transparent 10%, transparent 90%, hsl(var(--background) / 0.2) 100%)
                  `
                }}
              />
              <div className="absolute -bottom-3 start-4 w-12 h-12 rounded-full bg-secondary/30" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 inset-x-0 h-px accent-line" />
    </section>
  );
}
