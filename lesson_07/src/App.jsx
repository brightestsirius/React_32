import { useReducer } from "react";
import { RouterProvider } from "react-router";
import { router } from "./app/router";

import { AuthContext } from "./contexts/AuthContext";
import { reducer, initialState } from "./store/authSlice";

export default function App() {
  const [authState, authDispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      <RouterProvider router={router} />
    </AuthContext.Provider>
  );
}