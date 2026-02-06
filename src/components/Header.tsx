import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLocale } from '@/contexts/LocaleContext';
import { LogoCompact } from './Logo';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Button } from '@/components/ui/button';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, getPath, locale, whatsAppUrl } = useLocale();
  const location = useLocation();

  const navItems = [
    { href: getPath('/'), label: t.nav.home },
    { href: getPath('/about'), label: t.nav.about },
    { href: getPath('/services'), label: t.nav.services },
    { href: getPath('/contact'), label: t.nav.contact },
  ];

  const isActive = (href: string) => {
    if (href === getPath('/')) {
      return location.pathname === href || location.pathname === `/${locale}`;
    }
    return location.pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to={getPath('/')} className="z-50">
            <LogoCompact />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`
                  text-sm font-medium transition-colors relative
                  ${isActive(item.href) 
                    ? 'text-primary' 
                    : 'text-muted-foreground hover:text-primary'}
                  after:absolute after:bottom-0 after:inset-inline-start-0 after:w-0 
                  after:h-0.5 after:bg-secondary after:transition-all
                  hover:after:w-full
                  ${isActive(item.href) ? 'after:w-full' : ''}
                `}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <Button asChild className="btn-primary text-sm">
              <a href={whatsAppUrl} target="_blank" rel="noopener noreferrer">{t.hero.cta}</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden z-50 p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-background z-40 md:hidden">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`
                  text-2xl font-medium transition-colors
                  ${isActive(item.href) 
                    ? 'text-primary' 
                    : 'text-muted-foreground hover:text-primary'}
                `}
              >
                {item.label}
              </Link>
            ))}
            
            <div className="pt-4">
              <LanguageSwitcher />
            </div>
            
            <Button 
              asChild 
              className="btn-primary mt-4"
              onClick={() => setIsOpen(false)}
            >
              <a href={whatsAppUrl} target="_blank" rel="noopener noreferrer">{t.hero.cta}</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
