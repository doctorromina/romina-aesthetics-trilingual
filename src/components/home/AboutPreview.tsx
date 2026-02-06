import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useLocale } from '@/contexts/LocaleContext';

export function AboutPreview() {
  const { t, getPath, dir } = useLocale();
  
  const Arrow = dir === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Subtle periwinkle accent */}
      <div className="absolute top-0 end-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1 relative">
            <div className="aspect-square relative">
              <img 
                src="/images/dr-romina-about.jpeg"
                alt="Dr. Romina Raykhshtat"
                className="w-full h-full object-cover photo-organic-2 shadow-xl"
                loading="lazy"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -end-4 w-24 h-24 border-2 border-secondary/40 photo-organic-3" />
            <div className="absolute -top-3 -start-3 w-10 h-10 rounded-full bg-secondary/30" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            {/* Accent dot + line */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-secondary" />
              <div className="w-10 h-px bg-secondary" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
              <span translate="no">{t.about.title}</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t.about.bio[0]}
            </p>

            <Link 
              to={getPath('/about')}
              className="inline-flex items-center gap-2 text-primary font-medium group"
            >
              {t.about.readMore}
              <Arrow 
                size={18} 
                className="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" 
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
