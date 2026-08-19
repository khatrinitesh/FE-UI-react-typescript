// The package does not ship TypeScript declarations.
// @ts-expect-error — react-lazy-load-image-component is untyped.
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function ReactLazyLoadComponent() {
  return (
    <section className="min-h-screen bg-slate-950 px-4 py-20">
      <div className="mx-auto max-w-3xl">
        <LazyLoadImage
          src="https://images.unsplash.com/photo-1500534623283-312aade485b7"
          alt="Mountain landscape"
          effect="blur"
          className="h-auto w-full rounded-2xl object-cover"
        />
      </div>
    </section>
  );
}
