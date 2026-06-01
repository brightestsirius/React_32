import { useContext } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

export default function AuthGuard({ children }) {
  const { authState } = useContext(AuthContext);

  if (!authState.isAuth) return <Navigate to="/" />;

  return children;
}