import React, { useEffect, useRef, useState } from "react";
import type { VideoSectionProps } from "../../interface";
import { getImage } from "../../utils/assets";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VideoSection: React.FC<VideoSectionProps> = ({ src, thumbnail }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const thumbSrc = thumbnail ?? getImage("thumbnail.png");

  // this ref is for the outer container that scales
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const tween = gsap.fromTo(
      el,
      { scale: 1.5 },
      {
        scale: 1,
        ease: "none",
        transformOrigin: "center top",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "top center",
          scrub: 1,
        },
      }
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <section
      id="sectionVideo"
      className="
        w-full
        bg-[#e5e5ea]                 /* outer grey background */
        flex flex-col items-center justify-center
        px-0 sm:px-4 py-6
      "
    >
      {/* main rounded card that scales */}
      <div
        ref={cardRef}
        className="
          w-full max-w-5xl mx-auto
          px-4 sm:px-6
          transition-transform
          origin-top
        "
      >
        <div
          className="
            w-full
            bg-[#f7f5fb]              
            rounded-tl-[48px] rounded-tr-[48px]
            shadow-[0_20px_80px_rgba(0,0,0,0.12)]
            pt-10 pb-16
            flex justify-center
          "
        >
          {/* Video frame / thumbnail frame */}
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
                  rounded-[32px] overflow-hidden
                  block
                "
              >
                <img
                  src={thumbSrc}
                  alt="Video thumbnail"
                  className="w-full h-full object-cover rounded-[32px]"
                />

                {/* dark overlay */}
                <div
                  className="
                    absolute inset-0
                    bg-black/30
                    group-hover:bg-black/40
                    transition-colors duration-300
                  "
                />

                {/* play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="
                      flex items-center justify-center
                      w-16 h-16 rounded-full
                      bg-white/90 text-[#6e4a8e]
                      shadow-[0_0_25px_rgba(0,0,0,0.35)]
                      group-hover:scale-105
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
                  w-full h-full object-cover
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
