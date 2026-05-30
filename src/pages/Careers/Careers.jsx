import { Link } from "react-router-dom";

const COMPANY_VALUES = [
  {
    id: "global",
    title: "Global Execution.",
    description:
      "We don't just work across time zones; we bridge economies. Our team operates seamlessly between India, Suriname, and The Netherlands.",
    style: "md:col-span-2 bg-[var(--color-dark)]",
    titleStyle: "text-white",
    textStyle: "text-slate-400",
  },
  {
    id: "impact",
    title: "High-Stakes Impact.",
    description:
      "From orchestrating cross-border trade to advising CEOs, your work here shapes businesses.",
    style: "md:col-span-1 bg-[var(--color-accent)]",
    titleStyle: "text-[var(--color-text-primary)]",
    textStyle: "text-[var(--color-text-primary)]/75",
  },
  {
    id: "autonomy",
    title: "Radical Autonomy.",
    description:
      "We hire elite talent and get out of their way. No micromanagement, just clear objectives and the absolute freedom to execute at the highest level.",
    style:
      "md:col-span-3 bg-[var(--color-bg-secondary)] border border-[var(--color-border)]",
    titleStyle: "text-[var(--color-text-primary)]",
    textStyle: "text-[var(--color-text-secondary)]",
  },
];

const OPEN_ROLES = [
  {
    id: 1,
    title: "Senior SEO Strategist",
    department: "Marketing & Comm",
    location: "Paramaribo, Suriname (Hybrid)",
    type: "Full-time",
  },
  {
    id: 2,
    title: "Lead Frontend Engineer",
    department: "Web Development",
    location: "Kolkata, India",
    type: "Full-time",
  },
  {
    id: 3,
    title: "Cross-Border Trade Consultant",
    department: "Business Advisory",
    location: "Remote / The Netherlands",
    type: "Contract",
  },
  {
    id: 4,
    title: "Digital Campaign Manager",
    department: "Marketing & Comm",
    location: "Kolkata, India",
    type: "Full-time",
  },
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-(--color-bg-primary) pt-24 sm:pt-32 pb-16 sm:pb-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        {/* ── 1. HERO ─────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-24 items-start mb-16 sm:mb-24 animate-fade-up">

          {/* Headline */}
          <div className="w-full md:w-3/5">
            <h1 className="text-[2.6rem] leading-[1.05] sm:text-6xl md:text-7xl font-medium tracking-tighter text-(--color-text-primary)">
              Build the future of{" "}
              <br className="hidden sm:block" />
              <span className="font-serif-italic font-normal text-slate-500">
                cross-border
              </span>{" "}
              growth.
            </h1>
          </div>

          {/* Badge + description */}
          <div className="w-full md:w-2/5 md:pt-5">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-(--color-bg-secondary) border border-(--color-border) mb-4 sm:mb-6">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />

              <span className="text-[10px] sm:text-xs font-medium text-(--color-text-secondary) uppercase tracking-widest">
                We are actively hiring
              </span>
            </div>

            <p className="text-base sm:text-lg font-light tracking-tight text-(--color-text-secondary) leading-relaxed">
              Join a collective of strategists, engineers, and creatives solving
              complex business challenges across three continents.
            </p>
          </div>
        </div>

        {/* ── 2. CULTURE BENTO ────────────────────────────────── */}
        <div className="mb-16 sm:mb-32 animate-fade-up delay-100">
          <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-(--color-text-primary) mb-6 sm:mb-8">
            How we operate
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {COMPANY_VALUES.map((value) => (
              <div
                key={value.id}
                className={`p-8 sm:p-10 md:p-12 rounded-3xl sm:rounded-4xl flex flex-col justify-between min-h-60 sm:min-h-70 md:min-h-75 hover:scale-[1.01] transition-transform duration-300 ${value.style}`}
              >
                <h3
                  className={`text-2xl sm:text-3xl md:text-4xl font-medium tracking-tighter mb-6 sm:mb-8 ${value.titleStyle}`}
                >
                  {value.title}
                </h3>

                <p
                  className={`text-base sm:text-lg font-light leading-relaxed tracking-tight ${value.textStyle}`}
                >
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── 3. OPEN ROLES ───────────────────────────────────── */}
        <div className="mb-16 sm:mb-32 animate-fade-up delay-200">

          {/* Section header */}
          <div className="flex items-center justify-between mb-6 sm:mb-8 border-b border-(--color-border) pb-4">
            <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-(--color-text-primary)">
              Open Positions
            </h2>

            <span className="text-xs sm:text-sm font-medium text-(--color-text-secondary) bg-(--color-bg-secondary) px-3 py-1 rounded-full">
              {OPEN_ROLES.length} Roles
            </span>
          </div>

          {/* Roles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {OPEN_ROLES.map((role, index) => (
              <a
                href="#apply"
                key={role.id}
                className="group relative bg-white border border-(--color-border) p-6 sm:p-8 rounded-3xl sm:rounded-4xl overflow-hidden hover:border-(--color-dark) hover:shadow-xl transition-all duration-300 flex flex-col"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Top meta */}
                <div className="flex items-center justify-between mb-6 sm:mb-8">
                  <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-(--color-text-secondary)">
                    {role.department}
                  </span>

                  <span className="text-[10px] sm:text-xs font-medium bg-(--color-bg-secondary) text-(--color-text-primary) px-3 py-1 rounded-full">
                    {role.type}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-medium text-(--color-text-primary) tracking-tight mb-6 sm:mb-8 group-hover:text-(--color-dark)/70 transition-colors leading-snug">
                  {role.title}
                </h3>

                {/* Bottom row */}
                <div className="mt-auto flex items-center justify-between pt-5 sm:pt-6 border-t border-(--color-border) group-hover:border-(--color-dark)/10 transition-colors">
                  <span className="text-xs sm:text-sm font-light text-(--color-text-secondary) tracking-tight flex items-center gap-1.5">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="shrink-0"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>

                    <span className="truncate max-w-40 sm:max-w-none">
                      {role.location}
                    </span>
                  </span>

                  {/* Apply */}
                  <div className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-(--color-dark) sm:opacity-0 sm:translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shrink-0 ml-3">
                    Apply Now

                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* ── 4. CONVERSION PANEL ─────────────────────────────── */}
        <div className="w-full bg-(--color-dark) rounded-[1.75rem] sm:rounded-[2.5rem] p-8 sm:p-12 md:p-20 overflow-hidden relative animate-fade-up delay-300 border border-slate-800 shadow-2xl text-center">

          {/* Ambient glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-150 bg-[var(--color-accent)] opacity-[0.05] blur-[150px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mb-4 sm:mb-6 leading-[1.1]">
              Don't see a{" "}
              <span className="font-serif-italic font-normal text-slate-300">
                perfect fit?
              </span>
            </h2>

            <p className="text-base sm:text-lg font-light tracking-tight text-(--color-footer-text) mb-8 sm:mb-10 leading-relaxed max-w-md sm:max-w-none">
              We are always looking for exceptional talent. If you believe you
              can bring immense value to Shaanark Ventures, pitch us directly.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white text-(--color-dark) text-sm font-medium hover:bg-slate-100 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg"
            >
              Talk to Us

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
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Careers;