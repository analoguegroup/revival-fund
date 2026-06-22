import { useEffect, useRef, useState } from "react";
import { useSEO } from "@/hooks/useSEO";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import sovietImg from "@assets/russia-1700x800_0_1780000575365.jpg";
import putnamImg from "@assets/Gefter_BREAKER-6_1780000575366.webp";
import { INK, ACCENT, HAIRLINE, BODY, MUTED, MONO, SERIF, SANS, CrosshairStar } from "@/components/editorial";

const forthcomingProjects = [
  {
    title: "Soviet Arxiv",
    description:
      "Excavating the unpublished scientific literature of late Soviet research institutions.",
    tags: ["USSR", "Physics", "Mathematics", "Archives"],
    image: sovietImg,
  },
  {
    title: "Peter Putnam Papers",
    description:
      "Processing and interpreting the privately funded research of Peter Putnam.",
    tags: ["Perception", "Cognitive Science", "History"],
    image: putnamImg,
  },
];

const PIXEL_SIZE = 4;
const CLEAR_SCREEN_PX = 144;
const MAX_ALPHA = 80;
const GRAIN_FPS = 10;
const FRAME_INTERVAL = 1000 / GRAIN_FPS;

function GrainBand({
  project,
  index,
  isRowHovered,
}: {
  project: (typeof forthcomingProjects)[0];
  index: number;
  isRowHovered: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mouse, setMouse] = useState<{ x: number; y: number } | null>(null);

  // Canvas drawing for grid, ticks, reticle and grain
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    const resize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", resize);

    let animId = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw static grid
      ctx.strokeStyle = "rgba(12, 57, 129, 0.08)";
      ctx.lineWidth = 0.5;
      const gridSize = 40;

      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 2. Draw plus ticks at grid intersections
      ctx.strokeStyle = "rgba(12, 57, 129, 0.25)";
      ctx.lineWidth = 1;
      for (let x = gridSize; x < width; x += gridSize) {
        for (let y = gridSize; y < height; y += gridSize) {
          ctx.beginPath();
          ctx.moveTo(x - 3, y);
          ctx.lineTo(x + 3, y);
          ctx.moveTo(x, y - 3);
          ctx.lineTo(x, y + 3);
          ctx.stroke();
        }
      }

      // 3. Draw fine fluttering analog grain (dust specks)
      ctx.fillStyle = "rgba(12, 57, 129, 0.15)";
      const speckCount = 180;
      for (let i = 0; i < speckCount; i++) {
        const sx = Math.random() * width;
        const sy = Math.random() * height;
        const size = Math.random() > 0.8 ? 1.5 : 0.75;
        ctx.fillRect(sx, sy, size, size);
      }

      // 4. Draw microscope reticle at mouse position (or default center if row is hovered)
      const activeMouse = mouse || (isRowHovered ? { x: width / 2, y: height / 2 } : null);
      if (activeMouse) {
        const { x, y } = activeMouse;
        const radius = 80;

        // Outer reticle circle
        ctx.strokeStyle = "rgba(12, 57, 129, 0.6)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.stroke();

        // Inner reticle target
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, Math.PI * 2);
        ctx.stroke();

        // Crosshairs tick marks on outer ring
        ctx.beginPath();
        ctx.moveTo(x, y - radius);
        ctx.lineTo(x, y - radius + 10);
        ctx.moveTo(x, y + radius);
        ctx.lineTo(x, y + radius - 10);
        ctx.moveTo(x - radius, y);
        ctx.lineTo(x - radius + 10, y);
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + radius - 10, y);
        ctx.stroke();

        // Technical metadata text
        ctx.fillStyle = "rgba(12, 57, 129, 0.85)";
        ctx.font = "8px 'Lato', sans-serif";
        
        const textX = x + radius + 10;
        const textY = y - 15;
        
        ctx.fillText(`SYS_SCAN // REF: ${project.title.slice(0, 3).toUpperCase()}-${index + 1}`, textX, textY);
        ctx.fillText(`COORD: [${x.toFixed(0)}, ${y.toFixed(0)}]`, textX, textY + 12);
        ctx.fillText(`RESOLVING POWER: 0.72um`, textX, textY + 24);
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, [mouse, project.title, index, isRowHovered]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseLeave = () => {
    setMouse(null);
  };

  const activeMouse = mouse || (isRowHovered ? { x: containerRef.current ? containerRef.current.offsetWidth / 2 : 110, y: containerRef.current ? containerRef.current.offsetHeight / 2 : 150 } : null);
  const objectPosition = project.title.toLowerCase().includes("putnam") ? "center 12%" : "center";

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden"
      style={{ cursor: "crosshair" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      data-testid={`banner-project-${index}`}
    >
      {/* Base blurred image */}
      <img
        src={project.image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          opacity: 0.15,
          filter: "grayscale(100%) blur(6px) contrast(0.95)",
          transform: "scale(1.05)",
          objectFit: "cover",
          objectPosition,
        }}
      />
      
      {/* Revealed cyanotype image */}
      <img
        src={project.image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{
          opacity: activeMouse ? 0.85 : 0,
          filter: "grayscale(100%) sepia(100%) hue-rotate(355deg) saturate(1.2) brightness(0.74) contrast(0.85)",
          transform: "scale(1.05)",
          clipPath: activeMouse ? `circle(80px at ${activeMouse.x}px ${activeMouse.y}px)` : 'circle(0px at 0px 0px)',
          WebkitClipPath: activeMouse ? `circle(80px at ${activeMouse.x}px ${activeMouse.y}px)` : 'circle(0px at 0px 0px)',
          transition: mouse ? 'opacity 150ms ease-out' : 'opacity 350ms ease-out, clip-path 350ms ease-out, -webkit-clip-path 350ms ease-out',
          objectFit: "cover",
          objectPosition,
        }}
      />

      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
    </div>
  );
}



