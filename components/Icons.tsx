import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function CrownIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" {...props}>
      <path d="M9 35h30l3-21-11 8-7-11-7 11-11-8 3 21z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M11 39h26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" {...props}>
      <path d="M8 41l2.8-9.2A17.2 17.2 0 1 1 17 38.1L8 41z" stroke="currentColor" strokeWidth="2.3" strokeLinejoin="round" />
      <path d="M18.5 16.9c.5-1.1 1-1.2 1.8-1.2h1.3c.5 0 .9.1 1.2.8l1.8 4.2c.2.6.1 1-.2 1.4l-1.2 1.4c1.3 2.2 3.1 4 5.5 5.3l1.4-1.2c.5-.4.9-.5 1.5-.2l4 1.9c.7.3.8.8.8 1.3v1.1c0 .9-.3 1.5-1.2 2-1.3.7-3.7 1.3-7 .2-4.1-1.4-7.2-4.2-9.4-7.6-2.1-3.1-2.6-6.1-1.3-9.4z" fill="currentColor" />
    </svg>
  );
}

export function HandshakeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" {...props}>
      <path d="M7 28l8-10 8 7 5-5 13 11-7 8-10-8-5 5-12-8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M23 25l5 5M18 31l5 4M31 22l4-4 6 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function CardPayIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" {...props}>
      <rect x="8" y="13" width="32" height="23" rx="3" stroke="currentColor" strokeWidth="2" />
      <path d="M8 20h32M15 29h9M31 29h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function PersonLineIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" {...props}>
      <circle cx="24" cy="15" r="6" stroke="currentColor" strokeWidth="2" />
      <path d="M12 39c2.1-7 6.1-10.5 12-10.5S33.9 32 36 39" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
