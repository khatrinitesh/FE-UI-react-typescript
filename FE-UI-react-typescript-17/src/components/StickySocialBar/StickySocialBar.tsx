import { useSocialStore } from "../../store/useSocialStore";
import { SOCIAL_LINKS } from "./socialConstants";

const StickySocialBar = () => {
  const { isVisible, toggleVisibility } = useSocialStore();

  if (!isVisible) {
    return (
      <button
        onClick={toggleVisibility}
        style={{
          position: "fixed",
          top: "50%",
          left: "0",
          background: "#1e90ff",
          color: "#fff",
          border: "none",
          borderRadius: "0 5px 5px 0",
          padding: "10px",
          cursor: "pointer",
          zIndex: 1000,
        }}
      >
        ☰
      </button>
    );
  }
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: 0,
        transform: "translateY(-50%)",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        background: "#fff",
        padding: "8px",
        borderRadius: "0 8px 8px 0",
        boxShadow: "2px 2px 8px rgba(0,0,0,0.2)",
        zIndex: 1000,
      }}
    >
      <button
        onClick={toggleVisibility}
        style={{
          alignSelf: "flex-end",
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: "16px",
          marginBottom: "5px",
        }}
      >
        ✖
      </button>

      {Object.values(SOCIAL_LINKS).map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            background: social.color,
            color: "#fff",
            padding: "10px",
            borderRadius: "50%",
            textAlign: "center",
            fontSize: "20px",
            transition: "transform 0.2s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default StickySocialBar;
