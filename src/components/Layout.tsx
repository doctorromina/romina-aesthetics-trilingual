import { Outlet } from 'react-router-dom';
import { LocaleProvider } from '@/contexts/LocaleContext';
import { Header } from './Header';
import { Footer } from './Footer';
import { WhatsAppButton } from './WhatsAppButton';
import { FaceLineArt } from './FaceLineArt';

export function Layout() {
  return (
    <LocaleProvider>
      <div className="min-h-screen flex flex-col relative">
        {/* Subtle background line art watermark */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <FaceLineArt 
            className="absolute top-1/4 -end-32 w-[500px] h-[600px] text-primary opacity-[0.03] transform rotate-12" 
          />
          <FaceLineArt 
            className="absolute bottom-1/4 -start-32 w-[400px] h-[500px] text-primary opacity-[0.02] transform -rotate-12 scale-x-[-1]" 
          />
        </div>
        
        <Header />
        <main className="flex-1 relative z-10">
          <Outlet />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </LocaleProvider>
  );
}
