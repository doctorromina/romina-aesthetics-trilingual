import { MapPin, MessageCircle, Mail, Send, Map } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { useLocale } from '@/contexts/LocaleContext';
import { LtrWrapper } from '@/components/LocalizedText';
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
  const { t, whatsAppUrl } = useLocale();

  return (
    <>
      <title>{t.contact.title} | {t.meta.title}</title>
      
      {/* Hero */}
      <section className="py-16 md:py-20 gradient-hero">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            {t.contact.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            {/* WhatsApp Booking Card */}
            <div className="bg-[#25D366]/10 rounded-2xl p-8 border border-[#25D366]/20 mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-heading font-semibold text-primary">
                    {t.contact.bookViaWhatsApp}
                  </h2>
                  <p className="text-muted-foreground">
                    {t.contact.bookDescription}
                  </p>
                </div>
              </div>
              <Button
                asChild
                size="lg"
                className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white text-lg py-6"
              >
                <a href={whatsAppUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={22} className="me-3" />
                  <span>WhatsApp</span>
                </a>
              </Button>
            </div>

            {/* Telegram Card */}
            <div className="bg-[#0088cc]/10 rounded-2xl p-8 border border-[#0088cc]/20 mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-[#0088cc] flex items-center justify-center">
                  <Send className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-heading font-semibold text-primary">
                    {t.telegram.title}
                  </h2>
                  <p className="text-muted-foreground">
                    {t.telegram.description}
                  </p>
                </div>
              </div>
              <Button
                asChild
                size="lg"
                className="w-full bg-[#0088cc] hover:bg-[#0077b5] text-white text-lg py-6"
              >
                <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">
                  <Send size={22} className="me-3" />
                  {t.telegram.cta}
                </a>
              </Button>
            </div>

            {/* Contact Info Cards */}
            <div className="grid gap-4 mb-8">
              <div className="bg-muted/30 rounded-2xl p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-primary">{t.contact.info.email}</h3>
                  <LtrWrapper className="text-muted-foreground">info@drromina.com</LtrWrapper>
                </div>
              </div>
            </div>

            {/* Locations */}
            <div>
              <h3 className="font-heading font-semibold text-primary mb-6 text-xl">
                {t.locations.title}
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {t.locations.items.map((location, index) => (
                  <div 
                    key={index}
                    className="bg-muted/30 rounded-2xl p-6 hover:bg-muted/50 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center mx-auto mb-4">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    
                    <h4 className="text-lg font-heading font-semibold text-primary mb-2 text-center">
                      {location.name}
                    </h4>
                    
                    <p className="text-sm text-muted-foreground mb-1 text-center">
                      {location.address}
                    </p>
                    
                    <p className="text-xs text-muted-foreground/80 mb-4 text-center">
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
                          <Map size={16} className="me-1.5" />
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
                          <WazeLogo size={16} className="me-1.5 text-[#33CCFF]" />
                          <span>Waze</span>
                        </a>
                      </Button>
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
          </div>
        </div>
      </section>
    </>
  );
}
