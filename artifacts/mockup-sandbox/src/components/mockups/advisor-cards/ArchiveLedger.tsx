import "./_group.css";
import { Twitter, Linkedin, Globe } from "lucide-react";

const ADVISORS = [
  {
    ref: "RF·A·01",
    name: "Stuart Buck",
    title: "Executive Director, Good Science Project",
    photo: "/__mockup/images/team/stuart-buck.jpeg",
    bio: "As Vice President of Research at Arnold Ventures, Stuart funded foundational work on scientific reproducibility and helped launch the Center for Open Science and the TOP Guidelines—now the world's most widely-adopted standards for scientific publication. He holds a Ph.D. in education policy and a J.D. with honors from Harvard Law School.",
    links: [Twitter, Linkedin, Globe],
  },
  {
    ref: "RF·A·02",
    name: "Aishwarya Khanduja",
    title: "Founder, Analogue Group",
    photo: "/__mockup/images/team/aishwarya-khanduja-cropped.png",
    bio: "Aishwarya runs Analogue, an R&D fund creating space and structure for antidisciplinary thinkers and fragile early-stage ideas. She holds an MPhil in Bioscience Enterprise from Cambridge and a BHSc in Biomedical Science from the University of Calgary.",
    links: [Globe, Twitter, Linkedin],
  },
  {
    ref: "RF·A·03",
    name: "David Lang",
    title: "Executive Director, Experiment Foundation",
    photo: "/__mockup/images/team/david-lang.jpg",
    bio: "David co-founded OpenROV, an underwater drone company, and Sofar, an ocean technology company. He has served on NOAA's Ocean Exploration Advisory Board and is a TED Senior Fellow and National Geographic Emerging Explorer.",
    links: [Twitter, Globe],
  },
];

export function ArchiveLedger() {
  return (
    <div
      style={{
        background: "var(--rf-bg)",
        color: "var(--rf-ink)",
        fontFamily: "var(--rf-serif)",
        padding: "48px 40px 56px",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          paddingBottom: 14,
          marginBottom: 6,
          borderBottom: "2px solid var(--rf-ink)",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--rf-mono)",
            fontSize: "0.8125rem",
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          Advisory Committee
        </h2>
        <span
          style={{
            fontFamily: "var(--rf-mono)",
            fontSize: "0.625rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--rf-clay)",
          }}
        >
          Register
        </span>
      </div>

      {ADVISORS.map((a) => (
        <article
          key={a.ref}
          style={{
            display: "flex",
            gap: 20,
            padding: "24px 0",
            borderBottom: "1px solid var(--rf-hairline)",
          }}
        >
          <div style={{ flexShrink: 0, width: 64, textAlign: "center" }}>
            <span
              style={{
                fontFamily: "var(--rf-mono)",
                fontSize: "0.625rem",
                letterSpacing: "0.1em",
                color: "var(--rf-accent)",
                display: "block",
                marginBottom: 10,
              }}
            >
              {a.ref}
            </span>
            <img
              src={a.photo}
              alt={a.name}
              style={{
                width: 64,
                height: 64,
                objectFit: "cover",
                filter: "grayscale(100%)",
                border: "1px solid var(--rf-hair-mid)",
              }}
            />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--rf-serif)",
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  margin: 0,
                }}
              >
                {a.name}
              </h3>
              <span
                style={{
                  fontFamily: "var(--rf-mono)",
                  fontSize: "0.625rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--rf-clay)",
                }}
              >
                {a.title}
              </span>
            </div>
            <p
              style={{
                fontSize: "0.9rem",
                lineHeight: 1.65,
                color: "var(--rf-body)",
                margin: "12px 0 0",
              }}
            >
              {a.bio}
            </p>
            <div style={{ display: "flex", gap: 14, marginTop: 14 }}>
              {a.links.map((Icon, idx) => (
                <Icon key={idx} style={{ width: 16, height: 16, color: "var(--rf-clay)" }} strokeWidth={1.6} />
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
