import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="p-[10px] grid gap-[20px] justify-center text-center">
      <h1>Oops! Something went wrong.</h1>
      <p>
        The page you’re looking for might have been removed or doesn’t exist.
      </p>
      <div className="flex justify-center w-full">
        <Button label="Go Back" onClick={handleClick} />
      </div>
    </div>
  );
};

export default ErrorPage;
