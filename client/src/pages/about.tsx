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



import luxuryMetalFrame from "@assets/luxury_metal_frame.png";
import luxuryGlassSphere from "@assets/luxury_glass_sphere.png";
import luxuryRefractionLens from "@assets/luxury_refraction_lens.png";


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

function LiquidGlassFilters() {
  const coordsMapSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="392" height="392" viewBox="0 0 392 392">
    <defs>
      <linearGradient id="rx" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#000000" />
        <stop offset="100%" stop-color="#ff0000" />
      </linearGradient>
      <linearGradient id="gy" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#000000" />
        <stop offset="100%" stop-color="#00ff00" />
      </linearGradient>
    </defs>
    <rect width="392" height="392" fill="url(#rx)" />
    <rect width="392" height="392" fill="url(#gy)" style="mix-blend-mode: screen" />
  </svg>
  `;
  const coordsMapUri = `data:image/svg+xml;utf8,${encodeURIComponent(coordsMapSvg.trim())}`;

  const radialMaskSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="392" height="392" viewBox="0 0 392 392">
    <defs>
      <radialGradient id="rm" cx="196" cy="196" r="140" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#ffffff" />
        <stop offset="70%" stop-color="#a0a0a0" />
        <stop offset="100%" stop-color="#000000" />
      </radialGradient>
    </defs>
    <rect width="392" height="392" fill="url(#rm)" />
  </svg>
  `;
  const radialMaskUri = `data:image/svg+xml;utf8,${encodeURIComponent(radialMaskSvg.trim())}`;

  const noiseMaskSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="392" height="392" viewBox="0 0 392 392">
    <defs>
      <radialGradient id="nm" cx="196" cy="196" r="140" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#000000" />
        <stop offset="50%" stop-color="#000000" />
        <stop offset="90%" stop-color="#ffffff" />
        <stop offset="100%" stop-color="#ffffff" />
      </radialGradient>
    </defs>
    <rect width="392" height="392" fill="url(#nm)" />
  </svg>
  `;
  const noiseMaskUri = `data:image/svg+xml;utf8,${encodeURIComponent(noiseMaskSvg.trim())}`;

  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" focusable="false">
      <defs>
        <filter id="liquid-glass-filter" x="-20%" y="-20%" width="140%" height="140%" colorInterpolationFilters="sRGB">
          {/* 1. Load the coordinate map and radial mask */}
          <feImage href={coordsMapUri} result="coords-map" />
          <feImage href={radialMaskUri} result="radial-mask" />
          <feImage href={noiseMaskUri} result="noise-mask" />

          {/* 2. Calculate coordinates displacement masked to 0 at edges: coords * mask - 0.5 * mask + 0.5 */}
          <feComposite in="coords-map" in2="radial-mask" operator="arithmetic" k1="1" k2="0" k3="-0.5" k4="0.5" result="masked-displacement" />

          {/* 3. Generate vertical glass ripple noise */}
          <feTurbulence type="fractalNoise" baseFrequency="0.08 0.005" numOctaves="2" seed="5" result="noise" />

          {/* 4. Mask the noise so it is zero in the center of the lens */}
          <feComposite in="noise" in2="noise-mask" operator="arithmetic" k1="1" k2="0" k3="0" k4="0" result="masked-noise" />

          {/* 5. Scale noise (0.06) and add to displacement, with a -0.03 offset to center the noise */}
          <feComposite in="masked-displacement" in2="masked-noise" operator="arithmetic" k1="0" k2="1" k3="0.06" k4="-0.03" result="final-displacement-map" />

          {/* 7. Extract R, G, B channels of the backdrop graphic */}
          <feColorMatrix type="matrix" values="
            1 0 0 0 0
            0 0 0 0 0
            0 0 0 0 0
            0 0 0 1 0" in="SourceGraphic" result="red-ch" />

          <feColorMatrix type="matrix" values="
            0 0 0 0 0
            0 1 0 0 0
            0 0 0 0 0
            0 0 0 1 0" in="SourceGraphic" result="green-ch" />

          <feColorMatrix type="matrix" values="
            0 0 0 0 0
            0 0 0 0 0
            0 0 1 0 0
            0 0 0 1 0" in="SourceGraphic" result="blue-ch" />

          {/* 8. Displace channels independently for physical chromatic aberration */}
          <feDisplacementMap in="red-ch" in2="final-displacement-map" xChannelSelector="R" yChannelSelector="G" scale="0" result="disp-red" />
          <feDisplacementMap in="green-ch" in2="final-displacement-map" xChannelSelector="R" yChannelSelector="G" scale="0" result="disp-green" />
          <feDisplacementMap in="blue-ch" in2="final-displacement-map" xChannelSelector="R" yChannelSelector="G" scale="0" result="disp-blue" />

          {/* 9. Merge channels back together */}
          <feBlend mode="screen" in="disp-red" in2="disp-green" result="rg" />
          <feBlend mode="screen" in="rg" in2="disp-blue" result="lit-glass" />
        </filter>
      </defs>
    </svg>
  );
}

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
        className="m-0 sm:text-[clamp(2.25rem,6.24vw,70px)] sm:leading-[1.12] text-[clamp(2.1rem,8.4vw,41px)] leading-[1.18]"
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
        <div className="absolute inset-0 z-[1] blueprint-grid flex flex-col justify-center pl-8 sm:pl-[246px] lg:pl-[266px] pr-12 sm:pr-[15vw] lg:pr-[22vw]">
          <div className="relative z-[1]">
            {renderHeroText(false)}
          </div>
        </div>

        {/* Layer 1: Parchment Overlay */}
        <div 
          className="absolute inset-0 z-[2] bg-background flex flex-col justify-center pl-8 sm:pl-[246px] lg:pl-[266px] pr-12 sm:pr-[15vw] lg:pr-[22vw]"
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

        {/* Liquid Glass Custom Filters */}
        <LiquidGlassFilters />

        {/* Sliding Lens Container */}
        <div
          className="absolute pointer-events-none z-[4] hidden sm:block"
          style={{
            left: lensPos.x - 200,
            top: lensPos.y - 200,
            width: 400,
            height: 400,
          }}
        >
          {/* Backdrop Filter Glass Lens */}
          <div 
            className="absolute rounded-full overflow-hidden"
            style={{
              left: 60,
              top: 60,
              width: 280,
              height: 280,
              backdropFilter: 'url(#liquid-glass-filter) contrast(1.05) brightness(0.96)',
              WebkitBackdropFilter: 'url(#liquid-glass-filter) contrast(1.05) brightness(0.96)',
            }}
          >
            {/* Refraction Profile Overlay */}
            <div 
              className="absolute inset-0 mix-blend-overlay opacity-20 pointer-events-none"
              style={{
                backgroundImage: `url(${luxuryRefractionLens})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />

            {/* Glass Sphere Highlights & Reflections Overlay */}
            <div 
              className="absolute inset-0 mix-blend-screen opacity-25 pointer-events-none"
              style={{
                backgroundImage: `url(${luxuryGlassSphere})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />

            {/* Polarized Camera Anti-Reflective Optical Coating - Amber/Gold Glass Hue */}
            <div 
              className="absolute inset-0 mix-blend-screen opacity-10 pointer-events-none"
              style={{
                background: 'radial-gradient(circle at 35% 35%, rgba(255, 210, 80, 0.6) 0%, rgba(230, 130, 10, 0.35) 45%, rgba(160, 60, 0, 0.2) 75%, transparent 100%)',
              }}
            />

            {/* Anamorphic Specular Glint Sweeps */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-20"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 45%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 55%, rgba(255,255,255,0) 100%)',
              }}
            />
          </div>

          {/* Beaded Metallic Frame Bezel */}
          <div
            className="absolute pointer-events-none"
            style={{
              left: 55,
              top: 55,
              width: 290,
              height: 290,
              backgroundImage: `url(${luxuryMetalFrame})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              mixBlendMode: 'screen',
              opacity: 0.35,
            }}
          />

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
