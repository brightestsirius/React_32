import { Navigate, Outlet } from "react-router";
import { useAuthStore } from "../store/authStore";

export default function ProtectedRoute() {
  const isAuth = useAuthStore((state) => state.isAuth);

  if (!isAuth) return <Navigate to="/login" replace />;

  return <Outlet />;
}
