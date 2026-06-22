import { useState } from "react";
import { Link } from "wouter";
import { useSEO } from "@/hooks/useSEO";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import {
  grantees,
  TYPE_LABELS,
  TYPE_ORDER,
  type Grantee,
} from "@/data/grantees";
import { INK, ACCENT, HAIRLINE, BODY, MUTED, MONO, SERIF, SANS, CrosshairStar } from "@/components/editorial";

import martian1 from "@assets/martian_canal_1.png";
import martian2 from "@assets/martian_canal_2.png";
import martian3 from "@assets/martian_canal_3.jpg";
import martian4 from "@assets/martian_canal_4.jpg";
import martian5 from "@assets/martian_canal_5.jpg";

const MARTIAN_MAPS = [
  { src: martian1, invert: false },
  { src: martian2, invert: false },
  { src: martian3, invert: true },
  { src: martian4, invert: true },
  { src: martian5, invert: true },
];

const CHRONO_ORDER = [
  "daniel-burger",
  "aiden-sagerman",
  "seconds-0",
  "nora-khan",
  "iris-long-yanlin-lu",
  "jenn-leung-chloe-loewith",
  "abhinav-singh"
];

const chronoSorted = [...grantees].sort((a, b) =>
  CHRONO_ORDER.indexOf(a.slug) - CHRONO_ORDER.indexOf(b.slug)
);

