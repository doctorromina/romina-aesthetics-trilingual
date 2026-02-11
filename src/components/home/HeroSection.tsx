import { useLocale } from '@/contexts/LocaleContext';

export function HeroSection() {
  const { t } = useLocale();

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-background">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 start-1/4 w-[400px] h-[400px] rounded-full bg-secondary/10 blur-[100px]" />
        <div className="absolute bottom-10 start-0 w-[300px] h-[300px] rounded-full bg-secondary/8 blur-[80px]" />
      </div>

      {/* Brand symbol watermark */}
      <div className="absolute start-8 bottom-8 pointer-events-none select-none opacity-[0.03]">
        <img
          src="/images/brand-symbol.svg"
          alt=""
          aria-hidden="true"
          className="w-[400px] h-[400px]"
        />
      </div>

      {/* ── Desktop layout ── */}
      <div className="hidden lg:block w-full">
        {/* Photo — edge bleed */}
        <div className="absolute inset-inline-end-0 top-0 bottom-0 w-[55%] hero-photo-reveal">
          <img
            src="/images/romina-portrait.jpeg"
            alt="Dr. Romina Raykhshtat"
            className="w-full h-full object-cover object-top"
            loading="eager"
          />
          {/* Edge gradient fade into background — RTL-aware via CSS */}
          <div className="hero-edge-fade absolute inset-0 pointer-events-none" aria-hidden="true" />
          {/* Bottom fade */}
          <div className="absolute bottom-0 inset-x-0 h-32 pointer-events-none"
               style={{ background: 'linear-gradient(to top, hsl(var(--background)) 0%, transparent 100%)' }}
               aria-hidden="true"
          />
        </div>

        {/* Text content */}
        <div className="container mx-auto px-4 md:px-6 relative z-10 py-24">
          <div className="max-w-[45%]">
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
              className="text-5xl lg:text-[3.75rem] font-heading font-bold text-primary mb-6 leading-[1.1] text-balance hero-text-reveal"
              style={{ animationDelay: '0.3s' }}
            >
              {t.hero.headline}
            </h1>

            {/* Subheadline */}
            <p
              className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed hero-text-reveal"
              style={{ animationDelay: '0.5s' }}
              dangerouslySetInnerHTML={{
                __html: t.hero.subheadline.replace(
                  /Dr\.\s*Romina(\s*Raykhshtat)?/gi,
                  (match) => `<span style="white-space: nowrap;">${match.replace(/\s+/g, '\u00A0')}</span>`
                ),
              }}
            />
          </div>
        </div>
      </div>

      {/* ── Mobile layout ── */}
      <div className="lg:hidden w-full">
        {/* Full-width photo */}
        <div className="relative w-full max-h-[50vh] overflow-hidden hero-photo-reveal">
          <img
            src="/images/romina-portrait.jpeg"
            alt="Dr. Romina Raykhshtat"
            className="w-full h-[50vh] object-cover object-top"
            loading="eager"
          />
          {/* Bottom fade */}
          <div className="hero-fade-mask-mobile absolute inset-0 pointer-events-none" />
          <div className="absolute bottom-0 inset-x-0 h-24 pointer-events-none"
               style={{ background: 'linear-gradient(to top, hsl(var(--background)) 0%, transparent 100%)' }}
               aria-hidden="true"
          />
        </div>

        {/* Text */}
        <div className="px-6 pt-4 pb-12 relative z-10">
          <div className="flex items-center gap-3 mb-4 hero-text-reveal">
            <div className="w-2 h-2 rounded-full bg-secondary" />
            <div className="w-10 h-px bg-secondary" />
          </div>

          <p
            className="text-xs tracking-[0.3em] text-muted-foreground mb-3 font-body uppercase hero-text-reveal"
            style={{ animationDelay: '0.15s' }}
          >
            {t.hero.tagline}
          </p>

          <h1
            className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4 leading-[1.15] text-balance hero-text-reveal"
            style={{ animationDelay: '0.3s' }}
          >
            {t.hero.headline}
          </h1>

          <p
            className="text-base text-muted-foreground leading-relaxed hero-text-reveal"
            style={{ animationDelay: '0.5s' }}
            dangerouslySetInnerHTML={{
              __html: t.hero.subheadline.replace(
                /Dr\.\s*Romina(\s*Raykhshtat)?/gi,
                (match) => `<span style="white-space: nowrap;">${match.replace(/\s+/g, '\u00A0')}</span>`
              ),
            }}
          />
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 inset-x-0 h-px accent-line" />
    </section>
  );
}
