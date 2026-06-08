import { Navigate, Outlet, useLocation } from "react-router";
import { useAuthStore } from "../store/authStore";

export default function PublicRoute() {
  const isAuth = useAuthStore((state) => state.isAuth);
  const locations = useLocation();
  const from = locations.state?.from?.pathname || "/dashboard/map";

  if (isAuth) return <Navigate to={from} replace />;

  return <Outlet />;
}
