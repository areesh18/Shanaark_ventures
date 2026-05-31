import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

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
        className={`fixed inset-0 z-40 bg-(--color-dark)/30 backdrop-blur-sm transition-all duration-300 md:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl saturate-150 border-b border-slate-200/50">
        {/* Main bar */}
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 hover:opacity-80 transition-opacity"
            onClick={() => setIsOpen(false)}
          >
            <img
              src="/logo.png"
              alt="Shaanark Ventures"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`text-sm font-medium tracking-tight transition-colors ${
                  pathname === to
                    ? "text-(--color-text-primary)"
                    : "text-(--color-text-secondary) hover:text-(--color-text-primary)"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/contact"
              className="text-sm font-medium text-(--color-text-primary) opacity-75 hover:opacity-100 transition-opacity tracking-tight"
            >
              Talk to Us
            </Link>
            <Link
              to="/contact"
              className="text-sm font-medium bg-(--color-dark) text-white px-5 py-2.5 rounded-full hover:bg-opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-sm tracking-tight"
            >
              Book Consultation
            </Link>
          </div>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-[10px] border border-(--color-border) hover:bg-(--color-bg-secondary) transition-colors gap-1.25"
          >
            <span
              className={`block w-4 h-[1.5px] bg-(--color-text-primary) rounded-full transition-transform duration-300 origin-center ${
                isOpen ? "translate-y-[6.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block w-4 h-[1.5px] bg-(--color-text-primary) rounded-full transition-all duration-300 ${
                isOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block w-4 h-[1.5px] bg-(--color-text-primary) rounded-full transition-transform duration-300 origin-center ${
                isOpen ? "translate-y-[-6.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile drawer */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-380 ease-[cubic-bezier(0.16,1,0.3,1)] border-t border-slate-200/50 bg-white/95 backdrop-blur-xl ${
            isOpen ? "max-h-105 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 pt-2 pb-8">
            {/* Nav links */}
            <div className="flex flex-col border-b border-(--color-border) mb-5">
              {NAV_LINKS.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between py-3.5 text-[15px] font-medium tracking-tight text-(--color-text-primary) border-b border-slate-100 last:border-0 transition-opacity hover:opacity-60"
                >
                  {label}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-30"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-2.5">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-3 rounded-full border border-(--color-border) text-sm font-medium text-[var(--color-text-primary)] tracking-tight hover:bg-[var(--color-bg-secondary)] transition-colors"
              >
                Talk to Us
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-3.5 rounded-full bg-(--color-dark) text-white text-sm font-medium tracking-tight hover:bg-opacity-90 transition-all"
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
