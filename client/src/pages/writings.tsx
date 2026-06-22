import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { useSEO } from "@/hooks/useSEO";

const writings = [
  {
    title: "How Britain Lost Its (Dye) Empire",
    subtitle: "On the slow migration of an industry, and the forces that shaped its unlikely course — from university degrees and patent statutes to chlorine gas at Ypres.",
    author: "Hiya Jain",
    publication: "Mundane Beauty",
    year: "2026",
    url: "https://www.mundane.beauty/p/how-britain-lost-its-dye-empire",
    note: "",
    image: "https://substackcdn.com/image/fetch/$s_!KCdx!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F6797a27b-5878-4906-b41c-42f30e7afaf5_789x630.png",
  },
  {
    title: "The Artemisinin Discovery",
    subtitle: "How a forgotten program of wartime research led to one of medicine's most important antimalarials — and what it reveals about the conditions under which dormant science becomes urgent again.",
    author: "Wendi Yan",
    publication: "Asimov Press",
    year: "2024",
    url: "https://www.asimov.press/p/antimalarial-drug",
    note: "Named 'Best of Journalism' by The Syllabus",
    image: "https://substackcdn.com/image/fetch/$s_!baHt!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F00de8747-5b5c-4ff1-af40-a650077a15ad_1041x773.png",
  },
];

export default function Writings() {
  useSEO({
    title: "Essays & Publications",
    description: "Read essays, articles, and publications supported by The Revival Fund covering forgotten wartime antimalarial drug discoveries and the migration of the British dye empire.",
  });

  return (
    <div className="min-h-screen text-foreground bg-background">
      <div className="relative z-[2]" style={{ padding: "0 var(--gutter)" }}>

        <div className="pt-[max(18vh,150px)] sm:pt-[max(22vh,180px)] pb-[10vh]" style={{ borderBottom: "1px solid rgba(34, 40, 56, 0.15)" }}>
          <h1 className="text-[clamp(2rem,12vw,52px)] sm:text-[clamp(1.75rem,8vw,60px)]" data-testid="text-writings-title">
            Writings
          </h1>
        </div>

        <section className="py-12 sm:py-[80px]">
          <div className="flex flex-col">
            {writings.map((piece, i) => (
              <Reveal key={i}>
              <article
                style={{ borderBottom: "1px solid rgba(34, 40, 56, 0.15)" }}
                data-testid={`article-writing-${i}`}
              >
                <a
                  href={piece.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="writing-row flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10 py-8 sm:py-10 no-underline pl-0 sm:pl-4"
                  style={{ color: "inherit" }}
                  data-testid={`link-writing-${i}`}
                >
                  {/* Left: year + publication */}
                  <div className="writing-meta shrink-0 sm:w-[120px]" style={{ opacity: 0.55 }}>
                    <p
                      className="font-mono text-[0.625rem] uppercase tracking-[0.18em] mb-2"
                      style={{ color: "var(--accent-live, rgb(12, 57, 129))" }}
                      data-testid={`text-writing-year-${i}`}
                    >
                      {piece.year}
                    </p>
                    <p
                      className="font-mono text-[0.625rem] uppercase tracking-[0.14em]"
                      style={{ color: "var(--parchment)" }}
                      data-testid={`text-writing-publication-${i}`}
                    >
                      {piece.publication}
                    </p>
                  </div>

                  {/* Center: text content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-3">
                      <h2
                        className="writing-title text-[1.375rem] sm:text-[1.625rem] leading-snug font-normal transition-colors duration-300"
                        style={{ fontFamily: "'Cardo', serif", color: "var(--parchment)" }}
                        data-testid={`text-writing-title-${i}`}
                      >
                        {piece.title}
                      </h2>
                      <span className="writing-arrow shrink-0 text-[1.0625rem]" aria-hidden="true">→</span>
                    </div>

                    <p
                      className="text-[0.9375rem] leading-[1.75] opacity-55 mb-4 max-w-[560px]"
                      data-testid={`text-writing-subtitle-${i}`}
                    >
                      {piece.subtitle}
                    </p>

                    <div className="flex items-center gap-4 flex-wrap">
                      <span
                        className="font-mono text-[0.625rem] uppercase tracking-[0.18em] opacity-45"
                        style={{ color: "var(--parchment)" }}
                        data-testid={`text-writing-author-${i}`}
                      >
                        {piece.author}
                      </span>
                      {piece.note && (
                        <span
                          className="font-mono text-[0.5625rem] uppercase tracking-[0.12em] px-2 py-0.5"
                          style={{
                            border: "1px solid rgba(12, 57, 129, 0.25)",
                            color: "var(--accent-live, rgb(12, 57, 129))",
                          }}
                          data-testid={`text-writing-note-${i}`}
                        >
                          {piece.note}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Right: image thumbnail */}
                  <div
                    className="shrink-0 overflow-hidden self-stretch hidden sm:flex items-center"
                    style={{ width: "200px", height: "130px" }}
                  >
                    <img
                      src={piece.image}
                      alt=""
                      aria-hidden="true"
                      className="writing-img w-full h-full object-cover"
                      style={{ filter: "grayscale(15%)" }}
                    />
                  </div>
                </a>
              </article>
              </Reveal>
            ))}
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
}
