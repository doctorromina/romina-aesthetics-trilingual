// Elegant single-line art illustration of a woman's face profile looking up
// Based on brand reference - used as a subtle watermark background element

interface FaceLineArtProps {
  className?: string;
}

export function FaceLineArt({ className = '' }: FaceLineArtProps) {
  return (
    <svg 
      viewBox="0 0 200 300" 
      fill="none" 
      className={className}
      aria-hidden="true"
    >
      {/* Single continuous line art of woman's face profile - looking upward */}
      <path
        d="M100 280
           C90 260, 85 240, 88 220
           C90 200, 95 185, 100 170
           C105 155, 115 145, 120 135
           C125 125, 125 115, 120 108
           C115 101, 108 98, 105 92
           C102 86, 103 80, 108 75
           C113 70, 120 68, 125 70
           C130 72, 132 78, 130 82
           C128 86, 122 88, 118 85
           M108 75
           C105 70, 108 62, 115 58
           C122 54, 132 55, 138 60
           C144 65, 148 72, 150 80
           C152 88, 150 98, 145 105
           C140 112, 132 118, 125 120
           M150 80
           C158 78, 168 82, 172 90
           C176 98, 174 108, 168 115
           M145 105
           C150 100, 158 98, 165 102
           C172 106, 175 115, 172 122
           M100 170
           C92 165, 82 155, 78 142
           C74 129, 78 115, 88 108
           C98 101, 112 102, 118 108"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
