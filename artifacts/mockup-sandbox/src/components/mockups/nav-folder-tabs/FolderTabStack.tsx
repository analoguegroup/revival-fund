import "./_group.css";

const TAB_CLIP = "polygon(0 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 0 100%)";
const SUB_CLIP = "polygon(0 0, calc(100% - 11px) 0, 100% 50%, calc(100% - 11px) 100%, 0 100%)";

const mono: React.CSSProperties = {
  fontFamily: "var(--rf-mono)",
  textTransform: "uppercase",
};

export function FolderTabStack() {
  const subTabs = [
    { label: "About", active: true },
    { label: "Team", active: false },
    { label: "FAQ", active: false },
  ];

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
      {/* ---- Faint page content (the NAV is the hero) ---- */}
      <main
        style={{
          maxWidth: "640px",
          marginLeft: "auto",
          marginRight: "8vw",
          paddingTop: "16vh",
          paddingBottom: "12vh",
          opacity: 0.9,
        }}
      >
        <span
          style={{
            ...mono,
            fontSize: "0.66rem",
            letterSpacing: "0.22em",
            color: "var(--clay)",
            display: "block",
            marginBottom: "18px",
          }}
        >
          01 &mdash; About
        </span>
        <h1
          style={{
            fontFamily: "var(--rf-serif)",
            fontWeight: 400,
            fontSize: "2.6rem",
            lineHeight: 1.15,
            letterSpacing: "0.01em",
            color: "var(--ink)",
            margin: "0 0 28px",
            maxWidth: "520px",
          }}
        >
          Reviving research the present has forgotten how to value.
        </h1>

        <div style={{ borderTop: "1px solid var(--hair-mid)", margin: "0 0 26px" }} />

        <p
          style={{
            fontSize: "1.06rem",
            lineHeight: 1.85,
            color: "var(--clay)",
            margin: "0 0 22px",
            maxWidth: "480px",
          }}
        >
          The Revival Fund supports inquiry abandoned for reasons of fashion,
          funding, or legibility &mdash; work waiting in the margins of the
          archive for a second hearing.
        </p>

        <div style={{ borderTop: "1px solid var(--hair)", margin: "0 0 18px" }} />
        <div style={{ borderTop: "1px solid var(--hair)", maxWidth: "70%" }} />
      </main>

      {/* ---- Folder-tab nav, anchored left, vertically centered ---- */}
      <nav
        aria-label="Primary"
        style={{
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
        }}
      >
        {/* The spine */}
        <div
          style={{
            width: "10px",
            alignSelf: "stretch",
            background: "var(--slate)",
            borderRight: "1px solid var(--patina)",
            boxShadow: "inset -1px 0 0 var(--hair)",
          }}
        />

        {/* The stack of tabs */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "9px",
            paddingTop: "4px",
            paddingBottom: "4px",
          }}
        >
          {/* ABOUT — active top tab, protrudes further right */}
          <FolderTab label="About" active marginLeft={0} width={186} />

          {/* Sub-tabs cascade: smaller, slightly indented, staggered */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "6px",
              paddingTop: "2px",
              paddingBottom: "6px",
            }}
          >
            {subTabs.map((s, i) => (
              <SubTab
                key={s.label}
                label={s.label}
                active={s.active}
                marginLeft={20 + i * 12}
              />
            ))}
          </div>

          {/* PROJECTS / PORTFOLIO — inactive top tabs, staggered */}
          <FolderTab label="Projects" marginLeft={6} width={150} />
          <FolderTab label="Portfolio" marginLeft={0} width={150} />
        </div>
      </nav>
    </div>
  );
}

function FolderTab({
  label,
  active = false,
  marginLeft,
  width,
}: {
  label: string;
  active?: boolean;
  marginLeft: number;
  width: number;
}) {
  return (
    <div
      style={{
        marginLeft,
        width: active ? width + 32 : width,
        height: "40px",
        clipPath: TAB_CLIP,
        background: active ? "var(--gold)" : "var(--stone)",
        borderRadius: "2px",
        display: "flex",
        alignItems: "center",
        paddingLeft: "16px",
        paddingRight: "26px",
        boxShadow: active
          ? "0 1px 2px rgba(34,40,56,0.18)"
          : "inset 0 0 0 1px var(--patina)",
        position: "relative",
      }}
    >
      {/* hairline for inactive (clip-path strips real borders, so use inset shadow above) */}
      <span
        style={{
          ...mono,
          fontSize: "0.72rem",
          letterSpacing: "0.18em",
          color: active ? "var(--stone)" : "var(--ink)",
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </span>
    </div>
  );
}

function SubTab({
  label,
  active = false,
  marginLeft,
}: {
  label: string;
  active?: boolean;
  marginLeft: number;
}) {
  return (
    <div
      style={{
        marginLeft,
        width: "128px",
        height: "30px",
        clipPath: SUB_CLIP,
        background: active ? "var(--slate)" : "var(--stone)",
        borderRadius: "2px",
        display: "flex",
        alignItems: "center",
        paddingLeft: "14px",
        paddingRight: "20px",
        boxShadow: active
          ? "inset 0 0 0 1px var(--gold)"
          : "inset 0 0 0 1px var(--hair-mid)",
      }}
    >
      <span
        style={{
          ...mono,
          fontSize: "0.65rem",
          letterSpacing: "0.16em",
          color: active ? "var(--gold)" : "var(--clay)",
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </span>
    </div>
  );
}
