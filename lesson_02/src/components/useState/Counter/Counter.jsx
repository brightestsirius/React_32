import { useState } from "react";
import "./style.sass";

export default function Counter({ backgroundColor }) {
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState(`#243526`);

  const [user, setUser] = useState({
    position: `React dev`,
    skills: [`React`, `Java`],
    isAdmin: true,
  });

  const decrement = () => {
    setCounter((prevState) => prevState - 1);
  };

  const increment = () => {
    setCounter((prevState) => prevState + 1);
  };

  const handleUserPosition = () => {
    const newPosition = prompt(`Enter new position`, user.position);
    setUser((prevState) => ({ ...prevState, position: newPosition }));
  };

  return (
    <>
      <div className="counter">
        <button onClick={decrement}>-</button>
        <span style={{ color, backgroundColor }}>{counter}</span>
        <button onClick={increment}>+</button>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>

      <ul>
        {Object.entries(user).map(([key, value]) => (
          <li key={key}>
            {key}: {Array.isArray(value) ? value.join(`, `) : String(value)}
          </li>
        ))}
      </ul>
      <button onClick={handleUserPosition}>Change position</button>
    </>
  );
}
