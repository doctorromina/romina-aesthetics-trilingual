import { Send } from 'lucide-react';
import { useLocale } from '@/contexts/LocaleContext';
import { Button } from '@/components/ui/button';

const TELEGRAM_URL = 'https://t.me/+s_aXhLyQXoUzYzg0';

export function TelegramSection() {
  const { t } = useLocale();

  return (
    <section className="py-12 bg-gradient-to-r from-[#0088cc]/10 to-[#0088cc]/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-[#0088cc] flex items-center justify-center mx-auto mb-6">
            <Send className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
            {t.telegram.title}
          </h2>
          
          <p className="text-muted-foreground mb-6 leading-relaxed">
            {t.telegram.description}
          </p>
          
          <Button
            asChild
            size="lg"
            className="bg-[#0088cc] hover:bg-[#0077b5] text-white px-8"
          >
            <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">
              <Send size={18} className="me-2" />
              {t.telegram.cta}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
