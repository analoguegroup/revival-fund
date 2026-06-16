import { useState } from "react";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

const INK = "#1C1B1A";
const ACCENT = "#0c3981";
const HAIRLINE = "#E2DFD8";
const BODY = "rgba(28, 27, 26, 0.82)";
const MONO = "'Space Mono', monospace";
const SERIF = "'PT Serif', serif";

type FAQCategory = {
  label: string;
  items: Array<{ question: string; answer: string }>;
};

const faqCategories: FAQCategory[] = [
  {
    label: "Understanding the Revival Fund",
    items: [
      {
        question: "Is this a venture fund?",
        answer: "No. We don't expect financial returns. But we're excited to see revival projects become launchpads for more ambitious work, including ventures with commercial outcomes. If your project becomes a company, we would be interested in following up with an angel check independently through our network."
      },
      {
        question: 'What counts as "revival"?',
        answer: "Work engaging with research that has been: abandoned due to funding loss, dismissed by paradigm shifts, published in marginalized languages/contexts, buried in archives, or developed within alternative epistemological frameworks that dominant institutions overlooked."
      },
      {
        question: "What's your position on AI?",
        answer: "We're excited about AI's potential to unlock new approaches to knowledge inquiry, especially in processing data at scales and in ways previously inaccessible to humans. We welcome AI use in research revival projects for analysis, translation, pattern recognition, visualization, or any other application that serves rigorous inquiry."
      },
    ],
  },
  {
    label: "Who Can Apply",
    items: [
      {
        question: "Who can apply?",
        answer: "Anyone. Academics, independent researchers, artists, scientists, archivists, translators. We care about the quality of the inquiry and depth of engagement, not your institutional affiliation or credentials."
      },
      {
        question: "Can I apply from outside the United States?",
        answer: "Yes. The Revival Fund supports projects globally."
      },
      {
        question: "I'm working on my PhD dissertation. Can I apply?",
        answer: "Yes, if your project includes a substantial public-facing artifact we can publish outside the dissertation itself, within the next year."
      },
      {
        question: 'How do you evaluate "relentless intellectual obsession"?',
        answer: "We look for evidence of sustained engagement: existing preliminary work, depth of knowledge about the research lineage, clarity about why this particular inquiry compels you."
      },
    ],
  },
  {
    label: "Funding & Timeline",
    items: [
      {
        question: "When can I apply?",
        answer: "Applications open February 19, 2026. We prioritize reviewing proposals submitted by March 18, 2026. Because we're shaping the fund as we go and want to remain open to exceptional projects, the submission form stays open after this date, but we cannot guarantee review of proposals submitted after March 18."
      },
      {
        question: "What's the funding range?",
        answer: "Generally $4,000-$10,000, up to $25,000 in special cases."
      },
      {
        question: "How long do projects typically last?",
        answer: "We're flexible depending on scope. Once funded, we expect concentrated engagement. Projects are announced when funded and published as they reach milestones or completion. Specify your timeline in the application."
      },
    ],
  },
  {
    label: "Application & Process",
    items: [
      {
        question: "How does your selection process work?",
        answer: "After the application window closes on March 18, we review submissions with our advisory committee and approve projects on a rolling basis\u2014decisions and announcements happen continuously rather than on a single date."
      },
      {
        question: "Can I apply with multiple project ideas?",
        answer: "Yes. Submit each project as a separate application so we can evaluate them individually."
      },
      {
        question: "Does the research have to be a specific scientific or technical field?",
        answer: "No. The Revival Fund is an experiment in knowledge inquiry in its own right. We're building our advisory committee and guest reviewers network as we go. Apply with projects from any field, regardless of our current team's backgrounds."
      },
      {
        question: "Can projects include creative or fictional elements?",
        answer: "Yes. Historiographic fictions, speculative documentaries, and other creative forms are welcome if they're grounded in rigorous engagement with the research being revived."
      },
      {
        question: "What if my project evolves significantly during research?",
        answer: "We expect some evolution. Major scope changes require discussion, but we're flexible if the revival mission remains intact."
      },
    ],
  },
  {
    label: "Publication & Beyond",
    items: [
      {
        question: "Do I retain intellectual property rights?",
        answer: "Yes. You retain full IP rights. The Revival Fund receives non-exclusive publication and distribution rights to the funded project artifacts, which we determine together during the editorial process."
      },
      {
        question: "Where will my work be published?",
        answer: "On the Revival Fund platform and potentially through partner publications. All work is publicly accessible."
      },
      {
        question: "What happens after publication?",
        answer: "We encourage others to build on the work. You retain the ability to develop it further, and we may feature it in compilations or anthologies."
      },
      {
        question: "Can I apply for a second project after completing one?",
        answer: "Yes."
      },
    ],
  },
];

