import "./_group.css";

export function QuietEditorial() {
  return (
    <div className="quiet-editorial-page">
      <nav className="quiet-editorial-nav">
        <a href="#" className="quiet-editorial-back" onClick={(e) => e.preventDefault()}>
          ← Portfolio
        </a>
      </nav>

      <main className="quiet-editorial-main">
        <header>
          <div className="quiet-editorial-eyebrow">
            <span>Project Dossier</span>
            <span style={{ color: "var(--hair-strong)" }}>—</span>
            <span>2025 Cohort</span>
            <span style={{ color: "var(--hair-strong)" }}>—</span>
            <span style={{ color: "var(--gold)" }}>Active Grant</span>
          </div>

          <h1 className="quiet-editorial-title">Aiden Sagerman</h1>

          <div className="quiet-editorial-tags">
            <span className="quiet-editorial-tag">Artificial Intelligence</span>
            <span className="quiet-editorial-tag">History of Mathematics</span>
          </div>
        </header>

        <div className="quiet-editorial-inquiry">
          "What logic tradition should we resurface for thinking about artificial intelligence?"
        </div>

        <figure className="quiet-editorial-figure">
          <img
            src="/__mockup/images/topology-notebook.png"
            alt="Reconstructed mid-century notebook filled with hand-drawn topological diagrams"
          />
          <figcaption className="quiet-editorial-figcaption">
            Reconstructed working notebook — freehand topological diagrams, c. 1952.
          </figcaption>
        </figure>

        <section className="quiet-editorial-section">
          <h2 className="quiet-editorial-section-title">The Project</h2>
          <div className="quiet-editorial-prose">
            <p>
              Reconstructing how diagrams drove mathematical discovery in twentieth-century topology, 
              recovering a visual reasoning tradition that abstraction has rendered illegible.
            </p>
            <p>
              For decades, the dominant narrative of mathematical progress has been one of increasing abstraction and formalization. In this telling, visual reasoning—diagrams, sketches, and physical intuition—served merely as a pedagogical crutch or an informal heuristic, destined to be replaced by rigorous symbolic logic. This project challenges that narrative by returning to mid-century topology, a period where visual reasoning was not merely illustrative but fundamentally generative.
            </p>
            <p>
              By painstakingly reconstructing the working notebooks and unpublished correspondence of key topologists, this research demonstrates how diagrams functioned as engines of discovery. These visual artifacts were not post-hoc illustrations of theorems already proven, but the very site where mathematical truth was negotiated and established. The project asks us to look again at what the historical record actually shows, rather than what the discipline later claimed it did.
            </p>
          </div>
        </section>

        <section className="quiet-editorial-section">
          <h2 className="quiet-editorial-section-title">Why It Was Lost / Why It Matters</h2>
          <div className="quiet-editorial-prose">
            <p>
              The erasure of this visual tradition was not accidental; it was the result of a deliberate ideological shift toward algebraic methods and a desire to purge mathematics of anything deemed "intuitive" or "unrigorous." This abstraction successfully consolidated the discipline, but it rendered an entire mode of thought illegible to future generations. The diagrams were quietly excised from the published papers, their generative role hidden behind polished algebraic proofs.
            </p>
            <p>
              This historical amnesia matters acutely today. As we build artificial intelligence systems reliant on statistical pattern matching and formal logic, we are constraining the horizons of machine reasoning to the very symbolic traditions that won the 20th century. By recovering how human mathematical discovery actually occurred—through spatial, visual, and diagrammatic reasoning—we open up new, historically grounded frameworks for what artificial intelligence could be. We are reminded that intelligence is not merely the manipulation of symbols, but the capacity to see structure in space.
            </p>
          </div>
          <figure className="quiet-editorial-figure-inset">
            <img
              src="/__mockup/images/topology-chalkboard.png"
              alt="Lecture-board reconstruction of diagrammatic manipulation of manifolds"
            />
            <figcaption className="quiet-editorial-figcaption">
              Lecture-board reconstruction — diagrammatic manipulation of manifolds.
            </figcaption>
          </figure>
        </section>

        <div className="quiet-editorial-quote">
          "The diagrams were not illustrations of the math; they were the math itself, waiting for an algebra capable of describing them."
        </div>

        <section className="quiet-editorial-colophon">
          <div className="quiet-editorial-ledger">
            <div className="quiet-editorial-ledger-item">
              <span className="quiet-editorial-ledger-label">Discipline</span>
              <span className="quiet-editorial-ledger-value">History of Science</span>
            </div>
            <div className="quiet-editorial-ledger-item">
              <span className="quiet-editorial-ledger-label">Period of Focus</span>
              <span className="quiet-editorial-ledger-value">Mid-20th Century</span>
            </div>
            <div className="quiet-editorial-ledger-item">
              <span className="quiet-editorial-ledger-label">Grant Year</span>
              <span className="quiet-editorial-ledger-value">2025</span>
            </div>
            <div className="quiet-editorial-ledger-item">
              <span className="quiet-editorial-ledger-label">Output Type</span>
              <span className="quiet-editorial-ledger-value">Archival Reconstruction + Essays</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
