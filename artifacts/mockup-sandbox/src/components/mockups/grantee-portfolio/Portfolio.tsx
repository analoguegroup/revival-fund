import './_group.css';

const grantees = [
  {
    id: 1,
    name: "Aiden Sagerman",
    category: "ARCHIVE",
    description:
      "Reconstructing how 20th-century topology shifted from diagram-based intuition to algebraic logic.",
  },
  {
    id: 2,
    name: "Alex Huth (Seconds_0)",
    category: "TOOLING",
    description:
      "An automated pipeline for translating Soviet research papers into English.",
  },
  {
    id: 3,
    name: "Abhinav Singh & Dhruva Katrekar",
    category: "EXPERIMENT",
    description:
      "Reviving CRN-based learning to make DNA chemical computing a practical engineering discipline.",
  },
  {
    id: 4,
    name: "Jenn Leung & Chloe Loewith",
    category: "EXPERIMENT",
    description:
      "Using multiplayer games to communicate with living neurons and benchmark Synthetic Biological Intelligence.",
  },
  {
    id: 5,
    name: "Daniel Burger",
    category: "EXPERIMENT",
    description:
      "Reviving forgotten \u201Cbrain-in-vat\u201D research using modern perfusion technology.",
  },
  {
    id: 6,
    name: "Iris Long & Yanlin Lu",
    category: "ARCHIVE",
    description:
      "A cultural reconstruction of China's research into anomalous bodily phenomena, 1979\u20131999.",
  },
  {
    id: 7,
    name: "Nora N. Khan",
    category: "ARCHIVE",
    description:
      "Recovering how forgotten artistic research collectives built generative epistemic environments.",
  },
];

export function Portfolio() {
  return (
    <div className="rf-portfolio">
      <div className="rf-inner" style={{ padding: "0 6vw" }}>
        {/* Masthead */}
        <div
          className="flex items-center justify-between gap-4 pt-10 pb-6"
          style={{ borderBottom: "1px solid var(--hair)" }}
        >
          <span
            className="rf-display"
            style={{ color: "var(--cobalt)", fontSize: "1.5rem", lineHeight: 1 }}
          >
            The RevivaL Fund
          </span>
          <span
            className="rf-mono"
            style={{
              color: "var(--clay)",
              fontSize: "0.6875rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            Index 001
          </span>
        </div>

        {/* Title block */}
        <div className="pt-[clamp(4rem,12vh,120px)] pb-12" style={{ borderBottom: "1px solid var(--hair)" }}>
          <h1
            className="rf-display"
            style={{ fontSize: "clamp(2.5rem, 9vw, 64px)", margin: 0 }}
          >
            PortfoLio
          </h1>
        </div>

        {/* Intro + legend */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 pt-12 pb-2">
          <p
            style={{
              maxWidth: "34rem",
              fontSize: "1.0625rem",
              lineHeight: 1.7,
              color: "var(--parchment)",
              opacity: 0.8,
              margin: 0,
            }}
          >
            The 2025 cohort reviving dormant scientific research, forgotten
            paradigms, and lost intellectual traditions.
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <span
              className="rf-mono"
              style={{
                color: "var(--clay)",
                fontSize: "0.625rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                marginRight: "0.25rem",
              }}
            >
              Categories
            </span>
            <span className="rf-tag">Archive</span>
            <span className="rf-tag">Experiment</span>
            <span className="rf-tag">Tooling</span>
          </div>
        </div>

        {/* Grid of grantees */}
        <section className="py-12 sm:py-[64px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
            {grantees.map((grantee) => (
              <div
                key={grantee.id}
                className="rf-card flex flex-col gap-5 p-5 sm:p-7"
                data-testid={`card-grantee-${grantee.id}`}
              >
                <p
                  className="rf-name"
                  style={{
                    fontSize: "1.375rem",
                    lineHeight: 1.25,
                    color: "var(--parchment)",
                    margin: 0,
                  }}
                  data-testid={`text-grantee-name-${grantee.id}`}
                >
                  {grantee.name}
                </p>

                <p
                  className="flex-1"
                  style={{
                    fontSize: "0.9375rem",
                    lineHeight: 1.75,
                    opacity: 0.75,
                    margin: 0,
                  }}
                  data-testid={`text-grantee-summary-${grantee.id}`}
                >
                  {grantee.description}
                </p>

                <div className="flex flex-wrap content-end gap-2 mt-auto pt-4">
                  <span
                    className="rf-tag"
                    data-testid={`text-tag-${grantee.id}`}
                  >
                    {grantee.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer
          className="flex flex-col gap-8 pt-12 pb-16"
          style={{ borderTop: "1px solid var(--hair)" }}
        >
          <div
            className="leading-none"
            style={{ color: "var(--cobalt)", opacity: 0.4, fontSize: "2rem" }}
          >
            &#x25AC;
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-start gap-8">
            <p
              className="rf-mono"
              style={{
                maxWidth: "32rem",
                fontSize: "0.6875rem",
                letterSpacing: "0.15em",
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
            <div
              className="rf-mono"
              style={{
                fontSize: "0.6875rem",
                letterSpacing: "0.15em",
                color: "var(--clay)",
                textTransform: "uppercase",
              }}
            >
              The Revival Fund &copy; 2026
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
