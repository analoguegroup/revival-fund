import { useEffect } from 'react';
import { CornerRightDown, Users, BadgeCheck, ShieldAlert, ArrowUpRight } from 'lucide-react';
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

export function Team() {
  useScrollReveal();

  const getTodayStr = () => {
    const date = new Date();
    return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}`;
  };

  const team = [
    {
      id: "RF·T·01",
      name: "Wendi Yan",
      role: "Fund Director",
      bio: "Wendi Yan writes and makes sci-fi art about knowledge that has been lost, mistranslated or overlooked. She holds an A.B. in History of Science from Princeton University and an M.S. in Fiction and Entertainment from SCI-Arc. She was an inaugural Steve Jobs Archive Fellow and the Grand Prix recipient of the 6th VH Award by Hyundai Motor Group. Her writing on artemisinin discovery for Asimov Press was named \"Best of Journalism\" by The Syllabus."
    },
    {
      id: "RF·T·02",
      name: "Hiya Jain",
      role: "Editorial Lead",
      bio: "Hiya Jain writes about the history of science, biology, and metascience on her Substack, Mundane Beauty. She is a fellow at the Roots of Progress Institute; her writing has appeared in Asimov Press and the Good Science Project. She graduated from Barnard College with degrees in History and Neuroscience."
    }
  ];

  const advisors = [
    {
      id: "RF·A·01",
      name: "Benjamin Anderson",
      role: "Founder & CEO, AION Biosciences",
      bio: "Establishing the category of read-write bioelectricity using non-invasive interventions, targeting aging as a breakdown in goal-directedness. Previously built and exited Wand and Legacy Interviews."
    },
    {
      id: "RF·A·02",
      name: "Stuart Buck",
      role: "Executive Director, Good Science Project",
      bio: "Former VP of Research at Arnold Ventures; funded foundational work on scientific reproducibility and helped launch the Center for Open Science and the TOP Guidelines. Ph.D. in education policy and J.D. from Harvard Law."
    },
    {
      id: "RF·A·03",
      name: "Zac Hill",
      role: "Co-Founder & COO, Office of American Possibilities",
      bio: "Led design research for Frontline Justice; former Lead Game Designer for Magic: The Gathering, winning an Origins Award for Magic: Innistrad."
    },
    {
      id: "RF·A·04",
      name: "Aishwarya Khanduja",
      role: "Founder, Analogue Group",
      bio: "Runs Analogue, an R&D fund for antidisciplinary thinkers and fragile early-stage ideas. MPhil in Bioscience Enterprise from Cambridge."
    },
    {
      id: "RF·A·05",
      name: "David Lang",
      role: "Executive Director, Experiment Foundation",
      bio: "Co-founded OpenROV and Sofar. TED Senior Fellow and National Geographic Emerging Explorer."
    },
    {
      id: "RF·A·06",
      name: "Scott Moore",
      role: "Founder, Public Works",
      bio: "An open source ecosystem fund that has distributed over $50 million to maintainers worldwide."
    },
    {
      id: "RF·A·07",
      name: "Tasneem Nabi",
      role: "Head of Strategy, Analogue Group",
      bio: "Product builder focused on AI and practical health applications; previously founded Ratio Labs and built products at Meta and EY."
    },
    {
      id: "RF·A·08",
      name: "Peter Wang",
      role: "Co-Founder & CEO, Anaconda",
      bio: "The company behind the world's most popular open-source Python distribution; a long-time advocate for open science and scientific computing."
    }
  ];

  return (
    <div className="dossier-wrapper min-h-screen flex flex-col text-sm sm:text-base selection:bg-accent selection:text-paper">
      
      <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur-sm border-b border-ink/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-2 flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs uppercase tracking-widest font-mono">
          <div className="flex gap-4 sm:gap-8 opacity-70">
            <span>REF: RF-DS-005</span>
            <span className="hidden sm:inline">SUBJECT: PERSONNEL ROSTER</span>
            <span>STATUS: ACTIVE</span>
          </div>
          <nav className="flex gap-4 mt-2 sm:mt-0 font-bold overflow-x-auto whitespace-nowrap pb-2 sm:pb-0 w-full sm:w-auto">
            <a href="/__mockup/preview/rf-dossier/Home" className="hover:text-accent transition-colors">About</a>
            <a href="/__mockup/preview/rf-dossier/Projects" className="hover:text-accent transition-colors">Projects</a>
            <a href="/__mockup/preview/rf-dossier/Writings" className="hover:text-accent transition-colors">Writings</a>
            <a href="/__mockup/preview/rf-dossier/Faq" className="hover:text-accent transition-colors">FAQ</a>
            <a href="/__mockup/preview/rf-dossier/Team" className="text-accent transition-colors">Team</a>
            <a href="/__mockup/preview/rf-dossier/Apply" className="hover:text-accent transition-colors">Apply</a>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-8 pt-12 pb-32 flex-1 w-full">
        
        <section className="relative pt-16 pb-24 border-b border-ink/20 reveal-on-scroll">
          <div className="reg-mark top-0 left-0 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="reg-mark top-0 right-0 translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="flex justify-between items-start mb-8 text-xs font-mono uppercase opacity-50">
            <div>
              <p>THE REVIVAL FUND</p>
              <p>PERSONNEL DIV.</p>
            </div>
            <div className="text-right">
              <p>DATE: {getTodayStr()}</p>
              <p>CLEARANCE: UNRESTRICTED</p>
            </div>
          </div>

          <div className="relative z-10">
            <h1 className="font-serif text-6xl sm:text-8xl lg:text-9xl tracking-tighter leading-[0.85] mb-6">
              PERSONNEL<br/>ROSTER
            </h1>
            
            <div className="mt-8 font-mono text-xs sm:text-sm uppercase tracking-widest max-w-4xl border border-ink/20 p-4 sm:p-6 bg-black/5 flex items-start gap-4">
              <ShieldAlert className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <p className="opacity-80 leading-relaxed">
                This work is only possible due to generous support from the following patrons:<br/>
                <span className="font-bold text-accent mt-2 inline-block">Peter Wang · Good Science Project · Noticing Foundation</span>
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 border-b border-ink/20 reveal-on-scroll">
          <div className="flex items-center gap-4 mb-16">
            <Users className="w-6 h-6 text-accent" />
            <h2 className="font-mono text-sm uppercase tracking-widest text-accent font-bold">Operatives</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-24">
            {team.map((member) => (
              <div key={member.id} className="group relative">
                <div className="font-mono text-xs uppercase flex justify-between border-b border-ink/20 pb-2 mb-6">
                  <span className="opacity-50">{member.id}</span>
                  <span className="font-bold">{member.role}</span>
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl mb-4 group-hover:text-accent transition-colors">{member.name}</h3>
                <p className="font-typewriter text-base sm:text-lg opacity-80 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 reveal-on-scroll">
          <div className="flex items-center gap-4 mb-16">
            <BadgeCheck className="w-6 h-6 text-ink opacity-50" />
            <h2 className="font-mono text-sm uppercase tracking-widest text-ink font-bold opacity-70">Advisory Committee</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {advisors.map((advisor) => (
              <div key={advisor.id} className="relative group">
                <div className="font-mono text-[10px] uppercase opacity-50 mb-2 pb-2 border-b border-ink/20 flex justify-between">
                  <span>{advisor.id}</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl mb-1 group-hover:text-accent transition-colors">{advisor.name}</h3>
                <p className="font-mono text-[10px] uppercase tracking-wider opacity-60 mb-4">{advisor.role}</p>
                <p className="font-typewriter text-sm opacity-80 leading-relaxed">{advisor.bio}</p>
                {/* Decorative dot */}
                <div className="absolute top-0 right-0 w-2 h-2 bg-ink/20 group-hover:bg-accent transition-colors rounded-full"></div>
              </div>
            ))}
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
                <li><a href="/__mockup/preview/rf-dossier/Team" className="text-accent flex items-center gap-2"><CornerRightDown className="w-3 h-3 opacity-50" /> Team</a></li>
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
