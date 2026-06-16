import "./_group.css";

const TOP_TABS = [
  { ref: "RF·01", label: "About", active: true },
  { ref: "RF·02", label: "Projects", active: false },
  { ref: "RF·03", label: "Portfolio", active: false },
];

const SUB_TABS = [
  { ref: "01·a", label: "About" },
  { ref: "01·b", label: "Team" },
  { ref: "01·c", label: "FAQ" },
];

const RAIL_WIDTH = 14;
const TAB_WIDTH = 132;
const SUB_WIDTH = 108;

export function IndexSpineTabs() {
  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        background: "var(--bg)",
        color: "var(--ink)",
        fontFamily: "var(--rf-serif)",
        overflow: "hidden",
      }}
    >
      {/* Faint suggestion of page content on the right — NAV is the hero */}
      <main
        style={{
          maxWidth: "640px",
          marginLeft: "auto",
          marginRight: "8vw",
          paddingTop: "16vh",
          paddingBottom: "12vh",
          opacity: 0.92,
        }}
      >
        <span
          style={{
            fontFamily: "var(--rf-mono)",
            fontSize: "0.66rem",
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            color: "var(--clay)",
            display: "block",
            marginBottom: "18px",
          }}
        >
          RF·01 — About
        </span>
        <h1
          style={{
            fontFamily: "var(--rf-serif)",
            fontSize: "2.6rem",
            fontWeight: 400,
            lineHeight: 1.15,
            letterSpacing: "0.01em",
            color: "var(--ink)",
            margin: 0,
          }}
        >
          The Revival Fund supports research the world left behind.
        </h1>
        <div
          style={{
            height: "1px",
            background: "var(--hair-mid)",
            margin: "36px 0 28px",
          }}
        />
        <p
          style={{
            fontSize: "1.15rem",
            lineHeight: 1.85,
            color: "var(--clay)",
            margin: 0,
            maxWidth: "560px",
          }}
        >
          Some of the most promising ideas were abandoned not because they were
          wrong, but because the moment passed. We exist to give that work a
          second hearing.
        </p>
        <div
          style={{
            height: "1px",
            background: "var(--hair)",
            margin: "28px 0",
          }}
        />
        <div
          style={{
            display: "flex",
            gap: "28px",
            flexWrap: "wrap",
          }}
        >
          {["Mandate", "Eligibility", "Process"].map((t, i) => (
            <div key={t} style={{ minWidth: "120px" }}>
              <span
                style={{
                  fontFamily: "var(--rf-mono)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--clay)",
                  display: "block",
                  marginBottom: "8px",
                }}
              >
                {`0${i + 1}`}
              </span>
              <span
                style={{
                  fontFamily: "var(--rf-serif)",
                  fontSize: "1.05rem",
                  color: "var(--ink)",
                }}
              >
                {t}
              </span>
            </div>
          ))}
        </div>
      </main>

      {/* ── INDEX SPINE TAB NAV ── */}
      <nav
        aria-label="Primary"
        style={{
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
          alignItems: "stretch",
        }}
      >
        {/* Continuous vertical spine rail */}
        <div
          style={{
            width: `${RAIL_WIDTH}px`,
            background:
              "linear-gradient(180deg, var(--slate) 0%, var(--stone) 100%)",
            borderRight: "1px solid var(--hair-strong)",
            boxShadow: "1px 0 0 var(--hair)",
          }}
        />

        {/* Tabs jutting from the spine */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            paddingTop: "4px",
            paddingBottom: "4px",
          }}
        >
          {TOP_TABS.map((tab) => {
            const isActive = tab.active;
            return (
              <div key={tab.label}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: `${TAB_WIDTH}px`,
                    marginLeft: isActive ? "0px" : "-10px",
                    padding: "12px 16px 13px 20px",
                    background: isActive ? "var(--stone)" : "var(--slate)",
                    borderTop: `1px solid ${
                      isActive ? "var(--gold)" : "var(--hair-mid)"
                    }`,
                    borderRight: `1px solid ${
                      isActive ? "var(--gold)" : "var(--hair-mid)"
                    }`,
                    borderBottom: `1px solid ${
                      isActive ? "var(--gold)" : "var(--hair-mid)"
                    }`,
                    borderLeft: isActive
                      ? "3px solid var(--gold)"
                      : "1px solid transparent",
                    clipPath:
                      "polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 0 100%)",
                    boxShadow: isActive
                      ? "2px 2px 10px rgba(34,40,56,0.08)"
                      : "none",
                    transition: "margin-left 0.2s ease",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--rf-mono)",
                      fontSize: "0.58rem",
                      letterSpacing: "0.2em",
                      color: isActive ? "var(--gold)" : "var(--clay)",
                      marginBottom: "5px",
                    }}
                  >
                    {tab.ref}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--rf-mono)",
                      fontSize: "0.7rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: isActive ? "var(--gold)" : "var(--parchment)",
                      fontWeight: isActive ? 700 : 400,
                    }}
                  >
                    {tab.label}
                  </span>
                </div>

                {/* Sub-tabs — thinner secondary index tabs, indented */}
                {isActive && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "6px",
                      marginTop: "8px",
                      marginLeft: "24px",
                    }}
                  >
                    {SUB_TABS.map((sub, i) => {
                      const subActive = i === 0;
                      return (
                        <div
                          key={sub.label}
                          style={{
                            display: "flex",
                            alignItems: "baseline",
                            gap: "8px",
                            width: `${SUB_WIDTH}px`,
                            padding: "7px 12px 7px 13px",
                            background: subActive
                              ? "var(--stone)"
                              : "color-mix(in srgb, var(--slate) 70%, transparent)",
                            border: `1px solid ${
                              subActive ? "var(--gold)" : "var(--hair-mid)"
                            }`,
                            borderLeftWidth: subActive ? "2px" : "1px",
                            clipPath:
                              "polygon(0 0, calc(100% - 9px) 0, 100% 9px, 100% 100%, 0 100%)",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "var(--rf-mono)",
                              fontSize: "0.5rem",
                              letterSpacing: "0.12em",
                              color: "var(--clay)",
                            }}
                          >
                            {sub.ref}
                          </span>
                          <span
                            style={{
                              fontFamily: "var(--rf-mono)",
                              fontSize: "0.65rem",
                              letterSpacing: "0.16em",
                              textTransform: "uppercase",
                              color: subActive
                                ? "var(--gold)"
                                : "var(--clay)",
                              fontWeight: subActive ? 700 : 400,
                            }}
                          >
                            {sub.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
