import { MapPin, Map, ParkingSquare } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { useLocale } from '@/contexts/LocaleContext';
import { Button } from '@/components/ui/button';
import { WazeLogo } from '@/components/icons/WazeLogo';

export function LocationsSection() {
  const { t } = useLocale();

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Accent blob */}
      <div className="absolute top-0 end-0 w-64 h-64 bg-secondary/8 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="scroll-reveal text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-secondary" />
            <div className="w-2 h-2 rounded-full bg-secondary" />
            <div className="w-8 h-px bg-secondary" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            {t.locations.title}
          </h2>
        </div>

        {/* Location Cards */}
        <div className="scroll-reveal-stagger grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {t.locations.items.map((location, index) => (
            <div 
              key={index}
              className="bg-muted/30 rounded-2xl p-6 hover:bg-muted/50 transition-colors border border-border/30"
            >
              <div className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center mx-auto mb-4 border border-secondary/30">
                <MapPin className="w-5 h-5 text-primary" strokeWidth={1.8} />
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

              {/* Clinic Navigation */}
              <div className="flex gap-2 mb-4">
                <Button asChild variant="outline" size="sm" className="flex-1">
                  <a href={location.mapsUrl} target="_blank" rel="noopener noreferrer">
                    <Map size={14} className="me-1.5" />
                    <span>Google</span>
                  </a>
                </Button>
                <Button asChild variant="outline" size="sm" className="flex-1 bg-[#33CCFF]/10 border-[#33CCFF]/30 hover:bg-[#33CCFF]/20">
                  <a href={location.parkingWaze} target="_blank" rel="noopener noreferrer">
                    <WazeLogo size={14} className="me-1.5 text-[#33CCFF]" />
                    <span>Waze</span>
                  </a>
                </Button>
              </div>

              {/* Parking */}
              <div className="border-t border-border/30 pt-3 mb-4">
                <div className="flex items-center justify-center gap-1.5 mb-2">
                  <ParkingSquare className="w-3.5 h-3.5 text-muted-foreground" strokeWidth={1.8} />
                  <span className="text-xs font-medium text-muted-foreground">
                    {t.locations.parking}: {location.parkingName}
                  </span>
                </div>
                <div className="flex gap-2">
                  <Button asChild variant="ghost" size="sm" className="flex-1 h-7 text-xs">
                    <a href={location.parkingMaps} target="_blank" rel="noopener noreferrer">
                      <Map size={12} className="me-1" />
                      <span>Google</span>
                    </a>
                  </Button>
                  <Button asChild variant="ghost" size="sm" className="flex-1 h-7 text-xs">
                    <a href={location.parkingWaze} target="_blank" rel="noopener noreferrer">
                      <WazeLogo size={12} className="me-1 text-[#33CCFF]" />
                      <span>Waze</span>
                    </a>
                  </Button>
                </div>
              </div>

              {/* QR Code */}
              <div className="flex flex-col items-center gap-2 pt-4 border-t border-border/50">
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
