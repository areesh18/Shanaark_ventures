import { useRef } from "react";
import { Link } from "react-router-dom";
import heroBg from "/public/hero-img.webp";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
const Home = () => {
  const container = useRef(null);
  const statsRefs = useRef([]);
  useGSAP(
    () => {
      // 1. Hero Animation
      gsap.to(".hero-bg", {
        rotationX: 20,
        duration: 8,
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
      <section className="w-full min-h-svh pt-32 sm:pt-40 pb-16 px-5 sm:px-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
        {/* Background Image */}
        <img
          src={heroBg}
          alt=""
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="will-change-transform hero-bg absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none select-none"
        />

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
          <p className="text-base sm:text-lg md:text-xl font-light text-(--color-text-secondary) max-w-xl sm:max-w-2xl mb-8 sm:mb-10 leading-relaxed tracking-tight animate-fade-up delay-200 px-2 sm:px-0">
            We facilitate cross-border business by connecting investors,
            businesses, and talent. Expert advisory, digital excellence, and
            end-to-end marketing.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto animate-fade-up delay-300">
            <Link
              to="/contact"
              className="px-7 py-3.5 rounded-full bg-(--color-dark) text-white text-sm font-medium hover:bg-opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              Book Consultation
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              to="/services"
              className="px-7 py-3.5 rounded-full bg-white text-(--color-text-primary) border border-(--color-border) text-sm font-medium hover:bg-(--color-bg-secondary) transition-all flex items-center justify-center"
            >
              Explore Services
            </Link>
          </div>

          {/* Stats row */}
          {/* <div className="mt-16 sm:mt-24 pt-8 sm:pt-10 border-t border-(--color-border) w-full grid grid-cols-3 gap-4 animate-fade-up delay-400">
            {[
              { value: "3", label: "Global Markets" },
              { value: "12", label: "Core Services" },
              { value: "B2B", label: "Growth & Advisory" },
            ].map(({ value, label }) => (
              <div key={label} className="flex flex-col items-center">
                <span className="text-2xl sm:text-3xl font-semibold tracking-tighter text-(--color-text-primary)">
                  {value}
                </span>
                <span className="text-[11px] sm:text-sm font-medium text-(--color-text-secondary) mt-1 tracking-tight text-center leading-tight">
                  {label}
                </span>
              </div>
            ))}
          </div> */}
        </div>
      </section>
      {/* ── TRUSTED BY LOGOS ────────────────────────────────────── */}
      <section className="w-full max-w-5xl mx-auto px-5 sm:px-6 pb-10 sm:pb-14 border-b border-(--color-border) flex flex-col items-center">
        <p className="text-xs sm:text-sm font-medium text-(--color-text-secondary) uppercase tracking-widest mb-6 sm:mb-8 text-center">
          Trusted by partners across the corridor
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-16 md:gap-24">
          {/* Note: Change .svg to .png or .jpg if necessary based on your files */}
          {[1, 2, 3].map((num) => (
            <img
              key={num}
              src={`/logos/logo-${num}.webp`}
              alt={`Client Logo ${num}`}
              className="h-8 sm:h-10 w-auto object-contain opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 ease-in-out"
            />
          ))}
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

                  <span className="mx-5 sm:mx-7 text-[#B7BCC8] text-xl sm:text-2xl">
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

                  <span className="mx-5 sm:mx-7 text-black/25 text-xl sm:text-2xl">
                    ✦
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* ── 2. CORE PILLARS ─────────────────────────────────────── */}
      <section className="w-full max-w-7xl mx-auto px-5 sm:px-6 py-16 sm:py-24">
        <div className="mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-(--color-text-primary) mb-3 sm:mb-4">
            Everything you need to{" "}
            <span className="font-serif-italic font-normal text-slate-500">
              scale.
            </span>
          </h2>
          <p className="text-(--color-text-secondary) font-light tracking-tight max-w-xl text-base sm:text-lg leading-relaxed">
            From establishing your brand identity to optimizing leadership
            decisions, we provide end-to-end solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {/* Pillar 1 */}
          <div className="group bg-(--color-bg-secondary) border border-(--color-border) rounded-3xl sm:rounded-4xl p-7 sm:p-10 hover:shadow-sm hover:border-slate-300 transition-all duration-300">
            <div className="h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-white border border-(--color-border) flex items-center justify-center mb-6 sm:mb-8 shadow-sm">
              <svg
                width="18"
                height="18"
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
            <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-(--color-text-primary) mb-2 sm:mb-3">
              Marketing & Communication
            </h3>
            <p className="text-(--color-text-secondary) font-light tracking-tight mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
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

          {/* Pillar 2 */}
          <div className="group bg-(--color-bg-secondary) border border-(--color-border) rounded-3xl sm:rounded-4xl p-7 sm:p-10 hover:shadow-sm hover:border-slate-300 transition-all duration-300">
            <div className="h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-white border border-(--color-border) flex items-center justify-center mb-6 sm:mb-8 shadow-sm">
              <svg
                width="18"
                height="18"
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
            <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-(--color-text-primary) mb-2 sm:mb-3">
              Business Consulting
            </h3>
            <p className="text-(--color-text-secondary) font-light tracking-tight mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
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
                  className="px-3 py-1.5 bg-white border border-(--color-border) rounded-full text-xs font-medium tracking-wide text-(--color-text-secondary)"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* ── STATS ROW (Bridging Section) ────────────────────────── */}
      <section className="w-full max-w-5xl mx-auto px-5 sm:px-6 pb-16 sm:pb-24">
        <div className="pt-10 sm:pt-14 border-t border-(--color-border) w-full grid grid-cols-3 gap-4">
          {[
            { value: "3", label: "Global Markets" },
            { value: "12", label: "Core Services" },
            { value: "B2B", label: "Growth & Advisory" },
          ].map(({ value, label }, index) => (
            <div key={label} className="flex flex-col items-center">
              <span
                ref={(el) => (statsRefs.current[index] = el)}
                data-value={value}
                className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tighter text-(--color-text-primary)"
              >
                {/* Fallback starting point before GSAP kicks in */}
                {isNaN(value) ? value : "0"}
              </span>
              <span className="text-xs sm:text-sm font-medium text-(--color-text-secondary) mt-2 tracking-tight text-center leading-tight">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>
      {/* ── 3. CARIBBEAN INDIA CORRIDOR ─────────────────────────── */}
      <section className="w-full px-5 sm:px-6 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto bg-(--color-dark) rounded-[1.75rem] sm:rounded-[2.5rem] p-8 sm:p-12 md:p-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-10 md:gap-12 overflow-hidden relative border border-slate-800">
          {/* Left copy */}
          <div className="w-full md:w-1/2 relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mb-4 sm:mb-6 leading-[1.1]">
              The{" "}
              <span className="font-serif-italic font-normal text-slate-400">
                Caribbean India
              </span>{" "}
              Corridor.
            </h2>
            <p className="text-(--color-footer-text) font-light text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed tracking-tight">
              Bridging opportunities. We facilitate cross-border business by
              connecting investors, businesses, and talent across India,
              Suriname, and Guyana.
            </p>
            <Link
              to="/caribbean"
              className="inline-flex items-center gap-2 text-(--color-accent) text-sm font-medium hover:opacity-80 transition-opacity tracking-tight"
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
                className="bg-white/5 border border-white/10 p-5 sm:p-6 rounded-[1.25rem] sm:rounded-3xl backdrop-blur-sm hover:bg-white/8 transition-colors duration-200"
              >
                <h4 className="text-white text-sm sm:text-base font-medium tracking-tight mb-1.5">
                  {title}
                </h4>
                <p className="text-slate-400 font-light text-xs sm:text-sm tracking-tight leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. FINAL CTA ────────────────────────────────────────── */}
      <section className="w-full max-w-4xl mx-auto px-5 sm:px-6 py-24 sm:py-32 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tighter text-(--color-text-primary) mb-4 sm:mb-6 leading-[1.05]">
          Ready to{" "}
          <span className="font-serif-italic font-normal text-slate-500">
            get started?
          </span>
        </h2>
        <p className="text-base sm:text-lg font-light tracking-tight text-(--color-text-secondary) mb-8 sm:mb-10 max-w-md sm:max-w-xl mx-auto leading-relaxed">
          Whether you need an entire marketing team or high-level CEO advisory,
          we are here to cut through the complexity.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-(--color-dark) text-white text-sm font-medium hover:bg-opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-sm"
        >
          Book Consultation
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </section>
    </div>
  );
};

export default Home;
