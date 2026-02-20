import {
  motion,
  AnimatePresence,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import type { PointerEvent as ReactPointerEvent } from "react";
import {
  ACCORDION_ITEMS,
  CARD_3D_CONFIG,
  ICON_TRANSITION,
  PANEL_TRANSITION,
  UI_COPY,
} from "../../constants/constants";
import { useAccordionStore } from "../../store/useAccordionStore";
import { clampValue } from "../../utils/utils";

const AccordionComponent = () => {
  const { openItemId, toggleItem } = useAccordionStore();
  const shouldReduceMotion = useReducedMotion();

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(18);

  const springRotateX = useSpring(rotateX, CARD_3D_CONFIG.spring);
  const springRotateY = useSpring(rotateY, CARD_3D_CONFIG.spring);

  const shadowOffsetX = useTransform(
    springRotateY,
    [-CARD_3D_CONFIG.maxTiltDeg, CARD_3D_CONFIG.maxTiltDeg],
    [-18, 18],
  );
  const shadowOffsetY = useTransform(
    springRotateX,
    [-CARD_3D_CONFIG.maxTiltDeg, CARD_3D_CONFIG.maxTiltDeg],
    [18, -18],
  );

  const dynamicShadow = useMotionTemplate`${shadowOffsetX}px ${shadowOffsetY}px 32px rgba(57, 71, 136, 0.2)`;
  const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.78) 0%, rgba(255, 255, 255, 0) 56%)`;

  const resetTilt = () => {
    rotateX.set(0);
    rotateY.set(0);
    glareX.set(50);
    glareY.set(18);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLElement>) => {
    if (shouldReduceMotion || event.pointerType === "touch") {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const pointerX = clampValue(
      (event.clientX - bounds.left) / bounds.width,
      0,
      1,
    );
    const pointerY = clampValue(
      (event.clientY - bounds.top) / bounds.height,
      0,
      1,
    );

    rotateY.set((pointerX - 0.5) * CARD_3D_CONFIG.maxTiltDeg * 2);
    rotateX.set((0.5 - pointerY) * CARD_3D_CONFIG.maxTiltDeg * 2);
    glareX.set(pointerX * 100);
    glareY.set(pointerY * 100);
  };

  const cardMotionStyle = shouldReduceMotion
    ? undefined
    : {
        rotateX: springRotateX,
        rotateY: springRotateY,
        boxShadow: dynamicShadow,
        transformPerspective: 1300,
      };

  const cardHoverTransition = {
    type: "spring",
    ...CARD_3D_CONFIG.spring,
  } as const;

  return (
    <main className="app">
      <div className="card-perspective">
        <motion.section
          className="accordion-card"
          onPointerMove={handlePointerMove}
          onPointerLeave={resetTilt}
          onPointerCancel={resetTilt}
          style={cardMotionStyle}
          transition={cardHoverTransition}
          whileHover={
            shouldReduceMotion
              ? undefined
              : { scale: CARD_3D_CONFIG.hoverScale }
          }
        >
          <motion.div
            aria-hidden="true"
            className="card-glare"
            style={
              shouldReduceMotion
                ? undefined
                : { backgroundImage: glareBackground }
            }
          />
          <p className="eyebrow card-layer card-layer-soft">
            {UI_COPY.eyebrow}
          </p>
          <h1 className="title card-layer card-layer-strong">
            {UI_COPY.title}
          </h1>

          <div className="accordion card-layer card-layer-medium">
            {ACCORDION_ITEMS.map((item) => {
              const isOpen = openItemId === item.id;
              const panelId = `accordion-panel-${item.id}`;
              const triggerId = `accordion-trigger-${item.id}`;

              return (
                <article
                  className={`accordion-item ${isOpen ? "open" : ""}`}
                  key={item.id}
                >
                  <button
                    aria-controls={panelId}
                    aria-expanded={isOpen}
                    className="accordion-trigger"
                    id={triggerId}
                    onClick={() => toggleItem(item.id)}
                    type="button"
                  >
                    <span>{item.title}</span>
                    <PlusMinusIcon isOpen={isOpen} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        className="accordion-panel"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        id={panelId}
                        role="region"
                        aria-labelledby={triggerId}
                        transition={PANEL_TRANSITION}
                      >
                        <p>{item.content}</p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </article>
              );
            })}
          </div>
        </motion.section>
      </div>
    </main>
  );
};

export default AccordionComponent;

function PlusMinusIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <motion.span
      className="icon"
      animate={{ rotate: isOpen ? 90 : 0 }}
      transition={ICON_TRANSITION}
    >
      <span className="icon-line icon-line-horizontal" />
      <motion.span
        className="icon-line icon-line-vertical"
        animate={{ scaleY: isOpen ? 0 : 1, opacity: isOpen ? 0 : 1 }}
        transition={ICON_TRANSITION}
      />
    </motion.span>
  );
}
