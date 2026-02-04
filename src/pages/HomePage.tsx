import { useLocale } from '@/contexts/LocaleContext';
import { HeroSection } from '@/components/home/HeroSection';
import { AboutPreview } from '@/components/home/AboutPreview';
import { ServicesPreview } from '@/components/home/ServicesPreview';
import { PhilosophySection } from '@/components/home/PhilosophySection';
import { InstagramSection } from '@/components/home/InstagramSection';
import { TelegramSection } from '@/components/home/TelegramSection';
import { LocationsSection } from '@/components/home/LocationsSection';

export function HomePage() {
  const { t } = useLocale();

  return (
    <>
      <title>{t.meta.title}</title>
      <meta name="description" content={t.meta.description} />
      
      <HeroSection />
      <AboutPreview />
      <ServicesPreview />
      <PhilosophySection />
      <TelegramSection />
      <InstagramSection />
      <LocationsSection />
    </>
  );
}
