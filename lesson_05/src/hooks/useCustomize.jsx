import { useState } from "react";

export default function useCustomize() {
  const [color, setColor] = useState(`#123456`);

  return { color, setColor };
}