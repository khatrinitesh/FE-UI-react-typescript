import type { Direction } from "../../constants/constants";

export const GetHoverDirection = (
  event: React.MouseEvent<HTMLDivElement>,
): Direction => {
  const { width, height, top, left } =
    event.currentTarget.getBoundingClientRect();

  const x = event.clientX - left - width / 2;
  const y = event.clientY - top - height / 2;

  if (Math.abs(x) > Math.abs(y)) {
    return x > 0 ? "right" : "left";
  } else {
    return y > 0 ? "bottom" : "top";
  }
};

export default GetHoverDirection;
