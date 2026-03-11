import { useZoomStore } from "../../store/useZoomStore";
import { motion } from "framer-motion";

const ImageZoom1 = () => {
  const { zoom, zoomIn, zoomOut, resetZoom } = useZoomStore();
  return (
    <div className="flex flex-col items-center gap-6 p-10">
      <div className="overflow-hidden rounded-xl shadow-lg">
        <motion.img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
          alt="Nature"
          className="w-100 h-75 object-cover"
          animate={{ scale: zoom }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />
      </div>

      <div className="flex gap-4">
        <button
          onClick={zoomIn}
          className="px-4 py-2 cursor-pointer bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Zoom In
        </button>

        <button
          onClick={zoomOut}
          className="px-4 py-2 cursor-pointer bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          Zoom Out
        </button>

        <button
          onClick={resetZoom}
          className="px-4 py-2 cursor-pointer bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default ImageZoom1;
