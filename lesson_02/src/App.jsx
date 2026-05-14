import { useState } from "react";
import List from "./components/useEffect/List/List";

export default function App() {
  const [isListComponent, setIsListComponent] = useState(true);

  return (
    <>
      <button onClick={() => setIsListComponent((prevState) => !prevState)}>
        {!isListComponent ? `Show` : `Remove`} List Component
      </button>
      {isListComponent && <List removeComponent={setIsListComponent} />}
    </>
  );
}
