import { Link } from "wouter";
import Reveal from "@/components/Reveal";
import { INK, ACCENT, HAIRLINE, MUTED, MONO, SERIF, SANS, BODY } from "@/components/editorial";
import { TYPE_LABELS, type GranteeType } from "@/data/grantees";

type Grantee = {
  slug: string;
  names: string;
  type: GranteeType;
  oneLiner: string;
};

type Props = {
  grantee: Grantee;
  portraitCaptions: string[];
};

function PortraitPlaceholder({ caption }: { caption: string }) {
  return (
    <figure className="flex flex-col gap-2" data-testid="placeholder-portrait">
      <div
        className="relative w-full overflow-hidden"
        style={{
          aspectRatio: "3 / 4",
          border: `1px solid ${HAIRLINE}`,
          backgroundColor: "rgba(12,57,129,0.02)",
        }}
        aria-label={`Portrait placeholder for ${caption}`}
      >
        {/* Crossed registration marks */}
        <span
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(135deg, transparent calc(50% - 0.5px), rgba(12,57,129,0.10) 50%, transparent calc(50% + 0.5px)), linear-gradient(45deg, transparent calc(50% - 0.5px), rgba(12,57,129,0.10) 50%, transparent calc(50% + 0.5px))",
          }}
        />
        <span
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[0.625rem] uppercase tracking-[0.2em] px-2 py-1"
          style={{ fontFamily: MONO, color: MUTED, backgroundColor: "var(--background, #fff)" }}
        >
          Portrait
        </span>
      </div>
      <figcaption
        className="text-[0.6875rem] uppercase tracking-[0.16em]"
        style={{ fontFamily: MONO, color: MUTED }}
      >
        {caption}
      </figcaption>
    </figure>
  );
}

export default function GranteeHero({ grantee, portraitCaptions }: Props) {
  return (
    <>
      <div className="pt-[max(14vh,120px)] sm:pt-[max(16vh,140px)]">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-[0.75rem] uppercase tracking-[0.2em] no-underline"
          style={{ fontFamily: MONO, color: ACCENT }}
          data-testid="link-back-portfolio"
        >
          <span aria-hidden="true">←</span> PortfoLio
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-10 lg:gap-16 pt-10 sm:pt-14 pb-16 sm:pb-24">
        {/* Left – portrait placeholders */}
        <div className="flex flex-col gap-8">
          {portraitCaptions.map((caption, i) => (
            <Reveal key={i}>
              <PortraitPlaceholder caption={caption} />
            </Reveal>
          ))}
        </div>

        {/* Right – metadata */}
        <div className="flex flex-col">
          <div
            className="mb-4 text-[0.75rem] uppercase tracking-[0.2em]"
            style={{ fontFamily: MONO, color: ACCENT }}
            data-testid="text-grantee-type"
          >
            {TYPE_LABELS[grantee.type]}
          </div>
          <h1
            className="text-[clamp(2rem,8vw,52px)] leading-[1.05] font-normal mb-6"
            style={{ fontFamily: SERIF, color: INK }}
            data-testid="text-grantee-title"
          >
            {grantee.names}
          </h1>
          <p
            className="text-[1.0625rem] sm:text-[1.25rem] leading-relaxed max-w-[52ch]"
            style={{ fontFamily: SERIF, color: BODY }}
            data-testid="text-grantee-oneliner"
          >
            {grantee.oneLiner}
          </p>
        </div>
      </div>
    </>
  );
}
