import { ArrowUpRight } from "lucide-react";
import bookEvolutionImg from "@/assets/images/book_evolution.jpg";
import bookObjectivityImg from "@/assets/images/book_objectivity.jpg";
import bookFringeImg from "@/assets/images/book_fringe.jpg";

export default function Footer() {
  return (
    <footer
      className="relative z-[2] pl-8 sm:pl-24 pr-8 sm:pr-[var(--gutter)] pb-24"
    >
      <div
        className="flex flex-col gap-12"
        style={{ paddingTop: "6rem", borderTop: "1px solid rgba(34, 40, 56, 0.12)" }}
      >
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 justify-between items-start">
          <div className="flex flex-col gap-3 max-w-[34rem]">
            <p className="font-mono text-[0.86rem] tracking-[0.15em] leading-relaxed m-0" style={{ color: "var(--parchment)" }}>
              The Revival Fund is an initiative of{" "}
              <a
                href="https://analoguegroup.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline transition-colors duration-300 footer-link"
                style={{ color: "var(--gold)", borderBottom: "1px solid rgba(34, 40, 56, 0.3)" }}
              >
                The Analogue Group
              </a>.
            </p>
            <p className="font-mono text-[0.86rem] tracking-[0.15em] leading-relaxed m-0" style={{ color: "var(--parchment)" }}>
              To support The Revival Fund as a patron, please contact{" "}
              <a
                href="mailto:wendi@analoguegroup.org"
                className="no-underline transition-colors duration-300 footer-link"
                style={{ color: "var(--gold)", borderBottom: "1px solid rgba(34, 40, 56, 0.3)" }}
              >
                Wendi
              </a>{" "}
              and{" "}
              <a
                href="mailto:aish@analoguegroup.org"
                className="no-underline transition-colors duration-300 footer-link"
                style={{ color: "var(--gold)", borderBottom: "1px solid rgba(34, 40, 56, 0.3)" }}
              >
                Aish
              </a>.
            </p>

            <div className="mt-4 flex flex-col gap-2" data-testid="text-about-colophon">
              <p className="font-mono text-[0.86rem] tracking-[0.15em] leading-relaxed m-0" style={{ color: "var(--parchment)" }} data-testid="text-typeface-credit">
                The headings on this site are set in{" "}
                <a
                  href="https://portfolio.anna-zhang.com/projects/mean-hand"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline transition-colors duration-300 colophon-link footer-link inline-block"
                  style={{ color: "var(--gold)", borderBottom: "1px solid rgba(34, 40, 56, 0.3)" }}
                  data-testid="link-mean-hand-project"
                >
                  <span style={{ fontStyle: "italic" }}>Mean Hand</span>
                </a>
                , a typeface by Anna Zhang created from the average of hundreds of thousands of handwriting samples. It is built from 814,255 handwritten characters collected by the U.S. government in the early 1990s to automate Census form processing.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-5 text-left max-w-[26rem]">
            <h4 className="font-mono text-[0.86rem] tracking-[0.15em] uppercase m-0 leading-relaxed" style={{ color: "var(--clay)" }}>
              We are inspired by
            </h4>
            <div className="flex flex-col gap-5">
              <div className="flex gap-3.5 items-start">
                <img 
                  src={bookEvolutionImg} 
                  alt="The Evolution of Knowledge Cover" 
                  className="w-[60px] h-[84px] object-cover border border-slate-200/60 dark:border-slate-800 shadow-sm rounded-sm"
                />
                <div className="flex flex-col gap-y-0.5" style={{ marginTop: "-3px" }}>
                  <span className="font-mono text-[0.86rem] font-bold tracking-[0.15em] leading-snug" style={{ color: "var(--parchment)" }}>
                    The Evolution of Knowledge
                  </span>
                  <span className="font-mono text-[0.86rem] tracking-[0.15em] leading-relaxed" style={{ color: "var(--clay)" }}>
                    Jurgen Renn
                  </span>
                </div>
              </div>

              <div className="flex gap-3.5 items-start">
                <img 
                  src={bookObjectivityImg} 
                  alt="Objectivity Cover" 
                  className="w-[60px] h-[84px] object-cover border border-slate-200/60 dark:border-slate-800 shadow-sm rounded-sm"
                />
                <div className="flex flex-col gap-y-0.5" style={{ marginTop: "-3px" }}>
                  <span className="font-mono text-[0.86rem] font-bold tracking-[0.15em] leading-snug" style={{ color: "var(--parchment)" }}>
                    Objectivity
                  </span>
                  <span className="font-mono text-[0.86rem] tracking-[0.15em] leading-relaxed" style={{ color: "var(--clay)" }}>
                    Lorraine Daston and Peter Galison
                  </span>
                </div>
              </div>

              <div className="flex gap-3.5 items-start">
                <img 
                  src={bookFringeImg} 
                  alt="On the Fringe Cover" 
                  className="w-[60px] h-[84px] object-cover border border-slate-200/60 dark:border-slate-800 shadow-sm rounded-sm"
                />
                <div className="flex flex-col gap-y-0.5" style={{ marginTop: "-3px" }}>
                  <span className="font-mono text-[0.86rem] font-bold tracking-[0.15em] leading-snug" style={{ color: "var(--parchment)" }}>
                    On the Fringe
                  </span>
                  <span className="font-mono text-[0.86rem] tracking-[0.15em] leading-relaxed" style={{ color: "var(--clay)" }}>
                    Michael Gordin
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-4 text-left">
            <div
              className="font-mono text-[0.86rem] tracking-[0.15em] m-0 leading-relaxed"
              style={{ color: "var(--clay)" }}
            >
              THE REVIVAL FUND &copy; 2026
            </div>
            <div
              className="font-mono text-[0.86rem] tracking-[0.15em] leading-relaxed"
              style={{ color: "var(--clay)", opacity: 0.7 }}
            >
              <div>Analogue Group</div>
              <div>2261 Market Street, STE 22549</div>
              <div>San Francisco, CA 94114, USA</div>
              <div className="mt-1">EIN 33-1914333</div>
              <div className="mt-2">
                <a
                  href="https://analoguegroup.org/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline transition-colors duration-300 footer-link text-[0.86rem]"
                  style={{ color: "var(--gold)", borderBottom: "1px solid rgba(34, 40, 56, 0.3)" }}
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
