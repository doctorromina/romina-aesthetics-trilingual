import { useLocale } from '@/contexts/LocaleContext';

export function AboutPage() {
  const { t } = useLocale();

  const credentials = [
    { label: t.about.credentials.education, value: t.about.credentials.educationValue },
    { label: t.about.credentials.license, value: t.about.credentials.licenseValue },
    { label: t.about.credentials.specializations, value: t.about.credentials.specializationsValue },
    { label: t.about.credentials.languages, value: t.about.credentials.languagesValue },
    { label: t.about.credentials.locations, value: t.about.credentials.locationsValue },
  ];

  return (
    <>
      <title>{t.about.title} | {t.meta.title}</title>
      
      {/* Hero Section */}
      <section className="relative section-padding gradient-hero overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-[3/4] relative max-w-md mx-auto">
                <img 
                  src="/images/dr-romina-about.jpeg"
                  alt="Dr. Romina Raykhshtat"
                  className="w-full h-full object-cover photo-organic-2 shadow-2xl"
                  loading="eager"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -end-4 w-32 h-32 border-2 border-secondary photo-organic-3" />
              <div className="absolute -top-3 -start-3 w-12 h-12 rounded-full bg-secondary/25" />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4 leading-tight">
                {t.about.heroHeading}
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                <span 
                  dangerouslySetInnerHTML={{ 
                    __html: t.about.heroSubheading.replace(
                      /Dr\.\s*Romina(\s*Raykhshtat)?/gi,
                      (match) => `<span translate="no" style="white-space: nowrap;">${match.replace(/\s+/g, '\u00A0')}</span>`
                    )
                  }}
                />
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="scroll-reveal grid lg:grid-cols-5 gap-12 items-start">
              <div className="lg:col-span-3 space-y-6">
                {t.about.bio.map((paragraph, index) => (
                  <p key={index} className="text-lg text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="lg:col-span-2 hidden lg:block">
                <img 
                  src="/images/dr-romina-hero.jpeg"
                  alt="Dr. Romina Raykhshtat"
                  className="w-full photo-organic-3 shadow-lg sticky top-24"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="scroll-reveal">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                {t.about.philosophy.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                {t.about.philosophy.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="scroll-reveal max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-8 text-center">
              {t.about.credentials.title}
            </h2>
            
            <div className="bg-muted/30 rounded-2xl p-6 md:p-8">
              <dl className="space-y-4">
                {credentials.map((item, index) => (
                  <div key={index} className="flex flex-col sm:flex-row sm:gap-4">
                    <dt className="font-semibold text-primary sm:w-40 flex-shrink-0">
                      {item.label}
                    </dt>
                    <dd className="text-muted-foreground">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
