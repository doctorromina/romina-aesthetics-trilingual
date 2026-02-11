import { Map, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useLocale } from '@/contexts/LocaleContext';
import { Button } from '@/components/ui/button';
import { WazeLogo } from '@/components/icons/WazeLogo';

export function LocationsSection() {
  const { t } = useLocale();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="absolute top-0 end-0 w-64 h-64 bg-secondary/8 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
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

        <div className="scroll-reveal-stagger grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {t.locations.items.map((location, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-border/30 bg-background transition-shadow duration-300"
              >
                <div className="p-6 md:p-8">
                  <h3 className="text-lg font-heading font-bold text-primary mb-1">
                    {location.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {location.address}
                  </p>

                  {/* Parking nav buttons */}
                  <div className="flex gap-2 mb-1.5">
                    <Button asChild variant="outline" size="sm" className="text-xs">
                      <a href={location.parkingMaps} target="_blank" rel="noopener noreferrer">
                        <Map size={14} className="me-1.5" />
                        Google Maps
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="sm" className="text-xs bg-[#33CCFF]/8 border-[#33CCFF]/30 hover:bg-[#33CCFF]/15">
                      <a href={location.parkingWaze} target="_blank" rel="noopener noreferrer">
                        <WazeLogo size={14} className="me-1.5 text-[#33CCFF]" />
                        Waze
                      </a>
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground/60 mb-4">
                    {t.locations.navigateToParking} — {location.parkingLabel}
                  </p>

                  {/* Expand toggle */}
                  <button
                    onClick={() => toggle(index)}
                    className="flex items-center gap-1.5 text-sm text-muted-foreground/70 hover:text-primary transition-colors duration-200"
                  >
                    <span>{t.locations.moreDetails}</span>
                    <ChevronDown
                      size={14}
                      strokeWidth={1.8}
                      className={`transition-transform duration-300 ease-out ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                </div>

                {/* Expanded */}
                <div className={`grid transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <div className="px-6 md:px-8 pb-6 md:pb-8">
                      <div className="border-t border-border/20 pt-4">
                        <p className="text-sm text-muted-foreground/70">
                          {location.expandedDetails}
                        </p>
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
