import "./style.css";

const Animation1 = () => {
  return (
    <>
      <div className="flex gap-3">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            style={{ ["--i" as any]: i }}
            className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded"
          >
            {i}
          </div>
        ))}
      </div>
    </>
  );
};

export default Animation1;
