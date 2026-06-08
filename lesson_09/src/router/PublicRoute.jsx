import { Navigate, Outlet } from "react-router";
import { useAuthStore } from "../store/authStore";

export default function PublicRoute() {
  const isAuth = useAuthStore((state) => state.isAuth);

  if (isAuth) {
    return <Navigate to={"/dashboard/map"} replace />;
  }

  return <Outlet />;
}
