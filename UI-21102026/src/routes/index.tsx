import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { AnimatedIcon } from "../components/common/AnimatedIcon";
import { MainLayout } from "../components/layout/MainLayout";
import { ProductCard } from "../components/product/ProductCard";
import { useProducts } from "../features/products/product.queries";

export const LandingPage = () => {
  const {
    data,
    isLoading,
    isError,
  } = useProducts();

  return (
       <MainLayout>
          <section className="min-h-screen bg-black px-6 py-24 text-white">
            <div className="mx-auto max-w-7xl">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="max-w-3xl"
              >
                <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/50">
                  Welcome
                </p>

                <h1 className="text-5xl font-bold md:text-7xl">
                  Discover
                  <br />
                  Something New.
                </h1>

                <p className="mt-6 max-w-xl text-lg text-white/60">
                  A React TypeScript application using TanStack,
                  Framer Motion and Tailwind CSS.
                </p>

                <div className="mt-8 flex gap-4">
                  <Link
                    to="/register"
                    className="rounded-xl bg-white px-6 py-3 font-medium text-black"
                  >
                    Get Started
                  </Link>

                  <Link
                    to="/login"
                    className="rounded-xl border border-white/20 px-6 py-3"
                  >
                    Login
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>

          <section className="px-6 py-24">
            <div className="mx-auto max-w-7xl">
              <h2 className="mb-10 text-4xl font-bold">
                Products
              </h2>

              {isLoading && (
                <p>Loading products...</p>
              )}

              {isError && (
                <p>Failed to load products.</p>
              )}

              {data && (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {data.products.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                    />
                  ))}
                </div>
              )}
            </div>
          </section>
           <AnimatedIcon
              label="Home"
              icon={<span className="text-3xl">⌂</span>}
            />

            <AnimatedIcon
              label="Search"
              icon={<span className="text-3xl">⌕</span>}
            />

            <AnimatedIcon
              label="Favorite"
              icon={<span className="text-3xl">♡</span>}
            />

            <AnimatedIcon
              label="Settings"
              icon={<span className="text-3xl">⚙</span>}
            />
       </MainLayout>

  );
};