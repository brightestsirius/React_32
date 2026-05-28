import { useRef, useState } from "react";
import "./style.sass";
import useCounter from "../../hooks/useCounter";

export default function Counter() {
  const [isInc, setIsInc] = useState(false);
  const { state, dispatch, createAction, COUNTER_ACTIONS } = useCounter();
  const inputRef = useRef();
  const intId = useRef();

  const addValue = () => {
    const value = +inputRef.current.value;
    dispatch(createAction(COUNTER_ACTIONS.ADD, value));
    inputRef.current.value = ``;
  };

  const startInc = () => {
    setIsInc(true);
    intId.current = setInterval(() => {
      dispatch(createAction(COUNTER_ACTIONS.INCREMENT));
    }, 1000);
  };

  const stopInc = () => {
    clearInterval(intId.current);
    setIsInc(false);
  };

  return (
    <div className="counter">
      <button onClick={() => dispatch(createAction(COUNTER_ACTIONS.DECREMENT))}>
        -
      </button>
      <span>{state.counter}</span>
      <button onClick={() => dispatch(createAction(COUNTER_ACTIONS.INCREMENT))}>
        +
      </button>
      <input type="number" ref={inputRef} onBlur={addValue} />
      <button onClick={() => (!isInc ? startInc() : stopInc())}>
        {!isInc ? `Start` : `Stop`} increment
      </button>
    </div>
  );
}
