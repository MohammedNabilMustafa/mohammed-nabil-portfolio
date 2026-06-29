import { useId } from 'react';

/**
 * MN monogram — shared stroke luxury mark on dark red gradient.
 * Represents platform architecture: foundation bar + interconnected structure.
 */
export default function BrandLogo({ size = 34, className = '' }) {
  const gradId = useId();

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`brand-logo${className ? ` ${className}` : ''}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradId} x1="4" y1="2" x2="36" y2="38" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5c0f0f" />
          <stop offset="0.45" stopColor="#8b1515" />
          <stop offset="1" stopColor="#b91c1c" />
        </linearGradient>
        <linearGradient id="brand-shine" x1="20" y1="0" x2="20" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="rgba(255,255,255,0.14)" />
          <stop offset="1" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="10" fill={`url(#${gradId})`} />
      <rect width="40" height="40" rx="10" fill="url(#brand-shine)" opacity="0.55" />
      <path
        d="M10 28V12h2.8l5.2 10.2L23.2 12H26v16"
        stroke="#fff"
        strokeWidth="2.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26 12l6.8 16M32.8 12v16"
        stroke="#fff"
        strokeWidth="2.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 30.5h22"
        stroke="rgba(255,255,255,0.28)"
        strokeWidth="1.15"
        strokeLinecap="round"
      />
    </svg>
  );
}
