import type { AspectRatioBoxProps } from "../../interface";
import "./components/aspect-ratio-style.css";
import { ASPECT_RATIOS } from "./components/aspectRatioData";
import { clsx } from "clsx";

const AspectRatioComponent = () => {
  return (
    <>
      <AspectRatioBox ratio="SQUARE" className="my-custom-box">
        <img
          src="https://images.unsplash.com/photo-1660145416818-b9a2b1a1f193?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bXVtYmFpfGVufDB8fDB8fHww"
          alt="Example"
        />
      </AspectRatioBox>
    </>
  );
};

export default AspectRatioComponent;

const AspectRatioBox: React.FC<AspectRatioBoxProps> = ({
  ratio = "WIDESCREEN",
  className,
  children,
  style,
}) => {
  const aspectRatioValue = ASPECT_RATIOS[ratio];

  return (
    <div
      className={clsx("aspect-ratio-box", className)}
      style={{
        aspectRatio: aspectRatioValue,
        ...style,
      }}
    >
      {children}
    </div>
  );
};
