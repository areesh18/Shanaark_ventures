import { Link } from "react-router-dom";

// Data meticulously mapped from the Project Document
const CORRIDOR_PILLARS = [
  {
    number: "01",
    title: "Investment Facilitation",
    description: "Helping investors from India identify high-yield portfolios and strategic assets to invest in across Suriname and Guyana.",
    tags: ["Asset Identification", "Capital Deployment", "Risk Assessment"]
  },
  {
    number: "02",
    title: "Trade Partnerships",
    description: "Helping businesses from Suriname and Guyana find reliable trading, manufacturing, and supply chain partners directly from India.",
    tags: ["Supply Chain", "Vendor Matching", "Import/Export Advisory"]
  },
  {
    number: "03",
    title: "Talent Sourcing",
    description: "Assisting companies and businesses from Suriname and Guyana to interview, select, and recruit top-tier technical and managerial manpower from India.",
    tags: ["Executive Search", "Technical Recruitment", "Interview Frameworks"]
  }
];

const Caribbean = () => {
  return (
    <div className="min-h-screen bg-(--color-bg-primary) pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. HERO SECTION (Asymmetrical & Editorial) */}
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-start border-b border-(--color-border) pb-24 mb-16 animate-fade-up">
          <div className="md:w-3/5">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-(--color-bg-secondary) border border-(--color-border) mb-8">
              <span className="text-xs font-medium text-(--color-text-secondary) uppercase tracking-widest">
                Exclusive Cross-Border Initiative
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-(--color-text-primary) leading-[1.05]">
              Bridging opportunities between India and the <span className="font-serif-italic font-normal text-slate-500">Caribbean.</span>
            </h1>
          </div>
          
          <div className="md:w-2/5 md:pt-16">
            <p className="text-xl font-light tracking-tight text-(--color-text-secondary) leading-relaxed">
              We facilitate seamless cross-border business by connecting ambitious investors, scaling businesses, and elite talent across <span className="font-medium text-(--color-text-primary)">India, Suriname, and Guyana.</span>
            </p>
          </div>
        </div>

        {/* 2. THE THREE PILLARS (Editorial List Layout) */}
        <div className="w-full flex flex-col mb-32">
          {CORRIDOR_PILLARS.map((pillar, index) => (
            <div 
              key={pillar.number}
              className={`group flex flex-col md:flex-row items-start md:items-center py-16 border-b border-(--color-border) hover:bg-(--color-bg-secondary) transition-colors duration-500 px-6 -mx-6 animate-fade-up delay-${(index + 1) * 100}`}
            >
              
              {/* Massive Numeric Indicator */}
              <div className="md:w-1/5 mb-6 md:mb-0">
                <span className="text-6xl md:text-8xl font-light tracking-tighter text-slate-200 group-hover:text-(--color-dark) transition-colors duration-500">
                  {pillar.number}
                </span>
              </div>

              {/* Title & Tags */}
              <div className="md:w-2/5 pr-8 mb-6 md:mb-0">
                <h2 className="text-3xl font-medium tracking-tight text-(--color-text-primary) mb-6">
                  {pillar.title}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {pillar.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white border border-(--color-border) rounded-full text-xs font-medium tracking-tight text-(--color-text-secondary)">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="md:w-2/5 pl-0 md:pl-8 md:border-l border-(--color-border)">
                <p className="text-lg font-light tracking-tight text-(--color-text-secondary) leading-relaxed">
                  {pillar.description}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* 3. CONVERSION PANEL (High Contrast Dark Block) */}
        <div className="w-full bg-(--color-dark) rounded-[2.5rem] p-10 md:p-20 overflow-hidden relative animate-fade-up delay-400 border border-slate-800 shadow-xl">
          
          {/* Subtle Ambient Glow for depth */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-(--color-accent) opacity-[0.08] blur-[120px] rounded-full pointer-events-none"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            
            <div className="md:w-2/3 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
                Ready to expand your <br className="hidden md:block"/>
                <span className="font-serif-italic font-normal text-slate-300">global footprint?</span>
              </h2>
              <p className="text-lg font-light tracking-tight text-(--color-footer-text) max-w-xl">
                Secure a strategic advantage. Let's discuss your investment parameters, supply chain needs, or talent sourcing requirements.
              </p>
            </div>

            <div className="md:w-1/3 flex justify-center md:justify-end shrink-0">
              <Link 
                to="/contact" 
                className="group flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white text-(--color-dark) font-medium hover:bg-slate-100 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Book a Strategy Call
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Caribbean;