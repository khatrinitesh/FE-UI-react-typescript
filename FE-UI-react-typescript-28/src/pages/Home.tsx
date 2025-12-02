import { Link } from "react-router";
import { PATHS } from "../routes/path";
import { motion } from "framer-motion";
import Card3D from "../components/ui/Card3D";
import Pin3D from "../components/ui/Pin3D";
import Accordion from "../components/ui/Accordion";
import { ACCORDION_ITEM } from "../constants/constants";
import Alerts from "../components/ui/Alerts";
import { useAlertStore } from "../store/useAlertStore";
import { DemoIcons } from "../components/ui/AnimateIcons";

const Home = () => {
  const showAlert = useAlertStore((state) => state.showAlert);
  return (
    <motion.div
      className="p-10 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Store</h1>
      <Link to={PATHS.PRODUCTS} className="text-blue-500 underline">
        View Products
      </Link>

      <DemoIcons />
      <hr />

      <Alerts />

      <button
        onClick={() =>
          showAlert({ type: "success", message: "Operation successful!" })
        }
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Show Success
      </button>

      <button
        onClick={() =>
          showAlert({ type: "error", message: "Something went wrong!" })
        }
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Show Error
      </button>

      <button
        onClick={() => showAlert({ type: "warning", message: "Be careful!" })}
        className="bg-yellow-500 text-white px-4 py-2 rounded"
      >
        Show Warning
      </button>

      <button
        onClick={() =>
          showAlert({ type: "info", message: "Some information here." })
        }
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Show Info
      </button>
      <hr />

      <Accordion items={ACCORDION_ITEM} />
      <hr />
      <Pin3D title="3D Pin Card" image="https://picsum.photos/400/600" />
      <hr />
      <Card3D
        title="Amazing Product"
        image="https://picsum.photos/400"
        description="This card tilts in 3D using Framer Motion + Zustand"
      />
    </motion.div>
  );
};

export default Home;
