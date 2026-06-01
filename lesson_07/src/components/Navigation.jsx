import { useContext } from "react";
import { NavLink } from "react-router";

import { AuthContext } from "../contexts/AuthContext";

export default function Navigation() {
  const { authState } = useContext(AuthContext);

  const getClassName = ({ isActive }) => {
    const classes = [`nav__link`];
    isActive && classes.push(`nav__link--active`);

    return classes.join(` `);
  };

  return (
    <nav>
      <ul>
        <li>
          <NavLink to={"/"} className={getClassName}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/todos"} className={getClassName}>
            Todos
          </NavLink>
        </li>
        {authState.isAuth && (
          <li>
            <NavLink to={"/account"} className={getClassName}>
              Account
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}
