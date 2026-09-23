import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

/* Iconos de línea redondeada, siguiendo el sistema de íconos del manual (pág. 08) */
const line = (props: P) => ({
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...props,
});

export const IconUser = (p: P) => (
  <svg {...line(p)}><circle cx="12" cy="8" r="4" /><path d="M4.5 21a7.5 7.5 0 0 1 15 0" /></svg>
);
export const IconDoc = (p: P) => (
  <svg {...line(p)}><path d="M6 3h9l4 4v11a3 3 0 0 1-3 3H6z" /><path d="M9 9h6M9 13h6M9 17h3" /></svg>
);
export const IconPen = (p: P) => (
  <svg {...line(p)}><rect x="8" y="2.5" width="8" height="12" rx="2" /><path d="M8 14.5 12 21l4-6.5M16 6h2v5" /></svg>
);
export const IconExpand = (p: P) => (
  <svg {...line(p)}><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 16 16 8M11 8h5v5M8 11v5h5" /></svg>
);
export const IconCalendar = (p: P) => (
  <svg {...line(p)}><rect x="3" y="5" width="18" height="16" rx="3" /><path d="M3 10h18M8 3v4M16 3v4" /></svg>
);
export const IconHome = (p: P) => (
  <svg {...line(p)}><path d="M3 11 12 3l9 8v8a2 2 0 0 1-2 2h-4v-6a3 3 0 0 0-6 0v6H5a2 2 0 0 1-2-2z" /></svg>
);
export const IconPeople = (p: P) => (
  <svg {...line(p)}><circle cx="7.5" cy="7" r="3" /><circle cx="16.5" cy="7" r="3" /><path d="M2.5 20v-3a5 5 0 0 1 10 0v1M11.5 18v-1a5 5 0 0 1 10 0v3" /></svg>
);
export const IconKey = (p: P) => (
  <svg {...line(p)}><circle cx="7" cy="16" r="4" /><path d="m10 13 9-9M16 7l2 2M19 4l1.5 1.5" /></svg>
);
export const IconBuilding = (p: P) => (
  <svg {...line(p)}><path d="M4 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16M16 9h3a1 1 0 0 1 1 1v11M2 21h20M8 7h4M8 11h4M8 15h4" /></svg>
);
export const IconTree = (p: P) => (
  <svg {...line(p)}><path d="M12 21v-6M12 3 6 12h3l-3 4h12l-3-4h3z" /></svg>
);
export const IconChart = (p: P) => (
  <svg {...line(p)}><path d="M3 20h18M6 16l4-5 3 3 6-8" /><path d="M15 6h4v4" /></svg>
);
export const IconBrush = (p: P) => (
  <svg {...line(p)}><rect x="3" y="3" width="15" height="6" rx="2" /><path d="M18 6h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-8v3" /><rect x="10" y="14" width="4" height="7" rx="1.5" /></svg>
);
export const IconArrow = (p: P) => (
  <svg {...line({ strokeWidth: 2, ...p })}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const IconArrowUpRight = (p: P) => (
  <svg {...line({ strokeWidth: 2, ...p })}><path d="M7 17 17 7M8 7h9v9" /></svg>
);
export const IconCheck = (p: P) => (
  <svg {...line({ strokeWidth: 2.2, ...p })}><path d="m5 12 4.5 4.5L19 7" /></svg>
);
export const IconPin = (p: P) => (
  <svg {...line(p)}><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
);
export const IconPhone = (p: P) => (
  <svg {...line(p)}><path d="M5 3h3l2 5-2.5 1.5a11 11 0 0 0 5 5L14 12l5 2v3a2 2 0 0 1-2 2A15 15 0 0 1 3 5a2 2 0 0 1 2-2z" /></svg>
);
export const IconMail = (p: P) => (
  <svg {...line(p)}><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m4 7 8 6 8-6" /></svg>
);
export const IconMenu = (p: P) => (
  <svg {...line({ strokeWidth: 2, ...p })}><path d="M4 7h16M4 12h16M4 17h10" /></svg>
);
export const IconClose = (p: P) => (
  <svg {...line({ strokeWidth: 2, ...p })}><path d="M6 6l12 12M18 6 6 18" /></svg>
);
export const IconChevron = (p: P) => (
  <svg {...line({ strokeWidth: 2, ...p })}><path d="m6 9 6 6 6-6" /></svg>
);
export const IconShield = (p: P) => (
  <svg {...line(p)}><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z" /><path d="m9 12 2 2 4-4" /></svg>
);
export const IconSpark = (p: P) => (
  <svg {...line(p)}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6" /></svg>
);

/* Redes sociales (relleno) */
export const IconFacebook = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4a21 21 0 0 0-2.3-.1c-2.3 0-3.9 1.4-3.9 4v2.2H7.8v3h2.6V21z" />
  </svg>
);
export const IconInstagram = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
  </svg>
);
export const IconTiktok = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M16.6 3h-3.1v12.3a2.7 2.7 0 1 1-2.7-2.7c.3 0 .5 0 .8.1V9.5a5.9 5.9 0 1 0 5 5.8V9.1a7.3 7.3 0 0 0 4.3 1.4V7.4a4.3 4.3 0 0 1-4.3-4.4z" />
  </svg>
);
export const IconWhatsapp = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M12 2.5a9.4 9.4 0 0 0-8.1 14.2L2.6 21.5l4.9-1.3A9.4 9.4 0 1 0 12 2.5zm0 17.2a7.8 7.8 0 0 1-4-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A7.8 7.8 0 1 1 12 19.7zm4.3-5.8c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.5.1l-.8.9c-.1.2-.3.2-.5.1a6.4 6.4 0 0 1-3.2-2.8c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.7-1.7c-.2-.5-.4-.4-.5-.4h-.5a.9.9 0 0 0-.7.3 2.8 2.8 0 0 0-.9 2.1 4.9 4.9 0 0 0 1 2.6 11.2 11.2 0 0 0 4.3 3.8c1.6.7 2.2.7 3 .6a2.6 2.6 0 0 0 1.7-1.2 2.1 2.1 0 0 0 .1-1.2c0-.1-.2-.2-.4-.3z" />
  </svg>
);
