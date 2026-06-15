import { NavLink } from "react-router";

const menu = [
  {
    path: "/dashboard/map",
    name: "Map",
  },
  {
    path: "/dashboard/analytics",
    name: "Analytics",
  },
  {
    path: "/dashboard/favorites",
    name: "Favorites",
  },
  {
    path: "/dashboard/profile",
    name: "Profile",
  },
];

const getClassName = ({ isActive }) => {
  const classes = ["nav__link"];
  if (isActive) classes.push("nav__link--active");
  return classes.join(` `);
};

export default function SidebarNav() {
  return (
    <nav>
      <ul className="sidebar__menu">
        {menu.map((item, i) => (
          <li key={i}>
            <NavLink to={item.path} className={getClassName}>
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
