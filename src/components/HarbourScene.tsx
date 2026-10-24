import { useId } from "react";
import canvaMark from "../assets/canva-gradient-logo.png";

export default function HarbourScene({ night = false }: { night?: boolean }) {
  const surfaceClip = useId();
  return (
    <div className="harbour-scene" role="img" aria-label="A cartoon Sydney harbour with a ferry, the Harbour Bridge, an imaginary Canva skyscraper, and occasional visits from a surfacing submarine">
      <svg viewBox="0 -70 280 210" fill="none" aria-hidden="true">
        <defs>
          <clipPath id={surfaceClip}><rect x="0" y="20" width="280" height="106" /></clipPath>
          <linearGradient id="canva-sign" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#009BCC" /><stop offset="1" stopColor="#7D2AE8" /></linearGradient>
        </defs>
        <g stroke="#777d78" strokeWidth="1.5" strokeLinejoin="round">
          <path d="M183 83V-51L198 -61H247V83Z" fill={night ? "#404d54" : "#e0e6df"} />
          <path d="M183 -51H232V83M232 -51L247 -61" />
          <path d="M198 -61V-66H235V-61" fill="#c4c4b6" />
          <path d="M238 -42V73" stroke="#bdc8c0" />
          <image href={canvaMark} x="191" y="-35" width="33" height="19" style={{ mixBlendMode: night ? "screen" : "multiply", filter: night ? "grayscale(1) invert(1) brightness(4) drop-shadow(0 0 1px #ffffff66)" : undefined }} />
          {[0, 15, 30, 45, 60].map(y => <g key={y} className="lit-windows" fill={night ? "#ffdb87" : "#a7bdb8"} stroke="none"><rect x="192" y={y} width="7" height="8" rx="1" /><rect x="204" y={y} width="7" height="8" rx="1" /><rect x="216" y={y} width="7" height="8" rx="1" /></g>)}
        </g>
        <g stroke="#777d78" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 83H258M46 81Q140 -14 234 81M46 81Q140 8 234 81" />
          <path d="M63 65V82M81 48V82M101 36V82M120 29V82M140 26V82M160 29V82M179 36V82M199 48V82M217 65V82" strokeWidth="1.2" />
          <path d="M30 85V55H45V85M235 85V55H250V85" fill="#c4c4b6" />
          <path d="M28 55H47M233 55H252M34 48H41V55M239 48H246V55" />
        </g>
        <g stroke="#98b7b2" strokeWidth="1.5" strokeLinecap="round" opacity=".65">
          <path d="M13 104q12 4 24 0m20 0q12 4 24 0m110 0q12 4 24 0m21 0q12 4 24 0M32 127q15 4 30 0m24 0q15 4 30 0m59 0q15 4 30 0m21 0q15 4 30 0" />
        </g>
        <g clipPath={`url(#${surfaceClip})`}>
          <g transform="translate(36 126)">
            <g className="harbour-periscope">
              <path d="M-26 5C-24 -10 -13 -13 0 -13S24 -10 26 5Z" fill={night ? "#647b7a" : "#7c9289"} stroke="#536662" strokeWidth="1.5" />
              <path d="M-8 -10V-16Q-8 -19 -5 -19H5Q8 -19 8 -16V-10" fill={night ? "#718482" : "#8b9e96"} stroke="#536662" strokeWidth="1.5" />
              <path d="M-19 -4Q-10 -9 -2 -9" stroke="#a8bab1" strokeWidth="1.3" strokeLinecap="round" />
              <path d="M-3 3V-21Q-3 -27 3 -27H13V-19H5V3" fill={night ? "#718482" : "#8b9e96"} stroke="#536662" strokeWidth="1.5" strokeLinejoin="round" />
              <rect x="11" y="-28" width="5" height="10" rx="2" fill="#536662" />
              <path d="M13 -25v4" stroke={night ? "#ffdb87" : "#c5dedb"} strokeWidth="2" strokeLinecap="round" />
            </g>
          </g>
        </g>
        <g className="periscope-ripple" stroke="#98b7b2" strokeWidth="1.4" fill="none"><ellipse cx="36" cy="126" rx="29" ry="2.5" /></g>
        <g className="harbour-ferry-travel">
          <g className="harbour-ferry-bob">
            <path d="M88 111h101l-10 14H103Z" fill="#164e3b" stroke="#263e32" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M101 94h73v18h-73Z" fill={night ? "#837348" : "#eddb91"} />
            <path d="M112 80h50l7 14h-61Z" fill={night ? "#837348" : "#eddb91"} />
            <path d="M129 72h9v8h-9Z" fill="#47634c" />
            <path d="M98 94h79M106 80h59" stroke="#c6a64d" strokeWidth="3" strokeLinecap="round" />
            <path d="M115 84h7v7h-7Zm11 0h7v7h-7Zm11 0h7v7h-7Zm11 0h7v7h-7ZM106 98h8v10h-8Zm12 0h8v10h-8Zm12 0h8v10h-8Zm12 0h8v10h-8Zm12 0h8v10h-8Z" className="lit-windows" fill={night ? "#ffdb87" : "#35585b"} />
            <path d="M166 99h5v13h-5Z" fill="#b86443" />
            <path d="M107 118h64" stroke="#38775d" strokeWidth="2" strokeLinecap="round" />
          </g>
        </g>
      </svg>
    </div>
  );
}
