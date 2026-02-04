// Elegant single-line art illustration of a woman's face profile
// Used as a subtle watermark background element throughout the site

interface FaceLineArtProps {
  className?: string;
}

export function FaceLineArt({ className = '' }: FaceLineArtProps) {
  return (
    <svg 
      viewBox="0 0 300 400" 
      fill="none" 
      className={className}
      aria-hidden="true"
    >
      {/* Single continuous line art of woman's face profile */}
      <path
        d="M180 50
           C195 55, 210 70, 215 90
           C220 110, 218 130, 210 150
           C205 165, 195 175, 188 185
           C182 193, 178 198, 175 205
           C172 212, 170 218, 172 225
           C174 232, 180 238, 185 242
           C190 246, 195 248, 192 255
           C189 262, 178 268, 170 275
           C162 282, 155 290, 150 300
           C145 310, 142 320, 140 330
           C138 340, 138 350, 140 360
           
           M188 185
           C182 182, 175 180, 168 182
           C161 184, 155 190, 152 198
           
           M210 150
           C218 148, 228 150, 235 155
           C242 160, 246 168, 245 176
           
           M195 125
           C190 120, 182 118, 175 120
           C168 122, 162 128, 160 135
           C158 142, 160 150, 165 155
           C170 160, 178 162, 185 158
           
           M145 95
           C135 90, 122 88, 110 92
           C98 96, 88 105, 85 118
           C82 131, 88 145, 100 152
           
           M100 152
           C105 160, 115 165, 128 165
           C141 165, 152 158, 158 148
           
           M85 118
           C75 115, 62 118, 55 130
           C48 142, 50 158, 60 170
           C70 182, 88 188, 105 185"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Subtle decorative elements - beauty marks/accents */}
      <circle cx="178" cy="210" r="2" fill="currentColor" opacity="0.5" />
      <circle cx="165" cy="145" r="1.5" fill="currentColor" opacity="0.4" />
    </svg>
  );
}
