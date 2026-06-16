import React from "react";
import "./_group.css";

export function SpecimenPlate() {
  return (
    <div className="specimen-plate-wrapper">
      <nav className="specimen-nav">
        <a href="#" onClick={(e) => e.preventDefault()}>
          <span>←</span> Return to Portfolio Collection
        </a>
      </nav>

      <main className="specimen-plate">
        <header className="specimen-header">
          <div className="specimen-eyebrow">
            <span>Project Dossier</span>
            <span>Ref. 2025 Cohort</span>
            <span className="specimen-stamp">Active Grant</span>
          </div>

          <h1 className="specimen-title">Aiden Sagerman</h1>

          <div className="specimen-tags">
            <span className="specimen-tag">Artificial Intelligence</span>
            <span className="specimen-tag">History of Mathematics</span>
          </div>
        </header>

        <div className="specimen-inquiry">
          "What logic tradition should we resurface for thinking about artificial intelligence?"
        </div>

        <figure className="specimen-figure">
          <img
            src="/__mockup/images/topology-notebook.png"
            alt="Reconstructed mid-century notebook, hand-drawn topological diagrams"
          />
          <figcaption className="specimen-figcaption">
            Plate I. Reconstructed working notebook — freehand topological diagrams, c. 1952.
          </figcaption>
        </figure>

        <section className="specimen-section">
          <h2 className="specimen-section-title">I. The Project</h2>
          <div className="specimen-prose">
            <p className="lead">
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

        <section className="specimen-section">
          <h2 className="specimen-section-title">II. Historical Erasure</h2>
          <div className="specimen-prose">
            <p>
              The erasure of this visual tradition was not accidental; it was the result of a deliberate ideological shift toward algebraic methods and a desire to purge mathematics of anything deemed 'intuitive' or 'unrigorous.' This abstraction successfully consolidated the discipline, but it rendered an entire mode of thought illegible to future generations. The diagrams were quietly excised from the published papers, their generative role hidden behind polished algebraic proofs.
            </p>
            <p>
              This historical amnesia matters acutely today. As we build artificial intelligence systems reliant on statistical pattern matching and formal logic, we are constraining the horizons of machine reasoning to the very symbolic traditions that won the 20th century. By recovering how human mathematical discovery actually occurred—through spatial, visual, and diagrammatic reasoning—we open up new, historically grounded frameworks for what artificial intelligence could be. We are reminded that intelligence is not merely the manipulation of symbols, but the capacity to see structure in space.
            </p>
          </div>
        </section>

        <figure className="specimen-figure">
          <img
            src="/__mockup/images/topology-chalkboard.png"
            alt="Lecture-board reconstruction, diagrammatic manipulation of manifolds"
          />
          <figcaption className="specimen-figcaption">
            Plate II. Lecture-board reconstruction — diagrammatic manipulation of manifolds.
          </figcaption>
        </figure>

        <div className="specimen-pullquote">
          "The diagrams were not illustrations of the math; they were the math itself, waiting for an algebra capable of describing them."
        </div>

        <section className="specimen-ledger">
          <div className="specimen-ledger-item">
            <span className="specimen-ledger-label">Discipline</span>
            <span className="specimen-ledger-value">History of Science</span>
          </div>
          <div className="specimen-ledger-item">
            <span className="specimen-ledger-label">Period of Focus</span>
            <span className="specimen-ledger-value">Mid-20th Century</span>
          </div>
          <div className="specimen-ledger-item">
            <span className="specimen-ledger-label">Grant Year</span>
            <span className="specimen-ledger-value">2025</span>
          </div>
          <div className="specimen-ledger-item">
            <span className="specimen-ledger-label">Output Type</span>
            <span className="specimen-ledger-value">Archival Reconstruction + Essays</span>
          </div>
        </section>
      </main>
    </div>
  );
}

export default SpecimenPlate;
