import { useNavigate } from "react-router-dom";
import { UserPath } from "../../routes/paths/userPath";

const NotFoundPageSection = () => {
  const navigate = useNavigate();
  return (
    <div className="py-[150px] flex flex-col items-center justify-center text-center">
      <h1 className="text-[#09213b] fontpoppinssb text-[2.5rem] ">
        PAGE NOT FOUND
      </h1>

      <p className="text-black text-[1rem] my-[20px] leading-normal fontpoppinsr">
        Sorry, the page you're looking for doesn't exist. If you think something
        is broken, report a problem.
      </p>

      <div>
        <button className="" onClick={() => navigate(UserPath.homePath)} />
      </div>
    </div>
  );
};

export default NotFoundPageSection;
