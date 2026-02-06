import { Link } from 'react-router-dom';
import { Instagram, MessageCircle, Phone, Mail } from 'lucide-react';
import { useLocale } from '@/contexts/LocaleContext';
import { LogoWithTagline } from './Logo';

const WHATSAPP_URL = 'https://wa.me/972534706919';

export function Footer() {
  const { t, getPath, locale } = useLocale();
  
  const quickLinks = [
    { href: getPath('/'), label: t.nav.home },
    { href: getPath('/about'), label: t.nav.about },
    { href: getPath('/services'), label: t.nav.services },
    { href: getPath('/contact'), label: t.nav.contact },
  ];

  const legalLinks = [
    { href: getPath('/privacy'), label: t.footer.privacy },
    { href: getPath('/terms'), label: t.footer.terms },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo, Avatar & Social */}
          <div className="lg:col-span-1">
            <LogoWithTagline />
            
            {/* Avatar */}
            <div className="mt-4 flex justify-center md:justify-start">
              <div className="w-16 h-16 rounded-full overflow-hidden shadow-md border-2 border-secondary/50">
                <img 
                  src="/images/dr-romina-bw.jpeg"
                  alt="Dr. Romina Raykhshtat"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="mt-4 flex gap-3 justify-center md:justify-start">
              <a
                href="https://www.instagram.com/doctor_romina"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} className="text-primary" strokeWidth={1.8} />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} className="text-primary" strokeWidth={1.8} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-start">
            <h4 className="font-heading text-lg font-semibold text-primary mb-4">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center md:text-start">
            <h4 className="font-heading text-lg font-semibold text-primary mb-4">
              {t.footer.contact}
            </h4>
            <ul className="space-y-2">
              <li className="group/reveal">
                <a
                  href="tel:+972534706919"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone size={14} className="text-muted-foreground/60 group-hover/reveal:text-primary transition-colors" strokeWidth={1.8} />
                  <span className="group-hover/reveal:hidden transition-all">{t.footer.callUs}</span>
                  <span className="hidden group-hover/reveal:inline transition-all" dir="ltr">+972-53-470-6919</span>
                </a>
              </li>
              <li className="group/reveal">
                <a
                  href="mailto:info@drromina.com"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail size={14} className="text-muted-foreground/60 group-hover/reveal:text-primary transition-colors" strokeWidth={1.8} />
                  <span className="group-hover/reveal:hidden transition-all">{t.footer.emailUs}</span>
                  <span className="hidden group-hover/reveal:inline transition-all" dir="ltr">info@drromina.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="text-center md:text-start">
            <h4 className="font-heading text-lg font-semibold text-primary mb-4">
              {t.footer.legal}
            </h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 md:px-6 py-6">
          <p className="text-xs text-muted-foreground text-center max-w-3xl mx-auto">
            {t.footer.disclaimer}
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border bg-muted/50">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <p className="text-xs text-muted-foreground text-center">
            {currentYear} {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
