import "./_group.css";
import { Twitter, Linkedin, Globe } from "lucide-react";

const ADVISORS = [
  {
    name: "Stuart Buck",
    title: "Executive Director, Good Science Project",
    photo: "/__mockup/images/team/stuart-buck.jpeg",
    bio: "As Vice President of Research at Arnold Ventures, Stuart funded foundational work on scientific reproducibility, including the Reproducibility Projects in Psychology and Cancer Biology, and helped launch the Center for Open Science and the TOP Guidelines—now the world's most widely-adopted standards for scientific publication.",
    links: [Twitter, Linkedin, Globe],
  },
  {
    name: "Aishwarya Khanduja",
    title: "Founder, Analogue Group",
    photo: "/__mockup/images/team/aishwarya-khanduja-cropped.png",
    bio: "Aishwarya runs Analogue, an R&D fund creating space and structure for antidisciplinary thinkers, fragile early-stage ideas, and the kinds of experiments that become obvious only in hindsight. She holds an MPhil in Bioscience Enterprise from Cambridge.",
    links: [Globe, Twitter, Linkedin],
  },
];

export function PortraitCard() {
  return (
    <div
      style={{
        background: "var(--rf-bg)",
        color: "var(--rf-ink)",
        fontFamily: "var(--rf-serif)",
        padding: "48px 40px 56px",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: 28,
        alignItems: "center",
      }}
    >
      {ADVISORS.map((a) => (
        <article
          key={a.name}
          style={{
            background: "var(--rf-stone)",
            border: "1px solid var(--rf-hair-soft)",
            borderRadius: 6,
            padding: "32px 28px 24px",
            width: "100%",
            maxWidth: 380,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <img
            src={a.photo}
            alt={a.name}
            style={{
              width: 88,
              height: 88,
              borderRadius: "50%",
              objectFit: "cover",
              filter: "grayscale(100%)",
              marginBottom: 18,
            }}
          />
          <h3
            style={{
              fontFamily: "var(--rf-serif)",
              fontSize: "1.35rem",
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
              margin: "10px 0 0",
            }}
          >
            {a.title}
          </p>
          <p
            style={{
              fontSize: "0.9rem",
              lineHeight: 1.65,
              color: "var(--rf-body)",
              margin: "18px 0 0",
              display: "-webkit-box",
              WebkitLineClamp: 5,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {a.bio}
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 16,
              marginTop: 20,
              paddingTop: 18,
              borderTop: "1px solid var(--rf-hair-soft)",
              width: "100%",
            }}
          >
            {a.links.map((Icon, idx) => (
              <Icon key={idx} style={{ width: 17, height: 17, color: "var(--rf-clay)" }} strokeWidth={1.6} />
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
