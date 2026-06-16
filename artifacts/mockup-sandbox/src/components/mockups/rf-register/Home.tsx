import React, { useEffect, useRef } from "react";
import { ArrowUpRight, ArrowRight, CornerDownRight } from "lucide-react";
import "./_group.css";

const entries = [
  {
    ref: "REF-01A",
    title: "Soviet Arxiv",
    field: "USSR · Physics · Mathematics · Archives",
    status: "Forthcoming",
    desc: "Excavating the unpublished scientific literature of late Soviet research institutions — manuscripts, technical reports, and internal proceedings that never crossed the Iron Curtain.",
  },
  {
    ref: "REF-02B",
    title: "Peter Putnam Papers",
    field: "Perception · Cognitive Science · History",
    status: "Forthcoming",
    desc: "Processing and interpreting the personal papers of Peter Putnam, whose privately funded research on human perception touched fields that have since fragmented into separate disciplines.",
  },
];

export function Home() {
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
    <div className="rf-register-theme relative flex flex-col md:flex-row w-full overflow-hidden">
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
            <a href="/__mockup/preview/rf-register/Home" className="text-[var(--register-fg)] border-b border-[var(--register-fg)] pb-1">About</a>
            <a href="/__mockup/preview/rf-register/Projects" className="hover:text-[var(--register-accent)] transition-colors">Projects</a>
            <a href="/__mockup/preview/rf-register/Writings" className="hover:text-[var(--register-accent)] transition-colors">Writings</a>
            <a href="/__mockup/preview/rf-register/Faq" className="hover:text-[var(--register-accent)] transition-colors">FAQ</a>
            <a href="/__mockup/preview/rf-register/Team" className="hover:text-[var(--register-accent)] transition-colors">Team</a>
            <a href="/__mockup/preview/rf-register/Apply" className="text-[var(--register-accent)] hover:text-[var(--register-fg)] transition-colors">Apply</a>
          </nav>

          {/* Header */}
          <header className="flex flex-col md:flex-row md:justify-between md:items-end mb-24 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center gap-4 rf-mono text-xs text-[var(--register-muted)] tracking-widest uppercase">
                <span>Vol. I</span>
                <span className="w-8 rf-border-b" />
                <span>Accession Register</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-light tracking-tight text-[var(--register-fg)]">
                The Revival Fund
              </h1>
            </div>
            <div className="mt-8 md:mt-0 rf-mono text-sm tracking-wide text-[var(--register-accent)]">
              [ EST. 2024 ]
            </div>
          </header>

          <div className="w-full rf-border-t mb-24 relative">
            <div className="tick-tl" />
            <div className="tick-tr" />
          </div>

          {/* Manifesto / Mission */}
          <section className="mb-32 reveal-on-scroll">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              <div className="md:col-span-3">
                <span className="rf-mono text-xs tracking-widest uppercase text-[var(--register-muted)] block mb-4 border-b border-[var(--register-line)] pb-2">
                  01. Declaration
                </span>
              </div>
              <div className="md:col-span-9 space-y-8">
                <p className="text-2xl md:text-4xl leading-snug font-normal text-[var(--register-fg)]">
                  We exist to reopen lines of inquiry the world stopped paying attention to.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg text-[#4a4a4a] leading-relaxed">
                  <p>
                    Science is a graveyard of abandoned ideas. Not because they were wrong, but because they ran out of funding, their champions passed away, or the paradigm shifted before the work could be completed.
                  </p>
                  <p>
                    We fund the revival of dormant science. Forgotten papers, abandoned experiments, discontinued programs, and overlooked scientists whose ideas were ahead of their time. We dig them back out of the archive and bring them back to life.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="w-full rf-border-t mb-32 relative"></div>

          {/* Methodology */}
          <section className="mb-32 reveal-on-scroll">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              <div className="md:col-span-3">
                <span className="rf-mono text-xs tracking-widest uppercase text-[var(--register-muted)] block mb-4 border-b border-[var(--register-line)] pb-2">
                  02. Methodology
                </span>
              </div>
              <div className="md:col-span-9">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-12">
                  <div className="space-y-4">
                    <div className="rf-mono text-xs text-[var(--register-accent)]">M-1</div>
                    <h3 className="text-xl">Identification</h3>
                    <p className="text-sm text-[#4a4a4a] leading-relaxed">Scouring institutional archives, footnotes, and discontinued grants for high-potential abandoned hypotheses.</p>
                  </div>
                  <div className="space-y-4">
                    <div className="rf-mono text-xs text-[var(--register-accent)]">M-2</div>
                    <h3 className="text-xl">Validation</h3>
                    <p className="text-sm text-[#4a4a4a] leading-relaxed">Rigorous peer assessment of the theoretical soundness and contemporary relevance of the dormant work.</p>
                  </div>
                  <div className="space-y-4">
                    <div className="rf-mono text-xs text-[var(--register-accent)]">M-3</div>
                    <h3 className="text-xl">Resuscitation</h3>
                    <p className="text-sm text-[#4a4a4a] leading-relaxed">Providing capital, lab space, and computational resources to restart the program.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Index (Entries) */}
          <section className="mb-32 reveal-on-scroll">
            <div className="mb-12 flex justify-between items-end border-b border-[var(--register-line)] pb-4">
              <span className="rf-mono text-xs tracking-widest uppercase text-[var(--register-muted)]">
                03. Accession Index
              </span>
              <span className="rf-mono text-xs text-[var(--register-accent)]">Current Active Grants</span>
            </div>

            <div className="rf-border relative">
              <div className="tick-tl" />
              <div className="tick-tr" />
              <div className="tick-bl" />
              <div className="tick-br" />

              {/* Table Header */}
              <div className="hidden md:grid grid-cols-12 gap-4 p-4 rf-border-b rf-mono text-[10px] uppercase tracking-widest text-[var(--register-muted)] bg-[var(--register-accent-faded)]">
                <div className="col-span-2">Cat. Ref</div>
                <div className="col-span-4">Subject Title</div>
                <div className="col-span-4">Field</div>
                <div className="col-span-2">Status</div>
              </div>

              {/* Table Rows */}
              <div className="flex flex-col">
                {entries.map((entry, idx) => (
                  <div 
                    key={entry.ref} 
                    className={`group relative grid grid-cols-1 md:grid-cols-12 gap-4 p-6 md:p-4 hover:bg-[#eae6de] transition-colors cursor-pointer ${
                      idx !== entries.length - 1 ? 'rf-border-b' : ''
                    }`}
                  >
                    <div className="md:col-span-2 rf-mono text-xs text-[var(--register-accent)] flex items-center">
                      {entry.ref}
                    </div>
                    <div className="md:col-span-4 flex flex-col justify-center">
                      <span className="text-lg md:text-base font-medium">{entry.title}</span>
                      <span className="md:hidden rf-mono text-[10px] text-[var(--register-muted)] mt-2">
                        {entry.field}
                      </span>
                      <p className="text-sm text-[#5a5a5a] mt-2 group-hover:text-[var(--register-fg)] transition-colors md:pr-4">
                        {entry.desc}
                      </p>
                    </div>
                    <div className="hidden md:flex md:col-span-4 items-center rf-mono text-xs text-[#4a4a4a]">
                      {entry.field}
                    </div>
                    <div className="md:col-span-2 flex items-center mt-4 md:mt-0">
                      <span className="inline-flex items-center px-2 py-1 border border-[var(--register-line)] rf-mono text-[10px] uppercase tracking-wider bg-white">
                        {entry.status}
                      </span>
                      <ArrowUpRight className="ml-auto w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[var(--register-accent)]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Apply */}
          <section className="mb-32 reveal-on-scroll">
            <div className="rf-border relative p-12 md:p-20 text-center bg-[#f2efe9] overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--register-fg) 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
              <div className="tick-tl" />
              <div className="tick-tr" />
              <div className="tick-bl" />
              <div className="tick-br" />

              <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                <div className="rf-mono text-sm tracking-widest uppercase text-[var(--register-accent)]">
                  Submission Portal
                </div>
                <h2 className="text-4xl md:text-5xl font-light">
                  Submit a Dormant Hypothesis
                </h2>
                <p className="text-lg text-[#4a4a4a]">
                  If you are a researcher, scientist, or entrepreneur who wants to dig something important back out of the archive and bring it back to life, we want to hear from you.
                </p>
                <div className="pt-8">
                  <a href="https://natfwqew5yc.typeform.com/to/tW9UK4yY" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 bg-[var(--register-fg)] text-[var(--register-bg)] px-8 py-4 hover:bg-[var(--register-accent)] transition-colors group">
                    <span className="rf-mono text-sm tracking-widest uppercase">Begin Application</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Footer / Nav */}
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