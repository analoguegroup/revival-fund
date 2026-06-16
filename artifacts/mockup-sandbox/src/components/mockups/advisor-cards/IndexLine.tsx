import "./_group.css";
import { Twitter, Linkedin, Globe } from "lucide-react";

const ADVISORS = [
  {
    name: "Stuart Buck",
    title: "Good Science Project",
    photo: "/__mockup/images/team/stuart-buck.jpeg",
    bio: "Funded foundational work on scientific reproducibility at Arnold Ventures and helped launch the Center for Open Science and the TOP Guidelines. Ph.D. in education policy; J.D. with honors from Harvard Law School.",
    links: [Twitter, Linkedin, Globe],
  },
  {
    name: "Aishwarya Khanduja",
    title: "Analogue Group",
    photo: "/__mockup/images/team/aishwarya-khanduja-cropped.png",
    bio: "Runs Analogue, an R&D fund for antidisciplinary thinkers and fragile early-stage ideas. MPhil in Bioscience Enterprise from Cambridge.",
    links: [Globe, Twitter, Linkedin],
  },
  {
    name: "David Lang",
    title: "Experiment Foundation",
    photo: "/__mockup/images/team/david-lang.jpg",
    bio: "Co-founded OpenROV and Sofar. NOAA Ocean Exploration Advisory Board member, TED Senior Fellow, and National Geographic Emerging Explorer.",
    links: [Twitter, Globe],
  },
];

export function IndexLine() {
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
      <h2
        style={{
          fontFamily: "var(--rf-mono)",
          fontSize: "0.8125rem",
          fontWeight: 700,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          margin: "0 0 8px",
        }}
      >
        Advisory Committee
      </h2>

      <div>
        {ADVISORS.map((a) => (
          <article
            key={a.name}
            style={{
              display: "flex",
              gap: 16,
              alignItems: "flex-start",
              padding: "20px 0",
              borderBottom: "1px solid var(--rf-hairline)",
            }}
          >
            <img
              src={a.photo}
              alt={a.name}
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                objectFit: "cover",
                filter: "grayscale(100%)",
                flexShrink: 0,
                marginTop: 2,
              }}
            />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                  gap: 12,
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--rf-serif)",
                    fontSize: "1.0625rem",
                    fontWeight: 700,
                    margin: 0,
                    lineHeight: 1.2,
                  }}
                >
                  {a.name}
                  <span
                    style={{
                      fontFamily: "var(--rf-mono)",
                      fontSize: "0.625rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--rf-clay)",
                      fontWeight: 400,
                      marginLeft: 10,
                    }}
                  >
                    {a.title}
                  </span>
                </h3>
                <div style={{ display: "flex", gap: 12, flexShrink: 0 }}>
                  {a.links.map((Icon, idx) => (
                    <Icon key={idx} style={{ width: 14, height: 14, color: "var(--rf-clay)" }} strokeWidth={1.6} />
                  ))}
                </div>
              </div>
              <p
                style={{
                  fontSize: "0.8125rem",
                  lineHeight: 1.55,
                  color: "var(--rf-clay)",
                  margin: "6px 0 0",
                }}
              >
                {a.bio}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
