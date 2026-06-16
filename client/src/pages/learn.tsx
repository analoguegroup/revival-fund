import Header from "@/components/Header";

export default function Learn() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="max-w-[1400px] mx-auto" style={{ padding: "15vh 6vw 10vh" }}>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-[8vw] items-start">
          <div className="md:sticky md:top-[20vh]">
            <h2 className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-8" data-testid="text-learn-sidebar">
              Our Mission
            </h2>
          </div>
          <div>
            <h3 className="text-4xl md:text-5xl mb-8 leading-[1.2]" data-testid="text-learn-title">
              Reviving Innovation from the Past
            </h3>

            <div className="space-y-8 text-lg leading-[1.8]">
              <p>
                Some of the most innovative companies have come from promising ideas from the past. This is the case for the current AI explosion, where a team of researchers at Google picked up the neural net architecture which fell out of favor in the 1960s. Similarly, reviving out-of-favor research threads have led to the creation of companies like Moderna, Genentech, Google (and their initial Page Rank algorithm), Illumina, SpaceX, and Palantir.
              </p>

              <p className="text-xl italic text-muted-foreground border-l-2 border-accent pl-8 my-12">
                With The Revival Fund, we are looking for inventors, researchers, scientists and entrepreneurs interested in reviving a dead (or dormant) yet promising research thread from the past that wouldn't typically receive funds through academic funding.
              </p>

              <p>
                If you're interested in reviving the past, we'd love to hear from you. Previous entrepreneurs have received funding to build companies around the impact of structured water in cancer, bioelectricity, fusion, and others.
              </p>

              <h2 className="text-3xl mt-16 mb-6">What We Offer</h2>
              <ul className="space-y-4 list-disc pl-6">
                <li>Funding to explore and develop promising scientific and technical research threads. Unless you already have a company, we start with a grant, with the right to invest in a future round if there is one.</li>
                <li>Mentorship from experienced entrepreneurs and industry experts.</li>
                <li>Access to a network of potential collaborators and investors.</li>
                <li>Resources to help transform academic concepts into viable business models.</li>
                <li>Community of other researchers / entrepreneurs also reviving the past.</li>
              </ul>

              <h2 className="text-3xl mt-16 mb-6">Who We're Looking For</h2>
              <ul className="space-y-4 list-disc pl-6">
                <li>Independent researchers who want to go deeper into their research and start a company around it. Your research does not have to be tied to a specific field, we are open to all areas in the science and technical domains. You also don't have to be attached to an academic lab.</li>
                <li>Curious minds from all backgrounds – scientists, researchers, engineers, entrepreneurs, inventors, and generalists.</li>
                <li>Individuals or teams with a passion for innovation and a hunger for impact.</li>
                <li>Those with a deep appreciation and understanding of past lines of research, and ideas for why it should be revived.</li>
              </ul>

              <h2 className="text-3xl mt-16 mb-6">Requests for Research Threads</h2>
              <ul className="list-none space-y-0">
                {[
                  "Exogenous and endogenous electromagnetic fields in biology.",
                  "Bioelectricity in aging and longevity.",
                  "Role of viruses in chronic diseases like Cancer, Alzheimer's (Dr. Paul Ewald's work).",
                  "Magnetoreception in birds and possibly humans (Quantum biology).",
                  "Biophotonics.",
                  "Association Induction Hypothesis and its implications (Gilbert Ling's work).",
                  "Mae-Wan Ho Liquid Crystalline model.",
                  "The fourth phase of water (Gerlad Pollack's work).",
                  "Mitochondria and its interaction with bioelectricity and or light.",
                  "Isotopic resonance hypothesis (Roman Zubarev's work).",
                  "Cold fusion.",
                  "Making consciousness measurable and testable (Mike Johnson's work).",
                  "Flying cars (See book Where is my Flying Car? for a brief history).",
                ].map((item, i) => (
                  <li key={i} className="py-4 border-t border-border/50 grid grid-cols-[60px_1fr] md:grid-cols-[100px_1fr] gap-4 items-start">
                    <span className="font-serif text-xl text-accent">{String(i + 1).padStart(2, '0')}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="italic mt-8 text-muted-foreground">
                These represent just a fraction of overlooked research ideas — if one excites you, take it as extra validation to dive in, but you don't need to work on these ideas to apply to The Revival Fund.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
