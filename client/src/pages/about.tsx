import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { ArrowUpRight } from "lucide-react";
import { TeamContent } from "./team";
import { FAQContent } from "./faq";
import { useState, useRef, useEffect } from "react";
import { useSEO } from "@/hooks/useSEO";

import {
  EditorialSection,
  RegisterEntry,
  Leader,
  INK,
  ACCENT,
  HAIRLINE,
  MUTED,
  BODY,
  MONO,
  SERIF,
  CrosshairStar,
} from "@/components/editorial";




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

const whatWeDo: string[] = [
  "We support scholars, experimentalists, and original thinkers to excavate intellectual lineages, clarify claims, and make forgotten or marginalized inquiry legible again.",
  "Our work addresses a fundamental problem: valuable research disappears not because it lacks merit, but because it lacks the infrastructure, language, or institutional alignment to survive. We provide that infrastructure.",
];

const ecosystem: string[] = [
  "The goal of The Revival Fund is two-fold: to excavate forgotten or marginalized knowledge, and to model alternative approaches to knowledge discovery itself.",
  "We complement institutional scholarship by funding and publishing work that cannot flourish within institutional constraints. We welcome academics and non-academics alike. The only criteria: relentless intellectual obsession and openness to unfamiliar ideas, methodologies, and collaborations.",
  "By making diverse approaches to inquiry tangible and public, The Revival Fund creates reference points—provocations that expand what seems possible in a wide range of inquiries: scientific research, artistic creation, technological innovation, or humanistic investigation.",
  "The Revival Fund builds toward an emerging ecosystem of open, experimental publishing where unconventional forms of inquiry can flourish and important ideas can find their way back into circulation.",
];

const readings = [
  {
    title: "The Case for Crazy Philanthropy",
    source: "Palladium Magazine",
    href: "https://www.palladiummag.com/2025/08/22/the-case-for-crazy-philanthropy/",
    testId: "link-reading-palladium",
  },
  {
    title: "Venture Capital Has Lessons for Government",
    source: "Good Science Project",
    href: "https://goodscience.substack.com/p/venture-capital-has-lessons-for-government",
    testId: "link-reading-good-science",
  },
];

const generateWobblyCirclePath = (cx: number, cy: number, r: number, variation = 0) => {
  const points = [];
  const segments = 64;
  for (let i = 0; i < segments; i++) {
    const angle = (i / segments) * 2 * Math.PI;
    const wobble = 3.5 * Math.sin(3 * angle + variation) + 
                   2.0 * Math.cos(7 * angle - variation) + 
                   1.2 * Math.sin(13 * angle + 2 * variation);
    const currR = r + wobble;
    const x = cx + currR * Math.cos(angle);
    const y = cy + currR * Math.sin(angle);
    points.push(`${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`);
  }
  points.push('Z');
  return points.join(' ');
};

type RichWord = {
  text: string;
  type: "heading" | "text" | "focus";
  suffix?: string;
};

const richText: RichWord[] = [
  { text: "The", type: "heading" },
  { text: "RevivaL", type: "heading" },
  { text: "Fund", type: "heading" },
  { text: "is", type: "text" },
  { text: "an", type: "text" },
  { text: "experimental", type: "text" },
  { text: "fund", type: "text" },
  { text: "restoring", type: "text" },
  { text: "negLected", type: "focus", suffix: "," },
  { text: "iLLegibLe", type: "focus", suffix: "," },
  { text: "or", type: "text" },
  { text: "prematureLy", type: "focus" },
  { text: "dismissed", type: "focus" },
  { text: "research", type: "text" },
  { text: "to", type: "text" },
  { text: "active", type: "text" },
  { text: "circulation.", type: "text" },
];

