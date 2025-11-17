import React, { useEffect, useRef, useState } from "react";
import type { VideoSectionProps } from "../../interface";
import { getImage } from "../../utils/assets";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VideoSection: React.FC<VideoSectionProps> = ({ src, thumbnail }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const thumbSrc = thumbnail ?? getImage("thumbnail.png");

  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    // adjust these to match your Tailwind max-w-5xl / max-w-8xl values
    const MAX_W_LARGE = "100%"; // approx 8xl / 7xl (1280px)
    const MAX_W_SMALL = "95%"; // 5xl (1024px)

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5, // higher = smoother/slower feel
      },
    });

    // 8xl -> 5xl -> 8xl over the scroll range
    tl.fromTo(
      el,
      { maxWidth: MAX_W_LARGE },
      { maxWidth: MAX_W_SMALL, ease: "none" }
    ).to(el, { maxWidth: MAX_W_LARGE, ease: "none" });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <section
      id="sectionVideo"
      className="
        w-full      
        flex flex-col items-center justify-center
        px-0 sm:px-4 py-4 md:py-32
      "
    >
      <div
        ref={cardRef}
        className="
          w-full mx-auto
          transition-transform
          origin-top
        "
      >
        <div
          className="
            w-full
            bg-[#f7f5fb]   cursor-pointer            
            rounded-tl-[48px] rounded-tr-[48px]
             shadow-[0_-20px_80px_rgba(0,0,0,0.2)]
            pt-10 pb-16
            flex justify-center
          "
        >
          <div
            className="
              relative overflow-hidden cursor-pointer
              w-full max-w-[620px]
              rounded-[32px] 
            "
          >
            {!isPlaying && (
              <button
                type="button"
                onClick={() => setIsPlaying(true)}
                className="
                  group relative w-full h-full
                  rounded-[32px] cursor-pointer overflow-hidden
                  block
                "
              >
                <img
                  src={thumbSrc}
                  alt="Video thumbnail"
                  className="aspect-9/12  md:aspect-square scale-90 object-cover rounded-[32px]"
                />

                {/* play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="
                      flex items-center justify-center
                      w-16 h-16 rounded-full
                      bg-white/90 text-[#6e4a8e]
                      shadow-[0_0_25px_rgba(0,0,0,0.35)]
                      
                      transition-transform duration-300
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-7 h-7 translate-x-[1px]"
                      fill="currentColor"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </button>
            )}

            {isPlaying && (
              <video
                src={src}
                autoPlay
                controls
                playsInline
                preload="metadata"
                className="
                  w-full h-full aspect-9/12 md:aspect-square scale-90 object-cover
                  rounded-[32px]
                "
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
