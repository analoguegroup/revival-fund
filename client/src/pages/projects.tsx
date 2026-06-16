import { useEffect, useRef } from "react";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import sovietImg from "@assets/russia-1700x800_0_1780000575365.jpg";
import putnamImg from "@assets/Gefter_BREAKER-6_1780000575366.webp";

const forthcomingProjects = [
  {
    title: "Soviet Arxiv",
    description:
      "Excavating the unpublished scientific literature of late Soviet research institutions — manuscripts, technical reports, and internal proceedings that never crossed the Iron Curtain.",
    tags: ["USSR", "Physics", "Mathematics", "Archives"],
    image: sovietImg,
  },
  {
    title: "Peter Putnam Papers",
    description:
      "Processing and interpreting the personal papers of Peter Putnam, whose privately funded research on human perception touched fields that have since fragmented into separate disciplines.",
    tags: ["Perception", "Cognitive Science", "History"],
    image: putnamImg,
  },
];

// Each canvas pixel ≈ PIXEL_SIZE × PIXEL_SIZE screen pixels (square grain dots)
const PIXEL_SIZE = 4;
// Clear circle radius in *screen* pixels (converted to canvas pixels per-banner)
const CLEAR_SCREEN_PX = 144;
const MAX_ALPHA = 80;
const GRAIN_FPS = 10;
const FRAME_INTERVAL = 1000 / GRAIN_FPS;

function ProjectBanner({
  project,
  index,
}: {
  project: (typeof forthcomingProjects)[0];
  index: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const alphaFull = MAX_ALPHA << 24;

    let cw = 1;
    let ch = 1;
    let pixCount = 1;
    let imgData = ctx.createImageData(1, 1);
    let buf32 = new Uint32Array(imgData.data.buffer);
    let sqClear = 1;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const nextW = Math.max(1, Math.round(rect.width / PIXEL_SIZE));
      const nextH = Math.max(1, Math.round(rect.height / PIXEL_SIZE));
      if (nextW === cw && nextH === ch) return;
      cw = nextW;
      ch = nextH;
      canvas.width = cw;
      canvas.height = ch;
      pixCount = cw * ch;
      imgData = ctx.createImageData(cw, ch);
      buf32 = new Uint32Array(imgData.data.buffer);
      const r = CLEAR_SCREEN_PX / PIXEL_SIZE;
      sqClear = r * r;
    };

    resize();

    let raf = 0;
    let last = 0;
    let visible = true;

    const draw = (t: number) => {
      raf = requestAnimationFrame(draw);
      if (t - last < FRAME_INTERVAL) return;
      last = t;

      const mp = mouseRef.current;

      if (mp === null) {
        for (let i = 0; i < pixCount; i++) {
          const v = (Math.random() * 255) | 0;
          buf32[i] = alphaFull | (v << 16) | (v << 8) | v;
        }
      } else {
        const mx = mp.x / PIXEL_SIZE;
        const my = mp.y / PIXEL_SIZE;
        let i = 0;
        for (let py = 0; py < ch; py++) {
          const dy = py - my;
          const dy2 = dy * dy;
          for (let px = 0; px < cw; px++, i++) {
            const dx = px - mx;
            const sq = dx * dx + dy2;
            const v = (Math.random() * 255) | 0;
            if (sq >= sqClear) {
              buf32[i] = alphaFull | (v << 16) | (v << 8) | v;
            } else {
              const a = ((sq / sqClear) * MAX_ALPHA) | 0;
              buf32[i] = (a << 24) | (v << 16) | (v << 8) | v;
            }
          }
        }
      }

      ctx.putImageData(imgData, 0, 0);
    };

    const ro = new ResizeObserver(resize);
    ro.observe(container);

    const io = new IntersectionObserver(
      (entries) => {
        const wasVisible = visible;
        visible = entries[0].isIntersecting;
        if (visible && !wasVisible) {
          last = 0;
          raf = requestAnimationFrame(draw);
        } else if (!visible && wasVisible) {
          cancelAnimationFrame(raf);
        }
      },
      { rootMargin: "100px" }
    );
    io.observe(container);

    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  const handleMouseLeave = () => {
    mouseRef.current = null;
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden min-h-[300px] sm:h-[300px]"
      style={{ cursor: "crosshair" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      data-testid={`banner-project-${index}`}
    >
      <img
        src={project.image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          opacity: 0.52,
          filter: "grayscale(100%) blur(10px) contrast(1.05)",
          transform: "scale(1.12)",
        }}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(8,8,8,0.82) 0%, rgba(8,8,8,0.60) 100%)",
        }}
      />

      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ imageRendering: "pixelated", mixBlendMode: "screen" }}
      />

      <div
        className="relative h-full flex flex-col justify-center items-center text-center"
        style={{ padding: "2rem" }}
      >
        <div className="relative max-w-[600px]">
          <div
            aria-hidden="true"
            className="absolute -inset-x-12 -inset-y-10 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(8,8,8,0.55) 0%, rgba(8,8,8,0.35) 45%, rgba(8,8,8,0) 75%)",
              filter: "blur(28px)",
            }}
          />
          <h2
            className="text-[1.625rem] sm:text-[2rem] leading-tight font-normal mb-3"
            style={{ fontFamily: "'Cardo', serif", color: "rgba(255,255,255,0.96)" }}
            data-testid={`text-project-title-${index}`}
          >
            {project.title}
          </h2>
          <p
            className="text-[0.9rem] leading-[1.7] mb-4"
            style={{ color: "rgba(255,255,255,0.80)" }}
            data-testid={`text-project-desc-${index}`}
          >
            {project.description}
          </p>
          <div className="flex flex-wrap justify-center gap-2" data-testid={`list-project-tags-${index}`}>
            {project.tags.map((tag, j) => (
              <span
                key={j}
                className="font-mono text-[0.5625rem] uppercase tracking-[0.16em] px-2 py-0.5"
                style={{
                  color: "rgba(255,255,255,0.66)",
                  border: "1px solid rgba(255,255,255,0.30)",
                }}
                data-testid={`text-project-tag-${index}-${j}`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="min-h-screen text-foreground bg-background">

      <div
        className="relative z-[2]"
        style={{ padding: "0 var(--gutter)" }}
      >
        <div
          className="pt-[max(18vh,150px)] sm:pt-[max(22vh,180px)] pb-[10vh]"
          style={{ borderBottom: "1px solid rgba(34, 40, 56, 0.15)" }}
        >
          <h1
            className="text-[clamp(2rem,12vw,52px)] sm:text-[clamp(1.75rem,8vw,60px)]"
            data-testid="text-projects-title"
          >
            Projects
          </h1>
        </div>
      </div>

      <section className="mt-12 sm:mt-[80px]">
        <div style={{ padding: "0 var(--gutter)" }}>
          <p
            className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] mb-8"
            style={{ color: "var(--accent-live, rgb(12, 57, 129))" }}
          >
            Forthcoming
          </p>
        </div>

        <div className="flex flex-col" style={{ gap: "2px", padding: "0 var(--gutter)" }}>
          {forthcomingProjects.map((project, i) => (
            <Reveal key={i}>
              <ProjectBanner project={project} index={i} />
            </Reveal>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
