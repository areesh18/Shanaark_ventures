import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText"; 

// Register the plugins
gsap.registerPlugin(ScrollTrigger, SplitText);

const MaskRevealText = ({ children, className = "", delay = 0 }) => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      // 1. Split the text into lines and words.
      // We apply 'overflow-hidden' directly to the lines so they act as the mask.
      const split = new SplitText(containerRef.current, {
        type: "lines, words",
        linesClass: "overflow-hidden", 
      });

      // 2. Animate the words up from outside the line's bounding box
      gsap.from(split.words, {
        yPercent: 100,
        rotationZ:2,
        duration: 1.2,
        stagger: 0.03, // Tight stagger for a fluid wave effect
        ease: "power4.out",
        delay: delay,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%", // Fires when text enters bottom 15% of viewport
          toggleActions: "play none none none",
        },
      });

      // 3. Cleanup to prevent React hydration/re-render duplication
      return () => {
        split.revert();
      };
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={`${className} will-change-transform`}>
      {children}
    </div>
  );
};

export default MaskRevealText;