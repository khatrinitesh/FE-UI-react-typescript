import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import ArrayReference from "../components/UI/ArrayReference/ArrayReference";
import Assets from "../utils/assets";

const Home = () => {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <ArrayReference />
        <hr />
        <p className="text-sm font-semibold uppercase tracking-widest">
          Welcome
        </p>

        <a
          href={Assets.Pdfs.terms}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-600 underline"
        >
          Terms
        </a>

        <h1 className="mt-3 text-5xl font-bold">Home Page</h1>

        <p className="mt-5 max-w-2xl text-gray-500">
          A modern React TypeScript application with TanStack architecture.
        </p>

        <Link
          to="/products"
          className="mt-8 inline-flex rounded-lg bg-black px-6 py-3 text-white"
        >
          View Products
        </Link>
      </motion.div>
    </section>
  );
};

export default Home;
