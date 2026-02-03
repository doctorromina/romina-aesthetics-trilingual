import { useState } from 'react';
import { MapPin, MessageCircle, Mail, Clock } from 'lucide-react';
import { useLocale } from '@/contexts/LocaleContext';
import { LtrWrapper } from '@/components/LocalizedText';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

export function ContactPage() {
  const { t, whatsAppUrl } = useLocale();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success(t.contact.form.success);
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      <title>{t.contact.title} | {t.meta.title}</title>
      
      {/* Hero */}
      <section className="py-16 md:py-20 gradient-hero">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            {t.contact.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t.contact.form.name}</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      required 
                      className="bg-muted/30"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">{t.contact.form.phone}</Label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      type="tel" 
                      dir="ltr"
                      className="bg-muted/30"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">{t.contact.form.email}</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    dir="ltr"
                    required 
                    className="bg-muted/30"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="treatment">{t.contact.form.treatment}</Label>
                  <Select name="treatment">
                    <SelectTrigger className="bg-muted/30">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="botox">
                        {t.contact.form.treatmentOptions.botox}
                      </SelectItem>
                      <SelectItem value="fillers">
                        {t.contact.form.treatmentOptions.fillers}
                      </SelectItem>
                      <SelectItem value="ultraformer">
                        {t.contact.form.treatmentOptions.ultraformer}
                      </SelectItem>
                      <SelectItem value="skinboosters">
                        {t.contact.form.treatmentOptions.skinboosters}
                      </SelectItem>
                      <SelectItem value="consultation">
                        {t.contact.form.treatmentOptions.consultation}
                      </SelectItem>
                      <SelectItem value="other">
                        {t.contact.form.treatmentOptions.other}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{t.contact.form.message}</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    rows={5}
                    className="bg-muted/30"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="btn-primary w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? '...' : t.contact.form.submit}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* WhatsApp Card */}
              <div className="bg-[#25D366]/10 rounded-2xl p-6 border border-[#25D366]/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-primary">
                      {t.contact.info.whatsapp}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {t.locations.bookVia}
                    </p>
                  </div>
                </div>
                <Button
                  asChild
                  className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white"
                >
                  <a href={whatsAppUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle size={18} className="me-2" />
                    <span>WhatsApp</span>
                  </a>
                </Button>
              </div>

              {/* Contact Info Cards */}
              <div className="grid gap-4">
                <div className="bg-muted/30 rounded-2xl p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-primary">{t.contact.info.email}</h3>
                    <LtrWrapper className="text-muted-foreground">info@drromina.com</LtrWrapper>
                  </div>
                </div>

                <div className="bg-muted/30 rounded-2xl p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-primary">{t.contact.info.hours}</h3>
                    <p className="text-muted-foreground">{t.contact.info.hoursValue}</p>
                  </div>
                </div>
              </div>

              {/* Locations */}
              <div>
                <h3 className="font-heading font-semibold text-primary mb-4">
                  {t.locations.title}
                </h3>
                <div className="space-y-3">
                  {t.locations.items.map((location, index) => (
                    <div 
                      key={index}
                      className="bg-muted/20 rounded-xl p-4 flex items-center gap-3"
                    >
                      <MapPin className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span className="text-muted-foreground">{location.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
