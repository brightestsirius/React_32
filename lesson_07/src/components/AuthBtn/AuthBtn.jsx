import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { AUTH_ACTIONS } from "../../store/authSlice";

export default function AuthBtn() {
  const { authState, authDispatch } = useContext(AuthContext);

  const handleAuth = () => {
    authDispatch({
      type: authState.isAuth ? AUTH_ACTIONS.LOGOUT : AUTH_ACTIONS.LOGIN,
    });
  };

  return (
    <button onClick={handleAuth}>
      {authState.isAuth ? `Log out` : `Log in`}
    </button>
  );
}
