import { memo } from "react";

export default memo(function TodosCustomize({ color, setColor }) {
  console.log(`🔄 in TodosCustomize`);
  return (
    <label>
      Select color:{" "}
      <input
        type="color"
        color={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </label>
  );
});
