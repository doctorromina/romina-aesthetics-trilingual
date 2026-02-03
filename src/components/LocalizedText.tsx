import { useLocale } from '@/contexts/LocaleContext';

interface DrRominaNameProps {
  className?: string;
}

export function DrRominaName({ className = '' }: DrRominaNameProps) {
  return (
    <span translate="no" className={className}>
      Dr. Romina Raykhshtat
    </span>
  );
}

interface LtrWrapperProps {
  children: React.ReactNode;
  className?: string;
}

// Wraps content that should remain LTR in RTL context (phone numbers, emails, URLs)
export function LtrWrapper({ children, className = '' }: LtrWrapperProps) {
  const { dir } = useLocale();
  
  if (dir === 'ltr') {
    return <span className={className}>{children}</span>;
  }
  
  return (
    <span dir="ltr" className={className}>
      {children}
    </span>
  );
}
