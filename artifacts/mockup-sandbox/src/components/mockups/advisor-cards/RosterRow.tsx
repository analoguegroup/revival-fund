import "./_group.css";
import { Twitter, Linkedin, Globe } from "lucide-react";

const ADVISORS = [
  {
    name: "Stuart Buck",
    title: "Executive Director, Good Science Project",
    photo: "/__mockup/images/team/stuart-buck.jpeg",
    bio: "As Vice President of Research at Arnold Ventures, Stuart funded foundational work on scientific reproducibility, including the Reproducibility Projects in Psychology and Cancer Biology, and helped launch the Center for Open Science and the TOP Guidelines—now the world's most widely-adopted standards for scientific publication. He holds a Ph.D. in education policy and a J.D. with honors from Harvard Law School.",
    links: [Twitter, Linkedin, Globe],
  },
  {
    name: "Aishwarya Khanduja",
    title: "Founder, Analogue Group",
    photo: "/__mockup/images/team/aishwarya-khanduja-cropped.png",
    bio: "Aishwarya runs Analogue, an R&D fund creating space and structure for antidisciplinary thinkers, fragile early-stage ideas, and the kinds of experiments that become obvious only in hindsight. She holds an MPhil in Bioscience Enterprise from Cambridge and a BHSc in Biomedical Science from the University of Calgary. Her research has been supported by the Cosmos Institute and Belong Foundation.",
    links: [Globe, Twitter, Linkedin],
  },
  {
    name: "David Lang",
    title: "Executive Director, Experiment Foundation",
    photo: "/__mockup/images/team/david-lang.jpg",
    bio: "David Lang is the Executive Director of the Experiment Foundation. He co-founded OpenROV, an underwater drone company, and Sofar, an ocean technology company. He has served on NOAA's Ocean Exploration Advisory Board and is a TED Senior Fellow and National Geographic Emerging Explorer.",
    links: [Twitter, Globe],
  },
];

export function RosterRow() {
  return (
    <div
      style={{
        background: "var(--rf-bg)",
        color: "var(--rf-ink)",
        fontFamily: "var(--rf-serif)",
        padding: "48px 44px 56px",
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
          color: "var(--rf-ink)",
          margin: "0 0 32px",
        }}
      >
        Advisory Committee
      </h2>

      <div>
        {ADVISORS.map((a, i) => (
          <article
            key={a.name}
            style={{
              display: "flex",
              gap: "22px",
              alignItems: "flex-start",
              padding: "28px 0",
              borderTop: i === 0 ? "none" : "1px solid var(--rf-hairline)",
            }}
          >
            <img
              src={a.photo}
              alt={a.name}
              style={{
                width: 72,
                height: 72,
                borderRadius: "50%",
                objectFit: "cover",
                filter: "grayscale(100%)",
                flexShrink: 0,
              }}
            />
            <div style={{ flex: 1, minWidth: 0 }}>
              <h3
                style={{
                  fontFamily: "var(--rf-serif)",
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  lineHeight: 1.2,
                  margin: 0,
                }}
              >
                {a.name}
              </h3>
              <p
                style={{
                  fontFamily: "var(--rf-mono)",
                  fontSize: "0.6875rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--rf-clay)",
                  margin: "8px 0 14px",
                }}
              >
                {a.title}
              </p>
              <p
                style={{
                  fontSize: "0.9375rem",
                  lineHeight: 1.7,
                  color: "var(--rf-body)",
                  margin: 0,
                }}
              >
                {a.bio}
              </p>
              <div style={{ display: "flex", gap: 16, marginTop: 16 }}>
                {a.links.map((Icon, idx) => (
                  <Icon key={idx} style={{ width: 17, height: 17, color: "var(--rf-clay)" }} strokeWidth={1.6} />
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
