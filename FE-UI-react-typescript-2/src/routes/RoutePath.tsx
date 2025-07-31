
import { userRoutePath } from './routesPath/userRoutePath';
import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import PreloaderSpinner from '../components/preloaderSpinner/PreloaderSpinner';
import MainLayout from '../layout/MainLayout';

const RoutePath = ({ isFetching, isLoading }) => {

  return isFetching || isLoading ? (
    <PreloaderSpinner/>) : (
      <>
       <MainLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {userRoutePath.map((route, i) => (
            <Route key={i} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Suspense>
    </MainLayout>
    </>
    )
  )
};

export default RoutePath;