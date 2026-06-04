import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../../ui/Button";
import logo from "/logo.webp";
// Restored to exact original links and routing
const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/markets", label: "Markets" },
  { to: "/caribbean", label: "Caribbean" },
  { to: "/blog", label: "Blog" },
  { to: "/careers", label: "Careers" },
  { to: "/about", label: "About Us" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop — sits behind drawer, above page content */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-40 bg-(--color-dark)/30 backdrop-blur-sm transition-all duration-300 lg:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl saturate-150 border-b border-slate-200/50">
        {/* Main bar */}
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 hover:opacity-80 transition-opacity shrink-0"
            onClick={() => setIsOpen(false)}
          >
            <img
              src={logo}
              alt="Shaanark Ventures"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop links - Increased text size, dynamic gaps to prevent collision */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-8">
            {NAV_LINKS.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`text-base font-normal tracking-tight transition-colors whitespace-nowrap ${
                  pathname === to
                    ? "text-(--color-text-primary)"
                    : "text-(--color-text-secondary) hover:text-(--color-text-primary)"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs - Restored exact original layout */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6 shrink-0">
            <Link
              to="/contact"
              className="text-base font-medium text-(--color-text-primary) opacity-75 hover:opacity-100 transition-opacity tracking-tight whitespace-nowrap"
            >
              Talk to Us
            </Link>
            <Button to="/contact" hasArrow>
              Book Consultation
            </Button>
          </div>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="lg:hidden flex flex-col justify-center items-center w-12 h-12 rounded-xl border border-(--color-border) hover:bg-(--color-bg-secondary) transition-colors gap-1.5 shrink-0"
          >
            <span
              className={`block w-5 h-[1.5px] bg-(--color-text-primary) rounded-full transition-transform duration-300 origin-center ${
                isOpen ? "translate-y-[7.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-(--color-text-primary) rounded-full transition-all duration-300 ${
                isOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-(--color-text-primary) rounded-full transition-transform duration-300 origin-center ${
                isOpen ? "translate-y-[-7.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile drawer */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] border-t border-slate-200/50 bg-white/95 backdrop-blur-xl ${
            isOpen ? "max-h-150 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 pt-4 pb-8">
            {/* Nav links */}
            <div className="flex flex-col border-b border-(--color-border) mb-6">
              {NAV_LINKS.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between py-4 text-base font-semibold tracking-tight text-(--color-text-primary) border-b border-slate-100 last:border-0 transition-colors active:bg-slate-50"
                >
                  {label}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-40"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>

            {/* CTAs - Restored exact original layout */}
            <div className="flex flex-col gap-3">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-3.5 rounded-full border border-(--color-border) text-base font-medium text-(--color-text-primary) tracking-tight hover:bg-(--color-bg-secondary) transition-colors"
              >
                Talk to Us
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-3.5 rounded-full bg-(--color-dark) text-white text-base font-medium tracking-tight hover:bg-opacity-90 transition-all"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