function ProjectRow({
  project,
  index,
}: {
  project: (typeof forthcomingProjects)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const num = String(index + 1).padStart(2, "0");

  return (
    <div 
      className="w-full border-t border-dashed relative"
      style={{ borderColor: HAIRLINE }}
    >
      {/* Curved Star Crosshair at the intersection on desktop */}
      <CrosshairStar className="absolute top-0 left-[-36px] -translate-x-1/2 -translate-y-1/2 hidden sm:block pointer-events-none" />

      <div
        className="grid grid-cols-1 md:grid-cols-[1.2fr_1.8fr_80px] md:gap-x-12 lg:gap-x-16 relative"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        data-testid={`card-project-${index}`}
      >
        {/* LEFT — label column: tags · title · description */}
        <div 
          className="p-6 md:p-8 pt-10 sm:pt-12 pb-10 sm:pb-12 flex flex-col gap-y-4 relative transition-all duration-300 rounded-sm"
          style={{
            backgroundColor: hovered ? "rgba(12, 57, 129, 0.04)" : "transparent",
          }}
        >
          {/* L-shaped corner bracket decorations */}
          <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-slate-300 pointer-events-none" />
          <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-slate-300 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-slate-300 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-slate-300 pointer-events-none" />

          <div className="flex flex-wrap gap-x-3 gap-y-1">
            {project.tags.map((tag, j) => (
              <span
                key={j}
                className="text-[0.645rem] uppercase tracking-[0.2em] transition-colors duration-300"
                style={{ 
                  fontFamily: MONO, 
                  color: hovered ? "rgba(12, 57, 129, 0.75)" : MUTED 
                }}
                data-testid={`text-project-tag-${index}-${j}`}
              >
                {tag}
              </span>
            ))}
          </div>
          <h2
            className="text-lg sm:text-xl font-bold uppercase tracking-wider transition-colors duration-300"
            style={{ 
              fontFamily: SANS, 
              color: hovered ? ACCENT : INK,
            }}
            data-testid={`text-project-title-${index}`}
          >
            {project.title}
          </h2>
          <p
            className="text-sm sm:text-base leading-relaxed"
            style={{ fontFamily: SERIF, color: INK }}
            data-testid={`text-project-desc-${index}`}
          >
            {project.description}
          </p>
        </div>

        {/* CENTER — image band */}
        <div className="relative min-h-[240px] sm:min-h-[300px]">
          <GrainBand project={project} index={index} isRowHovered={hovered} />
        </div>

        {/* RIGHT — entry number */}
        <div className="hidden md:flex pl-5 pr-6 md:pr-8 pt-10 sm:pt-12 justify-end">
          <span
            className="text-[1.25rem] tabular-nums transition-colors duration-300"
            style={{
              fontFamily: MONO,
              color: hovered ? ACCENT : MUTED,
              lineHeight: 1,
            }}
          >
            {num}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  useSEO({
    title: "Forthcoming Projects",
    description: "Forthcoming projects incubated by the Revival Fund, including the Soviet scientific archives and Peter Putnam papers.",
  });

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
        <div className="absolute top-[80%] left-[-4px] w-2 h-2 rounded-full border border-slate-300 bg-background" />
      </div>

      <div className="relative z-[10] pl-8 sm:pl-24 pr-8 sm:pr-[var(--gutter)]">

        {/* Page header */}
        <div
          className="pt-[max(18vh,150px)] sm:pt-[max(22vh,180px)] pb-[6vh]"
          style={{ borderBottom: `1.5px solid ${HAIRLINE}` }}
        >

          <h1
            className="text-[clamp(2.5rem,10vw,4.5rem)] leading-[1.05]"
            style={{ fontFamily: "var(--font-display)", color: INK }}
            data-testid="text-projects-title"
          >
            Projects
          </h1>
        </div>

        {/* Index meta line */}
        <div
          className="flex items-baseline justify-between gap-4 pt-8 pb-2 text-[0.75rem] uppercase tracking-[0.2em]"
          style={{ fontFamily: MONO, color: MUTED }}
          data-testid="text-projects-index"
        >
          <span>FORTHCOMING</span>
        </div>

        {/* Project band register */}
        <div className="pt-12 sm:pt-16 pb-20 sm:pb-28">
          <div className="relative">
            {forthcomingProjects.map((project, i) => (
              <Reveal key={i}>
                <ProjectRow project={project} index={i} />
              </Reveal>
            ))}
            {/* Final bottom line and star crosshair */}
            <div className="border-b border-dashed border-slate-300 w-full relative h-[1px]" style={{ borderColor: HAIRLINE }}>
              <CrosshairStar className="absolute top-0 left-[-36px] -translate-x-1/2 -translate-y-1/2 hidden sm:block pointer-events-none" />
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}
