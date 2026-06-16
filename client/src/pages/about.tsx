import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { ArrowUpRight } from "lucide-react";
import { TeamContent } from "./team";
import { FAQContent } from "./faq";

const INK = "#1C1B1A";
const ACCENT = "#0c3981";
const HAIRLINE = "#E2DFD8";
const MUTED = "rgba(28, 27, 26, 0.55)";
const BODY = "rgba(28, 27, 26, 0.82)";
const MONO = "'Space Mono', monospace";
const SERIF = "'PT Serif', serif";

type LedgerItem = { num: string; title: string; body: string; testId?: string };

const beliefs: LedgerItem[] = [
  {
    num: "01",
    testId: "text-belief-1",
    title: "Knowledge is material",
    body: "Research gets lost through linguistic marginalization, institutional dismissal, unprofitable timing or cultural illegibility. Research needs deliberate preservation.",
  },
  {
    num: "02",
    testId: "text-belief-2",
    title: "Discovery is nonlinear",
    body: "The way knowledge emerges and re-emerges is oftentimes winding, contingent, influenced by shifting relevance. What seemed marginal in one era may prove essential in another. What appeared illegible within one framework may illuminate another.",
  },
  {
    num: "03",
    testId: "text-belief-3",
    title: "Form reveals sensibility",
    body: "Different artifacts reveal different sensibilities. We publish fluidly to work with the form each research project demands, preserving diversity in ways of knowing.",
  },
];

const supportCriteria: LedgerItem[] = [
  {
    num: "01",
    testId: "text-support-1",
    title: "Historical discontinuation",
    body: "Research delegitimized by shifting paradigms or prematurely abandoned due to funding loss",
  },
  {
    num: "02",
    testId: "text-support-2",
    title: "Disciplinary illegibility",
    body: "Work that falls between established fields or challenges dominant frameworks",
  },
  {
    num: "03",
    testId: "text-support-3",
    title: "Non-traditional outcomes",
    body: "Projects producing artifacts beyond conventional academic articles",
  },
  {
    num: "04",
    testId: "text-support-4",
    title: "Linguistic or geographic marginalization",
    body: "Research published in overlooked languages or cultural contexts",
  },
  {
    num: "05",
    testId: "text-support-5",
    title: "Alternative epistemologies",
    body: "Archival or experimental work that deepens understanding of alternative cosmologies for science and technology",
  },
];

const projectTypes: string[] = [
  "Experiments testing unverified hypotheses from neglected papers",
  "Continuing research along promising lines of inquiry that lost institutional support",
  "Recovery and curation of unpublished manuscripts, interviews, or proceedings",
  "Original analysis examining overlooked research teams, labs, or intellectual traditions",
  "Translation and critical editions of historically significant texts in non-dominant languages",
];

