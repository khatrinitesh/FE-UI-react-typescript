import { useNavigate } from "react-router";
import Button from "../../components/UI/button/Button";

const NotFoundPage = () => {
  const navigate = useNavigate();
  const btnBack = () => {
    navigate("/");
  };
  return (
    <div className="h-screen flex flex-col gap-8 items-center justify-center text-3xl">
      404 Not
      <Button onClick={btnBack}>Go Back</Button>
    </div>
  );
};

export default NotFoundPage;
