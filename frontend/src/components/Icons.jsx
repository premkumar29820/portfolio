export function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="button-icon">
      <path d="M12 3v11m0 0 4-4m-4 4-4-4M5 20h14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function ArrowUpRightIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="button-icon">
      <path d="M7 17 17 7M9 7h8v8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="button-icon">
      <path d="m4 4 16 8-16 8 3-8-3-8Zm3 8h8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function CodeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="button-icon">
      <path d="m9 7-5 5 5 5M15 7l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function GitHubIcon({ className = "brand-icon" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path fill="currentColor" d="M12 .7A11.3 11.3 0 0 0 8.4 22.9c.57.1.78-.25.78-.55v-2.15c-3.17.69-3.84-1.34-3.84-1.34-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.74 2.68 1.24 3.33.95.1-.74.4-1.24.73-1.53-2.53-.29-5.2-1.27-5.2-5.64 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.13 1.17a10.9 10.9 0 0 1 5.7 0c2.17-1.48 3.12-1.17 3.12-1.17.63 1.57.24 2.73.12 3.02.73.8 1.17 1.82 1.17 3.07 0 4.38-2.67 5.34-5.21 5.63.41.36.78 1.08.78 2.18v3.23c0 .3.2.65.79.54A11.3 11.3 0 0 0 12 .7Z"/>
    </svg>
  );
}

export function LinkedInIcon({ className = "brand-icon" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path fill="currentColor" d="M5.2 8.2a1.65 1.65 0 1 1 0-3.3 1.65 1.65 0 0 1 0 3.3ZM3.8 9.6h2.8v9H3.8v-9Zm4.5 0H11v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.6v4.71h-2.8v-4.18c0-1-.02-2.28-1.39-2.28s-1.6 1.09-1.6 2.2v4.26H8.3v-9Z"/>
    </svg>
  );
}

export function MailIcon({ className = "brand-icon" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <rect x="3.5" y="5" width="17" height="14" rx="2.2" fill="none" stroke="currentColor" strokeWidth="1.8"/>
      <path d="m4.5 7 7.5 5.5L19.5 7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function PhoneIcon({ className = "brand-icon" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path d="M7.2 3.8 10 5.1c.55.26.8.9.59 1.47L9.5 9.55a1.5 1.5 0 0 0 .28 1.6l3.07 3.07a1.5 1.5 0 0 0 1.6.28l2.98-1.09c.57-.21 1.21.04 1.47.59l1.3 2.8c.27.58.08 1.27-.44 1.63l-1.67 1.16c-.65.45-1.46.58-2.22.35-3.3-1-6.1-2.75-8.4-5.05s-4.05-5.1-5.05-8.4c-.23-.76-.1-1.57.35-2.22l1.16-1.67c.36-.52 1.05-.71 1.63-.44Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function LogoMark() {
  return (
    <span className="logo-mark" aria-hidden="true">
      <svg viewBox="0 0 40 40">
        <path d="M10 31V9h7.8c6 0 9.1 2.7 9.1 7.3 0 4.7-3.1 7.2-9.1 7.2H14" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="m21 22 8.8 9" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round"/>
      </svg>
    </span>
  );
}
