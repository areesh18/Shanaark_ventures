import MaskRevealText from "../../components/animations/MaskRevealText";
import Button from "../../components/ui/Button";
import teamImg from "../../../public/about/team.png" 
const About = () => {
  return (
    <div className="min-h-screen bg-(--color-bg-primary) pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. HERO SECTION (Using the first sentence) */}
        <div className="max-w-6xl mx-auto text-center mb-24 animate-fade-up border-b border-(--color-border) pb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-(--color-bg-secondary) border border-(--color-border) mb-8">
            <span className="text-xs font-medium text-(--color-text-secondary) uppercase tracking-widest">
              Our Story
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-(--color-text-primary) mb-8 leading-[1.1]">
            Over a decade of <br className="hidden md:block"/>
            <span className="font-serif-italic font-normal text-slate-500">transforming </span>businesses.
          </h1>
          
          <MaskRevealText className="text-xl md:text-3xl font-light tracking-tight text-(--color-text-secondary) leading-relaxed max-w-5xl mx-auto">
            Founded in 2013 and rebranded in 2025 as Shaanark Ventures, our company has over a decade of experience in transforming businesses through innovative strategies and design services.
          </MaskRevealText>
        </div>

       {/* 2. STATS / MILESTONES BAR (Editorial Staircase) */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 md:gap-4 mb-32 md:mb-24 animate-fade-up delay-100 max-w-8xl mx-auto px-4 md:px-0">
          
          {/* Step 1: Top Left */}
          <div className="flex flex-col items-start md:mt-0">
            <span className="text-6xl lg:text-[8rem] font-normal md:font-light text-(--color-text-primary) tracking-tighter leading-none mb-4">2013</span>
            <span className="text-sm font-normal text-(--color-text-secondary) uppercase tracking-widest pl-3 ">Original Founding</span>
          </div>

          {/* Step 2: Middle (Down and Right) */}
          <div className="flex flex-col items-start md:mt-32">
            <span className="text-6xl lg:text-[8rem] font-normal md:font-light text-(--color-text-primary) tracking-tighter leading-none mb-4">10+</span>
            <span className="text-sm font-medium text-(--color-text-secondary) uppercase tracking-widest pl-3 ">Years Experience</span>
          </div>

          {/* Step 3: Bottom Right */}
          <div className="flex flex-col items-start md:mt-64">
            <span className="relative z-10 text-6xl lg:text-[8rem] font-normal md:font-light text-(--color-text-primary) tracking-tighter leading-none mb-4">2025</span>
            <span className="relative z-10 text-sm font-medium text-(--color-text-secondary) uppercase tracking-widest pl-3 ">Rebranded to Shaanark</span>
          </div>

        </div>
        {/* 3. CORE VISION (Editorial Staggered Layout) */}
        <div className="mb-32  delay-200">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            
            {/* Massive Offset Headline */}
            <div className="md:col-span-12 lg:col-span-10 lg:col-start-1 mb-4 md:mb-8">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-normal tracking-tighter text-(--color-text-primary) leading-[1.05]">
                Empowering organizations to thrive <br className="hidden lg:block"/>
                in a <span className="font-serif-italic font-normal text-slate-500">fast-paced world.</span>
              </h2>
            </div>

           {/* Structured Detail Stack - Left Aligned with a Top Border */}
            <div className="md:col-span-12 lg:col-span-9 lg:col-start-1 flex flex-col gap-8 md:gap-10 border-t border-(--color-border) pt-8 md:pt-12 text-left">
              <MaskRevealText className="text-xl md:text-2xl lg:text-3xl font-light tracking-tight text-slate-600 leading-relaxed">
                With a sharp focus on business acceleration and ecosystem development, we empower organizations to thrive in a dynamic, fast-paced world.
              </MaskRevealText>
              
              <MaskRevealText delay={0.05} className="text-xl md:text-2xl lg:text-3xl font-light tracking-tight text-slate-600 leading-relaxed">
                At Shaanark Ventures, we specialize in delivering transformative marketing solutions that create lasting impact. Our marketing services are integral to our broader vision of business transformation, helping clients across various sectors communicate their messages effectively and creatively.
              </MaskRevealText>
            </div>

          </div>
        </div>

        {/* 4. THE TEAM (Dark Premium Card with Image) */}
        <div className="w-full bg-(--color-dark) rounded-[2.5rem] p-6 md:p-12 lg:p-16 overflow-hidden relative animate-fade-up delay-300 border border-slate-800 shadow-xl group">
          

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 lg:gap-16">
            
            {/* The Photo Left Pane */}
            <div className="w-full md:w-2/5 shrink-0 h-64 md:h-80 rounded-2xl overflow-hidden relative">
              {/* Swap '/hero-img.webp' with a photo of the team or a sleek boardroom */}
              <img 
                src={teamImg}
                alt="The Team" 
                className="w-full h-full object-cover   transition-all duration-700 ease-out"
              />
            </div>
            
            {/* The Text Right Pane */}
            <div className="w-full md:w-3/5 text-center md:text-left">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-6">
                A team of seasoned professionals.
              </h3>
              <p className="text-lg md:text-xl font-normal tracking-tight text-slate-300 leading-relaxed">
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
            <Button hasArrow>Book Consultation</Button>
        </div>

      </div>
    </div>
  );
};

export default About;