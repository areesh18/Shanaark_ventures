import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Data meticulously mapped from the Project Document
const MARKET_DATA = {
  suriname: {
    id: "suriname",
    name: "Suriname",
    description: "Our comprehensive operational hub serving the Caribbean and South American markets.",
    categories: {
      marketing: [
        "Graphic Design",
        "SEO",
        "Branding Kit Design",
        "Facebook Marketing",
        "TikTok Marketing",
        "Marketing Management",
        "Corporate Communication",
        "Web Development"
      ],
      consulting: [
        "Caribbean India Corridor",
        "Business Advisory",
        "CEO Advisory",
        "Marketing and Sales Training"
      ]
    }
  },
  india: {
    id: "india",
    name: "India",
    description: "Our strategic delivery and talent sourcing center driving global digital execution.",
    categories: {
      marketing: [
        "Web Design",
        "SEO",
        "Facebook Marketing"
      ],
      consulting: [
        "Caribbean India Corridor",
        "CEO Advisory"
      ]
    }
  },
  netherlands: {
    id: "netherlands",
    name: "The Netherlands",
    description: "Digital excellence and marketing execution tailored for European markets.",
    categories: {
      marketing: [
        "Web Design",
        "SEO",
        "Facebook Marketing"
      ],
      consulting: [] // Intentionally empty per project document
    }
  }
};

const Markets = () => {
  const [activeMarket, setActiveMarket] = useState("suriname");
  const [activeCategory, setActiveCategory] = useState("marketing");

  const currentMarket = MARKET_DATA[activeMarket];
  const hasConsulting = currentMarket.categories.consulting.length > 0;

  // Auto-switch to Marketing if Consulting is selected but the new market doesn't support it
  useEffect(() => {
    if (!hasConsulting && activeCategory === "consulting") {
      setActiveCategory("marketing");
    }
  }, [activeMarket, hasConsulting, activeCategory]);

  return (
    <div className="min-h-screen bg-(--color-bg-primary) pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-(--color-text-primary) mb-6">
            Global <span className="font-serif-italic font-normal text-slate-500">Markets.</span>
          </h1>
          <p className="text-lg font-light tracking-tight text-(--color-text-secondary) leading-relaxed">
            Tailored solutions across three continents. Select a region below to explore our localized service offerings and capabilities.
          </p>
        </div>

        {/* 2. THE PILL SWITCHER (Country Selection) */}
        <div className="flex justify-center mb-16 animate-fade-up delay-100">
          <div className="inline-flex p-1.5 bg-(--color-bg-secondary) border border-(--color-border) rounded-full shadow-sm overflow-x-auto max-w-full no-scrollbar">
            {Object.values(MARKET_DATA).map((market) => (
              <button
                key={market.id}
                onClick={() => setActiveMarket(market.id)}
                className={`relative px-8 py-3.5 rounded-full text-sm font-medium tracking-tight transition-all duration-300 whitespace-nowrap ${
                  activeMarket === market.id
                    ? "bg-(--color-dark) text-white shadow-md"
                    : "text-(--color-text-secondary) hover:text-(--color-text-primary) hover:bg-slate-200/50"
                }`}
              >
                {market.name}
              </button>
            ))}
          </div>
        </div>

        {/* 3. DYNAMIC CONTENT AREA */}
        <div className="animate-fade-up delay-200" key={activeMarket}> {/* key prop forces re-animation on market change */}
          
          <div className="text-center mb-12">
            <h2 className="text-2xl font-medium text-(--color-text-primary) tracking-tight mb-2">
              Available in {currentMarket.name}
            </h2>
            <p className="text-sm font-light text-(--color-text-secondary) tracking-tight">
              {currentMarket.description}
            </p>
          </div>

          {/* Sub-Tabs (Marketing vs Consulting) */}
          <div className="flex justify-center items-center gap-8 border-b border-(--color-border) mb-12">
            <button
              onClick={() => setActiveCategory("marketing")}
              className={`pb-4 text-sm font-medium tracking-wide transition-all relative ${
                activeCategory === "marketing" 
                  ? "text-(--color-text-primary)" 
                  : "text-(--color-text-secondary) hover:text-(--color-text-primary)"
              }`}
            >
              Marketing & Communication
              {activeCategory === "marketing" && (
                <span className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-(--color-dark) rounded-t-full"></span>
              )}
            </button>

            {/* Only render Consulting tab if the market has consulting services */}
            {hasConsulting && (
              <button
                onClick={() => setActiveCategory("consulting")}
                className={`pb-4 text-sm font-medium tracking-wide transition-all relative ${
                  activeCategory === "consulting" 
                    ? "text-(--color-text-primary)" 
                    : "text-(--color-text-secondary) hover:text-(--color-text-primary)"
                }`}
              >
                Business Consulting
                {activeCategory === "consulting" && (
                  <span className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-(--color-dark) rounded-t-full"></span>
                )}
              </button>
            )}
          </div>

          {/* Bento Grid for Services */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {currentMarket.categories[activeCategory].map((service, index) => (
              <div 
                key={service} 
                className="group p-6 rounded-[1.5rem] bg-white border border-(--color-border) hover:border-(--color-dark)/20 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="h-10 w-10 rounded-full bg-(--color-bg-secondary) border border-(--color-border) flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-(--color-accent)/10 group-hover:border-(--color-accent)/30 transition-all duration-300">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-(--color-text-primary)">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-(--color-text-primary) tracking-tight">
                    {service}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Fallback if somehow a category is empty (good UX practice) */}
          {currentMarket.categories[activeCategory].length === 0 && (
            <div className="text-center py-20 border border-dashed border-(--color-border) rounded-[2rem] bg-(--color-bg-secondary)">
              <p className="text-(--color-text-secondary) font-light">No services currently listed in this category.</p>
            </div>
          )}

        </div>

        {/* 4. CROSS-LINK CTA */}
        <div className="mt-32 pt-16 border-t border-(--color-border) text-center animate-fade-up delay-300">
           <h3 className="text-2xl font-medium tracking-tight text-(--color-text-primary) mb-4">
             Want to learn more about a specific service?
           </h3>
           <p className="text-(--color-text-secondary) font-light mb-8">
             Read our detailed deliverables and execution strategies.
           </p>
           <Link to="/services" className="inline-flex px-6 py-3 rounded-full bg-white text-(--color-text-primary) border border-(--color-border) font-medium hover:bg-(--color-bg-secondary) transition-all shadow-sm">
             View Service Details
           </Link>
        </div>

      </div>
    </div>
  );
};

export default Markets;