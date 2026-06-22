import { useState } from "react";
import { Link } from "wouter";
import { useSEO } from "@/hooks/useSEO";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import {
  grantees,
  TYPE_LABELS,
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

const sorted = [...grantees].sort((a, b) =>
  a.names.localeCompare(b.names)
);

function GranteePlateCard({ 
  grantee, 
  index, 
}: { 
  grantee: Grantee; 
  index: number; 
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const formattedIndex = String(index + 1).padStart(2, "0");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
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
    <Link
      href={`/portfolio/${grantee.slug}`}
      className="block no-underline relative group"
      data-testid={`link-grantee-${grantee.slug}`}
    >
      <div 
        className="w-full pt-8 pb-8 border-t border-dashed"
        style={{ borderColor: HAIRLINE }}
      >
        {/* Curved Star Crosshair at the intersection on desktop */}
        <CrosshairStar className="absolute top-0 left-[-36px] -translate-x-1/2 -translate-y-1/2 hidden sm:block pointer-events-none" />

        <div
          className="grid grid-cols-1 md:grid-cols-[180px_1fr_200px] gap-8 items-stretch relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Left Column: Monospace Metadata */}
          <div className="flex flex-col gap-2 font-mono text-[0.86rem] tracking-wider text-slate-400 select-none md:pt-[82px]">
            <div className="text-[#0c3981] font-bold uppercase">{TYPE_LABELS[grantee.type]}</div>
          </div>

          {/* Middle Column: Core Dossier Text Box with corner brackets (handles 3D fold rect transition) */}
          <div
            className="flex-grow p-6 flex flex-col gap-4 relative transition-all duration-300 rounded-sm"
            style={{
              backgroundColor: isHovered ? "rgba(12, 57, 129, 0.04)" : "transparent",
            }}
            data-testid={`card-grantee-${grantee.slug}`}
          >
            {/* L-shaped corner bracket decorations */}
            <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-slate-300 pointer-events-none" />
            <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-slate-300 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-slate-300 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-slate-300 pointer-events-none" />

            <h3
              className="text-lg sm:text-xl font-bold uppercase tracking-wider text-slate-900 animate-none"
              style={{ fontFamily: SANS }}
              data-testid={`text-grantee-name-${grantee.slug}`}
            >
              {grantee.names}
            </h3>

            <div className="border-t border-dashed" style={{ borderColor: HAIRLINE }} />

            <p
              className="text-base sm:text-lg leading-relaxed font-serif max-w-xl"
              style={{ fontFamily: SERIF, color: INK }}
              data-testid={`text-grantee-oneliner-${grantee.slug}`}
            >
              {grantee.oneLiner}
            </p>
          </div>

          {/* Right Column: Specimen Reticle Observatory */}
          <div className="shrink-0 flex items-center justify-center select-none relative">
            <div
              className="relative w-40 h-40 rounded-full border border-dashed border-slate-300/80 flex items-center justify-center overflow-hidden transition-transform duration-300 ease-out"
              style={{
                transform: `translate3d(${mapX}px, ${mapY}px, 0)`,
              }}
            >
              {/* Reticle guide markings */}
              <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-slate-200/50 pointer-events-none" />
              <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-slate-200/50 pointer-events-none" />
              <div className="absolute w-20 h-20 rounded-full border border-dotted border-slate-300/50 pointer-events-none" />

              {/* Martian Canal Observatory Map */}
              <img
                src={MARTIAN_MAPS[index % MARTIAN_MAPS.length].src}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
                style={{
                  mixBlendMode: "multiply",
                  filter: MARTIAN_MAPS[index % MARTIAN_MAPS.length].invert
                    ? "invert(1) contrast(1.1) brightness(0.95)"
                    : "contrast(1.1) brightness(0.95)",
                  opacity: 0.8,
                }}
              />


            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function Portfolio() {
  useSEO({
    title: "Grantees Portfolio",
    description: "Explore the directory of grantee projects supported by The Revival Fund across mathematical topology, somatic sciences, artificial life, Soviet archives, and molecular computing.",
  });

  return (
    <div className="min-h-screen relative overflow-x-hidden" style={{ color: INK, fontFamily: SERIF }}>
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

        <div
          className="pt-8 pb-8 text-base sm:text-lg text-slate-600 font-serif"
          style={{ fontFamily: SERIF }}
        >
          Announcing our first cycle of grantee projects:
        </div>

        {/* Plates Grid - Vertically Stacked */}
        <div className="pt-4 pb-20">
          <div className="relative">
            {sorted.map((grantee, i) => (
              <Reveal key={grantee.slug}>
                <GranteePlateCard 
                  grantee={grantee} 
                  index={i} 
                />
              </Reveal>
            ))}
            {/* Final bottom line and star crosshair */}
            <div className="border-b border-dashed border-slate-300 w-full relative h-[1px]" style={{ borderColor: HAIRLINE }}>
              <CrosshairStar className="absolute top-0 left-[-36px] -translate-x-1/2 -translate-y-1/2 hidden sm:block pointer-events-none" />
            </div>
          </div>
        </div>

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
