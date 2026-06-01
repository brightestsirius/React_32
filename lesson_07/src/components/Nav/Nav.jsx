import { NavLink } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function Nav() {
  const getClassName = ({ isActive }) => {
    const classes = [`nav__link`];
    isActive && classes.push(`nav__link--active`);

    return classes.join(` `);
  };

  const { authState } = useContext(AuthContext);

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" className={getClassName}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/todos" className={getClassName} end>
            Todos
          </NavLink>
        </li>
        <li>
          <NavLink to={"/todos/statistics"} className={getClassName}>
            Todos Statistics
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
