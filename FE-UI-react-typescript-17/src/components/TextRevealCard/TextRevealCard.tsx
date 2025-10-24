import React, { useState } from "react";
import { useCardStore } from "../../store/useCardStore";
import { CARD_STATUS } from "./cardConstants";

const TextRevealCard = () => {
  const [titleInput, setTitleInput] = useState("");
  const [textInput, setTextInput] = useState("");

  const { cards, addCard, revealCard, hideCard } = useCardStore();

  const handleAddCard = () => {
    if (!titleInput.trim() || !textInput.trim()) return;
    addCard(titleInput, textInput);
    setTitleInput("");
    setTextInput("");
  };

  return (
    <div style={{ maxWidth: 800, margin: "2rem auto", textAlign: "center" }}>
      <h2>🃏 Text Reveal Cards</h2>

      {/* Add New Card */}
      <div
        style={{
          marginBottom: "1rem",
          display: "flex",
          gap: "8px",
          justifyContent: "center",
        }}
      >
        <input
          type="text"
          placeholder="Title"
          value={titleInput}
          onChange={(e) => setTitleInput(e.target.value)}
          style={{ padding: "6px", width: "150px" }}
        />
        <input
          type="text"
          placeholder="Hidden Text"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          style={{ padding: "6px", width: "250px" }}
        />
        <button onClick={handleAddCard}>Add Card</button>
      </div>

      {/* Cards Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "16px",
        }}
      >
        {cards.map((card) => (
          <div
            key={card.id}
            onMouseEnter={() => revealCard(card.id)}
            onMouseLeave={() => hideCard(card.id)}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "16px",
              cursor: "pointer",
              background: "#f9f9f9",
              transition: "all 0.3s ease",
              boxShadow:
                card.status === CARD_STATUS.REVEALED
                  ? "0 4px 20px rgba(0,0,0,0.2)"
                  : "0 2px 6px rgba(0,0,0,0.1)",
            }}
          >
            <h3 style={{ marginBottom: "8px" }}>{card.title}</h3>
            <p
              style={{
                maxHeight:
                  card.status === CARD_STATUS.REVEALED ? "100px" : "0px",
                overflow: "hidden",
                transition: "max-height 0.3s ease",
              }}
            >
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextRevealCard;
