import React from "react";
import { RouterProvider } from "react-router";
import { router } from "./app/router";

import { AuthContext } from "./contexts/AuthContext";
import useAuthSlice from "./store/useAuthSlice";

export default function App() {
  const { authState, authDispatch } = useAuthSlice();

  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      <RouterProvider router={router} />
    </AuthContext.Provider>
  );
}
