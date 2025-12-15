import { useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Accordion from "../components/UI/Accordion";
import { useAlertStore } from "../store/alert.store";
import Alerts from "../components/UI/Alerts";
import AnimateIcons from "../components/UI/AnimateIcons";
import AnimatedSearch from "../components/UI/AnimatedSearch";
import Arrows from "../components/UI/Arrows";
import Aurora from "../components/UI/Aurora";
import Autocomplete from "../components/UI/Autocomplete";
import AvatarImages from "../components/UI/AvatarImages";
import BeamBackground from "../components/UI/BeamBackground";
import BottomBorderNavLinks from "../components/UI/BottomBorderNavLinks";
import Breadcrumbs from "../components/UI/Breadcrumbs";
import BulletColor from "../components/UI/BulletColor";
import Calendar from "../components/UI/Calendar";
import { CARS } from "../constants/constants";
import CarRunning from "../components/UI/CarRunning";

const Landing = () => {
  useEffect(() => {
    gsap.from(".landing-title", { y: -50, opacity: 0, duration: 1 });
  }, []);

  const { addAlert } = useAlertStore();
  return (
    <motion.div
      className="min-h-screen flex items-center justify-center "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1 className="landing-title text-white text-5xl font-bold">
        Welcome to the Dashboard
      </h1>
      <hr />
      <div className="relative w-full h-64 bg-gray-200 overflow-hidden">
        {CARS.map((car, index) => (
          <CarRunning key={car.id} car={car} duration={4 + index} />
        ))}
      </div>
      <hr />
      <Calendar />
      <hr />
      <BulletColor />
      <hr />
      <Breadcrumbs />
      <hr />
      <BottomBorderNavLinks />
      <hr />
      <BeamBackground />
      <hr />
      <AvatarImages />
      <hr />
      <Autocomplete />
      <hr />
      <Aurora />
      <hr />
      <Arrows />
      <hr />
      <AnimatedSearch />
      <hr />
      <AnimateIcons />
      <hr />
      <button
        className="px-4 py-2 bg-green-500 text-white rounded mr-2"
        onClick={() =>
          addAlert({
            type: "success",
            message: "This is a success alert!",
            duration: 3000,
          })
        }
      >
        Success
      </button>

      <button
        className="px-4 py-2 bg-red-500 text-white rounded"
        onClick={() =>
          addAlert({
            type: "error",
            message: "This is an error alert!",
            duration: 5000,
          })
        }
      >
        Error
      </button>

      <Alerts />
      <Accordion />
      <br />
      {/* <Card /> */}
    </motion.div>
  );
};

export default Landing;
