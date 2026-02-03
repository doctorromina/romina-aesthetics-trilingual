import { useLocale } from '@/contexts/LocaleContext';
import { CheckCircle } from 'lucide-react';

export function AboutPage() {
  const { t } = useLocale();

  return (
    <>
      <title>{t.about.title} | {t.meta.title}</title>
      
      {/* Hero Section */}
      <section className="section-padding gradient-hero">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="aspect-[3/4] bg-secondary/20 rounded-3xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-muted-foreground/50">
                    <div className="w-24 h-24 rounded-full bg-secondary/50 mx-auto mb-4" />
                    <p className="text-sm" translate="no">Dr. Romina</p>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-4 -end-4 w-32 h-32 border-2 border-secondary rounded-3xl" />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
                <span translate="no">{t.about.title}</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {t.about.intro}
              </p>

              {/* Credentials */}
              <div className="bg-muted/30 rounded-2xl p-6 mb-8">
                <h3 className="font-heading font-semibold text-primary mb-4">
                  {t.about.credentials.title}
                </h3>
                <ul className="space-y-3">
                  {t.about.credentials.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6 text-center">
              {t.about.philosophy.title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              {t.about.philosophy.description}
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-8 text-center">
              {t.about.story.title}
            </h2>
            
            <div className="space-y-6">
              {t.about.story.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-lg text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
