import { useWrapStore } from "../../store/wrapStore";
import { TEXT_WRAP_DATA } from "./textWrapData";

const TextWrapper = () => {
  const { wrapEnabled, toggleWrap } = useWrapStore();
  return (
    <section className="container mx-auto px-4 py-10">
      {/* Toggle Button */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-green-800">
          Text Wrapping Example
        </h2>
        <button
          onClick={toggleWrap}
          className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800 transition"
        >
          {wrapEnabled ? "Disable Wrap" : "Enable Wrap"}
        </button>
      </div>

      {/* Paragraphs */}
      <div className="space-y-6">
        {TEXT_WRAP_DATA.map((para) => (
          <div
            key={para.id}
            className="p-4 bg-white shadow-md rounded-md border border-gray-200"
          >
            <h3 className="text-lg font-semibold mb-2 text-green-700">
              {para.title}
            </h3>
            <p
              className={`text-gray-700 ${
                wrapEnabled
                  ? "break-normal"
                  : "whitespace-nowrap overflow-hidden text-ellipsis"
              }`}
              style={{
                width: wrapEnabled ? "100%" : "100%",
                display: "block",
              }}
            >
              {para.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TextWrapper;
