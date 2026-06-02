import { useState, useRef } from "react";
import gsap from "gsap";
import Button from "../../components/ui/Button";

const SERVICES_DATA = [
  // ... (Keep your exact SERVICES_DATA array here, I am omitting it for brevity) ...
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

// ── 1. CLEAN, STATELESS COMPONENT ──
// ServiceRow now only handles UI rendering and passes events back up.
const ServiceRow = ({
  service,
  isOpen,
  onToggleClick,
  onMouseEnter,
  onMouseMove,
  onMouseLeave,
}) => (
  <div className="border-b border-(--color-border) group relative transition-colors">
    <button
      onClick={() => onToggleClick(service.id)}
      onMouseEnter={(e) => onMouseEnter(e, service.id, isOpen)}
      onMouseMove={(e) => onMouseMove(e, isOpen)}
      onMouseLeave={onMouseLeave}
      className="w-full py-4 sm:py-5 flex items-center justify-between text-left focus:outline-none gap-4 relative z-10"
    >
      <h3
        className={`text-xl sm:text-2xl font-medium tracking-tight transition-colors duration-300 ${
          isOpen
            ? "text-(--color-dark)"
            : "text-(--color-text-primary) group-hover:text-(--color-text-secondary)"
        }`}
      >
        {service.title}
      </h3>

      <div className="h-8 w-8 rounded-full border border-(--color-border) bg-white flex items-center justify-center shrink-0 transition-colors">
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform duration-300 text-(--color-text-primary) ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </div>
    </button>

    <div
      className={`grid transition-all duration-500 ease-in-out relative z-10 ${
        isOpen
          ? "grid-rows-[1fr] opacity-100 pb-6 sm:pb-10"
          : "grid-rows-[0fr] opacity-0 pb-0"
      }`}
    >
      <div className="min-h-0">
        {/* Mobile: image strip on top, then text. Desktop: text left, image right (side-by-side). */}

        {/* ── MOBILE-ONLY full-width image strip ── */}
        <div className="block md:hidden w-full h-44 relative overflow-hidden rounded-xl mt-3 mb-5 border border-(--color-border) bg-(--color-bg-secondary)">
          <img
            src={`/services/${service.id}.jpg`}
            alt={service.title}
            className="absolute inset-0 w-full h-full object-cover opacity-90"
            onError={(e) => {
              e.target.src = "/hero-img.webp";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          <div className="absolute inset-0 border border-black/5 rounded-xl pointer-events-none" />
        </div>

        {/* ── Content row (text always, desktop image on right) ── */}
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 lg:gap-12 items-start md:items-center">
          {/* Text column */}
          <div className="w-full md:w-2/3 lg:w-3/4 pl-0 sm:pl-6 border-l-0 sm:border-l-2 border-(--color-accent)">
            <h4 className="text-lg sm:text-2xl lg:text-3xl font-medium text-(--color-text-primary) mb-3 sm:mb-4 lg:mb-6 tracking-tight leading-snug">
              {service.headline}
            </h4>
            <p className="text-(--color-text-secondary) text-sm sm:text-lg font-light leading-relaxed mb-6 lg:mb-12 tracking-tight max-w-2xl">
              {service.description}
            </p>

            <div>
              <h5 className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-(--color-text-secondary) mb-3 lg:mb-6">
                Key Deliverables
              </h5>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 sm:gap-y-4 gap-x-6">
                {service.deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 sm:gap-3">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-(--color-dark) mt-[3px] shrink-0 sm:w-4 sm:h-4"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-xs sm:text-base font-medium text-(--color-text-primary) tracking-tight">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Desktop-only side image */}
          <div className="hidden md:block md:w-1/3 lg:w-1/4 self-auto aspect-[4/5] relative overflow-hidden rounded-2xl border border-(--color-border) bg-(--color-bg-secondary) shadow-sm shrink-0">
            <img
              src={`/services/${service.id}.jpg`}
              alt={service.title}
              className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-[1.5s] ease-out hover:scale-105"
              onError={(e) => {
                e.target.src = "/hero-img.webp";
              }}
            />
            <div className="absolute inset-0 border border-black/5 rounded-2xl pointer-events-none z-10" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ── 2. MAIN COMPONENT WITH GLOBAL GSAP LOGIC ──
const Services = () => {
  const [openId, setOpenId] = useState(null);

  // Single global references for the floating image
  const floatingContainerRef = useRef(null);
  const floatingImgRef = useRef(null);

  const handleRowMouseEnter = (e, serviceId, isOpen) => {
    if (isOpen || !floatingContainerRef.current || !floatingImgRef.current)
      return;

    // 1. Swap image source bypassing React state for maximum performance
    floatingImgRef.current.src = `/services/${serviceId}.jpg`;

    // 2. THE TELEPORT: Instantly snap to mouse coordinates before making it visible
    gsap.set(floatingContainerRef.current, {
      x: e.clientX,
      y: e.clientY,
      xPercent: -50,
      yPercent: -50,
    });

    // 3. Pop it into view
    gsap.to(floatingContainerRef.current, {
      autoAlpha: 1,
      scale: 1,
      rotation: 2,
      duration: 0.4,
      ease: "back.out(1.5)",
      overwrite: "auto",
    });
  };

  const handleRowMouseMove = (e, isOpen) => {
    if (isOpen || !floatingContainerRef.current) return;

    gsap.to(floatingContainerRef.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  const handleRowMouseLeave = () => {
    if (!floatingContainerRef.current) return;

    gsap.to(floatingContainerRef.current, {
      autoAlpha: 0,
      scale: 0.8,
      rotation: 0,
      duration: 0.3,
      ease: "power2.in",
      overwrite: "auto",
    });
  };

  const handleToggleClick = (serviceId) => {
    setOpenId(openId === serviceId ? null : serviceId);

    // Force hide global image immediately on click
    if (floatingContainerRef.current) {
      gsap.to(floatingContainerRef.current, {
        autoAlpha: 0,
        scale: 0.8,
        duration: 0.2,
        overwrite: true,
      });
    }
  };

  return (
    <div className="w-full bg-(--color-bg-primary) min-h-screen relative">
      {/* ── THE SINGLE GLOBAL FLOATING IMAGE ── */}
      <div
        ref={floatingContainerRef}
        className="fixed top-0 left-0 w-48 lg:w-64 aspect-[4/5] rounded-xl overflow-hidden pointer-events-none z-50 invisible opacity-0 scale-80 shadow-2xl hidden md:block"
      >
        <img
          ref={floatingImgRef}
          src=""
          alt=""
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = "/hero-img.webp";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 pt-28 sm:pt-32 pb-12 sm:pb-16 animate-fade-up border-b border-(--color-border)">
        <h1 className="text-[2.6rem] leading-[1.05] sm:text-6xl md:text-7xl font-medium tracking-tighter text-(--color-text-primary) mb-4 sm:mb-6">
          Solutions built to <br className="hidden sm:block" />
          <span className="font-serif-italic font-normal text-slate-500">
            scale with you.
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl font-light tracking-tight text-(--color-text-secondary) leading-relaxed max-w-xl sm:max-w-2xl">
          From establishing your brand identity to optimizing complex leadership
          decisions, our comprehensive services connect markets and drive
          growth.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 pb-20 sm:pb-32 pt-10 sm:pt-14">
        <div className="flex flex-col gap-16 md:gap-24 items-stretch">
          {SERVICES_DATA.map((group, groupIndex) => (
            <div
              key={group.category}
              className={`animate-fade-up delay-${(groupIndex + 1) * 100}`}
            >
              <h2
                className={`text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-(--color-text-secondary) mb-3 sm:mb-4 border-b border-(--color-border) pb-4 ${
                  groupIndex === 1 ? "text-right" : "text-left"
                }`}
              >
                {group.category}
              </h2>

              <div className="flex flex-col">
                {group.items.map((service) => (
                  <ServiceRow
                    key={service.id}
                    service={service}
                    isOpen={openId === service.id}
                    onToggleClick={handleToggleClick}
                    onMouseEnter={handleRowMouseEnter}
                    onMouseMove={handleRowMouseMove}
                    onMouseLeave={handleRowMouseLeave}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

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
        <Button to="/contact" variant="primary" hasArrow>
          Book Consultation
        </Button>
      </div>
    </div>
  );
};

export default Services;
