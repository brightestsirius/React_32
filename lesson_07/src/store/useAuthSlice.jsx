import { useReducer } from "react";

export const AUTH_ACTIONS = {
  LOGIN: `LOGIN`,
  LOGOUT: `LOGOUT`,
};

export default function useAuthSlice() {
  const initialState = {
    isAuth: false,
  };

  const reducer = (state, { type, payload }) => {
    switch (type) {
      case AUTH_ACTIONS.LOGIN:
        return { ...state, isAuth: true };
      case AUTH_ACTIONS.LOGOUT:
        return { ...state, isAuth: false };
      default:
        return state;
    }
  };

  const [authState, authDispatch] = useReducer(reducer, initialState);

  return { authState, authDispatch };
}
