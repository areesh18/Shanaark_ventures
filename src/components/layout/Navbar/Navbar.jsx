import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-xl saturate-150 border-b border-slate-200/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo Area */}
        <Link to="/" className="flex items-center hover:opacity-80 transition-opacity duration-200">
          <img 
            src="/logo.png" 
            alt="Shaanark Ventures" 
            className="h-8 w-auto object-contain" 
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">
            Home
          </Link>
          <Link to="/services" className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">
            Services
          </Link>
          <Link to="/markets" className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">
            Markets
          </Link>
          <Link to="/caribbean" className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">
            Caribbean Corridor
          </Link>
          <Link to="/blog" className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">
            Blog
          </Link>
        </div>

        {/* CTAs */}
        <div className="flex items-center gap-6">
          <Link to="/contact" className="hidden md:block text-sm font-medium text-[var(--color-text-primary)] hover:opacity-70 transition-opacity">
            Talk to Us
          </Link>
          <Link to="/contact" className="text-sm font-medium bg-[var(--color-dark)] text-white px-5 py-2.5 rounded-full hover:bg-opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-sm">
            Book Consultation
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;