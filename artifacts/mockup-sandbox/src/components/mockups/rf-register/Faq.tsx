import { useEffect, useRef, useState } from "react";
import { CornerDownRight, Plus, Minus } from "lucide-react";
import "./_group.css";

const faqs = [
  {
    category: "Understanding the Revival Fund",
    questions: [
      {
        q: "Is this a venture fund?",
        a: "No. We don't expect financial returns. But we're excited to see revival projects become launchpads for more ambitious work, including ventures with commercial outcomes. If your project becomes a company, we would be interested in following up with an angel check independently through our network."
      },
      {
        q: "What counts as 'revival'?",
        a: "Work engaging with research that has been: abandoned due to funding loss, dismissed by paradigm shifts, published in marginalized languages/contexts, buried in archives, or developed within alternative epistemological frameworks that dominant institutions overlooked."
      },
      {
        q: "What's your position on AI?",
        a: "We're excited about AI's potential to unlock new approaches to knowledge inquiry, especially in processing data at scales and in ways previously inaccessible to humans. We welcome AI use in research revival projects for analysis, translation, pattern recognition, visualization, or any other application that serves rigorous inquiry."
      }
    ]
  },
  {
    category: "Who Can Apply",
    questions: [
      {
        q: "Who can apply?",
        a: "Anyone. Academics, independent researchers, artists, scientists, archivists, translators. We care about the quality of the inquiry and depth of engagement, not your institutional affiliation or credentials."
      },
      {
        q: "Can I apply from outside the United States?",
        a: "Yes. The Revival Fund supports projects globally."
      },
      {
        q: "I'm working on my PhD dissertation. Can I apply?",
        a: "Yes, if your project includes a substantial public-facing artifact we can publish outside the dissertation itself, within the next year."
      },
      {
        q: "How do you evaluate 'relentless intellectual obsession'?",
        a: "We look for evidence of sustained engagement: existing preliminary work, depth of knowledge about the research lineage, clarity about why this particular inquiry compels you."
      }
    ]
  },
  {
    category: "Funding & Timeline",
    questions: [
      {
        q: "When can I apply?",
        a: "Applications open February 19, 2026. We prioritize reviewing proposals submitted by March 18, 2026. Because we're shaping the fund as we go and want to remain open to exceptional projects, the submission form stays open after this date, but we cannot guarantee review of proposals submitted after March 18."
      },
      {
        q: "What's the funding range?",
        a: "Generally $4,000-$10,000, up to $25,000 in special cases."
      },
      {
        q: "How long do projects typically last?",
        a: "We're flexible depending on scope. Once funded, we expect concentrated engagement. Projects are announced when funded and published as they reach milestones or completion. Specify your timeline in the application."
      }
    ]
  },
  {
    category: "Application & Process",
    questions: [
      {
        q: "How does your selection process work?",
        a: "After the application window closes on March 18, we review submissions with our advisory committee and approve projects on a rolling basis—decisions and announcements happen continuously rather than on a single date."
      },
      {
        q: "Can I apply with multiple project ideas?",
        a: "Yes. Submit each project as a separate application so we can evaluate them individually."
      },
      {
        q: "Does the research have to be a specific scientific or technical field?",
        a: "No. The Revival Fund is an experiment in knowledge inquiry in its own right. We're building our advisory committee and guest reviewers network as we go. Apply with projects from any field, regardless of our current team's backgrounds."
      },
      {
        q: "Can projects include creative or fictional elements?",
        a: "Yes. Historiographic fictions, speculative documentaries, and other creative forms are welcome if they're grounded in rigorous engagement with the research being revived."
      },
      {
        q: "What if my project evolves significantly during research?",
        a: "We expect some evolution. Major scope changes require discussion, but we're flexible if the revival mission remains intact."
      }
    ]
  },
  {
    category: "Publication & Beyond",
    questions: [
      {
        q: "Do I retain intellectual property rights?",
        a: "Yes. You retain full IP rights. The Revival Fund receives non-exclusive publication and distribution rights to the funded project artifacts, which we determine together during the editorial process."
      },
      {
        q: "Where will my work be published?",
        a: "On the Revival Fund platform and potentially through partner publications. All work is publicly accessible."
      },
      {
        q: "What happens after publication?",
        a: "We encourage others to build on the work. You retain the ability to develop it further, and we may feature it in compilations or anthologies."
      },
      {
        q: "Can I apply for a second project after completing one?",
        a: "Yes."
      }
    ]
  }
];

