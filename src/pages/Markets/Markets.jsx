import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import Button from "../../components/ui/Button"; // Adjust path as needed
import MaskRevealText from "../../components/animations/MaskRevealText";

// ── MARKET DATA ─────────────────────────────────────────
const MARKET_DATA = {
  suriname: {
    id: "suriname",
    name: "Suriname",
    image:
      "https://i.pinimg.com/736x/b0/93/3a/b0933a5d060248efbb8c4c31cf962b2d.jpg",
    categories: {
      consulting: [
        "Caribbean India Corridor",
        "Business Advisory",
        "CEO Advisory",
        "Marketing and Sales Training",
      ],
      marketing: [
        "Graphic Design",
        "SEO",
        "Branding Kit Design",
        "Facebook Marketing",
        "TikTok Marketing",
        "Marketing Management",
        "Corporate Communication",
        "Web Development",
      ],
    },
  },
  guyana: {
    id: "guyana",
    name: "Guyana",
    image:
      "https://i.pinimg.com/736x/25/8f/6b/258f6b71bcdf98da074d6359c63cf456.jpg",
    categories: {
      consulting: [
        "Caribbean India Corridor",
        "Business Advisory",
        "CEO Advisory",
        "Marketing and Sales Training",
      ],
      marketing: [
        "Graphic Design",
        "SEO",
        "Branding Kit Design",
        "Facebook Marketing",
        "TikTok Marketing",
        "Marketing Management",
        "Corporate Communication",
        "Web Development",
      ],
    },
  },
  india: {
    id: "india",
    name: "India",
    image:
      "https://i.pinimg.com/736x/bb/2d/52/bb2d52cb72fd0fea16fcedeea0612ddf.jpg",
    categories: {
      consulting: ["Caribbean India Corridor", "CEO Advisory"],
      marketing: ["Web Design", "SEO", "Facebook Marketing"],
    },
  },
  netherlands: {
    id: "netherlands",
    name: "Netherlands",
    image:
      "https://i.pinimg.com/736x/c5/52/29/c55229f256cbd8e422d691edce7a754b.jpg",
    categories: {
      consulting: [],
      marketing: ["Web Design", "SEO", "Facebook Marketing"],
    },
  },
};

const CATEGORY_LABELS = {
  consulting: "Consulting & Advisory",
  marketing: "Marketing & Execution",
};

