import { Link } from "react-router-dom";

const COMPANY_VALUES = [
  {
    id: "global",
    title: "Global Execution.",
    description: "We don't just work across time zones; we bridge economies. Our team operates seamlessly between India, Suriname, and The Netherlands.",
    // Dark premium card
    style: "md:col-span-2 bg-(--color-dark) text-white",
    titleStyle: "text-white",
    textStyle: "text-slate-400"
  },
  {
    id: "impact",
    title: "High-Stakes Impact.",
    description: "From orchestrating cross-border trade to advising CEOs, your work here shapes businesses.",
    // Neon Accent card to make the page pop
    style: "md:col-span-1 bg-(--color-accent) text-(--color-text-primary)",
    titleStyle: "text-(--color-text-primary)",
    textStyle: "text-(--color-text-primary)/80"
  },
  {
    id: "autonomy",
    title: "Radical Autonomy.",
    description: "We hire elite talent and get out of their way. No micromanagement, just clear objectives and the absolute freedom to execute at the highest level.",
    // Clean light card
    style: "md:col-span-3 bg-(--color-bg-secondary) border border-(--color-border)",
    titleStyle: "text-(--color-text-primary)",
    textStyle: "text-(--color-text-secondary)"
  }
];

const OPEN_ROLES = [
  {
    id: 1,
    title: "Senior SEO Strategist",
    department: "Marketing & Comm",
    location: "Paramaribo, Suriname (Hybrid)",
    type: "Full-time"
  },
  {
    id: 2,
    title: "Lead Frontend Engineer",
    department: "Web Development",
    location: "Kolkata, India",
    type: "Full-time"
  },
  {
    id: 3,
    title: "Cross-Border Trade Consultant",
    department: "Business Advisory",
    location: "Remote / The Netherlands",
    type: "Contract"
  },
  {
    id: 4,
    title: "Digital Campaign Manager",
    department: "Marketing & Comm",
    location: "Kolkata, India",
    type: "Full-time"
  }
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-(--color-bg-primary) pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. HERO SECTION (Editorial Layout) */}
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-start mb-24 animate-fade-up">
          <div className="md:w-3/5">
            <h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-(--color-text-primary) leading-[1.05]">
              Build the future of <br />
              <span className="font-serif-italic font-normal text-slate-500">cross-border</span> growth.
            </h1>
          </div>
          <div className="md:w-2/5 md:pt-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-(--color-bg-secondary) border border-(--color-border) mb-6">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-medium text-(--color-text-secondary) uppercase tracking-widest">
                We are actively hiring
              </span>
            </div>
            <p className="text-lg font-light tracking-tight text-(--color-text-secondary) leading-relaxed">
              Join a collective of strategists, engineers, and creatives solving complex business challenges across three continents.
            </p>
          </div>
        </div>

        {/* 2. THE CULTURE BENTO BOX */}
        <div className="mb-32 animate-fade-up delay-100">
          <h2 className="text-2xl font-medium tracking-tight text-(--color-text-primary) mb-8">
            How we operate
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {COMPANY_VALUES.map((value) => (
              <div 
                key={value.id} 
                className={`p-10 md:p-12 rounded-[2rem] flex flex-col justify-between min-h-[300px] transition-transform hover:scale-[1.01] duration-300 ${value.style}`}
              >
                <h3 className={`text-3xl md:text-4xl font-medium tracking-tighter mb-8 ${value.titleStyle}`}>
                  {value.title}
                </h3>
                <p className={`text-lg font-light leading-relaxed tracking-tight max-w-2xl ${value.textStyle}`}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. TICKET-STYLE JOB CARDS */}
        <div className="mb-32 animate-fade-up delay-200">
          <div className="flex items-center justify-between mb-8 border-b border-(--color-border) pb-4">
            <h2 className="text-2xl font-medium tracking-tight text-(--color-text-primary)">
              Open Positions
            </h2>
            <span className="text-sm font-medium text-(--color-text-secondary) bg-(--color-bg-secondary) px-3 py-1 rounded-full">
              {OPEN_ROLES.length} Roles
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {OPEN_ROLES.map((role, index) => (
              <a 
                href="#apply" 
                key={role.id} 
                className="group relative bg-white border border-(--color-border) p-8 rounded-[2rem] overflow-hidden hover:border-(--color-dark) hover:shadow-xl transition-all duration-300 flex flex-col"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Top Row: Meta info */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs font-semibold uppercase tracking-widest text-(--color-text-secondary)">
                    {role.department}
                  </span>
                  <span className="text-xs font-medium bg-(--color-bg-secondary) text-(--color-text-primary) px-3 py-1 rounded-full">
                    {role.type}
                  </span>
                </div>
                
                {/* Middle: Title */}
                <h3 className="text-2xl font-medium text-(--color-text-primary) tracking-tight mb-8 group-hover:text-(--color-dark)/70 transition-colors">
                  {role.title}
                </h3>
                
                {/* Bottom Row: Location & Slide-in Apply Button */}
                <div className="mt-auto flex items-center justify-between pt-6 border-t border-(--color-border) group-hover:border-(--color-dark)/10 transition-colors">
                  <span className="text-sm font-light text-(--color-text-secondary) tracking-tight flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    {role.location}
                  </span>
                  
                  {/* Hidden "Apply" button that slides in on hover */}
                  <div className="flex items-center gap-2 text-sm font-medium text-(--color-dark) opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    Apply Now
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* 4. MANDATORY CONVERSION PANEL */}
        <div className="w-full bg-(--color-dark) rounded-[2.5rem] p-10 md:p-20 overflow-hidden relative animate-fade-up delay-300 border border-slate-800 shadow-2xl text-center">
          
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-(--color-accent) opacity-[0.05] blur-[150px] rounded-full pointer-events-none"></div>

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
              Don't see a <span className="font-serif-italic font-normal text-slate-300">perfect fit?</span>
            </h2>
            <p className="text-lg font-light tracking-tight text-(--color-footer-text) mb-10 leading-relaxed">
              We are always looking for exceptional talent. If you believe you can bring immense value to Shaanark Ventures, pitch us directly.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-(--color-dark) font-medium hover:bg-slate-100 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg"
            >
              Talk to Us
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Careers;