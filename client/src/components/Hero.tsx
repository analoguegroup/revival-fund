import { Link } from "wouter";
import { useEffect, useRef, useState, useCallback } from "react";

function PatinaTitle() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const animRef = useRef<number>(0);
  const mousePos = useRef<{ x: number; y: number } | null>(null);
  const intensities = useRef<number[]>([]);
  const title = "The RevivaL Fund";
  const words = title.split(" ");
  const allChars: { char: string; wordIdx: number }[] = [];
  words.forEach((word, wi) => {
    for (const ch of word) allChars.push({ char: ch, wordIdx: wi });
    if (wi < words.length - 1) allChars.push({ char: " ", wordIdx: wi });
  });

  const filterId = "patina-noise-mask";

  const updatePatina = useCallback(() => {
    const container = titleRef.current;
    if (!container) return;
    const mp = mousePos.current;
    const rect = container.getBoundingClientRect();
    const maxDist = rect.width * 0.3;

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
        target = target ** 1.0;
      }

      const prev = intensities.current[i] ?? 0;
      const lerped = prev + (target - prev) * 0.08;
      intensities.current[i] = lerped;

      const el = span;
      if (el) {
        const bronze = lerped;
        const sr = 55 + bronze * 50;
        const sg = 90 - bronze * 20;
        const sb = 72 - bronze * 22;
        el.style.textShadow = `
          0.5px 0.5px 0px rgba(${sr - 20}, ${sg - 20}, ${sb - 15}, ${0.8 * bronze}),
          1px 1px 0px rgba(${sr - 25}, ${sg - 25}, ${sb - 20}, ${0.6 * bronze}),
          1.5px 1.5px 0px rgba(${sr - 30}, ${sg - 30}, ${sb - 25}, ${0.4 * bronze}),
          2px 2px 0.5px rgba(${sr - 35}, ${sg - 35}, ${sb - 28}, ${0.25 * bronze}),
          2.5px 2.5px 1px rgba(${sr - 40}, ${sg - 40}, ${sb - 30}, ${0.15 * bronze}),
          0px -0.5px 0px rgba(255, 255, 255, ${0.05 + bronze * 0.12}),
          3px 3px 7px rgba(30, 25, 20, ${0.1 + bronze * 0.1})
        `;
      }

      const reveal = span.querySelector(".bronze-reveal") as HTMLElement;
      if (reveal) {
        const revealOpacity = lerped ** 3;
        reveal.style.opacity = String(Math.min(revealOpacity * 1.2, 1));
      }

      const patina = span.querySelector(".patina-layer") as HTMLElement;
      if (patina) {
        patina.style.opacity = String(Math.min(lerped ** 2 * 1.2, 1));
      }
    }

    animRef.current = requestAnimationFrame(updatePatina);
  }, []);

  useEffect(() => {
    intensities.current = new Array(allChars.length).fill(0);
    animRef.current = requestAnimationFrame(updatePatina);

    const handleMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };
    const handleLeave = () => {
      mousePos.current = null;
    };

    const el = titleRef.current;
    if (el) {
      el.addEventListener("mousemove", handleMove);
      el.addEventListener("mouseleave", handleLeave);
    }

    return () => {
      cancelAnimationFrame(animRef.current);
      if (el) {
        el.removeEventListener("mousemove", handleMove);
        el.removeEventListener("mouseleave", handleLeave);
      }
    };
  }, [updatePatina, allChars.length]);

  return (
    <>
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <filter id={filterId}>
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.04"
              numOctaves={4}
              seed={3}
              result="noise"
            />
            <feColorMatrix
              type="saturate"
              values="0"
              in="noise"
              result="gray"
            />
            <feComponentTransfer in="gray" result="mask">
              <feFuncA type="linear" slope="3.0" intercept="-0.4" />
            </feComponentTransfer>
            <feComposite in="SourceGraphic" in2="mask" operator="in" />
          </filter>
          <filter id={`${filterId}-reveal`}>
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.025"
              numOctaves={2}
              seed={7}
              result="noise"
            />
            <feColorMatrix
              type="saturate"
              values="0"
              in="noise"
              result="gray"
            />
            <feComponentTransfer in="gray" result="mask">
              <feFuncA type="linear" slope="12.0" intercept="-4.0" />
            </feComponentTransfer>
            <feComposite in="SourceGraphic" in2="mask" operator="in" />
          </filter>
        </defs>
      </svg>
      <h1
        ref={titleRef}
        className="text-[clamp(2.25rem,8vw,3.5rem)] leading-[1.1]"
        style={{
          fontFamily: "var(--font-display)",
          color: "rgb(12, 57, 129)",
          cursor: "default",
          position: "relative",
        }}
        data-testid="text-hero-title"
      >
        {words.map((word, wi) => {
          const startIdx = allChars.findIndex((c, idx) => c.wordIdx === wi && c.char !== " " && (idx === 0 || allChars[idx - 1].wordIdx !== wi || allChars[idx - 1].char === " "));
          return (
            <span key={wi} className="block sm:inline whitespace-nowrap">
              {word.split("").map((ch, ci) => {
                const globalIdx = startIdx + ci;
                return (
                  <span
                    key={globalIdx}
                    ref={(el) => { letterRefs.current[globalIdx] = el; }}
                    style={{ position: "relative", display: "inline-block" }}
                  >
                    <span style={{ position: "relative", zIndex: 1, fontSize: "inherit" }}>{ch}</span>
                    <span
                      className="bronze-reveal"
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        inset: 0,
                        color: "rgb(165, 130, 80)",
                        filter: `url(#${filterId}-reveal)`,
                        opacity: 0,
                        pointerEvents: "none",
                        zIndex: 2,
                      }}
                    >{ch}</span>
                    <span
                      className="patina-layer"
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        inset: 0,
                        color: "rgb(185, 155, 110)",
                        filter: `url(#${filterId})`,
                        opacity: 0,
                        pointerEvents: "none",
                        zIndex: 3,
                      }}
                    >{ch}</span>
                  </span>
                );
              })}
              {wi < words.length - 1 && <span className="hidden sm:inline"> </span>}
            </span>
          );
        })}
      </h1>
    </>
  );
}

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative z-[2]" style={{ padding: "0 var(--gutter)" }}>
      <div className="text-center w-full max-w-[700px] relative z-[2] flex flex-col items-center">
        <span
          className="font-mono text-[0.6875rem] uppercase tracking-[0.3em] block sm:mb-8 mt-[50px] mb-[50px]"
          style={{ color: "var(--clay)" }}
          data-testid="text-hero-label"
        >EST. 2026</span>
        <PatinaTitle />

        <p
          className="text-[clamp(1rem,3.5vw,1.25rem)] leading-[1.7] max-w-[600px] mx-auto italic opacity-80 sm:mt-10 sm:mb-14 mt-[40px] mb-[40px]"
          data-testid="text-hero-subtitle"
        >Excavating, validating, and reviving forgotten research</p>

        <nav className="flex flex-col items-center gap-10">
          <div className="flex items-center justify-center gap-6 sm:gap-16 flex-wrap">
            <Link
              href="/"
              className="font-mono text-[0.75rem] uppercase tracking-[0.15em] no-underline nav-link"
              style={{ color: "var(--parchment)", opacity: 0.6 }}
              data-testid="link-about"
            >
              About
            </Link>
            <Link
              href="/faq"
              className="font-mono text-[0.75rem] uppercase tracking-[0.15em] no-underline nav-link"
              style={{ color: "var(--parchment)", opacity: 0.6 }}
              data-testid="link-faq"
            >
              FAQ
            </Link>
            <Link
              href="/team"
              className="font-mono text-[0.75rem] uppercase tracking-[0.15em] no-underline nav-link"
              style={{ color: "var(--parchment)", opacity: 0.6 }}
              data-testid="link-team"
            >
              Team
            </Link>
          </div>
          <a
            href="https://tally.so/r/kdydg6"
            target="_blank"
            rel="noopener noreferrer"
            className="apply-plate inline-block py-4 px-10 text-[0.75rem] font-mono uppercase tracking-[0.15em] no-underline"
            data-testid="button-apply"
          >
            <span className="apply-plate-text">Submit Quest</span>
          </a>
        </nav>
      </div>
    </section>
  );
}
