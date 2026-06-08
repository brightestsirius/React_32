import { RouterProvider } from "react-router";
import { router } from "./router/router";

import QueryProvider from "./providers/QueryProvider";

export default function App() {
  return (
    <QueryProvider>
      <RouterProvider router={router} />
    </QueryProvider>
  );
}
