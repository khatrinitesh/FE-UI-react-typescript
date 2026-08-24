import { ReactSVG } from "react-svg";

export default function ReactSvgSection() {
  return (
    <>
      <IconButton />
      {/* <SvgExample /> */}
      <hr />
    </>
  );
}
function SvgExample() {
  return (
    <div>
      <ReactSVG src="/happy-face-2-svgrepo-com.svg" />
    </div>
  );
}
function IconButton() {
  return (
    <button
      className="
        flex
        items-center
        gap-2
        rounded-md
        bg-[#09213b]
        px-4
        py-2
        text-white
      "
    >
      <ReactSVG
        src="/happy-face-2-svgrepo-com.svg"
        beforeInjection={(svg) => {
          svg.setAttribute("width", "20");
          svg.setAttribute("height", "20");
          svg.setAttribute("fill", "white");
        }}
      />
      Profile
    </button>
  );
}
