type MotifProps = {
  className?: string;
  color?: string;
};

export function SpinningStar({
  className = "",
  color = "#C6A45C",
}: MotifProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      aria-hidden="true"
    >
      <g className="anim-spin-slow" style={{ transformOrigin: "60px 60px" }}>
        <g stroke={color} fill="none" strokeWidth="0.9" opacity="0.75">
          <polygon points="60,8 70,45 110,45 76,66 88,105 60,82 32,105 44,66 10,45 50,45" />
          <polygon
            points="60,24 66,46 86,46 70,58 76,80 60,68 44,80 50,58 34,46 54,46"
            opacity="0.65"
          />
        </g>
      </g>
      <g className="anim-spin-reverse" style={{ transformOrigin: "60px 60px" }}>
        <circle
          cx="60"
          cy="60"
          r="54"
          stroke={color}
          strokeOpacity="0.3"
          strokeDasharray="4 8"
          fill="none"
        />
      </g>
      <circle cx="60" cy="60" r="5" fill={color} opacity="0.9" />
    </svg>
  );
}

export function FloatingCrescent({ className = "" }: MotifProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="crescentGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#E2CB8E" stopOpacity="0.6" />
          <stop offset="1" stopColor="#C6A45C" stopOpacity="0" />
        </radialGradient>
      </defs>
      <g className="anim-float">
        <circle
          cx="50"
          cy="50"
          r="42"
          fill="url(#crescentGlow)"
          className="anim-glow-slow"
        />
        <path
          d="M66 50a22 22 0 11-30-20 18 18 0 1030 20z"
          fill="#C6A45C"
          opacity="0.9"
        />
        <g className="anim-glow">
          <circle cx="78" cy="32" r="1.8" fill="#E2CB8E" />
          <circle cx="22" cy="30" r="1.3" fill="#E2CB8E" />
          <circle cx="30" cy="78" r="1.5" fill="#E2CB8E" />
          <circle cx="82" cy="70" r="1.2" fill="#E2CB8E" />
        </g>
      </g>
    </svg>
  );
}

export function SwayingLantern({ className = "" }: MotifProps) {
  return (
    <svg viewBox="0 0 60 100" className={className} aria-hidden="true">
      <line
        x1="30"
        y1="0"
        x2="30"
        y2="12"
        stroke="#C6A45C"
        strokeOpacity="0.5"
      />
      <g className="anim-sway" style={{ transformOrigin: "30px 0" }}>
        <line x1="30" y1="0" x2="30" y2="18" stroke="#C6A45C" strokeWidth="0.8" />
        <rect
          x="24"
          y="18"
          width="12"
          height="3"
          rx="1"
          fill="#C6A45C"
          opacity="0.9"
        />
        <path
          d="M20 24 Q30 20 40 24 L42 54 Q30 58 18 54 Z"
          fill="#123C32"
          stroke="#C6A45C"
          strokeWidth="1"
        />
        <g className="anim-glow">
          <ellipse cx="30" cy="40" rx="7" ry="10" fill="#E2CB8E" opacity="0.9" />
          <ellipse cx="30" cy="40" rx="3" ry="5" fill="#FAF7EF" opacity="0.9" />
        </g>
        <path
          d="M20 54 Q30 58 42 54 L40 60 L22 60 Z"
          fill="#C6A45C"
          opacity="0.85"
        />
        <circle cx="30" cy="64" r="2.4" fill="#C6A45C" />
        <path
          d="M30 66 Q27 72 30 78 Q33 72 30 66 Z"
          fill="#C6A45C"
          opacity="0.75"
        />
      </g>
    </svg>
  );
}

export function DriftingDots({ className = "" }: MotifProps) {
  return (
    <svg viewBox="0 0 160 60" className={className} aria-hidden="true">
      <g fill="#C6A45C">
        <circle cx="20" cy="30" r="3" className="anim-float" />
        <circle
          cx="50"
          cy="20"
          r="2"
          className="anim-float-slow"
          opacity="0.8"
        />
        <circle cx="80" cy="34" r="4" className="anim-float" opacity="0.9" />
        <circle
          cx="110"
          cy="22"
          r="2.4"
          className="anim-float-slow"
          opacity="0.75"
        />
        <circle cx="140" cy="30" r="3" className="anim-float" opacity="0.8" />
      </g>
    </svg>
  );
}

export function PulsingArch({ className = "" }: MotifProps) {
  return (
    <svg viewBox="0 0 120 160" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="pulsArchGrad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#C6A45C" stopOpacity="0.35" />
          <stop offset="1" stopColor="#C6A45C" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <g className="anim-glow-slow">
        <path
          d="M60 10 C85 10 105 30 105 60 L105 150 L15 150 L15 60 C15 30 35 10 60 10 Z"
          fill="url(#pulsArchGrad)"
          stroke="#C6A45C"
          strokeWidth="1.2"
        />
      </g>
      <path
        d="M60 30 C78 30 90 44 90 62 L90 150 L30 150 L30 62 C30 44 42 30 60 30 Z"
        fill="none"
        stroke="#C6A45C"
        strokeOpacity="0.5"
        strokeWidth="1"
      />
      <circle cx="60" cy="68" r="3" fill="#C6A45C" className="anim-glow" />
    </svg>
  );
}
