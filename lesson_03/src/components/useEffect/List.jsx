import { useState, useEffect } from "react";

// 🔄🟢🟡🔴

export default function List({setIsList}) {
  console.log(`🔄 rerender List`);
  const [list, setList] = useState([`cat`, `dog`, `lion`, `tiger`]);
  const [color, setColor] = useState(`#165456`);
  const [user, setUser] = useState({
    position: `React dev`,
    email: `react@gmail.com`,
  });

  useEffect(() => {
    console.log(`🟢 Open WebSocket`);

    return () => {
      console.log(`🔴 Close WebSocket`);
    };
  }, []);

  useEffect(() => {
    if (list.length === 1) setColor(`#abcdef`);
    if (color === `#abcdef`) console.log(`🟡 last item in list`);
  }, [list, color]);

  useEffect(() => {
    console.log(`🟢 Start connection with`, user.email);

    return () => {
      console.log(`🔴 Close connection with`, user.email);
    };
  }, [user.email]);

  useEffect(() => {
    if(!list.length) setTimeout(()=>{
        setIsList(false);
    }, 3000)
  }, [list.length])

  const removeItem = (index) => {
    setList((prevState) => prevState.filter((_, i) => i !== index));
  };

  return list.length ? (
    <div
      style={{ border: `1px dashed black`, margin: `10px`, padding: `10px` }}
    >
      <button onClick={() => setIsList(false)}>Close component</button>
      <ul style={{ color }}>
        {list.map((item, index) => (
          <li key={item}>
            {item} <button onClick={() => removeItem(index)}>Remove</button>
          </li>
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
    </div>
  ) : null;
}
