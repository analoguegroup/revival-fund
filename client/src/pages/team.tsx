import { type ReactNode, useEffect, useRef, useCallback } from "react";
import { useSEO } from "@/hooks/useSEO";
import { EditorialSection, SectionHead, Leader, ACCENT, SANS, CrosshairStar } from "@/components/editorial";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { Globe, Linkedin } from "lucide-react";
import { SiX, SiSubstack, SiInstagram } from "react-icons/si";
import benjaminPhoto from "@assets/IMG_2001_1771594918663.jpeg";
import stuartPhoto from "@/assets/images/team/stuart-buck.jpeg";
import aishwaryaPhoto from "@/assets/images/team/aishwarya-khanduja-cropped.png";
import scottPhoto from "@/assets/images/team/scott-moore.png";
import tasneemPhoto from "@/assets/images/team/tasneem-nabi.jpg";
import wendiPhoto from "@/assets/images/team/wendi-yan.jpg";
import hiyaPhoto from "@/assets/images/team/hiya-jain.png";
import zacPhoto from "@/assets/images/team/zac-hill.jpeg";
import davidPhoto from "@/assets/images/team/david-lang.jpg";
import peterPhoto from "@/assets/images/team/peter-wang.webp";


const INK = "#1e3a5f";
const HAIRLINE = "#E2DFD8";
const BODY = "rgba(30, 58, 95, 0.82)";
const MONO = "'Lato', sans-serif";
const SERIF = "'Cardo', serif";

const PATRON_FILTER_ID = "patron-patina-noise";
const PATRON_FILTER_REVEAL_ID = "patron-patina-reveal";

function BronzePatronName({ text }: { text: string }) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const animRef = useRef<number>(0);
  const mousePos = useRef<{ x: number; y: number } | null>(null);
  const intensities = useRef<number[]>([]);
  const chars = text.split("");

  const update = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const mp = mousePos.current;
    const rect = container.getBoundingClientRect();
    const maxDist = rect.width * 0.6;

    for (let i = 0; i < letterRefs.current.length; i++) {
      const span = letterRefs.current[i];
      if (!span) continue;

      let target = 0;
      if (mp) {
        const sr = span.getBoundingClientRect();
        const cx = sr.left + sr.width / 2;
        const cy = sr.top + sr.height / 2;
        const dist = Math.sqrt((mp.x - cx) ** 2 + (mp.y - cy) ** 2);
        target = Math.max(0, 1 - dist / maxDist);
        target = target ** 0.8;
      }

      const prev = intensities.current[i] ?? 0;
      const lerped = prev + (target - prev) * 0.1;
      intensities.current[i] = lerped;

      const bronze = lerped;
      const sr2 = 55 + bronze * 50;
      const sg = 90 - bronze * 20;
      const sb = 72 - bronze * 22;
      span.style.textShadow = bronze < 0.01 ? "" : `
        0.5px 0.5px 0px rgba(${sr2 - 20}, ${sg - 20}, ${sb - 15}, ${0.8 * bronze}),
        1px 1px 0px rgba(${sr2 - 25}, ${sg - 25}, ${sb - 20}, ${0.6 * bronze}),
        2px 2px 0.5px rgba(${sr2 - 35}, ${sg - 35}, ${sb - 28}, ${0.25 * bronze}),
        0px -0.5px 0px rgba(255, 255, 255, ${0.05 + bronze * 0.12}),
        3px 3px 7px rgba(30, 25, 20, ${0.08 * bronze})
      `;

      const reveal = span.querySelector(".p-bronze-reveal") as HTMLElement;
      if (reveal) reveal.style.opacity = String(Math.min(lerped ** 2.5 * 1.3, 1));

      const patina = span.querySelector(".p-patina-layer") as HTMLElement;
      if (patina) patina.style.opacity = String(Math.min(lerped ** 1.8 * 1.2, 1));
    }

    animRef.current = requestAnimationFrame(update);
  }, []);

  useEffect(() => {
    intensities.current = new Array(chars.length).fill(0);
    animRef.current = requestAnimationFrame(update);
    const el = containerRef.current;
    const onMove = (e: MouseEvent) => { mousePos.current = { x: e.clientX, y: e.clientY }; };
    const onLeave = () => { mousePos.current = null; };
    if (el) { el.addEventListener("mousemove", onMove); el.addEventListener("mouseleave", onLeave); }
    return () => {
      cancelAnimationFrame(animRef.current);
      if (el) { el.removeEventListener("mousemove", onMove); el.removeEventListener("mouseleave", onLeave); }
    };
  }, [update, chars.length]);

  const renderChar = (ch: string, i: number) => (
    <span
      key={i}
      ref={(el) => { letterRefs.current[i] = el; }}
      style={{ position: "relative", display: "inline-block" }}
    >
      <span style={{ position: "relative", zIndex: 1, fontSize: "inherit" }}>{ch === " " ? "\u00a0" : ch}</span>
      <span
        className="p-bronze-reveal"
        aria-hidden="true"
        style={{
          position: "absolute", inset: 0,
          color: "rgb(195, 155, 85)",
          filter: `url(#${PATRON_FILTER_REVEAL_ID})`,
          opacity: 0, pointerEvents: "none", zIndex: 2,
        }}
      >{ch === " " ? "\u00a0" : ch}</span>
      <span
        className="p-patina-layer"
        aria-hidden="true"
        style={{
          position: "absolute", inset: 0,
          color: "rgb(210, 175, 105)",
          filter: `url(#${PATRON_FILTER_ID})`,
          opacity: 0, pointerEvents: "none", zIndex: 3,
        }}
      >{ch === " " ? "\u00a0" : ch}</span>
    </span>
  );

  const groups: JSX.Element[] = [];
  let globalIdx = 0;
  const words = text.split(" ");
  for (let w = 0; w < words.length; w++) {
    if (w > 0) {
      groups.push(renderChar(" ", globalIdx));
      globalIdx++;
    }
    const wordChars = words[w].split("").map((ch) => {
      const el = renderChar(ch, globalIdx++);
      return el;
    });
    groups.push(
      <span key={`word-${w}`} style={{ whiteSpace: "nowrap", display: "inline" }}>
        {wordChars}
      </span>
    );
  }

  return (
    <span ref={containerRef} style={{ cursor: "default", display: "inline" }}>
      {groups}
    </span>
  );
}

