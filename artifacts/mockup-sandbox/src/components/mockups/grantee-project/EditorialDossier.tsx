import "./_group.css";

export function EditorialDossier() {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "var(--bg)",
        color: "var(--ink)",
        fontFamily: "var(--rf-serif)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          padding: "2rem 4rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          borderBottom: "1px solid var(--hair-mid)",
        }}
      >
        <a
          href="#"
          style={{
            fontFamily: "var(--rf-mono)",
            fontSize: "0.75rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--clay)",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          ← Portfolio
        </a>
        <div
          style={{
            fontFamily: "var(--rf-mono)",
            fontSize: "0.75rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--clay)",
            textAlign: "right",
          }}
        >
          <div>PROJECT FILE // RF-2025-AS</div>
          <div style={{ color: "var(--gold)", marginTop: "0.25rem" }}>
            STATUS: ACTIVE GRANT
          </div>
        </div>
      </div>

      <div
        style={{
          flex: 1,
          width: "100%",
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "4rem 2rem 8rem",
          display: "grid",
          gridTemplateColumns: "1fr 280px",
          gap: "4rem",
        }}
      >
        <main>
          <header style={{ marginBottom: "4rem" }}>
            <h1
              style={{
                fontSize: "4.5rem",
                fontWeight: 400,
                lineHeight: 1.1,
                margin: "0 0 1.5rem",
                color: "var(--ink)",
              }}
            >
              Aiden Sagerman
            </h1>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <span
                style={{
                  fontFamily: "var(--rf-mono)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  border: "1px solid var(--gold)",
                  padding: "0.35rem 0.6rem",
                }}
              >
                Artificial Intelligence
              </span>
              <span
                style={{
                  fontFamily: "var(--rf-mono)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  border: "1px solid var(--gold)",
                  padding: "0.35rem 0.6rem",
                }}
              >
                History of Mathematics
              </span>
            </div>
          </header>

          <div
            style={{
              padding: "2.5rem",
              border: "1px solid var(--hair-strong)",
              backgroundColor: "var(--stone)",
              marginBottom: "4rem",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-10px",
                left: "2rem",
                backgroundColor: "var(--bg)",
                padding: "0 0.5rem",
                fontFamily: "var(--rf-mono)",
                fontSize: "0.7rem",
                letterSpacing: "0.15em",
                color: "var(--clay)",
              }}
            >
              CENTRAL INQUIRY
            </div>
            <p
              style={{
                fontFamily: "var(--rf-cardo)",
                fontStyle: "italic",
                fontSize: "2.25rem",
                lineHeight: 1.3,
                color: "var(--gold)",
                margin: 0,
              }}
            >
              "What logic tradition should we resurface for thinking about
              artificial intelligence?"
            </p>
          </div>

          <figure
            style={{
              margin: "0 0 4rem",
              border: "1px solid var(--hair-mid)",
              backgroundColor: "var(--stone)",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                background: "var(--slate)",
                borderBottom: "1px solid var(--hair-mid)",
                borderRight: "1px solid var(--hair-mid)",
                padding: "0.5rem 1rem",
                fontFamily: "var(--rf-mono)",
                fontSize: "0.7rem",
                letterSpacing: "0.15em",
                color: "var(--ink)",
                textTransform: "uppercase",
              }}
            >
              PLATE 01 // Visual Evidence
            </div>
            <img
              src="/__mockup/images/topology-notebook.png"
              alt="Reconstructed mid-century notebook filled with hand-drawn topological diagrams"
              style={{ display: "block", width: "100%", height: "auto" }}
            />
            <figcaption
              style={{
                padding: "1rem 1.5rem",
                borderTop: "1px solid var(--hair-mid)",
                fontFamily: "var(--rf-mono)",
                fontSize: "0.7rem",
                letterSpacing: "0.05em",
                color: "var(--clay)",
              }}
            >
              Reconstructed working notebook — freehand topological diagrams, c. 1952.
            </figcaption>
          </figure>

          <article
            style={{
              border: "1px solid var(--hair-mid)",
              position: "relative",
              marginBottom: "4rem",
              backgroundColor: "var(--bg)",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                background: "var(--slate)",
                borderBottom: "1px solid var(--hair-mid)",
                borderRight: "1px solid var(--hair-mid)",
                padding: "0.5rem 1rem",
                fontFamily: "var(--rf-mono)",
                fontSize: "0.7rem",
                letterSpacing: "0.15em",
                color: "var(--ink)",
                textTransform: "uppercase",
              }}
            >
              FILE 01 // The Project
            </div>
            <div style={{ padding: "3rem", fontSize: "1.125rem", lineHeight: 1.8 }}>
              <p style={{ marginBottom: "1.5rem" }}>
                For decades, the dominant narrative of mathematical progress has been
                one of increasing abstraction—a steady march away from intuition and
                toward pure formalism. Yet, a close examination of mid-twentieth-century
                topology reveals a different story: one where diagrams were not merely
                illustrative afterthoughts, but the very engines of discovery.
              </p>
              <p style={{ marginBottom: "1.5rem" }}>
                This project reconstructs how visual reasoning functioned as a rigorous
                epistemic practice before it was deliberately excised from the formal
                record. By returning to the unpublished notebooks, correspondence, and
                chalkboard sketches of key topologists, we can observe mathematical
                objects being manipulated visually long before they were captured
                algebraically.
              </p>
              <p style={{ margin: 0 }}>
                The work involves a meticulous archival reconstruction, translating
                these ephemeral visual maneuvers into a legible historical framework. It
                demonstrates that the abstraction which defines modern mathematics
                did not transcend visual reasoning—it merely erased its traces.
              </p>
            </div>
          </article>

          <article
            style={{
              border: "1px solid var(--hair-mid)",
              position: "relative",
              marginBottom: "4rem",
              backgroundColor: "var(--bg)",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                background: "var(--slate)",
                borderBottom: "1px solid var(--hair-mid)",
                borderRight: "1px solid var(--hair-mid)",
                padding: "0.5rem 1rem",
                fontFamily: "var(--rf-mono)",
                fontSize: "0.7rem",
                letterSpacing: "0.15em",
                color: "var(--ink)",
                textTransform: "uppercase",
              }}
            >
              FILE 02 // Why It Matters
            </div>
            <div style={{ padding: "3rem", fontSize: "1.125rem", lineHeight: 1.8 }}>
              <p style={{ marginBottom: "1.5rem" }}>
                The erasure of diagrammatic reasoning from the mathematical canon is
                not just an academic curiosity; it has profound implications for how we
                design and constrain artificial intelligence today. Our current
                computational architectures are built overwhelmingly on the legacy of
                pure formalism—a paradigm that structurally struggles with spatial,
                analogical, and context-dependent reasoning.
              </p>
              <p style={{ margin: "0 0 2rem" }}>
                By recovering the precise mechanisms of visual logic used by topologists,
                we are not merely correcting the historical record. We are unearthing
                an alternative logic tradition—a rigorous blueprint for non-linguistic,
                diagrammatic AI architectures that could bridge the gap between formal
                symbol manipulation and human-like geometric intuition.
              </p>
              <figure style={{ margin: 0 }}>
                <img
                  src="/__mockup/images/topology-chalkboard.png"
                  alt="Lecture-board reconstruction of diagrammatic manipulation of manifolds"
                  style={{
                    display: "block",
                    width: "100%",
                    height: "auto",
                    border: "1px solid var(--hair-mid)",
                  }}
                />
                <figcaption
                  style={{
                    marginTop: "0.75rem",
                    fontFamily: "var(--rf-mono)",
                    fontSize: "0.7rem",
                    letterSpacing: "0.05em",
                    color: "var(--clay)",
                  }}
                >
                  PLATE 02 — Lecture-board reconstruction, diagrammatic manipulation of manifolds.
                </figcaption>
              </figure>
            </div>
          </article>

          <div
            style={{
              fontFamily: "var(--rf-cardo)",
              fontStyle: "italic",
              fontSize: "1.5rem",
              lineHeight: 1.4,
              color: "var(--clay)",
              textAlign: "center",
              padding: "2rem 4rem",
              marginTop: "6rem",
              borderTop: "1px solid var(--hair-mid)",
            }}
          >
            “The abstraction that defined modern mathematics did not transcend visual reasoning—it merely erased its traces.”
          </div>
        </main>

        <aside>
          <div
            style={{
              position: "sticky",
              top: "4rem",
              border: "1px solid var(--hair-mid)",
              backgroundColor: "var(--stone)",
            }}
          >
            <div
              style={{
                padding: "1rem",
                borderBottom: "1px solid var(--hair-mid)",
                fontFamily: "var(--rf-mono)",
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                color: "var(--ink)",
                textTransform: "uppercase",
                backgroundColor: "var(--slate)",
              }}
            >
              DOSSIER METADATA
            </div>
            <div style={{ padding: "1.5rem" }}>
              <dl style={{ margin: 0, display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div>
                  <dt
                    style={{
                      fontFamily: "var(--rf-mono)",
                      fontSize: "0.65rem",
                      letterSpacing: "0.1em",
                      color: "var(--clay)",
                      textTransform: "uppercase",
                      marginBottom: "0.25rem",
                    }}
                  >
                    Discipline
                  </dt>
                  <dd style={{ margin: 0, fontSize: "1rem", color: "var(--ink)" }}>
                    History of Science, Mathematics
                  </dd>
                </div>
                <div style={{ height: "1px", backgroundColor: "var(--hair)" }} />
                <div>
                  <dt
                    style={{
                      fontFamily: "var(--rf-mono)",
                      fontSize: "0.65rem",
                      letterSpacing: "0.1em",
                      color: "var(--clay)",
                      textTransform: "uppercase",
                      marginBottom: "0.25rem",
                    }}
                  >
                    Period of Focus
                  </dt>
                  <dd style={{ margin: 0, fontSize: "1rem", color: "var(--ink)" }}>
                    Mid-20th Century
                  </dd>
                </div>
                <div style={{ height: "1px", backgroundColor: "var(--hair)" }} />
                <div>
                  <dt
                    style={{
                      fontFamily: "var(--rf-mono)",
                      fontSize: "0.65rem",
                      letterSpacing: "0.1em",
                      color: "var(--clay)",
                      textTransform: "uppercase",
                      marginBottom: "0.25rem",
                    }}
                  >
                    Grant Year
                  </dt>
                  <dd style={{ margin: 0, fontSize: "1rem", color: "var(--ink)" }}>
                    2025 Cohort
                  </dd>
                </div>
                <div style={{ height: "1px", backgroundColor: "var(--hair)" }} />
                <div>
                  <dt
                    style={{
                      fontFamily: "var(--rf-mono)",
                      fontSize: "0.65rem",
                      letterSpacing: "0.1em",
                      color: "var(--clay)",
                      textTransform: "uppercase",
                      marginBottom: "0.25rem",
                    }}
                  >
                    Output Type
                  </dt>
                  <dd style={{ margin: 0, fontSize: "1rem", color: "var(--ink)" }}>
                    Archival Reconstruction + Essays
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
