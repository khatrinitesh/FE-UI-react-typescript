import { useState } from "react";
import { useTestimonialStore } from "../../store/useTestimonialStore";
import { TESTIMONIAL_STATUS } from "./testimonialConstants";

const Testimonials = () => {
  const { testimonials, addTestimonial, setActive, removeTestimonial } =
    useTestimonialStore();

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");

  const handleAdd = () => {
    if (!name || !role || !message) return;
    addTestimonial(name, role, message);
    setName("");
    setRole("");
    setMessage("");
  };
  return (
    <div style={{ maxWidth: 700, margin: "2rem auto", textAlign: "center" }}>
      <h2>💬 Testimonials</h2>

      {/* Add New Testimonial */}
      <div style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: "6px", marginRight: "6px" }}
        />
        <input
          type="text"
          placeholder="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          style={{ padding: "6px", marginRight: "6px" }}
        />
        <input
          type="text"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{ padding: "6px", marginRight: "6px", width: "250px" }}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      {/* Display Testimonials */}
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {testimonials.map((t) => (
          <div
            key={t.id}
            onClick={() => setActive(t.id)}
            style={{
              padding: "12px 16px",
              borderRadius: "8px",
              border:
                t.status === TESTIMONIAL_STATUS.ACTIVE
                  ? "2px solid #1e90ff"
                  : "1px solid #ccc",
              background:
                t.status === TESTIMONIAL_STATUS.ACTIVE ? "#f0f8ff" : "#fff",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            <strong>{t.name}</strong> ({t.role})<p>{t.message}</p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                removeTestimonial(t.id);
              }}
              style={{
                padding: "2px 6px",
                fontSize: "0.8rem",
                marginTop: "4px",
                cursor: "pointer",
                color: "red",
                border: "1px solid red",
                borderRadius: "4px",
                background: "transparent",
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
