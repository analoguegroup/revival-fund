import "./_group.css";
import { Twitter, Linkedin, Globe } from "lucide-react";

const ADVISORS = [
  {
    kicker: "Executive Director, Good Science Project",
    name: "Stuart Buck",
    photo: "/__mockup/images/team/stuart-buck.jpeg",
    bio: "As Vice President of Research at Arnold Ventures, Stuart funded foundational work on scientific reproducibility, including the Reproducibility Projects in Psychology and Cancer Biology, and helped launch the Center for Open Science and the TOP Guidelines—now the world's most widely-adopted standards for scientific publication.",
    links: [Twitter, Linkedin, Globe],
  },
  {
    kicker: "Founder, Analogue Group",
    name: "Aishwarya Khanduja",
    photo: "/__mockup/images/team/aishwarya-khanduja-cropped.png",
    bio: "Aishwarya runs Analogue, an R&D fund creating space and structure for antidisciplinary thinkers, fragile early-stage ideas, and the kinds of experiments that become obvious only in hindsight. Her research has been supported by the Cosmos Institute and Belong Foundation.",
    links: [Globe, Twitter, Linkedin],
  },
];

export function Editorial() {
  return (
    <div
      style={{
        background: "var(--rf-bg)",
        color: "var(--rf-ink)",
        fontFamily: "var(--rf-serif)",
        padding: "52px 44px 60px",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: 56,
      }}
    >
      {ADVISORS.map((a) => (
        <article key={a.name} style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", gap: 26, alignItems: "flex-start" }}>
            <img
              src={a.photo}
              alt={a.name}
              style={{
                width: 132,
                height: 168,
                objectFit: "cover",
                filter: "grayscale(100%)",
                flexShrink: 0,
              }}
            />
            <div style={{ flex: 1, minWidth: 0, paddingTop: 4 }}>
              <p
                style={{
                  fontFamily: "var(--rf-mono)",
                  fontSize: "0.625rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--rf-accent)",
                  margin: "0 0 12px",
                }}
              >
                {a.kicker}
              </p>
              <h3
                style={{
                  fontFamily: "var(--rf-serif)",
                  fontSize: "2.1rem",
                  fontWeight: 700,
                  lineHeight: 1.05,
                  letterSpacing: "-0.01em",
                  margin: 0,
                }}
              >
                {a.name}
              </h3>
              <div style={{ display: "flex", gap: 16, marginTop: 18 }}>
                {a.links.map((Icon, idx) => (
                  <Icon key={idx} style={{ width: 18, height: 18, color: "var(--rf-clay)" }} strokeWidth={1.5} />
                ))}
              </div>
            </div>
          </div>
          <p
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.75,
              color: "var(--rf-body)",
              margin: "24px 0 0",
            }}
          >
            <span
              style={{
                float: "left",
                fontFamily: "var(--rf-serif)",
                fontSize: "3.1rem",
                lineHeight: 0.82,
                fontWeight: 700,
                paddingRight: 12,
                paddingTop: 6,
                color: "var(--rf-ink)",
              }}
            >
              {a.bio.charAt(0)}
            </span>
            {a.bio.slice(1)}
          </p>
        </article>
      ))}
    </div>
  );
}
