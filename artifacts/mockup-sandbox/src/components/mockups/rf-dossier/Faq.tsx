import { useState, useEffect } from 'react';
import { CornerRightDown, Plus, Minus, HelpCircle } from 'lucide-react';
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

function FaqItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-ink/20 last:border-b-0">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full py-6 flex items-start justify-between text-left group"
      >
        <h3 className="font-mono font-bold text-base sm:text-lg pr-8 group-hover:text-accent transition-colors">
          Q: {question}
        </h3>
        <span className="shrink-0 mt-1 opacity-50 group-hover:text-accent group-hover:opacity-100 transition-all">
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mb-8' : 'max-h-0 opacity-0 mb-0'}`}
      >
        <div className="font-typewriter text-base sm:text-lg opacity-80 leading-relaxed border-l-2 border-accent/30 pl-6 ml-2">
          {answer}
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  useScrollReveal();

  const getTodayStr = () => {
    const date = new Date();
    return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}`;
  };

  const categories = [
    {
      title: "Understanding the Revival Fund",
      items: [
        { q: "Is this a venture fund?", a: "No. We don't expect financial returns. But we're excited to see revival projects become launchpads for more ambitious work, including ventures with commercial outcomes. If your project becomes a company, we would be interested in following up with an angel check independently through our network." },
        { q: "What counts as 'revival'?", a: "Work engaging with research that has been: abandoned due to funding loss, dismissed by paradigm shifts, published in marginalized languages/contexts, buried in archives, or developed within alternative epistemological frameworks that dominant institutions overlooked." },
        { q: "What's your position on AI?", a: "We're excited about AI's potential to unlock new approaches to knowledge inquiry, especially in processing data at scales and in ways previously inaccessible to humans. We welcome AI use in research revival projects for analysis, translation, pattern recognition, visualization, or any other application that serves rigorous inquiry." }
      ]
    },
    {
      title: "Who Can Apply",
      items: [
        { q: "Who can apply?", a: "Anyone. Academics, independent researchers, artists, scientists, archivists, translators. We care about the quality of the inquiry and depth of engagement, not your institutional affiliation or credentials." },
        { q: "Can I apply from outside the United States?", a: "Yes. The Revival Fund supports projects globally." },
        { q: "I'm working on my PhD dissertation. Can I apply?", a: "Yes, if your project includes a substantial public-facing artifact we can publish outside the dissertation itself, within the next year." },
        { q: "How do you evaluate 'relentless intellectual obsession'?", a: "We look for evidence of sustained engagement: existing preliminary work, depth of knowledge about the research lineage, clarity about why this particular inquiry compels you." }
      ]
    },
    {
      title: "Funding & Timeline",
      items: [
        { q: "When can I apply?", a: "Applications open February 19, 2026. We prioritize reviewing proposals submitted by March 18, 2026. Because we're shaping the fund as we go and want to remain open to exceptional projects, the submission form stays open after this date, but we cannot guarantee review of proposals submitted after March 18." },
        { q: "What's the funding range?", a: "Generally $4,000-$10,000, up to $25,000 in special cases." },
        { q: "How long do projects typically last?", a: "We're flexible depending on scope. Once funded, we expect concentrated engagement. Projects are announced when funded and published as they reach milestones or completion. Specify your timeline in the application." }
      ]
    },
    {
      title: "Application & Process",
      items: [
        { q: "How does your selection process work?", a: "After the application window closes on March 18, we review submissions with our advisory committee and approve projects on a rolling basis—decisions and announcements happen continuously rather than on a single date." },
        { q: "Can I apply with multiple project ideas?", a: "Yes. Submit each project as a separate application so we can evaluate them individually." },
        { q: "Does the research have to be a specific scientific or technical field?", a: "No. The Revival Fund is an experiment in knowledge inquiry in its own right. We're building our advisory committee and guest reviewers network as we go. Apply with projects from any field, regardless of our current team's backgrounds." },
        { q: "Can projects include creative or fictional elements?", a: "Yes. Historiographic fictions, speculative documentaries, and other creative forms are welcome if they're grounded in rigorous engagement with the research being revived." },
        { q: "What if my project evolves significantly during research?", a: "We expect some evolution. Major scope changes require discussion, but we're flexible if the revival mission remains intact." }
      ]
    },
    {
      title: "Publication & Beyond",
      items: [
        { q: "Do I retain intellectual property rights?", a: "Yes. You retain full IP rights. The Revival Fund receives non-exclusive publication and distribution rights to the funded project artifacts, which we determine together during the editorial process." },
        { q: "Where will my work be published?", a: "On the Revival Fund platform and potentially through partner publications. All work is publicly accessible." },
        { q: "What happens after publication?", a: "We encourage others to build on the work. You retain the ability to develop it further, and we may feature it in compilations or anthologies." },
        { q: "Can I apply for a second project after completing one?", a: "Yes." }
      ]
    }
  ];

  return (
    <div className="dossier-wrapper min-h-screen flex flex-col text-sm sm:text-base selection:bg-accent selection:text-paper">
      
      <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur-sm border-b border-ink/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-2 flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs uppercase tracking-widest font-mono">
          <div className="flex gap-4 sm:gap-8 opacity-70">
            <span>REF: RF-DS-004</span>
            <span className="hidden sm:inline">SUBJECT: FAQ INTERROGATION</span>
            <span>STATUS: ACTIVE</span>
          </div>
          <nav className="flex gap-4 mt-2 sm:mt-0 font-bold overflow-x-auto whitespace-nowrap pb-2 sm:pb-0 w-full sm:w-auto">
            <a href="/__mockup/preview/rf-dossier/Home" className="hover:text-accent transition-colors">About</a>
            <a href="/__mockup/preview/rf-dossier/Projects" className="hover:text-accent transition-colors">Projects</a>
            <a href="/__mockup/preview/rf-dossier/Writings" className="hover:text-accent transition-colors">Writings</a>
            <a href="/__mockup/preview/rf-dossier/Faq" className="text-accent transition-colors">FAQ</a>
            <a href="/__mockup/preview/rf-dossier/Team" className="hover:text-accent transition-colors">Team</a>
            <a href="/__mockup/preview/rf-dossier/Apply" className="hover:text-accent transition-colors">Apply</a>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto w-full px-4 sm:px-8 pt-12 pb-32 flex-1">
        <section className="relative pt-16 pb-24 border-b border-ink/20 reveal-on-scroll">
          <div className="reg-mark top-0 left-0 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="reg-mark top-0 right-0 translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="flex justify-between items-start mb-8 text-xs font-mono uppercase opacity-50">
            <div>
              <p>THE REVIVAL FUND</p>
              <p>INQUIRY DEPT</p>
            </div>
            <div className="text-right">
              <p>DATE: {getTodayStr()}</p>
              <p>CLEARANCE: UNRESTRICTED</p>
            </div>
          </div>

          <div className="relative z-10 text-center">
            <h1 className="font-serif text-5xl sm:text-7xl tracking-tighter leading-[0.9] mb-6">
              FREQUENTLY<br/>ASKED QUESTIONS
            </h1>
            <p className="font-mono text-sm uppercase tracking-widest inline-block border-b border-ink/40 pb-1">
              Transcript of common inquiries
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="space-y-16">
            {categories.map((category, idx) => (
              <div key={idx} className="reveal-on-scroll">
                <div className="flex items-center gap-4 mb-6">
                  <HelpCircle className="w-5 h-5 text-accent opacity-80" />
                  <h2 className="font-mono text-sm uppercase tracking-widest font-bold bg-ink text-paper px-3 py-1">
                    {category.title}
                  </h2>
                </div>
                
                <div className="border-t border-ink/20 bg-black/5 px-6 sm:px-8">
                  {category.items.map((item, itemIdx) => (
                    <FaqItem key={itemIdx} question={item.q} answer={item.a} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 p-8 border border-ink/20 bg-paper-dark text-center reveal-on-scroll">
            <p className="font-mono text-sm uppercase tracking-widest opacity-60 mb-2">FURTHER INQUIRIES?</p>
            <p className="font-typewriter text-lg">
              If you have more questions, email <a href="mailto:wendi@analoguegroup.org" className="text-accent underline decoration-accent/30 hover:decoration-accent underline-offset-4 transition-all">wendi@analoguegroup.org</a>
            </p>
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
                <li><a href="/__mockup/preview/rf-dossier/Faq" className="text-accent flex items-center gap-2"><CornerRightDown className="w-3 h-3 opacity-50" /> FAQ</a></li>
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
