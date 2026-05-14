import { useState, useRef } from "react";
import "./style.sass";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState(`#000000`);

  const [isEncreasing, setIsEncreasing] = useState(false);

  const colorInputRef = useRef();
  const intervalId = useRef();

  const decrement = () => {
    setCounter((prevState) => prevState - 1);
  };

  const increment = () => {
    setCounter((prevState) => prevState + 1);
  };

  const startEncreasing = () => {
    setIsEncreasing(true);
    intervalId.current = setInterval(() => {
      setCounter((prevState) => prevState + 1);
    }, 1000);
  };

  const stopEncreasing = () => {
    setIsEncreasing(false);
    clearInterval(intervalId.current);
  };

  const handleSetColor = () => {
    setColor(colorInputRef.current.value);
  };

  return (
    <div className="counter">
      <button onClick={decrement}>-</button>
      <span style={{ color }}>{counter}</span>
      <button onClick={increment}>+</button>
      <input
        type="color"
        value={color}
        onChange={handleSetColor}
        ref={colorInputRef}
      />
      <button onClick={isEncreasing ? stopEncreasing : startEncreasing}>
        {isEncreasing ? `Stop` : `Start`} encreasing
      </button>
    </div>
  );
}
