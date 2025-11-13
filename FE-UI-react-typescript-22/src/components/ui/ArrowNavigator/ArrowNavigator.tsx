import {
  ANIMATION_DURATION,
  ARROW_ICONS,
  SLIDES,
} from "../../../constants/constants";
import type { ArrowProps } from "../../../interface";
import { useSlideStore } from "../../../store/useSlideStore";
import "./ArrowNavigator.css";

const ArrowNavigator = () => {
  const { index, nextSlide, prevSlide } = useSlideStore();
  return (
    <>
      <div className="app-container">
        <h1>Animated Zustand Arrows</h1>
        <div className="slide-box">
          <p
            key={index}
            className="slide-text"
            style={{ transitionDuration: `${ANIMATION_DURATION}s` }}
          >
            {SLIDES[index]}
          </p>
        </div>
        <div className="arrow-container">
          <ArrowComponent direction="left" onClick={prevSlide} />
          <ArrowComponent direction="right" onClick={nextSlide} />
        </div>
      </div>
    </>
  );
};

export default ArrowNavigator;

const ArrowComponent = ({ direction, onClick }: ArrowProps) => {
  return (
    <>
      <button className={`arrow arrow-${direction}`} onClick={onClick}>
        {ARROW_ICONS[direction]}
      </button>
    </>
  );
};
