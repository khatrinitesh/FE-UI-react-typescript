import { lazy, Suspense, type JSX } from 'react';
import { createBrowserRouter } from 'react-router';
import { PATHS } from './path';
import MainLayout from '../layout/mainLayout/MainLayout';


const Home = lazy(() => import('../pages/homePage/HomePage'));
const About = lazy(() => import('../pages/aboutPage/AboutPage'));
const Contact = lazy(() => import('../pages/contactPage/ContactPage'));
const Products = lazy(() => import('../pages/productPage/ProductPage'));
const ProductDetail = lazy(() => import('../pages/productDetailPage/ProductDetailPage'));
const NotFound = lazy(() => import('../pages/notFoundPage/NotFoundPage'));

const withSuspense = (Component: JSX.Element) => (
  <Suspense fallback={<div className="p-4">Loading...</div>}>
    {Component}
  </Suspense>
);


export const router = createBrowserRouter([
  {
    path: PATHS.HOME,
    element: <MainLayout />,
    children: [
      {
        path: PATHS.HOME,
        element: withSuspense(<Home />),
      },
      {
        path: PATHS.ABOUT,
        element: withSuspense(<About />),
      },
      {
        path: PATHS.CONTACT,
        element: withSuspense(<Contact />),
      },
      {
        path: PATHS.PRODUCTS,
        element: withSuspense(<Products />),
      },
      {
        path: PATHS.PRODUCT_DETAIL,
        element: withSuspense(<ProductDetail />),
      },
    ],
  },
  {
    path: '*',
    element: withSuspense(<NotFound />),
  },
]);

