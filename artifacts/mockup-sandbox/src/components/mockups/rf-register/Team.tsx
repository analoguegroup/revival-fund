import { useEffect, useRef } from "react";
import { CornerDownRight } from "lucide-react";
import "./_group.css";

const team = [
  {
    ref: "RF·T·01",
    name: "Wendi Yan",
    role: "Fund Director, The Revival Fund",
    bio: "Wendi Yan writes and makes sci-fi art about knowledge that has been lost, mistranslated or overlooked. She holds an A.B. in History of Science from Princeton University and an M.S. in Fiction and Entertainment from SCI-Arc. She was an inaugural Steve Jobs Archive Fellow and the Grand Prix recipient of the 6th VH Award by Hyundai Motor Group. Her writing on artemisinin discovery for Asimov Press was named \"Best of Journalism\" by The Syllabus."
  },
  {
    ref: "RF·T·02",
    name: "Hiya Jain",
    role: "Editorial Lead, The Revival Fund",
    bio: "Hiya Jain writes about the history of science, biology, and metascience on her Substack, Mundane Beauty. She is a fellow at the Roots of Progress Institute; her writing has appeared in Asimov Press and the Good Science Project. She graduated from Barnard College with degrees in History and Neuroscience."
  }
];

const advisory = [
  {
    ref: "RF·A·01",
    name: "Benjamin Anderson",
    role: "Founder & CEO, AION Biosciences",
    bio: "Establishing the category of read-write bioelectricity using non-invasive interventions, targeting aging as a breakdown in goal-directedness. Previously built and exited Wand and Legacy Interviews."
  },
  {
    ref: "RF·A·02",
    name: "Stuart Buck",
    role: "Executive Director, Good Science Project",
    bio: "Former VP of Research at Arnold Ventures; funded foundational work on scientific reproducibility and helped launch the Center for Open Science and the TOP Guidelines. Ph.D. in education policy and J.D. from Harvard Law."
  },
  {
    ref: "RF·A·03",
    name: "Zac Hill",
    role: "Co-Founder & COO, Office of American Possibilities",
    bio: "Led design research for Frontline Justice; former Lead Game Designer for Magic: The Gathering, winning an Origins Award for Magic: Innistrad."
  },
  {
    ref: "RF·A·04",
    name: "Aishwarya Khanduja",
    role: "Founder, Analogue Group",
    bio: "Runs Analogue, an R&D fund for antidisciplinary thinkers and fragile early-stage ideas. MPhil in Bioscience Enterprise from Cambridge."
  },
  {
    ref: "RF·A·05",
    name: "David Lang",
    role: "Executive Director, Experiment Foundation",
    bio: "Co-founded OpenROV and Sofar. TED Senior Fellow and National Geographic Emerging Explorer."
  },
  {
    ref: "RF·A·06",
    name: "Scott Moore",
    role: "Founder, Public Works",
    bio: "An open source ecosystem fund that has distributed over $50 million to maintainers worldwide."
  },
  {
    ref: "RF·A·07",
    name: "Tasneem Nabi",
    role: "Head of Strategy, Analogue Group",
    bio: "Product builder focused on AI and practical health applications; previously founded Ratio Labs and built products at Meta and EY."
  },
  {
    ref: "RF·A·08",
    name: "Peter Wang",
    role: "Co-Founder & CEO, Anaconda",
    bio: "The company behind the world's most popular open-source Python distribution; a long-time advocate for open science and scientific computing."
  }
];

export function Team() {
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
            <a href="/__mockup/preview/rf-register/Writings" className="hover:text-[var(--register-accent)] transition-colors">Writings</a>
            <a href="/__mockup/preview/rf-register/Faq" className="hover:text-[var(--register-accent)] transition-colors">FAQ</a>
            <a href="/__mockup/preview/rf-register/Team" className="text-[var(--register-fg)] border-b border-[var(--register-fg)] pb-1">Team</a>
            <a href="/__mockup/preview/rf-register/Apply" className="text-[var(--register-accent)] hover:text-[var(--register-fg)] transition-colors">Apply</a>
          </nav>

          <header className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center gap-4 rf-mono text-xs text-[var(--register-muted)] tracking-widest uppercase">
                <span>Vol. V</span>
                <span className="w-8 rf-border-b" />
                <span>Roster & Register</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-light tracking-tight text-[var(--register-fg)]">
                Team & Advisory
              </h1>
            </div>
          </header>

          <div className="mb-24 rf-border border-[var(--register-accent-faded)] p-6 bg-[var(--register-accent-faded)] text-sm md:text-base text-center text-[var(--register-accent)] animate-fade-in delay-100">
            This work is only possible due to generous support from the following patrons:<br/>
            <span className="font-medium mt-2 block">Peter Wang · Good Science Project · Noticing Foundation</span>
          </div>

          <div className="w-full rf-border-t mb-24 relative">
            <div className="tick-tl" />
            <div className="tick-tr" />
          </div>

          {/* Team Section */}
          <section className="mb-32 reveal-on-scroll">
            <div className="mb-12 flex justify-between items-end border-b border-[var(--register-line)] pb-4">
              <span className="rf-mono text-xs tracking-widest uppercase text-[var(--register-muted)]">
                01. Core Team
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {team.map((member) => (
                <div key={member.ref} className="rf-border relative p-8 bg-white/40 hover:bg-white/80 transition-colors">
                  <div className="tick-tl" />
                  <div className="tick-tr" />
                  <div className="tick-bl" />
                  <div className="tick-br" />
                  
                  <div className="rf-mono text-[10px] text-[var(--register-accent)] mb-4">{member.ref}</div>
                  <h3 className="text-3xl mb-1">{member.name}</h3>
                  <div className="rf-mono text-xs uppercase tracking-widest text-[var(--register-muted)] mb-6 border-b border-[var(--register-line)] pb-4">
                    {member.role}
                  </div>
                  <p className="text-[#4a4a4a] text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Advisory Section */}
          <section className="mb-32 reveal-on-scroll">
            <div className="mb-12 flex justify-between items-end border-b border-[var(--register-line)] pb-4">
              <span className="rf-mono text-xs tracking-widest uppercase text-[var(--register-muted)]">
                02. Advisory Committee
              </span>
            </div>

            <div className="rf-border relative">
              <div className="tick-tl" />
              <div className="tick-tr" />
              <div className="tick-bl" />
              <div className="tick-br" />

              <div className="flex flex-col">
                {advisory.map((adv, idx) => (
                  <div 
                    key={adv.ref} 
                    className={`grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 p-6 md:p-8 hover:bg-[#eae6de] transition-colors ${
                      idx !== advisory.length - 1 ? 'rf-border-b' : ''
                    }`}
                  >
                    <div className="md:col-span-2 rf-mono text-xs text-[var(--register-accent)] pt-1">
                      {adv.ref}
                    </div>
                    <div className="md:col-span-4">
                      <h4 className="text-xl font-medium mb-1">{adv.name}</h4>
                      <div className="rf-mono text-[10px] uppercase tracking-wider text-[var(--register-muted)]">
                        {adv.role}
                      </div>
                    </div>
                    <div className="md:col-span-6 text-sm text-[#4a4a4a] leading-relaxed">
                      {adv.bio}
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
