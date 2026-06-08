import { createBrowserRouter } from "react-router";

import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import LoginRoute from "../routes/LoginRoute";
import RegisterRoute from "../routes/RegisterRoute";

import MapRoute from "../routes/MapRoute";
import AnalyticsRoute from "../routes/AnalyticsRoute";
import FavoritesRoute from "../routes/FavoritesRoute";
import ProfileRoute from "../routes/ProfileRoute";
import LocationDetailsRoute from "../routes/LocationDetailsRoute";

import ErrorRoute from "../routes/ErrorRoute";

export const router = createBrowserRouter([
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
  {
    path: "dashboard",
    Component: DashboardLayout,
    children: [
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
]);
