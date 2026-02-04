import { useLocale } from '@/contexts/LocaleContext';

interface DrRominaNameProps {
  className?: string;
}

// Keeps the doctor name from breaking across lines
export function DrRominaName({ className = '' }: DrRominaNameProps) {
  return (
    <span translate="no" className={`whitespace-nowrap ${className}`}>
      Dr. Romina
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
