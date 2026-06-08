import { Navigate } from "react-router";
import { useAuthStore } from "../store/authStore";

export default function HomeRoute() {
  const isAuth = useAuthStore((state) => state.isAuth);

  return isAuth ? (
    <Navigate to={"/dashboard/map"} replace />
  ) : (
    <Navigate to={"/login"} replace />
  );
}