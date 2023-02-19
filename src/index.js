import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './styles/index.scss';
import App from './App';
import ErrorPage from './components/ErrorPage/ErrorPage';
import HomePage from './components/HomePage/HomePage';
import { MainContextProvider } from './Context/MainContext';
import { NotificationContextProvider } from './Context/NotificationContext';
import BinDetails from './components/BinDetails/BinDetails';
import EnterApiKeyForm from './components/EnterApiKeyForm/EnterApiKeyForm';
import BinCreate from './components/BinCreate/BinCreate';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true,
        element: <HomePage />
      },
      {
        path: "enter-api-key",
        element: <EnterApiKeyForm />
      },
      {
        path: "bins/:id",
        element: <BinDetails />
      },
      {
        path: "bins/create",
        element: <BinCreate />
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NotificationContextProvider>
      <MainContextProvider>
          <RouterProvider router={router} />
      </MainContextProvider>
    </NotificationContextProvider>
  </React.StrictMode>
);
