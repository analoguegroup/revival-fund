export default function Footer() {
  return (
    <footer
      className="relative z-[2]"
      style={{
        padding: "6rem var(--gutter)",
        borderTop: "1px solid rgba(34, 40, 56, 0.12)",
      }}
    >
      <div className="flex flex-col gap-12">
        <div
          className="text-[2rem] opacity-40 leading-none"
          style={{ color: "var(--gold)" }}
        >
          &#x25AC;
        </div>

        <div className="flex flex-col sm:flex-row gap-12 sm:gap-16 justify-between items-start">
          <div className="flex flex-col gap-3 max-w-[36rem]">
            <p className="font-mono text-[0.6875rem] tracking-[0.15em] leading-relaxed" style={{ color: "var(--parchment)" }}>
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
            <p className="font-mono text-[0.6875rem] tracking-[0.15em] leading-relaxed" style={{ color: "var(--parchment)" }}>
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
          </div>

          <div className="flex flex-col items-start gap-4 text-left">
            <div
              className="font-mono text-[0.6875rem] tracking-[0.15em]"
              style={{ color: "var(--clay)" }}
            >
              THE REVIVAL FUND &copy; 2026
            </div>
            <div
              className="font-mono text-[0.6875rem] tracking-[0.15em] leading-relaxed"
              style={{ color: "var(--clay)", opacity: 0.7 }}
            >
              <div>Analogue Group</div>
              <div>2261 Market Street, STE 22549</div>
              <div>San Francisco, CA 94114, USA</div>
              <div className="mt-1">EIN 33-1914333</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
