import { Link } from "react-router-dom";
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
  // Base classes applied to ALL buttons
  const baseStyles =
    "px-7 py-3.5 rounded-full text-sm font-medium transition-all inline-flex items-center justify-center gap-2 tracking-tight";

  // Variant-specific classes
  const variants = {
    primary:
      "bg-(--color-dark) text-white hover:bg-opacity-90 hover:scale-[1.02] active:scale-[0.98] shadow-sm",
    glass:
      "bg-white/30 backdrop-blur-md text-(--color-text-primary) border border-(--color-border) hover:bg-white/50",
    outline:
      "bg-white text-(--color-text-primary) border border-(--color-border) hover:bg-(--color-bg-secondary)",
  };

  // Compile the final class string
  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  // If a 'to' prop is provided, render a React Router Link
  if (to) {
    return (
      <Link to={to} className={combinedClassName} {...props}>
        {children}
        {hasArrow && <ArrowIcon />}
      </Link>
    );
  }

  // Otherwise, render a standard HTML button
  return (
    <button className={combinedClassName} {...props}>
      {children}
      {hasArrow && <ArrowIcon />}
    </button>
  );
};

export default Button;
