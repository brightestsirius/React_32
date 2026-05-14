import { useState, useRef } from "react";
import "./style.sass";

export default function Counter() {
  console.log(`🔄 in Counter component`);

  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState(`#526374`);

  const [isEncreasing, setIsEncreasing] = useState(false);
  const intervalId = useRef();

  const inputColorRef = useRef();

  const dec = () => {
    setCounter((prevState) => prevState - 1);
  };

  const inc = () => {
    setCounter((prevState) => prevState + 1);
  };

  const addValue = () => {
    const value = +prompt(`Enter value`, 10);
    setCounter((prevState) => prevState + value);
  };

  const startEncreasing = () => {
    intervalId.current = setInterval(() => {
      setCounter((prevState) => prevState + 1);
    }, 1000);

    setIsEncreasing(true);
  };

  const stopEncreasing = () => {
    setIsEncreasing(false);
    clearInterval(intervalId.current);
  };

  const handleSetColor = () => {
    setColor(inputColorRef.current.value);
  };

  return (
    <div className="counter">
      <button onClick={dec}>-</button>
      <span style={{ color }}>{counter}</span>
      <button onClick={inc}>+</button>
      <input
        type="color"
        value={color}
        onChange={handleSetColor}
        ref={inputColorRef}
      />
      <button onClick={addValue}>Add value</button>
      <button onClick={isEncreasing ? stopEncreasing : startEncreasing}>
        {isEncreasing ? `Stop` : `Start`} encreaing
      </button>
    </div>
  );
}
