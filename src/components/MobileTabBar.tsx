import { Link, useLocation } from 'react-router-dom';
import { Home, User, Sparkles, MessageCircle } from 'lucide-react';
import { useLocale } from '@/contexts/LocaleContext';

export function MobileTabBar() {
  const { t, getPath, locale } = useLocale();
  const location = useLocation();

  const tabs = [
    { href: getPath('/'), label: t.nav.home, icon: Home },
    { href: getPath('/about'), label: t.nav.about, icon: User },
    { href: getPath('/services'), label: t.nav.services, icon: Sparkles },
    { href: getPath('/contact'), label: t.nav.contact, icon: MessageCircle },
  ];

  const isActive = (href: string) => {
    if (href === getPath('/')) {
      return location.pathname === href || location.pathname === `/${locale}`;
    }
    return location.pathname.startsWith(href);
  };

  return (
    <nav className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-background/95 backdrop-blur-sm border-t border-border/50">
      <div className="flex items-center justify-around h-16 px-2 pb-safe">
        {tabs.map((tab) => {
          const active = isActive(tab.href);
          const Icon = tab.icon;
          return (
            <Link
              key={tab.href}
              to={tab.href}
              className={`
                flex flex-col items-center justify-center gap-0.5 flex-1 py-1.5
                transition-colors duration-200
                ${active
                  ? 'text-primary'
                  : 'text-muted-foreground'}
              `}
            >
              <Icon size={20} strokeWidth={active ? 2.2 : 1.8} />
              <span className={`text-[10px] leading-tight ${active ? 'font-semibold' : 'font-medium'}`}>
                {tab.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
