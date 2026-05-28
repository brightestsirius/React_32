import { memo, useContext } from "react";
import { TodosContext } from "../../contexts/TodosContext";
import { actionCreator } from "../../store/actionCreator";

export default memo(function TodosCustomize() {
  const { color, colorDispatch, CUSTOMIZE_ACTIONS } = useContext(TodosContext);

  return (
    <label>
      Select color:{" "}
      <input
        type="color"
        value={color}
        onChange={(e) =>
          colorDispatch(
            actionCreator(CUSTOMIZE_ACTIONS.SET_COLOR, e.target.value),
          )
        }
      />
    </label>
  );
});
