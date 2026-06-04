import MaskRevealText from "../../components/animations/MaskRevealText";
import Button from "../../components/ui/Button";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
const CORRIDOR_PILLARS = [
  {
    id: "invest",
    title: "Investment Facilitation",
    description:
      "Helping investors from India identify high-yield portfolios and strategic assets to invest in across Suriname and Guyana.",
    tags: ["Asset Identification", "Capital Deployment", "Risk Assessment"],
    image:
      "https://i.pinimg.com/736x/b9/0c/be/b90cbe10ddf242f7bd05f82451fd84a6.jpg",
  },
  {
    id: "trade",
    title: "Trade Partnerships",
    description:
      "Helping businesses from Suriname and Guyana find reliable trading, manufacturing, and supply chain partners directly from India.",
    tags: ["Supply Chain", "Vendor Matching", "Import/Export Advisory"],
    image:
      "https://i.pinimg.com/1200x/29/91/f2/2991f20fd2fca5962cc8e62bac926bb1.jpg",
  },
  {
    id: "talent",
    title: "Talent Sourcing",
    description:
      "Assisting companies and businesses from Suriname and Guyana to interview, select, and recruit top-tier technical and managerial manpower from India.",
    tags: ["Executive Search", "Technical Recruitment", "Interview Frameworks"],
    image:
      "https://i.pinimg.com/736x/67/ba/25/67ba25303e432744a3714de1a8762bda.jpg",
  },
];

// ── EXTRACTED CARD COMPONENT ───────────────────────────────
const Card = ({ title, description, tags, image, index }) => {
  return (
    <div className="card w-full relative  group" id={`card-${index + 1}`}>
      <div className=" p-[2em] rounded-2xl card-inner relative will-change-transform  w-full h-full flex flex-col lg:flex-row justify-between gap-12 lg:gap-20">
        {/* ── LEFT COLUMN: Text Content ── */}
        <div className="card-content w-full lg:w-7/12 flex flex-col justify-between">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] font-medium tracking-tighter text-(--color-text-primary) mb-12 lg:mb-24">
            {title}
          </h2>

          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 mt-auto">
            {/* Description */}
            <MaskRevealText className="w-full sm:w-1/2 text-sm sm:text-base lg:text-lg font-light text-(--color-text-secondary) leading-relaxed tracking-tight">
              {description}
            </MaskRevealText>

            {/* Tags */}
            <div className="w-full sm:w-1/2 flex flex-col gap-3">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs sm:text-sm font-medium text-(--color-text-primary) tracking-tight border-b border-(--color-border)/60 pb-2 last:border-0"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT COLUMN: Image ── */}
        <div className="card-img w-full lg:w-5/12 shrink-0 flex items-center justify-center">
          <div className="w-full aspect-4/3 rounded-3xl overflow-hidden bg-(--color-bg-secondary) shadow-sm hover:shadow-md transition-shadow">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// ── MAIN PAGE COMPONENT ────────────────────────────────────
const Caribbean = () => {
  const container = useRef();
  /* useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const cards = gsap.utils.toArray(".card");

        ScrollTrigger.create({
          trigger: cards[0],
          start: "top 35%",
          endTrigger: cards[cards.length - 1],
          end: "top 30%",
          pin: ".intro",
          pinSpacing: false,
          invalidateOnRefresh: true,
        });

        cards.forEach((card, index) => {
          const isLastCard = index === cards.length - 1;
          const cardInner = card.querySelector(".card-inner");

          if (!isLastCard) {
            ScrollTrigger.create({
              trigger: card,
              start: "top 30%",
              endTrigger: ".outro",
              end: "top 100%",
              pin: true,
              pinSpacing: false,
              invalidateOnRefresh: true,
            });

            gsap.to(cardInner, {
              y: `-${(cards.length - index) * 8}vh`,
              ease: "none",
              force3D: true,
              scrollTrigger: {
                trigger: card,
                start: "top 30%",
                endTrigger: ".outro",
                end: "top 120%",
                scrub: true,
                invalidateOnRefresh: true,
              },
            });
          }
        });
      });

      window.addEventListener("load", () => {
        ScrollTrigger.refresh();
      });
    },
    { scope: container },
  ); */
  return (
    <div
      ref={container}
      className="min-h-screen bg-(--color-bg-primary) pt-24 sm:pt-32 pb-16 sm:pb-24"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        {/* ── 1. HERO ─────────────────────────────────────────── */}
        <div className="intro flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-24 items-start pb-14 sm:pb-24 animate-fade-up">
          <div className="w-full md:w-3/5">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-(--color-bg-secondary) border border-(--color-border) mb-6 sm:mb-8">
              <span className="text-[10px] sm:text-xs font-medium text-(--color-text-secondary) uppercase tracking-widest">
                Exclusive Cross-Border Initiative
              </span>
            </div>
            <h1 className="text-[2.6rem] leading-[1.05] sm:text-6xl md:text-7xl font-medium tracking-tighter text-(--color-text-primary)">
              Bridging opportunities between India and the{" "}
              <span className="font-serif-italic font-normal text-slate-500">
                Caribbean.
              </span>
            </h1>
          </div>

          {/* FIX: Applied md:self-end and a slight bottom margin to anchor the text to the bottom right */}
          <div className="w-full md:w-2/5 md:self-end md:mb-2 lg:mb-4">
            <MaskRevealText className="text-base sm:text-lg md:text-xl font-light tracking-tight text-(--color-text-secondary) leading-relaxed">
              We facilitate seamless cross-border business by connecting
              ambitious investors, scaling businesses, and elite talent across{" "}
              <span className="font-medium text-(--color-text-primary)">
                India, Suriname, and Guyana.
              </span>
            </MaskRevealText>
          </div>
        </div>

        {/* ── 2. EDITORIAL PILLARS (The Extracted Cards) ──────── */}
        <div className="w-full flex flex-col gap-14 md:gap-10">
          {CORRIDOR_PILLARS.map((pillar, index) => (
            <Card key={pillar.id} index={index} {...pillar} />
          ))}
        </div>

        {/* ── 3. CONVERSION PANEL (The Outro) ─────────────────── */}
        <div className="outro w-full bg-(--color-dark) rounded-[1.75rem] sm:rounded-[2.5rem] p-8 sm:p-12 md:p-20 overflow-hidden relative border border-slate-800 shadow-xl mt-12 animate-fade-up delay-400">
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-12">
            <div className="w-full md:w-2/3 text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mb-4 sm:mb-6 leading-[1.1]">
                Ready to expand your <br className="hidden md:block" />
                <span className="font-serif-italic font-normal text-slate-300">
                  global footprint?
                </span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg font-light tracking-tight text-(--color-footer-text) max-w-xl mx-auto md:mx-0 leading-relaxed">
                Secure a strategic advantage. Let's discuss your investment
                parameters, supply chain needs, or talent sourcing requirements.
              </p>
            </div>

            <div className="w-full md:w-1/3 flex justify-center md:justify-end shrink-0">
              <Button
                to="/contact"
                variant="darkBg"
                hasArrow
                className="w-full sm:w-auto"
              >
                Book a strategy call with us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Caribbean;
