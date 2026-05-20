import { useState } from "react";
import { Link } from "react-router-dom";

const SERVICES_DATA = [
  {
    category: "Marketing & Communication",
    items: [
      {
        id: "graphic-design",
        title: "Graphic Design",
        headline: "Designs that don't just look good—they convert.",
        description: "We create visually compelling designs that communicate your brand clearly and drive engagement across digital and print platforms.",
        deliverables: ["Social media creatives", "Marketing collaterals", "Business presentations", "Ad creatives"]
      },
      {
        id: "seo",
        title: "SEO (Search Engine)",
        headline: "Get found by the right audience at the right time.",
        description: "Our SEO strategies help your business rank higher on search engines, bringing in consistent and high-quality organic traffic.",
        deliverables: ["Keyword research & strategy", "On-page & technical SEO", "Content optimization", "Performance tracking"]
      },
      {
        id: "branding",
        title: "Branding Kit Design",
        headline: "Build a brand that people remember.",
        description: "We design complete branding kits that define your identity and create a consistent presence across all platforms.",
        deliverables: ["Logo design", "Brand guidelines", "Color & typography system", "Visual identity assets"]
      },
      {
        id: "tiktok",
        title: "Social Media Marketing",
        headline: "Capture attention where it matters most.",
        description: "We help brands grow through creative content and targeted campaigns on top social platforms that drive engagement and virality.",
        deliverables: ["Content strategy", "Trend-based campaigns", "Influencer collaboration", "Performance tracking"]
      },
      {
        id: "marketing-management",
        title: "Marketing Management",
        headline: "Your complete marketing team, in one place.",
        description: "We handle your end-to-end marketing efforts, ensuring consistent growth and alignment with your business goals.",
        deliverables: ["Strategy planning", "Campaign execution", "Multi-channel management", "Reporting & optimization"]
      },
      {
        id: "corp-comm",
        title: "Corporate Communication",
        headline: "Communicate with clarity and authority.",
        description: "We help businesses craft professional communication that strengthens their brand image and stakeholder relationships.",
        deliverables: ["Internal communication", "External messaging", "PR support", "Content creation"]
      },
      {
        id: "web-dev",
        title: "Web Development",
        headline: "Websites built for performance and growth.",
        description: "We design and develop modern, responsive websites that deliver seamless user experience and business results.",
        deliverables: ["UI/UX design", "Website development", "Mobile optimization", "Maintenance & support"]
      }
    ]
  },
  {
    category: "Consulting & Advisory",
    items: [
      {
        id: "corridor",
        title: "Caribbean India Corridor",
        headline: "Bridging opportunities between markets.",
        description: "We facilitate cross-border business by connecting investors, businesses, and talent across India, Suriname, and Guyana.",
        deliverables: ["Investment facilitation", "Trade partnerships", "Market entry support", "Talent sourcing"]
      },
      {
        id: "biz-advisory",
        title: "Business Advisory",
        headline: "Strategic guidance for smarter growth.",
        description: "We provide expert advisory to help businesses scale, optimize operations, and make informed decisions.",
        deliverables: ["Business strategy", "Market analysis", "Growth planning", "Operational advisory"]
      },
      {
        id: "ceo-advisory",
        title: "CEO Advisory",
        headline: "High-level guidance for leadership decisions.",
        description: "We work closely with business leaders to support critical decision-making and long-term strategic direction.",
        deliverables: ["Leadership strategy", "Decision frameworks", "Growth roadmap", "Risk assessment"]
      },
      {
        id: "sales-training",
        title: "Marketing & Sales Training",
        headline: "Equip your team to perform and win.",
        description: "We train your teams with practical strategies and tools to improve marketing effectiveness and sales performance.",
        deliverables: ["Sales training programs", "Marketing workshops", "Team capability building", "Performance frameworks"]
      }
    ]
  }
];

