import type { ButtonProps } from "../../interface";
import "./style.css";

const ButtonSection = ({
  text,
  icon,
  iconPosition = "left",
  onClick,
  isLoading = false,
  isDisabled = false,
  className = "",
}: ButtonProps) => {
  return (
    <button
      className={`btn ${className}`}
      onClick={onClick}
      disabled={isDisabled || isLoading}
    >
      {isLoading ? (
        <span className="spinner" />
      ) : (
        <>
          {icon && iconPosition === "left" && (
            <span className="btn-icon left">{icon}</span>
          )}
          <span className="btn-text">{text}</span>
          {icon && iconPosition === "right" && (
            <span className="btn-icon right">{icon}</span>
          )}
        </>
      )}
    </button>
  );
};

export default ButtonSection;