// ── MAIN COMPONENT ─────────────────────────────────────
const Markets = () => {
  const [activeMarket, setActiveMarket] = useState("suriname");
  const currentMarket = MARKET_DATA[activeMarket];
  const containerRef = useRef(null);

  // GSAP Animation Logic — runs on the right-hand "page" each
  // time the active market changes.
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;

    let ctx = gsap.context(() => {
      gsap.from(".gsap-hero-image", {
        scale: 1.08,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        clearProps: "opacity,transform",
      });

      gsap.from(".gsap-region-name", {
        y: 20,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
        clearProps: "opacity,transform",
      });

      gsap.from(".gsap-divider", {
        scaleX: 0,
        duration: 0.7,
        delay: 0.08,
        ease: "power3.inOut",
        clearProps: "transform",
      });

      gsap.from(".gsap-list-row", {
        y: 5,
        opacity: 0,
        duration: 0.25,
        stagger: 0.03,
        delay: 0.06,
        ease: "power1.out",
        clearProps: "opacity,transform",
      });
    }, containerRef);

    return () => ctx.revert();
  }, [activeMarket]);

  return (
    <div className="min-h-screen bg-(--color-bg-primary) pt-24 sm:pt-32 pb-24 sm:pb-32">
      <div ref={containerRef} className="max-w-7xl mx-auto px-5 sm:px-6">
        {/* ── HEADER ── */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h1 className="text-[2.6rem] leading-[1.05] sm:text-6xl md:text-7xl font-medium tracking-tighter text-(--color-text-primary) mb-4 sm:mb-6">
            Global{" "}
            <span className="font-serif-italic font-normal text-slate-500">
              Markets.
            </span>
          </h1>
          <MaskRevealText className="text-base sm:text-lg font-light tracking-tight text-(--color-text-secondary) leading-relaxed px-2 sm:px-0">
            Tailored solutions across three continents. Select a region below
            to explore our localized service offerings and capabilities.
          </MaskRevealText>
        </div>

        {/* ── SPLIT LAYOUT ── */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* ── LEFT: MARKET INDEX ── */}
          <div className="lg:w-56 lg:shrink-0 lg:sticky lg:top-32 lg:self-start">
            <p className="hidden lg:block text-[11px] font-medium uppercase tracking-[0.2em] text-(--color-text-secondary) mb-4">
              Select a market
            </p>

            {/* Mobile / Tablet: 2x2 grid that fits the viewport, no scrolling */}
            <div className="grid grid-cols-2 gap-2.5 lg:hidden">
              {Object.values(MARKET_DATA).map((market) => {
                const isActive = activeMarket === market.id;
                return (
                  <button
                    key={market.id}
                    onClick={() => setActiveMarket(market.id)}
                    aria-current={isActive}
                    className={`flex items-center justify-between gap-2 rounded-xl border px-3.5 py-3 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-dark) ${
                      isActive
                        ? "border-(--color-dark) bg-(--color-bg-secondary)"
                        : "border-(--color-border) hover:border-(--color-text-secondary) hover:bg-(--color-bg-secondary)"
                    }`}
                  >
                    <span className="text-sm font-medium tracking-tight text-(--color-text-primary)">
                      {market.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Desktop: sticky vertical index */}
            <div className="hidden lg:flex lg:flex-col gap-0.5">
              {Object.values(MARKET_DATA).map((market) => {
                const isActive = activeMarket === market.id;
                return (
                  <button
                    key={market.id}
                    onClick={() => setActiveMarket(market.id)}
                    aria-current={isActive}
                    className={`group flex items-baseline gap-3 py-2.5 pl-5 border-l-2 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-dark) focus-visible:ring-offset-4 rounded-sm hover:pl-6 ${
                      isActive
                        ? "border-(--color-dark)"
                        : "border-(--color-border) hover:border-(--color-text-secondary)"
                    }`}
                  >
                    <span
                      className={`text-lg font-medium tracking-tight transition-colors duration-300 ${
                        isActive
                          ? "text-(--color-text-primary)"
                          : "text-(--color-text-secondary) group-hover:text-(--color-text-primary)"
                      }`}
                    >
                      {market.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── RIGHT: MARKET PAGE ── */}
          <div className="flex-1 min-w-0" key={activeMarket}>
            {/* Hero image banner */}
            <div className="gsap-hero-image relative w-full max-w-2xl h-44 sm:h-56 rounded-2xl overflow-hidden mb-6 sm:mb-8 group">
              <img
                src={currentMarket.image}
                alt={`${currentMarket.name} skyline`}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-(--color-dark)/70 via-(--color-dark)/10 to-transparent" />
              <h2 className="gsap-region-name absolute bottom-4 left-5 sm:bottom-6 sm:left-7 text-3xl sm:text-4xl md:text-5xl font-medium tracking-tighter text-white">
                {currentMarket.name}
              </h2>
            </div>

            {/* Hairline divider */}
            <div className="gsap-divider h-px w-full bg-(--color-border) origin-left mb-8 sm:mb-10" />

            {/* ── SERVICE LEDGERS ── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8 sm:gap-y-10">
              {Object.entries(currentMarket.categories).map(
                ([key, services]) =>
                  services.length > 0 && (
                    <div key={key}>
                      <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-(--color-text-secondary) mb-3 sm:mb-4">
                        {CATEGORY_LABELS[key]}
                      </h3>

                      <ul
                        className={
                          services.length > 4
                            ? "grid grid-cols-1 sm:grid-cols-2 gap-x-6"
                            : ""
                        }
                      >
                        {services.map((service, i) => (
                          <li
                            key={service}
                            className="gsap-list-row group flex items-baseline gap-3 py-2 border-b border-(--color-border) transition-all duration-300 ease-out hover:translate-x-1"
                          >
                            <span className="font-mono text-[10px] sm:text-xs text-(--color-text-secondary) group-hover:text-(--color-dark) transition-colors duration-300">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <span className="text-sm sm:text-base font-medium text-(--color-text-primary) tracking-tight leading-snug">
                              {service}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>

        {/* ── CROSS-LINK CTA ── */}
        <div className="mt-16 sm:mt-24 pt-10 sm:pt-12 border-t border-(--color-border) text-center">
          <MaskRevealText className="text-xl sm:text-2xl font-medium tracking-tight text-(--color-text-primary) mb-3 sm:mb-4">
            Want to learn more about a specific service?
          </MaskRevealText>
          <MaskRevealText
            delay={0.08}
            className="text-(--color-text-secondary) font-light mb-8 text-sm sm:text-base"
          >
            Read our detailed deliverables and execution strategies.
          </MaskRevealText>
          <div className="flex justify-center">
            <Button to="/services" variant="outline" hasArrow>
              View Service Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Markets;