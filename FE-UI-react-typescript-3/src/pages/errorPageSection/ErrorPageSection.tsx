import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";

const ErrorPageSection = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };
  return (
    <div className="content">
      <h2>404 page not found</h2>
      <p>Sit aute culpa velit aliqua culpa culpa.</p>
      <Button label="" onClick={handleBack}>
        Return HomePage
      </Button>
    </div>
  );
};

export default ErrorPageSection;
