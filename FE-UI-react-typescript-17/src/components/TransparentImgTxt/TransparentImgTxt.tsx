import { useTransparentTextStore } from "../../store/transparentTextStore";

const TransparentImgTxt = () => {
  const { text, opacity, color, setText, setOpacity, setColor } =
    useTransparentTextStore();

  return (
    <div style={{ maxWidth: 600, margin: "20px auto" }}>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: 300,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1573132223210-d65883b944aa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG11bWJhaXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: 8,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color,
            opacity,
            fontSize: 32,
            fontWeight: "bold",
            textShadow: "0 0 5px rgba(0,0,0,0.7)",
            userSelect: "none",
          }}
        >
          {text}
        </div>
      </div>

      <div style={{ marginTop: 20 }}>
        <label>
          Text:{" "}
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{ width: "100%", padding: 8, fontSize: 16 }}
          />
        </label>

        <label style={{ display: "block", marginTop: 12 }}>
          Opacity (0 to 1):{" "}
          <input
            type="number"
            min={0}
            max={1}
            step={0.05}
            value={opacity}
            onChange={(e) => setOpacity(parseFloat(e.target.value) || 0)}
            style={{ width: "100%", padding: 8, fontSize: 16 }}
          />
        </label>

        <label style={{ display: "block", marginTop: 12 }}>
          Color:{" "}
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            style={{ width: 60, height: 40, padding: 0, border: "none" }}
          />
        </label>
      </div>
    </div>
  );
};

export default TransparentImgTxt;
