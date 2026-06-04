import { useAuthStore } from "../../store/useAuthStore";

export default function AuthBtn() {
  const isAuth = useAuthStore((state) => state.isAuth);
  const toggleAuth = useAuthStore((state) => state.toggleAuth);

  return <button onClick={toggleAuth}>{isAuth ? `Log out` : `Log in`}</button>;
}
