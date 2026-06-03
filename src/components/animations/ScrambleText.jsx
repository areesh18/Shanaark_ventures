import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin);

const ScrambleText = ({ 
  children, 
  className = "", 
  delay = 0, 
  duration = 1.5,
  chars = "upperAndLowerCase" 
}) => {
  const spanRef = useRef(null);

  useGSAP(
    () => {
      if (!spanRef.current) return;

      // We grab the exact text rendered inside the span
      const targetText = spanRef.current.innerText;

      gsap.to(spanRef.current, {
        duration: duration,
        delay: delay,
        scrambleText: {
          text: targetText, // Scramble for the duration, then resolve to this text
          chars: chars, 
          revealDelay: 0.2, 
          tweenLength: false, 
        },
        scrollTrigger: {
          trigger: spanRef.current,
          start: "top 98%", 
          toggleActions: "play none none reverse", 
        },
      });
    },
    { scope: spanRef }
  );

  return (
    <span ref={spanRef} className={className}>
      {children}
    </span>
  );
};

export default ScrambleText;