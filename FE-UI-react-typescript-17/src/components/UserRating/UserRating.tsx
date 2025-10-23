import { FaStar } from "react-icons/fa";
import { useRatingStore } from "../../store/ratingStore";
import { USER_RATING_CONSTANTS } from "./userRatingConstants";

const UserRating = () => {
  const { rating, setRating } = useRatingStore();
  const maxRating = USER_RATING_CONSTANTS.maxRating;
  return (
    <div role="radiogroup" aria-label="User Rating">
      {[...Array(maxRating)].map((_, index) => {
        const starValue = index + 1;
        return (
          <button
            key={starValue}
            type="button"
            onClick={() => setRating(starValue)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setRating(starValue);
              }
            }}
            aria-checked={rating === starValue}
            role="radio"
            tabIndex={rating === starValue ? 0 : -1}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 4,
              outline: "none",
            }}
            aria-label={`${starValue} Star`}
          >
            <FaStar
              color={starValue <= rating ? "#fbbf24" : "#d1d5db"}
              size={30}
            />
          </button>
        );
      })}
      <p className="mt-2 text-gray-700">
        Your rating: {rating} / {maxRating}
      </p>
    </div>
  );
};

export default UserRating;
