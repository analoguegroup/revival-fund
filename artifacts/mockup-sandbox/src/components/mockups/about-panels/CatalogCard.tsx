import "./_group.css";

const ITEMS = [
  {
    ref: "RF·03·01",
    title: "Historical discontinuation",
    body: "Research delegitimized by shifting paradigms or prematurely abandoned due to funding loss.",
  },
  {
    ref: "RF·03·02",
    title: "Disciplinary illegibility",
    body: "Work that falls between established fields or challenges dominant frameworks.",
  },
  {
    ref: "RF·03·03",
    title: "Non-traditional outcomes",
    body: "Projects producing artifacts beyond conventional academic articles.",
  },
  {
    ref: "RF·03·04",
    title: "Linguistic or geographic marginalization",
    body: "Research published in overlooked languages or cultural contexts.",
  },
  {
    ref: "RF·03·05",
    title: "Alternative epistemologies",
    body: "Archival or experimental work that deepens understanding of alternative cosmologies for science and technology.",
  },
];

export function CatalogCard() {
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

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "16px",
        }}
      >
        {ITEMS.map((item) => (
          <article
            key={item.ref}
            className="catalog-card"
            style={{
              background: "var(--stone)",
              border: "1px solid var(--hair-mid)",
              padding: "22px 24px 26px",
              display: "flex",
              flexDirection: "column",
              transition: "border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
                gap: "12px",
                paddingBottom: "14px",
                borderBottom: "1px solid var(--hair-mid)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--rf-mono)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.14em",
                  color: "var(--gold)",
                }}
              >
                {item.ref}
              </span>
              <span
                style={{
                  fontFamily: "var(--rf-mono)",
                  fontSize: "0.62rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--clay)",
                }}
              >
                Index
              </span>
            </div>
            <h3
              style={{
                fontFamily: "var(--rf-serif)",
                fontSize: "1.35rem",
                fontWeight: 600,
                lineHeight: 1.2,
                color: "var(--ink)",
                margin: "18px 0 10px",
              }}
            >
              {item.title}
            </h3>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.7,
                color: "var(--clay)",
                margin: 0,
              }}
            >
              {item.body}
            </p>
          </article>
        ))}
      </div>

      <style>{`
        .catalog-card:hover {
          border-color: var(--hair-strong);
          box-shadow: 0 8px 24px rgba(34, 40, 56, 0.08);
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
}
