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
        {!isList ? `Render` : `Remove`} List component
      </button>
      {isList && <List setIsList={setIsList} />}
    </>
  );
}