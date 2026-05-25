import { memo } from "react";

export default memo(function TodoListCustomize({ color, setColor }) {
  console.log(`🔄 in TodoListCustomize`);
  return (
    <label>
      Select color:{" "}
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </label>
  );
});
