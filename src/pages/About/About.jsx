import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-(--color-bg-primary) pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. HERO SECTION (Using the first sentence) */}
        <div className="max-w-4xl mx-auto text-center mb-24 animate-fade-up border-b border-(--color-border) pb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-(--color-bg-secondary) border border-(--color-border) mb-8">
            <span className="text-xs font-medium text-(--color-text-secondary) uppercase tracking-widest">
              Our Story
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-(--color-text-primary) mb-8 leading-[1.1]">
            Over a decade of <br className="hidden md:block"/>
            <span className="font-serif-italic font-normal text-slate-500">transforming </span>businesses.
          </h1>
          
          <p className="text-xl md:text-2xl font-light tracking-tight text-(--color-text-secondary) leading-relaxed max-w-3xl mx-auto">
            Founded in 2013 and rebranded in 2025 as Shaanark Ventures, our company has over a decade of experience in transforming businesses through innovative strategies and design services.
          </p>
        </div>

        {/* 2. STATS / MILESTONES BAR */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32 animate-fade-up delay-100">
          <div className="flex flex-col items-center justify-center p-8 bg-(--color-bg-secondary) border border-(--color-border) rounded-[2rem]">
            <span className="text-5xl font-medium text-(--color-text-primary) tracking-tighter mb-2">2013</span>
            <span className="text-sm font-medium text-(--color-text-secondary) uppercase tracking-widest">Original Founding</span>
          </div>
          <div className="flex flex-col items-center justify-center p-8 bg-(--color-bg-secondary) border border-(--color-border) rounded-[2rem]">
            <span className="text-5xl font-medium text-(--color-text-primary) tracking-tighter mb-2">10+</span>
            <span className="text-sm font-medium text-(--color-text-secondary) uppercase tracking-widest">Years Experience</span>
          </div>
          <div className="flex flex-col items-center justify-center p-8 bg-(--color-bg-secondary) border border-(--color-border) rounded-[2rem] relative overflow-hidden">
            {/* Subtle glow for the rebranding highlight */}
            <div className="absolute inset-0 bg-gradient-to-tr from-(--color-accent)/20 to-transparent opacity-50"></div>
            <span className="relative z-10 text-5xl font-medium text-(--color-text-primary) tracking-tighter mb-2">2025</span>
            <span className="relative z-10 text-sm font-medium text-(--color-text-secondary) uppercase tracking-widest">Rebranded to Shaanark</span>
          </div>
        </div>

        {/* 3. CORE VISION (Split Screen Layout using the second & third sentences) */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start mb-32 animate-fade-up delay-200">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-(--color-text-primary) leading-tight mb-6">
              Empowering organizations to thrive in a <span className="text-slate-400">fast-paced world.</span>
            </h2>
            <div className="h-1 w-24 bg-(--color-dark) rounded-full"></div>
          </div>
          
          <div className="lg:w-1/2 flex flex-col gap-8">
            <p className="text-lg font-light tracking-tight text-(--color-text-secondary) leading-relaxed">
              With a sharp focus on business acceleration and ecosystem development, we empower organizations to thrive in a dynamic, fast-paced world.
            </p>
            <p className="text-lg font-light tracking-tight text-(--color-text-secondary) leading-relaxed">
              At Shaanark Ventures, we specialize in delivering transformative marketing solutions that create lasting impact. Our marketing services are integral to our broader vision of business transformation, helping clients across various sectors—including international organizations and corporate entities—communicate their messages effectively and creatively.
            </p>
          </div>
        </div>

        {/* 4. THE TEAM (Dark Premium Card using the final sentence) */}
        <div className="w-full bg-(--color-dark) rounded-[2.5rem] p-10 md:p-20 overflow-hidden relative animate-fade-up delay-300 border border-slate-800 shadow-xl">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-(--color-accent) opacity-[0.05] blur-[120px] rounded-full pointer-events-none"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 lg:gap-24">
            <div className="md:w-1/3 flex justify-center md:justify-start">
              <div className="h-24 w-24 rounded-full border border-slate-700 bg-slate-800/50 flex items-center justify-center">
                 <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                   <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                   <circle cx="9" cy="7" r="4"></circle>
                   <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                   <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                 </svg>
              </div>
            </div>
            <div className="md:w-2/3 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-4">
                A team of seasoned professionals.
              </h3>
              <p className="text-lg font-light tracking-tight text-(--color-footer-text) leading-relaxed">
                We apply the latest technologies and methodologies to craft visually compelling solutions that resonate with audiences and drive absolute results.
              </p>
            </div>
          </div>
        </div>

        {/* 5. MANDATORY CONVERSION PANEL */}
        <div className="mt-32 pt-16 border-t border-(--color-border) text-center animate-fade-up delay-400">
           <h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-(--color-text-primary) mb-6">
             Ready to scale your <span className="font-serif-italic font-normal text-slate-500">vision?</span>
           </h2>
           <p className="text-lg font-light tracking-tight text-(--color-text-secondary) mb-10 max-w-xl mx-auto">
             Let’s discuss how our transformative strategies and marketing solutions can drive results for your organization.
           </p>
           <Link to="/contact" className="inline-flex px-8 py-3.5 rounded-full bg-(--color-dark) text-white font-medium hover:bg-opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-sm">
             Book Consultation
           </Link>
        </div>

      </div>
    </div>
  );
};

export default About;