function GranteePlateCard({ 
  grantee, 
  index, 
  showTimeline = true,
}: { 
  grantee: Grantee; 
  index: number; 
  showTimeline?: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const formattedIndex = String(index + 1).padStart(2, "0");
  const isDark = index % 2 === 1;

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5; // -0.5 to 0.5
    setCoords({ x, y });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCoords({ x: 0, y: 0 });
  };

  // Parallax offsets for hover displacement
  const mapX = isHovered ? coords.x * 6 : 0;
  const mapY = isHovered ? coords.y * 6 : 0;

  return (
    <div 
      className="relative w-full"
      style={{
        zIndex: isHovered ? 50 : index + 10,
        marginTop: index === 0 ? "0px" : "-36px",
      }}
    >
      <Reveal className="reveal-card relative w-full" alwaysAnimate={true}>
        {/* Dynamic Timeline Node on Left Margin */}
      {showTimeline && (
        <div 
          className="absolute left-[-80px] top-1/2 -translate-y-1/2 hidden sm:block pointer-events-none z-[4] w-[80px] h-4"
        >
          {/* Period text on the left of timeline line */}
          <div 
            className="absolute right-[92px] top-1/2 -translate-y-1/2 text-right text-[0.72rem] uppercase tracking-wider select-none transition-colors duration-300 font-bold whitespace-nowrap"
            style={{ 
              fontFamily: SANS,
              color: isHovered 
                ? (isDark ? "rgb(255, 255, 255)" : ACCENT) 
                : (isDark ? "rgba(255, 255, 255, 0.4)" : "rgb(148, 163, 184)") 
            }}
          >
            {grantee.period}
          </div>

          {/* Timeline Dot (Node) */}
          <div 
            className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full border flex items-center justify-center transition-all duration-300"
            style={{
              backgroundColor: isHovered 
                ? (isDark ? "rgb(255, 255, 255)" : ACCENT) 
                : (isDark ? "rgba(255, 255, 255, 0.15)" : "rgb(241, 245, 249)"),
              borderColor: isHovered 
                ? (isDark ? "rgb(255, 255, 255)" : ACCENT) 
                : (isDark ? "rgba(255, 255, 255, 0.3)" : HAIRLINE),
              boxShadow: isHovered 
                ? (isDark ? "0 0 10px rgba(255, 255, 255, 0.8)" : `0 0 10px ${ACCENT}`) 
                : "none",
              transform: isHovered ? "scale(1.2)" : "scale(1)",
            }}
          >
            {/* Small inner dot */}
            <div 
              className="w-1.5 h-1.5 rounded-full transition-all duration-300" 
              style={{
                backgroundColor: isHovered 
                  ? (isDark ? ACCENT : "rgb(255, 255, 255)") 
                  : (isDark ? "rgba(255, 255, 255, 0.4)" : "rgb(148, 163, 184)"),
              }}
            />
          </div>

          {/* Horizontal Connector Line to Card */}
          <div 
            className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1px] border-t border-dashed transition-colors duration-300"
            style={{
              borderColor: isHovered 
                ? (isDark ? "rgba(255, 255, 255, 0.6)" : ACCENT) 
                : (isDark ? "rgba(255, 255, 255, 0.15)" : HAIRLINE),
            }}
          />
        </div>
      )}

      <Link
        href={`/portfolio/${grantee.slug}`}
        className="block no-underline relative group transition-all duration-300 outline-none"
        style={{
          zIndex: isHovered ? 50 : index + 10,
          transform: isHovered ? "translate(16px, -16px) scale(1.01)" : "none",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        data-testid={`link-grantee-${grantee.slug}`}
      >
        <div 
          className="w-full py-10 px-6 sm:py-14 sm:px-10 border border-dashed rounded-sm transition-all duration-300 relative"
          style={{ 
            borderColor: isHovered 
              ? (isDark ? "rgba(255, 255, 255, 0.6)" : ACCENT) 
              : (isDark ? "rgba(255, 255, 255, 0.15)" : HAIRLINE),
            backgroundColor: isHovered 
              ? (isDark ? "rgba(9, 42, 99, 0.92)" : "rgba(248, 248, 247, 0.9)") 
              : (isDark ? "rgba(12, 57, 129, 0.85)" : "rgba(248, 248, 247, 0.75)"),
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            clipPath: "inset(0px round 2px)",
            WebkitClipPath: "inset(0px round 2px)",
            boxShadow: isHovered 
              ? (isDark ? "0 20px 40px rgba(9, 42, 99, 0.15)" : "0 8px 30px rgba(12, 57, 129, 0.05)") 
              : "none",
          }}
        >
          {/* L-shaped corner bracket decorations with dynamic transition */}
          <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l pointer-events-none transition-all duration-300"
               style={{ 
                 borderColor: isHovered ? (isDark ? "rgba(255, 255, 255, 0.9)" : ACCENT) : (isDark ? "rgba(255, 255, 255, 0.25)" : "rgb(203, 213, 225)")
               }} />
          <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r pointer-events-none transition-all duration-300"
               style={{ 
                 borderColor: isHovered ? (isDark ? "rgba(255, 255, 255, 0.9)" : ACCENT) : (isDark ? "rgba(255, 255, 255, 0.25)" : "rgb(203, 213, 225)")
               }} />
          <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l pointer-events-none transition-all duration-300"
               style={{ 
                 borderColor: isHovered ? (isDark ? "rgba(255, 255, 255, 0.9)" : ACCENT) : (isDark ? "rgba(255, 255, 255, 0.25)" : "rgb(203, 213, 225)")
               }} />
          <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r pointer-events-none transition-all duration-300"
               style={{ 
                 borderColor: isHovered ? (isDark ? "rgba(255, 255, 255, 0.9)" : ACCENT) : (isDark ? "rgba(255, 255, 255, 0.25)" : "rgb(203, 213, 225)")
               }} />

          {/* Card Header: Monospace info strip */}
          <div 
            className="flex justify-between items-center text-[0.8rem] tracking-wider select-none pb-4 mb-8 border-b border-dashed transition-colors duration-300"
            style={{ 
              fontFamily: SANS,
              borderColor: isHovered ? (isDark ? "rgba(255, 255, 255, 0.3)" : "rgba(12, 57, 129, 0.2)") : (isDark ? "rgba(255, 255, 255, 0.12)" : HAIRLINE) 
            }}
          >
            <span className="font-bold transition-colors duration-300" style={{ color: isHovered ? (isDark ? "rgb(255, 255, 255)" : ACCENT) : (isDark ? "rgba(255, 255, 255, 0.6)" : "rgb(100, 116, 139)") }}>
              NO. {formattedIndex}
            </span>
            <span className="font-bold uppercase transition-colors duration-300" style={{ color: isHovered ? (isDark ? "rgb(255, 255, 255)" : ACCENT) : (isDark ? "rgba(255, 255, 255, 0.6)" : "rgb(100, 116, 139)") }}>
              {TYPE_LABELS[grantee.type]}
            </span>
          </div>

          {/* Card Body: Split grid column layout */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_300px_130px] gap-12 items-start">
            {/* Left Column: Title and oneLiner */}
            <div className="flex flex-col gap-10">
              <h3
                className="text-lg sm:text-xl font-bold uppercase tracking-wider transition-colors duration-300 m-0"
                style={{ 
                  fontFamily: SANS, 
                  color: isHovered ? (isDark ? "rgb(255, 255, 255)" : ACCENT) : (isDark ? "rgba(255, 255, 255, 0.95)" : "rgb(15, 23, 42)") 
                }}
                data-testid={`text-grantee-title-${grantee.slug}`}
              >
                {grantee.title}
              </h3>

              <p
                className="text-sm sm:text-base leading-relaxed m-0 max-w-xl transition-colors duration-300"
                style={{ 
                  fontFamily: SANS, 
                  color: isDark ? "rgba(255, 255, 255, 0.8)" : INK 
                }}
                data-testid={`text-grantee-oneliner-${grantee.slug}`}
              >
                {grantee.oneLiner}
              </p>
            </div>

            {/* Middle Column: Grantee Names */}
            <div 
              className="flex flex-col tracking-wider mt-4 md:mt-1.5 transition-colors duration-300"
              style={{ 
                fontFamily: SANS,
                color: isHovered ? (isDark ? "rgb(255, 255, 255)" : ACCENT) : (isDark ? "rgba(255, 255, 255, 0.6)" : "rgb(100, 116, 139)") 
              }}
            >
              <span 
                className="text-xl sm:text-2xl font-normal leading-none"
                style={{ fontFamily: "'Mean Hand', cursive" }}
              >
                {grantee.names}
              </span>
            </div>

            {/* Right Column: Specimen Reticle Observatory */}
            <div className="hidden md:flex shrink-0 items-center justify-end select-none relative">
              <div
                className="relative w-32 h-32 rounded-full border border-dashed flex items-center justify-center overflow-hidden transition-all duration-300 ease-out"
                style={{
                  transform: `translate3d(${mapX}px, ${mapY}px, 0) scale(${isHovered ? 1.05 : 1})`,
                  borderColor: isHovered 
                    ? (isDark ? "rgba(255, 255, 255, 0.6)" : "rgba(12, 57, 129, 0.4)") 
                    : (isDark ? "rgba(255, 255, 255, 0.2)" : "rgba(203, 213, 225, 0.8)"),
                  borderRadius: "50%",
                }}
              >
                {/* Reticle guide markings */}
                <div 
                  className="absolute top-0 bottom-0 left-1/2 w-[1px] pointer-events-none" 
                  style={{ backgroundColor: isDark ? "rgba(255, 255, 255, 0.15)" : "rgba(226, 223, 216, 0.5)" }}
                />
                <div 
                  className="absolute left-0 right-0 top-1/2 h-[1px] pointer-events-none" 
                  style={{ backgroundColor: isDark ? "rgba(255, 255, 255, 0.15)" : "rgba(226, 223, 216, 0.5)" }}
                />
                <div 
                  className="absolute w-16 h-16 rounded-full border border-dotted pointer-events-none" 
                  style={{ borderColor: isDark ? "rgba(255, 255, 255, 0.12)" : "rgba(203, 213, 225, 0.5)" }}
                />

                {/* Martian Canal Observatory Map */}
                <img
                  src={MARTIAN_MAPS[index % MARTIAN_MAPS.length].src}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 rounded-full"
                  style={{
                    mixBlendMode: isDark ? "screen" : "multiply",
                    filter: isDark 
                      ? "invert(1) brightness(1.2) contrast(1.15)" 
                      : (MARTIAN_MAPS[index % MARTIAN_MAPS.length].invert
                          ? "invert(1) contrast(1.1) brightness(0.95)"
                          : "contrast(1.1) brightness(0.95)"),
                    opacity: isDark ? 0.7 : 0.8,
                    borderRadius: "50%",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </Link>
      </Reveal>
    </div>
  );
}

export default function Portfolio() {
  useSEO({
    title: "Grantees Portfolio",
    description: "Explore the directory of grantee projects supported by The Revival Fund across mathematical topology, somatic sciences, artificial life, Soviet archives, and molecular computing.",
  });

  const [viewMode, setViewMode] = useState<"timeline" | "type">("timeline");

  // Group by type based on TYPE_ORDER
  const grouped = TYPE_ORDER.map((type) => ({
    type,
    label: TYPE_LABELS[type],
    items: grantees.filter((g) => g.type === type)
  }));

  return (
    <div className="min-h-screen relative overflow-x-hidden" style={{ color: INK, fontFamily: SERIF }}>
      {/* Binder Left Margin Line */}
      <div 
        className="absolute left-[30px] sm:left-[112px] top-0 bottom-0 w-[1px] hidden sm:block pointer-events-none z-[3]"
        style={{
          borderLeft: `1px dashed ${HAIRLINE}`,
        }}
      />

      <div 
        className="relative z-[10] pl-8 sm:pl-24 pr-8 sm:pr-[var(--gutter)]"
      >
        {/* Page header */}
        <div
          className="pt-[max(18vh,150px)] sm:pt-[max(22vh,180px)] pb-[6vh]"
          style={{ borderBottom: `1.5px solid ${HAIRLINE}` }}
        >

          <h1
            className="text-[clamp(2.5rem,10vw,4.5rem)] leading-[1.05]"
            style={{ fontFamily: "var(--font-display)", color: INK }}
            data-testid="text-portfolio-title"
          >
            PortfoLio
          </h1>
        </div>

        {/* Introduction and Toggle Row */}
        <div
          className="pt-8 pb-8 text-base sm:text-lg text-slate-600 font-serif flex flex-col md:flex-row md:items-center justify-between gap-6"
          style={{ fontFamily: SERIF }}
        >
          <span>Announcing our first cycle of grantee projects:</span>
          
          {/* Telemetry style View Toggle */}
          <div className="flex items-center gap-6 font-mono text-[0.78rem] tracking-wider select-none shrink-0">
            <button
              onClick={() => setViewMode("timeline")}
              className="transition-all duration-200 uppercase font-bold cursor-pointer focus:outline-none flex items-center gap-2"
              style={{
                color: viewMode === "timeline" ? ACCENT : "rgb(148, 163, 184)"
              }}
              data-testid="toggle-view-timeline"
            >
              <span className="text-[0.6rem]">{viewMode === "timeline" ? "■" : "□"}</span>
              View Timeline
            </button>
            <button
              onClick={() => setViewMode("type")}
              className="transition-all duration-200 uppercase font-bold cursor-pointer focus:outline-none flex items-center gap-2"
              style={{
                color: viewMode === "type" ? ACCENT : "rgb(148, 163, 184)"
              }}
              data-testid="toggle-view-type"
            >
              <span className="text-[0.6rem]">{viewMode === "type" ? "■" : "□"}</span>
              View by Type
            </button>
          </div>
        </div>

        {/* Plates Grid - Index Cards */}
        {viewMode === "timeline" ? (
          <div className="pt-4 pb-20 flex flex-col max-w-6xl sm:pl-24">
            {chronoSorted.map((grantee, i) => (
              <GranteePlateCard 
                key={grantee.slug}
                grantee={grantee} 
                index={i} 
                showTimeline={true}
              />
            ))}
          </div>
        ) : (
          <div className="pt-4 pb-20 max-w-6xl sm:pl-24">
            {grouped.map((group, groupIdx) => {
              if (group.items.length === 0) return null;
              return (
                <div key={group.type} className="mb-14 last:mb-0">
                  {/* Group Section Header */}
                  <div 
                    className="flex items-center gap-4 pt-6 pb-6 select-none font-mono text-[0.8rem] tracking-widest uppercase"
                    style={{ color: MUTED }}
                  >
                    <span>[ SECTION 0{groupIdx + 1} // {group.label} ]</span>
                    <div className="flex-1 border-t border-dashed" style={{ borderColor: HAIRLINE }} />
                    <span className="text-slate-400 font-bold">{group.items.length} {group.items.length === 1 ? "project" : "projects"}</span>
                  </div>
                  
                  {/* Plates Grid for this group */}
                  <div className="pt-4 flex flex-col">
                    {group.items.map((grantee, i) => (
                      <GranteePlateCard 
                        key={grantee.slug}
                        grantee={grantee} 
                        index={i} 
                        showTimeline={false}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Image Source Credits Footer */}
        <div 
          className="pt-8 pb-12 flex flex-col md:flex-row justify-between gap-6 text-[0.86rem] tracking-wider uppercase border-t border-solid" 
          style={{ fontFamily: MONO, color: MUTED, borderColor: HAIRLINE, marginTop: "40px" }}
        >
          <div className="max-w-xl">
            <span className="font-bold text-slate-800">Martian Cartography Specimen Sources:</span>
            <ul className="mt-2 space-y-1 list-none p-0 normal-case">
              <li>Illustration from Percival Lowell’s <span className="italic font-serif">Mars</span> (1895)</li>
              <li>Illustration from Percival Lowell’s <span className="italic font-serif">Mars and its Canals</span> (1906)</li>
              <li>Illustration from Percival Lowell’s <span className="italic font-serif">Mars as the Abode of Life</span> (1908)</li>
            </ul>
          </div>
          <div className="md:text-right shrink-0">
            <span>Public Domain // Sourced from</span>
            <br />
            <a 
              href="https://publicdomainreview.org/collection/martian-canal-maps/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#0c3981] hover:underline font-bold"
            >
              The Public Domain Review
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