function PatronSVGFilters() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }}>
      <defs>
        <filter id={PATRON_FILTER_ID}>
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves={4} seed={5} result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feComponentTransfer in="gray" result="mask">
            <feFuncA type="linear" slope="3.0" intercept="-0.4" />
          </feComponentTransfer>
          <feComposite in="SourceGraphic" in2="mask" operator="in" />
        </filter>
        <filter id={PATRON_FILTER_REVEAL_ID}>
          <feTurbulence type="fractalNoise" baseFrequency="0.025" numOctaves={2} seed={11} result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feComponentTransfer in="gray" result="mask">
            <feFuncA type="linear" slope="12.0" intercept="-4.0" />
          </feComponentTransfer>
          <feComposite in="SourceGraphic" in2="mask" operator="in" />
        </filter>
      </defs>
    </svg>
  );
}

function SocialLinksInline({ links }: { links: Array<{ icon: ReactNode; href: string; label: string }> }) {
  return (
    <div className="flex items-center gap-4 pt-1">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors footer-link"
          style={{ color: BODY, opacity: 0.5 }}
          aria-label={link.label}
          data-testid={`link-social-${link.label.toLowerCase().replace(/\s/g, '-')}`}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}

function PersonPhoto({ photo, name, testId, zoom = 1, offsetX = 0 }: { photo: string; name: string; testId: string; zoom?: number; offsetX?: number }) {
  return (
    <div
      className="relative flex-shrink-0 overflow-hidden"
      style={{ width: 96, height: 96, background: "#0c3981" }}
    >
      <img
        src={photo}
        alt={name}
        className="w-full h-full object-cover object-top"
        style={{
          filter: "grayscale(100%) brightness(1.15) contrast(0.9)",
          mixBlendMode: "screen" as const,
          transform: (zoom !== 1 || offsetX !== 0) ? `scale(${zoom}) translateX(${offsetX}%)` : undefined,
          transformOrigin: "center top",
        }}
        data-testid={`img-${testId}`}
      />
    </div>
  );
}


const TEAM: Array<{
  name: string;
  title: string;
  photo: string;
  photoZoom?: number;
  photoOffsetX?: number;
  bio: string;
  testId: string;
  links: Array<{ icon: ReactNode; href: string; label: string }>;
}> = [
  {
    name: "Wendi Yan",
    title: "Fund Director, The Revival Fund",
    photo: wendiPhoto,
    bio: 'Wendi Yan writes and makes sci-fi art about knowledge that has been lost, mistranslated or overlooked. She holds an A.B. in History of Science from Princeton University, where she received the Horace Wilson Thesis Prize in the History of Science, and an M.S. in Fiction and Entertainment from SCI-Arc. She was an inaugural Steve Jobs Archive Fellow and the Grand Prix recipient of the 6th VH Award by Hyundai Motor Group. She has done cultural R&D through residencies at A24 Labs, South Park Commons, Cosmos Institute, Eyebeam, and NEW INC. Her writing on artemisinin discovery for Asimov Press was named \u201CBest of Journalism\u201D by The Syllabus.',
    testId: "text-founding-wendi-yan",
    links: [
      { icon: <Globe className="w-4 h-4" />, href: "https://wendiyan.com", label: "Wendi website" },
      { icon: <SiInstagram className="w-4 h-4" />, href: "https://www.instagram.com/wendiyan/", label: "Wendi instagram" },
      { icon: <SiX className="w-4 h-4" />, href: "https://x.com/WendiYan5", label: "Wendi twitter" },
      { icon: <Linkedin className="w-4 h-4" />, href: "https://www.linkedin.com/in/wendi-yan/", label: "Wendi linkedin" },
    ],
  },
  {
    name: "Hiya Jain",
    title: "Editorial Lead, The Revival Fund",
    photo: hiyaPhoto,
    bio: "Hiya Jain writes about the history of science, biology, and metascience on her Substack, Mundane Beauty. She is a fellow at the Roots of Progress Institute, and her writing has also appeared in Asimov Press and the Good Science Project. She graduated from Barnard College with degrees in History and Neuroscience, and has worked with historians Mark Mazower and Matthew Stanley on long-form research projects.",
    testId: "text-founding-hiya-jain",
    links: [
      { icon: <Globe className="w-4 h-4" />, href: "https://hiyaja.in/", label: "Hiya website" },
      { icon: <SiSubstack className="w-4 h-4" />, href: "https://www.mundane.beauty/", label: "Hiya substack" },
      { icon: <SiX className="w-4 h-4" />, href: "https://x.com/jainhiya_", label: "Hiya twitter" },
      { icon: <Linkedin className="w-4 h-4" />, href: "https://www.linkedin.com/in/hiya-jain-801110215/", label: "Hiya linkedin" },
    ],
  },
];

const ADVISORS: Array<{
  name: string;
  title: string;
  photo: string;
  photoZoom?: number;
  photoOffsetX?: number;
  bio: string;
  testId: string;
  links: Array<{ icon: ReactNode; href: string; label: string }>;
}> = [
  {
    name: "Benjamin Anderson",
    title: "Founder & CEO, AION Biosciences",
    photo: benjaminPhoto,
    bio: "At AION, Benjamin and his team are establishing the category of read-write bioelectricity using non-invasive interventions, targeting aging as a breakdown in goal-directedness. Their work draws on Michael Levin's developmental bioelectricity research and control systems engineering. He previously built and exited Wand, a software platform, and Legacy Interviews, a media company. He writes about the journey in real time on his newsletter, Conscious Repository.",
    testId: "text-advisor-benjamin-anderson",
    links: [
      { icon: <SiX className="w-4 h-4" />, href: "https://x.com/consciousrepo", label: "Benjamin twitter" },
      { icon: <SiSubstack className="w-4 h-4" />, href: "https://www.consciousrepository.com/", label: "Benjamin substack" },
    ],
  },
  {
    name: "Stuart Buck",
    title: "Executive Director, Good Science Project",
    photo: stuartPhoto,
    bio: "As Vice President of Research at Arnold Ventures, Stuart funded foundational work on scientific reproducibility, including the Reproducibility Projects in Psychology and Cancer Biology, and helped launch the Center for Open Science, the Meta-Research Innovation Center at Stanford, and the TOP Guidelines—now the world's most widely-adopted standards for scientific publication. He holds a Ph.D. in education policy and a J.D. with honors from Harvard Law School. His work on research integrity and transparency has been featured in Wired, The New York Times, The Atlantic, and The Economist.",
    testId: "text-advisor-stuart-buck",
    links: [
      { icon: <SiX className="w-4 h-4" />, href: "https://x.com/stuartbuck1", label: "Stuart twitter" },
      { icon: <Linkedin className="w-4 h-4" />, href: "https://www.linkedin.com/in/stuartbuck/", label: "Stuart linkedin" },
      { icon: <Globe className="w-4 h-4" />, href: "https://goodscienceproject.org/about/stuart-buck/", label: "Stuart website" },
    ],
  },
  {
    name: "Zac Hill",
    title: "Co-Founder & COO, Office of American Possibilities",
    photo: zacPhoto,
    bio: "Zac Hill led the design research phase of Frontline Justice, having previously worked with the Department of Justice on the relaunch of the Office for Access to Justice. He is the co-founder and Chief Operating Officer of the Office of American Possibilities, a venture studio for high-impact early-stage social and civic initiatives, and was the Chief Operating Officer of The Future Project, a national youth development nonprofit. Prior to that, Zac was a Lead Game Designer for Magic: The Gathering, winning an Origins Award for Magic: Innistrad, and was the Lead Gameplay Designer for Magic: Duels, which was named one of PCGamer's \u201C100 Greatest Games of All Time\u201D.",
    testId: "text-advisor-zac-hill",
    links: [
      { icon: <Globe className="w-4 h-4" />, href: "https://www.frontlinejustice.org/team/zac-hill", label: "Zac website" },
      { icon: <Linkedin className="w-4 h-4" />, href: "https://www.linkedin.com/in/zacdchill/", label: "Zac linkedin" },
    ],
  },
  {
    name: "Aishwarya Khanduja",
    title: "Founder, Analogue Group",
    photo: aishwaryaPhoto,
    bio: "Aishwarya runs Analogue, an R&D fund creating space and structure for antidisciplinary thinkers, fragile early-stage ideas, and the kinds of experiments that become obvious only in hindsight. She holds an MPhil in Bioscience Enterprise from Cambridge and a BHSc in Biomedical Science from the University of Calgary. Aishwarya has worked in biotech, specifically in AI assisted diagnostics and clinical decision support. Her research has been supported by the Cosmos Institute and Belong Foundation.",
    testId: "text-advisor-aishwarya-khanduja",
    links: [
      { icon: <Globe className="w-4 h-4" />, href: "https://www.aishwaryadoingthings.com/", label: "Aishwarya website" },
      { icon: <Globe className="w-4 h-4" />, href: "https://analoguegroup.org/", label: "Aishwarya analogue" },
      { icon: <SiX className="w-4 h-4" />, href: "https://x.com/aishdoingthings", label: "Aishwarya twitter" },
      { icon: <Linkedin className="w-4 h-4" />, href: "https://www.linkedin.com/in/aishwarya-khanduja/", label: "Aishwarya linkedin" },
    ],
  },
  {
    name: "David Lang",
    title: "Executive Director, Experiment Foundation",
    photo: davidPhoto,
    bio: "David Lang is the Executive Director of the Experiment Foundation. He co-founded OpenROV, an underwater drone company, and Sofar, an ocean technology company. He also created Open Explorer (now Field Notes). David has served on NOAA's Ocean Exploration Advisory Board and is a TED Senior Fellow and National Geographic Emerging Explorer.",
    testId: "text-advisor-david-lang",
    links: [
      { icon: <SiX className="w-4 h-4" />, href: "https://x.com/davidtlang", label: "David twitter" },
      { icon: <Globe className="w-4 h-4" />, href: "https://davidtlang.com", label: "David website" },
    ],
  },
  {
    name: "Scott Moore",
    title: "Founder, Public Works",
    photo: scottPhoto,
    bio: "Scott Moore is an independent researcher and technologist committed to supporting open science. He is the founder of Public Works, an open source ecosystem fund that has distributed over $50 million to maintainers worldwide. In his spare time, Scott serves on the board of organizations like Gray Area, a San Francisco-based cultural center and Upward Spiral an alignment lab focused on cooperative paradigms for artificial intelligence. He is also an award winning film producer as a supporter of Ursa Major.",
    testId: "text-advisor-scott-moore",
    links: [
      { icon: <SiX className="w-4 h-4" />, href: "https://x.com/notscottmoore", label: "Scott twitter" },
    ],
  },
  {
    name: "Tasneem Nabi",
    title: "Head of Strategy, Analogue Group",
    photo: tasneemPhoto,
    bio: "Tasneem is a product builder and founder focused on the intersection of AI and practical health applications. She previously founded Ratio Labs, an AI development agency, and built products at Meta and EY.",
    testId: "text-advisor-tasneem-nabi",
    links: [
      { icon: <Globe className="w-4 h-4" />, href: "https://www.tasneemnabi.com/", label: "Tasneem website" },
      { icon: <SiX className="w-4 h-4" />, href: "https://x.com/TasneemNabi", label: "Tasneem twitter" },
      { icon: <Linkedin className="w-4 h-4" />, href: "https://www.linkedin.com/in/tasneemnabi/", label: "Tasneem linkedin" },
    ],
  },
  {
    name: "Peter Wang",
    title: "Co-Founder & CEO, Anaconda",
    photo: peterPhoto,
    bio: "Peter Wang is the co-founder and CEO of Anaconda, the company behind the world's most popular open-source Python distribution and the backbone of modern data science and AI infrastructure. He is a long-time advocate for open science, scientific computing, and the Python ecosystem, and has spent his career building tools that lower the barriers to scientific discovery.",
    testId: "text-advisor-peter-wang",
    links: [
      { icon: <SiX className="w-4 h-4" />, href: "https://x.com/pwang", label: "Peter twitter" },
    ],
  },
];

type PersonData = typeof TEAM[number];

function PersonSection({
  num,
  title,
  testId,
  people,
  largeText = false,
}: {
  num: string;
  title: string;
  testId?: string;
  people: PersonData[];
  largeText?: boolean;
}) {
  const GRID = "grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-x-10 lg:gap-x-14";
  return (
    <div className="mb-28 sm:mb-40">
      {/* Section header row */}
      <div className={`${GRID} relative mb-6 md:mb-0`}>
        {/* Curved Star Crosshair at the intersection on desktop */}
        <CrosshairStar className="absolute top-0 left-[-36px] -translate-x-1/2 -translate-y-1/2 hidden sm:block pointer-events-none" />

        <div className="pt-4 animate-none" style={{ borderTop: `1px dashed ${HAIRLINE}` }}>
          <SectionHead num={num} title={title} testId={testId} />
        </div>
        <div className="pt-4 hidden lg:block" style={{ borderTop: `1px dashed ${HAIRLINE}` }} />
      </div>
      {/* Per-person rows — split into two grid rows so photo top = bio top */}
      {people.map((person, i) => (
        <Reveal key={person.testId}>
          {/* Row 1: name + role (left cell empty) */}
          <div className={GRID}>
            <div className="hidden lg:block" />
            <div className={`flex flex-col gap-y-2 ${i === 0 ? "pt-0" : "pt-7 sm:pt-9"}`} data-testid={person.testId}>
              <div className="flex items-baseline gap-3 sm:gap-4 min-w-0">
                <h3
                  className="text-lg sm:text-xl font-bold uppercase tracking-wider transition-colors duration-300"
                  style={{ fontFamily: SANS, color: ACCENT }}
                >
                  {person.name}
                </h3>
                <span className="hidden sm:inline-flex flex-1" aria-hidden="true">
                  <Leader />
                </span>
              </div>
              <p
                className="text-[0.75rem] uppercase tracking-[0.12em]"
                style={{ fontFamily: MONO, color: "rgba(28,27,26,0.55)" }}
              >
                {person.title}
              </p>
            </div>
          </div>
          {/* Row 2: photo (left) + bio + links (right) — tops aligned */}
          <div className={`${GRID} items-start mt-4 sm:mt-6`}>
            <div className="hidden lg:flex justify-start">
              <PersonPhoto
                photo={person.photo}
                name={person.name}
                testId={person.testId}
                zoom={person.photoZoom}
                offsetX={person.photoOffsetX}
              />
            </div>
            <div className="flex flex-col gap-y-3 pb-7 sm:pb-9">
              {/* Headshot shown inline for mobile/tablet */}
              <div className="flex lg:hidden mb-1">
                <PersonPhoto
                  photo={person.photo}
                  name={person.name}
                  testId={person.testId}
                  zoom={person.photoZoom}
                  offsetX={person.photoOffsetX}
                />
              </div>
              <p
                className={`${largeText ? "text-[17.5px] sm:text-[20px]" : "text-sm sm:text-base"} leading-relaxed`}
                style={{ fontFamily: SERIF, color: INK }}
                data-testid={`text-bio-${person.testId}`}
              >
                {person.bio}
              </p>
              {person.links.length > 0 && <SocialLinksInline links={person.links} />}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function TeamContent({ isEmbedded = false, largeText = false }: { isEmbedded?: boolean; largeText?: boolean }) {
  return (
    <>
      {/* Page display title */}
      <h1
        className={isEmbedded ? "text-[clamp(2.5rem,10vw,4.5rem)] leading-[1.05] mb-10 sm:mb-14" : "text-[clamp(2.5rem,10vw,4.5rem)] leading-[1.05] mb-16 sm:mb-24"}
        style={{ fontFamily: "'Mean Hand', cursive", color: INK }}
        data-testid="text-team-page-title"
      >
        Team
      </h1>

      {/* Patron acknowledgment */}
      <div className="mb-28 sm:mb-40 pt-4 relative" style={{ borderTop: `1px dashed ${HAIRLINE}` }}>
        <CrosshairStar className="absolute top-0 left-[-36px] -translate-x-1/2 -translate-y-1/2 hidden sm:block pointer-events-none" />
        <PatronSVGFilters />
        <div
          className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-6 lg:gap-14"
        >
          <div>
            <SectionHead num="01" title="Patrons" testId="text-team-patrons-label" />
          </div>
          <div className="flex flex-col gap-y-4 pt-0">
            <Reveal>
              <div data-testid="text-patron-peter-wang">
                <p className="text-[1.375rem] sm:text-[1.625rem] font-normal tracking-[0.03em]" style={{ fontFamily: "'Cardo', serif", color: "var(--gold)" }}>
                  <BronzePatronName text="Peter Wang" />
                </p>
              </div>
            </Reveal>
            <Reveal>
              <a href="https://goodscienceproject.org/" target="_blank" rel="noopener noreferrer" className="no-underline" data-testid="text-patron-good-science">
                <p className="text-[1.375rem] sm:text-[1.625rem] font-normal tracking-[0.03em]" style={{ fontFamily: "'Cardo', serif", color: "var(--gold)" }}>
                  <BronzePatronName text="Good Science Project" />
                </p>
              </a>
            </Reveal>
            <Reveal>
              <div data-testid="text-patron-noticing-foundation">
                <p className="text-[1.375rem] sm:text-[1.625rem] font-normal tracking-[0.03em]" style={{ fontFamily: "'Cardo', serif", color: "var(--gold)" }}>
                  <BronzePatronName text="Noticing Foundation" />
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Team */}
      <PersonSection num="02" title="Team" testId="text-team-founding" people={TEAM} largeText={largeText} />

      {/* Advisory Committee */}
      <PersonSection num="03" title="Advisory Committee" testId="text-team-advisory" people={ADVISORS} largeText={largeText} />
    </>
  );
}

export default function Team() {
  useSEO({
    title: "Team & Advisors",
    description: "Meet the founding team, directors, and advisory committee behind The Revival Fund who help evaluate and publish the excavations of dormant scientific research.",
  });

  return (
    <div className="min-h-screen bg-background" style={{ color: INK, fontFamily: SERIF }}>
      {/* Binder Left Margin Line */}
      <div 
        className="absolute left-[30px] sm:left-[60px] top-0 bottom-0 w-[1px] hidden sm:block pointer-events-none z-[3]"
        style={{
          borderLeft: `1px dashed ${HAIRLINE}`,
        }}
      >
        <div className="absolute top-[20%] left-[-4px] w-2 h-2 rounded-full border border-slate-300 bg-background" />
        <div className="absolute top-[50%] left-[-4px] w-2 h-2 rounded-full border border-slate-300 bg-background" />
        <div className="absolute top-[80%] left-[-4px] w-2 h-2 rounded-full border border-slate-300 bg-background" />
      </div>

      <div className="relative z-[10] pl-8 sm:pl-24 pr-8 sm:pr-[var(--gutter)] pt-[max(14vh,120px)]">
        <TeamContent />
      </div>
      <Footer />
    </div>
  );
}
