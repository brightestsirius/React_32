import { useAuthStore } from "../../store/authStore";
import { useNavigate, useLocation } from "react-router";

export default function LogoutForm() {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true, state: { from: location } });
  };

  return <button onClick={handleLogout}>Logout</button>;
}
