import { useLocale } from '@/contexts/LocaleContext';
import { useParallax } from '@/hooks/useParallax';

export function HeroSection() {
  const { t } = useLocale();
  const parallaxRef = useParallax(0.25);

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-brand-cream">
      {/* Warm abstract background shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large organic periwinkle wash — top-end */}
        <div className="absolute -top-20 -end-20 w-[500px] h-[500px] rounded-full bg-secondary/15 blur-[100px]" />
        {/* Smaller warm accent — bottom-start */}
        <div className="absolute bottom-10 -start-10 w-[350px] h-[350px] rounded-full bg-secondary/10 blur-[80px]" />
        {/* Subtle mid blob */}
        <div className="absolute top-1/2 start-1/3 w-[200px] h-[200px] rounded-full bg-secondary/8 blur-[60px]" />

        {/* Flowing abstract curves SVG */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.04]"
          viewBox="0 0 1200 800"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <path
            d="M-100,400 C100,200 400,600 600,350 S900,100 1300,400"
            stroke="hsl(var(--brand-periwinkle-dark))"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M-50,500 C200,300 450,700 700,450 S950,200 1350,500"
            stroke="hsl(var(--brand-periwinkle-dark))"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M0,600 C250,450 500,750 750,500 S1000,300 1400,550"
            stroke="hsl(var(--brand-periwinkle-dark))"
            strokeWidth="0.75"
            fill="none"
          />
        </svg>
      </div>

      {/* Brand symbol watermark */}
      <div className="absolute inset-inline-end-0 bottom-0 pointer-events-none select-none opacity-[0.03]">
        <img 
          src="/images/brand-symbol.svg" 
          alt="" 
          aria-hidden="true"
          className="w-[500px] h-[500px] md:w-[600px] md:h-[600px]"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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

            {/* Headline — editorial serif */}
            <h1
              className="text-4xl md:text-5xl lg:text-[3.5rem] font-heading font-bold text-primary mb-6 leading-[1.15] text-balance hero-text-reveal"
              style={{ animationDelay: '0.3s' }}
            >
              {t.hero.headline}
            </h1>

            {/* Subheadline */}
            <p 
              className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed hero-text-reveal"
              style={{ animationDelay: '0.5s' }}
              dangerouslySetInnerHTML={{ 
                __html: t.hero.subheadline.replace(
                  /Dr\.\s*Romina(\s*Raykhshtat)?/gi,
                  (match) => `<span style="white-space: nowrap;">${match.replace(/\s+/g, '\u00A0')}</span>`
                )
              }}
            />
          </div>

          {/* Hero Photo — Desktop with parallax & organic blob */}
          <div ref={parallaxRef} className="relative hidden lg:flex justify-center">
            {/* Decorative ring behind photo */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[480px] h-[580px] rounded-full border border-secondary/30" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[520px] h-[620px] photo-organic-3 border border-secondary/15" />
            </div>

            <div className="relative hero-photo-reveal">
              <img 
                src="/images/romina-portrait.jpeg"
                alt="Dr. Romina Raykhshtat"
                className="w-[440px] h-[560px] object-cover object-top photo-organic-2 shadow-2xl shadow-secondary/20"
                loading="eager"
              />
            </div>
          </div>

          {/* Mobile Hero Photo — circular organic */}
          <div className="lg:hidden flex justify-center">
            <div className="relative hero-photo-reveal">
              <img 
                src="/images/romina-portrait.jpeg"
                alt="Dr. Romina Raykhshtat"
                className="w-[260px] h-[260px] object-cover object-top photo-organic-mobile shadow-xl shadow-secondary/20"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 inset-x-0 h-px accent-line" />
    </section>
  );
}
