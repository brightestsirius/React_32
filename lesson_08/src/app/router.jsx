import { createBrowserRouter } from "react-router";

import HomeRoute from "../routes/HomeRoute";
import TodosRoute from "../routes/TodosRoute";
import TodosStatisticsRoute from "../routes/TodosStatisticsRoute";
import TodoItemRoute from "../routes/TodoItemRoute";
import ErrorPage from "../pages/ErrorPage";

import { service as todosService } from "../services/todos";

import RootLayout from "../layouts/RootLayout";
import TodosLayout from "../layouts/TodosLayout";

import AuthGuard from "../guards/AuthGuard";

export let router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HomeRoute,
        errorElement: <ErrorPage />,
      },
      {
        path: "/todos",
        Component: TodosLayout,
        children: [
          {
            index: true,
            Component: TodosRoute,
            errorElement: <ErrorPage />,
          },
          {
            path: "statistics",
            Component: TodosStatisticsRoute,
            errorElement: <ErrorPage />,
          },
          {
            path: ":id",
            Component: TodoItemRoute,
            errorElement: <ErrorPage />,
          },
        ],
      },
      {
        path: "account",
        lazy: async () => {
          const { default: AuthRoute } = await import("../routes/AuthRoute");

          return {
            element: (
              <AuthGuard>
                <AuthRoute />
              </AuthGuard>
            ),
          };
        },
        errorElement: <ErrorPage />,
      },
    ],
  },
]);
