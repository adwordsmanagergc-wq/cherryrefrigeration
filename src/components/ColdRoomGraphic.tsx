export function ColdRoomGraphic({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 480 360" xmlns="http://www.w3.org/2000/svg" className={className} role="img" aria-label="Cold room cutaway illustration">
      <defs>
        <linearGradient id="panel" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#F4F8FB" />
          <stop offset="1" stopColor="#A9D6E5" />
        </linearGradient>
        <linearGradient id="floor" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#3A4A5C" />
          <stop offset="1" stopColor="#0B1F3A" />
        </linearGradient>
      </defs>
      {/* Floor / shadow */}
      <ellipse cx="240" cy="320" rx="200" ry="14" fill="#000" opacity="0.25" />
      {/* Cold room body */}
      <rect x="60" y="80" width="360" height="220" rx="8" fill="url(#panel)" stroke="#0B1F3A" strokeWidth="3" />
      {/* Panels seams */}
      {[140, 220, 300].map((x) => (
        <line key={x} x1={x} y1="80" x2={x} y2="300" stroke="#0B1F3A" strokeOpacity="0.2" strokeWidth="1.5" />
      ))}
      {/* Door */}
      <rect x="270" y="140" width="120" height="160" rx="4" fill="#F4F8FB" stroke="#0B1F3A" strokeWidth="3" />
      <rect x="280" y="160" width="40" height="100" rx="2" fill="#A9D6E5" stroke="#0B1F3A" strokeWidth="1.5" opacity="0.6" />
      <circle cx="378" cy="220" r="4" fill="#C8102E" />
      <rect x="372" y="200" width="12" height="40" rx="2" fill="#0B1F3A" />
      {/* Condenser unit on roof */}
      <rect x="100" y="40" width="120" height="50" rx="6" fill="#3A4A5C" stroke="#0B1F3A" strokeWidth="2" />
      <line x1="120" y1="55" x2="200" y2="55" stroke="#A9D6E5" strokeWidth="2" />
      <line x1="120" y1="65" x2="200" y2="65" stroke="#A9D6E5" strokeWidth="2" />
      <line x1="120" y1="75" x2="200" y2="75" stroke="#A9D6E5" strokeWidth="2" />
      {/* Pipes */}
      <path d="M 160 90 C 160 110, 170 110, 170 130" stroke="#C8102E" strokeWidth="3" fill="none" />
      <path d="M 180 90 C 180 110, 190 110, 190 130" stroke="#0B1F3A" strokeWidth="3" fill="none" />
      {/* Temp display */}
      <rect x="80" y="100" width="60" height="30" rx="4" fill="#0B1F3A" stroke="#C8102E" strokeWidth="1.5" />
      <text x="110" y="121" fontFamily="monospace" fontSize="16" fill="#A9D6E5" textAnchor="middle" fontWeight="bold">2.0°C</text>
      {/* Snowflake */}
      <g transform="translate(200,220)" stroke="#0B1F3A" strokeWidth="2" strokeLinecap="round">
        <line x1="0" y1="-22" x2="0" y2="22" />
        <line x1="-22" y1="0" x2="22" y2="0" />
        <line x1="-15" y1="-15" x2="15" y2="15" />
        <line x1="-15" y1="15" x2="15" y2="-15" />
      </g>
    </svg>
  );
}
