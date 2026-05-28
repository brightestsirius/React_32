import { useReducer } from "react";

export default function useCounter() {
  const COUNTER_ACTIONS = {
    DECREMENT: `DECREMENT`,
    INCREMENT: `INCREMENT`,
    ADD: `ADD`,
  };

  const createAction = (type, payload) => ({ type, payload });

  const initialState = {
    counter: 0,
  };

  const reducer = (state, { type, payload }) => {
    switch (type) {
      case COUNTER_ACTIONS.DECREMENT:
        return { ...state, counter: state.counter - 1 };
      case COUNTER_ACTIONS.INCREMENT:
        return { ...state, counter: state.counter + 1 };
      case COUNTER_ACTIONS.ADD:
        return { ...state, counter: state.counter + payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return { state, dispatch, createAction, COUNTER_ACTIONS };
}
