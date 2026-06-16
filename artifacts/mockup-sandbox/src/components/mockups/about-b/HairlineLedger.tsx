import React from "react";
import { ArrowUpRight } from "lucide-react";
import "./_group.css";

export function HairlineLedger() {
  return (
    <div className="hairline-ledger min-h-screen w-full selection:bg-[#D9381E] selection:text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 lg:py-32">
        
        {/* SECTION 01 — What We Do */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_3fr] gap-8 mb-32 relative">
          <div className="border-t border-hairline pt-4">
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground/60 block mb-2">Section 01</span>
            <h2 className="font-mono text-sm uppercase tracking-widest font-bold">What We Do</h2>
          </div>
          <div className="border-t border-hairline pt-4">
            <div className="text-xl md:text-2xl lg:text-3xl font-light leading-snug space-y-8 max-w-4xl">
              <p>
                We support scholars, experimentalists, and original thinkers to excavate intellectual lineages, clarify claims, and make forgotten or marginalized inquiry legible again.
              </p>
              <p>
                Our work addresses a fundamental problem: valuable research disappears not because it lacks merit, but because it lacks the infrastructure, language, or institutional alignment to survive. We provide that infrastructure.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 02 — What We Believe */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_3fr] gap-8 mb-32 relative">
          <div className="border-t border-hairline pt-4">
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground/60 block mb-2">Section 02</span>
            <h2 className="font-mono text-sm uppercase tracking-widest font-bold">What We Believe</h2>
          </div>
          <div className="border-t border-hairline pt-4">
            <div className="flex flex-col">
              <div className="grid grid-cols-1 sm:grid-cols-[60px_1fr] md:grid-cols-[80px_1fr_2fr] gap-6 py-8 border-b border-hairline items-start group hover:bg-black/[0.02] transition-colors -mx-4 px-4 sm:mx-0 sm:px-0">
                <div className="font-mono text-sm pt-1 accent font-bold">01</div>
                <div className="font-mono text-sm uppercase tracking-wider pt-1">Knowledge is material</div>
                <div className="text-lg leading-relaxed text-black/80">
                  Research gets lost through linguistic marginalization, institutional dismissal, unprofitable timing or cultural illegibility. Research needs deliberate preservation.
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-[60px_1fr] md:grid-cols-[80px_1fr_2fr] gap-6 py-8 border-b border-hairline items-start group hover:bg-black/[0.02] transition-colors -mx-4 px-4 sm:mx-0 sm:px-0">
                <div className="font-mono text-sm pt-1 accent font-bold">02</div>
                <div className="font-mono text-sm uppercase tracking-wider pt-1">Discovery is nonlinear</div>
                <div className="text-lg leading-relaxed text-black/80">
                  The way knowledge emerges and re-emerges is oftentimes winding, contingent, influenced by shifting relevance. What seemed marginal in one era may prove essential in another. What appeared illegible within one framework may illuminate another.
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-[60px_1fr] md:grid-cols-[80px_1fr_2fr] gap-6 py-8 border-b border-hairline items-start group hover:bg-black/[0.02] transition-colors -mx-4 px-4 sm:mx-0 sm:px-0">
                <div className="font-mono text-sm pt-1 accent font-bold">03</div>
                <div className="font-mono text-sm uppercase tracking-wider pt-1">Form reveals sensibility</div>
                <div className="text-lg leading-relaxed text-black/80">
                  Different artifacts reveal different sensibilities. We publish fluidly to work with the form each research project demands, preserving diversity in ways of knowing.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 03 — What We Support */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_3fr] gap-8 mb-32 relative">
          <div className="border-t border-hairline pt-4">
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground/60 block mb-2">Section 03</span>
            <h2 className="font-mono text-sm uppercase tracking-widest font-bold">What We Support</h2>
          </div>
          <div className="border-t border-hairline pt-4">
            <div className="text-xl md:text-2xl font-light mb-12">
              We fund projects unlikely to receive institutional support due to:
            </div>
            
            <div className="flex flex-col mb-16">
              {[
                { num: "01", title: "Historical discontinuation", desc: "Research delegitimized by shifting paradigms or prematurely abandoned due to funding loss" },
                { num: "02", title: "Disciplinary illegibility", desc: "Work that falls between established fields or challenges dominant frameworks" },
                { num: "03", title: "Non-traditional outcomes", desc: "Projects producing artifacts beyond conventional academic articles" },
                { num: "04", title: "Linguistic or geographic marginalization", desc: "Research published in overlooked languages or cultural contexts" },
                { num: "05", title: "Alternative epistemologies", desc: "Archival or experimental work that deepens understanding of alternative cosmologies for science and technology" }
              ].map((item, i) => (
                <div key={item.num} className="grid grid-cols-1 sm:grid-cols-[60px_1fr] md:grid-cols-[80px_1fr_2fr] gap-6 py-6 border-b border-hairline items-start group hover:bg-black/[0.02] transition-colors -mx-4 px-4 sm:mx-0 sm:px-0">
                  <div className="font-mono text-sm pt-1 text-black/40 group-hover:text-black transition-colors">{item.num}</div>
                  <div className="font-mono text-sm uppercase tracking-wider pt-1">{item.title}</div>
                  <div className="text-lg leading-relaxed text-black/80">{item.desc}</div>
                </div>
              ))}
            </div>

            <div className="mb-12">
              <h3 className="font-mono text-sm uppercase tracking-widest font-bold mb-8">Types of Projects We Fund, A Non-Exhaustive List</h3>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start">
                  <span className="font-mono text-[#D9381E] mr-4 pt-1">*</span>
                  <span>Experiments testing unverified hypotheses from neglected papers</span>
                </li>
                <li className="flex items-start">
                  <span className="font-mono text-[#D9381E] mr-4 pt-1">*</span>
                  <span>Continuing research along promising lines of inquiry that lost institutional support</span>
                </li>
                <li className="flex items-start">
                  <span className="font-mono text-[#D9381E] mr-4 pt-1">*</span>
                  <span>Recovery and curation of unpublished manuscripts, interviews, or proceedings</span>
                </li>
                <li className="flex items-start">
                  <span className="font-mono text-[#D9381E] mr-4 pt-1">*</span>
                  <span>Original analysis examining overlooked research teams, labs, or intellectual traditions</span>
                </li>
                <li className="flex items-start">
                  <span className="font-mono text-[#D9381E] mr-4 pt-1">*</span>
                  <span>Translation and critical editions of historically significant texts in non-dominant languages</span>
                </li>
              </ul>
            </div>

            <div className="border border-hairline p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#D9381E]" />
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground/60 mb-2">Grant Allocation</div>
              <div className="text-xl md:text-2xl font-light">
                Generally $4,000–$10,000 USD, up to $25,000 in special cases.
              </div>
            </div>

          </div>
        </div>

        {/* SECTION 04 — Our Position in the Knowledge Ecosystem */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_3fr] gap-8 mb-32 relative">
          <div className="border-t border-hairline pt-4">
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground/60 block mb-2">Section 04</span>
            <h2 className="font-mono text-sm uppercase tracking-widest font-bold">Our Position in the Knowledge Ecosystem</h2>
          </div>
          <div className="border-t border-hairline pt-4">
            <div className="text-lg md:text-xl font-light leading-relaxed space-y-6 max-w-3xl">
              <p>
                The goal of The Revival Fund is two-fold: to excavate forgotten or marginalized knowledge, and to model alternative approaches to knowledge discovery itself.
              </p>
              <p>
                We complement institutional scholarship by funding and publishing work that cannot flourish within institutional constraints. We welcome academics and non-academics alike. The only criteria: relentless intellectual obsession and openness to unfamiliar ideas, methodologies, and collaborations.
              </p>
              <p>
                By making diverse approaches to inquiry tangible and public, The Revival Fund creates reference points—provocations that expand what seems possible in a wide range of inquiries: scientific research, artistic creation, technological innovation, or humanistic investigation.
              </p>
              <p>
                The Revival Fund builds toward an emerging ecosystem of open, experimental publishing where unconventional forms of inquiry can flourish and important ideas can find their way back into circulation.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 05 — Further Reading */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_3fr] gap-8 mb-32 relative">
          <div className="border-t border-hairline pt-4">
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground/60 block mb-2">Section 05</span>
            <h2 className="font-mono text-sm uppercase tracking-widest font-bold">Further Reading</h2>
          </div>
          <div className="border-t border-hairline pt-4">
            <div className="flex flex-col">
              <a 
                href="https://www.palladiummag.com/2025/08/22/the-case-for-crazy-philanthropy/" 
                target="_blank" 
                rel="noreferrer"
                className="group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-hairline hover:bg-[#D9381E] hover:text-white transition-colors -mx-4 px-4 sm:mx-0 sm:px-4"
              >
                <div className="text-xl md:text-2xl font-light mb-2 md:mb-0 pr-8 group-hover:italic transition-all">
                  "The Case for Crazy Philanthropy"
                </div>
                <div className="flex items-center gap-4 text-black/60 group-hover:text-white/80 transition-colors">
                  <span className="font-mono text-sm uppercase tracking-wider">Palladium Magazine</span>
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </a>
              
              <a 
                href="https://goodscience.substack.com/p/venture-capital-has-lessons-for-government" 
                target="_blank" 
                rel="noreferrer"
                className="group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-hairline hover:bg-[#D9381E] hover:text-white transition-colors -mx-4 px-4 sm:mx-0 sm:px-4"
              >
                <div className="text-xl md:text-2xl font-light mb-2 md:mb-0 pr-8 group-hover:italic transition-all">
                  "Venture Capital Has Lessons for Government"
                </div>
                <div className="flex items-center gap-4 text-black/60 group-hover:text-white/80 transition-colors">
                  <span className="font-mono text-sm uppercase tracking-wider">Good Science Project</span>
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* SECTION 06 — Colophon */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_3fr] gap-8 mt-48 pb-12 relative">
          <div className="border-t border-hairline pt-4">
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground/60 block mb-2">Section 06</span>
            <h2 className="font-mono text-sm uppercase tracking-widest font-bold">Colophon</h2>
          </div>
          <div className="border-t border-hairline pt-4">
            <div className="text-sm leading-relaxed text-black/60 max-w-2xl font-mono">
              <p className="mb-6">
                The headings on this site are set in <i>Mean Hand</i>, a typeface by Anna Zhang created from the average of hundreds of thousands of handwriting samples. It is built from 814,255 handwritten characters collected by the U.S. government in the early 1990s to automate Census form processing. Each letter is constructed by stacking thousands of samples and applying a threshold — a mark appears only if that proportion of samples placed ink there. What resembles handwriting was written by no one: a distribution made visible as type.
              </p>
              <a 
                href="https://portfolio.anna-zhang.com/projects/mean-hand"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-[#D9381E] transition-colors uppercase tracking-widest border-b border-black/20 hover:border-[#D9381E] pb-1"
              >
                Mean Hand by Anna Zhang <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
