import { useState, useEffect, useRef } from "react";

// 🔄🟢🟡🔴

export default function List({ closeComponent }) {
  const [list, setList] = useState([`cat`, `dog`, `lion`, `tiger`, `parrot`]);
  const [color, setColor] = useState(`#656778`);
  const [user, setUser] = useState({
    position: `React dev`,
    email: `reactdev@gmail.com`,
  });
  const [isRemoving, setIsRemoving] = useState(false);
  const intervalId = useRef();

  useEffect(() => {
    console.log(`🟢 mount`);

    return () => {
      console.log(`🔴 unmount`);
      intervalId.current && clearInterval(intervalId.current);
    };
  }, []);

  useEffect(() => {
    console.log(`🟢 Start connection with`, user.email);

    return () => {
      console.log(`🔴 Stop connection with`, user.email);
    };
  }, [user.email]);

  useEffect(() => {
    if (!list.length) {
      intervalId.current && clearInterval(intervalId.current);
      setIsRemoving(false);
    }
  }, [list]);

  const removeItems = () => {
    intervalId.current = setInterval(() => {
      console.log(`in interval`);
      setList((prevState) => prevState.slice(0, -1));
    }, 1000);

    setIsRemoving(true);
  };

  const stopRemoveItems = () => {
    clearInterval(intervalId.current);
    setIsRemoving(false);
  };

  return list.length ? (
    <div
      style={{ border: `1px dashed black`, padding: `10px`, margin: `10px` }}
    >
      <button onClick={closeComponent}>Close component</button>
      <ul style={{ color }}>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <hr />
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <hr />
      <input
        type="email"
        defaultValue={user.email}
        onBlur={(e) =>
          setUser((prevState) => ({ ...prevState, email: e.target.value }))
        }
      />
      <hr />
      <button onClick={!isRemoving ? removeItems : stopRemoveItems}>
        {!isRemoving ? `Start` : `Stop`} removing
      </button>
    </div>
  ) : null;
}
