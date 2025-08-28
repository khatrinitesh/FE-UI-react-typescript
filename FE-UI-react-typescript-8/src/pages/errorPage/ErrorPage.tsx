import { useNavigate } from "react-router-dom";
import Button from "../../components/buttonComponent/ButtonComponent";

const ErrorPage = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };
  return (
    <div className="errorPage flex gap-[20px] justify-center  flex-col items-center h-dvh">
      <h3>404 page not found</h3>
      <p>
        Amet anim nisi occaecat magna est cillum id esse elit laborum aute sunt.
        Exercitation laboris sunt exercitation anim cillum do quis. Qui culpa eu
        minim Lorem non ea. Nostrud aute et consectetur non in fugiat aliqua
        qui. Et laborum commodo enim sint officia magna nisi tempor ea do id. Ut
        aute eiusmod ut laboris anim laboris ullamco Lorem tempor ullamco velit
        veniam sint. Adipisicing culpa ipsum in elit nulla. Pariatur esse magna
        occaecat esse veniam id sunt proident dolore in enim fugiat sit.
      </p>
      <Button label="Go Back" onClick={handleBack} />
    </div>
  );
};

export default ErrorPage;
