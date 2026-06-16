import "./_group.css";

const aboutSub = [
  { label: "About", active: true },
  { label: "Team", active: false },
  { label: "FAQ", active: false },
];

const closedTabs = [
  { label: "Projects", href: "/projects" },
  { label: "Portfolio", href: "/writings" },
];

const TAB_CLIP = "polygon(0 0, calc(100% - 14px) 0, 100% 100%, 0 100%)";

export function ManilaDrawer() {
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
      {/* Faint suggestion of page content on the right */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "6vw",
          transform: "translateY(-50%)",
          maxWidth: "440px",
          width: "min(46vw, 440px)",
          opacity: 0.5,
        }}
        aria-hidden="true"
      >
        <span
          style={{
            fontFamily: "var(--rf-mono)",
            fontSize: "0.68rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--clay)",
            display: "block",
            marginBottom: "16px",
          }}
        >
          RF · 01
        </span>
        <h1
          style={{
            fontFamily: "var(--rf-serif)",
            fontWeight: 400,
            fontSize: "2.6rem",
            lineHeight: 1.15,
            letterSpacing: "0.01em",
            color: "var(--ink)",
            margin: 0,
          }}
        >
          Reviving research
          <br />
          left behind by
          <br />
          shifting paradigms.
        </h1>
        <div style={{ height: "1px", background: "var(--hair-mid)", margin: "28px 0" }} />
        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "var(--clay)",
            margin: 0,
          }}
        >
          The Revival Fund supports work that fell between disciplines, lost its
          funding, or arrived ahead of its moment.
        </p>
        <div style={{ height: "1px", background: "var(--hair)", margin: "28px 0 0" }} />
      </div>

      {/* The drawer — anchored left, vertically centered */}
      <nav
        aria-label="Primary"
        style={{
          position: "absolute",
          left: "32px",
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* drawer lip / front edge */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "-14px",
            top: "-18px",
            bottom: "-18px",
            width: "10px",
            background:
              "linear-gradient(180deg, var(--slate), var(--patina))",
            borderRight: "1px solid var(--hair-mid)",
            borderRadius: "2px 0 0 2px",
            boxShadow: "1px 0 0 var(--hair)",
          }}
        />

        {/* ACTIVE folder — ABOUT, pulled open */}
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "stretch",
            zIndex: 4,
            transform: "translateX(8px)",
            marginBottom: "10px",
          }}
        >
          {/* gold accent tab */}
          <button
            type="button"
            data-testid="button-nav-about"
            aria-expanded="true"
            className="folder-tab folder-tab-active"
            style={{
              position: "relative",
              zIndex: 2,
              width: "150px",
              minHeight: "52px",
              padding: "0 22px",
              display: "flex",
              alignItems: "center",
              border: "none",
              cursor: "pointer",
              textAlign: "left",
              background: "linear-gradient(180deg, var(--stone), var(--slate))",
              clipPath: TAB_CLIP,
              boxShadow:
                "inset 3px 0 0 var(--gold), inset 0 1px 0 rgba(255,255,255,0.5)",
            }}
          >
            <span
              style={{
                fontFamily: "var(--rf-mono)",
                fontSize: "0.72rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--gold)",
                fontWeight: 700,
              }}
            >
              About
            </span>
          </button>

          {/* folder body panel — sub-navigation printed inside */}
          <div
            style={{
              position: "relative",
              marginLeft: "-12px",
              minWidth: "184px",
              background: "var(--stone)",
              border: "1px solid var(--hair-mid)",
              borderRadius: "0 3px 3px 3px",
              padding: "16px 20px 18px",
              boxShadow:
                "0 1px 0 var(--hair), 0 10px 24px rgba(34,40,56,0.07)",
            }}
          >
            <span
              style={{
                fontFamily: "var(--rf-mono)",
                fontSize: "0.6rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--clay)",
                display: "block",
                paddingBottom: "12px",
                marginBottom: "12px",
                borderBottom: "1px solid var(--hair)",
              }}
            >
              Contents
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: "11px" }}>
              {aboutSub.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  data-testid={`link-nav-${item.label.toLowerCase()}`}
                  className="sub-item"
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    textAlign: "left",
                    fontFamily: "var(--rf-mono)",
                    fontSize: "0.68rem",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: item.active ? "var(--gold)" : "var(--clay)",
                    fontWeight: item.active ? 700 : 400,
                    display: "flex",
                    alignItems: "center",
                    gap: "9px",
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      width: "10px",
                      height: "1px",
                      background: item.active ? "var(--gold)" : "var(--patina)",
                      flexShrink: 0,
                    }}
                  />
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* CLOSED folder tabs — Projects, Portfolio */}
        {closedTabs.map((tab, i) => (
          <a
            key={tab.label}
            href={tab.href}
            data-testid={`link-nav-${tab.label.toLowerCase()}`}
            className="folder-tab folder-tab-closed"
            style={{
              position: "relative",
              zIndex: 3 - i,
              width: "150px",
              minHeight: "50px",
              marginTop: i === 0 ? 0 : "-8px",
              padding: "0 22px",
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              background: "linear-gradient(180deg, var(--slate), var(--patina))",
              clipPath: TAB_CLIP,
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.4), 0 -1px 0 var(--hair)",
            }}
          >
            <span
              style={{
                fontFamily: "var(--rf-mono)",
                fontSize: "0.7rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--clay)",
              }}
            >
              {tab.label}
            </span>
          </a>
        ))}
      </nav>

      <style>{`
        .folder-tab-closed {
          transition: transform 0.22s ease, filter 0.22s ease;
        }
        .folder-tab-closed:hover {
          transform: translateX(6px);
          filter: brightness(1.02);
        }
        .sub-item {
          transition: color 0.18s ease, transform 0.18s ease;
        }
        .sub-item:hover {
          color: var(--gold);
          transform: translateX(2px);
        }
      `}</style>
    </div>
  );
}
