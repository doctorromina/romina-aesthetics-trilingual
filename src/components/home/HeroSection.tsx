import { useLocale } from '@/contexts/LocaleContext';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  const { t, whatsAppUrl } = useLocale();

  return (
    <section className="relative min-h-[90vh] flex items-center gradient-hero overflow-hidden">
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
          {/* Content */}
          <div className="max-w-xl animate-fade-in-up">
            {/* Accent dot + line */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-secondary" />
              <div className="w-12 h-px bg-secondary" />
            </div>

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
            <div className="aspect-[4/5] relative">
              <img 
                src="/images/dr-romina-hero.jpeg"
                alt="Dr. Romina Raykhshtat"
                className="w-full h-full object-cover object-top rounded-3xl"
                loading="eager"
              />
              {/* Gradient edges that blend into background */}
              <div className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{
                  background: `
                    linear-gradient(to right, hsl(var(--background)) 0%, transparent 25%, transparent 100%),
                    linear-gradient(to left, hsl(var(--background)) 0%, transparent 20%, transparent 100%),
                    linear-gradient(to bottom, hsl(var(--background)) 0%, transparent 15%, transparent 85%, hsl(var(--background)) 100%)
                  `
                }}
              />
              {/* Stronger gradient on text side */}
              <div className="absolute inset-0 rounded-3xl pointer-events-none rtl:hidden"
                style={{ background: 'linear-gradient(to right, hsl(var(--background) / 0.6) 0%, transparent 30%)' }}
              />
              <div className="absolute inset-0 rounded-3xl pointer-events-none hidden rtl:block"
                style={{ background: 'linear-gradient(to left, hsl(var(--background) / 0.6) 0%, transparent 30%)' }}
              />
            </div>

            {/* Brand accent decorations */}
            <div className="absolute -bottom-6 -start-6 w-28 h-28 rounded-full bg-secondary/40" />
            <div className="absolute -top-4 -end-4 w-16 h-16 rounded-full bg-secondary/25" />
            {/* Corner accent line */}
            <div className="absolute -bottom-3 start-20 w-20 h-px bg-secondary/50" />
          </div>

          {/* Mobile Hero Photo */}
          <div className="lg:hidden animate-fade-in">
            <div className="relative max-w-sm mx-auto">
              <img 
                src="/images/dr-romina-hero.jpeg"
                alt="Dr. Romina Raykhshtat"
                className="w-full aspect-[3/4] object-cover object-top rounded-2xl"
                loading="eager"
              />
              <div className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  background: `
                    linear-gradient(to bottom, hsl(var(--background)) 0%, transparent 10%, transparent 85%, hsl(var(--background)) 100%),
                    linear-gradient(to right, hsl(var(--background) / 0.3) 0%, transparent 15%, transparent 85%, hsl(var(--background) / 0.3) 100%)
                  `
                }}
              />
              {/* Mobile accent */}
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
