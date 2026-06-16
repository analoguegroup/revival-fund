import React from 'react';
import './_group.css';

export function GridSpecimen() {
  return (
    <div className="swiss-grid-page">
      <div className="swiss-grid-container animate-reveal">
        
        {/* ROW 1: Header */}
        <div className="swiss-cell col-span-12 md:col-span-3 flex items-center swiss-cell-pad">
          <a href="#" onClick={(e) => e.preventDefault()} className="swiss-mono text-[10px] uppercase tracking-widest text-gray-500 hover:text-[#0047FF] transition-colors flex items-center gap-2">
            <span className="text-lg leading-none mt-[-2px]">←</span> Back to Portfolio
          </a>
        </div>
        <div className="swiss-cell col-span-12 md:col-span-9 flex items-center md:justify-end swiss-cell-pad">
          <div className="swiss-mono text-[10px] uppercase tracking-widest text-gray-500">
            Project Dossier <span className="mx-3 text-[#0047FF] opacity-50">—</span> 2025 Cohort <span className="mx-3 text-[#0047FF] opacity-50">—</span> <span className="text-[#141414] font-medium">Active Grant</span>
          </div>
        </div>

        {/* ROW 2: Title */}
        <div className="swiss-cell col-span-12">
          <div className="p-8 md:p-16 lg:p-24 pb-12">
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-medium tracking-tighter uppercase leading-[0.85] text-[#141414]">
              Aiden<br/>Sagerman
            </h1>
          </div>
        </div>

        {/* ROW 3: Topic Tags & Inquiry */}
        <div className="swiss-cell col-span-12 md:col-span-4 swiss-cell-pad flex flex-col justify-end">
          <div className="swiss-mono text-[10px] uppercase tracking-widest text-gray-500 mb-4 border-b border-[var(--border-color)] pb-3">Topic Modifiers</div>
          <div className="flex flex-col gap-2 w-fit">
            <span className="text-[11px] font-medium border border-[var(--border-color)] px-3 py-1.5 uppercase tracking-wide bg-white text-[#141414]">
              Artificial Intelligence
            </span>
            <span className="text-[11px] font-medium border border-[var(--border-color)] px-3 py-1.5 uppercase tracking-wide bg-white text-[#141414]">
              History of Mathematics
            </span>
          </div>
        </div>
        <div className="swiss-cell col-span-12 md:col-span-8 p-8 md:p-16 lg:p-24 flex items-center border-l md:border-l-[var(--border-color)]">
          <h2 className="text-3xl md:text-5xl font-medium leading-[1.15] tracking-tight text-[#0047FF]">
            "What logic tradition should we resurface for thinking about artificial intelligence?"
          </h2>
        </div>

        {/* ROW 4: Image 1 & The Project */}
        <div className="swiss-cell col-span-12 md:col-span-5 relative group overflow-hidden border-t-[var(--border-color)] md:border-t-0 border-r md:border-r-[var(--border-color)]">
          <div className="absolute inset-0 bg-[#0047FF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-color"></div>
          <img 
            src="/__mockup/images/topology-notebook.png" 
            alt="Reconstructed working notebook, c. 1952"
            className="w-full h-full min-h-[400px] object-cover grayscale contrast-125 transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-[var(--bg-color)]/90 backdrop-blur-sm p-3 border-t border-[var(--border-color)] swiss-mono text-[10px] uppercase z-20 flex justify-between items-center">
            <span className="font-medium text-[#0047FF]">FIG. 01</span>
            <span className="text-gray-500">Working Notebook, c. 1952</span>
          </div>
        </div>
        
        <div className="swiss-cell col-span-12 md:col-span-7 p-8 md:p-12 lg:p-16 flex flex-col">
          <div className="swiss-mono text-[10px] uppercase tracking-widest text-[#0047FF] mb-8 pb-4 border-b border-[var(--border-color)] flex justify-between">
            <span>Section 01</span>
            <span>The Project</span>
          </div>
          <p className="text-xl md:text-2xl font-medium leading-snug mb-8 text-[#141414]">
            Reconstructing how diagrams drove mathematical discovery in twentieth-century topology, recovering a visual reasoning tradition that abstraction has rendered illegible.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm leading-relaxed text-gray-600">
            <p>
              For decades, the dominant narrative of mathematical progress has been one of increasing abstraction and formalization. In this telling, visual reasoning—diagrams, sketches, and physical intuition—served merely as a pedagogical crutch or an informal heuristic, destined to be replaced by rigorous symbolic logic. This project challenges that narrative by returning to mid-century topology, a period where visual reasoning was not merely illustrative but fundamentally generative.
            </p>
            <p>
              By painstakingly reconstructing the working notebooks and unpublished correspondence of key topologists, this research demonstrates how diagrams functioned as engines of discovery. These visual artifacts were not post-hoc illustrations of theorems already proven, but the very site where mathematical truth was negotiated and established. The project asks us to look again at what the historical record actually shows, rather than what the discipline later claimed it did.
            </p>
          </div>
        </div>

        {/* ROW 5: Why It Matters & Image 2 */}
        <div className="swiss-cell col-span-12 md:col-span-7 p-8 md:p-12 lg:p-16 flex flex-col border-t border-[var(--border-color)]">
          <div className="swiss-mono text-[10px] uppercase tracking-widest text-[#0047FF] mb-8 pb-4 border-b border-[var(--border-color)] flex justify-between">
            <span>Section 02</span>
            <span>Historical Amnesia</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm leading-relaxed text-gray-600 mb-8">
            <p>
              The erasure of this visual tradition was not accidental; it was the result of a deliberate ideological shift toward algebraic methods and a desire to purge mathematics of anything deemed 'intuitive' or 'unrigorous.' This abstraction successfully consolidated the discipline, but it rendered an entire mode of thought illegible to future generations. The diagrams were quietly excised from the published papers, their generative role hidden behind polished algebraic proofs.
            </p>
            <p>
              This historical amnesia matters acutely today. As we build artificial intelligence systems reliant on statistical pattern matching and formal logic, we are constraining the horizons of machine reasoning to the very symbolic traditions that won the 20th century. By recovering how human mathematical discovery actually occurred—through spatial, visual, and diagrammatic reasoning—we open up new, historically grounded frameworks for what artificial intelligence could be. We are reminded that intelligence is not merely the manipulation of symbols, but the capacity to see structure in space.
            </p>
          </div>
        </div>
        
        <div className="swiss-cell col-span-12 md:col-span-5 relative group overflow-hidden border-t border-[var(--border-color)] border-l md:border-l-[var(--border-color)]">
          <div className="absolute inset-0 bg-[#0047FF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-color"></div>
          <img 
            src="/__mockup/images/topology-chalkboard.png" 
            alt="Lecture-board reconstruction"
            className="w-full h-full min-h-[400px] object-cover grayscale contrast-125 transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-[var(--bg-color)]/90 backdrop-blur-sm p-3 border-t border-[var(--border-color)] swiss-mono text-[10px] uppercase z-20 flex justify-between items-center">
            <span className="font-medium text-[#0047FF]">FIG. 02</span>
            <span className="text-gray-500">Manifold manipulations</span>
          </div>
        </div>

        {/* ROW 6: Pull Quote */}
        <div className="swiss-cell col-span-12 bg-[#141414] text-white p-12 md:p-24 lg:p-32 text-center flex flex-col items-center justify-center">
          <div className="text-[#0047FF] text-6xl md:text-8xl leading-none font-serif mb-6 opacity-80 mt-[-20px]">"</div>
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-medium leading-tight tracking-tight max-w-4xl mx-auto">
            The diagrams were not illustrations of the math; they were the math itself, waiting for an algebra capable of describing them.
          </h3>
        </div>

        {/* ROW 7: Metadata Ledger */}
        <div className="swiss-cell col-span-12 grid grid-cols-1 md:grid-cols-4 gap-[1px] bg-[var(--border-color)]">
          {[
            { label: 'Discipline', value: 'History of Science' },
            { label: 'Period of Focus', value: 'Mid-20th Century' },
            { label: 'Grant Year', value: '2025' },
            { label: 'Output Type', value: 'Archival Reconstruction + Essays' }
          ].map((item, i) => (
            <div key={i} className="bg-[var(--bg-color)] p-6 md:p-8">
              <div className="swiss-mono text-[10px] uppercase tracking-widest text-gray-500 mb-3">{item.label}</div>
              <div className="font-medium text-sm md:text-base text-[#141414]">{item.value}</div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
