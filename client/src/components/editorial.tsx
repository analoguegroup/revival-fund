import Reveal from "@/components/Reveal";
import type { ReactNode } from "react";

export const INK = "#1e3a5f";
export const ACCENT = "#0c3981";
export const HAIRLINE = "#E2DFD8";
export const MUTED = "rgba(30, 58, 95, 0.55)";
export const BODY = "rgba(30, 58, 95, 0.82)";
export const MONO = "'Lato', sans-serif";
export const SERIF = "'Cardo', serif";
export const SANS = "'Lato', sans-serif";

/* Bold numbered section head — big sans number + bold uppercase title,
   mirroring the chapter blocks of the editorial reference. */
export function SectionHead({
  num,
  title,
  testId,
}: {
  num: string;
  title: string;
  testId?: string;
}) {
  return (
    <div className="flex items-baseline gap-3 sm:gap-4">
      <span
        className="shrink-0 text-[0.9375rem] font-bold tabular-nums"
        style={{ fontFamily: SANS, color: INK, letterSpacing: "0.02em" }}
      >
        {num}
      </span>
      <Reveal
        as="h2"
        className="text-[0.9375rem] font-bold uppercase leading-[1.3]"
        style={{ fontFamily: SANS, color: INK, letterSpacing: "0.07em" }}
        data-testid={testId}
      >
        {title}
      </Reveal>
    </div>
  );
}

export function SparkleStar({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`w-6 h-6 fill-current ${className}`}
      style={{ color: ACCENT }}
    >
      <path d="M12 2C12 7.5 16.5 12 22 12C16.5 12 12 16.5 12 22C12 16.5 7.5 12 2 12C7.5 12 12 7.5 12 2Z" />
    </svg>
  );
}

export function TechnicalReticle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`w-6 h-6 stroke-current fill-none stroke-[1.25] ${className}`}
      style={{ color: ACCENT }}
    >
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="2" x2="12" y2="22" />
      <line x1="2" y1="12" x2="22" y2="12" />
    </svg>
  );
}

export function TypographicAsterisk({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`w-6 h-6 stroke-current fill-none stroke-[1.5] ${className}`}
      style={{ color: ACCENT }}
    >
      <line x1="12" y1="2" x2="12" y2="22" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <line x1="5" y1="5" x2="19" y2="19" />
      <line x1="5" y1="19" x2="19" y2="5" />
    </svg>
  );
}

export function ConcentricTarget({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`w-6 h-6 stroke-current fill-none stroke-[1.25] ${className}`}
      style={{ color: ACCENT }}
    >
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="1.25" className="fill-current" />
    </svg>
  );
}

export function BlueprintCorner({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`w-6 h-6 stroke-current fill-none stroke-[1.5] ${className}`}
      style={{ color: ACCENT }}
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
      <path d="M5 8V5H8" />
      <path d="M19 8V5H16" />
      <path d="M5 16v3h3" />
      <path d="M19 16v3h-3" />
    </svg>
  );
}

export function DiamondTarget({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`w-6 h-6 stroke-current fill-none stroke-[1.25] ${className}`}
      style={{ color: ACCENT }}
    >
      <rect x="6.35" y="6.35" width="11.3" height="11.3" transform="rotate(45 12 12)" />
      <circle cx="12" cy="12" r="1.5" className="fill-current" />
      <line x1="12" y1="2" x2="12" y2="4" />
      <line x1="12" y1="20" x2="12" y2="22" />
      <line x1="2" y1="12" x2="4" y2="12" />
      <line x1="20" y1="12" x2="22" y2="12" />
    </svg>
  );
}

export function CrosshairStar({ 
  className, 
  type = "sparkle" 
}: { 
  className?: string; 
  type?: "sparkle" | "reticle" | "asterisk" | "concentric" | "blueprint" | "diamond" 
}) {
  const mergedClassName = `z-30 ${className || ""}`;
  switch (type) {
    case "reticle":
      return <TechnicalReticle className={mergedClassName} />;
    case "asterisk":
      return <TypographicAsterisk className={mergedClassName} />;
    case "concentric":
      return <ConcentricTarget className={mergedClassName} />;
    case "blueprint":
      return <BlueprintCorner className={mergedClassName} />;
    case "diamond":
      return <DiamondTarget className={mergedClassName} />;
    case "sparkle":
    default:
      return <SparkleStar className={mergedClassName} />;
  }
}

/* Two-zone editorial section: numbered head on the left, register on the right,
   each opened by a hairline rule. */
export function EditorialSection({
  num,
  title,
  testId,
  children,
  sideContent,
  mbClass = "mb-28 sm:mb-40",
}: {
  num: string;
  title: string;
  testId?: string;
  children: ReactNode;
  sideContent?: ReactNode;
  mbClass?: string;
}) {
  return (
    <Reveal
      as="div"
      className={`grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-6 lg:gap-14 relative ${mbClass}`}
    >
      {/* Curved Star Crosshair at the intersection on desktop */}
      <CrosshairStar className="absolute top-0 left-[-36px] -translate-x-1/2 -translate-y-1/2 hidden sm:block pointer-events-none" />

      <div className="pt-4 animate-none" style={{ borderTop: `1px dashed ${HAIRLINE}` }}>
        <SectionHead num={num} title={title} testId={testId} />
        {sideContent}
      </div>
      <div className="pt-4" style={{ borderTop: `1px dashed ${HAIRLINE}` }}>
        {children}
      </div>
    </Reveal>
  );
}

/* Dotted leader rule that fills the space between an entry and its index. */
export function Leader() {
  return (
    <span
      aria-hidden="true"
      className="flex-1 self-end mb-[0.34em] min-w-[1.5rem]"
      style={{ borderBottom: `1px dotted ${MUTED}`, opacity: 0.6 }}
    />
  );
}

/* A single register line: section-relative ref on the left, optional uppercase
   entry title, dotted leader, then body beneath. */
export function RegisterEntry({
  title,
  accent,
  children,
  flushTop,
  compact,
  testId,
  largeText = false,
}: {
  title?: string;
  accent?: boolean;
  children?: ReactNode;
  flushTop?: boolean;
  compact?: boolean;
  testId?: string;
  largeText?: boolean;
}) {
  return (
    <article
      className={`flex flex-col gap-y-3 ${
        flushTop ? "pt-0" : compact ? "pt-3 sm:pt-4" : "pt-7 sm:pt-9"
      } ${compact ? "pb-3 sm:pb-4" : "pb-7 sm:pb-9"}`}
      data-testid={testId}
    >
      {title && (
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 sm:gap-x-4 min-w-0">
          <h3
            className="text-[0.75rem] uppercase tracking-[0.12em]"
            style={{ fontFamily: MONO, color: accent ? ACCENT : INK }}
          >
            {title}
          </h3>
          <Leader />
        </div>
      )}
      {children && (
        <div
          className={`${largeText ? "text-[17.5px] sm:text-[20px]" : "text-sm sm:text-base"} leading-relaxed`}
          style={{ fontFamily: SERIF, color: INK }}
        >
          {children}
        </div>
      )}
    </article>
  );
}
