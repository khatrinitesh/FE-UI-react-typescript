import { useNavigate } from "react-router";
import Button from "../../components/UI/button/Button";

export default function NotFound() {
  const navigate = useNavigate();
  const btnBack = () => {
    navigate("/");
  };
  return (
    <div className="flex-col  gap-5 notFoundPage flex items-center justify-center bg-gray-200 h-dvh">
      <h1>404 - Page Not Found</h1>
      <Button onClick={btnBack}>GO Back</Button>
    </div>
  );
}
