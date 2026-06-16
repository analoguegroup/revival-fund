import { useEffect } from 'react';
import { Paperclip, ArrowUpRight, FolderOpen, Tag, Fingerprint, CornerRightDown, FileText } from 'lucide-react';
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

export function Writings() {
  useScrollReveal();

  const getTodayStr = () => {
    const date = new Date();
    return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}`;
  };

  return (
    <div className="dossier-wrapper min-h-screen flex flex-col text-sm sm:text-base selection:bg-accent selection:text-paper">
      
      <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur-sm border-b border-ink/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-2 flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs uppercase tracking-widest font-mono">
          <div className="flex gap-4 sm:gap-8 opacity-70">
            <span>REF: RF-DS-003</span>
            <span className="hidden sm:inline">SUBJECT: WRITINGS INDEX</span>
            <span>STATUS: ACTIVE</span>
          </div>
          <nav className="flex gap-4 mt-2 sm:mt-0 font-bold overflow-x-auto whitespace-nowrap pb-2 sm:pb-0 w-full sm:w-auto">
            <a href="/__mockup/preview/rf-dossier/Home" className="hover:text-accent transition-colors">About</a>
            <a href="/__mockup/preview/rf-dossier/Projects" className="hover:text-accent transition-colors">Projects</a>
            <a href="/__mockup/preview/rf-dossier/Writings" className="text-accent transition-colors">Writings</a>
            <a href="/__mockup/preview/rf-dossier/Faq" className="hover:text-accent transition-colors">FAQ</a>
            <a href="/__mockup/preview/rf-dossier/Team" className="hover:text-accent transition-colors">Team</a>
            <a href="/__mockup/preview/rf-dossier/Apply" className="hover:text-accent transition-colors">Apply</a>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl w-full mx-auto px-4 sm:px-8 pt-12 pb-32 flex-1">
        <section className="relative pt-16 pb-24 border-b border-ink/20 reveal-on-scroll">
          <div className="reg-mark top-0 left-0 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="reg-mark top-0 right-0 translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="flex justify-between items-start mb-8 text-xs font-mono uppercase opacity-50">
            <div>
              <p>THE REVIVAL FUND</p>
              <p>INDEX DIVISION</p>
            </div>
            <div className="text-right">
              <p>DATE: {getTodayStr()}</p>
              <p>CLEARANCE: UNRESTRICTED</p>
            </div>
          </div>

          <div className="relative z-10">
            <h1 className="font-serif text-6xl sm:text-8xl lg:text-9xl tracking-tighter leading-[0.85] mb-6">
              WRITINGS
            </h1>
            <p className="font-mono text-lg uppercase tracking-widest max-w-2xl bg-paper inline-block pr-4">
              Essays, Reports, and Analyses
            </p>
          </div>
        </section>

        <section className="py-20 reveal-on-scroll">
          <div className="flex flex-col gap-12">
            {/* Writing 1 */}
            <article className="group grid grid-cols-1 md:grid-cols-12 gap-8 hover:bg-black/5 p-8 -mx-8 transition-colors cursor-pointer border border-transparent hover:border-ink/10">
              <div className="md:col-span-3 font-mono text-xs uppercase flex flex-col justify-between">
                <div>
                  <p className="opacity-50 mb-2">AUTHOR</p>
                  <p className="font-bold border-b border-ink/20 pb-2 mb-4">Hiya Jain</p>
                  
                  <p className="opacity-50 mb-2">PUBLICATION</p>
                  <p className="border-b border-ink/20 pb-2 mb-4">Mundane Beauty</p>
                  
                  <p className="opacity-50 mb-2">YEAR</p>
                  <p className="border-b border-ink/20 pb-2">2026</p>
                </div>
              </div>
              
              <div className="md:col-span-9 flex flex-col justify-center">
                <h3 className="font-serif text-3xl sm:text-5xl mb-4 group-hover:text-accent transition-colors underline decoration-transparent group-hover:decoration-accent/30 underline-offset-4">
                  How Britain Lost Its (Dye) Empire
                </h3>
                <p className="font-typewriter text-lg sm:text-xl opacity-80 leading-relaxed max-w-3xl">
                  On the slow migration of an industry, and the forces that shaped its unlikely course — from university degrees and patent statutes to chlorine gas at Ypres.
                </p>
                <div className="mt-8 flex items-center gap-2 font-mono text-xs uppercase text-accent font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  Read Article <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </article>

            <div className="w-full h-px bg-ink/10"></div>

            {/* Writing 2 */}
            <article className="group grid grid-cols-1 md:grid-cols-12 gap-8 hover:bg-black/5 p-8 -mx-8 transition-colors cursor-pointer border border-transparent hover:border-ink/10 relative">
              <div className="md:col-span-3 font-mono text-xs uppercase flex flex-col justify-between">
                <div>
                  <p className="opacity-50 mb-2">AUTHOR</p>
                  <p className="font-bold border-b border-ink/20 pb-2 mb-4">Wendi Yan</p>
                  
                  <p className="opacity-50 mb-2">PUBLICATION</p>
                  <p className="border-b border-ink/20 pb-2 mb-4">Asimov Press</p>
                  
                  <p className="opacity-50 mb-2">YEAR</p>
                  <p className="border-b border-ink/20 pb-2 mb-8">2024</p>
                  
                  <div className="stamp text-[9px] rotate-3 text-accent border-accent self-start inline-block">
                    BEST OF JOURNALISM<br/>— THE SYLLABUS
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-9 flex flex-col justify-center">
                <h3 className="font-serif text-3xl sm:text-5xl mb-4 group-hover:text-accent transition-colors underline decoration-transparent group-hover:decoration-accent/30 underline-offset-4">
                  The Artemisinin Discovery
                </h3>
                <p className="font-typewriter text-lg sm:text-xl opacity-80 leading-relaxed max-w-3xl">
                  How a forgotten program of wartime research led to one of medicine's most important antimalarials — and what it reveals about the conditions under which dormant science becomes urgent again.
                </p>
                <div className="mt-8 flex items-center gap-2 font-mono text-xs uppercase text-accent font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  Read Article <ArrowUpRight className="w-4 h-4" />
                </div>
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
                <li><a href="/__mockup/preview/rf-dossier/Projects" className="hover:text-accent flex items-center gap-2"><CornerRightDown className="w-3 h-3 opacity-50" /> Projects</a></li>
                <li><a href="/__mockup/preview/rf-dossier/Writings" className="text-accent flex items-center gap-2"><CornerRightDown className="w-3 h-3 opacity-50" /> Writings</a></li>
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
