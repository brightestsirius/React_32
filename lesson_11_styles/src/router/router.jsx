import { createBrowserRouter, Navigate } from "react-router";

import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import HomeRoute from "../routes/HomeRoute";

import LoginRoute from "../routes/LoginRoute";
import RegisterRoute from "../routes/RegisterRoute";

import MapRoute from "../routes/MapRoute";
import AnalyticsRoute from "../routes/AnalyticsRoute";
import FavoritesRoute from "../routes/FavoritesRoute";
import ProfileRoute from "../routes/ProfileRoute";
import LocationDetailsRoute from "../routes/LocationDetailsRoute";

import ErrorRoute from "../routes/ErrorRoute";
import NotFoundRoute from "../routes/NotFoundRoute";

import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

import StylesDemo from "../components/stylesDemo/StylesDemo";

export const router = createBrowserRouter([
  {
    index: true,
    Component: HomeRoute,
  },
  {
    Component: PublicRoute,
    children: [
      {
        Component: AuthLayout,
        errorElement: <ErrorRoute />,
        children: [
          {
            path: "login",
            Component: LoginRoute,
          },
          {
            path: "register",
            Component: RegisterRoute,
          },
        ],
      },
    ],
  },
  {
    Component: ProtectedRoute,
    children: [
      {
        path: "dashboard",
        Component: DashboardLayout,
        errorElement: <ErrorRoute />,
        children: [
          {
            index: true,
            element: <Navigate to="/dashboard/map/" replace />,
          },
          {
            path: "map",
            Component: MapRoute,
          },
          {
            path: "analytics",
            Component: AnalyticsRoute,
          },
          {
            path: "favorites",
            Component: FavoritesRoute,
          },
          {
            path: "profile",
            Component: ProfileRoute,
          },
          {
            path: "location/:id",
            Component: LocationDetailsRoute,
          },
          {
            path: "styles",
            Component: StylesDemo
          }
        ],
      },
    ],
  },

  {
    path: "*",
    Component: NotFoundRoute,
  },
]);
