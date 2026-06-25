import { Link } from "react-router-dom";
import MaskRevealText from "../../components/animations/MaskRevealText";
import Button from "../../components/ui/Button";
import handShake from "../../assets/handshake.webp";

// Derive job codes: India → I-x, Netherlands → N-x, Suriname → SU-x
const getCountryPrefix = (location) => {
  if (location.toLowerCase().includes("india")) return "I";
  if (location.toLowerCase().includes("netherlands")) return "N";
  if (location.toLowerCase().includes("suriname")) return "SU";
  if (location.toLowerCase().includes("singapore")) return "S";
  return "X";
};

// Build counters per prefix so codes are sequential within each country
const buildJobCodes = (roles) => {
  const counters = {};
  return roles.map((role) => {
    const prefix = getCountryPrefix(role.location);
    counters[prefix] = (counters[prefix] || 0) + 1;
    return { ...role, jobCode: `${prefix}-${counters[prefix]}` };
  });
};

const OPEN_ROLES = buildJobCodes([
  {
    id: 1,
    title: "Graphic Designer",
    department: "Marketing & Communication",
    location: "Paramaribo, Suriname",
    type: "Full-time",
  },
  {
    id: 2,
    title: "Video Content Creator",
    department: "Marketing & Communication",
    location: "Paramaribo, Suriname",
    type: "Full-time",
  },
  {
    id: 3,
    title: "Marketing & Communication Officer",
    department: "Marketing & Communication",
    location: "Paramaribo, Suriname",
    type: "Full-time",
  },
  {
    id: 4,
    title: "Digital Marketing Intern",
    department: "Marketing & Communication",
    location: "Kolkata, India",
    type: "Internship",
  },
  {
    id: 5,
    title: "Commission Based Sales Consultant",
    department: "Business Advisory",
    location: "Netherlands",
    type: "Full-time",
  },
  {
    id: 6,
    title: "Commission based Sales Consultant",
    department: "Business Advisory",
    location: "Paramaribo, Suriname",
    type: "Freelance",
  },
  {
    id: 7,
    title: "Commission based Sales Consultant",
    department: "Business Advisory",
    location: "Kolkata, India",
    type: "Freelance",
  },
  {
    id: 8,
    title: "Marketing & Sales Intern",
    department: "Marketing & Communication",
    location: "Netherlands",
    type: "Internship",
  },
]);

const JobCodeBadge = ({ code }) => {
  return (
    <Button
      aria-label={`Job code: ${code}`}
      className={`
        px-5 py-2.5 rounded-full border text-sm font-semibold tracking-wide
        transition-all duration-300 select-none cursor-pointer
        
      `}
    >
      <span className="inline-flex items-center gap-2">
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-60"
        >
          <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
          <line x1="7" y1="7" x2="7.01" y2="7" />
        </svg>
        {code}
      </span>
    </Button>
  );
};

const Careers = () => {
  return (
    <div className="min-h-screen bg-(--color-bg-primary) pt-24 sm:pt-32 pb-16 sm:pb-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        {/* ── 1. HERO ─────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-24 items-start mb-16 sm:mb-24 animate-fade-up">
          {/* Headline */}
          <div className="w-full md:w-3/5">
            <h1 className="text-[2.6rem] leading-[1.05] sm:text-6xl md:text-7xl font-medium tracking-tighter text-(--color-text-primary)">
              Build the future of <br className="hidden sm:block" />
              <span className="font-serif-italic font-normal text-slate-500">
                cross-border
              </span>{" "}
              growth.
            </h1>
            <div className=" max-w-md  mt-8 sm:mt-10 overflow-hidden rounded-2xl">
              <img
                src={handShake}
                alt="Team collaborating"
                className="w-full h-auto md:h-64 object-cover"
              />
            </div>
          </div>

          {/* Description */}
          <div className="w-full md:w-2/5 md:mt-64">
            <MaskRevealText className="text-lg sm:text-2xl font-normal tracking-tight text-slate-600 leading-relaxed">
              Join a collective of strategists, engineers, and creatives solving
              complex business challenges across three continents.
            </MaskRevealText>
          </div>
        </div>

        {/* ── 2. APPLICATION REQUIREMENTS ─────────────────────── */}
        <div className="mb-10 sm:mb-14 animate-fade-up">
          <div className="rounded-2xl border border-slate-200 bg-slate-50/70 px-7 py-7 sm:px-10 sm:py-8">
            <h2 className="text-lg sm:text-xl font-semibold text-(--color-text-primary) tracking-tight mb-4">
              Application Requirements
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
              Interested candidates are requested to submit the following
              documents along with their application:
            </p>
            <ul className="space-y-2 mb-5">
              {[
                "A cover letter explaining why they should be considered for the position.",
                "An updated resume / CV.",
                "Contact details of two professional references.",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm sm:text-base text-slate-600"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Please email all application materials to{" "}
              <a
                href="mailto:hr@shaanark.com"
                className="font-medium text-(--color-text-primary) underline underline-offset-2 hover:text-slate-600 transition-colors"
              >
                hr@shaanark.com
              </a>
              . Only shortlisted candidates will be contacted.
            </p>
          </div>
        </div>

        {/* ── 3. OPEN ROLES (Editorial Stacked Layout) ────────── */}
        <div className="mb-16 sm:mb-32 animate-fade-up delay-200">
          <div className="flex flex-col border-t border-(--color-border)">
            {OPEN_ROLES.map((role, index) => (
              <div
                key={role.id}
                className="flex flex-col items-start py-6 border-b border-(--color-border) hover:bg-slate-50/50 transition-colors duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Title */}
                <h3 className="text-2xl md:text-[1.75rem] font-medium text-(--color-text-primary) tracking-tight mb-4">
                  {role.title}
                </h3>

                {/* Meta Row (Icons + Text) */}
                <div className="flex flex-wrap items-center gap-5 sm:gap-6 text-sm text-slate-500 mb-6">
                  <span className="flex items-center gap-1.5 font-medium">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    {role.location}
                  </span>
                  <span className="flex items-center gap-1.5 font-medium">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    {role.type}
                  </span>
                  <span className="flex items-center gap-1.5 font-medium">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
                      <line x1="9" x2="15" y1="22" y2="22" />
                      <line x1="9" x2="15" y1="18" y2="18" />
                      <line x1="9" x2="15" y1="14" y2="14" />
                      <line x1="9" x2="15" y1="10" y2="10" />
                    </svg>
                    {role.department}
                  </span>
                </div>

                {/* Job Code Badge */}
                <div className="flex items-center gap-6">
                  <JobCodeBadge code={role.jobCode} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 3. CONVERSION PANEL ─────────────────────────────── */}
        <div className="w-full bg-(--color-dark) rounded-[1.75rem] sm:rounded-[2.5rem] p-8 sm:p-12 md:p-20 overflow-hidden relative animate-fade-up delay-300 border border-slate-800 shadow-2xl text-center">
          {/* Ambient glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-150 bg-(--color-accent) opacity-[0.05] blur-[150px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mb-4 sm:mb-6 leading-[1.1]">
              Don't see a{" "}
              <span className="font-serif-italic font-normal text-slate-300">
                perfect fit?
              </span>
            </h2>

            <p className="text-lg sm:text-xl font-normal tracking-tight text-slate-300 mb-8 sm:mb-10 leading-relaxed max-w-md sm:max-w-none">
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
