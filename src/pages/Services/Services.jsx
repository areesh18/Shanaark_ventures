import { useState } from "react";
import { Link } from "react-router-dom";

const SERVICES_DATA = [
  {
    category: "Marketing & Communication",
    items: [
      {
        id: "graphic-design",
        title: "Graphic Design",
        headline: "Designs that don't just look good — they convert.",
        description:
          "We create visually compelling designs that communicate your brand clearly and drive engagement across digital and print platforms.",
        deliverables: [
          "Social media creatives",
          "Marketing collaterals",
          "Business presentations",
          "Ad creatives",
        ],
      },
      {
        id: "seo",
        title: "SEO (Search Engine)",
        headline: "Get found by the right audience at the right time.",
        description:
          "Our SEO strategies help your business rank higher on search engines, bringing in consistent and high-quality organic traffic.",
        deliverables: [
          "Keyword research & strategy",
          "On-page & technical SEO",
          "Content optimization",
          "Performance tracking",
        ],
      },
      {
        id: "branding",
        title: "Branding Kit Design",
        headline: "Build a brand that people remember.",
        description:
          "We design complete branding kits that define your identity and create a consistent presence across all platforms.",
        deliverables: [
          "Logo design",
          "Brand guidelines",
          "Color & typography system",
          "Visual identity assets",
        ],
      },
      {
        id: "tiktok",
        title: "Social Media Marketing",
        headline: "Capture attention where it matters most.",
        description:
          "We help brands grow through creative content and targeted campaigns on top social platforms that drive engagement and virality.",
        deliverables: [
          "Content strategy",
          "Trend-based campaigns",
          "Influencer collaboration",
          "Performance tracking",
        ],
      },
      {
        id: "marketing-management",
        title: "Marketing Management",
        headline: "Your complete marketing team, in one place.",
        description:
          "We handle your end-to-end marketing efforts, ensuring consistent growth and alignment with your business goals.",
        deliverables: [
          "Strategy planning",
          "Campaign execution",
          "Multi-channel management",
          "Reporting & optimization",
        ],
      },
      {
        id: "corp-comm",
        title: "Corporate Communication",
        headline: "Communicate with clarity and authority.",
        description:
          "We help businesses craft professional communication that strengthens their brand image and stakeholder relationships.",
        deliverables: [
          "Internal communication",
          "External messaging",
          "PR support",
          "Content creation",
        ],
      },
      {
        id: "web-dev",
        title: "Web Development",
        headline: "Websites built for performance and growth.",
        description:
          "We design and develop modern, responsive websites that deliver seamless user experience and business results.",
        deliverables: [
          "UI/UX design",
          "Website development",
          "Mobile optimization",
          "Maintenance & support",
        ],
      },
    ],
  },
  {
    category: "Consulting & Advisory",
    items: [
      {
        id: "corridor",
        title: "Caribbean India Corridor",
        headline: "Bridging opportunities between markets.",
        description:
          "We facilitate cross-border business by connecting investors, businesses, and talent across India, Suriname, and Guyana.",
        deliverables: [
          "Investment facilitation",
          "Trade partnerships",
          "Market entry support",
          "Talent sourcing",
        ],
      },
      {
        id: "biz-advisory",
        title: "Business Advisory",
        headline: "Strategic guidance for smarter growth.",
        description:
          "We provide expert advisory to help businesses scale, optimize operations, and make informed decisions.",
        deliverables: [
          "Business strategy",
          "Market analysis",
          "Growth planning",
          "Operational advisory",
        ],
      },
      {
        id: "ceo-advisory",
        title: "CEO Advisory",
        headline: "High-level guidance for leadership decisions.",
        description:
          "We work closely with business leaders to support critical decision-making and long-term strategic direction.",
        deliverables: [
          "Leadership strategy",
          "Decision frameworks",
          "Growth roadmap",
          "Risk assessment",
        ],
      },
      {
        id: "sales-training",
        title: "Marketing & Sales Training",
        headline: "Equip your team to perform and win.",
        description:
          "We train your teams with practical strategies and tools to improve marketing effectiveness and sales performance.",
        deliverables: [
          "Sales training programs",
          "Marketing workshops",
          "Team capability building",
          "Performance frameworks",
        ],
      },
    ],
  },
];

