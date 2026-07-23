
import { RouterProvider } from '@tanstack/react-router';
import './App.css';
import { router } from './router/router';

export default function App() {

  return <RouterProvider router={router} />;
}
