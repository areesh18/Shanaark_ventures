import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../../components/ui/Button"; // Adjust path as needed
import MaskRevealText from "../../components/animations/MaskRevealText";
import heroImg from "/hero-img.webp";
// Register the plugin globally
gsap.registerPlugin(ScrollTrigger);

// ── 1. SEMANTIC ICON MAPPING ──────────────────────────────
const ICON_MAP = {
  "Graphic Design": (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>
  ),
  SEO: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  ),
  "Web Development": (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  "Web Design": (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 3h18v18H3zM3 9h18M9 21V9" />
    </svg>
  ),
  "Branding Kit Design": (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" />
      <path d="m22 12-8.57 3.91a2 2 0 0 1-1.66 0L3 12" />
      <path d="m22 17-8.57 3.91a2 2 0 0 1-1.66 0L3 17" />
    </svg>
  ),
  "Facebook Marketing": (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
  "TikTok Marketing": (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  ),
  "Marketing Management": (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20v-6M6 20V10M18 20V4" />
    </svg>
  ),
  "Corporate Communication": (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
  "Caribbean India Corridor": (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  "Business Advisory": (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  ),
  "CEO Advisory": (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  "Marketing and Sales Training": (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 11 19-9-9 19-2-8-8-2z" />
    </svg>
  ),
};

const DEFAULT_ICON = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

// ── 2. MARKET DATA ─────────────────────────────────────────
const MARKET_DATA = {
  suriname: {
    id: "suriname",
    name: "Suriname",
    categories: {
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
      consulting: [
        "Caribbean India Corridor",
        "Business Advisory",
        "CEO Advisory",
        "Marketing and Sales Training",
      ],
    },
  },

  india: {
    id: "india",
    name: "India",
    categories: {
      marketing: ["Web Design", "SEO", "Facebook Marketing"],
      consulting: ["Caribbean India Corridor", "CEO Advisory"],
    },
  },
  netherlands: {
    id: "netherlands",
    name: "Netherlands",
    categories: {
      marketing: ["Web Design", "SEO", "Facebook Marketing"],
      consulting: [],
    },
  },
  guyana: {
    id: "guyana",
    name: "Guyana",
    categories: {
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
      consulting: [
        "Caribbean India Corridor",
        "Business Advisory",
        "CEO Advisory",
        "Marketing and Sales Training",
      ],
    },
  },
};

// ── 3. MAIN COMPONENT ─────────────────────────────────────
const Markets = () => {
  const [activeMarket, setActiveMarket] = useState("suriname");
  const currentMarket = MARKET_DATA[activeMarket];
  const hasConsulting = currentMarket.categories.consulting.length > 0;

  const containerRef = useRef(null);

  // GSAP Animation Logic
  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Tab Change Reveal
      gsap.from(".gsap-pillar", {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
        clearProps: "all",
      });

      // 2. Staggered List Reveal
      gsap.from(".gsap-service-row", {
        x: -15,
        opacity: 0,
        duration: 0.4,
        stagger: 0.05,
        ease: "power2.out",
        delay: 0.2,
      });

      // 3. The Asymmetric Parallax Scroll
      gsap.to(".gsap-pillar-left", {
        y: -60,
        ease: "none",
        scrollTrigger: {
          trigger: ".gsap-pillars-container",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".gsap-pillar-right", {
        y: -100,
        ease: "none",
        scrollTrigger: {
          trigger: ".gsap-pillars-container",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // 4. Infinite Floating Pillar Shape (Lava Lamp Effect)
      gsap.to(".pillar-shape", {
        rotationX: 50,
        scale: 1.3,
        x: -20,
        y: -20,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, [activeMarket]);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-(--color-bg-primary) pt-24 sm:pt-32 pb-24 sm:pb-32 overflow-hidden"
    >
      <div className="max-w-8xl mx-auto px-5 sm:px-6">
        {/* ── HEADER ── */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h1 className="text-[2.6rem] leading-[1.05] sm:text-6xl md:text-7xl font-medium tracking-tighter text-(--color-text-primary) mb-4 sm:mb-6">
            Global{" "}
            <span className="font-serif-italic font-normal text-slate-500">
              Markets.
            </span>
          </h1>
          <MaskRevealText className="text-base sm:text-lg font-light tracking-tight text-(--color-text-secondary) leading-relaxed px-2 sm:px-0">
            Tailored solutions across three continents. Select a region below to
            explore our localized service offerings and capabilities.
          </MaskRevealText>
        </div>

        {/* ── MARKET SWITCHER ── */}
        <div className="flex justify-center mb-16 sm:mb-12">
          <div className="inline-flex p-1.5 bg-(--color-bg-secondary) border border-(--color-border) rounded-full shadow-sm w-full sm:w-auto">
            {Object.values(MARKET_DATA).map((market) => (
              <button
                key={market.id}
                onClick={() => setActiveMarket(market.id)}
                className={`flex-1 sm:flex-none relative px-4 sm:px-8 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-medium tracking-tight transition-all duration-300 whitespace-nowrap ${
                  activeMarket === market.id
                    ? "bg-(--color-dark) text-white shadow-md"
                    : "text-(--color-text-secondary) hover:text-(--color-text-primary)"
                }`}
              >
                {market.name}
              </button>
            ))}
          </div>
        </div>

        {/* ── THE ASYMMETRIC PILLARS ── */}
        <div
          className="max-w-7xl mx-auto gsap-pillars-container"
          key={activeMarket}
        >
          <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12">
            {/* PILLAR 1: Top Right (Consulting) */}
            <div className="gsap-pillar gsap-pillar-right w-full lg:w-[48%] flex flex-col">
              {hasConsulting ? (
                <div className="relative overflow-hidden p-8 sm:p-10 rounded-4xl border border-(--color-border) shadow-sm hover:shadow-md transition-shadow h-max-content group">
                  {/* ── GLASSMORPHISM IMAGE ── */}
                  <div className="absolute inset-0 bg-(--color-bg-secondary) z-0" />
                  <div className="absolute scale-120 -top-18 -left-18 w-56 h-56 z-0 -rotate-28 opacity-90 pointer-events-none perspective-[1000px]">
                    <img
                      src={heroImg}
                      alt=""
                      className="pillar-shape w-full h-full object-cover rounded-3xl"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 backdrop-blur-xs bg-(--color-bg-secondary)/10 z-10 pointer-events-none" />

                  {/* ── CONTENT ── */}
                  <div className="relative z-20">
                    <h3 className="text-2xl font-medium text-(--color-text-primary) tracking-tight mb-6 flex items-center gap-3">
                      <span className="w-8 h-px bg-(--color-border)" />
                      Consulting & Advisory
                    </h3>

                    <div className="flex flex-col divide-y divide-(--color-border)/60">
                      {currentMarket.categories.consulting.map((service) => (
                        <div
                          key={service}
                          className="gsap-service-row flex items-center gap-3 py-2.5 cursor-default"
                        >
                          <span className="text-(--color-dark) transition-colors">
                            {ICON_MAP[service] || DEFAULT_ICON}
                          </span>
                          <span className="text-sm font-medium text-(--color-text-primary) transition-colors">
                            {service}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center p-8 h-full opacity-60 bg-(--color-bg-secondary) rounded-[2rem] border border-(--color-border)">
                  <p className="text-[11px] font-mono uppercase tracking-widest text-center text-(--color-text-secondary) leading-relaxed">
                    No localized consulting services <br /> currently available
                    in this region.
                  </p>
                </div>
              )}
            </div>
            {/* PILLAR 2: Bottom right (Marketing) */}
            <div className="gsap-pillar gsap-pillar-left w-full lg:w-[48%] flex flex-col lg:mt-32">
              <div className="relative overflow-hidden p-8 sm:p-10 rounded-4xl border border-(--color-border) shadow-sm hover:shadow-md transition-shadow h-full group">
                {/* ── GLASSMORPHISM IMAGE ── */}
                <div className="absolute inset-0 bg-white z-0" />
                {/* Added perspective class so the GSAP rotationX has real 3D depth */}
                <div className="scale-120 absolute -bottom-16 -right-16 w-56 h-56 z-0 -rotate-18 opacity-90 pointer-events-none perspective-[1000px]">
                  <img
                    src={heroImg}
                    alt=""
                    className="pillar-shape w-full h-full object-cover rounded-3xl"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                </div>
                <div className="absolute inset-0 backdrop-blur-xs bg-white/10 z-10 pointer-events-none" />

                {/* ── CONTENT ── */}
                <div className="relative z-20">
                  <h3 className="text-2xl font-medium text-(--color-text-primary) tracking-tight mb-6 flex items-center gap-3">
                    <span className="w-8 h-px bg-(--color-border)" />
                    Marketing & Execution
                  </h3>

                  <div className="flex flex-col divide-y divide-(--color-border)/60">
                    {currentMarket.categories.marketing.map((service) => (
                      <div
                        key={service}
                        className="gsap-service-row flex items-center gap-3 py-2.5 cursor-default"
                      >
                        <span className="text-(--color-text-secondary) hover:text-(--color-text-primary) transition-colors">
                          {ICON_MAP[service] || DEFAULT_ICON}
                        </span>
                        <span className="text-sm font-medium text-(--color-text-primary) transition-colors">
                          {service}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── CROSS-LINK CTA ── */}
        <div className=" mt-24 sm:mt-32 pt-12 border-t border-(--color-border) text-center">
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
