import { NavLink, useNavigate } from "react-router";
import { useAuthStore } from "../../store/authStore";

export default function Sidebar() {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const menu = [
    {
      path: "/dashboard/map",
      name: `Map`,
    },
    {
      path: "/dashboard/analytics",
      name: `Analytics`,
    },
    {
      path: "/dashboard/favorites",
      name: `Favorites`,
    },
    {
      path: "/dashboard/profile",
      name: `Profile`,
    },
  ];

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <nav>
      <ul>
        {menu.map((item) => (
          <li key={item.name}>
            <NavLink to={item.path}>{item.name}</NavLink>
          </li>
        ))}
      </ul>
      <button onClick={handleLogout}>Log out</button>
    </nav>
  );
}
