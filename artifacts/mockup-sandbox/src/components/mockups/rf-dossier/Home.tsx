import React, { useEffect } from 'react';
import { Paperclip, ArrowUpRight, FolderOpen, Tag, Fingerprint, CornerRightDown } from 'lucide-react';
import './_group.css';

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
      observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);
}

export function Home() {
  useScrollReveal();

  const getTodayStr = () => {
    const date = new Date();
    return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}`;
  };

  return (
    <div className="dossier-wrapper min-h-screen text-sm sm:text-base selection:bg-accent selection:text-paper">
      
      {/* GLOBAL HEADER / TOP BAR */}
      <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur-sm border-b border-ink/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-2 flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs uppercase tracking-widest font-mono">
          <div className="flex gap-4 sm:gap-8 opacity-70">
            <span>REF: RF-DS-001</span>
            <span className="hidden sm:inline">SUBJECT: DORMANT RESEARCH</span>
            <span>STATUS: ACTIVE</span>
          </div>
          <nav className="flex gap-4 mt-2 sm:mt-0 font-bold overflow-x-auto whitespace-nowrap pb-2 sm:pb-0 w-full sm:w-auto">
            <a href="/__mockup/preview/rf-dossier/Home" className="text-accent transition-colors">About</a>
            <a href="/__mockup/preview/rf-dossier/Projects" className="hover:text-accent transition-colors">Projects</a>
            <a href="/__mockup/preview/rf-dossier/Writings" className="hover:text-accent transition-colors">Writings</a>
            <a href="/__mockup/preview/rf-dossier/Faq" className="hover:text-accent transition-colors">FAQ</a>
            <a href="/__mockup/preview/rf-dossier/Team" className="hover:text-accent transition-colors">Team</a>
            <a href="/__mockup/preview/rf-dossier/Apply" className="hover:text-accent transition-colors">Apply</a>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-8 pt-12 pb-32">
        
        {/* SECTION 1: HERO IDENTITY */}
        <section className="relative pt-16 pb-24 border-b border-ink/20 reveal-on-scroll">
          {/* Reg marks */}
          <div className="reg-mark top-0 left-0 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="reg-mark top-0 right-0 translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="flex justify-between items-start mb-8 text-xs font-mono uppercase opacity-50">
            <div>
              <p>THE REVIVAL FUND</p>
              <p>ARCHIVE DIVISION</p>
            </div>
            <div className="text-right">
              <p>DATE: {getTodayStr()}</p>
              <p>CLEARANCE: UNRESTRICTED</p>
            </div>
          </div>

          <div className="relative z-10">
            <h1 className="font-serif text-6xl sm:text-8xl lg:text-9xl tracking-tighter leading-[0.85] mb-6">
              THE<br/>REVIVAL<br/>FUND
            </h1>
            
            <div className="relative inline-block mt-4">
              <p className="font-mono text-lg sm:text-xl md:text-2xl uppercase tracking-widest max-w-2xl bg-paper inline-block pr-4">
                Funding the revival of dormant science.
              </p>
              {/* Declassified Stamp Overlay */}
              <div className="absolute -top-12 -right-24 sm:-right-48 w-40 sm:w-56 opacity-90 mix-blend-multiply rotate-[-12deg] pointer-events-none">
                <img src="/__mockup/images/stamp-declassified.png" alt="Declassified Stamp" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: THE MANIFESTO (MEMO STYLE) */}
        <section id="about" className="py-20 border-b border-ink/20 grid grid-cols-1 md:grid-cols-12 gap-8 reveal-on-scroll">
          <div className="md:col-span-4 font-mono text-sm uppercase opacity-70">
            <div className="mb-8">
              <p className="mb-2 border-b border-ink/20 pb-1 flex justify-between"><span>TO:</span> <span>INTERESTED PARTIES</span></p>
              <p className="mb-2 border-b border-ink/20 pb-1 flex justify-between"><span>FROM:</span> <span>OFFICE OF THE DIRECTORS</span></p>
              <p className="mb-2 border-b border-ink/20 pb-1 flex justify-between"><span>FILE:</span> <span>MANIFESTO-01</span></p>
            </div>
            <div className="stamp stamp-ink text-xs rotate-2">FOR IMMEDIATE RELEASE</div>
          </div>
          
          <div className="md:col-span-8 font-typewriter text-lg sm:text-xl leading-relaxed">
            <h2 className="font-mono text-2xl uppercase font-bold mb-8 flex items-center gap-4">
              <Fingerprint className="w-6 h-6 text-accent" />
              MEMORANDUM ON DORMANT INQUIRY
            </h2>
            
            <p className="mb-6">
              Science leaves a trail of abandoned threads. Our mandate is simple: to find what was left behind and <span className="redact">bring it back to life</span>.
            </p>
            <p className="mb-6">
              We are searching for the forgotten papers. The <span className="redact">abandoned experiments</span>. The discontinued programs that ran out of funding just as they were getting interesting. The overlooked scientists whose ideas were ahead of their time.
            </p>
            <p className="mb-6">
              The Revival Fund exists to reopen lines of inquiry the world stopped paying attention to. We do not fund incremental research. We fund the exhumation of brilliant, discarded ideas.
              <span className="typewriter-cursor"></span>
            </p>
          </div>
        </section>

        {/* SECTION 3: METHODOLOGY / WHAT WE FUND */}
        <section className="py-20 border-b border-ink/20 reveal-on-scroll">
          <div className="flex items-center gap-4 mb-12">
            <FolderOpen className="w-6 h-6 text-ink opacity-50" />
            <h2 className="font-mono text-sm uppercase tracking-widest">Target Acquisition Criteria</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {[
              { id: "A-01", title: "FORGOTTEN PAPERS", desc: "Theories published in obscure journals, lacking modern peer attention." },
              { id: "A-02", title: "ABANDONED EXPERIMENTS", desc: "Data sets gathered but never analyzed; trials halted prematurely." },
              { id: "A-03", title: "DISCONTINUED PROGRAMS", desc: "Institutional initiatives shut down due to shifting political or financial winds." },
              { id: "A-04", title: "OVERLOOKED SCIENTISTS", desc: "Researchers marginalized by the consensus of their era." }
            ].map((item, idx) => (
              <div key={item.id} className="relative group">
                <div className="font-mono text-xs opacity-50 mb-2 pb-2 border-b border-ink/20">CRITERION {item.id}</div>
                <h3 className="font-serif text-xl mb-3 group-hover:text-accent transition-colors">{item.title}</h3>
                <p className="font-typewriter text-sm opacity-80">{item.desc}</p>
                {/* Decorative checkbox */}
                <div className="absolute top-0 right-0 w-4 h-4 border border-ink/40 flex items-center justify-center">
                  <div className="w-2 h-2 bg-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: THE CASE FILES (FUNDED ENTRIES) */}
        <section id="projects" className="py-20 border-b border-ink/20 reveal-on-scroll relative">
          
          <div className="flex items-center gap-4 mb-16">
            <Tag className="w-6 h-6 text-accent" />
            <h2 className="font-mono text-sm uppercase tracking-widest text-accent font-bold">Active Case Files</h2>
          </div>

          <div className="flex flex-col">
            {/* Entry 1 */}
            <article className="group border-t border-ink/20 flex flex-col md:flex-row hover:bg-black/5 transition-colors cursor-pointer relative overflow-hidden">
              <div className="md:w-48 p-6 border-b md:border-b-0 md:border-r border-ink/20 font-mono text-xs uppercase flex flex-col justify-between">
                <span className="opacity-50">FILE RF-P-01</span>
                <span className="stamp stamp-ink text-[10px] mt-4 self-start">FORTHCOMING</span>
              </div>
              <div className="flex-1 p-6 md:p-10 pr-6 sm:pr-32 relative">
                <Paperclip className="absolute top-4 right-4 w-5 h-5 opacity-40 -rotate-12" />
                <h3 className="font-serif text-3xl sm:text-4xl mb-4 group-hover:text-accent transition-colors">Soviet Arxiv</h3>
                <p className="font-typewriter text-base sm:text-lg max-w-2xl opacity-80">
                  Excavating the unpublished scientific literature of late Soviet research institutions — manuscripts, technical reports, and internal proceedings that never crossed the Iron Curtain.
                </p>
                <div className="mt-4 flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-widest opacity-60">
                  <span>USSR</span><span>·</span><span>Physics</span><span>·</span><span>Mathematics</span><span>·</span><span>Archives</span>
                </div>
              </div>
            </article>

            {/* Entry 2 */}
            <article className="group border-y border-ink/20 flex flex-col md:flex-row hover:bg-black/5 transition-colors cursor-pointer">
              <div className="md:w-48 p-6 border-b md:border-b-0 md:border-r border-ink/20 font-mono text-xs uppercase flex flex-col justify-between">
                <span className="opacity-50">FILE RF-P-02</span>
                <span className="stamp text-[10px] mt-4 self-start rotate-3">FORTHCOMING</span>
              </div>
              <div className="flex-1 p-6 md:p-10 relative">
                <h3 className="font-serif text-3xl sm:text-4xl mb-4 group-hover:text-accent transition-colors">Peter Putnam Papers</h3>
                <p className="font-typewriter text-base sm:text-lg max-w-2xl opacity-80">
                  Processing and interpreting the personal papers of Peter Putnam, whose privately funded research on human perception touched fields that have since fragmented into separate disciplines.
                </p>
                <div className="mt-4 flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-widest opacity-60">
                  <span>Perception</span><span>·</span><span>Cognitive Science</span><span>·</span><span>History</span>
                </div>
              </div>
            </article>
          </div>
          
          <div className="mt-8 text-center">
            <a href="/__mockup/preview/rf-dossier/Projects" className="font-mono text-xs uppercase tracking-widest border-b border-ink/40 hover:border-accent hover:text-accent pb-1 transition-colors inline-flex items-center gap-2 mx-auto">
              View Projects Ledger <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </section>

        {/* SECTION 5: APPLY (REQUEST FOR DECLASSIFICATION) */}
        <section id="apply" className="py-24 reveal-on-scroll">
          <div className="max-w-3xl mx-auto border-2 border-ink p-1 relative bg-paper-dark">
            {/* Inner dashed border */}
            <div className="border border-dashed border-ink/40 p-8 sm:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl"></div>
              
              <div className="text-center mb-10">
                <p className="font-mono text-xs uppercase tracking-widest mb-4 opacity-60">FORM RF-001-A</p>
                <h2 className="font-serif text-4xl sm:text-5xl mb-4">Request for Declassification</h2>
                <p className="font-typewriter text-base opacity-80 max-w-xl mx-auto">
                  Do you know of an abandoned experiment that deserves to be restarted? A forgotten paper that holds the key? Submit your dossier for consideration.
                </p>
              </div>

              <div className="flex justify-center">
                <a href="https://natfwqew5yc.typeform.com/to/tW9UK4yY" target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center font-mono text-sm uppercase tracking-widest font-bold px-8 py-4 bg-ink text-paper hover:bg-accent transition-colors overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    Submit Dossier <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* GLOBAL FOOTER */}
      <footer className="border-t border-ink/20 bg-paper-dark pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <h2 className="font-serif text-2xl mb-4">The Revival Fund</h2>
              <p className="font-mono text-xs opacity-60 max-w-xs">
                Digging dormant science out of the archive and bringing it back to life.
              </p>
            </div>
            
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest mb-4 opacity-50 border-b border-ink/20 pb-2">Index</h3>
              <ul className="font-mono text-sm space-y-2">
                <li><a href="/__mockup/preview/rf-dossier/Home" className="hover:text-accent flex items-center gap-2"><CornerRightDown className="w-3 h-3 opacity-50" /> About</a></li>
                <li><a href="/__mockup/preview/rf-dossier/Projects" className="hover:text-accent flex items-center gap-2"><CornerRightDown className="w-3 h-3 opacity-50" /> Projects</a></li>
                <li><a href="/__mockup/preview/rf-dossier/Writings" className="hover:text-accent flex items-center gap-2"><CornerRightDown className="w-3 h-3 opacity-50" /> Writings</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest mb-4 opacity-50 border-b border-ink/20 pb-2">Operations</h3>
              <ul className="font-mono text-sm space-y-2">
                <li><a href="/__mockup/preview/rf-dossier/Team" className="hover:text-accent flex items-center gap-2"><CornerRightDown className="w-3 h-3 opacity-50" /> Team</a></li>
                <li><a href="/__mockup/preview/rf-dossier/Faq" className="hover:text-accent flex items-center gap-2"><CornerRightDown className="w-3 h-3 opacity-50" /> FAQ</a></li>
                <li><a href="/__mockup/preview/rf-dossier/Apply" className="hover:text-accent flex items-center gap-2"><CornerRightDown className="w-3 h-3 opacity-50" /> Apply</a></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-ink/20 font-mono text-[10px] uppercase opacity-40">
            <p>END OF FILE</p>
            <p>© {new Date().getFullYear()} The Revival Fund</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
