import { createBrowserRouter, Navigate } from "react-router";

import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import ErrorRoute from "../routes/ErrorRoute";

import LoginRoute from "../routes/LoginRoute";
import RegisterRoute from "../routes/RegisterRoute";

import HomeRoute from "../routes/HomeRoute";

import MapRoute from "../routes/MapRoute";
import AnalyticsRoute from "../routes/AnalyticsRoute";
import FavoritesRoute from "../routes/FavoritesRoute";
import ProfileRoute from "../routes/ProfileRoute";
import LocationDetailsRoute from "../routes/LocationDetailsRoute";

import ProtectedRoute from "../router/ProtectedRoute";
import PublicRoute from "../router/PublicRoute";
import NotFoundRoute from "../routes/NotFoundRoute";

export const router = createBrowserRouter([
  {
    index: true,
    Component: HomeRoute,
    errorElement: <ErrorRoute />,
  },
  {
    Component: PublicRoute,
    children: [
      {
        Component: AuthLayout,
        children: [
          {
            path: "login",
            Component: LoginRoute,
            errorElement: <ErrorRoute />,
          },
          {
            path: "register",
            Component: RegisterRoute,
            errorElement: <ErrorRoute />,
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
        children: [
          {
            index: true,
            element: <Navigate to={"/dashboard/map"} replace />,
          },
          {
            path: "map",
            Component: MapRoute,
            errorElement: <ErrorRoute />,
          },
          {
            path: "analytics",
            Component: AnalyticsRoute,
            errorElement: <ErrorRoute />,
          },
          {
            path: "favorites",
            Component: FavoritesRoute,
            errorElement: <ErrorRoute />,
          },
          {
            path: "profile",
            Component: ProfileRoute,
            errorElement: <ErrorRoute />,
          },
          {
            path: "location/:id",
            Component: LocationDetailsRoute,
            errorElement: <ErrorRoute />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    Component: NotFoundRoute,
  },
]);
