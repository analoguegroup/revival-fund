import { Fragment, useState, useRef, useEffect } from "react";
import { Link, useRoute } from "wouter";
import { useSEO } from "@/hooks/useSEO";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import NotFound from "@/pages/not-found";
import { getGrantee, TYPE_LABELS, grantees } from "@/data/grantees";
import { INK, ACCENT, HAIRLINE, BODY, MUTED, MONO, SERIF, SANS, Leader, CrosshairStar } from "@/components/editorial";
import { Linkedin, Globe, ArrowLeft } from "lucide-react";
import { SiX, SiSubstack, SiInstagram, SiBluesky } from "react-icons/si";

function ParallaxPortrait({ caption, photo }: { caption: string; photo?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Calculate how far the element is from the center of the viewport (-0.5 to 0.5)
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = viewportHeight / 2;
      const distanceFromCenter = (elementCenter - viewportCenter) / viewportHeight;
      
      // Max scroll parallax translation in pixels (e.g., -15px to 15px)
      const maxScrollTranslation = 15;
      setScrollOffset(distanceFromCenter * maxScrollTranslation);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once on mount to set initial position
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate mouse position relative to the center of the card (-0.5 to 0.5)
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;
    
    // Max rotation angles (8 degrees keeps it subtle & premium)
    const maxRotate = 8;
    setRotateX(-mouseY * maxRotate);
    setRotateY(mouseX * maxRotate);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Parallax translation for the image (opposite direction of mouse for 3D depth)
  const imageTranslateX = isHovered ? -rotateY * 0.8 : 0;
  const imageTranslateY = isHovered ? rotateX * 0.8 : 0;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative transition-all duration-300 ease-out p-3 rounded-sm border cursor-pointer select-none"
      style={{
        borderColor: HAIRLINE,
        perspective: "1000px",
        transformStyle: "preserve-3d",
        transform: isHovered 
          ? `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(15px) translateY(-6px)` 
          : "rotateX(0deg) rotateY(0deg) translateZ(0px) translateY(0px)",
        boxShadow: isHovered
          ? "0 22px 40px rgba(12,57,129,0.08), 0 8px 16px rgba(12,57,129,0.03)"
          : "0 2px 8px rgba(12,57,129,0.01)",
        backgroundColor: isHovered ? "rgba(255,255,255,0.95)" : "rgba(12,57,129,0.01)",
      }}
    >
      {/* L-shaped corner bracket decorations */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-slate-300 pointer-events-none z-10" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-slate-300 pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-slate-300 pointer-events-none z-10" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-slate-300 pointer-events-none z-10" />

      {/* Frame wrapper */}
      <figure className="flex flex-col gap-2 pointer-events-none" style={{ transform: "translateZ(10px)" }}>
        <div
          className="relative w-full overflow-hidden"
          style={{
            aspectRatio: "3 / 4",
            border: `1px solid ${HAIRLINE}`,
            backgroundColor: "rgba(12,57,129,0.02)",
          }}
          aria-label={`Portrait for ${caption}`}
        >
          {photo ? (
            <img
              src={photo}
              alt={caption}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-out"
              style={{
                transform: isHovered 
                  ? `scale(1.08) translate3d(${imageTranslateX}px, ${imageTranslateY + scrollOffset}px, 0)` 
                  : `scale(1.02) translate3d(0, ${scrollOffset}px, 0)`,
              }}
            />
          ) : (
            <>
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
            </>
          )}
        </div>
        <figcaption
          className="text-[0.6875rem] uppercase tracking-[0.16em]"
          style={{ fontFamily: MONO, color: MUTED }}
        >
          {caption}
        </figcaption>
      </figure>
    </div>
  );
}

export default function Grantee() {
  const [, params] = useRoute("/portfolio/:slug");
  const grantee = params ? getGrantee(params.slug) : undefined;

  useSEO({
    title: grantee ? `${grantee.names} - Project Dossier` : "Project Dossier",
    description: grantee ? `${grantee.names}: ${grantee.oneLiner}` : "Project summary and bio of grantee supported by The Revival Fund.",
  });

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [needleStyle, setNeedleStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const tunerDeckRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const [tooltipState, setTooltipState] = useState<{
    text: string;
    left: number;
    visible: boolean;
  }>({ text: "", left: 0, visible: false });


  const chronoGrantees = [
    { slug: "daniel-burger", period: "1920s" },
    { slug: "aiden-sagerman", period: "1942–1945" },
    { slug: "seconds-0", period: "1950s–1970s" },
    { slug: "nora-khan", period: "1960s–1970s" },
    { slug: "iris-long-yanlin-lu", period: "1980s–1990s" },
    { slug: "jenn-leung-chloe-loewith", period: "1990s" },
    { slug: "abhinav-singh", period: "2010s" }
  ].map(item => {
    const g = grantees.find(x => x.slug === item.slug);
    return g ? { ...g, period: item.period } : undefined;
  }).filter((x): x is (typeof grantees[0] & { period: string }) => !!x);

  const activeIndex = grantee ? chronoGrantees.findIndex((g) => g.slug === grantee.slug) : -1;

  // Update needle position
  useEffect(() => {
    const indexToPoint = hoveredIndex !== null ? hoveredIndex : activeIndex;
    if (indexToPoint !== -1 && itemRefs.current[indexToPoint]) {
      const el = itemRefs.current[indexToPoint]!;
      setNeedleStyle({
        left: el.offsetLeft,
        width: el.offsetWidth,
        opacity: 1,
      });
    }
  }, [hoveredIndex, activeIndex]);

  // Update tooltip content and visibility
  useEffect(() => {
    if (hoveredIndex !== null && itemRefs.current[hoveredIndex] && tunerDeckRef.current && scrollContainerRef.current) {
      const el = itemRefs.current[hoveredIndex]!;
      const deckRect = tunerDeckRef.current.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      
      const tooltipWidth = window.innerWidth >= 640 ? 320 : 288;
      const deckWidth = deckRect.width;
      const halfWidth = tooltipWidth / 2;

      let left = elRect.left - deckRect.left + elRect.width / 2;

      // Clamp left to keep tooltip within deck padding (16px left/right)
      const minLeft = Math.min(16 + halfWidth, deckWidth / 2);
      const maxLeft = Math.max(deckWidth - 16 - halfWidth, deckWidth / 2);
      left = Math.max(minLeft, Math.min(maxLeft, left));

      setTooltipState({
        text: chronoGrantees[hoveredIndex].oneLiner,
        left,
        visible: true,
      });
    } else {
      setTooltipState(prev => ({ ...prev, visible: false }));
    }
  }, [hoveredIndex]);

  // Sync scroll & resize events for tooltip and needle alignment
  useEffect(() => {
    const handleUpdate = () => {
      // 1. Update needle if active
      const indexToPoint = hoveredIndex !== null ? hoveredIndex : activeIndex;
      if (indexToPoint !== -1 && itemRefs.current[indexToPoint]) {
        const el = itemRefs.current[indexToPoint]!;
        setNeedleStyle({
          left: el.offsetLeft,
          width: el.offsetWidth,
          opacity: 1,
        });
      }

      // 2. Update tooltip position if hovered
      if (hoveredIndex !== null && itemRefs.current[hoveredIndex] && tunerDeckRef.current && scrollContainerRef.current) {
        const el = itemRefs.current[hoveredIndex]!;
        const deckRect = tunerDeckRef.current.getBoundingClientRect();
        const elRect = el.getBoundingClientRect();
        
        const tooltipWidth = window.innerWidth >= 640 ? 320 : 288;
        const deckWidth = deckRect.width;
        const halfWidth = tooltipWidth / 2;

        let left = elRect.left - deckRect.left + elRect.width / 2;

        const minLeft = Math.min(16 + halfWidth, deckWidth / 2);
        const maxLeft = Math.max(deckWidth - 16 - halfWidth, deckWidth / 2);
        left = Math.max(minLeft, Math.min(maxLeft, left));

        setTooltipState(prev => ({
          ...prev,
          left,
        }));
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleUpdate);
    }
    window.addEventListener("resize", handleUpdate);
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleUpdate);
      }
      window.removeEventListener("resize", handleUpdate);
    };
  }, [hoveredIndex, activeIndex]);

  if (!grantee) return <NotFound />;

  return (
    <div className="min-h-screen relative" style={{ color: INK, fontFamily: SERIF }}>
      {/* Binder Left Margin Line */}
      <div 
        className="absolute left-[30px] sm:left-[60px] top-0 bottom-0 w-[1px] hidden sm:block pointer-events-none z-[3]"
        style={{
          borderLeft: `1px dashed ${HAIRLINE}`,
        }}
      >
        <div className="absolute top-[20%] left-[-4px] w-2 h-2 rounded-full border border-slate-300 bg-background" />
        <div className="absolute top-[50%] left-[-4px] w-2 h-2 rounded-full border border-slate-300 bg-background" />
      </div>

      <div className="relative z-[10] pl-8 sm:pl-24 pr-8 sm:pr-[var(--gutter)]">

        {/* Back + type label */}
        <div className="pt-[max(14vh,120px)] sm:pt-[max(16vh,140px)]">
          <Link
            href="/portfolio"
            className="inline-flex items-center no-underline transition-transform duration-300 hover:-translate-x-1"
            style={{ color: ACCENT }}
            data-testid="link-back-portfolio"
          >
            <ArrowLeft className="w-8 h-8 stroke-[1.25]" aria-label="Back to PortfoLio" />
          </Link>
        </div>

        {/* Header */}
        <Reveal
          alwaysAnimate
          className="pt-6 pb-10 sm:pb-14"
          style={{ borderBottom: `1.5px solid ${HAIRLINE}` }}
        >
          <div
            className="mb-10 text-[0.86rem] uppercase tracking-[0.2em]"
            style={{ fontFamily: MONO, color: MUTED }}
            data-testid="text-grantee-type"
          >
            {TYPE_LABELS[grantee.type]}
          </div>
          <h1
            className="text-[clamp(2.5rem,10vw,4.5rem)] leading-[1.05] font-normal mb-20"
            style={{ fontFamily: "var(--font-display)", color: INK }}
            data-testid="text-grantee-title"
          >
            {grantee.names.includes(" & ") ? (
              grantee.names.split(" & ").map((name, idx) => (
                <span key={idx} className="block">
                  {name.split(/\s+/).map((word, wIdx) => (
                    <span key={wIdx} className="inline-block mr-[1.2em] last:mr-0">
                      {word.replace(/l/g, "L")}
                    </span>
                  ))}
                </span>
              ))
            ) : (
              <span className="block">
                {grantee.names.split(/\s+/).map((word, wIdx) => (
                  <span key={wIdx} className="inline-block mr-[1.2em] last:mr-0">
                    {word.replace(/l/g, "L")}
                  </span>
                ))}
              </span>
            )}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-[180px_1fr_240px] gap-8 lg:gap-14">
            <div className="md:col-start-2 md:col-span-2">
              <p
                className="text-[1.328rem] sm:text-[1.5625rem] leading-relaxed max-w-[52ch]"
                style={{ fontFamily: MONO, color: BODY }}
                data-testid="text-grantee-oneliner"
              >
                {grantee.oneLiner}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Body: Three-column Grid Layout matching Portfolio and Project pages */}
        <div className="grid grid-cols-1 md:grid-cols-[180px_1fr_240px] gap-8 lg:gap-14 pt-10 sm:pt-14 pb-16 sm:pb-24 relative">

          {/* Left Column: Lato Metadata */}
          <Reveal className="order-last md:order-first md:col-start-1 md:row-start-1 flex flex-col gap-6 font-lato text-[0.75rem] tracking-wider text-slate-400 select-none">
            <div>
              <div className="text-slate-900 font-bold uppercase mb-1">Cycle</div>
              <div className="text-slate-700">2026</div>
            </div>
            <div>
              <div className="text-slate-900 font-bold uppercase mb-1">Focus</div>
              <div className="text-[#0c3981] font-bold uppercase">{TYPE_LABELS[grantee.type]}</div>
            </div>
            <div>
              <div className="text-slate-900 font-bold uppercase mb-1">Themes</div>
              <ul className="list-none p-0 m-0 space-y-1 text-slate-700">
                {grantee.themes.map((theme, idx) => (
                  <li key={idx}>{theme}</li>
                ))}
              </ul>
            </div>
            {grantee.provisional && (
              <div className="mt-4 px-2 py-1 bg-amber-50 text-amber-800 text-[0.9rem] border border-amber-200 uppercase font-bold text-center">
                Provisional
              </div>
            )}
          </Reveal>

          {/* Middle Column: Core Project Content (Row 1) */}
          <div className="md:col-start-2 md:col-span-1 md:row-start-1 flex flex-col gap-12">
            
            {/* The Project Section */}
            <section data-testid="section-summary" className="relative">
              <div className="flex items-baseline justify-between gap-3 sm:gap-4 mb-6">
                <h2
                  className="text-[0.75rem] uppercase tracking-[0.12em]"
                  style={{ fontFamily: MONO, color: INK }}
                >
                  The Project
                </h2>
                <Leader />
              </div>
              <div className="flex flex-col gap-5">
                {grantee.summary.map((para, i) => (
                  <Reveal
                    key={i}
                    as="p"
                    className="text-[1.328rem] sm:text-[1.406rem] leading-relaxed text-slate-800"
                    style={{ fontFamily: SERIF, color: BODY }}
                    data-testid={`text-summary-${i}`}
                  >
                    {para}
                  </Reveal>
                ))}
              </div>
            </section>
          </div>

          {/* Biographies Section Header (Row 2) */}
          {grantee.bios.length > 0 && (
            <div className="md:col-start-2 md:col-span-1 mt-8">
              <div className="flex items-baseline justify-between gap-3 sm:gap-4">
                <h2
                  className="text-[0.75rem] uppercase tracking-[0.12em]"
                  style={{ fontFamily: MONO, color: INK }}
                >
                  {grantee.bios.length > 1 ? "Biographies" : "Biography"}
                </h2>
                <Leader />
              </div>
            </div>
          )}

          {/* Individual Biography + Portrait Rows (Row 3+) */}
          {grantee.bios.map((bio, i) => (
            <Fragment key={i}>
              {/* Bio text in the middle column */}
              <div className="md:col-start-2">
                <Reveal data-testid={`bio-${i}`} className="flex flex-col gap-2">
                  <p
                    className="text-[1.094rem] sm:text-[1.172rem] leading-relaxed whitespace-pre-line"
                    style={{ fontFamily: SANS, color: INK }}
                    data-testid={`text-bio-${i}`}
                  >
                    {bio.text}
                  </p>
                  {bio.links && bio.links.length > 0 && (
                    <div className="flex items-center gap-4 pt-2">
                      {bio.links.map((link, lIdx) => {
                        let icon = null;
                        if (link.platform === "x") icon = <SiX className="w-4 h-4" />;
                        else if (link.platform === "linkedin") icon = <Linkedin className="w-4 h-4" />;
                        else if (link.platform === "substack") icon = <SiSubstack className="w-4 h-4" />;
                        else if (link.platform === "instagram") icon = <SiInstagram className="w-4 h-4" />;
                        else if (link.platform === "bluesky") icon = <SiBluesky className="w-4 h-4" />;
                        else if (link.platform === "website") icon = <Globe className="w-4 h-4" />;
                        
                        return (
                          <a
                            key={lIdx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-colors hover:text-[#0c3981]"
                            style={{ color: BODY, opacity: 0.55 }}
                            aria-label={`${bio.name} ${link.platform}`}
                            data-testid={`link-social-${bio.name.toLowerCase().replace(/\s+/g, '-')}-${link.platform}`}
                          >
                            {icon}
                          </a>
                        );
                      })}
                    </div>
                  )}
                </Reveal>
              </div>

              {/* Bio portrait in the right column - perfectly top-aligned with the text */}
              <div className="md:col-start-3 self-start max-w-[260px] md:max-w-none">
                <Reveal>
                  <ParallaxPortrait caption={bio.name} photo={bio.photo} />
                </Reveal>
              </div>
            </Fragment>
          ))}

        </div>

        {/* Bottom Navigation */}
        <Reveal className="pt-10 pb-16 border-t border-dashed" style={{ borderColor: HAIRLINE }}>
          <div className="grid grid-cols-1 md:grid-cols-[180px_1fr_240px] gap-8 lg:gap-14">
            <div className="md:col-start-1 md:col-span-3">
              <div className="flex items-baseline justify-between gap-3 sm:gap-4 mb-6">
                <h2
                  className="text-[0.75rem] uppercase tracking-[0.12em]"
                  style={{ fontFamily: MONO, color: INK }}
                >
                  Grantees Index
                </h2>
                <Leader />
              </div>
              
              {/* Timeline Grantees Timeline Deck (Clean Modern Style) */}
              <div 
                ref={tunerDeckRef}
                className="relative rounded-sm overflow-hidden select-none border-l border-r border-slate-200/90 dark:border-slate-800"
                style={{}}
              >
                {/* Floating Tooltip outside scroll area - Flat 2D styling */}
                <div 
                  className={`absolute bottom-[calc(100%+4px)] w-72 sm:w-80 p-4 rounded-sm border border-slate-800/90 pointer-events-none z-30 transition-all duration-200 ease-out
                             ${tooltipState.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"}`}
                  style={{ 
                    left: `${tooltipState.left}px`,
                    transform: "translateX(-50%)",
                    backgroundColor: "var(--background, #fff)",
                  }}
                >
                  {/* Decorative subtle top brackets */}
                  <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-slate-500 pointer-events-none" />
                  <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-slate-500 pointer-events-none" />
                  
                  <p 
                    className="text-[0.875rem] leading-relaxed text-slate-800 font-normal text-left"
                    style={{ fontFamily: SANS }}
                  >
                    {tooltipState.text}
                  </p>
                </div>

                {/* Scrollable Timeline scales */}
                <div 
                  ref={scrollContainerRef}
                  className="overflow-x-auto relative pt-1 pb-1 px-4" 
                  style={{ scrollbarWidth: "none" }}
                >
                  <div className="min-w-[900px] relative py-4">
                    
                    {/* Clean Horizontal Axis */}
                    <div className="absolute left-6 right-6 top-[32px] h-[1px] bg-slate-200 dark:bg-slate-700 pointer-events-none z-10" />

                    {/* Sliding Abstract 2D Cursor (Clean Column Highlight Box) */}
                    <div 
                      className="absolute top-1 bottom-1 pointer-events-none transition-all duration-300 ease-out z-10 rounded-sm bg-[#0c3981]/5 border border-[#0c3981]/10"
                      style={{
                        left: `${needleStyle.left}px`,
                        width: `${needleStyle.width}px`,
                        opacity: needleStyle.opacity,
                      }}
                    />

                    {/* Scale B: Grantees & Periods (Navigation Row) */}
                    <nav className="flex justify-between items-start relative z-20 px-2 py-2">
                      {chronoGrantees.map((g, idx) => {
                        const isCurrent = g.slug === grantee.slug;
                        const isHovered = hoveredIndex === idx;
                        
                        return (
                          <Link 
                            key={g.slug}
                            href={`/portfolio/${g.slug}`}
                            ref={(el) => { itemRefs.current[idx] = el; }}
                            onMouseEnter={() => setHoveredIndex(idx)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="flex flex-col items-center cursor-pointer no-underline"
                            style={{ width: "120px" }}
                            data-testid={`link-nav-${g.slug}`}
                          >
                            {/* Time Period Label */}
                            <span 
                              className="text-[9px] font-mono tracking-widest transition-colors duration-200 select-none uppercase mb-2"
                              style={{ 
                                color: isCurrent ? ACCENT : "#718096",
                                fontWeight: isCurrent ? 600 : 400
                              }}
                            >
                              {g.period}
                            </span>
                            
                            {/* Schematic Transit Node Marker (Clean circular dot) */}
                            <div className="w-6 h-6 flex items-center justify-center select-none pointer-events-none relative z-20">
                              <div 
                                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                                  isCurrent 
                                    ? 'bg-red-500 ring-4 ring-red-100 dark:ring-red-950/40 scale-110' 
                                    : isHovered 
                                      ? 'bg-slate-900 scale-110' 
                                      : 'bg-slate-400 dark:bg-slate-600'
                                }`}
                              />
                            </div>
                            
                            {/* Name Text */}
                            <span
                              className="mt-2.5 px-1 text-[0.78rem] transition-colors duration-200 select-none block text-center max-w-full break-words whitespace-normal"
                              style={{
                                fontFamily: MONO,
                                color: isCurrent ? ACCENT : BODY,
                                fontWeight: isCurrent ? 600 : 400,
                              }}
                            >
                              {g.names.toUpperCase()}
                            </span>
                          </Link>
                        );
                      })}
                    </nav>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Final bottom line and star crosshair */}
        <div className="border-b border-dashed border-slate-300 w-full relative h-[1px] mb-12" style={{ borderColor: HAIRLINE }}>
          <CrosshairStar className="absolute top-0 left-[-36px] -translate-x-1/2 -translate-y-1/2 hidden sm:block pointer-events-none" />
        </div>

      </div>
      <Footer />
    </div>
  );
}
