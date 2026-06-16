import "./_group.css";

const ITEMS = [
  {
    code: "FILE 01",
    title: "Historical discontinuation",
    body: "Research delegitimized by shifting paradigms or prematurely abandoned due to funding loss.",
  },
  {
    code: "FILE 02",
    title: "Disciplinary illegibility",
    body: "Work that falls between established fields or challenges dominant frameworks.",
  },
  {
    code: "FILE 03",
    title: "Non-traditional outcomes",
    body: "Projects producing artifacts beyond conventional academic articles.",
  },
  {
    code: "FILE 04",
    title: "Linguistic or geographic marginalization",
    body: "Research published in overlooked languages or cultural contexts.",
  },
  {
    code: "FILE 05",
    title: "Alternative epistemologies",
    body: "Archival or experimental work that deepens understanding of alternative cosmologies for science and technology.",
  },
];

export function Dossier() {
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
      <header style={{ marginBottom: "48px" }}>
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

      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {ITEMS.map((item) => (
          <article key={item.code} className="dossier" style={{ position: "relative" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "var(--slate)",
                border: "1px solid var(--hair-mid)",
                borderBottom: "none",
                padding: "7px 18px 6px",
                fontFamily: "var(--rf-mono)",
                fontSize: "0.62rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--gold)",
                position: "relative",
                top: "1px",
              }}
            >
              {item.code}
            </div>
            <div
              className="dossier-body"
              style={{
                background: "var(--stone)",
                border: "1px solid var(--hair-mid)",
                padding: "26px 28px 28px",
                display: "grid",
                gridTemplateColumns: "minmax(220px, 0.9fr) 1.5fr",
                gap: "28px",
                alignItems: "baseline",
                transition: "border-color 0.25s ease, box-shadow 0.25s ease",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--rf-serif)",
                  fontSize: "1.4rem",
                  fontWeight: 600,
                  lineHeight: 1.25,
                  color: "var(--ink)",
                  margin: 0,
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: "1.0625rem",
                  lineHeight: 1.75,
                  color: "var(--clay)",
                  margin: 0,
                }}
              >
                {item.body}
              </p>
            </div>
          </article>
        ))}
      </div>

      <style>{`
        .dossier:hover .dossier-body {
          border-color: var(--hair-strong);
          box-shadow: 0 8px 22px rgba(34, 40, 56, 0.07);
        }
        @media (max-width: 640px) {
          .dossier-body {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
        }
      `}</style>
    </div>
  );
}
