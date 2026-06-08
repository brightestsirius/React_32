import { useAuthStore } from "../../store/authStore";

export default function Header() {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="dashboard__header">{user?.email ?? `User not found`}</div>
  );
}
