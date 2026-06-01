import { createBrowserRouter } from "react-router";

import HomeRoute from "../routes/HomeRoute";
import TodosRoute from "../routes/TodosRoute";
import TodosStatisticsRoute from "../routes/TodosStatisticsRoute";
import TodoItemRoute from "../routes/TodoItemRoute";
import AuthRoute from "../routes/AuthRoute";
import ErrorPage from "../pages/ErrorPage";

import { service as todosService } from "../services/todos";

import RootLayout from "../layouts/RootLayout";
import TodosLayout from "../layouts/TodosLayout";

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
            id: "todos",
            loader: () => todosService.get(),
            HydrateFallback: () => <p>Loading...</p>,
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
            ],
          },
          {
            path: ":id",
            loader: ({ params }) => todosService.get(params.id),
            Component: TodoItemRoute,
            HydrateFallback: () => <p>Loading...</p>,
            errorElement: <ErrorPage />,
          },
        ],
      },
      {
        path: "account",
        Component: AuthRoute,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);
