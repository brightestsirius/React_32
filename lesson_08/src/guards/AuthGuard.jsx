import { Navigate } from "react-router";
import { useAuthStore } from "../store/useAuthStore";

export default function AuthGuard({ children }) {
  const isAuth = useAuthStore((state) => state.isAuth);

  if (!isAuth) {
    return <Navigate to="/" replace />;
  }

  return children;
}