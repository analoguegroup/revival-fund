import { useEffect, useRef } from "react";
import { ArrowRight, CornerDownRight, ExternalLink } from "lucide-react";
import "./_group.css";

export function Apply() {
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
        <div className="max-w-5xl mx-auto px-6 md:px-16 py-8 md:py-12 flex flex-col min-h-full">
          
          {/* Top Nav */}
          <nav className="flex justify-end gap-6 mb-12 rf-mono text-[10px] uppercase tracking-widest text-[var(--register-muted)]">
            <a href="/__mockup/preview/rf-register/Home" className="hover:text-[var(--register-accent)] transition-colors">About</a>
            <a href="/__mockup/preview/rf-register/Projects" className="hover:text-[var(--register-accent)] transition-colors">Projects</a>
            <a href="/__mockup/preview/rf-register/Writings" className="hover:text-[var(--register-accent)] transition-colors">Writings</a>
            <a href="/__mockup/preview/rf-register/Faq" className="hover:text-[var(--register-accent)] transition-colors">FAQ</a>
            <a href="/__mockup/preview/rf-register/Team" className="hover:text-[var(--register-accent)] transition-colors">Team</a>
            <a href="/__mockup/preview/rf-register/Apply" className="text-[var(--register-fg)] border-b border-[var(--register-fg)] pb-1">Apply</a>
          </nav>

          <header className="flex flex-col md:flex-row md:justify-between md:items-end mb-24 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center gap-4 rf-mono text-xs text-[var(--register-muted)] tracking-widest uppercase">
                <span>Vol. VI</span>
                <span className="w-8 rf-border-b" />
                <span>Intake Form</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-light tracking-tight text-[var(--register-fg)]">
                Apply
              </h1>
            </div>
          </header>

          <div className="w-full rf-border-t mb-12 md:mb-24 relative">
            <div className="tick-tl" />
            <div className="tick-tr" />
          </div>

          <div className="flex-1 flex items-center justify-center mb-32 reveal-on-scroll">
            <div className="w-full max-w-3xl rf-border relative bg-white/60 p-8 md:p-16">
              <div className="tick-tl" />
              <div className="tick-tr" />
              <div className="tick-bl" />
              <div className="tick-br" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="space-y-2">
                    <div className="rf-mono text-[10px] uppercase tracking-widest text-[var(--register-accent)]">Who can apply</div>
                    <div className="text-lg">Anyone — academics, independent researchers, artists, scientists, archivists, translators.</div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="rf-mono text-[10px] uppercase tracking-widest text-[var(--register-accent)]">Funding Range</div>
                    <div className="text-lg">$4,000–$10,000<br/><span className="text-sm text-[#4a4a4a]">(Up to $25,000 in special cases)</span></div>
                  </div>

                  <div className="space-y-2">
                    <div className="rf-mono text-[10px] uppercase tracking-widest text-[var(--register-accent)]">Timeline</div>
                    <div className="text-base text-[#4a4a4a] leading-relaxed">
                      Applications open February 19, 2026.<br/>
                      Priority review by March 18, 2026.
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center text-center space-y-6 md:border-l border-[var(--register-line)] md:pl-12">
                  <div className="rf-mono text-sm tracking-widest uppercase text-[var(--register-muted)]">
                    Submission Portal
                  </div>
                  <a href="https://natfwqew5yc.typeform.com/to/tW9UK4yY" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-4 bg-[var(--register-accent)] text-white px-8 py-5 hover:bg-[var(--register-fg)] transition-colors group">
                    <span className="rf-mono text-sm tracking-widest uppercase">Begin Application</span>
                    <ExternalLink className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <p className="text-xs text-[var(--register-muted)] rf-mono">
                    Opens external Typeform
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Footer */}
          <footer className="pt-12 border-t border-[var(--register-line)] reveal-on-scroll mt-auto">
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
