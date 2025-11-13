import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getImage } from "../../utils/assets";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = bannerRef.current;
    if (!el) return;

    // Parallax + background crossfade
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      // Parallax
      tl.to(".banner-content", { yPercent: -25, ease: "none" }, 0);
      tl.to(".banner-btn", { yPercent: -15, ease: "none" }, 0);
      tl.to(".banner-link", { yPercent: -10, ease: "none" }, 0);
      tl.to(".scroll-indicator", { yPercent: 40, ease: "none" }, 0);

      // 🌈 Background: dark → light gradient
      tl.to(".banner-bg-dark", { opacity: 0, ease: "none" }, 0);
      tl.to(".banner-bg-light", { opacity: 1, ease: "none" }, 0);
    }, el);

    // Progressive scale (no snap → no auto-scroll)
    const scaleTween = gsap.to(el, {
      keyframes: [
        { scale: 0.97, duration: 1 },
        { scale: 0.94, duration: 1 },
        { scale: 0.9, duration: 1 },
      ],
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top top",
        end: "bottom+=200% top",
        scrub: 1, // just tied to scroll
      },
      transformOrigin: "center center",
    });

    // Hide / show CTA + scroll indicator based on scroll direction
    const targets = [".banner-btn", ".banner-link", ".scroll-indicator"];

    const showUI = () => {
      gsap.to(targets, {
        autoAlpha: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    const hideUI = () => {
      gsap.to(targets, {
        autoAlpha: 0,
        y: 20,
        duration: 0.3,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    const scrollDirTrigger = ScrollTrigger.create({
      trigger: document.documentElement,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        if (self.scroll() < 50) {
          showUI();
          return;
        }

        if (self.direction === 1) {
          hideUI(); // scrolling down
        } else if (self.direction === -1) {
          showUI(); // scrolling up
        }
      },
    });

    return () => {
      scaleTween?.scrollTrigger?.kill();
      scaleTween?.kill();
      scrollDirTrigger.kill();
      ctx.revert();
    };
  }, []);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/enter-details");
  };

  return (
    <section
      ref={bannerRef}
      className="
        relative top-0 w-full overflow-hidden
        flex flex-col items-center justify-between text-center text-white
        min-h-[100vh]
        bg-[linear-gradient(135deg,_#6C4BA4_0%,_#6E4A8E_100%)]
        shadow-[0_4px_20px_rgba(110,74,142,0.3)]
        mx-auto transition-all duration-700 ease-out
      "
    >
      {/* Content */}
      <motion.div
        className="
          banner-content
          relative z-10
          flex flex-col items-center justify-center
          w-full max-w-full mx-auto
          px-4 sm:px-6 md:px-12
          h-[90dvh] md:min-h-dvh
        "
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.img
          src={getImage("milka-logo-header.png")}
          alt="Milka x Matt Pokora"
          className="banner-logo mx-auto w-36 "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        />

        <motion.h1
          className="
            banner-title leading-tight tracking-tight
            headtitle-1
            max-w-[90%] mx-auto
          "
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          TURN YOUR <br /> SPECIAL MOMENTS <br /> INTO A SONG.
        </motion.h1>

        <motion.p
          className="
            banner-subtitle
            mt-5 summary-text congenial-regular
            opacity-90 
          "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7 }}
        >
          Personalize your song and try to win amazing prizes.
        </motion.p>

        <motion.button
          onClick={handleClick}
          className="
            banner-btn
            mt-8 px-12 py-4
            rounded-full 
            text-lg congenial-medium
            bg-[#93d7ff] text-[#6e4a8e]
            border-0 cursor-pointer
            transition-transform duration-300
            hover:-translate-y-1
          "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          Create my song now
        </motion.button>

        <motion.a
          href="#how"
          className="
            banner-link
            block mt-4
            text-sm  congenial-medium
            underline decoration-2 underline-offset-4 text-white
          "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          How does it work?
        </motion.a>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="
    scroll-indicator
    cursor-pointer
    absolute
    bottom-[clamp(1rem,5vh,3rem)]
    left-1/2 -translate-x-1/2
    flex flex-col items-center justify-center 
  "
        onClick={() => {
          const target = document.getElementById("sectionVideo");
          // instant jump, no auto-smooth
          target?.scrollIntoView();
          // or: target?.scrollIntoView({ behavior: "auto" });
        }}
        initial={{ opacity: 1, y: 1 }}
        animate={{ opacity: 1, y: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.span
          className="
      scroll-text
      text-sm
      font-semibold uppercase tracking-[0.35em]
      text-white/70 mb-2
    "
          animate={{ opacity: [1, 0.6, 1] }}
          transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity }}
        >
          SCROLL
        </motion.span>

        <div className="relative h-[35px] w-[35px] flex items-center justify-center">
          {/* Pulsing outer ring */}
          <motion.span
            className="absolute rounded-full border border-white/40"
            style={{ width: 40, height: 40 }}
            animate={{
              scale: [1, 1.6, 1],
              opacity: [0.7, 0, 0.7],
            }}
            transition={{
              duration: 2.2,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />

          {/* Inner circle with shadow pulse */}
          <motion.div
            className="
        scroll-circle cursor-pointer
        relative z-10
        w-[35px] h-[35px] rounded-full
        bg-[rgba(255,255,255,0.15)]
        flex items-center justify-center
        backdrop-blur-[4px]
      "
            animate={{
              scale: [1, 1.1, 1],
              boxShadow: [
                "0 0 0px rgba(255,255,255,0.15)",
                "0 0 20px rgba(255,255,255,0.4)",
                "0 0 0px rgba(255,255,255,0.15)",
              ],
            }}
            transition={{
              duration: 2.2,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            {/* Arrow with smooth slow bounce */}
            <motion.span
              className="cursor-pointer scroll-arrow flex items-center justify-center"
              // animate={{ y: [0, 6, 0] }}
              // transition={{
              //   duration: 2.4, // slower
              //   ease: "easeInOut", // smooth
              //   repeat: Infinity,
              // }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-[18px] h-[18px]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </motion.span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Banner;
