import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

// Register the plugins
gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

const ScrollHighlightText = ({ children, className }) => {
  const containerRef = useRef(null);

  // useGSAP replaces useEffect and gsap.context()
  useGSAP(
    () => {
      if (!containerRef.current) return;

      const split = new SplitText(containerRef.current, {
        type: "words,chars",
      });

      const mm = gsap.matchMedia();

      mm.add("(max-width: 767px)", () => {
        gsap.fromTo(
          split.chars,
          { opacity: 0.15 },
          {
            opacity: 1,
            stagger: 0.1,
            duration: 0.3,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 90%",
              end: "bottom 70%",
              scrub: 0.5,
            },
          },
        );
      });

      mm.add("(min-width: 768px)", () => {
        gsap.fromTo(
          split.chars,
          { opacity: 0.15 },
          {
            opacity: 1,
            stagger: 0.1,
            duration: 0.3,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 85%",
              end: "bottom 50%",
              scrub: 0.5,
            },
          },
        );
      });

      return () => {
        mm.revert();
        split.revert();
      };
    },
    {
      scope: containerRef,
      dependencies: [children],
    },
  );

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};

export default ScrollHighlightText;
