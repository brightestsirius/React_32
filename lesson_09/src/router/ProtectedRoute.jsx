import { Navigate, useLocation, Outlet } from "react-router";
import { useAuthStore } from "../store/authStore";

export default function ProtectedRoute() {
  const location = useLocation();

  const isAuth = useAuthStore((state) => state.isAuth);
  if (!isAuth)
    return <Navigate to={"/login"} replace state={{ from: location }} />;

  return <Outlet />;
}
