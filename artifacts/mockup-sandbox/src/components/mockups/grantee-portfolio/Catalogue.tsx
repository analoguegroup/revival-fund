import './_group.css';

const grantees = [
  {
    no: "01",
    name: "Aiden Sagerman",
    category: "ARCHIVE",
    description:
      "Reconstructing how 20th-century topology shifted from diagram-based intuition to algebraic logic.",
  },
  {
    no: "02",
    name: "Alex Huth (Seconds_0)",
    category: "TOOLING",
    description:
      "An automated pipeline for translating Soviet research papers into English.",
  },
  {
    no: "03",
    name: "Abhinav Singh & Dhruva Katrekar",
    category: "EXPERIMENT",
    description:
      "Reviving CRN-based learning to make DNA chemical computing a practical engineering discipline.",
  },
  {
    no: "04",
    name: "Jenn Leung & Chloe Loewith",
    category: "EXPERIMENT",
    description:
      "Using multiplayer games to communicate with living neurons and benchmark Synthetic Biological Intelligence.",
  },
  {
    no: "05",
    name: "Daniel Burger",
    category: "EXPERIMENT",
    description:
      "Reviving forgotten \u201Cbrain-in-vat\u201D research using modern perfusion technology.",
  },
  {
    no: "06",
    name: "Iris Long & Yanlin Lu",
    category: "ARCHIVE",
    description:
      "A cultural reconstruction of China's research into anomalous bodily phenomena, 1979\u20131999.",
  },
  {
    no: "07",
    name: "Nora N. Khan",
    category: "ARCHIVE",
    description:
      "Recovering how forgotten artistic research collectives built generative epistemic environments.",
  },
];

const monoMeta: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: "0.625rem",
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "var(--clay)",
};

export function Catalogue() {
  return (
    <div className="rf-portfolio">
      <div className="rf-inner" style={{ padding: "0 6vw" }}>
        {/* Masthead */}
        <div
          className="flex items-center justify-between gap-4 pt-10 pb-4"
          style={{ borderBottom: "1px solid var(--hair)" }}
        >
          <span
            className="rf-display"
            style={{ color: "var(--cobalt)", fontSize: "1.5rem", lineHeight: 1 }}
          >
            The RevivaL Fund
          </span>
          <span style={monoMeta}>Catalogue &middot; No. 001&ndash;007</span>
        </div>

        {/* Title block */}
        <div className="pt-[clamp(3.5rem,10vh,96px)] pb-8">
          <div style={{ ...monoMeta, marginBottom: "1.25rem" }}>
            2025 Cohort &middot; Catalogue Raisonn&eacute;
          </div>
          <h1
            className="rf-display"
            style={{ fontSize: "clamp(2.5rem, 9vw, 64px)", margin: 0 }}
          >
            PortfoLio
          </h1>
          <p
            style={{
              marginTop: "1.5rem",
              maxWidth: "32rem",
              fontSize: "1.0625rem",
              lineHeight: 1.7,
              color: "var(--parchment)",
              opacity: 0.8,
            }}
          >
            A catalogue of the cohort reviving dormant scientific research,
            forgotten paradigms, and lost intellectual traditions.
          </p>
        </div>

        {/* Catalogue entries */}
        <section
          className="pb-12"
          style={{ borderTop: "2px solid var(--hair)" }}
        >
          {grantees.map((g) => (
            <article
              key={g.no}
              className="rf-entry rf-layer grid gap-6 sm:gap-10 py-9 px-5 -mx-5"
              style={{
                gridTemplateColumns: "4.5rem 1fr",
                borderBottom: "1px solid var(--hair)",
              }}
              data-testid={`entry-grantee-${g.no}`}
            >
              <div
                className="rf-mono"
                style={{
                  fontSize: "1.75rem",
                  lineHeight: 1,
                  color: "var(--cobalt)",
                  paddingTop: "0.25rem",
                }}
                data-testid={`text-no-${g.no}`}
              >
                {g.no}
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3">
                  <h2
                    className="rf-name"
                    style={{
                      fontSize: "1.75rem",
                      lineHeight: 1.2,
                      color: "var(--parchment)",
                      margin: 0,
                    }}
                    data-testid={`text-name-${g.no}`}
                  >
                    {g.name}
                  </h2>
                  <span className="rf-tag" data-testid={`text-category-${g.no}`}>
                    {g.category}
                  </span>
                </div>
                <p
                  style={{
                    maxWidth: "40rem",
                    fontSize: "1rem",
                    lineHeight: 1.75,
                    opacity: 0.78,
                    margin: 0,
                  }}
                  data-testid={`text-summary-${g.no}`}
                >
                  {g.description}
                </p>
              </div>
            </article>
          ))}
        </section>

        {/* Footer */}
        <footer
          className="flex flex-col sm:flex-row justify-between items-start gap-8 pt-8 pb-16"
          style={{ borderTop: "1px solid var(--hair)" }}
        >
          <p
            className="rf-mono"
            style={{
              maxWidth: "30rem",
              fontSize: "0.6875rem",
              letterSpacing: "0.12em",
              lineHeight: 1.7,
              color: "var(--parchment)",
              margin: 0,
            }}
          >
            The Revival Fund is an initiative of{" "}
            <a
              href="https://analoguegroup.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="rf-link"
            >
              The Analogue Group
            </a>
            .
          </p>
          <div style={monoMeta}>The Revival Fund &copy; 2026</div>
        </footer>
      </div>

      <style>{`
        .rf-portfolio .rf-entry .rf-name { transition: color 0.35s ease; }
        .rf-portfolio .rf-entry:hover .rf-name { color: var(--cobalt); }
      `}</style>
    </div>
  );
}
