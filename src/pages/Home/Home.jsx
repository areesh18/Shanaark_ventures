import { useRef } from "react";
import { Link } from "react-router-dom";
import heroBg from "/public/hero-img.webp";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Button from "../../components/ui/Button";
import MaskRevealText from "../../components/animations/MaskRevealText";
import ScrambleText from "../../components/animations/ScrambleText";
import logo1 from "../../../public/logos/logo-1.webp";
import logo2 from "../../../public/logos/logo-2.webp";
import logo3 from "../../../public/logos/logo-3.webp";
import logo4 from "../../../public/logos/logo-4.webp";
import logo5 from "../../../public/logos/logo-5.webp";

gsap.registerPlugin(ScrollTrigger);
const Home = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5];
  const container = useRef(null);
  const statsRefs = useRef([]);
  useGSAP(
    () => {
      // 1. Hero Animation
      gsap.to(".hero-bg", {
        rotationX: 20,
        y: 20,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      // NEW: Pillar Glassmorphism Animation
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
      // 2. Stats Count-Up (ScrollTrigger)
      statsRefs.current.forEach((stat) => {
        if (!stat) return;

        const targetValue = stat.getAttribute("data-value");
        const isNumber = !isNaN(targetValue);

        if (isNumber) {
          gsap.fromTo(
            stat,
            { textContent: 0 },
            {
              textContent: targetValue,
              duration: 2,
              ease: "power2.out",
              snap: { textContent: 1 },
              scrollTrigger: { trigger: stat, start: "top 85%" },
            },
          );
        } else {
          // Fade in for the non-numeric "B2B" stat
          gsap.fromTo(
            stat,
            { opacity: 0, y: 10 },
            {
              opacity: 1,
              y: 0,
              duration: 1.5,
              ease: "power2.out",
              scrollTrigger: { trigger: stat, start: "top 85%" },
            },
          );
        }
      });
    },
    { scope: container },
  );
  return (
    <div
      ref={container}
      className="bg-(--color-bg-primary) flex flex-col items-center"
    >
      {/* ── 1. HERO ─────────────────────────────────────────────── */}
      <section className="w-full min-h-[75svh] md:min-h-svh pt-32 sm:pt-40 pb-16 px-5 sm:px-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
        {/* Optimized Background Image Wrapper */}
        <div className="absolute top-90 md:top-40 z-0 pointer-events-none select-none overflow-hidden bg-(--color-bg-primary) ">
          <img
            src={heroBg}
            alt=""
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="will-change-transform hero-bg w-full h-full object-cover object-[center_top] md:object-center opacity-60 md:opacity-50 scale-190 md:scale-110"
          />
        </div>

        <div className="absolute inset-0 z-0 pointer-events-none backdrop-blur-xs bg-white/5" />

        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-(--color-bg-secondary) border border-(--color-border) mb-6 sm:mb-8 animate-fade-up">
            <span className="flex h-2 w-2 rounded-full bg-(--color-accent) shrink-0" />
            <span className="text-[11px] sm:text-xs font-medium text-(--color-text-secondary) uppercase tracking-widest">
              Suriname • India • Netherlands
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-[2.75rem] leading-[1.05] sm:text-6xl md:text-7xl font-medium tracking-tighter text-(--color-text-primary) mb-5 sm:mb-6 animate-fade-up delay-100">
            Strategic guidance for <br className="hidden sm:block" />
            <span className="font-serif-italic font-normal text-slate-500">
              smarter
            </span>{" "}
            growth.
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl md:text-xl text-(--color-text-secondary) max-w-xl sm:max-w-2xl mb-8 sm:mb-10 leading-relaxed tracking-tight animate-fade-up delay-200 px-2 sm:px-0">
            We facilitate cross-border business by connecting investors,
            businesses, and talent. Expert advisory, digital excellence, and
            end-to-end marketing.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto animate-fade-up delay-300">
            <Button to="/contact" variant="primary" hasArrow>
              Book Consultation
            </Button>
            <Button to="/services" variant="glass">
              Explore Services
            </Button>
          </div>
        </div>
      </section>
      {/* ── STATS ROW (Integrated & Left-Aligned) ───────────────── */}
      <section className="w-full max-w-7xl mx-auto px-5 sm:px-6 pb-12 sm:pb-20 md:pb-32">
        <div className="w-full flex flex-col md:flex-row items-start justify-between gap-8 md:gap-12 pt-8 md:pt-12 border-t border-(--color-border)">
          {/* Left Anchor Copy */}
          <div className="md:w-1/3">
            <h3 className="text-xs font-medium text-(--color-text-secondary) uppercase tracking-widest mb-3">
              Proven Impact
            </h3>
            <MaskRevealText className="text-2xl sm:text-3xl font-light text-(--color-text-primary) tracking-tight leading-snug">
              Driving measurable results across borders and industries.
            </MaskRevealText>
          </div>

          {/* Right Aligned Stats */}
          <div className="md:w-2/3 mt-0 sm:mt-0 flex flex-wrap md:flex-nowrap gap-x-12 sm:gap-x-20 gap-y-8 md:gap-y-10 justify-start md:justify-end">
            {[
              { value: "3", label: "Global Markets" },
              { value: "12", label: "Core Services" },
              { value: "B2B", label: "Growth & Advisory" },
            ].map(({ value, label }, index) => (
              <div key={label} className="flex flex-col items-start">
                <span
                  ref={(el) => (statsRefs.current[index] = el)}
                  data-value={value}
                  className="text-5xl sm:text-6xl font-medium tracking-tighter text-(--color-text-primary) mb-2"
                >
                  {/* Fallback starting point before GSAP kicks in */}
                  {isNaN(value) ? value : "0"}
                </span>
                <span className="text-md font-medium text-(--color-text-secondary) tracking-tight">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ── 2. CORE PILLARS (Asymmetric Grid) ───────────────────── */}
      <section className="w-full max-w-7xl mx-auto px-5 sm:px-6 pt-10 md:pt-16 lg:pt-24 pb-12">
        <div className="mb-8 md:mb-12 lg:mb-20 max-w-2xl">
          <h2 className="font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-(--color-text-primary) mb-4">
            Everything you need to{" "}
            <span className="font-serif-italic font-normal text-slate-500">
              scale.
            </span>
          </h2>
          <MaskRevealText className="text-(--color-text-primary) font-light tracking-tight text-lg sm:text-xl leading-relaxed">
            From establishing your brand identity to optimizing leadership
            decisions, we provide end-to-end solutions.
          </MaskRevealText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          {/* Pillar 1 - Wider and top-aligned */}
          <div className="md:col-span-7 group bg-(--color-bg-secondary) border border-(--color-border) rounded-3xl sm:rounded-4xl p-6 md:p-8 lg:p-12 hover:shadow-sm hover:border-slate-300 transition-all duration-300">
            <div className="h-12 w-12 rounded-full bg-white border border-(--color-border) flex items-center justify-center mb-8 shadow-sm group-hover:-translate-y-1 group-hover:scale-105 transition-transform duration-300 ease-out">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-(--color-text-primary)"
              >
                <path d="M12 20v-6M6 20V10M18 20V4" />
              </svg>
            </div>
            <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-(--color-text-primary) mb-3">
              <ScrambleText duration={1.0}>
                Marketing & Communication
              </ScrambleText>
            </h3>
            <p className="text-(--color-text-secondary) font-light tracking-tight mb-8 leading-relaxed text-lg">
              We handle your end-to-end marketing efforts, ensuring consistent
              growth and alignment with your business goals.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "SEO",
                "Web Development",
                "Branding Kits",
                "TikTok & FB Marketing",
                "Corporate Comm",
              ].map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 bg-white border border-(--color-border) rounded-full text-xs font-medium tracking-wide text-(--color-text-secondary)"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Pillar 2 - Narrower and staggered downward */}
          <div className="md:col-span-5 md:mt-24 group relative overflow-hidden bg-white/40 border border-(--color-border) rounded-3xl sm:rounded-4xl hover:shadow-sm hover:border-slate-300 transition-all duration-300">
            {/* LAYER 1: Animated Background Image */}
            <img
              src={heroBg}
              alt=""
              className="pillar-shape absolute -bottom-20 -right-16 w-80 h-80 object-cover opacity-100 z-0 pointer-events-none select-none  -rotate-25"
            />

            {/* LAYER 2: Frosted Glass Overlay */}
            <div className="absolute -inset-4 bg-white/10 backdrop-blur-sm z-1 transition-colors duration-300 group-hover:bg-white/30"></div>

            {/* LAYER 3: Card Content (Elevated above the glass) */}
            <div className="relative z-10 p-8 sm:p-10">
              <div className="h-12 w-12 rounded-full bg-(--color-bg-secondary) border border-(--color-border) flex items-center justify-center mb-8 shadow-sm group-hover:-translate-y-1 group-hover:scale-105 transition-transform duration-300 ease-out">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-(--color-text-primary)"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4M12 8h.01" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-(--color-text-primary) mb-3">
                <ScrambleText duration={1.5}>Business Consulting</ScrambleText>
              </h3>
              <p className="text-(--color-text-secondary) font-light tracking-tight mb-8 leading-relaxed text-lg">
                High-level guidance for leadership decisions. We provide expert
                advisory to help businesses scale and optimize operations.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "CEO Advisory",
                  "Business Strategy",
                  "Market Analysis",
                  "Sales Training",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 bg-(--color-bg-secondary)/80 backdrop-blur-sm border border-(--color-border) rounded-full text-xs font-medium tracking-wide text-(--color-text-secondary)"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ── 4. TRUSTED BY LOGOS (Pre-CTA Conversion Signal) ─────── */}
      <section className="w-full max-w-5xl mx-auto px-5 sm:px-6 pt-12 md:pt-20 lg:pt-28 pb-8 sm:pb-12 flex flex-col items-center">
        <MaskRevealText className="text-sm sm:text-md font-medium text-(--color-text-primary) uppercase tracking-normal mb-6 md:mb-8 lg:mb-10 text-center">
          Trusted by partners across the corridor
        </MaskRevealText>
        <div className="flex flex-nowrap lg:flex-nowrap justify-center items-center gap-6 sm:gap-10 md:gap-16 lg:gap-24">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Client Logo ${index + 1}`}
              className="h-8 sm:h-16 md:h-14 w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-300 ease-in-out"
            />
          ))}
        </div>
      </section>
      {/* ── 3. CARIBBEAN INDIA CORRIDOR (Elevated, No Glow) ─────── */}
      <section className="w-full px-5 sm:px-6 py-8 sm:py-12">
        <div className="group max-w-7xl mx-auto bg-(--color-dark) rounded-[1.75rem] sm:rounded-[2.5rem] p-8 sm:p-12 md:p-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-10 md:gap-12 overflow-hidden relative border border-slate-800">
          {/* Left copy */}
          <div className="w-full md:w-1/2 relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mb-4 sm:mb-6 leading-[1.1]">
              The{" "}
              <span className="font-serif-italic font-normal text-(--color-accent)">
                Caribbean India
              </span>{" "}
              Corridor.
            </h2>
            <p className="text-(--color-footer-text) font-light text-lg sm:text-xl mb-6 sm:mb-8 leading-relaxed tracking-tight">
              Bridging opportunities. We facilitate cross-border business by
              connecting investors, businesses, and talent across India,
              Suriname, and Guyana.
            </p>
            <Link
              to="/caribbean"
              className="inline-flex items-center gap-2 text-white text-sm font-medium hover:text-(--color-accent) transition-colors tracking-tight"
            >
              Learn how we bridge markets
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform group-hover:translate-x-1"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Right mini cards */}
          <div className="w-full md:w-1/2 flex flex-col gap-3 relative z-10">
            {[
              {
                title: "Investment Facilitation",
                desc: "Helping investors from India identify portfolios to invest in Suriname and Guyana.",
              },
              {
                title: "Trade Partnerships",
                desc: "Helping businesses find trading and supply partners between nations.",
              },
              {
                title: "Talent Sourcing",
                desc: "Assisting companies to interview, select, and recruit top manpower from India.",
              },
            ].map(({ title, desc }) => (
              <div
                key={title}
                className="group/card bg-white/5 border border-white/10 p-5 sm:p-6 rounded-[1.25rem] sm:rounded-3xl backdrop-blur-sm hover:bg-white/10 hover:border-white/20 hover:translate-x-2 transition-all duration-300 cursor-default"
              >
                <h4 className="text-white text-sm sm:text-base font-medium tracking-tight mb-1.5">
                  {title}
                </h4>
                <p className="text-slate-300 font-light sm:text-sm tracking-tight leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MARQUEE ───────────────────────────── */}
      <section className="w-full py-10 sm:py-14 flex justify-center">
        <div className="relative w-[92%] sm:w-[88%] overflow-hidden">
          {/* Fade Left */}
          <div className="absolute left-0 top-0 z-10 h-full w-20 sm:w-32 bg-linear-to-r from-white to-transparent pointer-events-none" />

          {/* Fade Right */}
          <div className="absolute right-0 top-0 z-10 h-full w-20 sm:w-32 bg-linear-to-l from-white to-transparent pointer-events-none" />

          <div className="marquee">
            <div className="marquee-track">
              {[
                "SEO",
                "Web Development",
                "Brand Identity",
                "Social Media Marketing",
                "Corporate Communications",
                "Executive Advisory",
                "Business Strategy",
                "Market Analysis",
                "Sales Training",
              ].map((item, index) => (
                <div key={index} className="flex items-center shrink-0">
                  <span className="text-black tracking-[-0.045em] text-2xl sm:text-3xl whitespace-nowrap">
                    {item}
                  </span>

                  <span className="mx-5 sm:mx-7 text-(--color-accent) text-xl sm:text-2xl">
                    ✦
                  </span>
                </div>
              ))}

              {/* duplicate */}
              {[
                "SEO",
                "Web Development",
                "Brand Identity",
                "Social Media Marketing",
                "Corporate Communications",
                "Executive Advisory",
                "Business Strategy",
                "Market Analysis",
                "Sales Training",
              ].map((item, index) => (
                <div
                  key={`dup-${index}`}
                  className="flex items-center shrink-0"
                >
                  <span className="text-black tracking-[-0.045em] text-2xl sm:text-3xl whitespace-nowrap">
                    {item}
                  </span>

                  <span className="mx-5 sm:mx-7 text-(--color-accent) text-xl sm:text-2xl">
                    ✦
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* ── 4. FINAL CTA ────────────────────────────────────────── */}
      <section className="w-full max-w-4xl mx-auto px-5 sm:px-6 py-16 md:py-24 lg:py-32 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tighter text-(--color-text-primary) mb-4 sm:mb-6 leading-[1.05]">
          Ready to{" "}
          <span className="font-serif-italic font-normal text-slate-500">
            get started?
          </span>
        </h2>
        <p className="text-lg sm:text-xl font-light tracking-tight text-(--color-text-secondary) mb-8 sm:mb-10 max-w-md sm:max-w-xl mx-auto leading-relaxed">
          Whether you need an entire marketing team or high-level CEO advisory,
          we are here to cut through the complexity.
        </p>
        <Button to="/contact" variant="primary" hasArrow>
          Book Consultation
        </Button>
      </section>
    </div>
  );
};

export default Home;
