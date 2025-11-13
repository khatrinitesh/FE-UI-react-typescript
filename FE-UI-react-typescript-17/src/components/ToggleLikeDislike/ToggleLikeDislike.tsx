import { useLikeStore } from "../../store/useLikeStore";
import { LIKE_STATES } from "./likeConstants";

const ToggleLikeDislike = () => {
  const { state, toggleLike, toggleDislike } = useLikeStore();

  const isLiked = state === LIKE_STATES.LIKE;
  const isDisliked = state === LIKE_STATES.DISLIKE;
  return (
    <div style={{ textAlign: "center", padding: "1rem" }}>
      <button
        onClick={toggleLike}
        style={{
          backgroundColor: isLiked ? "#28a745" : "#ccc",
          color: "white",
          border: "none",
          padding: "10px 20px",
          marginRight: "10px",
          borderRadius: "6px",
          cursor: "pointer",
          transition: "0.3s",
        }}
      >
        👍 Like
      </button>

      <button
        onClick={toggleDislike}
        style={{
          backgroundColor: isDisliked ? "#dc3545" : "#ccc",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "6px",
          cursor: "pointer",
          transition: "0.3s",
        }}
      >
        👎 Dislike
      </button>

      <p style={{ marginTop: "1rem" }}>
        Current State: <strong>{state}</strong>
      </p>
    </div>
  );
};

export default ToggleLikeDislike;
