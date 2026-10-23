import { siteConfig } from "@/lib/site-config";

type Props = {
  variant?: "light" | "dark";
};

export function Logo({ variant = "dark" }: Props) {
  const color = variant === "light" ? "text-cream-warm" : "text-emerald-deep";
  const accent = "text-gold-elegant";

  return (
    <div className="flex items-center gap-3">
      <svg
        viewBox="0 0 40 40"
        className={`h-10 w-10 ${accent}`}
        aria-hidden="true"
      >
        <path
          d="M20 2 L24 10 L34 10 L26 16 L30 26 L20 20 L10 26 L14 16 L6 10 L16 10 Z"
          fill="currentColor"
          opacity="0.18"
        />
        <path
          d="M20 6c-6 0-10 4-10 10 0 7 7 12 10 16 3-4 10-9 10-16 0-6-4-10-10-10zm0 4a2 2 0 110 4 2 2 0 010-4z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <circle cx="20" cy="19" r="2" fill="currentColor" />
      </svg>
      <div className="flex flex-col leading-tight">
        <span className={`text-lg font-semibold tracking-tight ${color}`}>
          {siteConfig.brand}
        </span>
        <span
          className={`text-[0.65rem] font-medium tracking-[0.28em] ${accent}`}
        >
          {siteConfig.brandSuffix.toUpperCase()}
        </span>
      </div>
    </div>
  );
}
