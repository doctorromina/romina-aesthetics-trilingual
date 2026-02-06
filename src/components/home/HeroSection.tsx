import { useLocale } from '@/contexts/LocaleContext';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  const { t, whatsAppUrl } = useLocale();

  return (
    <section className="relative min-h-[90vh] flex items-center gradient-hero overflow-hidden">
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

          {/* Hero Photo */}
          <div className="relative hidden lg:block animate-fade-in">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative shadow-2xl">
              <img 
                src="/images/dr-romina-hero.jpeg"
                alt="Dr. Romina Raykhshtat"
                className="w-full h-full object-cover object-top"
                loading="eager"
              />
              {/* Soft gradient overlay on text side */}
              <div className="absolute inset-0 bg-gradient-to-r rtl:bg-gradient-to-l from-background/30 via-transparent to-transparent" />
            </div>

            {/* Accent decoration */}
            <div className="absolute -bottom-4 -start-4 w-24 h-24 bg-secondary rounded-full opacity-50" />
            <div className="absolute -top-4 -end-4 w-16 h-16 bg-secondary rounded-full opacity-30" />
          </div>

          {/* Mobile Hero Photo */}
          <div className="lg:hidden animate-fade-in">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl max-w-sm mx-auto">
              <img 
                src="/images/dr-romina-hero.jpeg"
                alt="Dr. Romina Raykhshtat"
                className="w-full h-full object-cover object-top"
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
