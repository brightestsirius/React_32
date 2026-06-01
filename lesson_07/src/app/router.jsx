import { Suspense } from "react";
import { createBrowserRouter } from "react-router";

import HomeRoute from "../routes/HomeRoute";
import TodosRoute from "../routes/TodosRoute";
import TodosStatisticsRoute from "../routes/TodosStatisticsRoute";
import TodosItemRoute from "../routes/TodosItemRoute";
import ErrorPage from "../pages/ErrorPage";

import RootLayout from "../layouts/RootLayout";
import TodosLayout from "../layouts/TodosLayout";

import { todosLoader, todoLoader } from "../loaders/todos";

import AuthGuard from "../guards/AuthGuard";
import { AccountRouteLazy } from "../routes/AccountRouteLazy";

let router = createBrowserRouter([
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
        path: "todos",
        Component: TodosLayout,
        children: [
          {
            id: "todos",
            loader: todosLoader,
            errorElement: <ErrorPage />,
            HydrateFallback: () => <p>Loading...</p>,
            children: [
              {
                index: true,
                Component: TodosRoute,
              },
              {
                path: "statistics",
                Component: TodosStatisticsRoute,
              },
            ],
          },

          {
            path: ":id",
            Component: TodosItemRoute,
            loader: todoLoader,
          },
        ],
      },
      {
        path: "account",
        element: (
          <AuthGuard>
            <Suspense fallback={<p>Loading...</p>}>
              <AccountRouteLazy />
            </Suspense>
          </AuthGuard>
        ),
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

export { router };
