import { useReducer } from "react";

export default function useCustomize() {
  const CUSTOMIZE_ACTIONS = {
    SET_COLOR: `SET_COLOR`,
  };
  const initialState = {
    color: `#123456`,
  };

  const reducer = (state, { type, payload }) => {
    switch (type) {
      case CUSTOMIZE_ACTIONS.SET_COLOR:
        return { ...state, color: payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return { ...state, colorDispatch: dispatch, CUSTOMIZE_ACTIONS };
}
