import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const grantees = [
  {
    names: "Aiden Sagerman",
    summary:
      "Reconstructing how diagrams drove mathematical discovery in twentieth-century topology, recovering a visual reasoning tradition that abstraction has rendered illegible.",
    tags: ["Artificial Intelligence", "History of Mathematics"],
    hoverQuestion: "What logic tradition to resurface for thinking artificial intelligence?",
  },
  {
    names: "Nora Khan",
    summary:
      "Tracing how artistic research collectives have built epistemic holding environments that have bled uncited into complexity science and systems design.",
    tags: ["Epistemology", "History of Art and Technology"],
    hoverQuestion: "What epistemic environments are quietly shaping science without acknowledgment?",
  },
  {
    names: "Iris Long & Yanlin Lu",
    summary:
      "Interviewing and researching the Chinese engagements with anomalous bodily phenomena from 1979–1999.",
    tags: ["Somatic Science", "China", "History"],
    hoverQuestion: "What can China's somatic science reveal about the edges of Western biomedicine?",
  },
  {
    names: "Jenn Leung & Chloe Loewith",
    summary:
      "Benchmarking synthetic bioengineered intelligence via real-time game systems. Jenn is a game developer and the first artist at Cortical Labs. Chloe is a bioethicist at Cambridge's Centre for the Future of Intelligence.",
    tags: ["Synthetic Biological Intelligence", "Epistemology"],
    hoverQuestion: "What does it mean to measure intelligence in living cells?",
  },
  {
    names: "Daniel Burger",
    summary:
      "Bringing back forgotten research on sustaining living brains outside the body with modern perfusion technology (\u201Cbrains-in-vats\u201D). Daniel is founder of EightSix Science.",
    tags: ["Neuroengineering"],
    hoverQuestion: "What would we know about consciousness if we had kept brains alive outside the body?",
  },
  {
    names: "Sahil Kapadia",
    summary:
      "Reviving disease reversal by finding minimal causal gene interventions that shift cells from pathological to healthy states.",
    tags: ["Gene Regulation", "Disease Reversal"],
    hoverQuestion: "What is the smallest change that turns a sick cell healthy again?",
  },
];

const KEYFRAMES = `
  @keyframes surfaceOverlay {
    0%   { opacity: 0; }
    100% { opacity: 1; }
  }

  @keyframes surfaceText {
    0% {
      opacity: 0;
      filter: blur(12px);
      transform: translateY(16px);
    }
    40% {
      opacity: 0.55;
      filter: blur(4px);
    }
    75% {
      filter: blur(0.8px);
    }
    100% {
      opacity: 1;
      filter: blur(0px);
      transform: translateY(0px);
    }
  }
`;

export default function Portfolio() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [animKeys, setAnimKeys] = useState<number[]>(grantees.map(() => 0));

  function handleEnter(i: number) {
    setHoveredIdx(i);
    setAnimKeys(keys => keys.map((k, idx) => idx === i ? k + 1 : k));
  }

  return (
    <div className="min-h-screen text-foreground bg-background">
      <style>{KEYFRAMES}</style>
      <Header />
      <div className="relative z-[2]" style={{ padding: "0 var(--gutter)" }}>

        <div className="pt-[max(18vh,150px)] sm:pt-[max(22vh,180px)] pb-[10vh]" style={{ borderBottom: "1px solid rgba(34, 40, 56, 0.15)" }}>
          <h1 className="mb-4 sm:mb-8 text-[clamp(2rem,12vw,52px)] sm:text-[clamp(1.75rem,8vw,60px)]" data-testid="text-portfolio-title">
            PortfoLio
          </h1>
        </div>

        <section className="py-12 sm:py-[80px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
            {grantees.map((grantee, i) => {
              const isHovered = hoveredIdx === i;
              return (
                <div
                  key={i}
                  className="flex flex-col gap-5 p-5 sm:p-7"
                  style={{
                    position: "relative",
                    border: isHovered
                      ? "1px solid rgba(184, 134, 72, 0.28)"
                      : "1px solid rgba(34, 40, 56, 0.15)",
                    borderRadius: "0px",
                    transition: "border-color 0.4s ease",
                    cursor: "default",
                  }}
                  onMouseEnter={() => handleEnter(i)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  data-testid={`card-grantee-${i}`}
                >
                  {/* Overlay — always rendered, visibility toggled */}
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: "0px",
                      background:
                        "linear-gradient(160deg, rgba(184, 134, 72, 0.14) 0%, rgba(210, 160, 90, 0.10) 55%, rgba(255, 215, 150, 0.07) 100%)",
                      backdropFilter: "blur(7px)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "2rem",
                      pointerEvents: "none",
                      zIndex: 2,
                      opacity: isHovered ? 1 : 0,
                      animation: isHovered
                        ? `surfaceOverlay 0.25s ease-out forwards`
                        : "none",
                    }}
                  >
                    {/* Question text — re-keyed on each hover to restart animation */}
                    <p
                      key={animKeys[i]}
                      style={{
                        fontFamily: "'Cardo', serif",
                        fontStyle: "italic",
                        fontSize: "1.0625rem",
                        lineHeight: "1.75",
                        color: "rgba(184, 134, 72, 0.95)",
                        textAlign: "center",
                        animation: isHovered
                          ? "surfaceText 0.75s cubic-bezier(0.22, 0.6, 0.36, 1) forwards"
                          : "none",
                        opacity: isHovered ? undefined : 0,
                      }}
                    >
                      {grantee.hoverQuestion}
                    </p>
                  </div>

                  <p
                    className="text-[1.25rem] sm:text-[1.375rem] leading-snug font-normal sm:min-h-[2.75em] sm:flex sm:items-start"
                    style={{ fontFamily: "'Cardo', serif", color: "var(--parchment)" }}
                    data-testid={`text-grantee-name-${i}`}
                  >
                    {grantee.names}
                  </p>

                  <p
                    className="text-[0.9375rem] leading-[1.75] flex-1 opacity-75"
                    data-testid={`text-grantee-summary-${i}`}
                  >
                    {grantee.summary}
                  </p>

                  <div className="flex flex-wrap content-end gap-2 mt-auto pt-4 sm:min-h-[3.6rem]" data-testid={`list-grantee-tags-${i}`}>
                    {grantee.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="font-mono text-[0.625rem] uppercase tracking-[0.18em] px-2 py-1 break-words min-w-0 max-w-full"
                        style={{
                          color: "var(--accent-live, rgb(12, 57, 129))",
                          border: "1px solid rgba(12, 57, 129, 0.25)",
                          borderRadius: "0px",
                        }}
                        data-testid={`text-tag-${i}-${j}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
}
