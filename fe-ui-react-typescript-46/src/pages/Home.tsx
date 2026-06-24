import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const heroImage =
  "https://images.unsplash.com/photo-1498050108023-c5249f4df0850?w=1200";

const introVideo = "https://www.w3schools.com/html/mov_bbb.mp4";

const animationDataUrl =
  "https://assets10.lottiefiles.com/packages/lf20_jcikwtux.json";

const brochurePdf =
  "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";

const Home = () => {
  const [animationData, setAnimationData] = useState<object | null>(null);

  useEffect(() => {
    fetch(animationDataUrl)
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.log("Lottie error:", error));
  }, []);

  return (
    <section className="p-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
      >
        <div>
          <h1 className="text-5xl font-bold mb-4">
            Welcome to {import.meta.env.VITE_APP_NAME}
          </h1>

          <p className="text-gray-600 mb-6">
            This is a React TypeScript assignment using TailwindCSS, Framer
            Motion, assets, interfaces, constants, and routing.
          </p>

          <a
            href={brochurePdf}
            target="_blank"
            rel="noreferrer"
            className="bg-black text-white px-6 py-3 rounded-lg inline-block"
          >
            View PDF
          </a>
        </div>

        <img
          src={heroImage}
          alt="Hero"
          className="w-full rounded-2xl shadow-lg"
        />
      </motion.div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        <video controls className="w-full rounded-xl shadow">
          <source src={introVideo} type="video/mp4" />
          Your browser does not support video.
        </video>
      </div>
    </section>
  );
};

export default Home;
