import { MapPin, MessageCircle, Send, Map } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { useLocale } from '@/contexts/LocaleContext';
import { Button } from '@/components/ui/button';
import { WazeLogo } from '@/components/icons/WazeLogo';

const TELEGRAM_URL = 'https://t.me/+s_aXhLyQXoUzYzg0';

// Generate Waze URL from address
function getWazeUrl(address: string): string {
  return `https://waze.com/ul?q=${encodeURIComponent(address)}`;
}

// Hebrew addresses for Waze navigation
const wazeAddresses = [
  'רב ניסנבאום 37, בת ים',
  'דרך מנחם בגין 150, תל אביב',
  'רוטשילד 78, ראשון לציון',
];

export function ContactPage() {
  const { t, whatsAppUrl, locale } = useLocale();

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
            
            {/* WhatsApp Card — clean, elegant */}
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

            {/* Telegram Card — RU only, matching style */}
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
              <div className="grid md:grid-cols-3 gap-6">
                {t.locations.items.map((location, index) => (
                  <div 
                    key={index}
                    className="rounded-2xl border border-border/40 p-6 hover:border-secondary/50 hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-full bg-secondary/40 flex items-center justify-center mx-auto mb-4">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    
                    <h4 className="text-base font-heading font-semibold text-primary mb-2 text-center">
                      {location.name}
                    </h4>
                    
                    <p className="text-sm text-muted-foreground mb-1 text-center">
                      {location.address}
                    </p>
                    
                    <p className="text-xs text-muted-foreground/70 mb-4 text-center">
                      {location.details}
                    </p>

                    {/* Navigation Buttons */}
                    <div className="flex gap-2 mb-4">
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="flex-1"
                      >
                        <a href={location.mapsUrl} target="_blank" rel="noopener noreferrer">
                          <Map size={14} className="me-1.5" />
                          <span>Google</span>
                        </a>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="flex-1 bg-[#33CCFF]/10 border-[#33CCFF]/30 hover:bg-[#33CCFF]/20"
                      >
                        <a href={getWazeUrl(wazeAddresses[index])} target="_blank" rel="noopener noreferrer">
                          <WazeLogo size={14} className="me-1.5 text-[#33CCFF]" />
                          <span>Waze</span>
                        </a>
                      </Button>
                    </div>

                    {/* QR Code */}
                    <div className="flex flex-col items-center gap-2 pt-4 border-t border-border/30">
                      <div className="bg-white p-2 rounded-lg">
                        <QRCodeSVG 
                          value={location.mapsUrl} 
                          size={72}
                          level="M"
                          includeMargin={false}
                        />
                      </div>
                      <p className="text-xs text-muted-foreground/60">
                        {t.locations.scanQR}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
