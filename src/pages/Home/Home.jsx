import { useRef, useState, useEffect } from "react";
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
import pillar1 from "../../../public/pillar1.webp";
import pillar2 from "../../../public/pillar2.webp";

const TESTIMONIALS = [
  {
    quote:
      "Shaanark provides us with services in the field of customer support. Clearly defined on the basis of an agreement. The response time is low and, if necessary, the approach is discussed first. I never have to worry about whether it will work out well.",
    name: "Rik Verhagen",
    title: "Director, Nieuw Ontwerp",
  },
  {
    quote:
      "We are really satisfied with the design that Shaanark has made for us. The delivery was fast, professional and they understood directly what we envisioned for the project, client-oriented and very dynamic company!",
    name: "Laetitia Peant",
    title:
      "Development & Communications Coordinator, Conservation International Suriname",
  },
  {
    quote:
      "I have experienced that working with Kris is very pleasant, and that his work with an open mind for customers’ needs and challenges. We had the opportunity to hire Shaanark on doing a baseline training for graphic design and Facebook branding with a combination of conducting a gap analysis and we were sincerely glad with their professionalism...",
    name: "Hans Hiralal",
    title: "Marketing & Operations Director, Subisco International N.V.",
  },
  {
    quote:
      "Last year I asked Kris to develop my logo and website for my company. I really like his way of working, he took the time to listen to my preferences and was very professional. When my website and logo were finished, I got a lot of compliments from my clients. His after service is also very good. I recommend him to anybody.",
    name: "Jovanka Pigot",
    title: "Legal Advisor, Qarah",
  },
  {
    quote:
      "As a growing company, we greatly value the support Shaanark provides with our marketing. They help us communicate our brand message more effectively and are flexible in their approach to collaboration. They actively contribute ideas and show a genuine interest in the growth and success of our business.",
    name: "Jonas van Ravenswaay",
    title: "Managing Director of Marthiland (Bam Bino)",
  },
];
gsap.registerPlugin(ScrollTrigger);
const Home = () => {
  const logos = [logo1, logo2, logo3, logo4];

  const container = useRef(null);
  const statsRefs = useRef([]);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonialTimer = useRef(null);
  const TESTIMONIAL_INTERVAL = 4000;
  const resetTimer = () => {
    if (testimonialTimer.current) clearInterval(testimonialTimer.current);
    testimonialTimer.current = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, TESTIMONIAL_INTERVAL);
  };

  useEffect(() => {
    resetTimer();
    return () => clearInterval(testimonialTimer.current);
  }, []);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    resetTimer();
  };

  const prevTestimonial = () => {
    setActiveTestimonial(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length,
    );
    resetTimer();
  };

  // Array of 5 soft alternating background colors
  const CARD_COLORS = [
    "bg-[var(--color-accent)]/10", // Soft Lime (Brand Accent)
    "bg-slate-100", // Soft Slate
    "bg-blue-50/50", // Soft Blue
    "bg-emerald-50/50", // Soft Emerald
    "bg-violet-50/50", // Soft Violet
  ];

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
            <span className="text-[11px] sm:text-xs font-medium text-(--color-text-secondary) uppercase tracking-widest">
              Suriname • India • Netherlands
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-[2.75rem] leading-[1.05] sm:text-6xl md:text-7xl font-medium tracking-tighter text-(--color-text-primary) mb-5 sm:mb-6 animate-fade-up delay-100">
            Strategic solutions for <br className="hidden sm:block" />
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
      {/* ── 2. CORE PILLARS (Asymmetric Bento Grid) ──────────────── */}
      <section className="relative w-full max-w-7xl mx-auto px-5 sm:px-6 pt-10 md:pt-16 lg:pt-24 pb-12">
        {/* Background grid, fading on all 4 edges */}
        <div
          className=" absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgb(148 163 184 / 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgb(148 163 184 / 0.08) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "linear-gradient(to right, transparent, black 15%, black 85%, transparent), linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
            maskComposite: "intersect",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 15%, black 85%, transparent), linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
            WebkitMaskComposite: "source-in",
          }}
        />

        <div className="relative z-1">
          <div className=" mb-8 md:mb-12 lg:mb-20 max-w-2xl">
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

          <div className="flex flex-col gap-6 md:gap-8">
            {/* Row 1 — Pillar 1 (text) + image, image nudged upward on desktop */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              {/* Pillar 1 - Wider */}
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
                  We handle your end-to-end marketing efforts, ensuring
                  consistent growth and alignment with your business goals.
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

              {/* Pillar 1 image - nudged upward on desktop */}
              <div className="md:col-span-5 md:-mt-10 lg:-mt-14 group relative rounded-3xl sm:rounded-4xl overflow-hidden border border-(--color-border) aspect-4/3">
                <img
                  src={pillar1}
                  alt="Marketing and communication"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
            </div>

            {/* Row 2 — image + Pillar 2 (text), image nudged downward on desktop */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              {/* Pillar 2 image - nudged downward on desktop */}
              <div className="h-auto md:col-span-7 md:mt-10 lg:mt-14 group relative rounded-3xl sm:rounded-4xl overflow-hidden border border-(--color-border) ">
                <img
                  src={pillar2}
                  alt="Advisors discussing strategy in a meeting"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              {/* Pillar 2 - Narrower */}
              <div className="md:col-span-5 group bg-(--color-bg-secondary) border border-(--color-border) rounded-3xl sm:rounded-4xl p-8 sm:p-10 hover:shadow-sm hover:border-slate-300 transition-all duration-300">
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
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4M12 8h.01" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-(--color-text-primary) mb-3">
                  <ScrambleText duration={1.5}>
                    Consulting and Advisory
                  </ScrambleText>
                </h3>
                <p className="text-(--color-text-secondary) font-light tracking-tight mb-8 leading-relaxed text-lg">
                  High-level guidance for leadership decisions. We provide
                  expert advisory to help businesses scale and optimize
                  operations.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "CEO Advisory",
                    "Business Strategy",
                    "Market Analysis",
                    "Sales Training",
                    "Education Consulting",
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
      {/* ── 5. TESTIMONIALS ───────────────────────────────────────────────── */}

      <section className="w-full max-w-7xl mx-auto px-5 sm:px-6 py-16 md:py-24 border-t border-(--color-border)">
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10 md:mb-14">
          <div>
            <h3 className="text-xs font-medium text-(--color-text-secondary) uppercase tracking-widest mb-3">
              Client Outcomes
            </h3>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-(--color-text-primary) leading-[1.1]">
              Your money, well spent.
            </h2>
          </div>

          {/* Arrow Controls */}
          <div className="flex items-center gap-3 sm:pb-1">
            <button
              onClick={prevTestimonial}
              className="h-10 w-10 rounded-full border border-(--color-border) flex items-center justify-center hover:bg-(--color-bg-secondary) hover:border-slate-300 transition-all text-slate-500 active:scale-95"
              aria-label="Previous testimonial"
            >
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
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <span className="text-sm font-medium text-(--color-text-secondary) tabular-nums w-12 text-center">
              {activeTestimonial + 1} / {TESTIMONIALS.length}
            </span>
            <button
              onClick={nextTestimonial}
              className="h-10 w-10 rounded-full border border-(--color-border) flex items-center justify-center hover:bg-(--color-bg-secondary) hover:border-slate-300 transition-all text-slate-900 active:scale-95"
              aria-label="Next testimonial"
            >
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
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        <div
          className="relative"
          onTouchStart={(e) => {
            const t = e.touches[0];
            e.currentTarget.dataset.touchX = t.clientX;
            e.currentTarget.dataset.touchY = t.clientY;
          }}
          onTouchEnd={(e) => {
            const startX = parseFloat(e.currentTarget.dataset.touchX || 0);
            const startY = parseFloat(e.currentTarget.dataset.touchY || 0);
            const dx = e.changedTouches[0].clientX - startX;
            const dy = e.changedTouches[0].clientY - startY;
            if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
              dx < 0 ? nextTestimonial() : prevTestimonial();
            }
          }}
        >
          {/* Invisible spacer — longest card, locks container height */}
          <div
            aria-hidden="true"
            className={`invisible w-full p-7 sm:p-10 rounded-3xl border border-(--color-border) ${CARD_COLORS[0]}`}
          >
            <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12">
              <div className="flex-1">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-slate-300 mb-5 shrink-0"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-lg sm:text-xl font-normal text-(--color-text-primary) leading-relaxed tracking-tight">
                  "
                  {
                    TESTIMONIALS.reduce(
                      (longest, t) =>
                        t.quote.length > longest.quote.length ? t : longest,
                      TESTIMONIALS[0],
                    ).quote
                  }
                  "
                </p>
              </div>
              <div className="hidden md:block w-px self-stretch bg-(--color-border)" />
              <div className="block md:hidden h-px w-full bg-(--color-border)/60" />
              <div className="md:w-52 shrink-0 flex flex-col gap-1 md:pt-1">
                <p className="text-sm font-semibold text-(--color-text-primary)">
                  Placeholder
                </p>
                <p className="text-xs font-medium text-(--color-text-secondary) leading-snug">
                  Placeholder title
                </p>
              </div>
            </div>
          </div>

          {/* All cards stacked absolutely */}
          {TESTIMONIALS.map((testimonial, i) => (
            <div
              key={i}
              className={`absolute inset-0 w-full p-7 sm:p-10 rounded-3xl border border-(--color-border) transition-opacity duration-500 ${
                CARD_COLORS[i % CARD_COLORS.length]
              } ${
                i === activeTestimonial
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-stretch gap-8 md:gap-12">
                <div className="flex-1">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-slate-300 mb-5 shrink-0"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-lg sm:text-xl font-normal text-(--color-text-primary) leading-relaxed tracking-tight">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="hidden md:block w-px self-stretch bg-(--color-border)" />
                <div className="block md:hidden h-px w-full bg-(--color-border)/60" />
                <div className="md:w-52 shrink-0 flex flex-col gap-1 md:mt-auto md:pt-0">
                  <p className="text-sm font-semibold text-(--color-text-primary)">
                    {testimonial.name}
                  </p>
                  <p className="text-xs font-medium text-(--color-text-secondary) leading-snug">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dot indicators — active dot has animated progress fill */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setActiveTestimonial(i);
                resetTimer();
              }}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`rounded-full transition-all duration-300 overflow-hidden relative ${
                i === activeTestimonial
                  ? "w-5 h-2"
                  : "w-2 h-2 bg-(--color-border) hover:bg-slate-300"
              }`}
              style={
                i === activeTestimonial
                  ? { background: "var(--color-border)" }
                  : {}
              }
            >
              {i === activeTestimonial && (
                <span
                  key={activeTestimonial}
                  className="absolute inset-0 rounded-full bg-(--color-text-primary) origin-left"
                  style={{
                    animation: `progress ${TESTIMONIAL_INTERVAL / 1000}s linear forwards`,
                  }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Progress animation keyframe — inject once */}
        <style>{`@keyframes progress { from { transform: scaleX(0); } to { transform: scaleX(1); } }`}</style>
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
