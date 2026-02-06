import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { WhatsAppButton } from './WhatsAppButton';
import { SchemaMarkup } from './SchemaMarkup';
import { SeoHead } from './SeoHead';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col relative bg-background">
      <SeoHead />
      <SchemaMarkup />
      <Header />
      <main className="flex-1 relative z-10">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
