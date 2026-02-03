import { useLocale } from '@/contexts/LocaleContext';

export function PrivacyPage() {
  const { t } = useLocale();

  return (
    <>
      <title>{t.privacy.title} | {t.meta.title}</title>
      
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              {t.privacy.title}
            </h1>
            
            <p className="text-muted-foreground mb-8">
              {t.privacy.lastUpdated}: 2024
            </p>

            <div className="prose prose-slate max-w-none">
              <div className="space-y-6 text-muted-foreground leading-relaxed whitespace-pre-line">
                {t.privacy.content}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
