import { useEffect, useRef } from "react";
import { ArrowUpRight, ArrowRight, CornerDownRight } from "lucide-react";
import "./_group.css";

const projects = [
  {
    ref: "REF-01A",
    title: "Soviet Arxiv",
    tags: ["USSR", "Physics", "Mathematics", "Archives"],
    desc: "Excavating the unpublished scientific literature of late Soviet research institutions — manuscripts, technical reports, and internal proceedings that never crossed the Iron Curtain.",
  },
  {
    ref: "REF-02B",
    title: "Peter Putnam Papers",
    tags: ["Perception", "Cognitive Science", "History"],
    desc: "Processing and interpreting the personal papers of Peter Putnam, whose privately funded research on human perception touched fields that have since fragmented into separate disciplines.",
  }
];

export function Projects() {
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

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto" ref={scrollRef}>
        <div className="max-w-5xl mx-auto px-6 md:px-16 py-8 md:py-12">
          
          {/* Top Nav */}
          <nav className="flex justify-end gap-6 mb-12 rf-mono text-[10px] uppercase tracking-widest text-[var(--register-muted)]">
            <a href="/__mockup/preview/rf-register/Home" className="hover:text-[var(--register-accent)] transition-colors">About</a>
            <a href="/__mockup/preview/rf-register/Projects" className="text-[var(--register-fg)] border-b border-[var(--register-fg)] pb-1">Projects</a>
            <a href="/__mockup/preview/rf-register/Writings" className="hover:text-[var(--register-accent)] transition-colors">Writings</a>
            <a href="/__mockup/preview/rf-register/Faq" className="hover:text-[var(--register-accent)] transition-colors">FAQ</a>
            <a href="/__mockup/preview/rf-register/Team" className="hover:text-[var(--register-accent)] transition-colors">Team</a>
            <a href="/__mockup/preview/rf-register/Apply" className="text-[var(--register-accent)] hover:text-[var(--register-fg)] transition-colors">Apply</a>
          </nav>

          {/* Header */}
          <header className="flex flex-col md:flex-row md:justify-between md:items-end mb-24 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center gap-4 rf-mono text-xs text-[var(--register-muted)] tracking-widest uppercase">
                <span>Vol. II</span>
                <span className="w-8 rf-border-b" />
                <span>Accession Catalogue</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-light tracking-tight text-[var(--register-fg)]">
                Projects
              </h1>
            </div>
          </header>

          <div className="w-full rf-border-t mb-24 relative">
            <div className="tick-tl" />
            <div className="tick-tr" />
          </div>

          {/* Projects List */}
          <section className="mb-32 reveal-on-scroll">
            <div className="mb-12 flex justify-between items-end border-b border-[var(--register-line)] pb-4">
              <span className="rf-mono text-xs tracking-widest uppercase text-[var(--register-muted)]">
                01. Section Index
              </span>
              <span className="rf-mono text-xs text-[var(--register-accent)]">Forthcoming</span>
            </div>

            <div className="rf-border relative">
              <div className="tick-tl" />
              <div className="tick-tr" />
              <div className="tick-bl" />
              <div className="tick-br" />

              <div className="flex flex-col">
                {projects.map((project, idx) => (
                  <div 
                    key={project.ref} 
                    className={`group relative flex flex-col md:flex-row gap-6 p-8 md:p-12 hover:bg-[#eae6de] transition-colors cursor-pointer ${
                      idx !== projects.length - 1 ? 'rf-border-b' : ''
                    }`}
                  >
                    <div className="w-32 rf-mono text-sm text-[var(--register-accent)] flex-shrink-0">
                      {project.ref}
                    </div>
                    <div className="flex-1 space-y-6">
                      <div className="flex justify-between items-start">
                        <h2 className="text-3xl font-normal leading-tight">{project.title}</h2>
                        <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-[var(--register-accent)] hidden md:block" />
                      </div>
                      <p className="text-lg text-[#4a4a4a] leading-relaxed max-w-2xl">
                        {project.desc}
                      </p>
                      <div className="flex flex-wrap gap-3 pt-4">
                        {project.tags.map(tag => (
                          <span key={tag} className="px-3 py-1 border border-[var(--register-line)] rf-mono text-[10px] uppercase tracking-wider text-[var(--register-muted)] bg-white group-hover:border-[var(--register-muted)] transition-colors">
                            {tag}
                          </span>
                        ))}
                      </div>
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
