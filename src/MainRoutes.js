import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import AdminPage from "./pages/AdminPage";
import AuthPage from "./pages/AuthPage";
import CartPage from "./pages/CartPage";
import ContactUsPage from "./pages/ContactUsPage";
import EditProductPage from "./pages/EditProductPage";
import HomePage from "./pages/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";

import ProductsPage from "./pages/ProductsPage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    },
    {
      link: "/about",
      element: <AboutUs />,
      id: 2,
    },
    {
      link: "/Auth",
      element: <AuthPage />,
      id: 3,
    },
    {
      link: "/Products",
      element: <ProductsPage />,
      id: 4,
    },
    {
      link: "/Contact",
      element: <ContactUsPage />,
      id: 5,
    },

    {
      link: "/cart",
      element: <CartPage />,
      id: 6,
    },
    {
      link: "/Products/:id",
      eleemnt: <ProductDetailsPage />,
      id: 7,
    },
  ];

  const PRIVATE_ROUTES = [
    {
      link: "/admin",
      element: <AdminPage />,
      id: 1,
    },
    {
      link: "/edit/:id",
      element: <EditProductPage />,
      id: 2,
    },
  ];
  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} />
        ))}

        {PRIVATE_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} />
        ))}
      </Routes>
    </>
  );
};

export default MainRoutes;
