import { useEffect } from 'react';
import { Paperclip, ArrowUpRight, FolderOpen, Tag, Fingerprint, CornerRightDown, FileText, Activity } from 'lucide-react';
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

export function Projects() {
  useScrollReveal();

  const getTodayStr = () => {
    const date = new Date();
    return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}`;
  };

  return (
    <div className="dossier-wrapper min-h-screen text-sm sm:text-base selection:bg-accent selection:text-paper">
      
      <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur-sm border-b border-ink/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-2 flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs uppercase tracking-widest font-mono">
          <div className="flex gap-4 sm:gap-8 opacity-70">
            <span>REF: RF-DS-002</span>
            <span className="hidden sm:inline">SUBJECT: PROJECTS LEDGER</span>
            <span>STATUS: ACTIVE</span>
          </div>
          <nav className="flex gap-4 mt-2 sm:mt-0 font-bold overflow-x-auto whitespace-nowrap pb-2 sm:pb-0 w-full sm:w-auto">
            <a href="/__mockup/preview/rf-dossier/Home" className="hover:text-accent transition-colors">About</a>
            <a href="/__mockup/preview/rf-dossier/Projects" className="text-accent transition-colors">Projects</a>
            <a href="/__mockup/preview/rf-dossier/Writings" className="hover:text-accent transition-colors">Writings</a>
            <a href="/__mockup/preview/rf-dossier/Faq" className="hover:text-accent transition-colors">FAQ</a>
            <a href="/__mockup/preview/rf-dossier/Team" className="hover:text-accent transition-colors">Team</a>
            <a href="/__mockup/preview/rf-dossier/Apply" className="hover:text-accent transition-colors">Apply</a>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-8 pt-12 pb-32">
        <section className="relative pt-16 pb-24 border-b border-ink/20 reveal-on-scroll">
          <div className="reg-mark top-0 left-0 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="reg-mark top-0 right-0 translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="flex justify-between items-start mb-8 text-xs font-mono uppercase opacity-50">
            <div>
              <p>THE REVIVAL FUND</p>
              <p>PROJECTS LEDGER</p>
            </div>
            <div className="text-right">
              <p>DATE: {getTodayStr()}</p>
              <p>CLEARANCE: UNRESTRICTED</p>
            </div>
          </div>

          <div className="relative z-10">
            <h1 className="font-serif text-6xl sm:text-8xl lg:text-9xl tracking-tighter leading-[0.85] mb-6">
              PROJECTS
            </h1>
            <p className="font-mono text-lg uppercase tracking-widest max-w-2xl bg-paper inline-block pr-4">
              Forthcoming Research
            </p>
          </div>
        </section>

        <section className="py-20 reveal-on-scroll">
          <div className="flex flex-col">
            {/* Entry 1 */}
            <article className="group border-t border-ink/20 flex flex-col md:flex-row hover:bg-black/5 transition-colors">
              <div className="md:w-64 p-6 border-b md:border-b-0 md:border-r border-ink/20 font-mono text-xs uppercase flex flex-col justify-between">
                <span className="opacity-50">REF: P-001</span>
                <div>
                  <div className="mb-2 opacity-60">TAGS:</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="border border-ink/30 px-2 py-1">USSR</span>
                    <span className="border border-ink/30 px-2 py-1">Physics</span>
                    <span className="border border-ink/30 px-2 py-1">Mathematics</span>
                    <span className="border border-ink/30 px-2 py-1">Archives</span>
                  </div>
                </div>
                <span className="stamp stamp-ink text-[10px] mt-6 self-start rotate-2">FORTHCOMING</span>
              </div>
              <div className="flex-1 p-6 md:p-10 relative">
                <h3 className="font-serif text-3xl sm:text-4xl mb-4 group-hover:text-accent transition-colors">Soviet Arxiv</h3>
                <p className="font-typewriter text-base sm:text-lg max-w-3xl opacity-80 leading-relaxed">
                  Excavating the unpublished scientific literature of late Soviet research institutions — manuscripts, technical reports, and internal proceedings that never crossed the Iron Curtain.
                </p>
              </div>
            </article>

            {/* Entry 2 */}
            <article className="group border-t border-b border-ink/20 flex flex-col md:flex-row hover:bg-black/5 transition-colors">
              <div className="md:w-64 p-6 border-b md:border-b-0 md:border-r border-ink/20 font-mono text-xs uppercase flex flex-col justify-between">
                <span className="opacity-50">REF: P-002</span>
                <div>
                  <div className="mb-2 opacity-60">TAGS:</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="border border-ink/30 px-2 py-1">Perception</span>
                    <span className="border border-ink/30 px-2 py-1">Cognitive Science</span>
                    <span className="border border-ink/30 px-2 py-1">History</span>
                  </div>
                </div>
                <span className="stamp stamp-ink text-[10px] mt-6 self-start -rotate-1">FORTHCOMING</span>
              </div>
              <div className="flex-1 p-6 md:p-10 relative">
                <Paperclip className="absolute top-4 right-4 w-5 h-5 opacity-40 rotate-12" />
                <h3 className="font-serif text-3xl sm:text-4xl mb-4 group-hover:text-accent transition-colors">Peter Putnam Papers</h3>
                <p className="font-typewriter text-base sm:text-lg max-w-3xl opacity-80 leading-relaxed">
                  Processing and interpreting the personal papers of Peter Putnam, whose privately funded research on human perception touched fields that have since fragmented into separate disciplines.
                </p>
              </div>
            </article>
          </div>
        </section>

      </main>

      <footer className="border-t border-ink/20 bg-paper-dark pt-16 pb-8 mt-auto">
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
                <li><a href="/__mockup/preview/rf-dossier/Projects" className="text-accent flex items-center gap-2"><CornerRightDown className="w-3 h-3 opacity-50" /> Projects</a></li>
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
