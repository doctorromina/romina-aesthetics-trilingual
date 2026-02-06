import { useLocale } from '@/contexts/LocaleContext';
import { Button } from '@/components/ui/button';
import { Quote, Fingerprint, RefreshCw, Eye } from 'lucide-react';

export function PhilosophySection() {
  const { t, whatsAppUrl } = useLocale();

  const pillarIcons = [Fingerprint, RefreshCw, Eye];

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 start-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Quote */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <Quote className="w-12 h-12 text-secondary mx-auto mb-6 rotate-180" />
          <blockquote className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary leading-tight">
            {t.philosophy.quote}
          </blockquote>
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
                <div className="w-16 h-16 rounded-full bg-secondary/30 flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary/50 transition-colors">
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
        <div className="mt-16 md:mt-20 relative rounded-2xl overflow-hidden">
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
