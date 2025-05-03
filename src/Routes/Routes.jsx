import React from "react";
import Home from "../pages/Home/Home.jsx";
import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout/HomeLayout.jsx";
import CatagoryNews from "../pages/CatagoryNews/CatagoryNews.jsx";
import Authentication from "../pages/Authentication/Authentication.jsx";
import Loging from "../pages/Authentication/Loging.jsx";
import Register from "../pages/Authentication/Register.jsx";
import NewsDetails from "../pages/NewsDetails/NewsDetails.jsx";
import Loading from "../component/Loading/Loading.jsx";
import PrivateRoute from "../component/PrivateRoute/PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    HydrateFallback: Loading,
    loader: () => fetch("/news.json"),
    Component: HomeLayout,
    children: [
      { path: "", Component: Home },
      {
        path: "/categorie/:id",
        HydrateFallback: Loading,
        loader: () => fetch("/news.json"),
        Component: CatagoryNews,
      },
    ],
  },
  {
    path: "/auth",
    Component: Authentication,
    children: [
      {
        index: true,
        Component: Loging,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
  {
    path: "/NewsDetails/:id",
    HydrateFallback: Loading,
    loader: () => fetch("/news.json"),
    element: (
      <PrivateRoute>
        <NewsDetails></NewsDetails>
      </PrivateRoute>
    ),
  },
]);

export default router;
