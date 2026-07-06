import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import CheckboxSection from "../components/ui/CheckCheckbox";
import NumericInputSection from "../components/common/NumericInput/NumericInputSection";
import CheckoutForm from "../components/ui/CheckoutForm";
import CircleMenu from "../components/ui/CircleMenu";
import CircleDots from "../components/ui/CircleDots";
import ClearInputField from "../components/ui/ClearInputField";
import ClickDropdown from "../components/ui/ClickDropdowns";
import ClosableListItems from "../components/ui/CloseableListItems";

export default function Home () {
  return (
    <motion.section
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-16"
    >
      {/* Hero */}

      <div className="text-center py-20">

        <Sparkles
          className="mx-auto text-indigo-600 mb-5"
          size={60}
        />

        <h1 className="text-5xl font-bold mb-5">
          React + TypeScript Starter
        </h1>

        <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-8">
          Enterprise starter template using TanStack Router,
          TanStack Query, TailwindCSS,
          Framer Motion and reusable components.
        </p>

        <button
          className="mt-10 inline-flex items-center gap-3
          bg-indigo-600 text-white px-8 py-3 rounded-xl
          hover:bg-indigo-700 transition"
        >
          Get Started
          <ArrowRight size={20} />
        </button>

      </div>

      {/* Features */}

      <div className="grid md:grid-cols-3 gap-8">

        {[
          "TypeScript",
          "TailwindCSS",
          "Framer Motion",
        ].map((item) => (

          <motion.div
            whileHover={{ scale: 1.05 }}
            key={item}
            className="bg-white rounded-xl shadow p-8"
          >
            <h3 className="font-bold text-xl mb-3">
              {item}
            </h3>

            <p className="text-gray-500">
              Modern reusable architecture with best practices.
            </p>

          </motion.div>

        ))}

      </div>
      <ClosableListItems/>
      <ClickDropdown/>
      <ClearInputField/>
      <CircleDots/>
      <CircleMenu/>
      <CheckoutForm/>
      <NumericInputSection/>

      <CheckboxSection/>


    </motion.section>
  );
};
