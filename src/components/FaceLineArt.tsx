// Elegant single-line art illustration of a woman's face profile looking up
// Based on brand reference - used as a subtle watermark background element

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
      {/* Single continuous line art of woman's face profile - elegant upward gaze */}
      <path
        d="M150 380
           C145 360, 140 340, 142 320
           C144 300, 150 280, 158 260
           Q165 245, 168 230
           C170 220, 165 210, 155 205
           Q145 200, 140 195
           C130 185, 125 175, 130 165
           C135 155, 145 150, 155 148
           Q165 146, 172 140
           C180 132, 185 122, 182 112
           C179 102, 170 95, 160 95
           Q150 95, 145 90
           C138 82, 140 70, 150 62
           Q160 55, 175 55
           C190 55, 205 65, 210 82
           Q215 95, 212 110
           C208 125, 195 138, 182 145
           Q175 150, 178 158
           C182 168, 195 175, 208 170
           Q220 165, 230 155
           C240 145, 245 130, 240 115
           Q235 100, 220 90
           C205 80, 185 80, 170 90
           M155 205
           Q140 215, 125 210
           C110 205, 100 190, 100 175
           Q100 160, 115 150
           C130 140, 150 145, 160 158
           M100 175
           Q85 180, 75 170
           C65 160, 65 145, 80 138
           Q95 132, 105 145"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
