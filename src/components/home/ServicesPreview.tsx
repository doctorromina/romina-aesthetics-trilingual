import { Link } from 'react-router-dom';
import { Sparkles, PenTool, Heart, Atom, Droplets, Zap, ArrowRight, ArrowLeft } from 'lucide-react';
import { useLocale } from '@/contexts/LocaleContext';
import { Button } from '@/components/ui/button';

const serviceIcons = {
  botulinum: Sparkles,
  sculpting: PenTool,
  lips: Heart,
  collagen: Atom,
  skinQuality: Droplets,
  ultraformer: Zap,
};

export function ServicesPreview() {
  const { t, getPath, dir } = useLocale();
  
  const Arrow = dir === 'rtl' ? ArrowLeft : ArrowRight;

  const services = [
    { key: 'botulinum' as const, anchor: 'botulinum' },
    { key: 'sculpting' as const, anchor: 'sculpting' },
    { key: 'lips' as const, anchor: 'lips' },
    { key: 'collagen' as const, anchor: 'collagen' },
    { key: 'skinQuality' as const, anchor: 'skin-quality' },
    { key: 'ultraformer' as const, anchor: 'ultraformer' },
  ];

  const getServicePath = (anchor: string) => {
    const basePath = getPath('/services');
    return `${basePath}#${anchor}`;
  };

  return (
    <section className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Subtle background accent image */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none select-none">
        <img 
          src="/images/dr-romina-services.jpeg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            {t.services.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t.services.intro}
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.key];
            const serviceData = t.services.items[service.key];
            
            return (
              <Link
                key={service.key}
                to={getServicePath(service.anchor)}
                className="card-service group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-secondary/50 flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-heading font-semibold text-primary mb-3">
                  {serviceData.name}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {serviceData.shortDesc}
                </p>

                {/* Arrow */}
                <div className="mt-auto pt-4 flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="me-2">{t.about.readMore}</span>
                  <Arrow size={16} className="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="btn-outline">
            <Link to={getPath('/services')}>
              {t.services.viewAll}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