function AccordionItem({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="rf-border-b last:border-0 border-[var(--register-line)]">
      <button 
        className="w-full py-6 flex justify-between items-center text-left hover:text-[var(--register-accent)] transition-colors group"
        onClick={onClick}
      >
        <span className="text-xl pr-8">{question}</span>
        <span className="rf-mono text-[var(--register-accent)] flex-shrink-0">
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-[#4a4a4a] text-lg leading-relaxed max-w-3xl pl-4 border-l-2 border-[var(--register-accent)]">
          {answer}
        </p>
      </div>
    </div>
  );
}

export function Faq() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setOpenItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll(".reveal-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="rf-register-theme relative flex flex-col md:flex-row w-full overflow-hidden min-h-screen">
      {/* Left Binder Edge */}
      <div className="hidden md:flex w-16 rf-border-r shrink-0 flex-col items-center py-20 gap-32 relative bg-[#f2efe9] z-10">
        <div className="binder-hole" />
        <div className="binder-hole" />
        <div className="binder-hole" />
        <div className="binder-hole" />
        <div className="binder-hole" />
      </div>

      <div className="flex-1 overflow-y-auto" ref={scrollRef}>
        <div className="max-w-5xl mx-auto px-6 md:px-16 py-8 md:py-12">
          
          {/* Top Nav */}
          <nav className="flex justify-end gap-6 mb-12 rf-mono text-[10px] uppercase tracking-widest text-[var(--register-muted)]">
            <a href="/__mockup/preview/rf-register/Home" className="hover:text-[var(--register-accent)] transition-colors">About</a>
            <a href="/__mockup/preview/rf-register/Projects" className="hover:text-[var(--register-accent)] transition-colors">Projects</a>
            <a href="/__mockup/preview/rf-register/Writings" className="hover:text-[var(--register-accent)] transition-colors">Writings</a>
            <a href="/__mockup/preview/rf-register/Faq" className="text-[var(--register-fg)] border-b border-[var(--register-fg)] pb-1">FAQ</a>
            <a href="/__mockup/preview/rf-register/Team" className="hover:text-[var(--register-accent)] transition-colors">Team</a>
            <a href="/__mockup/preview/rf-register/Apply" className="text-[var(--register-accent)] hover:text-[var(--register-fg)] transition-colors">Apply</a>
          </nav>

          <header className="flex flex-col md:flex-row md:justify-between md:items-end mb-24 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center gap-4 rf-mono text-xs text-[var(--register-muted)] tracking-widest uppercase">
                <span>Vol. IV</span>
                <span className="w-8 rf-border-b" />
                <span>Query Index</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-light tracking-tight text-[var(--register-fg)]">
                Frequently Asked Questions
              </h1>
            </div>
          </header>

          <div className="w-full rf-border-t mb-24 relative">
            <div className="tick-tl" />
            <div className="tick-tr" />
          </div>

          {/* FAQ Sections */}
          <div className="space-y-24 mb-32">
            {faqs.map((section, sIdx) => (
              <section key={section.category} className="reveal-on-scroll">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                  <div className="md:col-span-4">
                    <span className="rf-mono text-xs tracking-widest uppercase text-[var(--register-muted)] block mb-4 border-b border-[var(--register-line)] pb-2">
                      0{sIdx + 1}. {section.category}
                    </span>
                  </div>
                  <div className="md:col-span-8">
                    <div className="rf-border relative bg-white/50">
                      <div className="tick-tl" />
                      <div className="tick-tr" />
                      <div className="tick-bl" />
                      <div className="tick-br" />
                      <div className="px-6 md:px-8">
                        {section.questions.map((q, qIdx) => {
                          const id = `${sIdx}-${qIdx}`;
                          return (
                            <AccordionItem 
                              key={id} 
                              question={q.q} 
                              answer={q.a} 
                              isOpen={!!openItems[id]} 
                              onClick={() => toggleItem(id)} 
                            />
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>

          <section className="mb-32 reveal-on-scroll text-center py-12 rf-border-y rf-mono text-sm tracking-wide text-[var(--register-muted)]">
            If you have more questions, email <a href="mailto:wendi@analoguegroup.org" className="text-[var(--register-accent)] hover:underline">wendi@analoguegroup.org</a>
          </section>

          {/* Footer */}
          <footer className="pt-12 border-t border-[var(--register-line)] reveal-on-scroll">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="col-span-2 md:col-span-1 space-y-4">
                <div className="text-xl font-medium">The Revival Fund</div>
                <div className="rf-mono text-xs text-[var(--register-muted)]">
                  © {new Date().getFullYear()}
                </div>
              </div>
              <div className="space-y-4 flex flex-col">
                <span className="rf-mono text-[10px] tracking-widest uppercase text-[var(--register-muted)] mb-2">Directory</span>
                {['About', 'Projects', 'Writings'].map((item) => (
                  <a key={item} href={`/__mockup/preview/rf-register/${item === 'About' ? 'Home' : item}`} className="text-sm hover:text-[var(--register-accent)] transition-colors w-fit flex items-center gap-2 group">
                    <CornerDownRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                ))}
              </div>
              <div className="space-y-4 flex flex-col">
                <span className="rf-mono text-[10px] tracking-widest uppercase text-[var(--register-muted)] mb-2">Information</span>
                {['FAQ', 'Team', 'Apply'].map((item) => (
                  <a key={item} href={`/__mockup/preview/rf-register/${item}`} className="text-sm hover:text-[var(--register-accent)] transition-colors w-fit flex items-center gap-2 group">
                    <CornerDownRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </footer>

        </div>
      </div>
    </div>
  );
}