const ServiceRow = ({ service, isOpen, onToggle }) => (
  <div className="border-b border-(--color-border) group">
    {/* Toggle button */}
    <button
      onClick={onToggle}
      className="w-full py-5 sm:py-6 flex items-center justify-between text-left hover:opacity-70 transition-opacity focus:outline-none gap-4"
    >
      <h3
        className={`text-xl sm:text-2xl font-medium tracking-tight transition-colors duration-300 ${
          isOpen
            ? "text-(--color-dark)"
            : "text-(--color-text-primary)"
        }`}
      >
        {service.title}
      </h3>

      <div className="h-8 w-8 rounded-full border border-(--color-border) flex items-center justify-center shrink-0 group-hover:bg-(--color-bg-secondary) transition-colors">
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </div>
    </button>

    {/* Expandable body */}
    <div
      className={`grid transition-all duration-500 ease-in-out overflow-hidden ${
        isOpen
          ? "grid-rows-[1fr] opacity-100 pb-7 sm:pb-8"
          : "grid-rows-[0fr] opacity-0 pb-0"
      }`}
    >
      <div className="min-h-0">
        <div className="pl-0 sm:pl-5 border-l-0 sm:border-l-2 sm:border-(--color-accent)">
          <h4 className="text-base sm:text-lg font-medium text-(--color-text-primary) mb-2 tracking-tight">
            {service.headline}
          </h4>
          <p className="text-(--color-text-secondary) text-sm font-light leading-relaxed mb-5 tracking-tight">
            {service.description}
          </p>

          <div>
            <h5 className="text-[10px] font-semibold uppercase tracking-widest text-(--color-text-secondary) mb-3">
              Key Deliverables
            </h5>
            <ul className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-y-2 gap-x-4">
              {service.deliverables.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-(--color-dark) mt-0.5 shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-xs font-medium text-(--color-text-primary) tracking-tight">
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

const Services = () => {
  const [openId, setOpenId] = useState(null);

  const toggleOpen = (id) => setOpenId(openId === id ? null : id);

  return (
    <div className="w-full bg-(--color-bg-primary) min-h-screen">

      {/* ── 1. HEADER ─────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 pt-28 sm:pt-32 pb-12 sm:pb-16 animate-fade-up border-b border-(--color-border)">
        <h1 className="text-[2.6rem] leading-[1.05] sm:text-6xl md:text-7xl font-medium tracking-tighter text-(--color-text-primary) mb-4 sm:mb-6">
          Solutions built to{" "}
          <br className="hidden sm:block" />
          <span className="font-serif-italic font-normal text-slate-500">
            scale with you.
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl font-light tracking-tight text-(--color-text-secondary) leading-relaxed max-w-xl sm:max-w-2xl">
          From establishing your brand identity to optimizing complex leadership
          decisions, our comprehensive services connect markets and drive growth.
        </p>
      </div>

      {/* ── 2. ACCORDION GRID ─────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 pb-20 sm:pb-32 pt-10 sm:pt-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-16 xl:gap-24 items-start">

          {SERVICES_DATA.map((group, groupIndex) => (
            <div
              key={group.category}
              className={`animate-fade-up delay-${(groupIndex + 1) * 100} ${
                groupIndex === 1
                  ? "mt-0 lg:mt-0 border-t border-(--color-border) lg:border-t-0 pt-10 lg:pt-0"
                  : ""
              }`}
            >
              {/* Category label */}
              <h2 className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-(--color-text-secondary) mb-3 sm:mb-4 border-b border-(--color-border) pb-4">
                {group.category}
              </h2>

              {/* Accordion rows */}
              <div className="flex flex-col">
                {group.items.map((service) => (
                  <ServiceRow
                    key={service.id}
                    service={service}
                    isOpen={openId === service.id}
                    onToggle={() => toggleOpen(service.id)}
                  />
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* ── 3. BOTTOM CTA ─────────────────────────────────────── */}
      <div className="w-full bg-(--color-bg-secondary) border-t border-(--color-border) py-16 sm:py-24 px-5 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tighter text-(--color-text-primary) mb-4 sm:mb-6 leading-[1.1]">
          Ready to scale your{" "}
          <span className="font-serif-italic font-normal text-slate-500">
            vision?
          </span>
        </h2>
        <p className="text-base sm:text-lg font-light tracking-tight text-(--color-text-secondary) mb-8 sm:mb-10 max-w-md sm:max-w-xl mx-auto leading-relaxed">
          Every project starts with a conversation. Let's discuss how we can
          align our services with your specific business goals.
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
      </div>

    </div>
  );
};

export default Services;