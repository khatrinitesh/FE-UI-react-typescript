import { Link } from "react-router";
import { ROUTES } from "../constants/constants";

const NotFound = () => {
  return (
    <div className="notFoundPage p-8 flex items-center justify-center text-center flex-col">
      <h1>404</h1>
      <p>Page not found</p>
      <Link to={ROUTES.HOME}>Go back home</Link>
    </div>
  );
};

export default NotFound;
