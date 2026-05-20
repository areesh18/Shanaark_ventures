import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MARKET_DATA = {
  suriname: {
    id: "suriname",
    name: "Suriname",
    description: "Our comprehensive operational hub serving the Caribbean and South American markets.",
    categories: {
      marketing: [
        "Graphic Design", "SEO", "Branding Kit Design", "Facebook Marketing",
        "TikTok Marketing", "Marketing Management", "Corporate Communication", "Web Development"
      ],
      consulting: [
        "Caribbean India Corridor", "Business Advisory", "CEO Advisory", "Marketing and Sales Training"
      ]
    }
  },
  india: {
    id: "india",
    name: "India",
    description: "Our strategic delivery and talent sourcing center driving global digital execution.",
    categories: {
      marketing: ["Web Design", "SEO", "Facebook Marketing"],
      consulting: ["Caribbean India Corridor", "CEO Advisory"]
    }
  },
  netherlands: {
    id: "netherlands",
    name: "The Netherlands",
    description: "Digital excellence and marketing execution tailored for European markets.",
    categories: {
      marketing: ["Web Design", "SEO", "Facebook Marketing"],
      consulting: []
    }
  }
};

const SERVICE_ICONS = [
  // Bar chart rising
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20v-6M6 20V10M18 20V4"/></svg>,
  // Search
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>,
  // Palette
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>,
  // Globe
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
  // Megaphone
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 11 19-9-9 19-2-8-8-2z"/></svg>,
  // Layers
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="m22 12-8.57 3.91a2 2 0 0 1-1.66 0L3 12"/><path d="m22 17-8.57 3.91a2 2 0 0 1-1.66 0L3 17"/></svg>,
  // Message
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
  // Code
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
];

const Markets = () => {
  const [activeMarket, setActiveMarket] = useState("suriname");
  const [activeCategory, setActiveCategory] = useState("marketing");

  const currentMarket = MARKET_DATA[activeMarket];
  const hasConsulting = currentMarket.categories.consulting.length > 0;

  useEffect(() => {
    if (!hasConsulting && activeCategory === "consulting") {
      setActiveCategory("marketing");
    }
  }, [activeMarket, hasConsulting, activeCategory]);

  const services = currentMarket.categories[activeCategory];

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] pt-24 sm:pt-32 pb-24 sm:pb-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        {/* ── 1. HEADER ───────────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 animate-fade-up">
          <h1 className="text-[2.6rem] leading-[1.05] sm:text-6xl md:text-7xl font-medium tracking-tighter text-[var(--color-text-primary)] mb-4 sm:mb-6">
            Global{" "}
            <span className="font-serif-italic font-normal text-slate-500">
              Markets.
            </span>
          </h1>
          <p className="text-base sm:text-lg font-light tracking-tight text-[var(--color-text-secondary)] leading-relaxed px-2 sm:px-0">
            Tailored solutions across three continents. Select a region below
            to explore our localized service offerings and capabilities.
          </p>
        </div>

        {/* ── 2. MARKET SWITCHER ──────────────────────────────── */}
        <div className="flex justify-center mb-10 sm:mb-16 animate-fade-up delay-100">
          <div className="inline-flex p-1.5 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-full shadow-sm w-full sm:w-auto">
            {Object.values(MARKET_DATA).map((market) => (
              <button
                key={market.id}
                onClick={() => setActiveMarket(market.id)}
                className={`flex-1 sm:flex-none relative px-4 sm:px-8 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-medium tracking-tight transition-all duration-300 whitespace-nowrap ${
                  activeMarket === market.id
                    ? "bg-[var(--color-dark)] text-white shadow-md"
                    : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                }`}
              >
                {market.name}
              </button>
            ))}
          </div>
        </div>

        {/* ── 3. DYNAMIC CONTENT ──────────────────────────────── */}
        <div className="animate-fade-up delay-200" key={activeMarket}>

          {/* Market title + description */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-medium text-[var(--color-text-primary)] tracking-tight mb-1.5 sm:mb-2">
              Available in {currentMarket.name}
            </h2>
            <p className="text-sm font-light text-[var(--color-text-secondary)] tracking-tight max-w-sm mx-auto leading-relaxed">
              {currentMarket.description}
            </p>
          </div>

          {/* ── Category tabs ── */}
          <div className="flex justify-center items-center gap-6 sm:gap-8 border-b border-[var(--color-border)] mb-8 sm:mb-12">
            <button
              onClick={() => setActiveCategory("marketing")}
              className={`pb-4 text-xs sm:text-sm font-medium tracking-wide transition-all relative whitespace-nowrap ${
                activeCategory === "marketing"
                  ? "text-[var(--color-text-primary)]"
                  : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
              }`}
            >
              Marketing & Comm
              {activeCategory === "marketing" && (
                <span className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-[var(--color-dark)] rounded-t-full" />
              )}
            </button>

            {hasConsulting && (
              <button
                onClick={() => setActiveCategory("consulting")}
                className={`pb-4 text-xs sm:text-sm font-medium tracking-wide transition-all relative whitespace-nowrap ${
                  activeCategory === "consulting"
                    ? "text-[var(--color-text-primary)]"
                    : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                }`}
              >
                Business Consulting
                {activeCategory === "consulting" && (
                  <span className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-[var(--color-dark)] rounded-t-full" />
                )}
              </button>
            )}
          </div>

          {/* ── Service cards grid ── */}
          {services.length > 0 ? (
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {services.map((service, index) => (
                <div
                  key={service}
                  className="group p-5 sm:p-6 rounded-[1.25rem] sm:rounded-[1.5rem] bg-white border border-[var(--color-border)] hover:border-[var(--color-dark)]/20 hover:shadow-lg transition-all duration-300 flex flex-col justify-between min-h-[130px] sm:min-h-[148px]"
                  style={{ animationDelay: `${index * 40}ms` }}
                >
                  <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-[var(--color-bg-secondary)] border border-[var(--color-border)] flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:bg-[var(--color-accent)]/10 group-hover:border-[var(--color-accent)]/30 transition-all duration-300 text-[var(--color-text-primary)] shrink-0">
                    {SERVICE_ICONS[index % SERVICE_ICONS.length]}
                  </div>
                  <h3 className="text-sm sm:text-base font-medium text-[var(--color-text-primary)] tracking-tight leading-snug">
                    {service}
                  </h3>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 sm:py-20 border border-dashed border-[var(--color-border)] rounded-[1.5rem] sm:rounded-[2rem] bg-[var(--color-bg-secondary)]">
              <p className="text-[var(--color-text-secondary)] font-light text-sm">
                No services currently listed in this category.
              </p>
            </div>
          )}
        </div>

        {/* ── 4. CROSS-LINK CTA ────────────────────────────────── */}
        <div className="mt-20 sm:mt-32 pt-12 sm:pt-16 border-t border-[var(--color-border)] text-center animate-fade-up delay-300">
          <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-[var(--color-text-primary)] mb-3 sm:mb-4">
            Want to learn more about a specific service?
          </h3>
          <p className="text-[var(--color-text-secondary)] font-light mb-6 sm:mb-8 text-sm sm:text-base">
            Read our detailed deliverables and execution strategies.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[var(--color-text-primary)] border border-[var(--color-border)] text-sm font-medium hover:bg-[var(--color-bg-secondary)] transition-all shadow-sm"
          >
            View Service Details
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Markets;