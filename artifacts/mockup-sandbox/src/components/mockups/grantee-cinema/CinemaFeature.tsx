import React, { useEffect, useRef } from "react";
import "./_group.css";

export function CinemaFeature() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Optional: intersection observer for scroll reveals
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
      { threshold: 0.1 }
    );

    const root = scrollRef.current ?? document;
    const elements = root.querySelectorAll(".reveal-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="cinema-feature relative w-full" ref={scrollRef}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-gradient-to-b from-[#030303] to-transparent mix-blend-difference pointer-events-none">
        <a 
          href="#" 
          onClick={(e) => e.preventDefault()}
          className="text-xs tracking-[0.2em] uppercase text-white/70 hover:text-white transition-colors pointer-events-auto flex items-center gap-2"
        >
          <span className="w-4 h-[1px] bg-white/50 block transition-all group-hover:w-6"></span>
          Back to Portfolio
        </a>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full h-[100vh] flex flex-col justify-end pb-24 px-8 md:px-16 lg:px-24 overflow-hidden">
        {/* Background Image with Cinematic Wash */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-screen"
            style={{ 
              backgroundImage: 'url(/__mockup/images/topology-chalkboard.png)',
              animation: 'slowPan 30s ease-in-out infinite alternate'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/80 to-[#030303]/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#030303] via-transparent to-transparent opacity-80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl">
          <div className="flex flex-col gap-6 animate-fade-in">
            <div className="flex items-center gap-4 text-[10px] sm:text-xs tracking-[0.3em] uppercase text-white/50 font-medium">
              <span>Project Dossier</span>
              <span className="w-1 h-1 rounded-full bg-[var(--accent)]" />
              <span>2025 Cohort</span>
              <span className="w-1 h-1 rounded-full bg-[var(--accent)]" />
              <span className="text-[var(--accent)] drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]">Active Grant</span>
            </div>
            
            <h1 className="cinema-display text-6xl sm:text-8xl md:text-9xl font-medium leading-[0.85] tracking-tight text-white mb-4">
              Aiden<br />Sagerman
            </h1>

            <div className="flex flex-wrap gap-3 mt-4 animate-fade-in delay-300">
              <span className="px-4 py-1.5 border border-white/10 rounded-full text-xs tracking-wider uppercase text-white/70 backdrop-blur-sm bg-white/5">
                Artificial Intelligence
              </span>
              <span className="px-4 py-1.5 border border-white/10 rounded-full text-xs tracking-wider uppercase text-white/70 backdrop-blur-sm bg-white/5">
                History of Mathematics
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="relative z-20 bg-[#030303] px-8 md:px-16 lg:px-24 pb-32">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
          
          {/* Left Column - Content */}
          <div className="flex-1 lg:w-2/3 pt-12">
            
            {/* The Central Inquiry */}
            <div className="reveal-on-scroll mb-32 relative">
              <div className="absolute -left-8 md:-left-12 top-0 text-[120px] leading-none cinema-display text-white/10 select-none">"</div>
              <h2 className="cinema-display text-3xl md:text-5xl leading-tight text-white font-medium relative z-10">
                What logic tradition should we resurface for thinking about artificial intelligence?
              </h2>
            </div>

            {/* The Project */}
            <div className="reveal-on-scroll mb-32">
              <div className="flex items-center gap-4 mb-12">
                <h3 className="text-xs tracking-[0.3em] uppercase text-white/50">The Project</h3>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
              </div>
              
              <p className="text-xl md:text-2xl leading-relaxed text-[var(--text-main)] font-light mb-12 border-l-2 border-[var(--accent)] pl-6 py-2">
                Reconstructing how diagrams drove mathematical discovery in twentieth-century topology, recovering a visual reasoning tradition that abstraction has rendered illegible.
              </p>
              
              <div className="space-y-8 text-[15px] md:text-lg text-[var(--text-muted)] font-light leading-loose max-w-3xl">
                <p>
                  For decades, the dominant narrative of mathematical progress has been one of increasing abstraction and formalization. In this telling, visual reasoning—diagrams, sketches, and physical intuition—served merely as a pedagogical crutch or an informal heuristic, destined to be replaced by rigorous symbolic logic. This project challenges that narrative by returning to mid-century topology, a period where visual reasoning was not merely illustrative but fundamentally generative.
                </p>
                <p>
                  By painstakingly reconstructing the working notebooks and unpublished correspondence of key topologists, this research demonstrates how diagrams functioned as engines of discovery. These visual artifacts were not post-hoc illustrations of theorems already proven, but the very site where mathematical truth was negotiated and established. The project asks us to look again at what the historical record actually shows, rather than what the discipline later claimed it did.
                </p>
              </div>

              {/* In-content Image */}
              <figure className="mt-20 mb-20 reveal-on-scroll">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0a0a0a] rounded-sm group">
                  <div className="absolute inset-0 bg-[var(--accent)] mix-blend-overlay opacity-0 group-hover:opacity-10 transition-opacity duration-1000"></div>
                  <img 
                    src="/__mockup/images/topology-notebook.png" 
                    alt="Reconstructed working notebook"
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out grayscale group-hover:grayscale-0"
                  />
                </div>
                <figcaption className="mt-4 flex items-center justify-between text-xs text-white/40 uppercase tracking-widest border-b border-white/5 pb-4">
                  <span>Archival Object // 01</span>
                  <span>C. 1952</span>
                </figcaption>
              </figure>
            </div>

            {/* Why It Matters */}
            <div className="reveal-on-scroll mb-32">
              <div className="flex items-center gap-4 mb-12">
                <h3 className="text-xs tracking-[0.3em] uppercase text-white/50">Why It Was Lost / Why It Matters</h3>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
              </div>
              
              <div className="space-y-8 text-[15px] md:text-lg text-[var(--text-muted)] font-light leading-loose max-w-3xl">
                <p>
                  The erasure of this visual tradition was not accidental; it was the result of a deliberate ideological shift toward algebraic methods and a desire to purge mathematics of anything deemed 'intuitive' or 'unrigorous.' This abstraction successfully consolidated the discipline, but it rendered an entire mode of thought illegible to future generations. The diagrams were quietly excised from the published papers, their generative role hidden behind polished algebraic proofs.
                </p>
                <p>
                  This historical amnesia matters acutely today. As we build artificial intelligence systems reliant on statistical pattern matching and formal logic, we are constraining the horizons of machine reasoning to the very symbolic traditions that won the 20th century. By recovering how human mathematical discovery actually occurred—through spatial, visual, and diagrammatic reasoning—we open up new, historically grounded frameworks for what artificial intelligence could be. We are reminded that intelligence is not merely the manipulation of symbols, but the capacity to see structure in space.
                </p>
              </div>
            </div>

            {/* Pull Quote */}
            <div className="reveal-on-scroll py-24 my-24 border-y border-white/5 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-glow)] to-transparent opacity-20 blur-3xl"></div>
              <blockquote className="relative z-10 cinema-display text-4xl md:text-6xl text-white leading-tight text-center px-4 md:px-12">
                "The diagrams were not illustrations of the math; they were the math itself, waiting for an algebra capable of describing them."
              </blockquote>
            </div>

          </div>

          {/* Right Column - Metadata Ledger */}
          <aside className="lg:w-1/3 lg:pt-12 relative">
            <div className="sticky top-32">
              <div className="bg-[#0a0a0a] border border-white/5 p-8 md:p-10 relative overflow-hidden reveal-on-scroll delay-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent)] opacity-5 blur-[100px] rounded-full"></div>
                
                <h4 className="text-xs tracking-[0.3em] uppercase text-white/30 mb-10 pb-4 border-b border-white/5">
                  Dossier Metadata
                </h4>
                
                <dl className="space-y-8">
                  <div>
                    <dt className="text-[10px] tracking-widest uppercase text-white/40 mb-2">Discipline</dt>
                    <dd className="text-lg text-white font-light">History of Science</dd>
                  </div>
                  
                  <div>
                    <dt className="text-[10px] tracking-widest uppercase text-white/40 mb-2">Period of Focus</dt>
                    <dd className="text-lg text-white font-light">Mid-20th Century</dd>
                  </div>
                  
                  <div>
                    <dt className="text-[10px] tracking-widest uppercase text-white/40 mb-2">Grant Year</dt>
                    <dd className="text-lg text-[var(--accent)] font-medium">2025</dd>
                  </div>
                  
                  <div>
                    <dt className="text-[10px] tracking-widest uppercase text-white/40 mb-2">Output Type</dt>
                    <dd className="text-lg text-white font-light">Archival Reconstruction + Essays</dd>
                  </div>
                </dl>

                {/* Decorative Elements */}
                <div className="mt-16 pt-8 border-t border-white/5 flex justify-between items-center opacity-30">
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map(i => <div key={i} className="w-1 h-4 bg-white/20"></div>)}
                  </div>
                  <div className="text-[10px] font-mono tracking-widest uppercase">ID: RF-25-AS</div>
                </div>
              </div>
            </div>
          </aside>

        </div>
      </main>
    </div>
  );
}
