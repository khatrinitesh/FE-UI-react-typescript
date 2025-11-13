import { useEffect } from "react";
import type { RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useParallax = (
  ref: RefObject<HTMLElement>,
  offset: number = 200
) => {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top bottom", // adjust as needed
        end: "bottom top",
        scrub: true,
      },
    });

    tl.fromTo(element, { y: offset }, { y: -offset, ease: "none" });

    // Cleanup
    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill(); // kill only this ScrollTrigger
      }
      tl.kill(); // kill the timeline
    };
  }, [ref, offset]);
};
