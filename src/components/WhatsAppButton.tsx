import { MessageCircle } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/972534706919?text=%D7%A9%D7%9C%D7%95%D7%9D%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A7%D7%91%D7%95%D7%A2%20%D7%99%D7%99%D7%A2%D7%95%D7%A5';

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle size={28} fill="white" className="md:block hidden" />
      <MessageCircle size={22} fill="white" className="md:hidden block" />
    </a>
  );
}
