import { MapPin, Map, ParkingSquare, ChevronDown, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { useLocale } from '@/contexts/LocaleContext';
import { Button } from '@/components/ui/button';
import { WazeLogo } from '@/components/icons/WazeLogo';

export function LocationsSection() {
  const { t, whatsAppUrl } = useLocale();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="section-padding bg-background relative overflow-hidden">
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
          {t.locations.items.map((location, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-border/30 bg-background shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Collapsed — always visible */}
                <div className="p-6 md:p-8">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-9 h-9 rounded-full bg-secondary/50 flex items-center justify-center flex-shrink-0 mt-0.5 border border-secondary/30">
                      <MapPin className="w-4 h-4 text-primary" strokeWidth={1.8} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[22px] font-heading font-bold text-primary leading-tight">
                        {location.name}
                      </h3>
                      <p className="text-base text-muted-foreground mt-1">
                        {location.address}
                      </p>
                    </div>
                  </div>

                  {/* Clinic nav + WhatsApp */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Button asChild variant="outline" size="sm" className="text-xs">
                      <a href={location.mapsUrl} target="_blank" rel="noopener noreferrer">
                        <Map size={14} className="me-1.5" />
                        Google Maps
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="sm" className="text-xs bg-[#33CCFF]/8 border-[#33CCFF]/30 hover:bg-[#33CCFF]/15">
                      <a href={`https://waze.com/ul?q=${encodeURIComponent(location.address)}&navigate=yes`} target="_blank" rel="noopener noreferrer">
                        <WazeLogo size={14} className="me-1.5 text-[#33CCFF]" />
                        Waze
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="sm" className="text-xs bg-[#25D366]/8 border-[#25D366]/30 hover:bg-[#25D366]/15">
                      <a href={whatsAppUrl} target="_blank" rel="noopener noreferrer">
                        <MessageCircle size={14} className="me-1.5 text-[#25D366]" />
                        WhatsApp
                      </a>
                    </Button>
                  </div>

                  {/* Expand toggle */}
                  <button
                    onClick={() => toggle(index)}
                    className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    <span>{t.locations.moreDetails}</span>
                    <ChevronDown
                      size={16}
                      strokeWidth={1.8}
                      className={`transition-transform duration-300 ease-out ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                </div>

                {/* Expanded content */}
                <div
                  className={`grid transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0">
                      <div className="border-t border-border/30 pt-4 space-y-3">
                        <p className="text-sm text-muted-foreground/80">
                          {location.expandedDetails}
                        </p>

                        <div className="flex items-start gap-2.5">
                          <ParkingSquare className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" strokeWidth={1.8} />
                          <div className="space-y-2">
                            <p className="text-sm font-medium text-primary">
                              {t.locations.parking}: {location.parkingName}
                            </p>
                            <div className="flex gap-2">
                              <Button asChild variant="outline" size="sm" className="h-7 text-xs">
                                <a href={location.parkingMaps} target="_blank" rel="noopener noreferrer">
                                  <Map size={12} className="me-1" />
                                  Google Maps
                                </a>
                              </Button>
                              <Button asChild variant="outline" size="sm" className="h-7 text-xs bg-[#33CCFF]/8 border-[#33CCFF]/30 hover:bg-[#33CCFF]/15">
                                <a href={location.parkingWaze} target="_blank" rel="noopener noreferrer">
                                  <WazeLogo size={12} className="me-1 text-[#33CCFF]" />
                                  Waze
                                </a>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
