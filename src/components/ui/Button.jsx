import { useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

// SVG Arrow Icon
const ArrowIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const Button = ({
  children,
  variant = "primary",
  to,
  className = "",
  hasArrow = false,
  ...props
}) => {
  const buttonRef = useRef(null);
  const fillRef = useRef(null);

  // ── GSAP FLUID HOVER LOGIC ──
  const handleMouseEnter = (e) => {
    if (!buttonRef.current || !fillRef.current) return;
    
    // Calculate mouse position relative to the button
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Instantly snap the hidden fill circle to the mouse, scale 0
    gsap.set(fillRef.current, { x, y, scale: 0 });
    
    // Expand it massively to cover the whole button
    gsap.to(fillRef.current, {
      scale: 5, 
      duration: 1.0,
      ease: "power3.out",
      overwrite: true, // <-- THE FIX: Kills any active shrink animations
    });
  };

  const handleMouseLeave = (e) => {
    if (!buttonRef.current || !fillRef.current) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Shrink the circle back down, pulling it towards the exit mouse position
    gsap.to(fillRef.current, {
      scale: 0,
      x,
      y,
      duration: 0.6,
      ease: "power3.out",
      overwrite: true, // <-- THE FIX: Kills any active grow animations instantly
    });
  };

  // Base classes (Relative & overflow-hidden are mandatory to trap the fill)
  const baseStyles =
    "group relative overflow-hidden px-7 py-3.5 rounded-full text-sm font-medium transition-colors duration-300 inline-flex items-center justify-center gap-2 tracking-tight";

  // ── VARIANT MAPPINGS ──
  const variants = {
    primary: {
      button: "bg-(--color-dark) text-white border border-(--color-dark) hover:text-(--color-dark) hover:border-transparent shadow-sm",
      fill: "bg-(--color-accent)", // Neon green fill
    },
    glass: {
      button: "bg-white/30 backdrop-blur-md text-(--color-text-primary) border border-(--color-border) hover:text-white hover:border-(--color-dark)",
      fill: "bg-(--color-dark)", // Dark fill
    },
    outline: {
      button: "bg-white text-(--color-text-primary) border border-(--color-border) hover:text-white hover:border-(--color-dark)",
      fill: "bg-(--color-dark)", // Dark fill
    },
    darkBg: {
      button: "bg-white text-(--color-text-primary) border border-(--color-border)  hover:border-(--color-dark)",
      fill: "bg-transparent", // Light fill for dark backgrounds
    },
  };

  const currentVariant = variants[variant] || variants.primary;
  const combinedClassName = `${baseStyles} ${currentVariant.button} ${className}`;

  // Save the JSX as a regular variable instead of a component
  const content = (
    <>
      <div
        ref={fillRef}
        className={`absolute top-0 left-0 w-32 h-32 -ml-16 -mt-16 rounded-full pointer-events-none origin-center scale-0 z-0 ${currentVariant.fill}`}
      />
      <span className="relative z-10">{children}</span>
      {hasArrow && <ArrowIcon />}
    </>
  );

  // If a 'to' prop is provided, render a React Router Link
  if (to) {
    return (
      <Link 
        to={to} 
        ref={buttonRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={combinedClassName} 
        {...props}
      >
        {content}
      </Link>
    );
  }

  // Otherwise, render a standard HTML button
  return (
    <button 
      ref={buttonRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={combinedClassName} 
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;