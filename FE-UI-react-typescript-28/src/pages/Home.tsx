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
import SearchResults from "../components/ui/AnimatedSearch/SearchResults";
import AnimatedSearchBar from "../components/ui/AnimatedSearch/AnimateSearch";
import Arrows from "../components/ui/Arrows";
import AvatarGroup from "../components/ui/Avatars/AvatarGroup";
import BackgroundBeams from "../components/ui/BackgroundBeams";
import Banner from "../components/ui/Banner/Banner";
import BentoGrid from "../components/ui/BentoGrid/BentoGrid";
import BWImage from "../components/ui/BlackWhiteImg/BWImage";
// import BlurToggleButton from "../components/ui/BlurBackgroundImage/BlurToggleButton";
// import BlurBackgroundImage from "../components/ui/BlurBackgroundImage/BlurBackgroundImage";
import NewArray2 from "../components/ui/Array/newArray/NewArray2";
import At3 from "../components/ui/Array/at/At3";
import Concat3 from "../components/ui/Array/concat/Concat3";
import CopyWithin3 from "../components/ui/Array/copyWithin/CopyWithin3";
import Entries3 from "../components/ui/Array/entries/Entries3";
import Every3 from "../components/ui/Array/every/Every3";
import Filter3 from "../components/ui/Array/Filter/Filter3";
import Find3 from "../components/ui/Array/Find/Find3";
import Flat1 from "../components/ui/Array/Flat/Flat1";
import Flat2 from "../components/ui/Array/Flat/Flat2";
import Flat3 from "../components/ui/Array/Flat/Flat3";
import ForEach2 from "../components/ui/Array/forEach/ForEach2";
import ForEach3 from "../components/ui/Array/forEach/ForEach3";
import ForEach1 from "../components/ui/Array/forEach/ForEach1";
import From3 from "../components/ui/Array/from/From3";
import Includes2 from "../components/ui/Array/Includes/Includes2";
import IndexOf1 from "../components/ui/Array/indexOf/IndexOf1";

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
      <IndexOf1 />
      <hr />
      <Includes2 />
      <hr />
      <From3 />
      <hr />
      <ForEach3 />
      <hr />
      <ForEach2 />
      <hr />
      <ForEach1 />
      <hr />
      <Flat3 />
      <hr />
      <Flat2 />
      <hr />
      <Flat1 />
      <hr />
      <Find3 />
      <hr />
      <Filter3 />
      <hr />
      <Every3 />
      <hr />
      <Entries3 />
      <hr />
      <CopyWithin3 />
      <hr />
      <Concat3 />

      <hr />
      <At3 />
      <hr />
      <NewArray2 />
      {/* <hr />
      <BlurBackgroundImage />
      <BlurToggleButton /> */}
      <hr />

      <BWImage
        id={1}
        url="https://picsum.photos/id/1/400/300?grayscale"
        author="John Doe"
      />
      <hr />

      <BentoGrid />

      <hr />
      <Banner />
      <hr />

      <BackgroundBeams />
      <hr />

      <AvatarGroup />

      <hr />

      <Arrows direction="up" />

      <div className="flex gap-10">
        <Arrows direction="left" />
        <Arrows direction="right" />
      </div>

      <Arrows direction="down" />
      <hr />
      <AnimatedSearchBar />
      <SearchResults />
      <hr />

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
