import { MapPin, MessageCircle, Send, Map, ParkingSquare, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useLocale } from '@/contexts/LocaleContext';
import { Button } from '@/components/ui/button';
import { WazeLogo } from '@/components/icons/WazeLogo';

const TELEGRAM_URL = 'https://t.me/+s_aXhLyQXoUzYzg0';

export function ContactPage() {
  const { t, whatsAppUrl, locale } = useLocale();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <>
      <title>{t.contact.title} | {t.meta.title}</title>
      
      {/* Hero */}
      <section className="py-16 md:py-20 gradient-hero">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-secondary" />
            <div className="w-2 h-2 rounded-full bg-secondary" />
            <div className="w-8 h-px bg-secondary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            {t.contact.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto space-y-6">
            
            {/* WhatsApp Card */}
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl border border-border/50 bg-background p-6 md:p-8 hover:border-secondary/60 hover:shadow-lg hover:shadow-secondary/10 transition-all duration-500"
            >
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-[#25D366]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#25D366]/20 transition-colors duration-300">
                  <MessageCircle className="w-7 h-7 text-[#25D366]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-lg font-heading font-semibold text-primary mb-1">
                    {t.contact.bookViaWhatsApp}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t.contact.bookDescription}
                  </p>
                </div>
                <div className="hidden sm:block text-muted-foreground/40 group-hover:text-primary/60 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Telegram Card — RU only */}
            {locale === 'ru' && (
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl border border-border/50 bg-background p-6 md:p-8 hover:border-secondary/60 hover:shadow-lg hover:shadow-secondary/10 transition-all duration-500"
              >
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-full bg-[#0088cc]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0088cc]/20 transition-colors duration-300">
                    <Send className="w-7 h-7 text-[#0088cc]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-lg font-heading font-semibold text-primary mb-1">
                      {t.telegram.title}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t.telegram.description}
                    </p>
                  </div>
                  <div className="hidden sm:block text-muted-foreground/40 group-hover:text-primary/60 transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </a>
            )}

            {/* Locations */}
            <div className="pt-8">
              <h3 className="font-heading font-semibold text-primary mb-6 text-xl text-center">
                {t.locations.title}
              </h3>
              <div className="space-y-4">
                {t.locations.items.map((location, index) => {
                  const isOpen = openIndex === index;
                  return (
                    <div
                      key={index}
                      className="rounded-2xl border border-border/40 bg-background shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      {/* Collapsed content — always visible */}
                      <div className="p-6 md:p-8">
                        <div className="flex items-start gap-4 mb-5">
                          <div className="w-10 h-10 rounded-full bg-secondary/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <MapPin className="w-4 h-4 text-primary" strokeWidth={1.8} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-[22px] font-heading font-bold text-primary leading-tight">
                              {location.name}
                            </h4>
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
                            <div className="border-t border-border/30 pt-5 space-y-4">
                              {/* Building details */}
                              <p className="text-sm text-muted-foreground/80">
                                {location.expandedDetails}
                              </p>

                              {/* Parking section */}
                              <div className="flex items-start gap-3">
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
          </div>
        </div>
      </section>
    </>
  );
}
