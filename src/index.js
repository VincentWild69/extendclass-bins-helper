import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './styles/index.scss';
import App from './App';
import ErrorPage from './components/ErrorPage/ErrorPage';
import HomePage from './components/HomePage/HomePage';
import { MainContextProvider } from './Context/MainContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainContextProvider>
      <RouterProvider router={router} />
    </MainContextProvider>
  </React.StrictMode>
);
