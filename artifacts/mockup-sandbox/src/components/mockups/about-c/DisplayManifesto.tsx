import React from "react";
import "./_group.css";
import { ArrowUpRight } from "lucide-react";

export function DisplayManifesto() {
  return (
    <div className="about-c-root w-full overflow-x-hidden pt-24 pb-48">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 flex flex-col gap-32 md:gap-48">
        
        {/* SECTION 01 — What We Do */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-3">
            <div className="about-c-mono text-sm text-[var(--c-muted)] sticky top-24">
              <span className="about-c-number mr-4">01</span> What We Do
            </div>
          </div>
          <div className="md:col-span-8 flex flex-col gap-12">
            <h2 className="about-c-display text-5xl md:text-7xl lg:text-8xl max-w-4xl">
              We support scholars, experimentalists, and original thinkers to excavate intellectual lineages, clarify claims, and make forgotten or marginalized inquiry legible again.
            </h2>
            <div className="w-24 h-[2px] bg-[var(--c-accent)]"></div>
            <p className="about-c-reading text-[var(--c-muted)] max-w-3xl">
              Our work addresses a fundamental problem: valuable research disappears not because it lacks merit, but because it lacks the infrastructure, language, or institutional alignment to survive. We provide that infrastructure.
            </p>
          </div>
        </section>

        <div className="about-c-rule w-full"></div>

        {/* SECTION 02 — What We Believe */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-3">
            <div className="about-c-mono text-sm text-[var(--c-muted)] sticky top-24">
              <span className="about-c-number mr-4">02</span> What We Believe
            </div>
          </div>
          <div className="md:col-span-9 flex flex-col gap-24">
            {[
              {
                num: "01",
                title: "Knowledge is material",
                body: "Research gets lost through linguistic marginalization, institutional dismissal, unprofitable timing or cultural illegibility. Research needs deliberate preservation.",
              },
              {
                num: "02",
                title: "Discovery is nonlinear",
                body: "The way knowledge emerges and re-emerges is oftentimes winding, contingent, influenced by shifting relevance. What seemed marginal in one era may prove essential in another. What appeared illegible within one framework may illuminate another.",
              },
              {
                num: "03",
                title: "Form reveals sensibility",
                body: "Different artifacts reveal different sensibilities. We publish fluidly to work with the form each research project demands, preserving diversity in ways of knowing.",
              }
            ].map((tenet, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
                <div className="about-c-giant-number shrink-0">{tenet.num}</div>
                <div className="pt-4 md:pt-12 flex flex-col gap-6 max-w-2xl">
                  <h3 className="about-c-display text-4xl md:text-5xl">{tenet.title}</h3>
                  <p className="text-lg md:text-xl font-light leading-relaxed text-[var(--c-muted)]">
                    {tenet.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="about-c-rule w-full"></div>

        {/* SECTION 03 — What We Support */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-3">
            <div className="about-c-mono text-sm text-[var(--c-muted)] sticky top-24">
              <span className="about-c-number mr-4">03</span> What We Support
            </div>
          </div>
          <div className="md:col-span-9 flex flex-col gap-24">
            <div className="about-c-reading max-w-3xl">
              We fund projects unlikely to receive institutional support due to:
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              {[
                {
                  num: "01",
                  title: "Historical discontinuation",
                  body: "Research delegitimized by shifting paradigms or prematurely abandoned due to funding loss"
                },
                {
                  num: "02",
                  title: "Disciplinary illegibility",
                  body: "Work that falls between established fields or challenges dominant frameworks"
                },
                {
                  num: "03",
                  title: "Non-traditional outcomes",
                  body: "Projects producing artifacts beyond conventional academic articles"
                },
                {
                  num: "04",
                  title: "Linguistic or geographic marginalization",
                  body: "Research published in overlooked languages or cultural contexts"
                },
                {
                  num: "05",
                  title: "Alternative epistemologies",
                  body: "Archival or experimental work that deepens understanding of alternative cosmologies for science and technology"
                }
              ].map((criteria, idx) => (
                <div key={idx} className="flex flex-col gap-4 border-l-2 border-[var(--c-accent)] pl-6">
                  <div className="about-c-mono text-sm text-[var(--c-accent)]">{criteria.num}</div>
                  <h4 className="about-c-display text-3xl">{criteria.title}</h4>
                  <p className="font-light text-[var(--c-muted)] leading-relaxed">
                    {criteria.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-16 about-c-rule">
              <h4 className="about-c-mono text-sm mb-12 text-[var(--c-muted)]">Types of Projects We Fund, A Non-Exhaustive List</h4>
              <ul className="flex flex-col gap-6">
                {[
                  "Experiments testing unverified hypotheses from neglected papers",
                  "Continuing research along promising lines of inquiry that lost institutional support",
                  "Recovery and curation of unpublished manuscripts, interviews, or proceedings",
                  "Original analysis examining overlooked research teams, labs, or intellectual traditions",
                  "Translation and critical editions of historically significant texts in non-dominant languages"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-6 items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--c-accent)] mt-2.5 shrink-0"></div>
                    <span className="text-xl md:text-2xl font-light leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[var(--c-accent)] text-white p-8 md:p-16 flex flex-col gap-6 mt-8">
              <div className="about-c-mono text-sm opacity-80">Grant Allocation</div>
              <div className="about-c-display text-5xl md:text-7xl">
                Generally $4,000–$10,000 USD, up to $25,000 in special cases.
              </div>
            </div>
          </div>
        </section>

        <div className="about-c-rule w-full"></div>

        {/* SECTION 04 — Our Position */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-3">
            <div className="about-c-mono text-sm text-[var(--c-muted)] sticky top-24">
              <span className="about-c-number mr-4">04</span> Ecosystem
            </div>
          </div>
          <div className="md:col-span-8 flex flex-col gap-10">
            <p className="about-c-reading">
              The goal of The Revival Fund is two-fold: to excavate forgotten or marginalized knowledge, and to model alternative approaches to knowledge discovery itself.
            </p>
            <p className="about-c-reading text-[var(--c-muted)]">
              We complement institutional scholarship by funding and publishing work that cannot flourish within institutional constraints. We welcome academics and non-academics alike. The only criteria: relentless intellectual obsession and openness to unfamiliar ideas, methodologies, and collaborations.
            </p>
            <p className="about-c-reading text-[var(--c-muted)]">
              By making diverse approaches to inquiry tangible and public, The Revival Fund creates reference points—provocations that expand what seems possible in a wide range of inquiries: scientific research, artistic creation, technological innovation, or humanistic investigation.
            </p>
            <p className="about-c-reading text-[var(--c-muted)]">
              The Revival Fund builds toward an emerging ecosystem of open, experimental publishing where unconventional forms of inquiry can flourish and important ideas can find their way back into circulation.
            </p>
          </div>
        </section>

        <div className="about-c-rule w-full"></div>

        {/* SECTION 05 — Further Reading */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-3">
            <div className="about-c-mono text-sm text-[var(--c-muted)]">
              <span className="about-c-number mr-4">05</span> Further Reading
            </div>
          </div>
          <div className="md:col-span-9 flex flex-col border-t border-[var(--c-border)]">
            {[
              {
                title: "The Case for Crazy Philanthropy",
                source: "Palladium Magazine",
                href: "https://www.palladiummag.com/2025/08/22/the-case-for-crazy-philanthropy/"
              },
              {
                title: "Venture Capital Has Lessons for Government",
                source: "Good Science Project",
                href: "https://goodscience.substack.com/p/venture-capital-has-lessons-for-government"
              }
            ].map((link, idx) => (
              <a 
                key={idx}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col md:flex-row md:items-center justify-between py-12 border-b border-[var(--c-border)] hover:bg-[var(--c-accent)] hover:text-white transition-colors duration-300 px-6 -mx-6 md:px-8 md:-mx-8"
              >
                <div className="flex flex-col gap-3">
                  <div className="about-c-mono text-xs opacity-70 group-hover:opacity-100">{link.source}</div>
                  <h4 className="about-c-display text-4xl md:text-5xl group-hover:translate-x-4 transition-transform duration-500 ease-out">{link.title}</h4>
                </div>
                <div className="mt-6 md:mt-0 opacity-0 group-hover:opacity-100 transform -translate-x-8 group-hover:translate-x-0 transition-all duration-500">
                  <ArrowUpRight className="w-12 h-12" strokeWidth={1} />
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* SECTION 06 — Colophon */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 pt-32">
          <div className="md:col-span-3"></div>
          <div className="md:col-span-6 flex flex-col gap-8">
            <p className="text-sm leading-relaxed text-[var(--c-muted)]">
              The headings on this site are set in <i className="font-serif italic text-[var(--c-fg)]">Mean Hand</i>, a typeface by Anna Zhang created from the average of hundreds of thousands of handwriting samples. It is built from 814,255 handwritten characters collected by the U.S. government in the early 1990s to automate Census form processing. Each letter is constructed by stacking thousands of samples and applying a threshold — a mark appears only if that proportion of samples placed ink there. What resembles handwriting was written by no one: a distribution made visible as type.
            </p>
            <div>
              <a 
                href="https://portfolio.anna-zhang.com/projects/mean-hand"
                target="_blank"
                rel="noreferrer"
                className="about-c-mono text-xs pb-1 border-b border-[var(--c-muted)] hover:text-[var(--c-accent)] hover:border-[var(--c-accent)] transition-colors inline-flex items-center gap-2"
              >
                Mean Hand by Anna Zhang <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
