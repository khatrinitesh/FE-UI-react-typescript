import { userRoutePath } from "./routesPath/userRoutePath";
import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import PreloaderSpinner from "../components/preloaderSpinner/PreloaderSpinner";
import MainLayout from "./../layout/MainLayout";

const RoutePath = ({
  isFetching,
  isLoading,
}: {
  isFetching: boolean;
  isLoading: boolean;
}) => {
  if (isFetching || isLoading) return <PreloaderSpinner />;

  return (
    <Suspense fallback={<PreloaderSpinner />}>
      <Routes>
        <Route path="/" element={<MainLayout children={undefined} />}>
          {userRoutePath.map((route, i) => (
            <Route key={i} path={route.path} element={route.element} />
          ))}
        </Route>
      </Routes>
    </Suspense>
  );
};

export default RoutePath;
