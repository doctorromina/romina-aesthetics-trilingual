import { MessageCircle } from 'lucide-react';
import { useLocale } from '@/contexts/LocaleContext';

export function WhatsAppButton() {
  const { whatsAppUrl } = useLocale();

  return (
    <a
      href={whatsAppUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle size={28} fill="white" />
    </a>
  );
}
