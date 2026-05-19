import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="p-6 border-b">
      <div className="flex items-center gap-6">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/markets">Markets</Link>
        <Link to="/caribbean">Caribbean</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/careers">Careers</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;