const Services = () => {
  const [openId, setOpenId] = useState(null);

  const toggleOpen = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-full bg-[var(--color-bg-primary)] min-h-screen">
      
      {/* 1. HEADER SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-24 animate-fade-up text-center md:text-left border-b border-[var(--color-border)] mb-16">
        <h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-[var(--color-text-primary)] mb-6 leading-[1.1]">
          Solutions built to <br className="hidden md:block"/>
          <span className="font-serif-italic font-normal text-slate-500">scale with you.</span>
        </h1>
        <p className="text-lg md:text-xl font-light tracking-tight text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">
          From establishing your brand identity to optimizing complex leadership decisions, our comprehensive services connect markets and drive growth.
        </p>
      </div>

      {/* 2. SERVICES TWO-COLUMN GRID */}
      {/* Changed to max-w-7xl to allow the two columns to sit side-by-side comfortably */}
      <div className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {SERVICES_DATA.map((group, groupIndex) => (
            <div key={group.category} className={`animate-fade-up delay-${(groupIndex + 1) * 100}`}>
              
              {/* Category Header */}
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-secondary)] mb-4 border-b border-[var(--color-border)] pb-4">
                {group.category}
              </h2>

              {/* Service Rows */}
              <div className="flex flex-col">
                {group.items.map((service) => {
                  const isOpen = openId === service.id;
                  
                  return (
                    <div key={service.id} className="border-b border-[var(--color-border)] group">
                      
                      {/* Clickable Header Row - Reduced padding (py-6) for compactness */}
                      <button 
                        onClick={() => toggleOpen(service.id)}
                        className="w-full py-6 flex items-center justify-between text-left hover:opacity-70 transition-opacity focus:outline-none"
                      >
                        {/* Scaled text down slightly to fit the split column beautifully */}
                        <h3 className={`text-2xl font-medium tracking-tight transition-colors duration-300 ${isOpen ? 'text-[var(--color-dark)]' : 'text-[var(--color-text-primary)]'}`}>
                          {service.title}
                        </h3>
                        
                        {/* Scaled icon down slightly to match */}
                        <div className="h-8 w-8 rounded-full border border-[var(--color-border)] flex items-center justify-center shrink-0 ml-4 group-hover:bg-[var(--color-bg-secondary)] transition-colors">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                          </svg>
                        </div>
                      </button>

                      {/* Expandable Content Area */}
                      <div className={`grid transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-8' : 'grid-rows-[0fr] opacity-0 pb-0'}`}>
                        <div className="min-h-0">
                          <div className="pl-0 md:pl-6 border-l-0 md:border-l-2 border-[var(--color-accent)] max-w-xl">
                            <h4 className="text-lg font-medium text-[var(--color-text-primary)] mb-2 tracking-tight">
                              {service.headline}
                            </h4>
                            <p className="text-[var(--color-text-secondary)] text-sm font-light leading-relaxed mb-6 tracking-tight">
                              {service.description}
                            </p>

                            <div>
                              <h5 className="text-[10px] font-semibold uppercase tracking-widest text-[var(--color-text-secondary)] mb-3">
                                Key Deliverables
                              </h5>
                              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                                {service.deliverables.map((item, index) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-dark)] mt-0.5 shrink-0">
                                      <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                    <span className="text-xs font-medium text-[var(--color-text-primary)] tracking-tight">
                                      {item}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* 3. BOTTOM CTA */}
      <div className="w-full bg-[var(--color-bg-secondary)] border-t border-[var(--color-border)] py-24 px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-[var(--color-text-primary)] mb-6">
          Ready to scale your <span className="font-serif-italic font-normal text-slate-500">vision?</span>
        </h2>
        <p className="text-lg font-light tracking-tight text-[var(--color-text-secondary)] mb-10 max-w-xl mx-auto">
          Every project starts with a conversation. Let’s discuss how we can align our services with your specific business goals.
        </p>
        <Link to="/contact" className="inline-flex px-8 py-3.5 rounded-full bg-[var(--color-dark)] text-white font-medium hover:bg-opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-sm">
          Book Consultation
        </Link>
      </div>

    </div>
  );
};

export default Services;