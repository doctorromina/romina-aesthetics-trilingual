import { MapPin, MessageCircle } from 'lucide-react';
import { useLocale } from '@/contexts/LocaleContext';
import { LtrWrapper } from '@/components/LocalizedText';
import { Button } from '@/components/ui/button';

export function LocationsSection() {
  const { t, whatsAppUrl } = useLocale();

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            {t.locations.title}
          </h2>
        </div>

        {/* Location Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {t.locations.items.map((location, index) => (
            <div 
              key={index}
              className="bg-muted/30 rounded-2xl p-6 text-center hover:bg-muted/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="text-lg font-heading font-semibold text-primary mb-2">
                {location.name}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-4">
                {location.address}
              </p>

              <Button
                asChild
                size="sm"
                className="bg-[#25D366] hover:bg-[#20BD5A] text-white"
              >
                <a href={whatsAppUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={16} className="me-2" />
                  <span>WhatsApp</span>
                </a>
              </Button>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          {t.locations.bookVia}
        </p>
      </div>
    </section>
  );
}
