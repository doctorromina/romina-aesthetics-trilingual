import { Instagram } from 'lucide-react';
import { useLocale } from '@/contexts/LocaleContext';

export function InstagramSection() {
  const { t } = useLocale();

  // Placeholder grid items
  const placeholders = Array(6).fill(null);

  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            {t.instagram.title}
          </h2>
          <a
            href="https://www.instagram.com/doctor_romina"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            dir="ltr"
          >
            <Instagram size={20} />
            <span>{t.instagram.handle}</span>
          </a>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {placeholders.map((_, index) => (
            <a
              key={index}
              href="https://www.instagram.com/doctor_romina"
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square bg-secondary/20 rounded-xl overflow-hidden group hover:opacity-90 transition-opacity"
            >
              <div className="w-full h-full flex items-center justify-center">
                <Instagram className="w-8 h-8 text-secondary group-hover:scale-110 transition-transform" />
              </div>
            </a>
          ))}
        </div>

        {/* Follow Button */}
        <div className="text-center mt-8">
          <a
            href="https://www.instagram.com/doctor_romina"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors font-medium"
            dir="ltr"
          >
            <Instagram size={20} />
            <span>{t.instagram.handle}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
