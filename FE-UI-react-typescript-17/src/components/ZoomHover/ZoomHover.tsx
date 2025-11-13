import { useZoomStore } from "../../store/zoomStore";
import { PRODUCTS } from "./products";

const ZoomHover = () => {
  const { zoomedId, setZoomedId } = useZoomStore();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {PRODUCTS.map((product) => {
        const isZoomed = zoomedId === product.id;

        return (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden text-center p-4 cursor-pointer transition-transform duration-300"
            onMouseEnter={() => setZoomedId(product.id)}
            onMouseLeave={() => setZoomedId(null)}
            style={{
              transform: isZoomed ? "scale(1.08)" : "scale(1)",
              boxShadow: isZoomed
                ? "0 8px 20px rgba(0,0,0,0.2)"
                : "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="mx-auto w-[200px] h-[200px] object-cover rounded-md transition-transform duration-300"
              style={{
                transform: isZoomed ? "scale(1.15)" : "scale(1)",
              }}
            />
            <h3 className="mt-3 font-semibold text-lg">{product.name}</h3>
            <p className="text-green-700 font-bold">${product.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ZoomHover;
