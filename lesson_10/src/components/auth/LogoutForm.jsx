import { useAuthStore } from "../../store/authStore";

export default function LogoutForm() {
  const logout = useAuthStore((state) => state.logout);

  return <button onClick={logout}>Log out</button>;
}
