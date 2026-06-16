import './_group.css';

const grantees = [
  {
    ref: "RF-2025-001",
    name: "Aiden Sagerman",
    field: "ARCHIVE",
    description:
      "Reconstructing how 20th-century topology shifted from diagram-based intuition to algebraic logic.",
  },
  {
    ref: "RF-2025-002",
    name: "Alex Huth (Seconds_0)",
    field: "TOOLING",
    description:
      "An automated pipeline for translating Soviet research papers into English.",
  },
  {
    ref: "RF-2025-003",
    name: "Abhinav Singh & Dhruva Katrekar",
    field: "EXPERIMENT",
    description:
      "Reviving CRN-based learning to make DNA chemical computing a practical engineering discipline.",
  },
  {
    ref: "RF-2025-004",
    name: "Jenn Leung & Chloe Loewith",
    field: "EXPERIMENT",
    description:
      "Using multiplayer games to communicate with living neurons and benchmark Synthetic Biological Intelligence.",
  },
  {
    ref: "RF-2025-005",
    name: "Daniel Burger",
    field: "EXPERIMENT",
    description:
      "Reviving forgotten \u201Cbrain-in-vat\u201D research using modern perfusion technology.",
  },
  {
    ref: "RF-2025-006",
    name: "Iris Long & Yanlin Lu",
    field: "ARCHIVE",
    description:
      "A cultural reconstruction of China's research into anomalous bodily phenomena, 1979\u20131999.",
  },
  {
    ref: "RF-2025-007",
    name: "Nora N. Khan",
    field: "ARCHIVE",
    description:
      "Recovering how forgotten artistic research collectives built generative epistemic environments.",
  },
];

const COLS = "5.5rem minmax(0, 1.1fr) 7rem minmax(0, 1.7fr)";

const monoMeta: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: "0.625rem",
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "var(--clay)",
};

export function Ledger() {
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
          <span style={monoMeta}>Finding Aid &middot; RF/2025</span>
        </div>

        {/* Title block */}
        <div className="pt-[clamp(3.5rem,10vh,96px)] pb-8">
          <div style={{ ...monoMeta, marginBottom: "1.25rem" }}>
            Register of Grantees
          </div>
          <h1
            className="rf-display"
            style={{ fontSize: "clamp(2.5rem, 9vw, 64px)", margin: 0 }}
          >
            PortfoLio
          </h1>
          <p
            className="rf-mono"
            style={{
              marginTop: "1.5rem",
              maxWidth: "30rem",
              fontSize: "0.6875rem",
              letterSpacing: "0.08em",
              lineHeight: 1.8,
              color: "var(--clay)",
            }}
          >
            Seven entries. 2025 cohort. Dormant scientific research, forgotten
            paradigms, and lost intellectual traditions, catalogued by reference.
          </p>
        </div>

        {/* Ledger table */}
        <section className="pb-12">
          {/* Header row */}
          <div
            className="grid items-end gap-6 pb-3"
            style={{
              gridTemplateColumns: COLS,
              borderBottom: "2px solid var(--hair)",
            }}
          >
            <span style={monoMeta}>Ref.</span>
            <span style={monoMeta}>Grantee</span>
            <span style={monoMeta}>Field</span>
            <span style={monoMeta}>Subject</span>
          </div>

          {/* Body rows */}
          {grantees.map((g) => (
            <div
              key={g.ref}
              className="rf-row rf-layer grid items-baseline gap-6 py-6 px-4 -mx-4"
              style={{
                gridTemplateColumns: COLS,
                borderBottom: "1px solid var(--hair)",
              }}
              data-testid={`row-grantee-${g.ref}`}
            >
              <span
                className="rf-mono"
                style={{
                  fontSize: "0.75rem",
                  letterSpacing: "0.06em",
                  color: "var(--cobalt)",
                }}
                data-testid={`text-ref-${g.ref}`}
              >
                {g.ref}
              </span>
              <span
                className="rf-name"
                style={{
                  fontSize: "1.25rem",
                  lineHeight: 1.3,
                  color: "var(--parchment)",
                }}
                data-testid={`text-name-${g.ref}`}
              >
                {g.name}
              </span>
              <span>
                <span className="rf-tag" data-testid={`text-field-${g.ref}`}>
                  {g.field}
                </span>
              </span>
              <span
                style={{
                  fontSize: "0.9375rem",
                  lineHeight: 1.7,
                  opacity: 0.78,
                }}
                data-testid={`text-subject-${g.ref}`}
              >
                {g.description}
              </span>
            </div>
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
        .rf-portfolio .rf-row:hover .rf-name { color: var(--cobalt); }
        .rf-portfolio .rf-row .rf-name { transition: color 0.35s ease; }
      `}</style>
    </div>
  );
}
