import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import './_group.css';

export function InstituteBlack() {
  return (
    <div className="institute-black min-h-screen pb-32 md:pb-48 text-lg leading-relaxed md:text-xl md:leading-loose">
      <div className="max-w-4xl mx-auto px-6 md:px-12 pt-16 md:pt-32">
        
        {/* SECTION 01 — What We Do */}
        <section className="mb-24 md:mb-40">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="w-full md:w-1/4">
              <h2 className="mono text-xs tracking-[0.2em] uppercase text-[#ff331f] pt-2">01 / What We Do</h2>
            </div>
            <div className="w-full md:w-3/4 space-y-8 text-[1.35rem] md:text-[1.75rem] leading-[1.6]">
              <p>
                We support scholars, experimentalists, and original thinkers to excavate intellectual lineages, clarify claims, and make forgotten or marginalized inquiry legible again.
              </p>
              <p>
                Our work addresses a fundamental problem: valuable research disappears not because it lacks merit, but because it lacks the infrastructure, language, or institutional alignment to survive. We provide that infrastructure.
              </p>
            </div>
          </div>
        </section>

        <div className="hairline-t mb-24 md:mb-40 w-full" />

        {/* SECTION 02 — What We Believe */}
        <section className="mb-24 md:mb-40">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="w-full md:w-1/4">
              <h2 className="mono text-xs tracking-[0.2em] uppercase text-[#ff331f] pt-2">02 / What We Believe</h2>
            </div>
            <div className="w-full md:w-3/4 space-y-16">
              
              <div className="relative pl-12 md:pl-16">
                <span className="mono absolute left-0 top-1 text-sm text-[#888888]">01</span>
                <h3 className="text-xl md:text-2xl font-semibold mb-4">Knowledge is material</h3>
                <p className="text-base md:text-lg text-[#b8b8b3]">
                  Research gets lost through linguistic marginalization, institutional dismissal, unprofitable timing or cultural illegibility. Research needs deliberate preservation.
                </p>
              </div>

              <div className="relative pl-12 md:pl-16">
                <span className="mono absolute left-0 top-1 text-sm text-[#888888]">02</span>
                <h3 className="text-xl md:text-2xl font-semibold mb-4">Discovery is nonlinear</h3>
                <p className="text-base md:text-lg text-[#b8b8b3]">
                  The way knowledge emerges and re-emerges is oftentimes winding, contingent, influenced by shifting relevance. What seemed marginal in one era may prove essential in another. What appeared illegible within one framework may illuminate another.
                </p>
              </div>

              <div className="relative pl-12 md:pl-16">
                <span className="mono absolute left-0 top-1 text-sm text-[#888888]">03</span>
                <h3 className="text-xl md:text-2xl font-semibold mb-4">Form reveals sensibility</h3>
                <p className="text-base md:text-lg text-[#b8b8b3]">
                  Different artifacts reveal different sensibilities. We publish fluidly to work with the form each research project demands, preserving diversity in ways of knowing.
                </p>
              </div>

            </div>
          </div>
        </section>

        <div className="hairline-t mb-24 md:mb-40 w-full" />

        {/* SECTION 03 — What We Support */}
        <section className="mb-24 md:mb-40">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="w-full md:w-1/4">
              <h2 className="mono text-xs tracking-[0.2em] uppercase text-[#ff331f] pt-2">03 / What We Support</h2>
            </div>
            <div className="w-full md:w-3/4">
              <p className="text-[1.35rem] md:text-[1.5rem] leading-[1.6] mb-16">
                We fund projects unlikely to receive institutional support due to:
              </p>

              <div className="space-y-12 mb-20">
                <div className="relative pl-12 md:pl-16">
                  <span className="mono absolute left-0 top-1 text-sm text-[#888888]">01</span>
                  <h3 className="text-lg md:text-xl font-semibold mb-2">Historical discontinuation</h3>
                  <p className="text-base md:text-lg text-[#b8b8b3]">Research delegitimized by shifting paradigms or prematurely abandoned due to funding loss</p>
                </div>
                <div className="relative pl-12 md:pl-16">
                  <span className="mono absolute left-0 top-1 text-sm text-[#888888]">02</span>
                  <h3 className="text-lg md:text-xl font-semibold mb-2">Disciplinary illegibility</h3>
                  <p className="text-base md:text-lg text-[#b8b8b3]">Work that falls between established fields or challenges dominant frameworks</p>
                </div>
                <div className="relative pl-12 md:pl-16">
                  <span className="mono absolute left-0 top-1 text-sm text-[#888888]">03</span>
                  <h3 className="text-lg md:text-xl font-semibold mb-2">Non-traditional outcomes</h3>
                  <p className="text-base md:text-lg text-[#b8b8b3]">Projects producing artifacts beyond conventional academic articles</p>
                </div>
                <div className="relative pl-12 md:pl-16">
                  <span className="mono absolute left-0 top-1 text-sm text-[#888888]">04</span>
                  <h3 className="text-lg md:text-xl font-semibold mb-2">Linguistic or geographic marginalization</h3>
                  <p className="text-base md:text-lg text-[#b8b8b3]">Research published in overlooked languages or cultural contexts</p>
                </div>
                <div className="relative pl-12 md:pl-16">
                  <span className="mono absolute left-0 top-1 text-sm text-[#888888]">05</span>
                  <h3 className="text-lg md:text-xl font-semibold mb-2">Alternative epistemologies</h3>
                  <p className="text-base md:text-lg text-[#b8b8b3]">Archival or experimental work that deepens understanding of alternative cosmologies for science and technology</p>
                </div>
              </div>

              <div className="mb-16">
                <h4 className="mono text-xs tracking-[0.1em] uppercase text-[#888888] mb-8">Types of Projects We Fund, A Non-Exhaustive List</h4>
                <ul className="space-y-4 text-base md:text-lg text-[#e8e8e3]">
                  <li className="flex items-start">
                    <span className="text-[#ff331f] mr-4 block mt-1">—</span>
                    <span>Experiments testing unverified hypotheses from neglected papers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ff331f] mr-4 block mt-1">—</span>
                    <span>Continuing research along promising lines of inquiry that lost institutional support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ff331f] mr-4 block mt-1">—</span>
                    <span>Recovery and curation of unpublished manuscripts, interviews, or proceedings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ff331f] mr-4 block mt-1">—</span>
                    <span>Original analysis examining overlooked research teams, labs, or intellectual traditions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ff331f] mr-4 block mt-1">—</span>
                    <span>Translation and critical editions of historically significant texts in non-dominant languages</span>
                  </li>
                </ul>
              </div>

              <div className="border border-[#2a2a2a] p-8 md:p-12">
                <div className="mono text-xs tracking-[0.2em] uppercase text-[#ff331f] mb-4">Grant Allocation</div>
                <div className="text-xl md:text-2xl text-white">
                  Generally $4,000–$10,000 USD, up to $25,000 in special cases.
                </div>
              </div>

            </div>
          </div>
        </section>

        <div className="hairline-t mb-24 md:mb-40 w-full" />

        {/* SECTION 04 — Our Position */}
        <section className="mb-24 md:mb-40">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="w-full md:w-1/4">
              <h2 className="mono text-xs tracking-[0.2em] uppercase text-[#ff331f] pt-2">04 / Ecosystem</h2>
            </div>
            <div className="w-full md:w-3/4 space-y-8 text-[1.15rem] md:text-[1.35rem] leading-[1.8] text-[#b8b8b3]">
              <p>
                The goal of The Revival Fund is two-fold: to excavate forgotten or marginalized knowledge, and to model alternative approaches to knowledge discovery itself.
              </p>
              <p>
                We complement institutional scholarship by funding and publishing work that cannot flourish within institutional constraints. We welcome academics and non-academics alike. The only criteria: relentless intellectual obsession and openness to unfamiliar ideas, methodologies, and collaborations.
              </p>
              <p>
                By making diverse approaches to inquiry tangible and public, The Revival Fund creates reference points—provocations that expand what seems possible in a wide range of inquiries: scientific research, artistic creation, technological innovation, or humanistic investigation.
              </p>
              <p className="text-[#e8e8e3]">
                The Revival Fund builds toward an emerging ecosystem of open, experimental publishing where unconventional forms of inquiry can flourish and important ideas can find their way back into circulation.
              </p>
            </div>
          </div>
        </section>

        <div className="hairline-t mb-24 md:mb-40 w-full" />

        {/* SECTION 05 — Further Reading */}
        <section className="mb-24 md:mb-40">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="w-full md:w-1/4">
              <h2 className="mono text-xs tracking-[0.2em] uppercase text-[#ff331f] pt-2">05 / Further Reading</h2>
            </div>
            <div className="w-full md:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                <a href="https://www.palladiummag.com/2025/08/22/the-case-for-crazy-philanthropy/" target="_blank" rel="noreferrer" className="group block border border-[#2a2a2a] p-8 hover:border-[#ff331f] transition-colors duration-300">
                  <span className="mono text-xs tracking-widest uppercase text-[#888888] block mb-4 group-hover:text-[#ff331f] transition-colors">Palladium Magazine</span>
                  <h3 className="text-xl md:text-2xl mb-6 group-hover:text-white">"The Case for Crazy Philanthropy"</h3>
                  <div className="flex items-center text-[#ff331f] mono text-xs uppercase tracking-widest">
                    <span>Read Article</span>
                    <ArrowUpRight className="ml-2 w-4 h-4" />
                  </div>
                </a>

                <a href="https://goodscience.substack.com/p/venture-capital-has-lessons-for-government" target="_blank" rel="noreferrer" className="group block border border-[#2a2a2a] p-8 hover:border-[#ff331f] transition-colors duration-300">
                  <span className="mono text-xs tracking-widest uppercase text-[#888888] block mb-4 group-hover:text-[#ff331f] transition-colors">Good Science Project</span>
                  <h3 className="text-xl md:text-2xl mb-6 group-hover:text-white">"Venture Capital Has Lessons for Government"</h3>
                  <div className="flex items-center text-[#ff331f] mono text-xs uppercase tracking-widest">
                    <span>Read Article</span>
                    <ArrowUpRight className="ml-2 w-4 h-4" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 06 — Colophon */}
        <section className="pt-24 hairline-t">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="w-full md:w-1/4">
              <h2 className="mono text-xs tracking-[0.2em] uppercase text-[#888888] pt-1">Colophon</h2>
            </div>
            <div className="w-full md:w-3/4 text-sm md:text-base text-[#888888] leading-relaxed max-w-2xl">
              <p className="mb-6">
                The headings on this site are set in <i className="italic">Mean Hand</i>, a typeface by Anna Zhang created from the average of hundreds of thousands of handwriting samples. It is built from 814,255 handwritten characters collected by the U.S. government in the early 1990s to automate Census form processing. Each letter is constructed by stacking thousands of samples and applying a threshold — a mark appears only if that proportion of samples placed ink there. What resembles handwriting was written by no one: a distribution made visible as type.
              </p>
              <a href="https://portfolio.anna-zhang.com/projects/mean-hand" target="_blank" rel="noreferrer" className="mono text-xs tracking-widest uppercase text-[#ff331f] hover:text-white inline-flex items-center">
                <span>Mean Hand by Anna Zhang</span>
                <ArrowUpRight className="ml-2 w-3 h-3" />
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}