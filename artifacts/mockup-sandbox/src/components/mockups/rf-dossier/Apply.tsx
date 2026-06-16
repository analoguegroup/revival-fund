import { useEffect } from 'react';
import { CornerRightDown, ArrowUpRight, CheckSquare, Clock, CalendarDays } from 'lucide-react';
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

export function Apply() {
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
            <span>REF: RF-DS-006</span>
            <span className="hidden sm:inline">SUBJECT: INTAKE PROCESSING</span>
            <span>STATUS: ACTIVE</span>
          </div>
          <nav className="flex gap-4 mt-2 sm:mt-0 font-bold overflow-x-auto whitespace-nowrap pb-2 sm:pb-0 w-full sm:w-auto">
            <a href="/__mockup/preview/rf-dossier/Home" className="hover:text-accent transition-colors">About</a>
            <a href="/__mockup/preview/rf-dossier/Projects" className="hover:text-accent transition-colors">Projects</a>
            <a href="/__mockup/preview/rf-dossier/Writings" className="hover:text-accent transition-colors">Writings</a>
            <a href="/__mockup/preview/rf-dossier/Faq" className="hover:text-accent transition-colors">FAQ</a>
            <a href="/__mockup/preview/rf-dossier/Team" className="hover:text-accent transition-colors">Team</a>
            <a href="/__mockup/preview/rf-dossier/Apply" className="text-accent transition-colors">Apply</a>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-8 pt-12 pb-32 flex-1 w-full flex flex-col items-center justify-center min-h-[70vh]">
        
        <section className="w-full max-w-4xl reveal-on-scroll">
          <div className="border-2 border-ink p-1 relative bg-paper-dark shadow-2xl">
            {/* Inner dashed border */}
            <div className="border border-dashed border-ink/40 p-8 sm:p-16 relative overflow-hidden bg-paper/50">
              <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl"></div>
              
              <div className="flex justify-between items-start mb-12 text-xs font-mono uppercase opacity-50 border-b border-ink/20 pb-4">
                <div>
                  <p>FORM RF-001-A</p>
                  <p>REQUEST FOR DECLASSIFICATION</p>
                </div>
                <div className="text-right">
                  <p>DATE: {getTodayStr()}</p>
                </div>
              </div>

              <div className="text-center mb-16">
                <h1 className="font-serif text-5xl sm:text-7xl mb-6">
                  SUBMIT DOSSIER
                </h1>
                <p className="font-typewriter text-lg sm:text-xl opacity-80 max-w-2xl mx-auto leading-relaxed">
                  Do you know of an abandoned experiment that deserves to be restarted? A forgotten paper that holds the key? Submit your proposal for consideration.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 font-mono text-xs uppercase">
                <div className="border border-ink/20 p-6 bg-paper relative">
                  <CheckSquare className="w-5 h-5 text-accent mb-4" />
                  <p className="font-bold mb-2">Who Can Apply</p>
                  <p className="opacity-70 normal-case tracking-normal">Anyone — academics, independent researchers, artists, scientists, archivists, translators.</p>
                </div>
                
                <div className="border border-ink/20 p-6 bg-paper relative">
                  <Clock className="w-5 h-5 text-accent mb-4" />
                  <p className="font-bold mb-2">Funding Range</p>
                  <p className="opacity-70 normal-case tracking-normal">$4,000–$10,000 generally, up to $25,000 in special cases requiring deeper resourcing.</p>
                </div>
                
                <div className="border border-ink/20 p-6 bg-paper relative">
                  <CalendarDays className="w-5 h-5 text-accent mb-4" />
                  <p className="font-bold mb-2">Timeline</p>
                  <p className="opacity-70 normal-case tracking-normal">Opens: Feb 19, 2026.<br/>Priority Review: Mar 18, 2026.</p>
                </div>
              </div>

              <div className="flex justify-center border-t border-ink/20 pt-16 relative">
                {/* Stamp */}
                <div className="absolute top-8 right-12 md:right-32 w-32 opacity-80 mix-blend-multiply -rotate-[15deg] pointer-events-none">
                  <img src="/__mockup/images/stamp-declassified.png" alt="Stamp" className="w-full h-auto" />
                </div>
                
                <a href="https://natfwqew5yc.typeform.com/to/tW9UK4yY" target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center font-mono text-base sm:text-lg uppercase tracking-widest font-bold px-12 py-6 bg-ink text-paper hover:bg-accent transition-colors overflow-hidden">
                  <span className="relative z-10 flex items-center gap-3">
                    Open The Application <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </a>
              </div>
            </div>
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
                <li><a href="/__mockup/preview/rf-dossier/Writings" className="hover:text-accent flex items-center gap-2"><CornerRightDown className="w-3 h-3 opacity-50" /> Writings</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest mb-4 opacity-50 border-b border-ink/20 pb-2">Operations</h3>
              <ul className="font-mono text-sm space-y-2">
                <li><a href="/__mockup/preview/rf-dossier/Team" className="hover:text-accent flex items-center gap-2"><CornerRightDown className="w-3 h-3 opacity-50" /> Team</a></li>
                <li><a href="/__mockup/preview/rf-dossier/Faq" className="hover:text-accent flex items-center gap-2"><CornerRightDown className="w-3 h-3 opacity-50" /> FAQ</a></li>
                <li><a href="/__mockup/preview/rf-dossier/Apply" className="text-accent flex items-center gap-2"><CornerRightDown className="w-3 h-3 opacity-50" /> Apply</a></li>
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
