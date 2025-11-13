import { useRoutes } from "react-router-dom";
import { Suspense } from "react";
import { routes } from "./appRoutes";
import Preloader from "../components/Preloader/Preloader";

const RoutesPath = () => {
  const routing = useRoutes(routes);
  return (
    <>
      <Suspense fallback={<Preloader />}>{routing}</Suspense>
    </>
  );
};

export default RoutesPath;
