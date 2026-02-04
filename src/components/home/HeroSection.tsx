import { useLocale } from '@/contexts/LocaleContext';
import { Button } from '@/components/ui/button';
import { FaceLineArt } from '@/components/FaceLineArt';

export function HeroSection() {
  const { t, whatsAppUrl } = useLocale();

  return (
    <section className="relative min-h-[90vh] flex items-center gradient-hero overflow-hidden">
      {/* Background Line Art - right side, subtle watermark */}
      <div className="absolute inset-inline-end-0 top-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.06]">
        <FaceLineArt 
          className="w-[400px] h-[500px] md:w-[500px] md:h-[650px] text-[#434951]" 
        />
      </div>

      {/* Background Decorative R */}
      <div className="absolute inset-inline-end-0 top-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none select-none">
        <span 
          className="text-[40rem] font-heading font-bold text-primary leading-none"
          aria-hidden="true"
        >
          R
        </span>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Content */}
          <div className="max-w-xl animate-fade-in-up">
            {/* Tagline */}
            <p className="text-xs tracking-[0.3em] text-muted-foreground mb-4 font-body uppercase">
              {t.hero.tagline}
            </p>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mb-6 leading-tight text-balance">
              {t.hero.headline}
            </h1>

            {/* Subheadline */}
            <p 
              className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed"
              dangerouslySetInnerHTML={{ 
                __html: t.hero.subheadline.replace(
                  /Dr\.\s*Romina(\s*Raykhshtat)?/gi,
                  (match) => `<span style="white-space: nowrap;">${match.replace(/\s+/g, '\u00A0')}</span>`
                )
              }}
            />

            {/* CTA */}
            <Button asChild className="btn-primary text-base px-10 py-4 h-auto">
              <a href={whatsAppUrl} target="_blank" rel="noopener noreferrer">{t.hero.cta}</a>
            </Button>
          </div>

          {/* Image Placeholder */}
          <div className="relative hidden lg:block animate-fade-in">
            <div className="aspect-[4/5] bg-secondary/30 rounded-3xl overflow-hidden relative">
              {/* Placeholder for professional photo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-muted-foreground/50">
                  <div className="w-24 h-24 rounded-full bg-secondary/50 mx-auto mb-4" />
                  <p className="text-sm">Professional Photo</p>
                </div>
              </div>

              {/* Decorative line art overlay */}
              <svg 
                className="absolute inset-0 w-full h-full opacity-10"
                viewBox="0 0 400 500"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              >
                <path d="M200 50 Q250 100, 280 200 Q300 300, 250 400 Q220 450, 200 480" />
                <circle cx="200" cy="100" r="30" />
              </svg>
            </div>

            {/* Accent decoration */}
            <div className="absolute -bottom-4 -start-4 w-24 h-24 bg-secondary rounded-full opacity-50" />
            <div className="absolute -top-4 -end-4 w-16 h-16 bg-secondary rounded-full opacity-30" />
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 inset-x-0 h-px accent-line" />
    </section>
  );
}
