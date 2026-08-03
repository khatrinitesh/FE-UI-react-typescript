import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag, Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Laptop",
    price: "$999",
    description: "High-performance laptop for developers and professionals.",
    image: "https://via.placeholder.com/400x250",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Smartphone",
    price: "$699",
    description: "Latest smartphone with premium features and camera.",
    image: "https://via.placeholder.com/400x250",
    rating: 4.7,
  },
  {
    id: 3,
    name: "Headphones",
    price: "$199",
    description: "Noise-cancelling wireless headphones.",
    image: "https://via.placeholder.com/400x250",
    rating: 4.9,
  },
  {
    id: 4,
    name: "Smart Watch",
    price: "$299",
    description: "Track your fitness and stay connected.",
    image: "https://via.placeholder.com/400x250",
    rating: 4.6,
  },
];

const Product = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-linear-to-r from-indigo-600 via-violet-600 to-purple-700 py-20 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <ShoppingBag className="mx-auto mb-5 h-16 w-16" />

            <h1 className="text-5xl font-bold">Our Products</h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg text-indigo-100">
              Explore our collection of high-quality products designed for
              performance and reliability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-xl bg-white shadow-lg"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-52 w-full object-cover"
              />

              <div className="p-6">
                <h2 className="text-2xl font-bold">{product.name}</h2>

                <p className="mt-2 text-gray-600">{product.description}</p>

                <div className="mt-4 flex items-center gap-2">
                  <Star size={18} className="fill-yellow-400 text-yellow-400" />
                  <span>{product.rating}</span>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-2xl font-bold text-indigo-600">
                    {product.price}
                  </span>

                  <button className="rounded-lg bg-indigo-600 px-4 py-2 text-white transition hover:bg-indigo-700">
                    Buy Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800">
              Looking for Something Special?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-gray-600">
              Contact our team for custom solutions and product inquiries.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-8 py-4 font-semibold text-white transition hover:bg-indigo-700"
            >
              Contact Us
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Product;
