import { Link } from "@tanstack/react-router";
import GridLayout from "../../components/gridLayout/GridLayout";
import HeadlineSection from "../../components/headlineSection/HeadlineSection";
import HeroHighlight from "../../components/heroHighlightSection/HeroHighlightSection";

const Home = () => {
  return (
    <section className="flex min-h-[calc(100vh-128px)] items-center">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
            Welcome
          </span>

          <h1 className="text-brand-primary font-brand-bebas-regular mt-6 text-4xl font-bold tracking-tight  sm:text-5xl lg:text-6xl">
            Build something
            <span className="block">amazing with us.</span>
          </h1>

          <p className="text-brand-secondary mt-6 max-w-2xl text-24 leading-normal">
            Discover our products and learn more about what we do. We create
            simple, reliable, and useful solutions for everyone.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/products"
              className="inline-flex min-h-11 items-center justify-center rounded-lg bg-black px-6 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
            >
              Explore Products
            </Link>

            <Link
              to="/about"
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-gray-300 px-6 py-2.5 text-sm font-medium text-gray-900 transition hover:bg-gray-50"
            >
              Learn More
            </Link>
          </div>
        </div>
        <GridLayout />
        <HeadlineSection />
        <HeroHighlight />
      </div>
    </section>
  );
};

export default Home;
