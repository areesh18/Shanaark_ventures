import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-[var(--color-bg-primary)] flex flex-col items-center">
      {/* 1. HERO SECTION */}
      <section className="w-full min-h-[90vh] pt-40 pb-20 px-6 flex flex-col items-center justify-center text-center relative">
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-bg-secondary)] border border-[var(--color-border)] mb-8">
            <span className="flex h-2 w-2 rounded-full bg-[var(--color-accent)]"></span>
            <span className="text-xs font-medium text-[var(--color-text-secondary)] uppercase tracking-widest">
              Suriname • India • Netherlands
            </span>
          </div>

          {/* Changed to font-medium and tracking-tighter for that premium display look */}
          <h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-[var(--color-text-primary)] leading-[1.05] mb-6">
            Strategic guidance for <br className="hidden md:block" />
            <span className="font-serif-italic font-normal text-slate-500">
              smarter
            </span>{" "}
            growth.
          </h1>

          <p className="text-lg md:text-xl font-light text-[var(--color-text-secondary)] max-w-2xl mb-10 leading-relaxed tracking-tight">
            We facilitate cross-border business by connecting investors,
            businesses, and talent. Expert advisory, digital excellence, and
            end-to-end marketing.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[var(--color-dark)] text-white font-medium hover:bg-opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-sm border border-transparent"
            >
              Book Consultation
              <svg
                width="18"
                height="18"
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
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-[var(--color-text-primary)] border border-[var(--color-border)] font-medium hover:bg-[var(--color-bg-secondary)] transition-all flex items-center justify-center"
            >
              Explore Services
            </Link>
          </div>

          <div className="mt-24 pt-10 border-t border-[var(--color-border)] w-full flex flex-col md:flex-row items-center justify-center gap-12 md:gap-32">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <span className="text-3xl font-semibold tracking-tighter text-[var(--color-text-primary)]">
                3
              </span>
              <span className="text-sm font-medium text-[var(--color-text-secondary)] mt-1 tracking-tight">
                Global Markets
              </span>
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <span className="text-3xl font-semibold tracking-tighter text-[var(--color-text-primary)]">
                12
              </span>
              <span className="text-sm font-medium text-[var(--color-text-secondary)] mt-1 tracking-tight">
                Core Services
              </span>
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <span className="text-3xl font-semibold tracking-tighter text-[var(--color-text-primary)]">
                B2B
              </span>
              <span className="text-sm font-medium text-[var(--color-text-secondary)] mt-1 tracking-tight">
                Growth & Advisory
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE PILLARS (Bento Grid Style) */}
      <section className="w-full max-w-7xl mx-auto px-6 py-24">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[var(--color-text-primary)] mb-4">
            Everything you need to{" "}
            <span className="font-serif-italic font-normal text-slate-500">
              scale.
            </span>
          </h2>
          <p className="text-[var(--color-text-secondary)] font-light tracking-tight max-w-xl text-lg">
            From establishing your brand identity to optimizing leadership
            decisions, we provide end-to-end solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Pillar 1: Marketing & Comm */}
          <div className="bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-[2rem] p-10 hover:shadow-sm transition-shadow duration-300">
            <div className="h-12 w-12 rounded-full bg-white border border-[var(--color-border)] flex items-center justify-center mb-8 shadow-sm">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[var(--color-text-primary)]"
              >
                <path d="M12 20v-6M6 20V10M18 20V4" />
              </svg>
            </div>
            <h3 className="text-2xl font-medium tracking-tight text-[var(--color-text-primary)] mb-3">
              Marketing & Communication
            </h3>
            <p className="text-[var(--color-text-secondary)] font-light tracking-tight mb-8 leading-relaxed">
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
                  className="px-3 py-1.5 bg-white border border-[var(--color-border)] rounded-full text-xs font-medium tracking-wide text-[var(--color-text-secondary)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Pillar 2: Consulting */}
          <div className="bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-[2rem] p-10 hover:shadow-sm transition-shadow duration-300">
            <div className="h-12 w-12 rounded-full bg-white border border-[var(--color-border)] flex items-center justify-center mb-8 shadow-sm">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[var(--color-text-primary)]"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
            </div>
            <h3 className="text-2xl font-medium tracking-tight text-[var(--color-text-primary)] mb-3">
              Business Consulting
            </h3>
            <p className="text-[var(--color-text-secondary)] font-light tracking-tight mb-8 leading-relaxed">
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
                  className="px-3 py-1.5 bg-white border border-[var(--color-border)] rounded-full text-xs font-medium tracking-wide text-[var(--color-text-secondary)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. CARIBBEAN INDIA CORRIDOR (Dark Premium Section) */}
      <section className="w-full px-6 py-12">
        <div className="max-w-7xl mx-auto bg-[var(--color-dark)] rounded-[2.5rem] p-10 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative border border-slate-800">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[var(--color-accent)] opacity-10 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="md:w-1/2 relative z-10">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6 leading-tight">
              The{" "}
              <span className="font-serif-italic font-normal text-slate-400">
                Caribbean India
              </span>{" "}
              Corridor.
            </h2>
            <p className="text-[var(--color-footer-text)] font-light text-lg mb-8 leading-relaxed tracking-tight">
              Bridging opportunities. We facilitate cross-border business by
              connecting investors, businesses, and talent across India,
              Suriname, and Guyana.
            </p>
            <Link
              to="/caribbean"
              className="inline-flex items-center gap-2 text-[var(--color-accent)] font-medium hover:opacity-80 transition-opacity tracking-tight"
            >
              Learn how we bridge markets
              <svg
                width="18"
                height="18"
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

          <div className="md:w-1/2 flex flex-col gap-4 relative z-10 w-full">
            <div className="bg-white/5 border border-white/10 p-6 rounded-[1.5rem] backdrop-blur-sm">
              <h4 className="text-white font-medium tracking-tight mb-2">
                Investment Facilitation
              </h4>
              <p className="text-slate-400 font-light text-sm tracking-tight">
                Helping investors from India identify portfolios to invest in
                Suriname and Guyana.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-[1.5rem] backdrop-blur-sm">
              <h4 className="text-white font-medium tracking-tight mb-2">
                Trade Partnerships
              </h4>
              <p className="text-slate-400 font-light text-sm tracking-tight">
                Helping businesses find trading and supply partners between
                nations.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-[1.5rem] backdrop-blur-sm">
              <h4 className="text-white font-medium tracking-tight mb-2">
                Talent Sourcing
              </h4>
              <p className="text-slate-400 font-light text-sm tracking-tight">
                Assisting companies to interview, select, and recruit top
                manpower from India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA */}
      <section className="w-full max-w-4xl mx-auto px-6 py-32 text-center">
        <h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-[var(--color-text-primary)] mb-6">
          Ready to{" "}
          <span className="font-serif-italic font-normal text-slate-500">
            get started?
          </span>
        </h2>
        <p className="text-lg font-light tracking-tight text-[var(--color-text-secondary)] mb-10 max-w-xl mx-auto">
          Whether you need an entire marketing team or high-level CEO advisory,
          we are here to cut through the complexity.
        </p>
        <Link
          to="/contact"
          className="inline-flex px-8 py-3.5 rounded-full bg-[var(--color-dark)] text-white font-medium hover:bg-opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-sm"
        >
          Book Consultation
        </Link>
      </section>
    </div>
  );
};

export default Home;
