import { MapPin, MessageCircle } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { useLocale } from '@/contexts/LocaleContext';
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
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {t.locations.items.map((location, index) => (
            <div 
              key={index}
              className="bg-muted/30 rounded-2xl p-6 hover:bg-muted/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="text-lg font-heading font-semibold text-primary mb-2 text-center">
                {location.name}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-1 text-center">
                {location.address}
              </p>
              
              <p className="text-xs text-muted-foreground/80 mb-4 text-center">
                {location.details}
              </p>

              {/* QR Code */}
              <div className="flex flex-col items-center mb-4">
                <a 
                  href={location.mapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <QRCodeSVG 
                    value={location.mapsUrl}
                    size={100}
                    level="M"
                    bgColor="#ffffff"
                    fgColor="#434951"
                  />
                </a>
                <span className="text-xs text-muted-foreground mt-2">
                  {t.locations.scanQR}
                </span>
              </div>

              <Button
                asChild
                size="sm"
                className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white"
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
