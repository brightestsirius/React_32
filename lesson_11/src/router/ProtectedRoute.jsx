import { Navigate, Outlet, useLocation } from "react-router";
import { useAuthStore } from "../store/authStore";

export default function ProtectedRoute() {
  const isAuth = useAuthStore((state) => state.isAuth);
  const location = useLocation();

  if (!isAuth) return <Navigate to={"/login"} state={{ from: location }} />;

  return <Outlet />;
}
