// Elegant single-line art illustration of a woman's face profile looking up
// Based on brand reference - used as a subtle watermark background element

interface FaceLineArtProps {
  className?: string;
}

export function FaceLineArt({ className = '' }: FaceLineArtProps) {
  return (
    <svg 
      viewBox="0 0 200 320" 
      fill="none" 
      className={className}
      aria-hidden="true"
    >
      {/* Single continuous line art of woman's face profile - elegant upward gaze with flowing lines */}
      <path
        d="M70 310
           C65 290, 60 270, 62 250
           C64 230, 70 215, 80 200
           C90 185, 100 175, 105 165
           L108 158
           C110 152, 108 145, 102 140
           C96 135, 88 138, 85 145
           C82 152, 85 160, 92 163
           M105 165
           C115 160, 125 152, 130 142
           C135 132, 135 120, 130 112
           C125 104, 118 100, 115 95
           C112 90, 112 84, 116 78
           C120 72, 128 70, 134 74
           C140 78, 142 86, 138 92
           M116 78
           C112 70, 115 60, 125 52
           C135 44, 148 48, 155 58
           C162 68, 160 82, 152 92
           M130 112
           C140 108, 152 112, 158 122
           C164 132, 160 145, 150 152
           M152 92
           C160 88, 172 94, 175 106
           C178 118, 172 130, 162 135
           M80 200
           C70 195, 58 185, 52 170
           C46 155, 50 138, 62 128
           C74 118, 90 120, 100 130
           M62 128
           C55 122, 45 118, 35 125
           C25 132, 22 148, 30 162"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
