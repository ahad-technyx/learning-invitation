type Props = {
  className?: string;
  color?: string;
};

export function IslamicOrnament({
  className = "",
  color = "currentColor",
}: Props) {
  return (
    <svg
      viewBox="0 0 200 20"
      aria-hidden="true"
      className={className}
      preserveAspectRatio="none"
    >
      <g stroke={color} fill="none" strokeWidth="1">
        <path d="M0 10 L80 10" strokeDasharray="2 4" opacity="0.6" />
        <path d="M120 10 L200 10" strokeDasharray="2 4" opacity="0.6" />
        <path
          d="M90 10 L95 4 L100 10 L105 4 L110 10 L105 16 L100 10 L95 16 Z"
          fill={color}
          opacity="0.8"
        />
      </g>
    </svg>
  );
}

export function MosqueArch({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 160"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="archGrad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#C6A45C" stopOpacity="0.35" />
          <stop offset="1" stopColor="#C6A45C" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <path
        d="M60 10 C85 10 105 30 105 60 L105 150 L15 150 L15 60 C15 30 35 10 60 10 Z"
        fill="url(#archGrad)"
        stroke="#C6A45C"
        strokeWidth="1.2"
      />
      <path
        d="M60 30 C78 30 90 44 90 62 L90 150 L30 150 L30 62 C30 44 42 30 60 30 Z"
        fill="none"
        stroke="#C6A45C"
        strokeOpacity="0.5"
        strokeWidth="1"
      />
      <circle cx="60" cy="68" r="3" fill="#C6A45C" opacity="0.8" />
    </svg>
  );
}

export function StarPattern({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <g stroke="#C6A45C" fill="none" strokeWidth="0.8" opacity="0.55">
        <polygon points="50,5 60,40 95,40 65,60 75,95 50,75 25,95 35,60 5,40 40,40" />
        <polygon
          points="50,20 56,42 80,42 60,56 68,80 50,66 32,80 40,56 20,42 44,42"
          opacity="0.7"
        />
        <circle cx="50" cy="50" r="6" />
      </g>
    </svg>
  );
}
