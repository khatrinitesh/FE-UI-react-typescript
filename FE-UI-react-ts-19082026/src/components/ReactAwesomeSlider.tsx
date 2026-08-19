import * as AwesomeSliderModule from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const AwesomeSlider =
  (AwesomeSliderModule as any).default ?? AwesomeSliderModule;

export default function ReactAwesomeSlider() {
  return (
    <section className="min-h-screen bg-slate-950 px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <AwesomeSlider>
          <div data-src="https://images.unsplash.com/photo-1500534623283-312aade485b7" />

          <div data-src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" />

          <div data-src="https://images.unsplash.com/photo-1519681393784-d120267933ba" />
        </AwesomeSlider>
      </div>
    </section>
  );
}
