import { useLocale } from '@/contexts/LocaleContext';

export function Logo() {
  return (
    <div className="flex flex-col items-center" dir="ltr">
      {/* Dr. in circle + Romina script - always LTR */}
      <div className="flex items-center gap-1">
        <div className="w-8 h-8 rounded-full border-2 border-primary flex items-center justify-center">
          <span className="text-xs font-medium text-primary">Dr.</span>
        </div>
        <span 
          className="logo-script text-2xl md:text-3xl"
          translate="no"
        >
          Romina
        </span>
      </div>
    </div>
  );
}

export function LogoWithTagline() {
  const { t } = useLocale();
  
  return (
    <div className="flex flex-col items-center">
      <Logo />
      <span className="text-[10px] tracking-[0.3em] text-muted-foreground mt-1 font-body">
        {t.hero.tagline}
      </span>
    </div>
  );
}

export function LogoCompact() {
  return (
    <div className="flex items-center gap-2" dir="ltr">
      <div className="w-7 h-7 rounded-full border-2 border-primary flex items-center justify-center">
        <span className="text-[10px] font-medium text-primary">Dr.</span>
      </div>
      <span 
        className="logo-script text-xl"
        translate="no"
      >
        Romina
      </span>
    </div>
  );
}
