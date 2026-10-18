import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface ContainerScrollAnimationProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

const ContainerScrollAnimation = ({
  title = "Scroll to Explore",
  children,
  className = "",
}: ContainerScrollAnimationProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -10]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.4, 1, 1, 0.4],
  );

  return (
    <section
      ref={containerRef}
      className={`container-scroll-animation relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gray-50 px-4 py-24 ${className}`}
    >
      <motion.h2
        style={{ opacity }}
        className="mb-10 text-center text-3xl font-bold text-gray-900 sm:text-5xl"
      >
        {title}
      </motion.h2>
      <motion.div
        style={{ scale, rotateX, opacity, transformPerspective: 1000 }}
        className="w-full max-w-5xl origin-center rounded-2xl border border-gray-200 bg-white p-4 shadow-2xl sm:p-8"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default ContainerScrollAnimation;
