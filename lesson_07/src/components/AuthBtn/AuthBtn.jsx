import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { AUTH_ACTIONS } from "../../store/useAuthSlice";

export default function AuthBtn() {
  const { authState, authDispatch } = useContext(AuthContext);

  const handleSetAuth = () => {
    authDispatch({
      type: authState.isAuth ? AUTH_ACTIONS.LOGOUT : AUTH_ACTIONS.LOGIN,
    });
  };

  return (
    <button onClick={handleSetAuth}>
      {authState.isAuth ? `Log out` : `Log in`}
    </button>
  );
}
