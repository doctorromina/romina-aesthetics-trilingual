interface WazeLogoProps {
  className?: string;
  size?: number;
}

export function WazeLogo({ className = '', size = 24 }: WazeLogoProps) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      width={size} 
      height={size}
      className={className}
      fill="currentColor"
    >
      {/* Waze ghost logo */}
      <path d="M12 2C6.48 2 2 6.04 2 11c0 2.76 1.36 5.22 3.5 6.82V22l3.5-2.5c.96.32 2 .5 3 .5 5.52 0 10-4.04 10-9S17.52 2 12 2zm-3 10.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm6 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
    </svg>
  );
}