function Section({
  num,
  title,
  testId,
  children,
  mbClass = "mb-24 sm:mb-32",
}: {
  num: string;
  title: string;
  testId?: string;
  children: React.ReactNode;
  mbClass?: string;
}) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_3fr] gap-6 md:gap-8 ${mbClass}`}>
      <div className="pt-4" style={{ borderTop: `1px solid ${HAIRLINE}` }}>
        <Reveal
          as="h2"
          className="tb-cap text-[0.8125rem] uppercase tracking-[0.2em] font-normal"
          style={{ fontFamily: MONO, color: INK }}
          data-testid={testId}
        >
          {title}
        </Reveal>
      </div>
      <div className="pt-4" style={{ borderTop: `1px solid ${HAIRLINE}` }}>
        {children}
      </div>
    </div>
  );
}

function LedgerRow({ item, accentNum, flushTop }: { item: LedgerItem; accentNum?: boolean; flushTop?: boolean }) {
  return (
    <div
      className={`lgr-row grid grid-cols-1 sm:grid-cols-[60px_1fr] md:grid-cols-[80px_1fr_2fr] gap-4 md:gap-6 ${flushTop ? "pt-0" : "pt-6 sm:pt-8"} pb-6 sm:pb-8 items-start -mx-4 px-4 sm:mx-0 sm:px-0 transition-colors`}
      style={{ borderBottom: `1px solid ${HAIRLINE}` }}
      data-testid={item.testId}
    >
      <div
        className="tb-cap text-sm font-bold"
        style={{ fontFamily: MONO, color: accentNum ? ACCENT : MUTED }}
      >
        {item.num}
      </div>
      <h3
        className="tb-cap text-sm uppercase tracking-[0.1em]"
        style={{ fontFamily: MONO, color: INK }}
      >
        {item.title}
      </h3>
      <p className="tb-cap text-[1.0625rem] sm:text-lg leading-relaxed" style={{ color: BODY }}>
        {item.body}
      </p>
    </div>
  );
}

function FerroFilters() {
  const filters = [
    { id: "ferro-1", seed: 7, freq: "0.015 0.022", freqVals: "0.015 0.022;0.022 0.016;0.012 0.02;0.015 0.022", freqDur: "13s", scaleVals: "3;7;4;3", scaleDur: "7s" },
    { id: "ferro-2", seed: 19, freq: "0.013 0.02", freqVals: "0.013 0.02;0.02 0.014;0.011 0.018;0.013 0.02", freqDur: "16s", scaleVals: "2;6;3;2", scaleDur: "9s" },
    { id: "ferro-3", seed: 31, freq: "0.016 0.024", freqVals: "0.016 0.024;0.024 0.018;0.013 0.021;0.016 0.024", freqDur: "11s", scaleVals: "3;8;5;3", scaleDur: "8s" },
  ];
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true" focusable="false">
      <defs>
        {filters.map((flt) => (
          <filter
            key={flt.id}
            id={flt.id}
            x="-25%"
            y="-50%"
            width="150%"
            height="200%"
            colorInterpolationFilters="sRGB"
          >
            <feTurbulence type="fractalNoise" baseFrequency={flt.freq} numOctaves={2} seed={flt.seed} result="noise">
              <animate attributeName="baseFrequency" dur={flt.freqDur} values={flt.freqVals} repeatCount="indefinite" />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="noise" xChannelSelector="R" yChannelSelector="G" scale="4">
              <animate attributeName="scale" dur={flt.scaleDur} values={flt.scaleVals} repeatCount="indefinite" />
            </feDisplacementMap>
          </filter>
        ))}
      </defs>
    </svg>
  );
}

export default function About() {
  return (
    <div className="min-h-screen bg-background" style={{ color: INK, fontFamily: SERIF }}>
      <div className="relative z-[2]" style={{ padding: "0 var(--gutter)" }}>
        <div
          id="about"
          className="relative min-h-screen flex flex-col justify-center py-[6vh]"
          style={{ borderBottom: `1px solid ${HAIRLINE}` }}
          data-testid="hero-block"
        >
          <FerroFilters />
          <h1
            className="relative z-[2] m-0 sm:text-[clamp(1.875rem,5.2vw,58px)] sm:leading-[1.12] text-[clamp(1.75rem,7vw,34px)] leading-[1.18]"
            data-testid="text-about-title"
          >
            The RevivaL Fund
            <span style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "1.12em", fontWeight: 600 }}> is an experimental fund restoring </span>
            <span className="ferro-ink" style={{ filter: "url(#ferro-1)" }}>negLected</span>,{" "}
            <span className="ferro-ink" style={{ filter: "url(#ferro-2)" }}>iLLegibLe</span>,
            <span style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "1.12em", fontWeight: 600 }}> or </span>
            <span className="ferro-ink" style={{ filter: "url(#ferro-3)" }}>prematureLy</span>{" "}
            <span className="ferro-ink" style={{ filter: "url(#ferro-1)" }}>dismissed</span>
            <span style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: "1.12em", fontWeight: 600 }}> research to active circulation.</span>
          </h1>
        </div>

        <div className="pt-16 sm:pt-24">

          {/* SECTION 01 — What We Do */}
          <Section num="01" title="What We Do" testId="label-what-we-do">
            <div className="tb-cap text-xl md:text-2xl font-light leading-snug space-y-8 max-w-4xl">
              <Reveal as="p">We support scholars, experimentalists, and original thinkers to excavate intellectual lineages, clarify claims, and make forgotten or marginalized inquiry legible again.</Reveal>
              <Reveal as="p">Our work addresses a fundamental problem: valuable research disappears not because it lacks merit, but because it lacks the infrastructure, language, or institutional alignment to survive. We provide that infrastructure.</Reveal>
            </div>
          </Section>

          {/* SECTION 02 — What We Believe */}
          <Section num="02" title="What We Believe" testId="label-what-we-believe">
            <div className="flex flex-col">
              {beliefs.map((item, i) => (
                <Reveal key={item.num}>
                  <LedgerRow item={item} accentNum flushTop={i === 0} />
                </Reveal>
              ))}
            </div>
          </Section>

          {/* SECTION 03 — What We Support */}
          <Section num="03" title="What We Support" testId="label-what-we-support">
            <Reveal className="tb-cap text-xl md:text-2xl font-light leading-snug mb-12">
              We fund projects unlikely to receive institutional support due to:
            </Reveal>

            <div className="flex flex-col mb-16">
              {supportCriteria.map((item) => (
                <Reveal key={item.num}>
                  <LedgerRow item={item} />
                </Reveal>
              ))}
            </div>

            <div className="mb-12">
              <Reveal
                as="h3"
                className="text-[0.8125rem] uppercase tracking-[0.2em] font-bold mb-8"
                style={{ fontFamily: MONO, color: INK }}
                data-testid="text-project-types-heading"
              >
                Types of Projects We Fund, A Non-Exhaustive List
              </Reveal>
              <ul className="space-y-4 text-[1.0625rem] sm:text-lg leading-relaxed list-none p-0" style={{ color: BODY }}>
                {projectTypes.map((t) => (
                  <Reveal as="li" key={t} className="flex items-start">
                    <span className="mr-4 pt-1" style={{ fontFamily: MONO, color: ACCENT }}>&#42;</span>
                    <span>{t}</span>
                  </Reveal>
                ))}
              </ul>
            </div>

            <Reveal>
              <div className="relative overflow-hidden p-8" style={{ border: `1px solid ${HAIRLINE}` }}>
                <div className="absolute top-0 left-0 w-1 h-full" style={{ background: ACCENT }} />
                <div
                  className="text-[0.8125rem] uppercase tracking-[0.2em] mb-2"
                  style={{ fontFamily: MONO, color: MUTED }}
                >
                  Grant Allocation
                </div>
                <div className="text-xl md:text-2xl font-light leading-snug" data-testid="text-grant-size">
                  Generally $4,000–$10,000 USD, up to $25,000 in special cases.
                </div>
              </div>
            </Reveal>
          </Section>

          {/* SECTION 04 — Our Position in the Knowledge Ecosystem */}
          <Section num="04" title="Our Position in the Knowledge Ecosystem" testId="label-ecosystem">
            <div className="tb-cap text-[1.0625rem] sm:text-lg leading-relaxed space-y-6 max-w-3xl" style={{ color: BODY }}>
              <Reveal as="p">The goal of The Revival Fund is two-fold: to excavate forgotten or marginalized knowledge, and to model alternative approaches to knowledge discovery itself.</Reveal>
              <Reveal as="p">We complement institutional scholarship by funding and publishing work that cannot flourish within institutional constraints. We welcome academics and non-academics alike. The only criteria: relentless intellectual obsession and openness to unfamiliar ideas, methodologies, and collaborations.</Reveal>
              <Reveal as="p">By making diverse approaches to inquiry tangible and public, The Revival Fund creates reference points—provocations that expand what seems possible in a wide range of inquiries: scientific research, artistic creation, technological innovation, or humanistic investigation.</Reveal>
              <Reveal as="p">The Revival Fund builds toward an emerging ecosystem of open, experimental publishing where unconventional forms of inquiry can flourish and important ideas can find their way back into circulation.</Reveal>
            </div>
          </Section>

          {/* SECTION 05 — Further Reading */}
          <Section num="05" title="Further Reading" testId="text-about-further-reading">
            <div className="flex flex-col">
              <Reveal>
                <a
                  href="https://www.palladiummag.com/2025/08/22/the-case-for-crazy-philanthropy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-8 py-8 no-underline -mx-4 px-4 sm:mx-0 sm:px-4 reading-link"
                  style={{ borderBottom: `1px solid ${HAIRLINE}`, color: INK }}
                  data-testid="link-reading-palladium"
                >
                  <div className="rl-title tb-cap text-xl md:text-2xl font-light pr-2 md:pr-8">The Case for Crazy Philanthropy</div>
                  <div className="rl-meta flex items-center gap-4 shrink-0" style={{ color: MUTED }}>
                    <span className="text-sm uppercase tracking-[0.1em]" style={{ fontFamily: MONO }}>Palladium Magazine</span>
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </a>
              </Reveal>

              <Reveal>
                <a
                  href="https://goodscience.substack.com/p/venture-capital-has-lessons-for-government"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-8 py-8 no-underline -mx-4 px-4 sm:mx-0 sm:px-4 reading-link"
                  style={{ borderBottom: `1px solid ${HAIRLINE}`, color: INK }}
                  data-testid="link-reading-good-science"
                >
                  <div className="rl-title tb-cap text-xl md:text-2xl font-light pr-2 md:pr-8">Venture Capital Has Lessons for Government</div>
                  <div className="rl-meta flex items-center gap-4 shrink-0" style={{ color: MUTED }}>
                    <span className="text-sm uppercase tracking-[0.1em]" style={{ fontFamily: MONO }}>Good Science Project</span>
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </a>
              </Reveal>
            </div>
          </Section>

          {/* SECTION 06 — Colophon */}
          <Section num="06" title="Colophon" testId="text-about-colophon" mbClass="mb-10 sm:mb-12">
            <div className="tb-cap max-w-2xl text-[1.0625rem] sm:text-lg leading-relaxed" style={{ fontFamily: SERIF, color: BODY }}>
              <Reveal as="p" className="mb-6" data-testid="text-typeface-credit">
                The headings on this site are set in <span style={{ fontStyle: "italic" }}>Mean Hand</span>, a typeface by Anna Zhang created from the average of hundreds of thousands of handwriting samples. It is built from 814,255 handwritten characters collected by the U.S. government in the early 1990s to automate Census form processing. Each letter is constructed by stacking thousands of samples and applying a threshold — a mark appears only if that proportion of samples placed ink there. What resembles handwriting was written by no one: a distribution made visible as type.
              </Reveal>
              <Reveal>
                <a
                  href="https://portfolio.anna-zhang.com/projects/mean-hand"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 uppercase tracking-[0.2em] no-underline pb-1 colophon-link"
                  style={{ color: INK, borderBottom: `1px solid ${HAIRLINE}` }}
                  data-testid="link-mean-hand-project"
                >
                  Mean Hand by Anna Zhang <ArrowUpRight className="w-4 h-4" />
                </a>
              </Reveal>
            </div>
          </Section>

        </div>

        <div id="team">
          <TeamContent />
        </div>

        <div id="faq">
          <FAQContent />
        </div>
      </div>
      <Footer />
    </div>
  );
}