export function FAQContent() {
  const [openIndices, setOpenIndices] = useState<Set<string>>(new Set());

  const toggleFaq = (key: string) => {
    setOpenIndices((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  return (
    <>

        <div className="pt-[max(18vh,150px)] sm:pt-[max(22vh,180px)] pb-[10vh]" style={{ borderBottom: `1px solid ${HAIRLINE}` }}>
          <h1 className="mb-4 sm:mb-8 text-[44px] sm:text-[clamp(1.75rem,8vw,60px)]" data-testid="text-faq-title">
            FrequentLy Asked Questions
          </h1>
        </div>

        {faqCategories.map((category) => (
          <Reveal key={category.label}>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_3fr] gap-6 md:gap-8 mb-24 sm:mb-32">
              <div className="pt-4" style={{ borderTop: `1px solid ${HAIRLINE}` }}>
                <h2
                  className="tb-cap text-[0.8125rem] uppercase tracking-[0.2em] font-normal"
                  style={{ fontFamily: MONO, color: INK }}
                  data-testid={`label-faq-${category.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {category.label}
                </h2>
              </div>

              <div className="pt-4" style={{ borderTop: `1px solid ${HAIRLINE}` }}>
                {category.items.map((faq, index) => {
                  const key = `${category.label}-${index}`;
                  const isOpen = openIndices.has(key);
                  return (
                    <div
                      key={key}
                      style={{ borderBottom: `1px solid ${HAIRLINE}` }}
                      className="faq-question-row"
                    >
                      <button
                        type="button"
                        className={`w-full text-left ${index === 0 ? "pb-5 sm:pb-6" : "py-5 sm:py-6"} cursor-pointer transition-opacity duration-300 hover:opacity-60`}
                        onClick={() => toggleFaq(key)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${key}`}
                        data-testid={`button-faq-${category.label.toLowerCase().replace(/\s+/g, '-')}-${index}`}
                        style={{ color: isOpen ? ACCENT : INK }}
                      >
                        <span
                          className="text-[1.0625rem] sm:text-[1.25rem] leading-snug"
                          style={{ fontFamily: SERIF }}
                        >
                          {faq.question}
                        </span>
                      </button>
                      <div
                        id={`faq-answer-${key}`}
                        className="overflow-hidden transition-all duration-500 ease-out"
                        style={{ maxHeight: isOpen ? "600px" : "0" }}
                      >
                        <p
                          className="tb-cap text-[1rem] sm:text-[1.0625rem] leading-relaxed max-w-[60ch] pb-6 sm:pb-7"
                          style={{
                            color: BODY,
                            opacity: isOpen ? 1 : 0,
                            transform: isOpen ? "translateY(0)" : "translateY(10px)",
                            transition:
                              "opacity 0.45s ease-out, transform 0.45s ease-out",
                            transitionDelay: isOpen ? "0.12s" : "0s",
                          }}
                          data-testid={`text-faq-answer-${category.label.toLowerCase().replace(/\s+/g, '-')}-${index}`}
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        ))}

        <Reveal className="py-12 sm:py-16">
          <p className="tb-cap text-[1.0625rem] sm:text-[1.125rem] leading-relaxed" style={{ color: BODY }}>
            If you have more questions, email{" "}
            <a
              href="mailto:wendi@analoguegroup.org"
              className="no-underline body-link"
            >
              wendi@analoguegroup.org
            </a>
          </p>
        </Reveal>
    </>
  );
}

export default function FAQ() {
  return (
    <div className="min-h-screen bg-background" style={{ color: INK, fontFamily: SERIF }}>
      <div className="relative z-[2]" style={{ padding: "0 var(--gutter)" }}>
        <FAQContent />
      </div>
      <Footer />
    </div>
  );
}
