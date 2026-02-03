import { Outlet } from 'react-router-dom';
import { LocaleProvider } from '@/contexts/LocaleContext';
import { Header } from './Header';
import { Footer } from './Footer';
import { WhatsAppButton } from './WhatsAppButton';

export function Layout() {
  return (
    <LocaleProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </LocaleProvider>
  );
}
