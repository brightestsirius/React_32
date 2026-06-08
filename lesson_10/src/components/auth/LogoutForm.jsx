import { useAuthStore } from "../../store/authStore";
import { useNavigate } from "react-router";

export default function LogoutForm() {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return <button onClick={handleLogout}>Logout</button>;
}
