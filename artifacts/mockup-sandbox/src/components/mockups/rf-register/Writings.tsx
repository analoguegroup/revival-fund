import { useEffect, useRef } from "react";
import { ArrowUpRight, CornerDownRight } from "lucide-react";
import "./_group.css";

const writings = [
  {
    ref: "ESSAY-01",
    title: "How Britain Lost Its (Dye) Empire",
    subtitle: "On the slow migration of an industry, and the forces that shaped its unlikely course — from university degrees and patent statutes to chlorine gas at Ypres.",
    author: "Hiya Jain",
    publication: "Mundane Beauty",
    year: "2026"
  },
  {
    ref: "ESSAY-02",
    title: "The Artemisinin Discovery",
    subtitle: "How a forgotten program of wartime research led to one of medicine's most important antimalarials — and what it reveals about the conditions under which dormant science becomes urgent again.",
    author: "Wendi Yan",
    publication: "Asimov Press",
    year: "2024",
    badge: "Named 'Best of Journalism' by The Syllabus"
  }
];

export function Writings() {
  const scrollRef = useRef<HTMLDivElement>(null);

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
            <a href="/__mockup/preview/rf-register/Writings" className="text-[var(--register-fg)] border-b border-[var(--register-fg)] pb-1">Writings</a>
            <a href="/__mockup/preview/rf-register/Faq" className="hover:text-[var(--register-accent)] transition-colors">FAQ</a>
            <a href="/__mockup/preview/rf-register/Team" className="hover:text-[var(--register-accent)] transition-colors">Team</a>
            <a href="/__mockup/preview/rf-register/Apply" className="text-[var(--register-accent)] hover:text-[var(--register-fg)] transition-colors">Apply</a>
          </nav>

          <header className="flex flex-col md:flex-row md:justify-between md:items-end mb-24 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center gap-4 rf-mono text-xs text-[var(--register-muted)] tracking-widest uppercase">
                <span>Vol. III</span>
                <span className="w-8 rf-border-b" />
                <span>Bibliography</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-light tracking-tight text-[var(--register-fg)]">
                Writings
              </h1>
            </div>
          </header>

          <div className="w-full rf-border-t mb-24 relative">
            <div className="tick-tl" />
            <div className="tick-tr" />
          </div>

          {/* Writings List */}
          <section className="mb-32 reveal-on-scroll">
            <div className="mb-12 flex justify-between items-end border-b border-[var(--register-line)] pb-4">
              <span className="rf-mono text-xs tracking-widest uppercase text-[var(--register-muted)]">
                01. Selected Essays
              </span>
              <span className="rf-mono text-xs text-[var(--register-accent)]">Chronological</span>
            </div>

            <div className="rf-border relative">
              <div className="tick-tl" />
              <div className="tick-tr" />
              <div className="tick-bl" />
              <div className="tick-br" />

              <div className="flex flex-col">
                {writings.map((writing, idx) => (
                  <div 
                    key={writing.ref} 
                    className={`group relative grid grid-cols-1 md:grid-cols-12 gap-6 p-8 md:p-12 hover:bg-[#eae6de] transition-colors cursor-pointer ${
                      idx !== writings.length - 1 ? 'rf-border-b' : ''
                    }`}
                  >
                    <div className="md:col-span-3 space-y-4">
                      <div className="rf-mono text-xs text-[var(--register-accent)]">
                        {writing.ref}
                      </div>
                      <div className="space-y-1">
                        <div className="rf-mono text-[10px] uppercase tracking-widest text-[var(--register-muted)]">Author</div>
                        <div className="text-sm font-medium">{writing.author}</div>
                      </div>
                      <div className="space-y-1">
                        <div className="rf-mono text-[10px] uppercase tracking-widest text-[var(--register-muted)]">Publication</div>
                        <div className="text-sm italic">{writing.publication}, {writing.year}</div>
                      </div>
                    </div>

                    <div className="md:col-span-8 flex flex-col justify-center space-y-4 md:pl-8 border-t md:border-t-0 md:border-l border-[var(--register-line)] pt-6 md:pt-0">
                      <h2 className="text-2xl md:text-3xl font-normal leading-tight group-hover:text-[var(--register-accent)] transition-colors">{writing.title}</h2>
                      <p className="text-lg text-[#4a4a4a] leading-relaxed">
                        {writing.subtitle}
                      </p>
                      {writing.badge && (
                        <div className="inline-block mt-4 w-fit px-3 py-1 border border-[var(--register-line)] bg-white rf-mono text-[10px] uppercase tracking-wider text-[var(--register-accent)]">
                          ★ {writing.badge}
                        </div>
                      )}
                    </div>
                    
                    <div className="md:col-span-1 flex items-start justify-end">
                      <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-[var(--register-accent)]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
