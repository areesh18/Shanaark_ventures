import { Link } from "react-router-dom";
import MaskRevealText from "../../animations/MaskRevealText";
import logo from "../../../assets/logo.webp";

const Footer = () => {
  return (
    <footer className="bg-(--color-bg-secondary) pt-24 pb-8 border-t border-(--color-border)">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Pre-Footer / Newsletter Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-24 gap-10">
          <div className="max-w-lg">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-(--color-text-primary) mb-3">
              Stay ahead of the{" "}
              <span className="font-serif-italic font-normal text-slate-500">
                curve.
              </span>
            </h2>
            <MaskRevealText className="text-(--color-text-secondary) font-light tracking-tight">
              Get the latest insights on global market trends and cross-border
              opportunities delivered directly to your inbox.
            </MaskRevealText>
          </div>

          {/* Premium Pill-shaped Email Input */}
          <div className="w-full lg:w-auto shrink-0">
            <form className="flex w-full md:w-105 relative group">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full bg-white border border-(--color-border) rounded-full py-4 pl-6 pr-36 text-sm font-medium tracking-tight text-(--color-text-primary) focus:outline-none focus:border-(--color-dark) focus:ring-1 focus:ring-(--color-dark) transition-all shadow-sm"
                required
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 bottom-1.5 bg-(--color-dark) text-white px-6 rounded-full text-sm font-medium hover:bg-opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Main Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
          {/* Brand Column (Spans 4 columns on large screens) */}
          <div className="lg:col-span-4 pr-8">
            <Link
              to="/"
              className="flex items-center gap-2 mb-6 hover:opacity-80 transition-opacity"
            >
              <img
                src={logo}
                alt="Shaanark Ventures"
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-(--color-text-secondary) font-light leading-relaxed tracking-tight max-w-sm">
              Bridging opportunities across Suriname, India, Guyana and
              Netherlands with expert advisory, digital excellence, and
              end-to-end marketing.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-(--color-text-primary) text-sm font-semibold tracking-tight mb-6">
              Company
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/services"
                  className="text-sm font-light text-(--color-text-secondary) hover:text-(--color-text-primary) transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/markets"
                  className="text-sm font-light text-(--color-text-secondary) hover:text-(--color-text-primary) transition-colors"
                >
                  Markets
                </Link>
              </li>
              <li>
                <Link
                  to="/caribbean"
                  className="text-sm font-light text-(--color-text-secondary) hover:text-(--color-text-primary) transition-colors"
                >
                  Caribbean Corridor
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-sm font-light text-(--color-text-secondary) hover:text-(--color-text-primary) transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-sm font-light text-(--color-text-secondary) hover:text-(--color-text-primary) transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm font-light text-(--color-text-secondary) hover:text-(--color-text-primary) transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Offices Column */}
          <div className="lg:col-span-3">
            <h4 className="text-(--color-text-primary) text-sm font-semibold tracking-tight mb-6">
              Offices
            </h4>
            <div className="space-y-6">
              {/* Suriname Office */}
              <div>
                <h5 className="text-sm font-medium text-(--color-text-primary) mb-1">
                  Suriname Operations Centre
                </h5>
                <p className="text-sm text-(--color-text-secondary) font-light leading-relaxed tracking-tight mb-2">
                  Prinsenstraat 47
                  <br />
                  Paramaribo, Suriname
                  <br />
                  <a href="tel:+5977647759" className="font-medium text-(--color-text-primary) hover:opacity-70 transition-opacity">
                    [+597] 7647759
                  </a>
                </p>
                <div className="w-full h-24 rounded overflow-hidden shadow-sm border border-(--color-border)">
                  <iframe
                    src="https://maps.google.com/maps?q=Prinsenstraat+47,+Paramaribo,+Suriname&t=&z=14&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Suriname Operations Centre Map"
                  ></iframe>
                </div>
              </div>

              {/* India Office */}
              <div>
                <h5 className="text-sm font-medium text-(--color-text-primary) mb-1">
                  India Operations Center
                </h5>
                <p className="text-sm text-(--color-text-secondary) font-light leading-relaxed tracking-tight mb-2">
                  8 Suryasen Pally Matkal
                  <br />
                  Kolkata - 700065, India
                  <br />
                  <a href="tel:+916291944781" className="font-medium text-(--color-text-primary) hover:opacity-70 transition-opacity">
                    [+91] 6291944781
                  </a>
                </p>
                <div className="w-full h-24 rounded overflow-hidden shadow-sm border border-(--color-border)">
                  <iframe
                    src="https://maps.google.com/maps?q=8+Suryasen+Pally+Matkal,+Kolkata+-+700065,+India&t=&z=14&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="India Operations Center Map"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* Connect Column */}
          <div className="lg:col-span-2">
            <ul className="space-y-4">
              <li>
                <Link
                  to="/contact"
                  className="text-sm font-semibold text-(--color-text-primary) hover:text-(--color-text-primary) transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              {/* Contact Enquiries Block */}
              <li>
                <div className="flex flex-col gap-2 mt-4">
                  <p className="text-sm font-light text-(--color-text-secondary) leading-relaxed">
                    For more enquiries, Contact us at <br />
                    <a
                      href="mailto:info@shaanark.com"
                      className="font-medium text-(--color-text-primary) hover:opacity-70 transition-opacity"
                    >
                      info@shaanark.com
                    </a>
                    <br />
                    <a
                      href="tel:+5977647759"
                      className="font-medium text-(--color-text-primary) hover:opacity-70 transition-opacity"
                    >
                      [+597] 7647759
                    </a>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-(--color-border) flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-(--color-text-secondary) font-light tracking-tight">
            © {new Date().getFullYear()} Shaanark Ventures. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-(--color-text-secondary) hover:text-(--color-text-primary) transition-colors font-light tracking-tight"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-(--color-text-secondary) hover:text-(--color-text-primary) transition-colors font-light tracking-tight"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;