export default function About() {
  useSEO({
    title: "The Revival Fund | Restoring Lost Research to Active Circulation",
    description: "An experimental fund supporting scholars, experimentalists, and original thinkers to excavate intellectual lineages and restore neglected, illegible, or prematurely dismissed research to active circulation.",
  });

  const [isHovering, setIsHovering] = useState(false);
  const targetPosRef = useRef({ x: 200, y: 200 });
  const startTimeRef = useRef(Date.now());
  const [lensPos, setLensPos] = useState({ x: 200, y: 200 });

  // LERP momentum loop
  useEffect(() => {
    let animationFrameId: number;
    const startTime = startTimeRef.current;

    const updatePosition = () => {
      if (!isHovering) {
        const elapsed = (Date.now() - startTime) * 0.001;
        const w = window.innerWidth;
        const h = window.innerHeight;
        targetPosRef.current = {
          x: w * (0.5 + 0.25 * Math.sin(elapsed * 0.25) * Math.cos(elapsed * 0.15)),
          y: h * (0.5 + 0.22 * Math.sin(elapsed * 0.35)),
        };
      }

      setLensPos((prev) => {
        const dx = targetPosRef.current.x - prev.x;
        const dy = targetPosRef.current.y - prev.y;
        if (Math.abs(dx) < 0.05 && Math.abs(dy) < 0.05) {
          return targetPosRef.current;
        }
        return {
          x: prev.x + dx * 0.12,
          y: prev.y + dy * 0.12,
        };
      });

      animationFrameId = requestAnimationFrame(updatePosition);
    };

    animationFrameId = requestAnimationFrame(updatePosition);
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovering]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    targetPosRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
    setIsHovering(true);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const ticks = [0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
    const rad = (deg * Math.PI) / 180;
    const x1 = 200 + 136 * Math.cos(rad);
    const y1 = 200 + 136 * Math.sin(rad);
    const x2 = 200 + 144 * Math.cos(rad);
    const y2 = 200 + 144 * Math.sin(rad);
    return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(28, 27, 26, 0.4)" strokeWidth="0.8" />;
  });

  const w = typeof window !== 'undefined' ? window.innerWidth : 1200;

  const renderHeroText = (isParchment: boolean) => {
    return (
      <h1
        className="m-0 sm:text-[clamp(1.5rem,4.2vw,3.5rem)] sm:leading-[1.12] text-[clamp(1.25rem,6vw,1.75rem)] leading-[1.22]"
        style={{
          fontFamily: SERIF,
          color: isParchment ? INK : '#EBE8E0',
        }}
      >
        {richText.map((word, idx) => {
          const isFocus = word.type === "focus";
          const isMeanHandWord = word.type === "heading" || word.type === "focus";
          const nextWord = richText[idx + 1];
          const prevWord = richText[idx - 1];
          const nextIsMeanHand = nextWord && (nextWord.type === "heading" || nextWord.type === "focus");
          const prevIsMeanHand = prevWord && (prevWord.type === "heading" || prevWord.type === "focus");

          const marginLeft = isMeanHandWord && prevWord && !prevIsMeanHand ? "0.18em" : undefined;
          let marginRight = isMeanHandWord && nextWord && !nextIsMeanHand ? "0.18em" : undefined;

          if (word.type === "heading" && nextWord && nextWord.type === "heading") {
            marginRight = "0.38em";
          }

          return (
            <span
              key={idx}
              className={isFocus ? (isParchment ? "hero-focus-parchment" : "hero-focus-blueprint") : ""}
              style={{
                fontFamily: word.type === "heading" ? "Mean Hand" : (word.type === "focus" ? "Mean Hand" : "Lato, sans-serif"),
                fontWeight: word.type === "heading" ? "bold" : (word.type === "focus" ? "normal" : "500"),
                color: isFocus
                  ? '#d0b070'
                  : (isParchment ? INK : '#EBE8E0'),
                display: isMeanHandWord ? "inline-block" : undefined,
                marginLeft,
                marginRight,
              }}
            >
              {word.text}
              {word.suffix || " "}
            </span>
          );
        })}
      </h1>
    );
  };

  const parchmentGridStyle = {
    backgroundImage: `
      linear-gradient(rgba(28, 27, 26, 0.035) 1px, transparent 1px),
      linear-gradient(90deg, rgba(28, 27, 26, 0.035) 1px, transparent 1px)
    `,
    backgroundSize: '50px 50px',
  };

  return (
    <div className="min-h-screen bg-background relative" style={{ color: INK, fontFamily: SERIF }}>

      {/* Hero Block (Concept B: Full Width DOM with Excavation Lens) */}
      <div
        id="about"
        className="relative min-h-screen flex flex-col justify-center overflow-hidden cursor-crosshair select-none sm:-ml-[150px] lg:-ml-[170px] sm:w-[calc(100%+150px)] lg:w-[calc(100%+170px)]"
        style={{ borderBottom: `1px dashed ${HAIRLINE}` }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        data-testid="hero-block"
      >
        <CrosshairStar className="absolute bottom-0 left-[30px] sm:left-[210px] lg:left-[230px] -translate-x-1/2 translate-y-1/2 hidden sm:block pointer-events-none z-[20]" />
        
        {/* Layer 0: Prussian Blue Blueprint Background */}
        <div className="absolute inset-0 z-[1] blueprint-grid flex flex-col justify-center pl-8 sm:pl-[246px] lg:pl-[266px] pr-8 sm:pr-[15vw] lg:pr-[22vw]">
          <div className="relative z-[1]">
            {renderHeroText(false)}
          </div>
        </div>

        {/* Layer 1: Parchment Overlay */}
        <div 
          className="absolute inset-0 z-[2] bg-background flex flex-col justify-center pl-8 sm:pl-[246px] lg:pl-[266px] pr-8 sm:pr-[15vw] lg:pr-[22vw]"
          style={{
            clipPath: `circle(140px at ${lensPos.x}px ${lensPos.y}px)`,
          }}
        >
          {/* Parchment Grid */}
          <div className="absolute inset-0 pointer-events-none opacity-40" style={parchmentGridStyle} />



          {/* Parchment Text */}
          <div className="relative z-[1]">
            {renderHeroText(true)}
          </div>
        </div>

        {/* Blueprint Measuring Scale Ticks */}
        <div className="absolute left-[30px] sm:left-[210px] lg:left-[230px] top-10 bottom-10 w-[15px] -translate-x-1/2 hidden sm:flex flex-col justify-between text-[0.6rem] font-mono text-slate-400 select-none pointer-events-none z-[2] items-center">
          <div>0.0m</div>
          <div>1.5m</div>
          <div>3.0m</div>
          <div>4.5m</div>
        </div>

        {/* Sliding Lens Container */}
        <div
          className="absolute pointer-events-none z-[4]"
          style={{
            left: lensPos.x - 200,
            top: lensPos.y - 200,
            width: 400,
            height: 400,
          }}
        >

          {/* Sketchy Manuscript Lens Border Guidelines overlay */}
          <svg 
            className="absolute inset-0 pointer-events-none"
            viewBox="0 0 400 400"
          >
            {/* Faint Outer Pencil Guidelines */}
            <circle cx="200" cy="200" r="152" stroke="rgba(28, 27, 26, 0.15)" strokeWidth="0.5" fill="none" strokeDasharray="3,3" />
            <circle cx="200" cy="200" r="132" stroke="rgba(28, 27, 26, 0.12)" strokeWidth="0.5" fill="none" />
            
            {/* Crosshair guidelines */}
            <line x1="200" y1="20" x2="200" y2="380" stroke="rgba(28, 27, 26, 0.1)" strokeWidth="0.5" strokeDasharray="4,6" />
            <line x1="20" y1="200" x2="380" y2="200" stroke="rgba(28, 27, 26, 0.1)" strokeWidth="0.5" strokeDasharray="4,6" />
            
            {/* Tick marks */}
            {ticks}

            {/* Double hand-drawn wobbly outline strokes (faint guidelines) */}
            <path d={generateWobblyCirclePath(200, 200, 140, 0)} stroke="rgba(28, 27, 26, 0.3)" strokeWidth="0.5" fill="none" />
            
            {/* Center tiny coordinate crosshair */}
            <line x1="195" y1="200" x2="205" y2="200" stroke="rgba(28, 27, 26, 0.35)" strokeWidth="0.8" />
            <line x1="200" y1="195" x2="200" y2="205" stroke="rgba(28, 27, 26, 0.35)" strokeWidth="0.8" />

            {/* Notations */}
            <text x="348" y="208" fill="rgba(28, 27, 26, 0.4)" fontSize="7" fontFamily="Lato, sans-serif" letterSpacing="0.05em">[θ=0.00rad]</text>
            <text x="205" y="48" fill="rgba(28, 27, 26, 0.4)" fontSize="7" fontFamily="Lato, sans-serif" letterSpacing="0.05em">[r=140.0mm]</text>
            <text x="40" y="194" fill="rgba(28, 27, 26, 0.4)" fontSize="7" fontFamily="Lato, sans-serif" letterSpacing="0.05em">[SYS_EXC_LENS]</text>
            
            {/* Faint sketching indicators */}
            <path d="M 200 48 L 200 56 M 197 52 L 200 56 L 203 52" fill="none" stroke="rgba(28, 27, 26, 0.25)" strokeWidth="0.8" />
            <path d="M 345 200 L 338 200 M 341 197 L 338 200 L 341 203" fill="none" stroke="rgba(28, 27, 26, 0.25)" strokeWidth="0.8" />
          </svg>
        </div>
      </div>

      {/* Main Content Area (Padded) */}
      <div className="relative z-[10] pl-8 sm:pl-24 pr-8 sm:pr-[var(--gutter)]">



        <div className="pt-28 sm:pt-40">

          {/* SECTION 01 — What We Do */}
          <EditorialSection num="01" title="What We Do" testId="label-what-we-do">
            <div className="flex flex-col">
              {whatWeDo.map((p, i) => (
                <Reveal key={i}>
                  <RegisterEntry flushTop={i === 0} compact largeText>
                    {p}
                  </RegisterEntry>
                </Reveal>
              ))}
            </div>
          </EditorialSection>

          {/* SECTION 02 — What We Believe */}
          <EditorialSection num="02" title="What We Believe" testId="label-what-we-believe">
            <div className="flex flex-col">
              {beliefs.map((item, i) => (
                <Reveal key={item.num}>
                  <RegisterEntry
                    title={item.title}
                    accent
                    flushTop={i === 0}
                    testId={item.testId}
                    largeText
                  >
                    {item.body}
                  </RegisterEntry>
                </Reveal>
              ))}
            </div>
          </EditorialSection>

          {/* SECTION 03 — What We Support */}
          <EditorialSection num="03" title="What We Support" testId="label-what-we-support">
            <Reveal
              className="text-[17.5px] sm:text-[20px] leading-relaxed mb-12 max-w-3xl"
              style={{ fontFamily: SERIF }}
            >
              We fund projects unlikely to receive institutional support due to:
            </Reveal>

            <div className="flex flex-col mb-16">
              {supportCriteria.map((item, i) => (
                <Reveal key={item.num}>
                  <RegisterEntry
                    title={item.title}
                    accent
                    flushTop={i === 0}
                    testId={item.testId}
                    largeText
                  >
                    {item.body}
                  </RegisterEntry>
                </Reveal>
              ))}
            </div>

            <div className="mb-12">
              <Reveal
                as="h3"
                className="text-xl md:text-2xl font-light leading-snug mb-8 max-w-3xl"
                style={{ fontFamily: SERIF, color: INK }}
                data-testid="text-project-types-heading"
              >
                Types of Projects We Fund — A Non-Exhaustive List
              </Reveal>
              <div className="flex flex-col">
                {projectTypes.map((t, i) => (
                  <Reveal key={t}>
                    <div
                      className={`flex flex-col gap-y-2 ${i === 0 ? "pt-0" : "pt-4"} pb-4`}
                    >
                      <div className="flex items-baseline gap-3 sm:gap-4 min-w-0">
                        <span
                          className="text-[0.75rem] tracking-[0.12em] tabular-nums shrink-0"
                          style={{ fontFamily: MONO, color: ACCENT }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <Leader />
                      </div>
                      <div
                        className="text-[17.5px] sm:text-[20px] leading-relaxed"
                        style={{ fontFamily: SERIF, color: BODY }}
                      >
                        {t}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal>
              <div className="flex flex-col gap-y-3 pt-7 sm:pt-9 pb-7 sm:pb-9" style={{ borderBottom: `1px dashed ${HAIRLINE}` }}>
                <div className="flex items-baseline gap-3 sm:gap-4 min-w-0">
                  <h3 className="text-[0.75rem] uppercase tracking-[0.12em] shrink-0" style={{ fontFamily: MONO, color: INK }}>
                    Grant Allocation
                  </h3>
                  <Leader />
                </div>
                <div className="text-[17.5px] sm:text-[20px] leading-relaxed" style={{ fontFamily: SERIF, color: INK }} data-testid="text-grant-size">
                  Generally $5,000–$12,500 USD, up to $25,000 in special cases.
                </div>
              </div>
            </Reveal>
          </EditorialSection>

          {/* SECTION 04 — Our Position in the Knowledge Ecosystem */}
          <EditorialSection num="04" title="Our Position in the Knowledge Ecosystem" testId="label-ecosystem">
            <div className="flex flex-col">
              {ecosystem.map((p, i) => (
                <Reveal key={i}>
                  <RegisterEntry flushTop={i === 0} compact largeText>
                    {p}
                  </RegisterEntry>
                </Reveal>
              ))}
            </div>
          </EditorialSection>

          {/* SECTION 05 — Further Reading */}
          <EditorialSection num="05" title="Further Reading" testId="text-about-further-reading">
            <div className="flex flex-col">
              {readings.map((r, i) => (
                <Reveal key={r.href}>
                  <a
                    href={r.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`read-entry flex flex-col gap-y-3 ${i === 0 ? "pt-0" : "pt-7 sm:pt-9"} pb-7 sm:pb-9 no-underline`}
                    style={{ color: INK }}
                    data-testid={r.testId}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 min-w-0">
                      <span className="rl-title text-xl md:text-2xl font-light shrink min-w-0" style={{ fontFamily: SERIF }}>
                        {r.title}
                      </span>
                      <span className="hidden sm:inline-flex flex-1" aria-hidden="true">
                        <Leader />
                      </span>
                      <span className="rl-meta flex items-center gap-2 shrink-0 text-sm uppercase tracking-[0.1em] mt-1 sm:mt-0" style={{ fontFamily: MONO, color: MUTED }}>
                        {r.source}
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </EditorialSection>

        </div>

        <Reveal>
          <div id="faq" className="border-t border-dashed pt-16 sm:pt-24 mt-20 sm:mt-28 relative" style={{ borderColor: HAIRLINE }}>
            <CrosshairStar className="absolute top-0 left-[-36px] -translate-x-1/2 -translate-y-1/2 hidden sm:block pointer-events-none" />
            <FAQContent isEmbedded largeText />
          </div>
        </Reveal>

        <Reveal>
          <div id="team" className="border-t border-dashed pt-16 sm:pt-24 mt-20 sm:mt-28 relative" style={{ borderColor: HAIRLINE }}>
            <CrosshairStar className="absolute top-0 left-[-36px] -translate-x-1/2 -translate-y-1/2 hidden sm:block pointer-events-none" />
            <TeamContent isEmbedded largeText />
          </div>
        </Reveal>
      </div>
      <Footer />
    </div>
  );
}
