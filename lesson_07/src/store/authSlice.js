export const AUTH_ACTIONS = {
  LOGIN: `LOGIN`,
  LOGOUT: `LOGOUT`,
};

export const initialState = {
  isAuth: false,
};

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case AUTH_ACTIONS.LOGIN:
      return { ...state, isAuth: true };
    case AUTH_ACTIONS.LOGOUT:
      return { ...state, isAuth: false };
    default:
      return state;
  }
};
