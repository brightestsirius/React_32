import { useState } from "react";
import Books from "./components/Books/Books";
import List from "./components/useEffect/List";

export default function App() {
  const [isList, setIsList] = useState(true);

  return (
    <>
      <Books />
      <hr />
      <button onClick={() => setIsList((prevState) => !prevState)}>
        {!isList ? `Show` : `Remove`} List Component
      </button>
      {isList && <List closeComponent={() => setIsList(false)} />}
    </>
  );
}
