import { useState } from "react";
import { RATING_SCORES } from "./components/userRatingData";
import { useUserRatingStore } from "../../logic-store-state-management/useUserRatingStore/useUserRatingStore";
import type { UserRatingProps } from "../../interface";

const UserRatingComponent = () => {
  return (
    <>
      <UserRating userId="user123" />
    </>
  );
};

export default UserRatingComponent;

const UserRating: React.FC<UserRatingProps> = ({ userId }) => {
  const ratingData = useUserRatingStore((state) => state.ratings[userId]);
  const setRating = useUserRatingStore((state) => state.setRating);
  const clearRating = useUserRatingStore((state) => state.clearRating);

  const [selectedRating, setSelectedRating] = useState(ratingData?.rating || 0);
  const [comment, setComment] = useState(ratingData?.comment || "");

  const handleSave = () => {
    if (selectedRating > 0) {
      setRating(userId, selectedRating as any, comment);
    }
  };

  const handleClear = () => {
    clearRating(userId);
    setSelectedRating(0);
    setComment("");
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: 12, width: 300 }}>
      <h3>User Rating for {userId}</h3>
      <div>
        {RATING_SCORES.map((score) => (
          <button
            key={score}
            style={{
              margin: 2,
              backgroundColor: score === selectedRating ? "gold" : "lightgray",
            }}
            onClick={() => setSelectedRating(score)}
          >
            {score}⭐
          </button>
        ))}
      </div>
      <textarea
        placeholder="Add a comment (optional)"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        style={{ width: "100%", marginTop: 8 }}
      />
      <div style={{ marginTop: 8 }}>
        <button onClick={handleSave} disabled={selectedRating === 0}>
          Save Rating
        </button>
        <button onClick={handleClear} style={{ marginLeft: 8 }}>
          Clear Rating
        </button>
      </div>

      {ratingData && (
        <div style={{ marginTop: 12 }}>
          <strong>Current Rating:</strong> {ratingData.rating}⭐
          <br />
          <strong>Comment:</strong> {ratingData.comment || "None"}
        </div>
      )}
    </div>
  );
};
