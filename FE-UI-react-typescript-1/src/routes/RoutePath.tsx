

import { userRoutePath } from './routesPath/userRoutePath';
import PreloaderSection from '../components/preloaderSection/PreloaderSection';
import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import MainLayout from './../layout/mainLayout/MainLayout';

const RoutePath = ({ isFetching, isLoading }) => {

  return isFetching || isLoading ? (
    <PreloaderSection/>) : (
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
