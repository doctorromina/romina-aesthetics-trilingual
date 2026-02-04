import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useLocale } from '@/contexts/LocaleContext';

export function AboutPreview() {
  const { t, getPath, dir } = useLocale();
  
  const Arrow = dir === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="aspect-square bg-secondary/20 rounded-3xl overflow-hidden relative">
              {/* Placeholder for professional photo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-muted-foreground/50">
                  <div className="w-20 h-20 rounded-full bg-secondary/50 mx-auto mb-4" />
                  <p className="text-sm">
                    <span translate="no">Dr. Romina</span>
                  </p>
                </div>
              </div>
              
              {/* Decorative element */}
              <div className="absolute -bottom-6 -end-6 w-32 h-32 border-2 border-secondary rounded-3xl" />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
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
