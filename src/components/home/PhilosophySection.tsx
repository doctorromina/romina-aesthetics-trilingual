import { useLocale } from '@/contexts/LocaleContext';
import { Button } from '@/components/ui/button';
import { Quote, Fingerprint, RefreshCw, Eye } from 'lucide-react';

export function PhilosophySection() {
  const { t, whatsAppUrl } = useLocale();

  const pillarIcons = [Fingerprint, RefreshCw, Eye];

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 start-0 w-96 h-96 bg-secondary/15 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 end-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />
      
      {/* Brand symbol watermark */}
      <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.02]">
        <img 
          src="/images/brand-symbol.svg" 
          alt="" 
          aria-hidden="true"
          className="w-[500px] h-[500px]"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Quote */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <Quote className="w-12 h-12 text-secondary mx-auto mb-6 rotate-180" />
          <blockquote className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary leading-tight">
            {t.philosophy.quote}
          </blockquote>
          {/* Accent line under quote */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="w-8 h-px bg-secondary" />
            <div className="w-2 h-2 rounded-full bg-secondary" />
            <div className="w-8 h-px bg-secondary" />
          </div>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {t.philosophy.pillars.map((pillar, index) => {
            const Icon = pillarIcons[index];
            
            return (
              <div 
                key={index}
                className="text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-secondary/30 flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary/50 transition-colors border border-secondary/20">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-heading font-semibold text-primary mb-3">
                  {pillar.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA with background image */}
        <div className="mt-16 md:mt-20 relative photo-organic-3 overflow-hidden">
          <img 
            src="/images/dr-romina-cta.jpeg"
            alt="Dr. Romina Raykhshtat"
            className="w-full h-72 md:h-96 object-cover object-top"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent" />
          <div className="absolute bottom-0 inset-x-0 p-8 text-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg">
              <a href={whatsAppUrl} target="_blank" rel="noopener noreferrer">
                {t.hero.cta}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
