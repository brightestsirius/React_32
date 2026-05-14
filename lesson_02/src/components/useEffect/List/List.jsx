import { useState, useEffect, useRef } from "react";
import { nanoid } from "nanoid";

// 🔄🟢🟡🔴

export default function List({ removeComponent }) {
  const [list, setList] = useState(() =>
    [`React`, `Java`, `Angular`].map((item) => ({
      id: nanoid(),
      item,
    })),
  );
  const [color, setColor] = useState(`#626374`);
  const [isRemoving, setIsRemoving] = useState(false);

  const intervalId = useRef();
  const listColor = list.length === 1 ? `#883746` : color;

  console.log(`🔄 in List Component`);

  useEffect(() => {
    console.log(`🟢 Start WebSocket...`);

    return () => {
      clearInterval(intervalId.current);
      console.log(`🔴 Stop WebSocket...`);
    };
  }, []);

  useEffect(() => {
    if (!list.length) {
      clearInterval(intervalId.current);
      removeComponent(false);
    }
  }, [list.length, removeComponent]);

  const removeItem = (id) => {
    setList((prevState) => prevState.filter((item) => item.id !== id));
  };

  const startRemoving = () => {
    setIsRemoving(true);
    intervalId.current = setInterval(() => {
      console.log(`in interval`);
      setList((prevState) => prevState.slice(0, -1));
    }, 1000);
  };

  const stopRemoving = () => {
    clearInterval(intervalId.current);
    setIsRemoving(false);
  };

  return list.length ? (
    <>
      <ul style={{ color: listColor }}>
        {list.map(({ id, item }) => (
          <li key={id}>
            {item} <button onClick={() => removeItem(id)}>Remove</button>
          </li>
        ))}
      </ul>
      <input
        type="color"
        value={listColor}
        onChange={(e) => setColor(e.target.value)}
      />{" "}
      <button onClick={!isRemoving ? startRemoving : stopRemoving}>
        {!isRemoving ? `Start` : `Stop`} removing
      </button>
    </>
  ) : null;
}
