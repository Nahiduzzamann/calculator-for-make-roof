import React from "react";
import ReactDOM from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import enTranslation from "../public/en.json";
import bnTranslation from "../public/bn.json";
import Main from "./layout/Main";
import Home from "./pages/Home/Home/Home";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import AuthProvider from "./provider/AuthProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);

i18n.init({
  interpolation: { escapeValue: false },
  lng: "bn",
  resources: {
    en: {
      translation: enTranslation,
    },
    bn: {
      translation: bnTranslation,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <div className="bg-gradient-to-r from-gray-700 via-gray-500 to-gray-300 m-0">
      <I18nextProvider i18n={i18n}>
        <RouterProvider router={router} />
      </I18nextProvider>
    </div>
    </AuthProvider>
  </React.StrictMode>
);
