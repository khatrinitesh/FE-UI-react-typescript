import { useNavigate } from "react-router-dom";
import ButtonComponent from "../../components/buttonComponent/ButtonComponent";
import HeadTitleComponent from "../../components/headTitleComponent/HeadTitleComponent";
import DescriptionComponent from "../../components/descriptionComponent/DescriptionComponent";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="p-[10px] grid gap-[20px] justify-center text-center">
      <HeadTitleComponent>404 - Page Not Found</HeadTitleComponent>
      <DescriptionComponent>
        The page you’re looking for might have been removed or doesn’t exist.
      </DescriptionComponent>
      <div className="flex justify-center w-full">
        <ButtonComponent label="Go Back" onClick={handleClick} />
      </div>
    </div>
  );
};

export default ErrorPage;
