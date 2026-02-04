import { MapPin } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { useLocale } from '@/contexts/LocaleContext';

export function LocationsSection() {
  const { t } = useLocale();

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
              <div className="flex flex-col items-center gap-2 mt-4 pt-4 border-t border-border/50">
                <div className="bg-white p-2 rounded-lg">
                  <QRCodeSVG 
                    value={location.mapsUrl} 
                    size={80}
                    level="M"
                    includeMargin={false}
                  />
                </div>
                <p className="text-xs text-muted-foreground/70">
                  {t.locations.scanQR}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
