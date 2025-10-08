import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import Home from './components/Home/Home.jsx';
import Apps from './components/Apps/Apps.jsx';
import Installation from './components/Installation/Installation.jsx';
import Loader from './components/Loader/Loader.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        index: true,

        Component: Home,
      },
      {
        path: '/apps',
        Component: Apps,
      },
      {
        path: '/installation',
        Component: Installation,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
