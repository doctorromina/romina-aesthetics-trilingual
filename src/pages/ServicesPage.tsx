import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Sparkles, PenTool, Heart, Atom, Droplets, Zap } from 'lucide-react';
import { useLocale } from '@/contexts/LocaleContext';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const serviceIcons = {
  botulinum: Sparkles,
  sculpting: PenTool,
  lips: Heart,
  collagen: Atom,
  skinQuality: Droplets,
  ultraformer: Zap,
};

const serviceKeys = ['botulinum', 'sculpting', 'lips', 'collagen', 'skinQuality', 'ultraformer'] as const;

export function ServicesPage() {
  const { t, whatsAppUrl } = useLocale();
  const location = useLocation();

  // Scroll to anchor on hash change
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <>
      <title>{t.services.title} | {t.meta.title}</title>
      
      {/* Hero */}
      <section className="py-16 md:py-20 gradient-hero relative overflow-hidden">
        {/* Decorative accents */}
        <div className="absolute top-0 end-0 w-72 h-72 rounded-full bg-secondary/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 start-0 w-48 h-48 rounded-full bg-secondary/8 blur-2xl pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          {/* Accent dot + line */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-secondary" />
            <div className="w-2 h-2 rounded-full bg-secondary" />
            <div className="w-8 h-px bg-secondary" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            {t.services.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t.services.intro}
          </p>
        </div>
      </section>

      {/* Quick Navigation */}
      <nav className="sticky top-16 md:top-20 z-30 bg-background/95 backdrop-blur-sm border-b border-border/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex overflow-x-auto gap-2 py-3 scrollbar-hide">
            {serviceKeys.map((key) => {
              const Icon = serviceIcons[key];
              const service = t.services.items[key];
              
              return (
                <a
                  key={key}
                  href={`#${service.id}`}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted hover:bg-secondary/50 transition-colors whitespace-nowrap text-sm font-medium"
                >
                  <Icon size={16} />
                  <span>{service.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Services */}
      <div className="section-padding bg-background relative overflow-hidden">
        {/* Subtle brand symbol watermark */}
        <div className="absolute top-1/4 end-0 pointer-events-none select-none opacity-[0.02]">
          <img 
            src="/images/brand-symbol.svg" 
            alt="" 
            aria-hidden="true"
            className="w-[400px] h-[400px]"
          />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="space-y-24">
            {serviceKeys.map((key, index) => {
              const Icon = serviceIcons[key];
              const service = t.services.items[key];
              const isEven = index % 2 === 0;
              
              return (
                <section 
                  key={key} 
                  id={service.id}
                  className="scroll-reveal scroll-mt-32 relative"
                >
                  <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-start ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                    {/* Content */}
                    <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-secondary/50 flex items-center justify-center border border-secondary/30">
                          <Icon className="w-7 h-7 text-primary" />
                        </div>
                        <div>
                          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary">
                            {service.name}
                          </h2>
                          {/* Small accent line under title */}
                          <div className="w-10 h-0.5 bg-secondary mt-2 rounded-full" />
                        </div>
                      </div>

                      <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                        {service.fullDesc}
                      </p>

                      <Button asChild className="btn-primary">
                        <a href={whatsAppUrl} target="_blank" rel="noopener noreferrer">
                          {t.services.bookConsultation}
                        </a>
                      </Button>
                    </div>

                    {/* FAQ */}
                    <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div className="bg-muted/20 rounded-2xl p-6 md:p-8 border border-border/30">
                        <h3 className="font-heading font-semibold text-primary mb-6 text-lg flex items-center gap-2">
                          <div className="w-1.5 h-5 bg-secondary rounded-full" />
                          FAQ
                        </h3>
                        
                        <Accordion type="single" collapsible className="space-y-2">
                          {service.faq.map((item, i) => (
                            <AccordionItem 
                              key={i} 
                              value={`${key}-faq-${i}`}
                              className="border-b border-border/50 last:border-0"
                            >
                              <AccordionTrigger className="text-start text-primary hover:no-underline py-4">
                                {item.q}
                              </AccordionTrigger>
                              <AccordionContent className="text-muted-foreground pb-4">
                                {item.a}
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  {index < serviceKeys.length - 1 && (
                    <div className="flex items-center gap-4 mt-24">
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary/50" />
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />
                    </div>
                  )}
                </section>
              );
            })}
          </div>

          {/* Disclaimer */}
          <div className="mt-20 pt-12 border-t border-border/50">
            <p className="text-sm text-muted-foreground text-center max-w-3xl mx-auto">
              {t.services.disclaimer}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
