import "./_group.css";

const ITEMS = [
  {
    no: "01",
    title: "Historical discontinuation",
    body: "Research delegitimized by shifting paradigms or prematurely abandoned due to funding loss.",
  },
  {
    no: "02",
    title: "Disciplinary illegibility",
    body: "Work that falls between established fields or challenges dominant frameworks.",
  },
  {
    no: "03",
    title: "Non-traditional outcomes",
    body: "Projects producing artifacts beyond conventional academic articles.",
  },
  {
    no: "04",
    title: "Linguistic or geographic marginalization",
    body: "Research published in overlooked languages or cultural contexts.",
  },
  {
    no: "05",
    title: "Alternative epistemologies",
    body: "Archival or experimental work that deepens understanding of alternative cosmologies for science and technology.",
  },
];

export function ArchiveLedger() {
  return (
    <div
      style={{
        background: "var(--bg)",
        color: "var(--ink)",
        fontFamily: "var(--rf-serif)",
        padding: "56px 6vw 72px",
        minHeight: "100vh",
      }}
    >
      <header style={{ marginBottom: "44px" }}>
        <span
          style={{
            fontFamily: "var(--rf-mono)",
            fontSize: "0.72rem",
            letterSpacing: "0.2em",
            color: "var(--clay)",
            display: "block",
            marginBottom: "10px",
          }}
        >
          03
        </span>
        <h2
          style={{
            fontFamily: "var(--rf-serif)",
            fontSize: "1.5rem",
            fontWeight: 400,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: "var(--gold)",
            margin: 0,
          }}
        >
          What We Support
        </h2>
        <p
          style={{
            fontSize: "1.125rem",
            lineHeight: 1.8,
            marginTop: "20px",
            marginBottom: 0,
            maxWidth: "640px",
          }}
        >
          We fund projects unlikely to receive institutional support due to:
        </p>
      </header>

      <div style={{ borderTop: "1px solid var(--hair-strong)" }}>
        <div
          className="ledger-head"
          style={{
            display: "grid",
            gridTemplateColumns: "64px minmax(180px, 1.1fr) 1.6fr",
            gap: "24px",
            padding: "10px 0",
            borderBottom: "1px solid var(--hair-mid)",
            fontFamily: "var(--rf-mono)",
            fontSize: "0.6rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--clay)",
          }}
        >
          <span>No.</span>
          <span>Category</span>
          <span>Description</span>
        </div>

        {ITEMS.map((item) => (
          <div
            key={item.no}
            className="ledger-row"
            style={{
              display: "grid",
              gridTemplateColumns: "64px minmax(180px, 1.1fr) 1.6fr",
              gap: "24px",
              padding: "26px 0",
              borderBottom: "1px solid var(--hair-mid)",
              alignItems: "baseline",
              transition: "background 0.2s ease",
            }}
          >
            <span
              style={{
                fontFamily: "var(--rf-mono)",
                fontSize: "0.95rem",
                color: "var(--gold)",
              }}
            >
              {item.no}
            </span>
            <h3
              style={{
                fontFamily: "var(--rf-mono)",
                fontSize: "0.78rem",
                fontWeight: 400,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                color: "var(--ink)",
                margin: 0,
                lineHeight: 1.5,
              }}
            >
              {item.title}
            </h3>
            <p
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.7,
                color: "var(--clay)",
                margin: 0,
              }}
            >
              {item.body}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        .ledger-row:hover { background: rgba(59, 86, 156, 0.04); }
        @media (max-width: 640px) {
          .ledger-head { display: none !important; }
          .ledger-row {
            grid-template-columns: 40px 1fr !important;
            grid-template-areas: "no title" ". body" !important;
            row-gap: 8px !important;
          }
          .ledger-row > :nth-child(1) { grid-area: no; }
          .ledger-row > :nth-child(2) { grid-area: title; }
          .ledger-row > :nth-child(3) { grid-area: body; }
        }
      `}</style>
    </div>
  );
}
